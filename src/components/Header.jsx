import { Link, NavLink } from 'react-router-dom';
import logoImage from '../assets/OBJECTS.png';
import { useTranslation } from 'react-i18next';
import LangSelector from './LangSelector';
import { useState } from 'react';
import SocialLinks from './SocialLinks';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = ({sectionContent}) => {
    const { t, i18n } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);
    const links = ['/', '/about', '/services', '/works', '/contact'];

    const handleNavLinkClick = (index) => {
            setActiveIndex(() => index); 
    };

    const services = t('services', { returnObjects: true });

    const [isOpen, setIsOpen] = useState(false);
        
    return (

        <div className='header z-50 fixed top-0 w-screen h-[165px] bg-[rgba(0,19,90,1)] text-white'>
           <div className='flex justify-between items-center px-32 py-4'>
           <div className='logo'>
                <img src={logoImage} alt='logo' />
            </div>
            <div>
                <div>
                <ul className="navbar flex justify-between items-center">
                {[0, 1, 2, 3, 4].map((index) => (
                    index === 2 ?
                    <li className='px-6'>
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <MenuButton 
                              className={({ isActive, isPending }) =>
                              isPending ? "menu_title border-b-0 py-2 gap-2 flex justify-center items-center" : isActive ? "menu_title border-b border-b-[rgba(255,102,0,1)] text-[rgba(255,102,0,1)] py-2 flex gap-2 justify-center items-center" : "menu_title flex justify-center items-center gap-2 py-2 text-white transition-all hover:border-b-[rgba(255,102,0,1)] hover:text-[rgba(255,102,0,1)] hover:border-b"
                               }
                            >
                            {t(`navlinks.${index}`)}
                            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 icon text-gray-400 hover:text-[rgba(255,102,0,1)]" />
                            </MenuButton>
                        </div>

                        <MenuItems
                            transition
                            className="text-right absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className="py-1">
                                {services.map((service, index) => 
                                    <MenuItem key={index}>
                                    <Link
                                    onClick={() => sectionContent(service.active)}
                                    to="/services"
                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                    >
                                     {service.text}
                                    </Link>
                                </MenuItem>
                                )}
                            </div>
                        </MenuItems>
                    </Menu> </li> :
                    <li key={index} className='px-6'>
                        <NavLink
                            to={links[index]}
                            onClick={() => handleNavLinkClick(index)}
                            className={({ isActive, isPending }) =>
                            isPending ? "border-b-0 py-2" : isActive ? "border-b border-b-[rgba(255,102,0,1)] text-[rgba(255,102,0,1)] py-2" : "py-2 text-white transition-all hover:border-b-[rgba(255,102,0,1)] hover:text-[rgba(255,102,0,1)] hover:border-b"
                             }
                            >
                            {t(`navlinks.${index}`)}
                        </NavLink>
                    </li>
                ))}
            </ul>
                </div>
            </div>
            <div className='social_links flex justify-between items-center gap-2'>
                <SocialLinks />
                <LangSelector />
            </div>
           </div>
        </div>
    );
};

export default Header;