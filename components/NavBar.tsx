import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Image from 'next/image'

function ScrollToTop() {
  const [atTop, setTop] = useState(true)
  useEffect(() => {
    function onScroll() {
      setTop(window.scrollY <= 0)
    }
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return atTop
}

const NavBar = () => {
  const router = useRouter()
  const isTop = ScrollToTop()

  return (
    <>
      <div
        className={`fixed  left-0 right-0 top-0 z-40 ${
          isTop ? 'border-none bg-white' : 'border-b border-gray-200 bg-gray-100 shadow-sm'
        }`}
      >
        <div className={`mx-auto flex h-[60px] items-center justify-between px-5 sm:px-10`}>
          <a className="flex items-center justify-between gap-2" href="#home">
            <Image src="/logo2.jpeg" height={60} width={60} alt="logo" />
            <span className="font-bold sm:block hidden">Capware LLC</span>
          </a>
          <div className="flex items-center leading-5">
            <div className="hidden space-x-3 sm:block">
              <div className="flex w-full items-center justify-center">
                <div className="flex justify-between gap-10 text-base">
                  <a href="#services" className="flex">
                    Services
                  </a>
                  <a href="#expertise" className="flex">
                    Expertise
                  </a>
                  <a href="#projects" className="flex">
                    Projects
                  </a>
                  <a href="#contact" className="flex">
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <MobileNav />
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar

export const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <div className="sm:hidden">
      <button
        type="button"
        className="h-6 w-6 rounded"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className=""
        >
          {navShow ? (
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          )}
        </svg>
      </button>
      <div
        className={`fixed left-0 right-0 top-0 mt-[60px] w-full transform border-t border-gray-200 bg-white/[0.97] duration-300 ease-in-out supports-[height:100dvh]:h-[calc(100dvh-60px)] dark:border-gray-800 dark:bg-gray-900/[0.98] ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          type="button"
          aria-label="toggle modal"
          className="fixed h-full w-full cursor-auto focus:outline-none"
          onClick={onToggleNav}
        ></button>
        <nav className="fixed mt-8 h-full space-y-4 px-6" onClick={onToggleNav}>
          <a href="#services" className="flex">
            Services
          </a>
          <a href="#expertise" className="flex">
            Expertise
          </a>
          <a href="#projects" className="flex">
            Projects
          </a>
          <a href="#contact" className="flex">
            Contact
          </a>
        </nav>
      </div>
    </div>
  )
}
