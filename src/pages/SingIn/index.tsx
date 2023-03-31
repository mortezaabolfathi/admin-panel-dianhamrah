import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import ReactDOM from 'react-dom'

 
const SingIn = () => {
  return ReactDOM.createPortal(
    
    <div className="max-h-screen h-screen flex justify-center items-center">
    <Card className="w-96  ">
      <CardHeader
        variant="gradient"
        color="blue"
        className="mb-4 grid h-28 place-items-center text-center"
      >
        <Typography variant="h3" color="white">
            پنل مدیریت سایت دیان‌همراه فردا
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input label="شماره پرسنلی" size="lg" type="number"/>
        <Input label="رمزعبور" size="lg" type="password"/>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth>
          وارد شوید
        </Button>
      </CardFooter>
    </Card>
    </div>
  , document.getElementById('modal-parents')!
  )}

export default SingIn