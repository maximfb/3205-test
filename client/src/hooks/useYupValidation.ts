import { useCallback } from 'react';
import yup, { ValidationError } from 'yup';

import { EntityPayload } from '../api/types.ts';

export default function useYupValidation(validationSchema: yup.ObjectSchema<EntityPayload>) {
  useCallback(async (data: EntityPayload) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors) {
        // @ts-ignore
        return {
          values: {},
          errors: (errors as ValidationError).inner.reduce(
            (allErrors: any, currentError: any) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? 'validation',
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [ validationSchema ]);
}