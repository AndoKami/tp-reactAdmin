import { ReactNode } from 'react';
import {
  Datagrid,
  EditButton,
  EmailField,
  List,
  NumberField,
  ReferenceField,
  ShowButton,
  TextField,
} from 'react-admin';

export default function CommentList(): ReactNode {
  return (
    <List>
      <Datagrid>
        <ReferenceField reference='posts' source='postId' />
        <NumberField source='id' />
        <TextField source='name' />
        <EmailField source='email' />
        <TextField source='body' />
        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  );
}
