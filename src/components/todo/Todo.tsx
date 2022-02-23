import { TodoStyled, TodoActions} from './Todo.styles';
import { MdDone, MdOutlineClose } from 'react-icons/md';
import { forwardRef } from 'react';
import TodoModel from '../../model/Todo';
import { TodoProps } from './Todo.d';

const Todo = forwardRef(({id,text,isComplete,removeTodo,completeTodo}: TodoProps, ref) => { 

  const checkCompleteTodo = () => {
    !isComplete && completeTodo(new TodoModel(id,text,isComplete));
  }

  return (      
    <TodoStyled key={id} isComplete={isComplete} ref={ref}>
      <span>
        {text}
      </span>
      <TodoActions isComplete={isComplete}>
        <button className="remove" onClick={() => removeTodo(id)}>
          <MdOutlineClose/>
        </button>
        <button className="complete" onClick={checkCompleteTodo}>
          <MdDone/>
        </button>
      </TodoActions>
    </TodoStyled>                      
  )
});

export default Todo;
