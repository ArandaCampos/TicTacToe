import React, { useState, useEffect } from 'react'
import styles from './Table.module.css'
import Field from './Field'
import Play from './Play'

function Table(){

    const [cells, setCells] = useState(Array(9).fill(''))
    const [player, setPlayer] = useState('X')
	const [winner, setWinner] = useState('')
	
	useEffect(() => {
		let empty = cells.includes("") ? true : false
		let combos = {
			across: [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
			],
			down: [
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
			],
			diagnol: [
				[0, 4, 8],
				[2, 4, 6],
			],
		}
		for (let combo in combos) {
			combos[combo].forEach((pattern) => {
				if (
					cells[pattern[0]] === '' ||
					cells[pattern[1]] === '' ||
					cells[pattern[2]] === ''
				) {
					// do nothing
				} else if (
					cells[pattern[0]] === cells[pattern[1]] &&
					cells[pattern[1]] === cells[pattern[2]]
				) {
                    setWinner(cells[pattern[0]])
				}
			})
		}
		if (!empty){
			alert("Deu velha")
			reset()
		} 
	}, [cells])

	function reset(){
		setCells(Array(9).fill(''))
		setPlayer('X')
	}

	useEffect(() =>{
		if (winner !== ''){
			alert('Jogador ' + winner + ' ganhou!')
			reset()
			setWinner('')
		}
	}, [winner])

	function handleClick(id){
		if (cells[id] !== '') {
			alert('already clicked')
			return
		}

		let squares = [...cells]

		player === 'X' ? squares[id] = 'X' : squares[id] = 'O'
		player === 'X' ? setPlayer('O') : setPlayer('X')		
		
		setCells(squares)
	};

    return(

        <div>
            <Play who={player} />
            <div className={styles.column}>
                <div className={styles.linear}>
                    <button className={styles.field} onClick={() => handleClick(0)}><Field play={cells[0]} /></button>
                    <button className={styles.field} onClick={() => handleClick(1)}><Field play={cells[1]} /></button>
                    <button className={styles.field} onClick={() => handleClick(2)}><Field play={cells[2]} /></button>
                </div>
                <div className={styles.linear}>
                    <button className={styles.field} onClick={() => handleClick(3)}><Field play={cells[3]} /></button>
                    <button className={styles.field} onClick={() => handleClick(4)}><Field play={cells[4]} /></button>
                    <button className={styles.field} onClick={() => handleClick(5)}><Field play={cells[5]} /></button>
                </div>
                <div className={styles.linear}>
                    <button className={styles.field} onClick={() => handleClick(6)}><Field play={cells[6]} /></button>
                    <button className={styles.field} onClick={() => handleClick(7)}><Field play={cells[7]} /></button>
                    <button className={styles.field} onClick={() => handleClick(8)}><Field play={cells[8]} /></button>
                </div>
            </div>
        </div>
    )
}

export default Table
