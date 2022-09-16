import Image from 'next/future/image'
import Logo from '../../assets/Logo.svg'

export function Header(){
  return (
    <div className="bg-blue-900 w-full items-center justify-center">
      <div className="mx-w-[1440px] justify-start px-6 py-5">
        <Image src={Logo} alt="" />
      </div>
    </div>
  )
} 