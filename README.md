This project is built on the __epsilon-base__ scaffold, which is architected to simplify the build of site templates using a componentized approach. It is intended for easier hand-off of code for implementation into a content management system like Adobe AEM or Sitecore.

- [Partials and Includes](#partials-and-includes)
- [Workflow](#workflow)
- [Project Structure](#project-structure)

## Partials and Includes

One of the major advantages of this scaffold is that it supports building partial HTML files that can be included in other HTML files. This can reduce the amount of duplicate code that you need to maintain during development.

Here is an example of how includes work.

###### Master File (app/\_templates/\_masters/index.html)

In this file, partials are being included for the site header and footer. Note that you can inject variables into partials.

```html
@@include('app/_templates/_partials/header.html', {
	"pageTitle" : "My Page Title"
})

<div>
	<p>Page content goes here.</p>
</div>

@@include('app/_templates/_partials/footer.html')
```


###### Partial File (app/\_templates/\_partials/header.html)

In this file, the injected variable is being referenced as `@@pageTitle`.

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>@@pageTitle</title>
</head>
<body>
```

When the project's build task is run, it will find all referenced includes and build a single compiled HTML file.

File includes are supported by the [gulp-file-include](https://www.npmjs.com/package/gulp-file-include) plugin.

__If__ statements are also supported and can be implemented as follows:

```html
@@include('app/_templates/_partials/nav.html', {
	"selectNav": "products"
})
```

###### app/\_templates/\_partials/nav.html

```html
<ul>
	<li><a href="/" @@if (selectNav == "home") { class="selected"}>Home</a></li>
	<li><a href="/products" @@if (selectNav == "products") { class="selected"}>Products</a></li>
	<li><a href="/about" @@if (selectNav == "about") { class="selected"}>About</a></li>
</ul>
```


## Workflow

All files that you want to have generated as compiled HTML should be added to the `app/_templates/_masters` folder. Any files that will be included as partials should be saved to `app/_templates/_partials`.

This project uses [Gulp](http://gulpjs.com/) to run build and other tasks. These are the most important commands that are available to you:


### Workflow Commands

	gulp serve

Runs a local instance of the site with BrowserSync to automatically refresh the page as you make updates.

	gulp build

Builds a compiled version of the site into the `dist/` folder. Concatenates and minifies all files for delivery.

	gulp prepdeploy

Builds a compiled version of the site into the `appengine/static` folder for deploy to App Engine. You will need to run `gulp build` before running this command. Use this for internal staging purposes only.

	gulp clean

Removes the `dist/` folder.

	gulp lint

Runs linter to look for errors and warnings in your Javascript code. Lint is also included as part of the `gulp build` task, but this command lets you run the linter on its own. The linter will validate using the rules in the `.eslintrc` file in this project.

	gulp serve:test

Runs unit tests.


## Project Structure

##### app/\_templates/\_masters/

HTML files that should be generated as compiled pages should be added here.

##### app/\_templates/\_partials/

HTML files intended for use only as file includes should be added here.

##### app/scripts/

Javascript files should be added here.

##### app/styles/

SCSS code should be added here.

##### appengine/app.yaml

This is the configuration file needed to deploy to App Engine. Import this file into the [Google App Engine SDK](https://cloud.google.com/appengine/downloads) (use the version for Python).

##### appengine/static/

Files in this folder will be deployed to App Engine. Build files into this folder using the `gulp prepdeploy` command.

##### dist/

Files are compiled and copied into this folder when running `gulp build`.

##### test/

Unit tests should be added here. Run unit tests with `gulp serve:test`.

##### .babelrc

Babel config settings for compiling Javascript.

##### .bowerrc

Configures path to `bower_components` folder.

##### .editorconfig

Config settings for IDEs with lint plugins.

##### .eslintrc

Rules configuration for the Javascript linter.

##### gulpfile.js

Task runner configuration. You can add or modify the gulp commands here.
