import About from '../components/About';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <body className='bg-black min-h-screen text-white '>
      <div className='max-w-7xl mx-auto'>
        <Navbar />
        <About />
      </div>
    </body>
  )
}
