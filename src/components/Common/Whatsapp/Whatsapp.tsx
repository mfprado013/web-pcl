import whatsappIcon from '@/assets/images/whatsapp.svg';
import Link from 'next/link';

export default function Whatsapp() {
  return (
    <div className='z-0 fixed w-screen h-full flex justify-end items-end'>
      <div className='px-8 pb-6'>
        <Link href='https://whatsa.me/5516996188384'>
          <a className='cursor pointer hover:opacity-90 ' target='_blank'>
            <img src={whatsappIcon.src} className='w-16 h-16' alt='whatsapp' />
          </a>
        </Link>
      </div>
    </div>
  );
}
