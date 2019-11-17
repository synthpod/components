import { storiesOf } from '@storybook/vue'
import SpTitle from './SpTitle'

storiesOf('SpTitle', module).add('Default', () => ({
  components: { SpTitle },
  template: `<sp-title as="h1">testing uppercase</sp-title>`
}))
