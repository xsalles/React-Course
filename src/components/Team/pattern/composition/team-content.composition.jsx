import "../../../Team/styles.css"

import Senai from '../../../../assets/images/senai-logo-1.png'
import Dribble from '../../../../assets/images/Dribble.png'
import LinkedIn from '../../../../assets/images/linkedin.png'
import X from '../../../../assets/images/X.png'

export default function Content() {
    return (
        <div className='content-container'>
            <img src={Senai} alt="" className='content-image' />
            <div className="content-title">
                <h1>SENAI-SP</h1>
                <h2>Paulo Ernesto Tolle</h2>
            </div>
            <p className='content-description'>
            Melhor unidade do senai
            </p>
            <div className="content-icons">
                <a href="https://br.linkedin.com/company/senai-nacional" target='_blank'>
                    <img src={LinkedIn} alt="" />
                </a>
                <a href="https://x.com/SENAInacional?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target='_blank'>
                    <img src={X} alt="" />
                </a>
                <a href="https://dribble.com/" target='_blank'>
                    <img src={Dribble} alt="" />
                </a>    
            </div>
        </div>
    )
}