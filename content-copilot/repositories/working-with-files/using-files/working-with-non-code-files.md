# Working with non-code files

GitHub supports rendering and diffing in a number of non-code file formats.

## Rendering and diffing images

GitHub can display several common image formats, including PNG, JPG, GIF, PSD, and SVG. In addition to simply displaying them, there are several ways to compare differences between versions of those image formats.

<div class="ghd-spotlight ghd-spotlight-note border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note:**
- GitHub does not support comparing the differences between PSD files.
- If you are using the Firefox browser, SVGs on GitHub may not render.

</div>

### Viewing images

You can directly browse and view images in your repository on GitHub.com.

SVGs don't currently support inline scripting or animation.

### Viewing differences

You can visually compare images in three different modes: [2-up](#2-up), [swipe](#swipe), and [onion skin](#onion-skin).

#### 2-up

**2-up** is the default mode; it gives you a quick glimpse of both images. In addition, if the image has changed size between versions, the actual dimension change is displayed. This should make it very apparent when things are resized, such as when assets are upgraded to higher resolutions.

![Screenshot of a diff for an image in 2-up mode. The image on the right is outlined in green and larger than the image on the left, which is outlined in red.](/assets/images/help/repository/images-2up-view.png)

#### Swipe

**Swipe** lets you view portions of your image side by side. Not sure if colors shifted between different versions? Drag the swipe slider over the area in question and compare the pixels for yourself.

![Screenshot of a diff for an image in swipe mode. A line down the center divides the image into new, outlined in green, and old, outlined in red.](/assets/images/help/repository/images-swipe-view.png)

#### Onion skin

**Onion Skin** really comes in handy when elements move around by small, hard to notice amounts. Did an icon shift two pixels to the left? Drag the opacity slider back a bit and notice if things move around.

## 3D File Viewer

GitHub can host and render 3D files with the _.stl_ extension.

When looking directly at an STL file on GitHub you can:

- Click and drag to spin the model.
- Right click and drag to translate the view.
- Scroll to zoom in and out.
- Click the different view modes to change the view.

### Fixing slow performance

If you see <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-info" aria-label="the info icon" role="img"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg> in the corner of the viewer, with the tooltip "WebGL powered hardware support not available," then the WebGL technology is not available on your browser.

WebGL is necessary to take advantage of your computer's hardware to its fullest. We recommend you try browsers like [Chrome](https://www.google.com/intl/en/chrome/browser/) or [Firefox](https://www.mozilla.org/en-US/firefox/new/), which ship with WebGL enabled.

### Error: "Unable to display"

If your model is invalid, GitHub may not be able to display the file. In addition, files that are larger than 10 MB are too big for GitHub to display.

### Embedding your model elsewhere

To display your 3D file elsewhere on the internet, modify this template and place it on any HTML page that supports JavaScript:

```html
<script src="https://embed.github.com/view/3d/<username>/<repo>/<ref>/<path_to_file>"></script>
```

For example, if your model's URL is [`github.com/skalnik/secret-bear-clip/blob/master/stl/clip.stl`](https://github.com/skalnik/secret-bear-clip/blob/master/stl/clip.stl), your embed code would be:

```html
<script src="https://embed.github.com/view/3d/skalnik/secret-bear-clip/master/stl/clip.stl"></script>
```

By default, the embedded renderer is 420 pixels wide by 620 pixels high, but you can customize the output by passing height and width variables as parameters at the end of the URL, such as `?height=300&width=500`.

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: `ref` can be a branch or the hash to an individual commit (like `2391ae`).

</div>

## Rendering CSV and TSV data

GitHub supports rendering tabular data in the form of _.csv_ (comma-separated) and ._tsv_ (tab-separated) files.

![Screenshot of a rendered CSV file, with data shown in a table format.](/assets/images/help/repository/rendered-csv.png)

When viewed, any _.csv_ or _.tsv_ file committed to a repository on GitHub.com automatically renders as an interactive table, complete with headers and row numbering. By default, we'll always assume the first row is your header row.

You can link to a particular row by clicking the row number, or select multiple rows by holding down the shift key. Just copy the URL and send it to a friend.

### Searching data

If you want to find a certain value in your dataset, you can start typing in the search bar directly above the file. The rows will filter automatically.

### Handling errors

Occasionally, you may discover that your CSV or TSV file isn't rendering. In those instances, a message appears above your raw text, suggesting what the error may be.

![Screenshot of a text view of a CSV file. In the header, a message points out an error: "No commas found in this CSV file in line 0."](/assets/images/help/repository/csv-render-error.png)

Common errors include:

- Mismatched column counts. You must have the same number of separators in each row, even if the cell is blank
- Exceeding the file size. Our rendering only works for files up to 512KB. Anything bigger than that slows down the browser.
- Using unsupported delimiters, such as semicolons instead of commas.

## Rendering PDF documents

GitHub supports rendering of PDF documents.

Currently, links within PDFs are ignored.

## Rendering differences in prose documents

Commits and pull requests that include prose documents have the ability to represent those documents with _source_ and _rendered_ views.

The source view shows the raw text that has been typed, while the rendered
view shows how that text would look once it's rendered on GitHub. For example,
this might be the difference between showing `**bold**` in Markdown, and **bold** in the rendered view.

Prose rendering is supported for rendered documents supported by [github/markup](https://github.com/github/markup):

- Markdown
- AsciiDoc
- Textile
- ReStructuredText
- Rdoc
- Org
- Creole
- MediaWiki
- Pod

To see the changes made to the document as part of a commit, click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-file" aria-label="Display the rich diff" role="img"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg>.

![Screenshot of the diff for a Markdown file. In the header of the file, a file icon is outlined in dark orange.](/assets/images/help/repository/rendered-prose-diff.png)

This "rich diff" highlights the code that has been added and removed.

![Screenshot of the diff for a Markdown file. "@octo-org/core" is struck through, with a red background, followed by "@octocat", with a green background.](/assets/images/help/repository/rendered-prose-changes.png)

### Disabling Markdown rendering

When viewing a Markdown file, you can click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-code" aria-label="The code icon" role="img"><path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path></svg> at the top of the file to disable Markdown rendering and view the file's source instead.

  ![Screenshot of a Markdown file in a GitHub repository showing options for interacting with the file. The button to display the source blob is outlined in dark orange.](/assets/images/help/writing/display-markdown-as-source.png)

Disabling Markdown rendering enables you to use source view features, such as line linking, which is not possible when viewing rendered Markdown files.

### Visualizing attribute changes

We provide a tooltip
describing changes to attributes that, unlike words, would not otherwise be visible in the rendered document. For example, if a link URL changes from one website to
another, we'd show a tooltip like this:

![Screenshot of the diff for a Markdown file. A tooltip over a link says "href: /octo-org-repo/blob/CONTRIBUTING -> /octo-org/octo-repo/blob/docs/CONTRIBUTING."](/assets/images/help/repository/prose-diff-attributes.png)

### Commenting on changes

[Commit comments](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request) can only
be added to files within the _source_ view, on a line-by-line basis.

### Linking to headers

As with [other rendered prose documents](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes),
hovering over a header in your document creates a link icon. You can link readers
of your rendered prose diff to specific sections.

### Viewing complex diffs

Some pull requests involve a large number of changes with large, complex documents. When the changes take too long to analyze, GitHub can't always produce a rendered view of the changes. If this happens, you'll see an error message when you click the rendered button.

You can still use the source view to analyze and comment on changes.

### Viewing HTML elements

We don't directly support rendered views of commits to HTML documents. Some formats, such as Markdown, let you embed arbitrary HTML in a document. When these documents are shown on GitHub, some of that embedded HTML can be shown in a preview, while some (like an embedded YouTube video) cannot.

In general, rendered views of changes to a document containing embedded HTML will show changes to the elements that are supported in GitHub's view of the document. Changes to documents containing embedded HTML should always be reviewed in both the rendered and source views for completeness.

## Mapping GeoJSON/TopoJSON files on GitHub

GitHub supports rendering GeoJSON and TopoJSON map files within GitHub repositories. Commit the file as you would normally using a `.geojson` or `.topojson` extension. Files with a `.json` extension are also supported, but only if `type` is set to `FeatureCollection`, `GeometryCollection`, or `topology`. Then, navigate to the path of the GeoJSON/TopoJSON file on GitHub.

### Geometry types

Maps on GitHub use [Leaflet.js](http://leafletjs.com) and support all the geometry types outlined in [the geoJSON spec](http://www.geojson.org/geojson-spec.html) (Point, LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon, and GeometryCollection). TopoJSON files should be type "Topology" and adhere to the [TopoJSON spec](https://github.com/mbostock/topojson/wiki/Specification).

### Embedding your map elsewhere

Want to make your GeoJSON map available someplace other than GitHub? Simply modify this template, and place it in any HTML page that supports JavaScript (for example, [GitHub Pages](https://pages.github.com)):

```html
<script src="https://embed.github.com/view/geojson/<username>/<repo>/<ref>/<path_to_file>"></script>
```

For example, if your map's URL is [github.com/benbalter/dc-wifi-social/blob/master/bars.geojson](https://github.com/benbalter/dc-wifi-social/blob/master/bars.geojson), your embed code would be:

```html
<script src="https://embed.github.com/view/geojson/benbalter/dc-wifi-social/master/bars.geojson"></script>
```

By default, the embedded map 420px x 620px, but you can customize the output by passing height and width variables as parameters at the end, such as `?height=300&width=500`.

<div class="ghd-spotlight ghd-spotlight-tip border rounded-1 my-3 p-3 f5 color-border-accent-emphasis color-bg-accent">

**Note**: `ref` can be a branch or the hash to an individual commit (like `2391ae`).

</div>

### Clustering

If your map contains a large number of markers (roughly over 750), GitHub will automatically cluster nearby markers at higher zoom levels. Simply click the cluster or zoom in to see individual markers.

### Something's up with the underlying map

The underlying map data (street names, roads, etc.) are driven by [OpenStreetMap](http://www.openstreetmap.org/), a collaborative project to create a free editable map of the world. If you notice something's not quite right, since it's open source, simply [sign up](https://www.openstreetmap.org/user/new) and submit a fix.

### Troubleshooting GeoJSON/TopoJSON files

If you're having trouble rendering GeoJSON files, ensure you have a valid GeoJSON file by running it through a [GeoJSON linter](http://geojsonlint.com/). If your points aren't appearing where you'd expect (for example, in the middle of the ocean), it's likely that the data is in a projection which is currently unsupported. Currently, GitHub only supports the `urn:ogc:def:crs:OGC:1.3:CRS84` projection.

Additionally, if your `.geojson` file is especially large (over 10 MB), it is not possible to render within the browser. If that's the case, you'll generally see a message that says we can't show files that large.

It may still be possible to render the data by converting the `.geojson` file to [TopoJSON](https://github.com/mbostock/topojson), a compression format that, in some cases, can reduce filesize by up to 80%. Of course, you can always break the file into smaller chunks (such as by state or by year), and store the data as multiple files within the repository.

### Further reading about GeoJSON/TopoJSON

- [Azure Maps documentation](https://docs.microsoft.com/en-us/azure/azure-maps/)
- [TopoJSON Wiki](https://github.com/mbostock/topojson/wiki)

## Working with Jupyter Notebook files on GitHub

When you add Jupyter Notebook or IPython Notebook files with a _.ipynb_ extension on GitHub.com, they will render as static HTML files in your repository.

The interactive features of the notebook, such as custom JavaScript plots, will not work in your repository on GitHub.com. For an example, see [_Linking and Interactions.ipynb_](https://github.com/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb).

To view your Jupyter notebook with JavaScript content rendered or to share your notebook files with others you can use [nbviewer](https://nbviewer.jupyter.org/). For an example, see [_Linking and Interactions.ipynb_](https://nbviewer.jupyter.org/github/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb) rendered on nbviewer.

To view a fully interactive version of your Jupyter Notebook, you can set up a notebook server locally. For more information, see [Jupyter's official documentation](http://jupyter.readthedocs.io/en/latest/index.html).

### Troubleshooting Jupyter Notebook files

If you're having trouble rendering Jupyter Notebook files in static HTML, you can convert the file locally on the command line by using the [`nbconvert` command](https://github.com/jupyter/nbconvert):

```shell
jupyter nbconvert --to html NOTEBOOK-NAME.ipynb
```

### Further reading about Jupyter Notebook

- [Jupyter Notebook's GitHub repository](https://github.com/jupyter/jupyter_notebook)
- [Gallery of Jupyter Notebooks](https://github.com/jupyter/jupyter/wiki)
