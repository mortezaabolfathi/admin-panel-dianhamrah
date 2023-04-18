import React, { useState } from "react";
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
import { Formik } from "formik";
import { toast } from "react-toastify";
import PasswordInVisible from "../../common/components/icon/passwordInVisible";
import PasswordVisible from "../../common/components/icon/passwordVisible";
import { Spinner } from "../../common/components/spinner";
import ListCompany from "./listCompoany";

interface MyFormValues {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: number;
  nationalCode: number;
  confirmPassword: number;
  // pathImage?: any;
}

const AddUser = () => {
  const initialValues: MyFormValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    nationalCode: 0,
    password: 0,
    confirmPassword: 0,
    // pathImage: "",
  };
  const [update, { data: userData, isLoading }] = useAddUserMutation();

  const handelAddUser = async (values: any) => {
    await update(values);
    toast("کاربر جدید به ثبت رسید");
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <Card className="w-5/6  flex flex-row">
      <CardHeader
        color="blue"
        floated={false}
        shadow={false}
        className="m-0  flex justify-center place-items-center rounded-l-none py-8 px-4 text-center"
      >
        <div className="mb-4 rounded-xl border border-white/10 bg-white/10 p-6 text-white">
          <FiUserPlus className="h-80 w-20" />
        </div>
      </CardHeader>
      <CardBody className="w-full flex justify-center items-center">
        <Tabs className="overflow-visible ">
          <TabPanel value="card" className="p-0">
               <div className="flex justify-between items-center mb-2">
               <label> عکس کاربر با فرمت JPG </label>
               <Button variant="outlined" className="flex items-center gap-3 w-1/2 text-gray-500 border-gray-400" >
                <AiOutlineCloudUpload strokeWidth={2} className="h-5 w-5" /> بارگذاری عکس
                      <input
                        className="cursor-pointer absolute block  w-full h-12  pin-r pin-t opacity-0"
                        type="file"
                        name="pathImage"
                        id="file-type"      
                />
              </Button>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={Yup.object({
                firstName: Yup.string()
                  .required("لطفا نام کاربر را  وادرد کنید")
                  .min(3, "حداقل طول نام  3 کارکتر باید باشد"),
                lastName: Yup.string()
                  .required("لطفا نام‌خانوادگی کاربر را وادرد کنید")
                  .min(3, "حداقل طول نام خانوادگی  3 کارکتر باید باشد"),
                phoneNumber: Yup.number()
                  .min(1000 * 1000 * 1000, "شماره همراه را کوتاه وارد کردید")
                  .max(
                    1000 * 1000 * 1000 * 10,
                    " شماره همراه نباید بیشتر از 11 رقم باشد"
                  )
                  .required("لطفا شماره همراه را وارد نمایید"),
                nationalCode: Yup.number()
                  .required("شماره ملی را وارد کنید"),
                password: Yup.number()
                  .min(2, "طول پسورد حداقل 2 کارکتر است")
                  .required("پسورد را  وارد کنید"),
                confirmPassword: Yup.number()
                  .required("لطفا رمز عبور را تکرار کنید")
                  .oneOf([Yup.ref("password")], " رمز عبور یکسان نیست  "),
                // pathImage: Yup.mixed().required("عکس را بار گذاری کنید"),
                //   //@ts-ignore
                //   .test("fileType" , "پسوند فایل باید jpg باشد" , value => value && ["image/jpg" , "image/jpeg" , "image/*" ].includes(value?.type))
              })}
              onSubmit={async (values, { resetForm }) => {
                const {
                  firstName,
                  lastName,
                  nationalCode,
                  password,
                  phoneNumber,
                  // pathImage,
                } = values;
                console.log(values);
                //@ts-ignore
                const file = document.getElementById("file-type").files[0];
                const formData = new FormData();
                formData.append("file", file);
                formData.append("firstName", firstName);
                formData.append("lastName", lastName);
                formData.append("password", `${password}`);
                formData.append("nationalCode", `${nationalCode}`);
                formData.append("phoneNumber", `${phoneNumber}`);
                await handelAddUser(formData);
                // resetForm();
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
                isSubmitting,
                resetForm,
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
                      {touched.firstName && errors.firstName}
                    </p>
                    <Input
                      label="نام‌خانوادگی کاربر جدید..."
                      name="lastName"
                      value={values.lastName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <p className="text-red-300 text-[12px]">
                      {touched.lastName && errors.lastName}
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
                      {touched.nationalCode && errors.nationalCode}
                    </p>
                   <ListCompany/>
                  
                    <div className="my-4 flex items-center gap-4">
                      <div className="relative container">
                        <Input
                          type={isPasswordVisible ? "text" : "password"}
                          placeholder="رمز عبور"
                          className="
                              text-base
                              border border-gray-300
                              rounded
                              outline-none"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                        <div
                          className="absolute inset-y-0 left-0 flex items-center px-4 text-gray-600"
                          onClick={() => {
                            togglePasswordVisibility();
                          }}
                        >
                          {isPasswordVisible ? (
                            <PasswordVisible />
                          ) : (
                            <PasswordInVisible />
                          )}
                        </div>
                        <p className="text-red-300 text-[12px]">
                          {touched.password && errors.password}
                        </p>
                      </div>
                      <div className="relative container">
                        <Input
                          type={isPasswordVisible ? "text" : "password"}
                          placeholder="تکرار عبور"
                          className="
                              text-base
                              border border-gray-300
                              rounded
                              outline-none"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="confirmPassword"
                          value={values.confirmPassword}
                        />
                        <div
                          className="absolute inset-y-0 left-0 flex items-center px-4 text-gray-600"
                          onClick={() => {
                            togglePasswordVisibility();
                          }}
                        >
                          {isPasswordVisible ? (
                            <PasswordVisible />
                          ) : (
                            <PasswordInVisible />
                          )}
                        </div>
                        <p className="text-red-300 text-[12px]">
                          {touched.password && errors.confirmPassword}
                        </p>
                      </div>
                    </div>
                    <Input
                      label="شماره تماس..."
                      name="phoneNumber"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phoneNumber}
                    />
                    <p className="text-red-300 text-[12px]">
                      {touched.phoneNumber && errors.phoneNumber}
                    </p>
                  </div>
                  <Button size="lg" type="submit">
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <Spinner />
                      </div>
                    ) : (
                      "افزودن"
                    )}
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
