import React from "react";
// import { useCountries } from "use-react-countries";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Select,
  Option,
} from "@material-tailwind/react";
import {FiUserPlus} from "react-icons/fi";
import {AiOutlineNumber} from "react-icons/ai";
 
function formatCardNumber(value: string) {
  const val = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  const matches = val.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || "";
  const parts = [];
 
  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }
 
  if (parts.length) {
    return parts.join(" ");
  } else {
    return value;
  }
}
 
function formatExpires(value: string) {
  return value
    .replace(/[^0-9]/g, "")
    .replace(/^([2-9])$/g, "0$1")
    .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
    .replace(/^0{1,}/g, "0")
    .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, "$1/$2");
}
 
const AddUser = () => {
  // const { co untries } = useCountries();
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardExpires, setCardExpires] = React.useState("");
 
  return (
      <Card className="w-5/6  flex flex-row">
        <CardHeader
          color="blue"
          floated={false}
          shadow={false}
          className="m-0 grid place-items-center rounded-l-none py-8 px-4 text-center"
        >
          <div className="mb-4 rounded-full border border-white/10 bg-white/10 p-6 text-white">
            <FiUserPlus className="h-10 w-10" />
          </div>
        </CardHeader>
        <CardBody className="w-full flex justify-center items-center">
          <Tabs className="overflow-visible ">    
              <TabPanel value="card" className="p-0">
                <form className=" flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <Input
                      label="نام کاربر جدید..."
                      value={formatCardNumber(cardNumber)}
                      onChange={(event) => setCardNumber(event.target.value)}
                    />
                    <Input
                      label="نام‌خانوادگی کاربر جدید..."
                      value={formatCardNumber(cardNumber)}
                      onChange={(event) => setCardNumber(event.target.value)}
                    />
                    <Input
                      label="شماره ملی کاربر جدید..."
                      value={formatCardNumber(cardNumber)}
                      onChange={(event) => setCardNumber(event.target.value)}
                    />
                    <div className="my-4 flex items-center gap-4">
                      <Input
                        label="رمز عبور..."
                        maxLength={5}
                        value={formatExpires(cardExpires)}
                        onChange={(event) => setCardExpires(event.target.value)}
                        containerProps={{ className: "min-w-[72px]" }}
                      />
                      <Input
                        label="تکرار رمز عبور..."
                        maxLength={4}
                        containerProps={{ className: "min-w-[72px]" }}
                      />
                    </div>
                    <Input label="شماره تماس..." />
                  </div>
                  <Button size="lg">ثبت</Button>
                </form>
              </TabPanel>
          </Tabs>
        </CardBody>
      </Card>
  );
}

export default AddUser