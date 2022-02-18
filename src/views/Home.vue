<template>
  <div class="home">
    <FilterNav @filterChange="current = $event" :current="current" />
    <div v-if="todos.length" class="todos">
      <transition-group id="todos" tag="div" name="list" appear>
        <div v-for="todo in filteredTodos" :key="todo.id">
          <SingleProject
            class="todo-all"
            :todo="todo"
            @delete="handleDelete"
            @complete="handleComplete"
          />
        </div>
      </transition-group>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>
      
           

<script>
import SingleProject from "../components/SingleProject.vue";
import FilterNav from "../components/FilterNav.vue";
import Spinner from "../components/Spinner.vue";

import { computed, ref } from "vue";
import getTodo from "../composables/getTodo";

export default {
  components: { SingleProject, FilterNav, Spinner },

  setup() {
    let current = ref("all");
    const showP = ref(false);

    const { todos, error, load } = getTodo();
    load();

    /*     const handleComplete = id =>{
      let to = todos.value.find(todo =>{
        return todo.id === id
      })
      to.complete = !to.complete
    }
 */

    const handleDelete = (id) => {
      todos.value = todos.value.filter((todo) => {
        return todo.id !== id;
      });
    };

    const handleComplete = (id) => {
      let to = todos.value.find((todo) => {
        return todo.id === id;
      });
      to.complete = !to.complete;
    };

    const filteredTodos = computed(() => {
      if (current.value === "completed") {
        return todos.value.filter((todo) => todo.complete);
      }
      if (current.value === "ongoing") {
        return todos.value.filter((todo) => !todo.complete);
      }
      return todos.value;
    });

    return {
      todos,
      error,
      current,
      showP,
      handleDelete,
      handleComplete,
      filteredTodos,
    };
  },
};
</script>

<style >
.home {
  position: relative;
}

.todos {

}

.todo-all {
  width: 50%;
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 4px 6px 8px rgba(1, 0, 0, 0.5);
  position: relative;
  display: block;
}

/*Tansitions*/

.list-enter-from {
  opacity: 0;
  transform: translate(-100%);
}
.list-enter-to {
  opacity: 1;
  transform: translate(0);
}

.list-enter-active {
  transition: all 0.7s ease;
}
.list-leave-from {
  opacity: 1;
}
.list-leave-to {
  opacity: 0;
}

.list-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.7s ease;
}

.list-move {
  transition: all 0.3s ease;
}
</style>
