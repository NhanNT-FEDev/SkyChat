<template>
	<span>
		<input :type="type" v-on:input="textChanged" :class="classes" />
		<span class="error" v-if="hasError">{{ errorMsg }}</span>
	</span>
</template>

<script>
export default {
  name: 'text-input',
  methods: {
    textChanged (evt) {
      this.$emit('input', evt.target.value)
    }
  },
  computed: {
    classes () {
      return {
        error: this.hasError
      }
    }
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    hasError: {
      type: Boolean,
      default: false
    },
    errorMsg: String
  }
}
</script>

<style scoped>
	input {
		border: none;
		border-bottom: 1px solid #e0e0e1;
		padding: 0px 0px 5px 0;
		width: 100%;
		font-size: 14px;
		outline: none;
	}

	input.error {
		border-bottom: 1px solid red;
	}

	span.error {
		color: red;
	}
</style>