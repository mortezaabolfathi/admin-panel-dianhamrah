import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Term } from "../../constants/types";
import {
  Button,
  Card,
  CardHeader,
  Input,
  Tooltip,
} from "@material-tailwind/react";
import {
  useCreateTermMutation,
  useDeleteTermMutation,
} from "../../services/term";
import { Direction } from "react-data-table-component";
import { toast } from "react-toastify";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker, { DateObject } from "react-multi-date-picker";
import type { Value } from "react-multi-date-picker";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_fa from "react-date-object/locales/gregorian_fa";
import { convertEnglishToPersion, toFarsiNumber } from "../../utils";
import DataTable from "react-data-table-component";
import { MdEdit, MdOutlineDeleteForever } from "react-icons/md";
import DeleteModal from "../../common/components/ModalDelete";
import { useListTermQuery } from "../../services/term";
import { customStyles } from "../ManageUser/customStyleTable";
import { Spinner } from "../../common/components/spinner";

interface CustomProps {
  title: "";
  date: Value;
  termDate: 0;
}

const CoursesModule = () => {
  const [value, setValue] = useState<Value>();
  const { data: terms, refetch } = useListTermQuery(null);

  const [deleteUser] = useDeleteTermMutation();

  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const ModalDelete = () => {
    setOpenDeleteModal(!openDeleteModal);
  };
  const ModalEdit = () => {
    setOpenEditModal(!openEditModal);
  };
  const [userSelect, setUserSelect] = useState();
  const columns: any = [
    {
      name: "متقاضی  ",
      selector: (rwo: any) => <span className="text-[16px]">{rwo.title}</span>,
      center: true,
    },
    {
      name: "عنوان  ",
      selector: (rwo: any) => <span className="text-[16px]">{rwo.title}</span>,
      center: true,
    },
    {
      name: "تاریخ برگزاری",
      selector: (rwo: any) => (
        <span className="text-[16px] font-bold">
          {new Date(rwo.date).toLocaleDateString("fa")}
        </span>
      ),
      center: true,
    },
    {
      name: "مدت زمان برگزاری",
      selector: (rwo: any) => toFarsiNumber(rwo.termDate),
      center: true,
    },
    {
      name: "مدیریت",
      selector: (row: any) => (
        <div className="flex gap-4">
          <Tooltip content="حذف دوره آموزشی">
            <div
              className="cursor-pointer text-2xl  hover:text-blue-500"
              onClick={() => {
                ModalDelete();
                setUserSelect(row);
              }}
            >
              <MdOutlineDeleteForever />
            </div>
          </Tooltip>
          <Tooltip content="ویرایش دوره آموزشی">
            <div
              className="cursor-pointer text-2xl  hover:text-blue-500"
              onClick={() => {
                ModalEdit();
                setUserSelect(row);
              }}
            >
              <MdEdit />
            </div>
          </Tooltip>
        </div>
      ),
      grow: 1,
      center: true,
    },
  ];

  const initialvalues: CustomProps = {
    title: "",
    date: "",
    termDate: 0,
  };
  const [update, { data, isLoading }] = useCreateTermMutation();

  const handleAddTerm = async (values: any) => {
    const { title, date, termDate } = values;
    await update({
      title,
      date: new Date(date).toJSON(),
      termDate,
    });
    toast("دوره جدید ثبت شد");
    refetch()
  };

  return (
    <div className="flex flex-row gap-2  h-full justify-center w-full">
      <Card className="w-1/4 h-full">
        <CardHeader
          color="blue"
          floated={false}
          shadow={false}
          className="m-0  flex justify-center place-items-center rounded-b-none text-center p-4"
        >
          <div className="rounded-xl border border-white/10 bg-white/10 p-2 text-white">
            <h1>دوره مورد نظر وارد کنید</h1>
          </div>
        </CardHeader>
        <Formik
          initialValues={initialvalues}
          // validationSchema={Yup.object({
          //   title: Yup.string().required("عنوان دوره را وارد کنید"),
          //   date: Yup.mixed().required("تاریخ را یه صورت دقیق وارد کنید"),
          //   termDate: Yup.number().required("مدت زمان دوره را وارد کنید"),
          // })}
          onSubmit={(values) => {
            //@ts-ignore
            const customDate = new DateObject(value)
              .convert(gregorian)
              .format();
            //@ts-ignore
            const value2 = new Date(convertEnglishToPersion(customDate));
            // console.log(value2.toJSON());
            // console.log(values);
            handleAddTerm({
              title: values.title,
              date: value2,
              termDate: values.termDate,
            });
            refetch();
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
          }) => (
            <form
              action=""
              onSubmit={handleSubmit}
              className="h-full w-full"
            >
            <div className="flex flex-col h-full justify-between ">
              <div className="p-4 flex flex-col gap-6">
                      <Input
                        label="عنوان دوره "
                        type="text"
                        name="title"
                        value={values.title}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    <DatePicker
                      calendar={persian}
                      locale={persian_fa}
                      value={value}
                      onChange={setValue}
                      placeholder="تاریخ دوره"
                      style={{
                        height: "41px",
                        width:"100%",
                        fontSize: "14px",
                        padding: "3px 10px"
                      }}
                    />
                    <Input
                      label="مدت زمان دوره به ساعت"
                      type="number"
                      name="termDate"
                      value={values.termDate}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
        
                    <Input
                      label="شرکت متقاضی را وارد کنید "
                      type="text"
                      name="applicant"
                      // value={values.termDate}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
           
              </div>
              <Button size="lg" type="submit">
                {isLoading ?
                   <div className="flex items-center justify-center">
                   <Spinner/>
               </div>
                :("افزودن")
              }
              </Button>
            </div>
            </form>
          )}
        </Formik>
      </Card>
      <div className="w-3/4">
        <p className="text-3xl underline  text-center font-bold p-4 ">لیست دوره‌ها</p>
        <DataTable
          direction={Direction.RTL}
          customStyles={customStyles("", "", "4px")}
          columns={columns}
          data={terms ?? []}
        />
        {openDeleteModal ? (
          <DeleteModal
            deleteUser={deleteUser}
            refetch={refetch}
            userSelect={userSelect}
            open={openDeleteModal}
            handleOpen={ModalDelete}
          />
        ) : (
          ""
        )}
        {/* {openEditModal? <EditModal userSelect={userSelect}  refetch={refetch} open={openEditModal} handleOpen={ModalEdit}/> : ("")} */}
      </div>
    </div>
  );
};

export default CoursesModule;
