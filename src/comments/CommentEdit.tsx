import { ReactNode } from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

export default function CommentEdit(): ReactNode {
  return (
    <Edit>
      <SimpleForm>
        <TextInput name='post id' label='Post Id' source='postId' disabled />
        <TextInput name='comment id' label='Id' source='id' disabled />
        <TextInput name='name' label='Name' source='name' required />
        <TextInput name='email' label='Email' source='email' disabled />
        <TextInput name='body' label='Body' source='body' required />
      </SimpleForm>
    </Edit>
  );
}
