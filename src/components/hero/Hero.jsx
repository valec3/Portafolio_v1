import React from 'react'
import css from "./Hero.module.scss"
import {motion} from "framer-motion"
import { fadeIn, slideIn, staggerContainer } from '../../utils/motion'
export const Hero = () => {
    return (
        <section className={`paddings ${css.wrapper}`}>
            <motion.div 
            initial="hidden"
            whileInView="show"
            variants={staggerContainer}
            viewport={{once:false,amount:0.20}}
            className={`innerWidth  ${css.container}`}>
                <div className={css.upperElements}>
                    <motion.span 
                        variants={fadeIn("right","tween",0.3,1)}
                        className='primaryText'>Hey there, <br/>I am Valece
                    </motion.span>
                    
                    <motion.span 
                        variants={fadeIn("left","tween",0.3,1)}
                        className='secondaryText'>
                            I design beatiful simple <br/> things , And I love what i do
                    </motion.span>
                </div>
                <motion.div className={css.person} variants={fadeIn("up","tween",0.3,1)}>
                    <motion.img variants={slideIn("up","tween",0.3,1.3)} src="./person.png" alt="imagen de perfil" />
                </motion.div>
                <motion.a variants={fadeIn("right","tween",0.3,1)} className={css.email} href="mailto:v1c7orotakmer@gmail.com">v1c70rotakmer@gmail.com</motion.a>
                <div className={css.lowerElements}>
                    <motion.div className={css.experience} variants={fadeIn("right","tween",0.3,1)}>
                        <div className="primaryText">10</div>
                        <div className="secondaryText">
                            <span>Years</span>
                            <span>Experience</span>
                        </div>
                    </motion.div>
                    <motion.div className={css.certificate} variants={fadeIn("left","tween",0.3,1)}>
                        <img src="./certificate.png" alt="icono del certificado" />
                        <span>CERTIFIED PROFATIONAL</span>
                        <span>UI/UX DESIGNER</span>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}
