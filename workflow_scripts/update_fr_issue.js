// File: workflow_scripts/update_fr_issue.js
// const PagerDuty = require('node-pagerduty')

module.exports = async ({github, core}) => {
  try {
    const pagerDutyToken = process.env.PAGERDUTY_TOKEN
    const teamIds = process.env.TEAM_IDS.split(',').map(id => id.trim())
    const repoOwner = process.env.REPO_OWNER
    const repoName = process.env.REPO_NAME
    const frLabel = process.env.FR_LABEL

    // Initialize PagerDuty client
    const pd = new PagerDuty(pagerDutyToken)

    // Calculate time window (10 minutes ago to now)
    const now = new Date()
    const tenMinutesAgo = new Date(now.getTime() - 10 * 60 * 1000).toISOString()

    core.info(`Fetching incidents since ${tenMinutesAgo} for team IDs: ${teamIds.join(', ')}`)

    // Fetch incidents from PagerDuty
    const incidentsResponse = await pd.incidents.listIncidents({
      since: tenMinutesAgo,
      team_ids: teamIds,
      urgency: ['high'],
    })

    const incidents = incidentsResponse.incidents.map(incident => ({
      title: incident.title,
      url: incident.html_url,
    }))


    core.info(`Found ${incidents.length} new high-urgency incidents`)

async function getIncidentsSince() {
  const now = new Date()
  const tenMinutesAgo = new Date(now.getTime() - 10 * 60 * 1000).toISOString() // 10 minutes in the past
  const incidents = await pd.incidents.listIncidents({
    since: tenMinutesAgo,
    team_ids: ['P0AWF24'], //todo: move this to workflow file and pass in as a parameter
    urgency: ['high'],
  })

  return incidents.incidents.map(incident => ({
    title: incident.title,
    url: incident.html_url,
  }))
}


    if (incidents.length === 0) {
      core.info('No new incidents to report.')
      return
    }

    // Find the open FR issue
    const {data: issues} = await github.rest.issues.listForRepo({
      owner: repoOwner,
      repo: repoName,
      labels: frLabel,
      state: 'open',
    })

    const frIssue = issues.find(issue => issue.title.startsWith('FR Tracking'))

    if (!frIssue) {
      core.warning('No open FR issue found to update.')
      return
    }

    core.info(`Updating FR issue #${frIssue.number}`)

    // Prepare the comment body
    const incidentList = incidents.map(incident => `- [${incident.title}](${incident.url})`).join('\n')
    const commentBody = `### New Incidents:\n${incidentList}`

    // Create a comment on the FR issue
    await github.rest.issues.createComment({
      owner: repoOwner,
      repo: repoName,
      issue_number: frIssue.number,
      body: commentBody,
    })

    core.info('Successfully updated the FR issue with new incidents.')
  } catch (error) {
    core.setFailed(`Error updating FR issue: ${error.message}`)
  }
}