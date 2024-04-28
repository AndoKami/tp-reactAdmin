import { ReactNode } from 'react';
import { Datagrid, EditButton, List, NumberField, ReferenceField, ShowButton, TextField } from 'react-admin';

export default function PostList(): ReactNode {
  return (
    <List>
      <Datagrid>
        <ReferenceField reference='users' source='userId' link='show' />
        <NumberField source='id' />
        <TextField source='title' />
        <TextField source='body' />
        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  );
}
