import * as Dialog from '@radix-ui/react-dialog'

export function ModalImage(){
  return(
    <Dialog.Portal>
      <Dialog.Overlay className="fixed bg-[rgb(0, 0, 0, 0.75)] w-screen h-screen inset-0"/>
      <Dialog.Content className="min-w-[32rem] rounded-lg p-8 bg-gray-800 fixed">
      <Dialog.Title>Imagem</Dialog.Title>
        <Dialog.Close >
          X
        </Dialog.Close>
        <div >
          <h1>Modal</h1>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}