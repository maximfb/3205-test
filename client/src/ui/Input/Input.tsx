import { FC, InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import InputMask from 'react-input-mask';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn
  error: string | undefined
  mask?: string
}

export const Input: FC<InputProps> = ({register, error, mask, ...props}) => {
  return (
    <div className={ 'input mb-5' }>
      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">{props.name}</label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
              <span className="text-gray-500 sm:text-sm">
            <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                 aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="currentColor"
                 viewBox="0 0 20 16"
            >
              <path
                d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"></path>
              <path
                d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"></path>
            </svg>
          </span>
        </div>
        {
          /* Извиняюсь за это неудачное решение. По хорошему сделать нормальный кастомный инпут
             и прокидывать его чилдреном в контроллер или маску.
          */
        }
        {mask ?
          <InputMask
            id={props.id}
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            mask={mask}
            placeholder={props.placeholder}
            { ...register }
          >
          </InputMask>
          :
          <input
            id={props.id}
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder={props.placeholder}
            { ...register }
          />
        }
        {error && <p className={'absolute -bottom-5 left-0 text-red-600 text-sm'}>{error}</p>}
      </div>
    </div>
  );
};
