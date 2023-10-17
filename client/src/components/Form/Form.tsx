import { FC } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { EntityPayload } from '../../api/types.ts';
import { FormTypes } from './types.ts';

import { Input } from '../../ui/Input';

const defaultValues: EntityPayload = {
  email: '',
  number: '',
};

const validationSchema = yup.object({
  email: yup.string().trim().email('Must be a valid email').required('Required!'),
  number: yup.string().length(8),
});

export const Form: FC<FormTypes> = ({ onSubmit }) => {
  const { handleSubmit, register, formState: { errors }, reset } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  const submitHandler = (data: EntityPayload) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={ handleSubmit(submitHandler) }
          className={ 'flex justify-center flex-col gap-2 max-w-[500px] mt-7' }>
      <div className={ 'flex justify-center gap-2 w-full' }>
        <Input
          register={ register('email') }
          error={ errors.email?.message }
          name={ 'Email' }
          id={ 'email' }
          placeholder={ '3205@gmail.com' }
          required
        />
        <Input
          register={ register('number') }
          error={ errors.number?.message }
          name={ 'Number' }
          id={ 'number' }
          placeholder={ '320500' }
          mask={'99-99-99'}
        />
      </div>
      <button
        type={ 'submit' }
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-4 border-b-4 border-blue-600 hover:border-blue-500 rounded">
        Send
      </button>
    </form>
  );
};
