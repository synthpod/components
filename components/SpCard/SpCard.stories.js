import { storiesOf } from '@storybook/vue'
import SpCard from './SpCard'

storiesOf('Components|SpCard', module).add('Default', () => ({
  components: { SpCard },
  template: `
      <sp-card heading="Testing heading" text="And some text of course">
    `
}))
