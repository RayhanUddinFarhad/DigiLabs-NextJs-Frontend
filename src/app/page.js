import Image from 'next/image'
import Banner from './components/Banner'
import Features from './components/Features'
import ProductFeatures from './components/ProductFeatures'
import ProductFeatures2 from './components/ProductFeatures2'
import Testimonal from './components/Testimonal'
import Blogs from './components/Blogs'
import Trusteby from './components/Trusteby'
import CallToAction from './components/CallToAction'

export default function Home() {
  return (
    <main className='space-y-16'>
     <Banner></Banner>
     <Features></Features>
     <ProductFeatures></ProductFeatures>
     <ProductFeatures2></ProductFeatures2>
     <Testimonal></Testimonal>
     <Blogs></Blogs>
     <Trusteby></Trusteby>
     <CallToAction></CallToAction>
    </main>
  )
}
