import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <h1>hello world</h1>
      <button><Link href="/users">Users pages</Link></button>
      <ProductCard/>
    </main>
  )
}
