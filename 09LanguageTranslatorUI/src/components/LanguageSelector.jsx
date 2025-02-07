import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

const LanguageSelector = () => {

    const { changeLanguage } = useContext(LanguageContext);

    return (
        <div className="w-full min-h-full mt-5 text-2xl  font-bold ">
            <h3 className="p-5">Select Language : </h3>
            <select className="p-5 border-2" onChange={(e) => changeLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="ur">Urdu</option> 
            <option value="ar">Arabic</option> 
            <option value="de">German</option> 
            </select>

           
        </div>
    );
    
}
export default LanguageSelector;