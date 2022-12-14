import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { i18n } from '../../translate/i18n';
import ContactModal from '../ContactModal';

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-gray-900">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                      <Link to='/' className='text-emerald-50 text-lg'>
                          Leandro Barbosa
                      </Link>
                      <a href="#about" className='text-emerald-50 text-base	pt-1'>
                        {i18n.t('header.about')}
                      </a>
                      <a href="#skills" className='text-emerald-50 text-base	pt-1'>
                        {i18n.t('header.technologies')}
                      </a>
                      <a href="#project" className='text-emerald-50 text-base	pt-1'>
                         {i18n.t('header.projects')}
                      </a>
                      <ContactModal />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="sm:hidden pb-5">
              <Link to='/' className='text-emerald-50 text-lg pl-2'>
                Leandro Barbosa
              </Link>
            <div className="items-center">
                <a href="#about" className='text-emerald-50 text-base pl-2'>
                    {i18n.t('header.about')}
                </a><br/>
                <a href="#skills" className='text-emerald-50 text-base pl-2 pt-5'>
                    {i18n.t('header.technologies')}
                </a><br/>
                <a href="#project" className='text-emerald-50 text-base pl-2 pt-5'>
                    {i18n.t('header.projects')}
                </a><br/>
                <ContactModal />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}