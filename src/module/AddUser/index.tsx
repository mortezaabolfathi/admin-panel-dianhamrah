import React from "react";
import * as Yup from "yup";
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
import { Formik, Form, Field, validateYupSchema, useFormik } from "formik";
import {toast } from 'react-toastify';

interface MyFormValues {
  firstName: string,
  lastName: string,
  phoneNumber: string,
  password: string,
  nationalCode:number
}

const AddUser = () => {
  const initialValues: MyFormValues = {
     firstName: '', lastName:'', phoneNumber:'',  password:'', nationalCode:0
    };
  const [update, { data: userData, isLoading }] = useAddUserMutation();

  const handelAddUser = async  (values: any) => {
     await update(values);
     toast("کاربر جدید به ثبت رسید")
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
            <Formik
               initialValues={initialValues}
               validationSchema={Yup.object({
                firstName:Yup.string().required("لطفا نام کاربر را  وادرد کنید")
                .min(3, "حداقل طول نام  3 کارکتر باید باشد"),
                lastName:Yup.string().required("لطفا نام‌خانوادگی کاربر را وادرد کنید")
                .min(3, "حداقل طول نام خانوادگی  3 کارکتر باید باشد"),
                password: Yup.string()
                .min(2, "طول پسورد حداقل 2 کارکتر است")
                .max(10, "حداکثر طول پسورد 10 کارکتر می‌باشد")
                .required("پسورد را  وارد کنید"),
                phoneNumber: Yup.number()
                .required("لطفا شماره همراه  را وارد نمایید"),
                nationalCode: Yup.number()
                .required("لطفا شماره ملی را وارد نمایید")
            })}
               onSubmit={(values)=> {
                handelAddUser(values)
               }}
            >
                   {({
        values,
        errors,
        touched,
        handleChange,
        setFieldValue,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
              <form className=" flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <Input 
                  label="نام کاربر جدید..."
                   name="firstName"
                   value={values.firstName}
                   onBlur={handleBlur}
                   onChange={handleChange}

                   />
                   <p className="text-red-300 text-[12px]">
                        {touched.firstName && errors.firstName }
                   </p>
                  <Input 
                  label="نام‌خانوادگی کاربر جدید..."
                   name="lastName" 
                   value={values.lastName}
                   onBlur={handleBlur}
                   onChange={handleChange}
                   />
                    <p className="text-red-300 text-[12px]">
                        {touched.lastName && errors.lastName }
                   </p>
                  <Input
                    label="شماره ملی کاربر جدید..."
                    type="number"
                    name="nationalCode"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.nationalCode}
                  />
                    <p className="text-red-300 text-[12px]">
                        {touched.nationalCode && errors.nationalCode }
                   </p>
                  <div className="my-4 flex items-center gap-4">
                    <div className="flex flex-col gap-1">
                        <Input 
                        label="رمز عبور..." 
                        type="password" 
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        />
                        <p className="text-red-300 text-[12px]">
                            {touched.password && errors.password }
                    </p>
                    
                    </div>
                        
                    <Input
                     label="تکرار رمز عبور..." 
                     type="password" 
                     onChange={handleChange}
                     />
                  </div>
                  <Input
                   label="شماره تماس..."
                    name="phoneNumber" 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phoneNumber}
                    />
                    <p className="text-red-300 text-[12px]">
                        {touched.phoneNumber && errors.phoneNumber }
                   </p>
                  {/* <Button variant="text" className="flex items-center gap-3">
                    <AiOutlineCloudUpload strokeWidth={2} className="h-5 w-5" />
                    بارگذاری عکس
                  </Button> */}
                </div>
                <Button size="lg" type="submit">
                  ثبت
                </Button>
              </form>
      )}
            </Formik>
          </TabPanel>
        </Tabs>
      </CardBody>
    </Card>
  );
};

export default AddUser;
