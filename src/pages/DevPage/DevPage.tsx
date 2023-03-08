import Button from '@Components/Button'
import Icon from '@Components/Icon'
import TextField from '@Components/Inputs/TextField'
import Typography from '@Components/Typography'

import PageLayout from '@Layouts/PageLayout'

import './DevPage.scss'

function DevPage() {
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
        minLength={5}
        maxLength={10}
      />
      <TextField
        label="Required"
        required
      />
    </PageLayout>
  )
}

export default DevPage
