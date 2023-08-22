import React, { useState } from 'react'
import css from "./Header.module.scss"
import {motion} from "framer-motion"

import {BiMenuAltRight, BiPhoneCall} from "react-icons/bi"
import {getMenuStyles, headerVariants} from "../../utils/motion"
import useHeaderShadow from '../../hooks/useHeaderShadow'

const Header = () => {

    const [menuOpened, setMenuOpened] = useState(false);
    const headerShadow = useHeaderShadow()

    return (
        <motion.header 
        style={{boxShadow:headerShadow}}
        initial="hidden"
        whileInView="show"
        variants={headerVariants}
        viewport={{once:false,amount:0.25}}
        className={ `paddings ${css.wrapper}`}>
            <div className={`flexCenter innerWidth ${css.container}`}>
                <a className={css.name}>
                    Valece
                </a>
                <nav className='navbar'>
                    <ul 
                    style={getMenuStyles(menuOpened)}
                    className={`flexCenter ${css.menu}`}>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Experiencia</a></li>
                        <li><a href="#">Proyectos</a></li>
                        <li><a href="#">Testimonios</a></li>
                        <li className={`flexCenter ${css.phone}`}>
                            <p >+51 921 461 345</p>
                            <BiPhoneCall size={"40px"}/>
                        </li>
                    </ul>
                    {/* menu responsive */}
                    <div className={` ${css.menuIcon}`}
                    onClick={()=>setMenuOpened((prev)=> !prev)}>
                        <BiMenuAltRight size={30}/>
                    </div>
                </nav>
            </div>
        </motion.header>
    )
}

export default Header