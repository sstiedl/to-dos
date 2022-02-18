import { ref } from "vue"
import { projectFirestore } from '../firebase/config'

const getTodos = () =>{

    const todos = ref([])
    const error = ref('')
    
    

const load = async () =>{
       try{

        //firebase "fetch"
       /*      const res = await projectFirestore.collection('todos')
            .get()

            todos.value = res.docs.map(doc =>{
                return{...doc.data(), id: doc.id}
            })
 */
            
         /* Normal fetch from server/api */
             let data = await fetch('https://stiedl-fake-server.herokuapp.com/todos')
            if(!data.ok){
                console.log(data)
                throw Error('no available data')
                
            } 
            todos.value = await data.json() 

        }catch(err){
            error.value = err.message
            console.log(error.value)
        }
    } 
   
return { todos, error, load}


}

export default getTodos