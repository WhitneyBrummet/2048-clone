import './GameBoard.css'
import './App.css'
import React, { useEffect, useState, useRef} from 'react';
const isDevelopmentRun = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

function makeNewNumber(setGridValues){
    var data = [];
    setGridValues(prevData => {
        var randomX = Math.floor(Math.random() * 4);
        var randomY = Math.floor(Math.random() * 4);

        while(prevData[randomX][randomY] !== 0){
            randomX = Math.floor(Math.random() * 4)
            randomY = Math.floor(Math.random() * 4)
        } // Create a deep copy

        const newData = prevData.map(randomX => [...randomX]);
        var isFour = Math.floor(Math.random() * 10);
        if(isFour === 0){
            newData[randomX][randomY] = 4;
        } else{
            newData[randomX][randomY] = 1;
        }
        data = newData;
        return newData;
    });
    return data;
}
function colors(value){
    if(value === 0){
        return 'grid-cell'
    } else  {
        return 'filled'+value+' grid-cell';
    }
}

function GameBoard() {
    const isMountedRef = useRef(!isDevelopmentRun);
    var [gridValues, setGridValues] = useState([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ]);
    var [currentValue, setCurrentValue] = useState(0);
    var [highScore, setHighScore] = useState(0);
    var [gameOver, setGameOver] = useState(false)

    function rotateGrid(prevData){
        // Initialize the result matrix with zeros
        // Flip the matrix counterclockwise using nested loops
        var newData = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
        for (let i = 0; i < prevData.length; i++) {
            for (let j = 0; j < prevData.length; j++) {
                newData[prevData.length - j - 1][i] = prevData[i][j];
            }
        }
        return newData;
    }

    function moveUp(grid){     
            var column = [];
            for (var j = 0; j < grid.length; j++){
                column = [grid[0][j], grid[1][j], grid[2][j], grid[3][j]]
                column = column.filter(item => item !== 0);

                while (column.length !== 4){
                    column.push(0)
                }

                for(var i = 0; i < column.length; i++){
                    if(i !== column.length - 1 && column[i] != 0 && (JSON.stringify(column[i]) === JSON.stringify(column[i + 1]))){
                        column[i] = (Math.sqrt(column[i]) + 1)**2;
                        document.querySelector(".currScore").innerHTML = Math.floor(parseInt(document.querySelector(".currScore").innerHTML) + column[i]/2);
                        if(parseInt(document.querySelector(".currScore").innerHTML) > parseInt(document.querySelector(".highScore").innerHTML)){
                            document.querySelector(".highScore").innerHTML = parseInt(document.querySelector(".currScore").innerHTML);
                        }
                        column[i + 1] = 0;
                    }
                }

                column = column.filter(item => item !== 0);

                while (column.length !== 4){
                    column.push(0)
                }

                grid[0][j] = column[0]
                grid[1][j] = column[1]
                grid[2][j] = column[2]
                grid[3][j] = column[3]
            }
        return grid;
    }
    function startOver(){
        setGridValues(gridValues = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]);
        setGameOver(false)
        makeNewNumber(setGridValues)
        document.querySelector(".currScore").innerHTML = 0;
    }

    useEffect(() => {
        if (!isMountedRef.current) {
            isMountedRef.current = true;
            return undefined;
        }
    // Code to fetch new content or perform some action
        makeNewNumber(setGridValues)

        const handleKeyDown = (e) => {
            setGridValues(prevData => {
                var newData = prevData.map(prevData => [...prevData]);
                var data = newData;

                // Check if the pressed key is Enter
                if (e.key === 'w' || e.key === 'ArrowUp') {
                    moveUp(newData)
                } else if (e.key === 'd' || e.key === 'ArrowRight'){
                    newData = rotateGrid(newData)
                    newData = moveUp(newData)
                    newData = rotateGrid(newData)
                    newData = rotateGrid(newData)
                    newData = rotateGrid(newData)
                } else if (e.key === 's' || e.key === 'ArrowDown'){
                    newData = rotateGrid(newData)
                    newData = rotateGrid(newData)
                    newData = moveUp(newData)
                    newData = rotateGrid(newData)
                    newData = rotateGrid(newData)
                } else if (e.key === 'a' || e.key === 'ArrowLeft'){
                    newData = rotateGrid(newData)
                    newData = rotateGrid(newData)
                    newData = rotateGrid(newData)
                    newData = moveUp(newData)
                    newData = rotateGrid(newData)
                }
                if(JSON.stringify(prevData) !== JSON.stringify(newData)){
                    makeNewNumber(setGridValues)
                }
                else{
                    if(!newData.flat().includes(0)){
                        var mark = 0;
                        for (let i = 0; i < 4; i++) {
                            for (let j = 0; j < 4; j++) {
                              // Check for duplicates to the right
                              if (j < 4 - 1 && newData[i][j] === newData[i][j + 1]) {
                                mark += 1;
                              }
                        
                              // Check for duplicates below
                              if (i < 4 - 1 && newData[i][j] === newData[i + 1][j]) {
                                mark += 1;
                              }
                            }
                        }
                        if(mark === 0){
                            setGameOver(true)
                            setCurrentValue(parseInt(document.querySelector(".currScore").innerHTML))
                            setHighScore(parseInt(document.querySelector(".highScore").innerHTML))
                        }
                    }
                }
                return newData;
            });

        }
        document.addEventListener('keydown', handleKeyDown, true);
    }, []);
    return (
        <div className="App">
            <header>
                <h1>Squares</h1>
                <div className='currScore'>{currentValue}</div>
                <div className='highScore'>{highScore}</div>
            </header>
            <div className='container'>
                <div className="grid-container">
                    {gridValues.map((row, rowIndex) => (
                        <div key={rowIndex} className="grid-row">
                            {row.map((value, colIndex) => (
                                <div key={colIndex} id={colIndex} className={colors(value)}>
                                    {value}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div id='gameOver' className={gameOver ? 'gameOver' : 'gameOn'}>
                <h1>Game Over</h1>
                <div>
                    <p>Score: {currentValue}</p>
                    <p>{currentValue === highScore ? "New!" : ''}</p>
                </div>
                <button onClick={startOver}>Play again</button>
            </div>
        </div>
    );
}

export default GameBoard;