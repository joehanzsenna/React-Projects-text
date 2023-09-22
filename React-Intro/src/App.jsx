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


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Section1/>
      <Section2/>

      <Fridge/>
      <ProductList/>
      <FormRegistration/>

      <Product/>
    </div>

  )
}

export default App
