import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { DetailForm } from './modules/shop/detailForm'
import { Form } from './modules/location/form'
import { ShopIndex } from './modules/shop'
import { LocationIndex } from './modules/location'
function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/shops" element={<ShopIndex />}></Route>
                <Route exact path="/shops/create"  element={<DetailForm />}></Route>
                <Route exact path='/locations' element={<LocationIndex/>}></Route>
                <Route path="/locations/create" element={<Form />}></Route>
            </Routes>
        </>
    )
}

export default App
