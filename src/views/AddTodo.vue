<template>
<transition name="add" tag="div" appear>
    <form @submit.prevent="handleSubmit">
    <label>Ttitle:</label>
    <input type="text" required v-model="title" />
    <label>Details:</label>
    <textarea reqired v-model="details"></textarea>
    <button class="btn btn-outline-dark button fw-bolder">Add Project</button>
  </form>
</transition>

</template>

<script>
import { ref } from "@vue/reactivity";
import { projectFirestore } from '../firebase/config';
import { useRouter } from "vue-router";


export default {
 
  setup() {
    const title = ref("");
    const details = ref("");
    const complete = ref("");

    const router = useRouter();

    const handleSubmit = async () =>{
      const todo ={
        title: title.value,
        details: details.value,
        complete: false
      }

   /*    //firebase
      const res = await projectFirestore.collection('todos').add(todo)
 */
        /* Normal fetch from server/api  */
         await fetch("https://stiedl-fake-server.herokuapp.com/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo), 
      });
     router.push({ name: "Home" });
    };




   
    return { title, details, complete,  handleSubmit }
  }
};
</script>

<style scoped>
form {
  width: 50%;
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 4px 6px 8px rgba(1, 0, 0, 0.5);
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}

  button {
  margin-top: 5px;
  align-items: center;
  background-color: teal;
  border: 2px solid #111;
  box-sizing: border-box;
  color: white;
  display: flex;
  font-size: 0.9rem;
  height: 48px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  transition: 0.3s;
}

button:hover{

  background-color: rgb(236, 208, 114);
  color: black;
  transition: ease-in-out 0.3s;

}


/*Transitions*/
.add-enter-from {
  opacity: 0;
 transform: translate(-100%);
}
.add-enter-to {
  opacity: 1;
  transform: translate(0);
}

.add-enter-active {
  transition: all 0.7s ease;
}
</style>