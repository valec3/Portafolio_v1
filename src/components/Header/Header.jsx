import React, { useState } from 'react'
import css from "./Header.module.scss"
import {motion} from "framer-motion"

import {BiMenuAltRight} from "react-icons/bi"
import { VscGithub } from "react-icons/vsc";
import { AiFillLinkedin } from "react-icons/ai";
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
                        <li><a href="#">Sobre mí</a></li>
                        <li><a href="#">Experiencia</a></li>
                        <li><a href="#">Proyectos</a></li>
                        <li><a href="#">Educación</a></li>
                        <li className={`flexCenter ${css.social}`}>
                            <a href="https://github.com/valec3" target="_blank">
                                <VscGithub size={25}/>
                            </a>
                            <a href="https://www.linkedin.com/in/victormaye-data-scientist/" target="_blank">
                                <AiFillLinkedin size={25}/>
                            </a>
                        </li>
                    </ul>
                    
                    <div 
                        className={`${css.menuIcon}`}
                        onClick={()=>setMenuOpened((prev)=> !prev)}
                    >
                        <BiMenuAltRight size={30}/>
                    </div>
                </nav>
            </div>
        </motion.header>
    )
}

export default Header