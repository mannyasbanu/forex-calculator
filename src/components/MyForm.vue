<template>
  <!-- Template section: defines the UI layout -->
  <div>
    <!-- Interpolates the value of 'name'; Vue automatically unwraps ref() values here -->
    <p>{{ name }}</p>

    <!-- Input field with:
         - ref="el" for accessing the raw DOM element
         - v-model to two-way bind input value to the reactive 'name' ref -->
    <input ref="el" type="text" placeholder="Name" v-model="name" />
  </div>

  <div>
    <!-- Button triggers submitForm when clicked
         - :disabled binds the disabled attribute to whether name is empty -->
    <button @click="submitForm" :disabled="name.length === 0">
      Submit
    </button>
  </div>
</template>

<script>
  // Import Vue's Composition API tools:
  // - ref: makes a reactive reference to a value
  // - onMounted: lifecycle hook, runs after the component is mounted into the DOM
  import { ref, onMounted } from 'vue'

  export default {
    // setup() runs before the component is created.
    // It replaces data(), methods, and computed in Vue 2's Options API.
    setup() {
      // name is a reactive reference initialized as an empty string
      const name = ref('')

      // el will hold a reference to the input DOM element
      const el = ref()

      // Function to run when the user submits the form
      const submitForm = () => {
        // In JS, you must use .value to access the actual value of a ref
        console.log(`Form submitted using name: ${name.value}`);
      }

      // This will log undefined, because DOM is not ready yet
      console.log('Before mount:', el.value)

      // onMounted lifecycle hook: runs after the template is attached to the DOM
      onMounted(() => {
        console.log('After mount:', el.value) // logs the actual <input> element
        el.value.focus() // focuses the input automatically on load
      })

      // Returning variables/methods makes them accessible in the template
      return {
        name,       // reactive input value
        submitForm, // form submission logic
        el,         // ref to input DOM element
      }
    },
  }
</script>

<style>
  /* Style section (default is global unless <style scoped>) */

  /* Style the input box */
  input[type='text'] {
    padding: 5px;
    border-radius: 5px;
    border-width: 1px;
    border-color: lightgrey;
  }

  /* Style the button with spacing */
  button {
    margin-top: 20px;
  }
</style>