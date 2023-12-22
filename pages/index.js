import Search from "./../components/Search";

export default function Home() {
  return (
    <div>
      <h1 className='text-5xl text-center p-5 bg-black text-white'>Expression Atlas of ASD Risk genes</h1>

      <div className='mt-10 text-3xl text-center'>

        Page <span className='bg-[#F8E0C8] p-3'> Expression Atlas of ASD Risk genes</span>
      </div>

      <Search></Search>

    </div>
  )
}
