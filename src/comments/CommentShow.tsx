import { ReactNode } from 'react';
import { EmailField, NumberField, RichTextField, Show, SimpleShowLayout, TextField } from 'react-admin';

export default function CommentShow(): ReactNode {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source='postId' link='posts' />
        <NumberField source='id' />
        <TextField source='name' />
        <EmailField source='email' />
        <RichTextField source='body' />
      </SimpleShowLayout>
    </Show>
  );
}
