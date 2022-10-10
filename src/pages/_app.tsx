import '@/assets/styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import type { AppProps } from 'next/app';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Whatsapp from '@/components/Common/Whatsapp/Whatsapp';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer />
      <Whatsapp />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
