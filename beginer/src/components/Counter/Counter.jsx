//= use HOC connect in redux
// import React from 'react'
// import { connect } from 'react-redux'
// import { increase, decrease } from './counter.actions'

// const Counter = ({ count, increase, decrease }) => {
//   return (
//     <div>
//       <button onClick={decrease}>Giảm</button>
//       {/* <button onClick={() => decrease()}>Giảm</button> */}
//       {/* <button>Giảm</button> */}
//       <div>{count}</div>
//       <button onClick={increase}>Tăng</button>
//       {/* <button onClick={() => increase()}>Tăng</button> */}
//       {/* <button onClick={increase}>Tăng</button> */}
//       {/* <button>Tăng</button> */}
//     </div>
//   )
// }
// const mapStateToProps = state => ({
//   count: state.counter.count
// })

// // const mapDispatchToProps = dispatch => {
// //   return {
// //     increase: () => dispatch(increase()),
// //     decrease: () => dispatch(decrease())
// //   }
// // }
// const mapDispatchToProps = {
//   increase,
//   decrease
// }
// Currying (HOC)
// export default connect(mapStateToProps, mapDispatchToProps)(Counter)

//******************************************************* */

//= use hook useSelector, useDispatch in redux
// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// // use for normal redux
// import { increase, decrease } from './counter.actions'

// export default function Counter() {
//   const count = useSelector(state => state.counter.count)
//   const dispatch = useDispatch()
//   return (
//     <div>
//       <button onClick={() => dispatch(decrease())}>Giảm</button>
//       <div>{count}</div>
//       <button onClick={() => dispatch(increase())}>Tăng</button>
//     </div>
//   )
// }

//******************************************************* */

//= redux toolkit
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// use for normal redux
// import { increase, decrease } from './counter.actions'
// use for redux toolkit
// import { increase, decrease } from './counter.reducer'
// use for redux toolkit with slice
import { increase, decrease } from './counter.slice'

export default function Counter() {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(decrease())}>Giảm</button>
      <div>{count}</div>
      <button onClick={() => dispatch(increase())}>Tăng</button>
    </div>
  )
}
