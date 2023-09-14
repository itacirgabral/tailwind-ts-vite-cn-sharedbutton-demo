
import Button from '@/Button'

function App() {
  return (
    <>
      <Button className='m-2' primary>olá mundo</Button>
      <Button className='m-2' secondary>olá mundo</Button>
      <br />
      <Button className='m-2' primary outline>olá mundo</Button>
      <Button className='m-2' secondary outline onClick={() => console.log('secondary outline')}>olá mundo</Button>
    </>
  )
}

export default App
