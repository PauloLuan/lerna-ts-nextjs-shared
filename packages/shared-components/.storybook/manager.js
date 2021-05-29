import { create } from '@storybook/theming'
import { addons } from '@storybook/addons'

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'TS storybook starter'
  })
})
