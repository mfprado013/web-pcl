import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { classNames } from '@/utils/helper';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';

const items = [
  {
    title: 'Baixe o PDF e veja mais',
    description: 'faça o download do pdf de resumo, para saber mais',
    icon: DocumentArrowDownIcon,
    background: 'bg-blue-500',
    file: '/resumo-saiba-mais.pdf',
    nameFile: 'resumo-saiba-mais.pdf'
  }
];

export default function ModalPdf({ open, close }: { open: boolean; close: () => void }) {
  const onButtonClick = (file: any, nameFile: any) => {
    // using Java Script method to get PDF file
    fetch(file).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = nameFile;
        alink.click();
      });
    });
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={close}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-2 sm:w-full sm:max-w-xl sm:p-6'>
                <div className='flex justify-center items-center '>
                  <ul
                    role='list'
                    className='mt-0 grid grid-cols-1 gap-6 py-6 sm:grid-cols-1 mx-10'
                  >
                    {items.map((item: any, itemIdx: any) => (
                      <li key={itemIdx} className='flow-root'>
                        <div className='relative -m-2 flex items-center space-x-4 rounded-xl p-2 bg-gray-50 focus-within:ring-2 focus-within:ring-indigo-500 hover:bg-gray-100'>
                          <div
                            className={classNames(
                              item.background,
                              'flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-lg'
                            )}
                          >
                            <item.icon
                              className='h-6 w-6 text-white'
                              aria-hidden='true'
                            />
                          </div>
                          <div>
                            <h3 className='text-sm font-medium text-gray-900'>
                              <button
                                onClick={() => onButtonClick(item.file, item.nameFile)}
                                type='button'
                                className='focus:outline-none'
                              >
                                <span className='absolute inset-0' aria-hidden='true' />
                                <span>{item.title}</span>
                              </button>
                            </h3>
                            <p className='mt-1 text-sm text-gray-500'>
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
