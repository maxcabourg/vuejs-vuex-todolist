<template>
  <b-card>
    <b-card-text>{{ todo.content }}</b-card-text>
    <div class="d-flex align-items-center">
      <b-form-checkbox
        v-model="todo.completed"
        name="check-button"
        class="pointer"
        switch
        @change="$emit('change', todo)"
      ></b-form-checkbox>
      <b-icon
        icon="trash-fill"
        variant="danger"
        font-scale="1.5"
        class="pointer"
        @click="$emit('delete', todo)"
      ></b-icon>
    </div>
  </b-card>
</template>

<script>
export default {
  name: 'Todo',
  props: ['todo'],
};
</script>

<style scoped>
.trash {
  cursor: pointer;
}
</style>
