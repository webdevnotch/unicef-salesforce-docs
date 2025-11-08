import { h } from 'vue'
import Theme from 'vitepress/theme'
import './custom.css'

export default {
  ...Theme,
  // You can add custom components here if needed
  // Layout() {
  //   return h(Theme.Layout, null, {
  //     // Custom slots can be added here
  //   })
  // }
}

