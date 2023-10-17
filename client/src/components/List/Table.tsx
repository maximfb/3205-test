import { FC } from 'react';
import { ListProps } from './types.ts';

export const Table: FC<ListProps> = ({ items }) => {
  if (!items.length) return <h2 className={'font-bold mt-3'}>No data</h2>
  return (
    <table className="max-w-[500px] w-full mt-3">
      <thead>
      <tr>
        <th className={ 'text-start' }>№</th>
        <th className={ 'text-start' }>Email</th>
        <th className={ 'text-start' }>Number</th>
      </tr>
      </thead>
      <tbody>
      { items.length && items.map((i, idx) =>
        <tr key={ (Math.random() * i.number).toString(16) }>
          <td>{ idx + 1 }</td>
          <td>{ i.email }</td>
          <td>{ i.number }</td>
        </tr>)
      }
      </tbody>
    </table>
  );
};
