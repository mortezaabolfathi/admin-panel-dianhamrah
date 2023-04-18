import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Radio,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { toast } from "react-toastify";
import { termApi, useListTermQuery } from "../../../services/term";
import {
  useCreateCertificateMutation,
  useDeleteCertificateMutation,
  useGetCertificateQuery,
} from "../../../services/Certificate";
import { Term } from "../../../constants/types";
import { Spinner } from "../spinner";

interface Certification {
  handleOpen: any;
  open: boolean;
  userSelect: any;
}
const CertificationModal: React.FC<Certification> = (props) => {
  const { data } = useListTermQuery(null);

  const [update, { data: createCertificate, isLoading}] = useCreateCertificateMutation();

  const [deleteCertificate] = useDeleteCertificateMutation();

  const { data: certificate, refetch } = useGetCertificateQuery(
    props.userSelect.id
  );

  const handleSendData = async (e: any) => {
    e.preventDefault();
    //@ts-ignore
    const termId = Array.from(e.target.getElementsByTagName("input")).filter((item) => item.checked)[0].dataset.id;
    await update({
      id: props.userSelect.id,
      termId: parseInt(termId, 10),
    });
    await refetch()
  };
  return (
    <Dialog open={props.open} handler={props.handleOpen}>
      <form onSubmit={handleSendData}>
        <DialogHeader>بارگذاری گواهی‌نامه کاربر</DialogHeader>
        {certificate?.term ? (
          <div className="flex flex-col items-center ">
            <DialogBody divider>گواهی های بارگذاری شده</DialogBody>
            <div className="flex items-center flex-col   w-5/6 border-solid border-[1px] border-black rounded p-2 m-2">
                  <div className="flex flex-col justify-between w-full gap-2">

                    <div className="flex items-center gap-2">
                      <span className="font-semibold">نام دوره :</span>
                      <span className="text-blue-500">{certificate?.term.title}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-semibold">مدت زمان دوره :</span>
                      <span className="text-blue-500">{certificate?.term.termDate}</span>
                    </div>
                   </div>
                   
                   <div className="flex flex-row justify-between w-full ">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">تاریخ دوره :</span>
                        <span className="text-blue-500">
                          {new Date(certificate?.term.date).toLocaleDateString("fa")}
                        </span>
                      </div>
                      <div
                        className="text-red-400 mt-2 text-[12px] cursor-pointer border-blue-gray-300 border-2 p-1 rounded-md hover:bg-red-400 hover:text-white	"
                        onClick={async (e: any) => {
                          await deleteCertificate(props.userSelect.id);
                          await refetch();
                        }}
                      >
                        حذف گواهی کاربر
                      </div>
                    </div>  
            </div>
          </div>
        ) : null}

        <DialogBody divider>نوع گواهی را برای بارگذاری انتخاب کنید</DialogBody>
        <div className="flex gap-10 justify-center h-14 p-2">
          {data
            ? data.map((term: Term) => (
                <Radio
                  id="ripple-on"
                  name="termRadio"
                  data-id={`${term.id}`}
                  label={`${term.title}`}
                  ripple={true}
                  defaultChecked={certificate?.termId == term.id}
                />
              ))
            : null}
            <Button variant="text" color="blue" type="submit" className="border-2 border-blue-200	" >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <Spinner />
              </div>
            ) : (
              "تایید"
            )}
            </Button>
        </div>
        <DialogFooter>
            <Button variant="gradient" color="blue" onClick={props.handleOpen}>
                بستن پنجره
              </Button>
        </DialogFooter>
      </form>
    </Dialog>
  );
};

export default CertificationModal;
