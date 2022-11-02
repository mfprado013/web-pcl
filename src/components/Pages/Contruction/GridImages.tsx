import { useState } from 'react';
import ModalImage from './ModalImage';

export default function GridImages({ files }: { files: any }) {
  const [getId, setGetId] = useState<number>(0);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleClosedModal = () => {
    setOpenModal(false);
  };

  const handleOpenImageModal = (id: number) => {
    setGetId(id);
    setOpenModal(true);
  };
  return (
    <>
      <ul
        role='list'
        className='grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8'
      >
        {files.map((file: any) => (
          <li key={file.id} className='relative'>
            <div className='group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100'>
              <img
                src={file.source}
                alt=''
                className='pointer-events-none object-cover group-hover:opacity-75'
              />
              <button
                type='button'
                className='absolute inset-0 focus:outline-none'
                onClick={() => handleOpenImageModal(file.id)}
              ></button>
            </div>
          </li>
        ))}
      </ul>
      <ModalImage open={openModal} close={handleClosedModal} id={getId} />
    </>
  );
}
