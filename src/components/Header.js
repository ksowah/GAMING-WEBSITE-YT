import { AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
  return (
    <div className="absolute w-full h-[5rem] " >
        <div className="hidden lg:flex items-center w-full h-full xl:max-w-[1250px] mx-auto px-4  " >
            <p className="font-bold text-[1.5rem] cursor-pointer " >LOGO</p>

            <div className="flex-1 flex items0center justify-end space-x-10 " >
                <ul className="flex items-center space-x-6" >
                    <li className="text-sm cursor-pointer hover:text-gray-200 " >Home</li>
                    <li className="text-sm cursor-pointer hover:text-gray-200 " >About Us</li>
                    <li className="text-sm cursor-pointer hover:text-gray-200 " >Portfolio</li>
                    <li className="text-sm cursor-pointer hover:text-gray-200 " >News</li>
                </ul>

                <button className="w-[8rem] py-2 bg-[#d80027] rounded-md " >Contact us</button>
            </div>

        </div>

        <div className="w-full h-full flex items-center px-4" >
            <AiOutlineMenu size={18} className="lg:hidden" />
        </div>
    </div>
  )
}

export default Header