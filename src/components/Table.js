import styles from './Table.module.css'
import Field from './Field'

function Table(){

    return(
        <div>
            
            <div className={styles.column}>
                <div className={styles.linear}>
                    <Field id={0} />
                    <Field id={1} />
                    <Field id={2} />
                </div>
                <div className={styles.linear}>
                    <Field id={3} />
                    <Field id={4} />
                    <Field id={5} />
                </div>
                <div className={styles.linear}>
                    <Field id={6} />
                    <Field id={7} />
                    <Field id={8} />
                </div>    
            </div>
        </div>
    )
}

export default Table