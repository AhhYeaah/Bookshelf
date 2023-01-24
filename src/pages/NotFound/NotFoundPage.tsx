import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../../components/Icon/Icon'
import { PrimaryButton } from '../../components/PrimaryButton/PrimaryButton'
import './NotFoundPage.css'

export function NotFoundPage() {
  const places = ['forest', 'dungeon', 'place']

  return (
    <div className="w-screen h-screen flex-center overflow-hidden">
      <div className="grid grid-cols-5 grid-rows-3 lg:grid-rows-2 w-3/5 h-auto gap-4">
        <div className="justify-self-center place-self-end lg:place-self-start lg:justify-self-end px-2 row-start-1 col-start-3 lg:col-start-1">
          <span className="text-6xl text-blue-800">404</span>
        </div>
        <div className="col-span-5 lg:col-span-4 row-start-2 lg:row-start-1 px-2 border-l-4 mb-4 text-center lg:text-left ">
          <h1 className="text-xl lg:text-4xl mb-4">
            After playing with a group of kids, you reach into your pocket and notices that your map is gone
          </h1>
          <span className="text-slate-500 text-sm lg:text-base">Those damn kids...</span>
        </div>
        <div className="col-start-1 lg:col-start-2 col-span-5 lg:col-span-4 row-start-3 lg:row-start-2 justify-self-center lg:justify-self-start flex flex-col lg:flex-row">
          <div className="mr-0 lg:mr-5 lg:ml-9 mb-4 lg:mb-0">
            <Link to={'/'}>
              <PrimaryButton>
                <Icon icon={faArrowLeftLong} className="mr-2" />
                Go back to home
              </PrimaryButton>
            </Link>
          </div>
          <div className="text-center flex flex-col">
            <Link to={'/contact'}>
              <PrimaryButton className="bg-blue-100 text-blue-600 hover:bg-blue-200">Call for help</PrimaryButton>
            </Link>
            <span className="text-xs text-slate-400 pt-1">*Contact support</span>
          </div>
        </div>
      </div>
    </div>
  )
}
