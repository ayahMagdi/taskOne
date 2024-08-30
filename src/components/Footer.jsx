import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoImage from '../assets/OBJECTS.png';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/20/solid'
import SocialLinks from './SocialLinks';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';

const Footer = ({sectionContent}) => {

  const { t } = useTranslation();

  const services = t('services', { returnObjects: true });

  const links = ['/', '/about', '/services', '/works', '/contact'];

  return (
    <div className='bg-[rgba(0,19,90,1)] pt-10'> 
      <div className='bg-[rgba(69,80,120,1)] py-8 px-32'>
          <div className='flex justify-between text-white'>
            <div>
                <h4 className='mb-3'>موقعنا</h4>
                <div className='mb-8'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27653.563434705284!2d31.26165035!3d29.959438099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145847f5e5c8055b%3A0x8b21ef9bc90d1941!2sAl%20Maadi%2C%20Maadi%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1724542424759!5m2!1sen!2seg" height="180" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div>
                    <h5 className='mb-3'>وسائل التواصل</h5>
                    <SocialLinks />
                    {/* <ul className='flex gap-7 items-center'>
                        <li><FontAwesomeIcon icon={faFacebook} /></li>
                        <li><FontAwesomeIcon icon={faTwitter} /></li>
                        <li><FontAwesomeIcon icon={faInstagram} /></li>
                        <li><FontAwesomeIcon icon={faLinkedin} /></li>
                    </ul> */}
                </div>
            </div>
            <div>
               <h4 className='mb-7'>خدمات</h4>
               <ul className='mb-8'>
                {services?.map((service , index) => 
                  <li className='mb-7 text-xs hover:text-[rgba(255,102,0,1)] transition-all' key={index}>
                     <Link
                      onClick={() => sectionContent(service.active)}
                      to="/services"
                      >
                           {service.text}
                      </Link>
                  </li>
                )}
                   {/* <li className='mb-7 text-xs'>تسويق الكتروني</li>
                   <li className='mb-7 text-xs'>تصميم مواقع و انظمه</li>
                   <li className='mb-7 text-xs'>تصميم 3d</li>
                   <li className='mb-7 text-xs'>خدمات ارشفه الكترونيه</li>
                   <li className='mb-7 text-xs'>تطبيقات موبايل Android _ ios</li> */}
               </ul>
            </div>
            <div>
              {t('navlinks')?.map((e , i) => <h4 className='mb-7 hover:text-[rgba(255,102,0,1)] transition-all' key={i}>
                 <NavLink to={links[i]} className={({ isActive }) =>
                             isActive ? " text-[rgba(255,102,0,1)] transition-all" : "text-white transition-all"
                  }>
                   {e}
                 </NavLink>
              </h4>)}
            </div>
            <div>
               <h4 className='mb-7'>تواصل معنا</h4>
               <ul className='mb-8'>
                   <li className='mb-7 text-xs flex items-center gap-3'><PhoneIcon aria-hidden="true" className="-mr-1 h-5 w-5" /> (123)458756321</li>
                   <li className='mb-7 text-xs flex items-center gap-3'><EnvelopeIcon aria-hidden="true" className="-mr-1 h-5 w-5" /> mangcoding123@gmail.com</li>
                   <li className='mb-7 text-xs flex items-center gap-3'><MapPinIcon aria-hidden="true" className="-mr-1 h-5 w-5" /> 2972 Westheimer Rd. Santa Ana, Illinois 85486</li>
               </ul>
            </div>
            <div className='flex justify-center items-center'>
                 <img src={logoImage}  alt='logo'/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer