---
id: contribute
title: Contribute
description: 'How to contribute to this repo'
---

This website is built using Docusaurus 2, a modern static website generator. If you're interested in contributing to either the documentation or the codebase itself then you are at the right place. This page is split up into 3 segments that are focused on getting you started with contributing:

>
+ **[Minor Suggestions](#minor-suggestions):** changes to the contents of the pages, whether it be spelling mistakes, corrections or any other additional information. Requires a Github account.
+ **[Major Suggestions](#major-suggestions):** major changes to this website, starting from adding new pages, to changing the layout/styles and other HTML elements. Requires you to run a local version of the website.
+ **[Build & Deploy](#build-and-deploy):** information on how to build and deploy this repository to a hosting solution.
---

## Minor Suggestions
At the end of each article the link "Edit this page" is displayed. Clicking on it will take you to the public Github repository of that particular page. From there on you can submit any of the changes you've made.

---
## Major Suggestions
This website is built using the [Docusaurus 2](https://v2.docusaurus.io/) framework, which is a modern static website generator. For any additional guidance to get the maximum out of the framework, please visit their website. Anyhow, the below contents should provide all sufficient information needed.

#### Prerequisites
+ You have to be on Node >= 8.x.

#### Getting Started
Clone this repo, and then run `npm install` to install all dependencies. Populate and rename `.sample.env` with Argola keys if you are interested in working with the search engine, else you can skip this step.

#### Run the software
Run `npm run start`. This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

---

### How do I add a subpage?
Use any of the .md files within the `~root/docs` section as an example/blueprint for your own page. Once you are ready edit the `~root/sidebars.js` file and add the subpage reference there. That's it.

---

### How do I create custom pages outside of /docs?
Duplicate the `~root/src/pages/index.js` file and place it in the same directory, rename it however you like. That's it. Done! Your page is immediately accessible at `http://localhost:3000/your_page`. For this basic knowledge of React.js is required.


If you have any suggestions to the documentation, feel free to contribute! This page is split up into two segments that are focused on getting you started with contributing:
>
+ **[Minor Suggestions](#minor-suggestions):** changes to the contents of the pages, whether it be spelling mistakes, corrections or any other additional information. Requires a Github account.
+ **[Major Suggestions](#major-suggestions):** major changes to this website, starting from adding new pages, to changing the layout/styles and other HTML elements. Requires you to run a local version of the website.

---
## Minor Suggestions
At the end of each article the link "Edit this page" is displayed. Clicking on it will take you to the public Github repository of that particular page. From there on you can submit any of the changes you've made.

---
## Major Suggestions
This website is built using the [Docusaurus 2](https://v2.docusaurus.io/) framework, which is a modern static website generator. For any additional guidance to get the maximum out of the framework, please visit their website. Anyhow, the below contents should provide all sufficient information needed.

#### Prerequisites
+ You have to be on Node >= 8.x.

#### Getting Started
Clone this repo, and then run `npm install` to install all dependencies. Populate and rename `.sample.env` with Argola keys if you are interested in working with the search engine, else you can skip this step.

#### Run the software
Run `npm run start`. This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

---
## Build and Deploy
If you wish to learn more about build/dist and deployment to production please visit this website: https://v2.docusaurus.io/docs/deployment/ for specific information.

---

### How do I add a subpage?
Use any of the .md files within the `~root/docs` section as an example/blueprint for your own page. Once you are ready edit the `~root/sidebars.js` file and add the subpage reference there. That's it.

---

### How do I create custom pages outside of /docs?
Duplicate the `~root/src/pages/index.js` file and place it in the same directory, rename it however you like. That's it. Done! Your page is immediately accessible at `http://localhost:3000/your_page`. In order to do this, basic knowledge of ReactJS is required.
