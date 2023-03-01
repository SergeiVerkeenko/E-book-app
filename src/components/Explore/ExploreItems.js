import style from './Explore.module.css'

function ExploreItems({ imgClass, h2, p }) {
    return (
        <>
            <div className={style['text']}>
                <h3>{h2}</h3>
                <p>{p}</p>
            </div>
            <div className={style[imgClass]}></div>
        </>
    )
}

export default ExploreItems