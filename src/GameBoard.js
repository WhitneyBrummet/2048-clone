import './GameBoard.css'
import '../node_modules/react-grid-layout/css/styles.css'
import '../node_modules/react-resizable/css/styles.css'
import Grid from './Grid'
import React, { useEffect, useState, useRef} from 'react';
const isDevelopmentRun = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

function makeNewNumber(setGridValues){
    setGridValues(prevData => {
        const randomX = Math.floor(Math.random() * 4);
        const randomY = Math.floor(Math.random() * 4);

        while(prevData[randomX][randomY] != null){
            randomX = Math.floor(Math.random() * 4)
            randomY = Math.floor(Math.random() * 4)
        } // Create a deep copy

        const newData = prevData.map(randomX => [...randomX]);
        newData[randomX][randomY] = 1;
        return newData;
    });
}

function GameBoard() {
    const isMountedRef = useRef(!isDevelopmentRun);
    var [gridValues, setGridValues] = useState([
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
    ]);

    function moveUp(setGridValues){
        setGridValues(prevData => {    
            var newData = prevData.map(upX => [...upX]);
            for(var i = 1; i < newData.length; i++){
                for (var j = 0; j < newData[i].length; j++){
                    if(newData[i][j] != null){
                        if (i - 1 > -1 && newData[i - 1][j] == null){
                            if(i - 2 > -1 && newData[i - 2][j] == null){
                                if(i - 3 > -1 && newData[i - 3][j] == null){
                                    newData[i - 3][j] = newData[i][j];
                                    newData[i][j] = null;
                                } else{
                                    newData[i - 2][j] = newData[i][j];
                                    newData[i][j] = null;
                                }
                            } else{
                                newData[i - 1][j] = newData[i][j];
                                newData[i][j] = null
                            }
                        }
                    }
                }
            }
            if(JSON.stringify(newData)==JSON.stringify(prevData)){
                return newData   
            }
            var randomX = Math.floor(Math.random() * 4);
            var randomY = Math.floor(Math.random() * 4);

            while(newData[randomX][randomY] != null){
                randomX = Math.floor(Math.random() * 4)
                randomY = Math.floor(Math.random() * 4)
            }
                newData[randomX][randomY] = 1;

            return newData;
        });
    }
    function moveRight(setGridValues){
        setGridValues(prevData => {    
            var newData = prevData.map(upX => [...upX]);
            for (var j = newData.length - 1; j > -1; j--){
                for(var i = 0; i < newData.length; i++){
                    if(newData[i][j] != null){
                        if (j + 1 < 4 && newData[i][j + 1] == null){
                            if(j + 2 < 4 && newData[i][j + 2] == null){
                                if(j + 3 < 4 && newData[i][j + 3] == null){
                                    newData[i][j + 3] = newData[i][j];
                                    newData[i][j] = null;
                                } else{
                                    newData[i][j + 2] = newData[i][j];
                                    newData[i][j] = null;
                                }
                            } else{
                                newData[i][j + 1] = newData[i][j];
                                newData[i][j] = null
                            }
                        }
                    }
                }
            }
            if(JSON.stringify(newData)==JSON.stringify(prevData)){
                return newData   
            }
            var randomX = Math.floor(Math.random() * 4);
            var randomY = Math.floor(Math.random() * 4);

            while(newData[randomX][randomY] != null){
                randomX = Math.floor(Math.random() * 4)
                randomY = Math.floor(Math.random() * 4)
            }
                newData[randomX][randomY] = 1;

            return newData;
        });
    }
    function moveDown(setGridValues){
        setGridValues(prevData => {   
            var newData = prevData.map(upX => [...upX]);
            for(var i = newData.length - 1; i > -1; i--){
                for (var j = 0; j < newData[i].length; j++){
                    if(newData[i][j] != null){
                        if (i + 1 < 4 && newData[i + 1][j] == null){
                            if(i + 2 < 4 && newData[i + 2][j] == null){
                                if(i + 3 < 4 && newData[i + 3][j] == null){
                                    newData[i + 3][j] = newData[i][j];
                                    newData[i][j] = null;
                                } else{
                                    newData[i + 2][j] = newData[i][j];
                                    newData[i][j] = null;
                                }
                            } else{
                                newData[i + 1][j] = newData[i][j];
                                newData[i][j] = null
                            }
                        }
                    }
                }
            }
            if(JSON.stringify(newData)==JSON.stringify(prevData)){
                return newData   
            }
            var randomX = Math.floor(Math.random() * 4);
            var randomY = Math.floor(Math.random() * 4);

            while(newData[randomX][randomY] != null){
                randomX = Math.floor(Math.random() * 4)
                randomY = Math.floor(Math.random() * 4)
            }
                newData[randomX][randomY] = 1;

            return newData;
        });
    }
    function moveLeft(setGridValues){
        setGridValues(prevData => {    
            var newData = prevData.map(upX => [...upX]);
            for (var j = 1; j < newData.length; j++){
                for(var i = 0; i < newData.length; i++){
                    if(newData[i][j] != null){
                        if (j - 1 > -1 && newData[i][j - 1] == null){
                            if(j - 2 > -1 && newData[i][j - 2] == null){
                                if(j - 3 -1 && newData[i][j - 3] == null){
                                    newData[i][j - 3] = newData[i][j];
                                    newData[i][j] = null;
                                } else{
                                    newData[i][j - 2] = newData[i][j];
                                    newData[i][j] = null;
                                }
                            } else{
                                newData[i][j - 1] = newData[i][j];
                                newData[i][j] = null
                            }
                        }
                    }
                }
            }
            if(JSON.stringify(newData)==JSON.stringify(prevData)){
                return newData   
            }
            var randomX = Math.floor(Math.random() * 4);
            var randomY = Math.floor(Math.random() * 4);

            while(newData[randomX][randomY] != null){
                randomX = Math.floor(Math.random() * 4)
                randomY = Math.floor(Math.random() * 4)
            }
                newData[randomX][randomY] = 1;

            return newData;
        });
    }
    
    
    const handleKeyDown = (event) => {
        // Check if the pressed key is Enter
        if (event.key === 'w' || event.key == 'ArrowUp') {
            moveUp(setGridValues)
        } else if (event.key == 'd' || event.key == 'ArrowRight'){
            moveRight(setGridValues)
        } else if (event.key == 's' || event.key == 'ArrowDown'){
            moveDown(setGridValues)
        } else if (event.key == 'a' || event.key == 'ArrowLeft'){
            moveLeft(setGridValues)
        }
      };

    useEffect(() => {
        if (!isMountedRef.current) {
            isMountedRef.current = true;
            return undefined;
        }
    // Code to fetch new content or perform some action
        makeNewNumber(setGridValues)

        document.addEventListener('keydown', handleKeyDown);
    }, []);
    return (
        <div className='container'>
            <Grid values={gridValues} />
        </div>
    );
}

export default GameBoard;