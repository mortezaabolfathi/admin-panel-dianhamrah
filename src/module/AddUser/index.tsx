import React from "react";
// import { useCountries } from "use-react-countries";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Tabs,
  TabPanel,
} from "@material-tailwind/react";
import { FiUserPlus } from "react-icons/fi";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useAddUserMutation } from "../../services/User";

const AddUser = () => {
  const [update, { data: userData, isLoading }] = useAddUserMutation();

  const handelAddUser = async  (e: any) => {
    e.preventDefault()
   
     await update({
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      phoneNumber: e.target.phoneNumber.value,
      password: e.target.password.value,
      nationalCode: +e.target.nationalCode.value,
    });
  };

  return (
    <Card className="w-5/6  flex flex-row">
      <CardHeader
        color="blue"
        floated={false}
        shadow={false}
        className="m-0  flex justify-center place-items-center rounded-l-none py-8 px-4 text-center"
      >
        <div className="mb-4 rounded-xl border border-white/10 bg-white/10 p-6 text-white">
          <FiUserPlus className="h-60 w-20" />
        </div>
      </CardHeader>
      <CardBody className="w-full flex justify-center items-center">
        <Tabs className="overflow-visible ">
          <TabPanel value="card" className="p-0">
            <form className=" flex flex-col gap-4" onSubmit={handelAddUser}>
              <div className="flex flex-col gap-2">
                <Input label="نام کاربر جدید..." name="firstName" />
                <Input label="نام‌خانوادگی کاربر جدید..." name="lastName" />
                <Input
                  label="شماره ملی کاربر جدید..."
                  type="number"
                  name="nationalCode"
                />
                <div className="my-4 flex items-center gap-4">
                  <Input label="رمز عبور..." type="password" name="password" />
                  <Input label="تکرار رمز عبور..." type="password" />
                </div>
                <Input label="شماره تماس..." name="phoneNumber"  />
                {/* <Button variant="text" className="flex items-center gap-3">
                  <AiOutlineCloudUpload strokeWidth={2} className="h-5 w-5" />
                  بارگذاری عکس
                </Button> */}
              </div>
              <Button size="lg" type="submit">
                ثبت
              </Button>
            </form>
          </TabPanel>
        </Tabs>
      </CardBody>
    </Card>
  );
};

export default AddUser;
