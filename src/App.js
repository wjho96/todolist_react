import React, { useCallback, useMemo, useReducer, useRef } from 'react'
import './App.css';
import Header from './components/Header';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';

export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();

const mockTodo =[
  {
    id : 0,
    isDone : false,
    content : 'React 공부하기',
    createDate : new Date().getTime()
  },
  {
    id : 1,
    isDone : false,
    content : 'JavaScript 공부하기',
    createDate : new Date().getTime()
  },
  {
    id : 2,
    isDone : false,
    content : 'Html 공부하기',
    createDate : new Date().getTime()
  },
  {
    id : 3,
    isDone : false,
    content : 'Css 공부하기',
    createDate : new Date().getTime()
  },
] 

function reducer(state, action) {
  // 상태변화 코드들...
  switch(action.type){
    case 'CREATE' : {
      return[action.newItem, ...state];
    }
    case 'UPDATE' : {
      return state.map(list =>
        list.id === action.targetId ? 
        {...list, 
          isDone : !list.isDone
        } : list
      ) 
    }
    case 'DELETE' : {
      return state.filter(list=>list.id !== action.targetId);
    }
    default : return state;
  }
}
function App() {
  const idRef = useRef(4)

  const [todo, dispatch] = useReducer(reducer, mockTodo);
  // 이벤트 : 데이터 추가(목록 추가)
  const onCreate = (content) =>{
    dispatch({
      type : 'CREATE',
      newItem : {
        id : idRef.current,
        isDone : false,
        content,
        createDate : new Date().getTime()
      }
    })
    idRef.current += 1;
  }
  const onUpdate = useCallback((targetId) =>{
    dispatch({
      type : 'UPDATE',
      targetId
    })
  },[])
  const onDelete = useCallback((targetId) => {
    dispatch({
      type : 'DELETE',
      targetId
    })
  },[])

  const memorizeDispatches = useMemo(()=>{
    return {onCreate, onUpdate, onDelete}
  },[])

  return (
    <div className="App">
      <Header/>
      <TodoStateContext.Provider value={todo}>
        <TodoDispatchContext.Provider value={memorizeDispatches}>
          <TodoEditor/>
          <TodoList/>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
