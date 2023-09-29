import './App.css'
import FormValidation from './Components/Form/FormValidation'
import Hero from './Components/Homepage/Hero/Hero'
import Section2 from './Components/Homepage/Section2/Section2'
import TryCatchApi from './Components/Hooks/TryCatchApi'
import UseEffect from './Components/Hooks/UseEffect'
import UseRef from './Components/Hooks/UseRef'
// import Usestate from './Components/Hooks/Usestate'

function App() {


  return (
    <div>
      <FormValidation/>
      <Hero/>
      <TryCatchApi/>
      <UseRef/>
      <UseEffect/>
      {/* <Usestate/> */}
    </div>
  )
}

export default App


