<template>
  <div :class="todo.complete == true ? 'todo-complete' : 'todo'">
    <div class="actions">
      <h3 @click="toggleDetails">{{ todo.title }}</h3>
      <div class="icons">
        <router-link :to="{ name: 'EditTodo', params: { id: todo.id } }">
          <span class="material-icons">edit</span>
        </router-link>
        <span class="material-icons" @click="deleteProject">delete</span>
        <span
          @click="toggleComplete"
          :class="
            todo.complete == true
              ? 'complete material-icons tick'
              : 'material-icons tick'
          "
          >done</span
        >
      </div>
    </div>

    <div v-if="showDetails">
      <p>{{ todo.details }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { projectFirestore } from "../firebase/config";

export default {
  props: ["todo"],

  setup(props, context) {
    const showDetails = ref(false);

    const toggleDetails = () => {
      showDetails.value = !showDetails.value;
    };

    const deleteProject = () => {
      fetch("https://stiedl-fake-server.herokuapp.com/todos/" + props.todo.id, {
        method: "DELETE",
      })
        .then(() => context.emit("delete", props.todo.id))
        .catch((error) => console.log(error.message));
    };

    const toggleComplete = () => {
      fetch("https://stiedl-fake-server.herokuapp.com/todos/" + props.todo.id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ complete: !props.todo.complete }),
      })
        .then(() => {
          context.emit("complete", props.todo.id);
        })
        .catch((error) => console.log(error));
    };

    return { showDetails, toggleDetails, deleteProject, toggleComplete };
  },
};
</script>

<style>
.todo-complete {
  border-left: 4px solid #00ce89;
  transition: 0.3s;
}

.todo {
  border-left: 4px solid crimson;
  transition: 0.3s;
}

h3 {
  cursor: pointer;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: #888;
}

.complete {
  color: #00ce89;
}
</style>