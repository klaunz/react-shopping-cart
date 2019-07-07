# VR-FrontendTest-v1.1

## Objective

Write a basic shopping cart in Javascript or Typescript, utilising React ​or​ React Native and in both cases Redux. Please see below for role specific variations.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements

- [x] The cart will need to keep its state during page loads / refreshes.
- [x] List Products – these should be listed at all times to allow adding of products.
- [x] Products should be listed in this format: product name, price, link to add product
- [x] Must be able to add a product to the cart.
- [x] Must be able to view current products in the cart.
- [x] Cart products should be listed in this format: product name, price, quantity, total, remove link.
- [x] Product totals should be tallied to give an overall total.
- [x] Must be able to remove a product from the cart.
- [x] Adding an existing product will only update existing cart product quantity (e.g. adding the same product twice will NOT create two cart items).
- [x] All prices should be displayed to 2 decimal places.
- [x] Error checking will be set to strict for viewing completed code.
- [x] Project will work as expected with the latest version of React.
- [x] Use best practices.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run format`

Parses and re-prints your code to enforce a consistent style.

## Project Structure

```
.
├── node_modules.................dependent node packages
├── public.......................html and static assets
│   ├── favicon.ico..............favicons and app icons
│   ├── index.html...............the index file for development build only
│   └── manifest.json............the web app manifest
├── src..........................main source code folder
│   ├── api......................api folder to fetch products
│   ├── components...............react components
│   ├── actions..................Mocking client-server processing
│   ├── containers...............React app containers for components
│   └── reducers.................redux reducers
├── .gitignore...................git ignore
├── README.md....................the file you are reading
├── package-lock.json............depencency lock
├── .eslintrc.json...............eslint configurations
└── package.json.................package meta info
```
