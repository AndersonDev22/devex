import Image from 'next/future/image'
import Logo from '../../assets/Logo.svg'

export function Header() {
  return (
    <div className="flex bg-blue-900 w-full items-center justify-center">
      <div className="flex max-w-[90rem] w-[90rem] items-center justify-start px-6 py-5">
        <Image src={Logo} alt="" />
      </div>
    </div>
  )
}
