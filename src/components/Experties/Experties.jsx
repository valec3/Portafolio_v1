import css from './Experties.module.scss';
import {projectExperience,WhatDoIHelp} from '../../utils/data';
import {motion} from 'framer-motion';
import {fadeIn, staggerContainer} from '../../utils/motion';

const Experties = () => {
    return (
        <motion.section 
            variants={staggerContainer}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false,amount:0.25}}
            className={css.wrapper}
        >
            <div className={`paddings yPaddings flexCenter innerWidth ${css.container}`}>
                <div className={css.leftSide}>
                    {
                        projectExperience.map((category, i) => (
                            <motion.div 
                                variants={fadeIn('right','tween',(i+1)*0.2,1)}
                                className={css.category} key={category.name}
                            >
                                <div className='flexCenter' style={{background:category.bg}}>
                                    <category.icon className={css.icon} size={25} color='#fff'/>
                                </div>
                                <div className={css.description}>
                                    <span className={css.name}>{category.name}</span>
                                    <span className={`secondaryText ${css.projects}`}>{category.projects} projects</span>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
                <div className={css.rightSide}>
                    <span className='primaryText' style={{display:'block'}}>What do I help?</span>
                    {
                        WhatDoIHelp.map((item, i) => (
                            <span key={item} className='secondaryText'>
                                {item}
                            </span>
                        ))
                    }
                    <div className={`flexCenter ${css.stats}`}>
                        <div className={`flexCenter ${css.stat}`}>
                            <span className='primaryText'>50+</span>
                            <span className='secondaryText'>Projects completed</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Experties