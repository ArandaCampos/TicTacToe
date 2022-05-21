import { useState } from 'react'

const Field = ({id}) => {

	const [cells, setCells] = useState(Array(9).fill(''))
    const [player, setPlayer] = useState('x')
    const [winner, setWinner] = useState()

	const checkForWinner = (squares) => {
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
        console.log(squares)
		for (let combo in combos) {
			combos[combo].forEach((pattern) => {
				if (
					squares[pattern[0]] === '' ||
					squares[pattern[1]] === '' ||
					squares[pattern[2]] === ''
				) {
					// do nothing
				} else if (
					squares[pattern[0]] === squares[pattern[1]] &&
					squares[pattern[1]] === squares[pattern[2]]
				) {
					setWinner(squares[pattern[0]])
				}
			})
		}
	}

	const handleClick = (id) => {
		if (cells[id] !== '') {
			alert('already clicked')
			return
		}

		let squares = [...cells]
		let play = [...player]
		
		if (play === 'x') {
			squares[id] = 'x'
            setPlayer('o')
			console.log(play)
		} else {
			squares[id] = 'o'
            setPlayer('x')
        }
        
		setCells(squares)
		checkForWinner(squares)
	};

	const restart = () => {
		setWinner(null)
		setCells(Array(9).fill(''))
	};

    return(
        <>
            <button onClick={() => handleClick(id)}>{cells[id]}</button>
            {winner && (
				<>
					<p>{winner} is the winner!</p>
					<button onClick={() => restart()}>Play Again</button>
				</>
			)}
        </>
    )
}

export default Field