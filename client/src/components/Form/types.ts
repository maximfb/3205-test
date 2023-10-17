import { EntityPayload } from '../../api/types.ts';

export interface FormTypes {
  onSubmit: (values: EntityPayload) => void
}