import { useState } from "react"
import styles from './Table.module.css'
import Field from './Field'
import Play from './Play'

function Table(){

    const [player, setPlayer] = useState('x')
    const fields = ['', '', '']

    function play(col, lin){
        setPlayer(player === "x" ? "o" : "x")
    }

    return(
        <div>
            <Play who={player} />
            
            <div className={styles.column}>
                <div className={styles.linear}>
                     
                    {fields.map((_p, index) => (
                    <div onClick={play}>
                        <Field name={index} player={player} />
                    </div>
                    ))}
                </div>
                <div className={styles.linear}>
                    {fields.map((_p, index) => (
                    <div onClick={play}>
                        <Field name={index} player={player} />
                    </div>
                    ))}
                </div>
                <div className={styles.linear}>
                    {fields.map((_p, index) => (
                    <div onClick={play}>
                        <Field name={index} player={player} />
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Table