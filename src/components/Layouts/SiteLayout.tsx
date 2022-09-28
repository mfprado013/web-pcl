import Head from 'next/head';
import Footer from '../Common/Footer/Footer';
import Header from '../Common/Header/Header';

const pageVariants = {
  initial: {
    opacity: 0,
    x: 0,
    scale: 0.8
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    x: '100vw',
    scale: 1.2
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.8
};

interface Props {
  withHeader?: boolean;
  withFooter?: boolean;
  fullTitle?: string;
  title: string;
  description?: string;
  ogImage?: string;
  url?: string;
  siteName?: string;
  children: any;
}

const SiteLayout = ({
  withHeader,
  withFooter,
  fullTitle,
  title,
  description,
  ogImage,
  url,
  siteName,
  children,
  ...props
}: Props) => {
  const defaultTitle = fullTitle ? fullTitle + title : `${title} - pontocerto`;
  const pageTitle = fullTitle ? fullTitle : defaultTitle;
  const pageDescription = description;
  const pageImage = ogImage;

  return (
    <div className='flex flex-col min-h-screen bg-gray-50'>
      <Head>
        <meta name='description' content={pageDescription} />
        <meta property='og:locale' content='id_ID' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={pageTitle} />
        <meta property='og:description' content={pageDescription} />
        <meta property='og:url' content={url} />
        <meta property='og:site_name' content={title ? title : siteName} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:description' content={pageDescription} />
        <meta name='twitter:title' content={pageTitle} />
        <meta name='twitter:image' content={pageImage} />
        <title>{pageTitle}</title>
      </Head>

      {withHeader && <Header />}
      <main className='flex-grow w-full'>
        {/* <Toaster /> */}
        <div {...props}>{children}</div>
      </main>
      {withFooter && <Footer />}
    </div>
  );
};

export default SiteLayout;
