import { Edit, SimpleForm, TextInput } from 'react-admin';
import { ReactNode } from 'react';

export default function PostEdit(): ReactNode {
  return (
    <Edit>
      <SimpleForm>
        <TextInput name='user id' label='User Id' source='userId' />
        <TextInput name='post id' label='Post Id' source='id' />
        <TextInput name='title' label='Title' source='title' required />
        <TextInput name='body' label='Body' source='body' required />
      </SimpleForm>
    </Edit>
  );
}
