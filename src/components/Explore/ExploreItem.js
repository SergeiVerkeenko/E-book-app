import style from './Explore.module.css'

function ExploreItem({ text }) {
    return (
        <>
            <div className={style['btn-explore']}>
                <p>
                    {text}
                </p>
            </div>

        </>
    )
}

export default ExploreItem