import { useState } from 'react'

import Button from '@Components/Button'
import Icon from '@Components/Icon'
import TextField from '@Components/Inputs/TextField'
import Typography from '@Components/Typography'

import PageLayout from '@Layouts/PageLayout'

import './DevPage.scss'

function DevPage() {
  const [textValue1, setTextValue1] = useState<string>('')
  const [textValue2, setTextValue2] = useState<string>('')

  return (
    <PageLayout contentClassName="dev-page">
      <Typography variant="title-t2-semiBold">Dev Page</Typography>
      <Icon
        iconName="check"
        color="color-icon-correct"
        size={40}
      />
      <Button type="primary" />
      <Button type="secondary" />
      <Button
        disabled
        type="primary"
      />
      <Button
        disabled
        type="secondary"
      />
      <TextField
        label="Text"
        value={textValue1}
        setValue={setTextValue1}
      />
      <TextField
        label="Required"
        value={textValue2}
        setValue={setTextValue2}
        required
      />
    </PageLayout>
  )
}

export default DevPage
