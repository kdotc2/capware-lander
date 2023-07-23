import Contact from '@/components/Contact'
import Expertise from '@/components/Expertise'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="mx-auto px-8">
        <button className="fixed bottom-4 right-4 rounded-md bg-blue-500 px-3 py-2 text-sm font-medium text-white shadow-lg">
          Book Consultation
        </button>
        <div
          className="mx-auto flex h-screen flex-col items-center justify-center space-y-6"
          id="home"
        >
          <div className="flex flex-col items-center gap-0 sm:flex-row sm:gap-20">
            <Image src="/logo1.jpeg" height={200} width={200} alt="logo" />
            <div className="prose flex max-w-[400px] pt-10 sm:pt-0">
              {`Capware is a Los Angeles based software studio. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.`}
            </div>
          </div>
        </div>
        <div className="space-y-40 pb-40 ">
          <Services />

          <Expertise />

          <Projects />

          <Contact />
        </div>
      </div>
    </main>
  )
}
