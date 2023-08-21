import classes from './Description.module.css'
import comida from './../../img/comida.jpg';

const Description = () => {
    return ( 
        <div className={classes.Description}>
            <div className={classes.Container}>
                    <h1 className={classes.Title}>PRONTO TENDREMOS NUEVOS DESCUENTOS</h1>
                    <h1 className={classes.SubTitle}>¡ATENTO A NUESTRAS RRSS!</h1>
                    <div className={classes.Section}>
                        <h2>¡Ven y saborea la diferencia hoy mismo!</h2>
                        <p>Estamos encantados de tenerte como parte de nuestra comunidad. Para hacer uso de tu cupón, simplemente contáctanos a través de WhatsApp al siguiente número: +56 9 72565655 o accediendo en nuestro link de WhatsApp y preséntanos tu cupón. Nuestro equipo estará encantado de atenderte y que disfrutes de nuestra carta.</p>
                    </div>
                    <img className={classes.comida} src={comida} alt="comida"></img>
            </div>
        </div>
     );
}
 
export default Description;