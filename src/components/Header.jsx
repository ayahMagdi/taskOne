import { Link, NavLink } from 'react-router-dom';
import logoImage from '../assets/OBJECTS.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import LangSelector from './LangSelector';
import { useState } from 'react';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(null);
    const links = ['/', '/about', '/services', '/works', '/contact'];

    const handleNavLinkClick = (index) => {
        setActiveIndex(index); 
    };

    return (
        <div className='flex items-center justify-between px-32 py-4 bg-[rgba(0,19,90,1)] text-white'>
            <div className='logo'>
                <img src={logoImage} alt='logo' />
            </div>
            <ul className="navbar flex justify-between items-center">
                {[0, 1, 2, 3, 4].map((index) => (
                    <li key={index} className='px-6'>
                        <NavLink
                            to={links[index]}
                            onClick={() => handleNavLinkClick(index)}
                            className={`py-2 transition-all ${activeIndex === index ? 'border-b' : 'border-b-0'} hover:border-b`}
                        >
                            {t(`navlinks.${index}`)}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div className='social_links flex justify-between items-center gap-2'>
                <ul className='flex justify-between items-center'>
                    <li className='px-2'>
                        <Link><FontAwesomeIcon icon={faFacebook} /></Link>
                    </li>
                    <li className='px-2'>
                        <Link><FontAwesomeIcon icon={faTwitter} /></Link>
                    </li>
                    <li className='px-2'>
                        <Link><FontAwesomeIcon icon={faLinkedin} /></Link>
                    </li>
                    <li className='px-2'>
                        <Link><FontAwesomeIcon icon={faInstagram} /></Link>
                    </li>
                </ul>
                <LangSelector />
            </div>
        </div>
    );
};

export default Header;