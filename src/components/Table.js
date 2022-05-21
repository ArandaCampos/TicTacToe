import { useState } from "react"
import styles from './Table.module.css'
import Field from './Field'

function Table(){

    const [player, setPlayer] = useState('x')

    function play(){
        setPlayer(player === "x" ? "o" : "x")
    }

    return(
        <div className={styles.column}>
            <div className={styles.linear}>
                <div onClick={play}>
                    <Field name={1} player={player} />
                </div>
                <div onClick={play}>
                    <Field name={2} player={player} />
                </div>
                <div onClick={play}>
                    <Field name={3} player={player} />
                </div>
            </div>
            <div className={styles.linear}>
                <div onClick={play}>
                    <Field name={4} player={player} />
                </div>
                <div onClick={play}>
                    <Field name={5} player={player} />
                </div>
                <div onClick={play}>
                    <Field name={6} player={player} />
                </div>
            </div>
            <div className={styles.linear}>
                <div onClick={play}>
                    <Field name={7} player={player} />
                </div>
                <div onClick={play}>
                    <Field name={8} player={player} />
                </div>
                <div onClick={play}>
                    <Field name={9} player={player} />
                </div>
            </div>
        </div>
    )
}

export default Table