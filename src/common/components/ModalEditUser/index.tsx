import React from "react";
import { Fragment } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Tabs,
  TabPanel,
  Dialog,
} from "@material-tailwind/react";
import { FiUserPlus } from "react-icons/fi";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useGetOneUserQuery, useUpdateUserMutation } from "../../../services/User";
import { toast } from "react-toastify";

interface EditModal {
  open: boolean;
  handleOpen: any;
  refetch:any
  userSelect:any
}

const EditModal:React.FC<EditModal> = (props) => {
  const [updateUser] = useUpdateUserMutation()
  const handleSumbit = async (e:any)=>{
    e.preventDefault()
    await updateUser({
      id:props.userSelect.id,
      body:{
        firstName:e.target.firstName.value,
        lastName:e.target.lastName.value,
        password:e.target.password.value,
        phoneNumber:`${e.target.phoneNumber.value}`,
        nationalCode:+e.target.nationalCode.value
      }
    })
    props.refetch()
    toast("کاربر ویرایش شد")
    props.handleOpen()
  }
  return (
    <Fragment>
      <Dialog open={props.open} handler={props.handleOpen}>
        <Card>
          <CardHeader
            color="blue"
            floated={false}
            shadow={false}
            className="m-0 rounded-t-lg rounded-bt-0  flex justify-center place-items-center text-center"
          >
            <div className="rounded-full m-2 border border-white/10 bg-white/10 p-6 text-white">
              <FiUserPlus />
            </div>
          </CardHeader>
          <CardBody className="w-full flex justify-center items-center">
            <Tabs className="overflow-visible ">
              <TabPanel value="card" className="p-0">
                <form className=" flex flex-col gap-4" onSubmit={handleSumbit}>
                  <div className="flex flex-col gap-2">
                    <Input label="نام کاربر" defaultValue={props.userSelect?.firstName} name="firstName" />
                    <Input label="نام‌خانوادگی کاربر" defaultValue={props.userSelect?.lastName} name="lastName" />
                    <Input label="شماره ملی کاربر" type="number" defaultValue={props.userSelect?.nationalCode} name="nationalCode" />
                    <div className="my-4 flex items-center gap-4">
                      <Input label="رمز عبور" type="password" defaultValue={props.userSelect?.password} name="password" />
                      <Input label="تکرار رمز عبور" type="password" />
                    </div>
                    <Input label="شماره تماس" defaultValue={props.userSelect?.phoneNumber} name="phoneNumber" />
                    <Button variant="text" className="flex items-center gap-3">
                      <AiOutlineCloudUpload
                        strokeWidth={2}
                        className="h-5 w-5"
                      />
                     تغییر عکس کاربر
                    </Button>
                  </div>
                  <div className="flex justify-between">
                    <Button size="lg" className="w-1/2" type="submit">ثبت</Button>
                    <Button size="lg" variant="text" onClick={props.handleOpen} className="w-1/4">لغو</Button>
                  </div>
                </form>
              </TabPanel>
            </Tabs>
          </CardBody>
        </Card>
      </Dialog>
    </Fragment>
  );
};

export default EditModal;
