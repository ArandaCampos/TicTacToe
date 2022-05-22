import styles from './Table.module.css'

function Play({who}){
    return(
        <>
            <p className={styles.linear}>Player: {who}</p>
        </>
    )
}

export default Play