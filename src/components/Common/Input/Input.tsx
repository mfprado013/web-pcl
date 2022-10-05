import { forwardRef } from 'react';
import { IInput } from './types';

const Input: React.ForwardRefRenderFunction<HTMLInputElement, IInput> = (
  { id, name, type = 'text', title, register, error, value, ...props },
  ref
) => {
  return (
    <>
      <div className='flex-1'>
        <label htmlFor={name} className='font-medium text-cinza-700'>
          {title}
        </label>
        <div className='relative'>
          <input
            {...register}
            data-testid={name}
            name={name}
            id={id}
            type={type}
            defaultValue={value}
            {...props}
            ref={ref}
            className='block w-full rounded-sm shadow-sm text-md px-3 py-2 bg-gray-50 text-gray-800 border-none border-cinza-600 border-2'
          />
        </div>
      </div>
      <span className='min-h-6 mb-6 font-app-regular text-md text-primary block text-red-500'>
        {error ? `* ${error}` : ''}
      </span>
    </>
  );
};

export default forwardRef(Input);
