---
title: First Responder - {{ date | date('day', 'Monday') | date('MMM Do') }}
---

First Responder Week {{ date | date('day', 'Monday') | date('YYYY-MM-DD') }} to {{ env.ONCALL_END_DATE }}
