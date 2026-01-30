import Logo from '../../assets/Logo.svg'

const navbarLinks = [
    { id: 1, title: "Services", link: "/" },
    { id: 2, title: "About Us", link: "/" },
    { id: 3, title: "Contact Us", link: "/" },
]

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow">
        <div className="flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3">
            
            {/* Logo */}
            <div>
                <img src={Logo} alt="Logo" className="h-10 w-auto" />
            </div>

            {/* Links de navegación - solo visibles en desktop */}
            <div className="hidden md:block">
                <ul className='flex space-x-8'>
                    {navbarLinks.map((link) => (
                        <li key={link.id}>
                            <a 
                                href={link.link} 
                                className='text-base text-gray-700 hover:text-blue-600 transition-colors'
                            >
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Botón de contacto */}
            <div className="hidden md:block">
                <a 
                    href="tel:+19877495403" 
                    className='bg-transparent border-2 border-blue-600 w-[200px] h-[56px] rounded-3xl text-blue-700 font-bold flex items-center justify-center cursor-pointer hover:bg-blue-50 transition'
                >
                    (987)-749-5403
                </a>
            </div>

        </div>
    </nav>
  )
}

export default Navbar
