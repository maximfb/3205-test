import { useEffect, useState } from 'react';
import { IEntity } from './components/List/types.ts';
import { EntityPayload } from './api/types.ts';
import * as Api from './api';

import { Form } from './components/Form';
import { Table } from './components/List';

function App() {
  const [ entities, setEntities ] = useState<IEntity[]>([]);
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ controller, setController ] = useState<AbortController>(new AbortController());

  useEffect(() => {
    try {
      Api.fetchAll().then(({ data: { data } }) => {
        setEntitiesHandler(data);
      });
    } catch (err) {
      console.error(`Error while fetching: ${ (err as Error).message }`);
      setIsLoading(false);
    }
  }, []);

  const fetchEntities = async (values: EntityPayload) => {
    if (isLoading && controller) {
      controller.abort()
    }
    setIsLoading(true);
    try {
      const { data } = (await Api.fetchByData(values, controller)).data;
      setEntitiesHandler(data);
    } catch (err) {
      console.error(`Error while fetchEntities: ${ (err as Error).message }`);
      setIsLoading(false);
      setController(new AbortController())
    }
  };

  const setEntitiesHandler = (data: IEntity[]) => {
    setEntities(data);
    setIsLoading(false);
  };

  return (
    <div className={ 'container' }>
      <div className={ 'flex justify-center items-center flex-col w-full' }>
        <Form onSubmit={ fetchEntities }/>
        { !isLoading ? <Table items={ entities }/> : <h2 className={ 'font-bold mt-3' }>Loading...</h2> }
      </div>
    </div>
  );
}

export default App;
