# react-redux

React template with basic logic and Redux on custom webpack builder

### Github-hosting

- [react-redux](https://evgenyleukhin.github.io/react-redux/) - This repo


### Fix dev-node error

Error: ENOSPC: System limit for number of file watchers reached, watch '/home/foldername/abcrypto/static'

[link for details](https://github.com/gatsbyjs/gatsby/issues/11406)

```echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p```

### Features progress

* Custom webpack config +++
* Routing in react app +++
* Login and Logout +++
* Folder managment +++
* Bootstrap 4, reactstrap +++
* Work with some API (without Redux) +++
* Layout components +++
* react-sidebar +++


* Work with data (CRUD) +++
* Show some data-list +++
* react-table +++
* Redux integration +++

---

// utils - перебросить в routes +++
// структура папок как react-app +++
// browser-sync +++
// API url - delete subUrl +++
// рефакторинг SIdebar +++
// redux test убрать +++
// Proble with profiles list +++
// eslint +++
// react-modal - console errors +++
// proptypes +++

// columns.js - proptypes warn ---
// 404 design ---
// fix favicons prod problem ---
// isEmpty no use - use ?: logic or optional chaining ---
// dot env NODE.env ---
// redux reset store ---

// reducer - хранить в store или внутри компонентов
// api - поддиректории 
// path profile/add - change routing
// location.reload
// Firebase API
// react-select
// react-device-detect
