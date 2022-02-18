import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'


const getSingle = (id) =>{
    const todo = ref(null)
    const error = ref(null)

    const load = async () => {
      try {

        let res = await projectFirestore.collection('todos').doc(id).get()
       // console.log(res.data())

       if(!res.exists){
         throw Error('That todo doe not eixst')
       }

        todo.value = { ...res.data(), id: res.id }
      
        /* 
        let data = await fetch("http://localhost:3000/posts/" + id)
        if (!data.ok) {
          throw Error("no data available");
        }
        post.value = await data.json(); */
      } catch (err) {
        error.value = err.message;
      }
    }
    return{todo, error, load}

}

export default getSingle


