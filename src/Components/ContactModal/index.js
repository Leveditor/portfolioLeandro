import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { i18n } from '../../translate/i18n';
import Forms from './form';


export default function Contact() {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  
  return (
    <>
      <button  className='text-emerald-50 text-base pl-2' onClick={() => setOpen(true)} >
      {i18n.t('formContact.contact')}
      </button>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0"
            enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
              <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 ">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="flex justify-between">
                      <div>
                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                         
                        </Dialog.Title>
                      </div>
                      <div>
                        <button onClick={() => setOpen(false)}>X</button>
                      </div>
                    </div>
                    <hr className='mt-3 mb-3'/>
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:text-left">
                        <Forms />
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}