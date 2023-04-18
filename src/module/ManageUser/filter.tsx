import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Switch,
} from "@material-tailwind/react";
 
function Icon({ id, open }:{id:any, open:any}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
 
export default function Filter() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value:any) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (

      <Accordion open={open === 1} icon={<Icon id={1} open={open}/>} className="m-4 ">
        <AccordionHeader onClick={() => handleOpen(1)}>
         فیلتر کردن کاربران
        </AccordionHeader>
        <AccordionBody className="flex flex-row justify-around">
            <Switch id="company-name" label="نام شرکت" />
            <Switch id="title-courses" label="عنوان دوره" />
            <Switch id="not-courses" label="افرادی که دوره‌ای را شرکت نکرده‌اند" />
            <Switch id="not-certification" label="افرادی که گواهی ندارند" />
        </AccordionBody>
      </Accordion>

 
  );
}