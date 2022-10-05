import { forwardRef } from 'react';

const Textarea: React.ForwardRefRenderFunction<HTMLInputElement, any> = (
  { id, name, title, rows, register, error, ...props },
  ref
) => {
  return (
    <>
      <div className='flex-1'>
        <label htmlFor={name} className='font-medium text-cinza-700'>
          {title}
        </label>
        <div className='relative'>
          <textarea
            {...register}
            data-testid={name}
            name={name}
            id={id}
            rows={rows}
            {...props}
            ref={ref}
            className='block w-full rounded-sm shadow-sm text-md px-3 py-2 bg-gray-50 text-gray-800 border-none'
          />
        </div>
      </div>
      <span className='min-h-6 mb-6 font-app-regular text-primary text-red-500 text-md block'>
        {error ? `* ${error}` : ''}
      </span>
    </>
  );
};

export default forwardRef(Textarea);
