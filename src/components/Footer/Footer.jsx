import classes from "./Footer.module.css"
import { BiTimeFive } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineContacts } from "react-icons/ai";

const Footer = () => {
    return ( 
        <div className={classes.Footer}>
            <div className={classes.Container}>
            <div className={classes.sections}>
                <BiTimeFive className={classes.icon}  size='50px' style={{padding: '1%'}} />
                <h1 className={classes.Title} >Horarios</h1>
                <h2 className={classes.SubTitle} >Lunes a Domingo: 9 AM — 23 PM</h2>
            </div>
            <div className={classes.sections}>
                <CiLocationOn className={classes.icon}  size='50px' style={{padding: '1%'}} />
                <h1 className={classes.Title} >Dirección</h1>
                <h2 className={classes.SubTitle} >Colón 355, Talcahuano</h2>
            </div>
            <div className={classes.sections}>
                <AiOutlineContacts className={classes.icon}  size='50px' style={{padding: '1%'}} />
                <h1 className={classes.Title} >Contacto</h1>
                <h2 className={classes.SubTitle} >+56 9 72565655</h2>
            </div>
            </div>  
                       
        </div>
     );
}
 
export default Footer;