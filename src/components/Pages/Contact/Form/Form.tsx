import Input from '@/components/Common/Input/Input';
import { Controller, useForm } from 'react-hook-form';

import { validationSchema } from './Form.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useState } from 'react';
import Textarea from '@/components/Common/Textarea/Textarea';

import { createContact } from '@/services/contact/contact';
import { toast } from 'react-toastify';

type FormValues = {
  name: string;
  last_name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    control,
    register,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = useCallback(async (formData: FormValues) => {
    console.log(formData);
    const { email, subject, message } = formData;
    const fullname = `${formData.name} ${formData.last_name}`;

    await createContact(email, fullname, subject, message)
      .then((res) => {
        if (res.status === 200) {
          toast.success('e-mail enviado com sucesso, logo entraremos em contato', {
            position: 'top-right',
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light'
          });
        }
      })
      .catch((error) => {
        if (error) {
          toast.error(
            'houve um erro ao enviar e-mail, confira seus dados ou entre em contato conosco',
            {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light'
            }
          );
        }
      });
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className=' flex items-center flex-row gap-x-4 w-full '>
        <div className='w-full'>
          <Controller
            control={control}
            name='name'
            render={({ field: { onChange, ...rest } }) => (
              <Input
                title='nome'
                onChange={onChange}
                error={errors.name?.message}
                disabled={loading}
                placeholder='Jhon'
                {...rest}
              />
            )}
          />
        </div>
        <div className='w-full'>
          <Controller
            control={control}
            name='last_name'
            render={({ field: { onChange, ...rest } }) => (
              <Input
                {...register('last_name')}
                title='sobrenome'
                onChange={onChange}
                error={errors.last_name?.message}
                disabled={loading}
                placeholder='Doe'
                {...rest}
              />
            )}
          />
        </div>
      </div>
      <div className='w-full'>
        <Controller
          control={control}
          name='email'
          render={({ field: { onChange, ...rest } }) => (
            <Input
              {...register('email')}
              type='email'
              title='e-mail'
              onChange={onChange}
              error={errors.email?.message}
              disabled={loading}
              placeholder='johndoe@email.com'
              {...rest}
            />
          )}
        />
      </div>
      <div className='w-full'>
        <Controller
          control={control}
          name='subject'
          render={({ field: { onChange, ...rest } }) => (
            <Input
              title='titulo da mensagem'
              onChange={onChange}
              error={errors.subject?.message}
              disabled={loading}
              placeholder='estou lhe contatando pelo motivo de...'
              {...rest}
            />
          )}
        />
      </div>
      <div className='w-full'>
        <Controller
          control={control}
          name='message'
          render={({ field: { onChange, ...rest } }) => (
            <Textarea
              title='mensagem que desenha enviar'
              onChange={onChange}
              error={errors.message?.message}
              rows={3}
              disabled={loading}
              {...rest}
            />
          )}
        />
      </div>
      <div className='flex items-center gap-x-5 w-full justify-end text-lg font-semibold '>
        <button
          type='submit'
          className='w-1/2 rounded-sm bg-cinza-500 hover:bg-cinza-400 text-white px-2 py-2 uppercase'
        >
          enviar mensagem
        </button>
      </div>
    </form>
  );
}
