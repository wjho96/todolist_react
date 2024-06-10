
import React, {  useState } from 'react'
// const reducer = (state, action) =>{
//     switch(action.type){
//         case 'INCREASE' : return state + action.data
//         case 'DECREASE' : return state - action.data
//         case 'LIMITED' : return (alert(action.data), (state + action.data) * 2);       default : return state;
//     }
// }

const TestComp = () => {
    const [count, setCount] = useState(0)
    // const [count, dispatch] = useReducer(reducer, 0)
    const inCrease =()=>{
        setCount(count+1)
    }
    const deCrease =()=>{
        setCount(count-1)
    }
    const limit =()=>{
        if (count >= 10) {
            setCount(10)
        } else {
            setCount(0)
        }
    }
    
  return (
    <div>
        <h4>테스트 컴포넌트!!!</h4>
        <div>
            <strong style={{fontSize : '30px'}}>{count}</strong>
        </div>
        <div>
            {/* <button onClick={()=>dispatch({type:'INCREASE', data : 1})}>+1</button>
            <button onClick={()=>dispatch({type:'DECREASE', data : 1})}>-1</button>
            <button onClick={()=>dispatch({type:'LIMITED', data : 1})}>LIMITED</button> */}
            <button onClick={inCrease}>+1</button>
            <button onClick={deCrease}>-1</button>
            <button onClick={limit}>limit</button>
        </div>
    </div>
  )
}

export default TestComp