type Props = {
	id: number;
	title: string;
	isDone: boolean
};

export const ToDoItem = ({ id, title,isDone }: Props) => {
  return (
    <li key={id}>
      <input type="checkbox" checked={isDone} />
      <span>{title}</span>
    </li>
  );
};
