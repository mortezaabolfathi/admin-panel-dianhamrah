import React from "react";
// useCountries

import { Select, Option } from "@material-tailwind/react";
 
export default function ListCompany() {
  const countries =["ارم"," سبزوار "," نوش آذر "]
  return (
    <div className="w-full ltr">
      <Select
        size="lg"
        label="شرکت متقاضی"
        selected={(element) =>
          element &&
          React.cloneElement(element, {
            className: "bg-red-400 ml-1.5 flex items-center px-4 gap-2 pointer-events-none",
          })
        }
      >
        {countries.map((item)=>{
            return(
                <Option key={item} value={item} className="flex items-center gap-2 w-full">      
                     {item}
                </Option>
            )
        })}
      </Select>
    </div>
  );
}