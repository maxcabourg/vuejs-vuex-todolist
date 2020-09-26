<template>
  <b-form inline @submit.prevent="onSubmit">
    <b-input
      type="text"
      v-model="text"
      placeholder="Ajouter une tache..."
      class="mr-2"
    ></b-input>
    <b-button variant="success" type="submit" :disabled="text.length === 0"
      >Ajouter !</b-button
    >
  </b-form>
</template>

<script>
export default {
  name: 'AddTodo',
  data() {
    return {
      text: '',
    };
  },
  methods: {
    onSubmit() {
      this.$emit('submit', this.text);
      this.text = '';
    },
  },
};
</script>

<style scoped></style>
