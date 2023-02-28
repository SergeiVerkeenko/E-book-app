import style from './Advantages.module.css'
import AdvantagesItem from './AdvantagesItem'

function Advantages() {

    const adventages = [{
        id: 1,
        header: 'Fast loading',
        text: 'Books will download and save at the same speed regardless of the quality of the Internet.',
        imageClass: 'item-img1'
    },
    {
        id: 2,
        header: 'Several eBook formats',
        text: 'It supports several eBook formats and direct reading from zip archives.',
        imageClass: 'item-img2'
    },
    {
        id: 3,
        header: 'Multilingual',
        text: 'Our team working on app localisation. In the nearest future the app will support 10 languages.Multilingual',
        imageClass: 'item-img3'
    }]

    return (

        <div className={style['wrapper']}>
            <h2>Get closer to advantages </h2>

            <div className={style['container']}>

                {adventages.map(el => <AdvantagesItem id={el.id} text={el.text} imageClass={el.imageClass} header={el.header} key={el.id} />)}
                {/* {adventages.map(el => <AdvantagesItem key={el.id} text={el.text} header={el.header} imageClass={el.imageClass}></AdvantagesItem>)} */}
            </div>


        </div>
    )


}

export default Advantages