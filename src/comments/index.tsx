import CommentList from './CommentList';
import CommentEdit from './CommentEdit';
import CommentShow from './CommentShow';

const comments = {
  list: <CommentList />,
  edit: <CommentEdit />,
  show: <CommentShow />,
  options: { label: 'Comments' },
};

export default comments;
