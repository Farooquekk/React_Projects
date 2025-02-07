import { useContext } from "react"
import LanguageContext from "../context/LanguageContext"

const TextDisplay = () => {

    // first getting the selected language
    const { language } = useContext(LanguageContext); 
 
    // Object for tranlating ---> just basic thing in future we'll use API. 
    const translations = {
        en: "Hello, welcome to our app!",      
        ur: "ہیلو، ہماری ایپ میں خوش آمدید!",   
        ar: "مرحباً، أهلاً وسهلاً في تطبيقنا!",  
        de: "Hallo, willkommen in unserer App!" 
      };
      
    
    return (<div>
        <h2 className="text-2xl  font-bold p-5">{translations[language]}</h2>
        {console.log(translations[language])}
        
    
    </div>);
    
}
export default TextDisplay