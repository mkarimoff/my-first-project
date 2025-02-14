import {  Route, Routes } from 'react-router-dom'
import HomeComponent from './components/pages/home/home'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import AboutComponent from './components/pages/about/about'
import BlogsComponent from './components/pages/blogs/blogs'
import ShopComponent from './components/pages/shop/shop'
import PagesComponet from './components/pages/pages/pages'
import FeaturedComponet from './components/pages/featured/featured'
import ContactComponent from './components/pages/contact/contact'
import CollectionComponent from './components/pages/home/collection'


const RouterComponent = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element= {<HomeComponent/>}/>
        <Route path='/about' element= {<AboutComponent/>}/>
        <Route path='/shop' element= {<ShopComponent/>}/>
        <Route path='/pages' element= {<PagesComponet/>}/>
        <Route path='/blog' element= {<BlogsComponent/>}/>
        <Route path='/featured' element= {<FeaturedComponet/>}/>
        <Route path='/contact' element= {<ContactComponent/>}/>
        <Route path='/collection' element= {<CollectionComponent/>}/>
    </Routes>
    <Footer/>
    </>
  )
}
export default RouterComponent