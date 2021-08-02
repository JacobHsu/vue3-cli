# muso-ninjas

## Firebase init

=== Project Setup

? Please select an option: Use an existing project
? Select a default Firebase project for this directory: music-playlist-a4b4c (music-playlist)
i  Using project music-playlist-a4b4c (music-playlist)

=== Firestore Setup

? What file should be used for Firestore Rules? `firestore.rules`  
? What file should be used for Firestore indexes? `firestore.indexes.json`  

=== Hosting Setup

? What do you want to use as your public directory? `dist`  
? Configure as a single-page app (rewrite all urls to /index.html)? `Yes`  
? Set up automatic builds and deploys with GitHub? `No`  
+  Wrote dist/index.html  

=== Storage Setup

? What file should be used for Storage Rules? storage.rules  
+  Wrote storage.rules

## Firebase

`firebase deploy --only firestore:rules`

firestore.rules
```js
    match /playlists/{docId} {
      allow read, write, create: if request.auth != null;
      allow delete, update: if request.auth.uid == resource.data.userId;
    }
```

`<button v-if="ownership" @click="handleDelete">Delete Playlist</button>`  
`<button  @click="handleDelete">Delete Playlist</button>`

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
