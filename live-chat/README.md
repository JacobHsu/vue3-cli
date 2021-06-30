# live-chat

建構 > [Authentication](https://console.firebase.google.com/u/0/project/vue3-cli/authentication/providers) > 電子郵件 / 密碼 > 啟用

[date-fns](https://www.npmjs.com/package/date-fns) provides the most comprehensive, yet simple and consistent toolset
for manipulating JavaScript dates in a browser & Node.js.

`npm i firebase-tools -g`

? What do you want to use as your public directory? `dist`  
? Configure as a single-page app (rewrite all urls to /index.html)? `Yes`  
? Set up automatic builds and deploys with GitHub? `No`  
? File dist/index.html already exists. Overwrite? `Yes`  
+  Wrote dist/index.html  

firebase.json

## firebase

建構 > Firestore Database > Cloud Firestore > tag 規則

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if
          request.time < timestamp.date(2021, 11, 17);
    }
  }
}
```
firestore.rules

`firebase deploy --only firestore.rules`

firebase.json

```js
  "firestore": {
    "rules": "firestore.rules",
    "indexes": "firestore.indexes.json"
  },
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
