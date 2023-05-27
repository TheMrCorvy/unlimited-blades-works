import Image from 'next/image'
import Modal from '../components/Modal'
import unlimited from '../../public/unlimited.jpg'

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24 relative"
    >
      <Image
        priority
        src={unlimited}
        alt="Shirou from Fate Stay Night"
        fill
        style={{ objectPosition: 'center', objectFit: 'cover' }}
      />
      <Modal />
    </main>
  )
}
