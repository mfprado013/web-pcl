import { classNames } from '@/utils/helper';

export default function Pdf({ items }: any) {
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
    <div>
      <ul
        role='list'
        className='mt-6 grid grid-cols-1 gap-6 border-t border-b border-gray-200 py-6 sm:grid-cols-2 mx-20'
      >
        {items.map((item: any, itemIdx: any) => (
          <li key={itemIdx} className='flow-root'>
            <div className='relative -m-2 flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2 focus-within:ring-indigo-500 hover:bg-gray-50'>
              <div
                className={classNames(
                  item.background,
                  'flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-lg'
                )}
              >
                <item.icon className='h-6 w-6 text-white' aria-hidden='true' />
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
                <p className='mt-1 text-sm text-gray-500'>{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
