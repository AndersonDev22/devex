import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/future/image'
import { RootObject } from '../Card'

interface IModalImage extends RootObject{
  id:number;
  img_src: string;
}

const css = { width: '100%', height: 'auto' }

export function ModalImage({id, img_src}: IModalImage){
  return(
    <Dialog.Portal>
      <Dialog.Overlay className="fixed bg-black bg-opacity-[0.7] w-screen h-screen inset-0"/>
      <Dialog.Content 
      className="
        flex flex-col justify-start items-center min-w-[56rem] h-[40rem] 
        rounded-2xl overflow-hidden bg-white fixed top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2
      ">
        <Dialog.Title className="text-2xl absolute text-blue-900 mt-5 "> 
          Photo Nº: {id}
        </Dialog.Title>

        <Dialog.Close 
          className="
          absolute bg-transparent p-1 text-center rounded-full w-9 h-9 
          text-gray-800 text-xl border-0 top-4 right-5
          hover:bg-red-200 
        ">
          X
        </Dialog.Close>

          <Image src={img_src} alt="" width={900} height={250} style={css}/>
      </Dialog.Content>
    </Dialog.Portal>
  )
}