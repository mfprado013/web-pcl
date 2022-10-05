import whatsappIcon from '@/assets/images/whatsapp.svg';
import Link from 'next/link';

export default function Whatsapp() {
  return (
    <div className='fixed w-screen h-full flex justify-end items-end'>
      <div className='px-8 pb-6'>
        <Link href=''>
          <a className='cursor pointer hover:opacity-90 '>
            <img src={whatsappIcon.src} className='w-16 h-16' alt='whatsapp' />
          </a>
        </Link>
      </div>
    </div>
  );
}
