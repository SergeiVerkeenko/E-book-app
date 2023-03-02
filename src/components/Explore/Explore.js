import { useState } from 'react'
import Content from './Content'
import style from './Explore.module.css'

function Explore() {
    const explor = [{
        id: 1,
        text: 'Internal editor'
    },
    {
        id: 2,
        text: 'Compact preview'
    },
    {
        id: 3,
        text: 'Convenient search'
    },
    {
        id: 4,
        text: 'Audio version'
    }]


    const [content, setContent] = useState(<Content label={'Internal editor'} />)


    function getContent(event) {
        setContent(<Content label={event.target.textContent} />)
    }

    return (
        <>
            <h2> Explore more features</h2>

            <div onClick={getContent} className={style['wrapper-btn']}>
                {explor.map(el => <div className={style['btn-explore']}>
                    {el.text}
                </div>
                )}
            </div>
            <div className={style['wrapper']} >
                {content}
            </div>
        </>
    )
}

export default Explore