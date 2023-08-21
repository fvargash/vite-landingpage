import classes from './Banner.module.css'
import rincon from './../../img/rincon.png'
import whatsapp from './../../img/whatsapp.png'

const Banner = () => {
    return ( 
        <div className={classes.Banner}>
            <div className={classes.Container}>           
                <img className={classes.rincon} src={rincon} alt="rincon"></img>
                <img className={classes.whatsapp} src={whatsapp} alt="whatsapp" onClick={(e) => window.open("https://api.whatsapp.com/send?phone=56972565655&text=Que+emoci%C3%B3n+ya+est%C3%A1s+m%C3%A1s+cerca%0ASolicita+tu+pedido+con+20%25+de+descuento.", "_blank").focus}></img>
                <h1 className={classes.Title}>¡Saborea la tradición y el sabor de nuestra carta y obtén un cupón con 20% de descuento!</h1>
                <h1 className={classes.SubTitle}>¡40 cupones disponibles!</h1>             
            </div>
        </div>
     );
}
 
export default Banner;