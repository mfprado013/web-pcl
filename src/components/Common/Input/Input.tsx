import { ChangeEvent, FocusEvent, forwardRef, useCallback, useState } from 'react';

interface IInputProps {
  type?: 'text' | 'number' | 'password';
  error?: string;
  className?: string;
  containerClassName?: string;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => {};
  onBlur?: (e: FocusEvent<HTMLInputElement>) => {};
  onChange?: (e: ChangeEvent<HTMLInputElement>) => {};
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
  {
    type = 'text',
    error,
    className,
    containerClassName = '',
    onFocus,
    onBlur,
    onChange,
    ...rest
  },
  ref
) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formType, setFormType] = useState<'text' | 'password' | 'email' | 'number'>(
    type
  );
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleToggleShowPassword = useCallback(() => {
    showPassword ? setFormType('password') : setFormType('text');
    setShowPassword(!showPassword);
  }, [showPassword]);

  const handleFocusInput = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus && onFocus(e);
    },
    [onFocus]
  );

  const handleBlurInput = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur && onBlur(e);
    },
    [onBlur]
  );

  const onChangeInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(e);
    },
    [onChange]
  );

  return (
    <div className='flex-1'>
      <label
        className={`flex justify-center items-center ${
          isFocused ? 'bg-gray-100' : 'bg-white'
        } h-14 p-5 ${
          isFocused ? 'border border-primary' : 'border border-black'
        } rounded-lg ${containerClassName}`}
      >
        <input
          className='flex-1 border-0 w-full bg-transparent font-app-regular text-gray filter-none outline-none'
          autoComplete='off'
          autoCorrect='off'
          spellCheck='false'
          autoCapitalize='none'
          type={formType}
          ref={ref}
          {...rest}
          onFocus={(e) => handleFocusInput(e)}
          onBlur={handleBlurInput}
          onChange={onChangeInput}
          formNoValidate
        />
        {type === 'password' ? (
          showPassword ? (
            <>ver</>
          ) : (
            <>fechar</>
          )
        ) : //   <IonIcon
        //     className='text-2xl pl-2 cursor-pointer'
        //     icon={showPassword ? eyeOpenIcon : eyeClosedIcon}
        //     color='primary'
        //     placeholder='Mostrar senha'
        //     onClick={handleToggleShowPassword}
        //   />
        null}
      </label>
      <span className='min-h-6 mb-6 font-app-regular text-primary block'>
        {error ? `* ${error}` : ''}
      </span>
    </div>
  );
};

export default forwardRef(Input);
