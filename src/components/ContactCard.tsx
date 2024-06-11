import { PhoneIcon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";

const ContactCard = ({
  name,
  street,
  city,
  phone,
}: {
  name: string;
  street: string;
  city: string;
  phone: string;
}) => {
  return (
    <>
      <NavLink to="/contact" 
        className="bg-black text-white items-center flex justify-center
                         rounded-lg mt-5 h-16 w-64"
      >
        Kontaktovat knihaře &raquo;
      </NavLink>
      <ul className="flex flex-col space-y-0 pt-5">
        <li>{ name }</li>
        <li>{street}</li>
        <li>{city}</li>
        <li>
          <div className="flex ">
            <PhoneIcon className="h-5 w-5 text-black" />
            +420 {phone}
          </div>
        </li>
      </ul>
    </>
  );
};

export default ContactCard;
