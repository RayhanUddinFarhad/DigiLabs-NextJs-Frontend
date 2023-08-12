import Image from 'next/image'
import Banner from './components/Banner'
import Features from './components/Features'

export default function Home() {
  return (
    <main className='space-y-16'>
     <Banner></Banner>
     <Features></Features>
    </main>
  )
}
