import style from '../card/card.module.css'
import Button from '../button/button'
import placeHolder from '../../assets/placeholder.png'

export default function Card({ title, image, content, tags }) {

    return (

        <div className={style.card}>
            <img className={style.image} src={image || placeHolder} alt="" />
            <div className={style.card_body}>
                <h3 className={style.card_title}>{title}</h3>
                <p className={style.card_description}>{content}</p>
                <Button />
            </div>
        </div>
    )

}