import React from 'react'
import { Link } from 'react-router-dom'

import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

import { PrimaryButton } from '../../components/PrimaryButton/PrimaryButton'
import { Navbar } from './Navbar/Navbar'
import { Icon } from '../../components/Icon/Icon'

export function LandingPage() {
  return (
    <>
      <Navbar></Navbar>
      <main className="h-auto py-10 lg:py-0 lg:h-screen bg-blue-100">
        <section className=" h-3/4 flex justify-center items-center flex-row ">
          <div className="container flex-between flex-col lg:flex-row p-4">
            <div className="w-2/3 lg:w-1/3 mb-20 lg:mb-0">
              <h2 className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl mb-5 text-slate-600">
                Create your world <br /> Keep your change
              </h2>
              <p className="text-base text-justify font-extralight">
                As this would be a lorem ipsulun text, i might aswell use it. This site is just a clone for studying, I
                have no intention using this for comercial purposes. The image here on the right side and the logo is
                from a site called
                <a className="link text-cyan-700" href="https://mrpg.app">
                  mrpg.app
                </a>
                They have a really cool project about making an chat app excluively for tabletop rpg players. Its realy
                awesome and you should check it out. I do not own any of the images, all rights to him.
              </p>
              <div className="w-full flex justify-end ">
                <Link to={'/auth/cadastro'}>
                  <PrimaryButton className="mt-5">
                    <span>Cadastre-se agora</span> <Icon icon={faArrowRightLong} className="ml-2" />
                  </PrimaryButton>
                </Link>
              </div>
            </div>
            <img src="https://mrpg.app/assets/img/hero-img.png" className="w-4/5 h-4/5 sm:w-3/5 sm:h-3/5 " alt="" />
          </div>
        </section>
      </main>
    </>
  )
}
