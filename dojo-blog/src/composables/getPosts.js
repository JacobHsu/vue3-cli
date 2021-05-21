import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getPosts = () => {

  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      // https://console.firebase.google.com/u/0/project/vue3-cli/firestore/data~2Fposts~2FJloT7dFbo4z21TRJJyQm
      const res = await projectFirestore.collection('posts').get()
      // console.log(res.docs)

      posts.value = res.docs.map(doc => {
        // console.log(doc.data()) // 0: e __proto__: t  data: ƒ (t)
        return { ...doc.data(), id: doc.id }
      })

      // let data = await fetch('http://localhost:3000/posts')
      // if(!data.ok) {
      //   throw Error('no available data')
      // }
      // posts.value = await data.json()
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { posts, error, load }
}

export default getPosts