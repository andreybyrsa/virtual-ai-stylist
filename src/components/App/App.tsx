import Button from '@Components/Button'
import Icon from '@Components/Icon'
import Typography from '@Components/Typography'

import './App.scss'

function App() {
  return (
    <div className="App">
      <Typography
        variant="title-t2-semiBold"
        color="color-text-tertiary"
      >
        Typography
      </Typography>
      <Icon
        iconName="check"
        color="color-icon-correct"
        size={50}
      />
      <Button type="secondary">хуй</Button>
    </div>
  )
}
export default App
