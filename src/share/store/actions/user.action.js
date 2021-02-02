import axios from 'axios'
export const SAVE_USER = 'save_user'

export const fetchUser = () => async dispatch => {
  const response = await axios.get('http://jsonplaceholder.typicode.com/users')
  // let response = {
  //   data: [
  //     {
  //       id: 1, name: '</script><script>alert(1)</script>'
  //     }
  //   ]
  // }
  dispatch({
    type: SAVE_USER,
    payload: response
  })
}