<template lang="pug">
  .button-section
    button.button(@click="event") {{name}}
</template>
<script>
export default {
  name: 'ButtonComponent',
  props: {
    clickEvent: {
      type: Function,
      default: () => {
        return null;
      }
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    event() {
      this.clickEvent();
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
