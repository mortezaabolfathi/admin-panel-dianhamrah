import { Api } from "../../Config";
import { useAddUserMutation, useGetUsersQuery } from "../../services/User";



const CoursesModule = () => {

  const {data} = useGetUsersQuery("")
  // const [update , {data:userData , isLoading}] = useAddUserMutation()


  console.log(data);

  return (
    <div>
        {/* <button onClick={(e)=>{update({
          "firstName":"morteza",
          "lastName":"abolfathi",
          "phoneNumber":"09359919333",
          "password":"12345",
          "nationalCode":1234
        })}}>
          بده بزنیم
        </button> */}
    </div>
  )
}

export default CoursesModule