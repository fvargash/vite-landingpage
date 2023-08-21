import classes from './Coupon.module.css'
import cupon from './../../img/cupon.png'

const Coupon = () => {
    return ( 
        <div className={classes.Coupon}>
            <div className={classes.Container}>
                <h1 className={classes.Title}>¡ NOS ENCANTA QUE DISFRUTES !</h1>
                <h1 className={classes.SubTitle}>POR ESO TE TRAEMOS UN 20% DE DESCUENTO EN NUESTROS PRODUCTOS</h1>
                <img className={classes.cupon} src={cupon} alt="cupon"></img>
            </div>
        </div>
     );
}
 
export default Coupon;