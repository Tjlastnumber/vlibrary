<template>
  <select :disabled="disabled"
          @input="selectChanged($event.target.selectedIndex)">
    <slot>
      <option v-for="(item, index) in options"
              :key="index"
              :disabled="item[optionDisabled]">
        {{ item[optionText] }}
      </option>
    </slot>
  </select>
</template>

<script>
export default {
  name: 'VlSelect',
  model: {
    prop: 'selected',
    event: 'selectChanged'
  },
  props: {
    selected: [ String, Object ],
    options: { type: Array },
    optionText: {
      type: String,
      default () {
        return 'text'
      }
    },
    optionValue: {
      type: String,
      default () {
        return 'value'
      }
    },
    optionDisabled: {
      type: String,
      default () {
        return 'disabled'
      }
    },
    disabled: { type: Boolean, default () { return false } }
  },
  computed: {
  },
  methods: {
    selectChanged (index) {
      this.$emit('selectChanged', this.options[index][this.optionValue])
    }
  }
}
</script>

<style src="./VlSelect.css"></style>


