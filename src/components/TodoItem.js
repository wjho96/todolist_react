import React, { useContext } from 'react'
import { TodoDispatchContext } from '../App';

const TodoItem = ({id, isDone, content, createDate}) => {
  const { onUpdate, onDelete} = useContext(TodoDispatchContext)
  const onChangeCheckBox = () =>{
    console.log(`${id} TodoItem 업데이트`);
    onUpdate(id)
  }
  const onClickDelete = () =>{
    onDelete(id)
  }
  return (
    <div className='TodoItem' style={{ 
      textDecoration: isDone ? 'line-through' : '' ,
      color : isDone ? '#ccc' : 'inherit'
    }}>
        <div className='checkbox_col' >
            <input onChange={onChangeCheckBox} checked={isDone} type='checkbox' />
        </div>
        <div className='title_col'>{content}</div>
        <div className='date_col'>
            {new Date(createDate).toLocaleDateString()}
        </div>
        <div className='btn_col'>
            <button onClick={onClickDelete}>삭제</button>
        </div>
    </div>
  )
}

export default React.memo(TodoItem)