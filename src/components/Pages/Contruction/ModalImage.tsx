import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import File01 from '@/assets/images/contruction/pt1.jpeg';
import File02 from '@/assets/images/contruction/pt2.jpeg';
import File03 from '@/assets/images/contruction/pt3.jpeg';
import File04 from '@/assets/images/contruction/pt6.jpeg';
import File05 from '@/assets/images/contruction/pt7.jpeg';
import File06 from '@/assets/images/contruction/pt8.jpeg';
import File07 from '@/assets/images/contruction/pt9.jpeg';
import File08 from '@/assets/images/contruction/pt10.jpeg';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';

const files = [
  {
    id: 1,
    source: File01.src
  },
  {
    id: 2,
    source: File02.src
  },
  {
    id: 3,
    source: File03.src
  },
  {
    id: 4,
    source: File04.src
  },
  {
    id: 5,
    source: File05.src
  },
  {
    id: 6,
    source: File06.src
  },
  {
    id: 7,
    source: File07.src
  },
  {
    id: 8,
    source: File08.src
  }
];

export default function ModalImage({
  open,
  close,
  id
}: {
  open: boolean;
  close: () => void;
  id: number;
}) {
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
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl sm:p-6'>
                <div className='flex justify-center items-center'>
                  {files.map(
                    (file) =>
                      id === file.id && (
                        <img
                          src={file.source}
                          alt=''
                          className='pointer-events-none object-cover group-hover:opacity-75'
                        />
                      )
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
