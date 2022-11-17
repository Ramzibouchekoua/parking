export { default as Parking } from '../..\\components\\Parking.vue'
export { default as SomeSeo } from '../..\\components\\SomeSeo.vue'
export { default as BestPrices } from '../..\\components\\BestPrices\\BestPrices.vue'
export { default as BestPricesParking } from '../..\\components\\BestPrices\\BestPricesParking.vue'
export { default as HeaderBrand } from '../..\\components\\Header\\Brand.vue'
export { default as HeaderChoseLanguage } from '../..\\components\\Header\\ChoseLanguage.vue'
export { default as Header } from '../..\\components\\Header\\index.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
