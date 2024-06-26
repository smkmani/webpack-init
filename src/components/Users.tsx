/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import './Users.scss'
import { useAppDispatch, useAppSelector } from '../store/hooks'

import IMAGE1 from '../assets/images/favicon.png'
import IMAGE2 from '../assets/images/test.svg'
import { decrement, increment } from '../reducer/testReducer/counterSlice'
interface UsersProps {}
const Users: React.FC<UsersProps> = ({}) => {
  // const [number, setNumber] = useState(0)
  const count = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()
  return (
    <div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
        culpa animi autem provident illum fuga consectetur ipsum architecto
        ipsam, nisi veniam, deserunt rerum asperiores placeat mollitia deleniti?
      </p>

      <div>
        <img src={IMAGE1} alt="demo webpack" width={300} height={300} />
        <img src={IMAGE2} alt="demo file" width={300} height={300} />
      </div>
      <div>{JSON.stringify(count)}</div>
      <div className="wrapper">
        <button onClick={() => dispatch(increment())}>+</button> <br />
        <button onClick={() => dispatch(decrement())}>-</button>
        <br />
        <p>{count.value}</p>
      </div>
    </div>
  )
}

export default Users
