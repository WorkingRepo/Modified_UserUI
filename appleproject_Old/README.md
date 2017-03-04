This is a template application that includes [React](https://facebook.github.io/react/), [Bootstrap](http://getbootstrap.com) and [FontAwesome](http://fontawesome.io/icons/).

### Clone this repository

Clone this repository, replacing `my-app` with the name of your application.

```
git clone git@github.geo.apple.com:neutron-edu/fx-template-app.git my-app
cd my-app/
```

### Remove the origin

In git, the origin is an alias for the remote repository from which we cloned. Remove the origin, since we don't want to update the `fx-template-app` repository!

```
git remote rm origin
```

To check that the origin was removed:

```
git remote -v
```

### Rename the application

Update `package.json` with the name of your application. Name your application whatever you used instead of `my-app`.

```
npm init
```

Update `<title>` in [./public/index.html](./public/index.html) to be something like "My App".

Replace the [README](./README.md).

### Create a new repository on Github

Create a new repository on [github.geo.apple.com](https://github.geo.apple.com/new). Name your repository whatever you used instead of `my-app`.

### Push your repository to Github

Push your repository to `github.geo.apple.com`, replacing with your username and the name of your application.

```
git remote add origin git@github.geo.apple.com:theo/my-app.git
git push -u origin master
```

### Install dependencies

Install dependencies (e.g., React) since their sources are not saved with your application in source control.

```
npm install
```

This installs the dependencies specified in [./package.json](./package.json). If you peek in `./node_modules`, you'll see a whole lot of stuff. That's because your dependencies have dependencies, and so on.

### Run your application

```
npm start
```

The application should now be running in your browser at [http://localhost:8080/](http://localhost:8080/). It'll automatically be refreshed when you make code changes. Change something in [App.js](./src/App.js) to see this in action.
