import { IconContext } from "react-icons";
import { MdSpaceDashboard } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export const IMdSpaceDashboard = () => {
  return (
    <IconContext.Provider value={{ size: "30px", style: { verticalAlign: 'middle' } }}>
      <div>
        <MdSpaceDashboard />
      </div>
    </IconContext.Provider>
  );
};

export const IMdKeyboardArrowRight = () => {
  return (
    <IconContext.Provider value={{ size: "30px", style: { verticalAlign: 'middle' } }}>
      <div>
        <MdKeyboardArrowRight />
      </div>
    </IconContext.Provider>
  );
};
