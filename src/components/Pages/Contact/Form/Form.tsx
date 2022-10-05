import Input from '@/components/Common/Input/Input';
import { Controller, useForm } from 'react-hook-form';

import { validationSchema } from './Form.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useState } from 'react';
import Textarea from '@/components/Common/Textarea/Textarea';

import { createContact } from '@/services/contact/contact';

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
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
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
                {...register('name')}
                title='nome'
                error={errors.name?.message}
                disabled={loading}
                placeholder='Jhon'
                {...rest}
              />
            )}
          />
        </div>
        <div className='w-full'>
          <Input
            register={register('last_name')}
            title='sobrenome'
            error={errors.last_name?.message}
            value='ananias'
            disabled={loading}
            placeholder='Doe'
          />
        </div>
      </div>
      <div className='w-full'>
        <Input
          register={register('email')}
          title='e-mail'
          error={errors.email?.message}
          value='abnerndr@gmail.com'
          disabled={loading}
          placeholder='johndoe@email.com'
        />
      </div>
      <div className='w-full'>
        <Input
          register={register('subject')}
          title='titulo da mensagem'
          error={errors.subject?.message}
          value='teste'
          disabled={loading}
          placeholder='estou lhe contatando pelo motivo de...'
        />
      </div>
      <div className='w-full'>
        <Textarea
          register={register('message')}
          title='mensagem que desenha enviar'
          error={errors.message?.message}
          value='teste'
          rows={3}
          disabled={loading}
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
