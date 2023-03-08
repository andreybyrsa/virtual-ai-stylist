import Button from '@Components/Button'
import Icon from '@Components/Icon'
import Typography from '@Components/Typography'

import PageLayout from '@Layouts/PageLayout'

function DevPage() {
  return (
    <PageLayout contentClassName="dev-page">
      <Typography variant="title-t2-semiBold">Dev Page</Typography>
      <Icon
        iconName="house"
        color="color-icon-correct"
        size={40}
        viewBox={45}
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
    </PageLayout>
  )
}

export default DevPage
