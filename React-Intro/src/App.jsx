import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Fridge from './Components/Fridge'
import ProductList from './Components/ProductProps/Product'
import FormRegistration from './Components/Form/FormRegistration'
import Product from './Components/Api-Fetching/Product'
import Index from './Components/Events-Onclick-Usestate/Index'
import RandomApi from './Components/Api-Fetching/RandomApi'
import UseReference from './Components/Api-Fetching/UseReference'
import TryCatch from './Components/Api-Fetching/TryCatch'
import AnotherTryCatch from './Components/Api-Fetching/AnotherTryCatch'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='container'>
      {/* <TryCatch/> */}
      {/* <AnotherTryCatch/> */}
      <FormRegistration/>
      {/* <Section1/> */}
      {/* <Section2/> */}

      {/* <Fridge/> */}

      <RandomApi/>
      <ProductList/>
      <Index/>

      {/* <Product/> */}
      <UseReference/>

    </div>

  )
}

export default App
