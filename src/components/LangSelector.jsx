import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const LangSelector = () => {

    const {i18n} = useTranslation()
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const languages = [
        {code:'en' , lang: 'english'},
        {code:'ar' , lang: 'عربي'},
    ]

    const optionsTitle = languages?.filter((e) => e.code === i18n.language)

    const changeLang = (lng) => {
        i18n.changeLanguage(lng)
    }

    useEffect(() => {
      document.body.dir = i18n.dir()
    },[i18n , i18n.language])

    console.log(isMenuOpen)

  return (
    <div>
        <Menu as="div" className="relative menu_title inline-block text-left">
            <div>
                <MenuButton 
                  onClick={() => setIsMenuOpen(!isMenuOpen)} 
                  className={`inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 ${isMenuOpen ? 'text-[rgba(255,102,0,1)]' : 'text-white'} hover:text-[rgba(255,102,0,1)]`}>
                    {optionsTitle[0]?.lang}
                    <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 icon text-gray-400" />
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-24 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <div className="py-1">
                    {languages?.map((lng) => 
                        <MenuItem key={lng.code}>
                        <a
                        href="#"
                        onClick={() => changeLang(lng.code)}
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                        {lng.lang}
                        </a>
                    </MenuItem>
                    )}
                </div>
            </MenuItems>
        </Menu> 
    </div>
  )
}

export default LangSelector