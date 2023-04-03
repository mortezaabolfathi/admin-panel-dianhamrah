import AddUser from '../../../module/AddUser'
import React from "react"
const AddUserPage = () => {
  return (
    <div className='h-full flex justify-center items-center'>
      <AddUser/>
    </div>
  )
}

export default React.memo(AddUserPage);