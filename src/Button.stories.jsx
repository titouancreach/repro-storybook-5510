import React from 'react'
import {Button} from './Button'
import {storiesOf} from '@storybook/react'

storiesOf('Button', module)
  .add('with text', () => <Button onClick={() => void 0}>Hello Button</Button>)
