import "../../../Team/styles.css"

import Senai from '../../../../assets/images/senai-logo-1.png'
import Dribble from '../../../../assets/images/Dribble.png'
import LinkedIn from '../../../../assets/images/linkedin.png'
import X from '../../../../assets/images/X.png'

export default function Content(props) {
    return (
        <div className='content-container'>
            <img src={props.image ? props.image : Senai} alt="" className='content-image' />
            <div className="content-title">
                <h1>{props.name}</h1>
                <h2>{props.role}</h2>
            </div>
            <p className='content-description'>
            {props.description}
            </p>
            <div className="content-icons">
                <a href={props.LinkedIn} target='_blank'>
                    <img src={LinkedIn} alt="" />
                </a>
                <a href={props.X} target='_blank'>
                    <img src={X} alt="" />
                </a>
                <a href={props.Dribble} target='_blank'>
                    <img src={Dribble} alt="" />
                </a>    
            </div>
        </div>
    )
}