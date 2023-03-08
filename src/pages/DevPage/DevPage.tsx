import Button from '@Components/Button'
import Icon from '@Components/Icon'
import NumberField from '@Components/Inputs/NumberField'
import PhoneField from '@Components/Inputs/PhoneField'
import TextField from '@Components/Inputs/TextField'
import NavigationSideBar from '@Components/NavigationComponents/NavigationSideBar'
import Typography from '@Components/Typography'

import Footer from '@Layouts/Footer'
import PageLayout from '@Layouts/PageLayout'

import './DevPage.scss'

function DevPage() {
  return (
    <PageLayout
      contentClassName="dev-page"
      footer={
        <Footer isNavigation>
          <NavigationSideBar />
        </Footer>
      }
    >
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
      <TextField
        label="Text"
        minLength={5}
        maxLength={10}
      />
      <TextField
        label="Required"
        required
      />
      <NumberField
        label="Number"
        required
      />
      <PhoneField
        label="Phone"
        required
      />
    </PageLayout>
  )
}

export default DevPage
