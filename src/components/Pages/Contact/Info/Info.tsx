export default function Info() {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8'>
        <div className='divide-y-2 divide-gray-200'>
          <div className='lg:grid lg:grid-cols-3 lg:gap-8'>
            <h2 className='text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight'>
              Fale Conosco
            </h2>
            <div className='mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0'>
              <div>
                <h3 className='text-lg font-medium leading-6 text-gray-900'>
                  Collaborate
                </h3>
                <dl className='mt-2 text-base text-gray-500'>
                  <div>
                    <dt className='sr-only'>Email</dt>
                    <dd>support@example.com</dd>
                  </div>
                  <div className='mt-1'>
                    <dt className='sr-only'>Phone number</dt>
                    <dd>+1 (555) 123-4567</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className='text-lg font-medium leading-6 text-gray-900'>Press</h3>
                <dl className='mt-2 text-base text-gray-500'>
                  <div>
                    <dt className='sr-only'>Email</dt>
                    <dd>support@example.com</dd>
                  </div>
                  <div className='mt-1'>
                    <dt className='sr-only'>Phone number</dt>
                    <dd>+1 (555) 123-4567</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h1>facebook</h1>
              </div>
              <div>
                <h1>instagram</h1>
              </div>
            </div>
          </div>
          <div className='mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8'>
            <h2 className='text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight'>
              Localização
            </h2>
            <div className='flex justify-center col-span-12'>
              <div className='flex flex-row w-full justify-between'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid'
                  width='720'
                  height='450'
                  frameBorder='0'
                  style={{ border: 0 }}
                  aria-hidden='false'
                  className='w-full'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
