import { useState } from 'react'

import Icon from '@Components/Icon'
import TextField from '@Components/Inputs/TextField'
import Typography from '@Components/Typography'

import PageLayout from '@Layouts/PageLayout'

function DevPage() {
  const [textValue, setTextValue] = useState<string>('')
  return (
    <PageLayout contentClassName="dev-page">
      <Typography variant="title-t2-semiBold">Dev Page</Typography>
      <Icon
        iconName="check"
        color="color-icon-correct"
        size={40}
      />
      <TextField
        value={textValue}
        setValue={setTextValue}
      />
    </PageLayout>
  )
}

export default DevPage
