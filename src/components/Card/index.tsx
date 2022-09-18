import Image from 'next/future/image'
import * as Dialog from '@radix-ui/react-dialog'
import { ModalImage } from '../Modal/ModalImage'
import { IPhotos } from '../../styles/types'

export function Card({ id, sol, img_src, earth_date, camera, rover }: IPhotos) {
  return (
    <div>
      <div
        className="flex flex-col bg-zinc-100 w-[21rem] 
     border border-solid border-gray-200 rounded-xl items-start 
     justify-center overflow-hidden"
      >
        <figure className="flex justify-center items-center mb-6 w-[21rem] h-[13.18rem] ">
          <Image src={img_src} alt="" width={400} height={250} />
        </figure>
        <div className="w-full px-6 pb-9">
          <div className="border-b-2 border-gray-200 py-3">
            <h1>
              Sol: <span className="text-gray-800">{sol}</span>
            </h1>
            <h1>
              Photo Nº: <span className="text-gray-800">{id}</span>
            </h1>
            <h2>
              Earth date: <span className="text-gray-800">{earth_date}</span>
            </h2>
          </div>

          <div className="border-b-2 border-gray-200 py-3">
            <strong className="text-lg text-blue-700">
              Camera information
            </strong>
            <h2>
              ID Nº: <span className="text-gray-800">{camera.id}</span>
            </h2>
            <h2>
              Name: <span className="text-gray-800">{camera.name}</span>
            </h2>
            <h2>
              Rover ID Nº:{' '}
              <span className="text-gray-800">{camera.rover_id}</span>
            </h2>
            <h2>
              Full Name:{' '}
              <span className="text-gray-800">{camera.full_name}</span>
            </h2>
          </div>

          <div className="pt-3">
            <strong className="text-lg text-blue-700">Rover information</strong>
            <h1 className="text-blue-900">
              ID Nº: <span className="text-gray-800">{rover.id}</span>
            </h1>
            <h1>
              Name: <span className="text-gray-800">{rover.name}</span>
            </h1>
            <h1>
              Launch date:{' '}
              <span className="text-gray-800">{rover.launch_date}</span>
            </h1>
            <h1>
              Landing date:{' '}
              <span className="text-gray-800">{rover.landing_date}</span>
            </h1>
            <h1>
              Status: <span className="text-gray-800">{rover.status}</span>
            </h1>
          </div>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="bg-blue-600 w-full py-3 rounded-xl text-white mt-[18px] text-sm hover:bg-blue-700">
                View Image
              </button>
            </Dialog.Trigger>
            <ModalImage
              id={id}
              img_src={img_src}
              sol={sol}
              camera={camera}
              earth_date={earth_date}
              rover={rover}
            />
          </Dialog.Root>
        </div>
      </div>
    </div>
  )
}
