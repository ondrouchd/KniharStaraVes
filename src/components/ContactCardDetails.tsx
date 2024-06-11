
import { PhoneIcon } from "@heroicons/react/20/solid";

const ContactCardDetails = ({
  name,
  street,
  city,
  phone,
  email,
  ico,
  description
}: {
  name: string;
  street: string;
  city: string;
  phone: string;
  email: string;
  ico: string;
  description: string;
}) => {
  return (
    <>
    <ul className="flex flex-col space-y-0 pt-5">
        <li>{ name }</li>
        <li>{ street }</li>
        <li>{ city }</li>
        <li>
          <div className="flex ">
            <PhoneIcon className="h-5 w-5 text-black" />
            +420 { phone }
          </div>
        </li>
        <li className="pt-5">Email: { email }</li>
        <li>IČO: { ico }</li>
        <li className="pt-5">{ description }</li>
      </ul>
    </>
  )
}

export default ContactCardDetails