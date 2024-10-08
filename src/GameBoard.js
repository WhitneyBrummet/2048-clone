import './GameBoard.css'
import '../node_modules/react-grid-layout/css/styles.css'
import '../node_modules/react-resizable/css/styles.css'
import Grid from './Grid'
import React, { useEffect, useState, useRef} from 'react';
const isDevelopmentRun = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

function color(value){
    return 'filled'+value;
}

function GameBoard() {
    const isMountedRef = useRef(!isDevelopmentRun);
    const [gridValues, setGridValues] = useState([
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
    ]);
    
    useEffect(() => {
        if (!isMountedRef.current) {
            isMountedRef.current = true;
            return undefined;
        }
    // Code to fetch new content or perform some action
        const randomX = Math.floor(Math.random() * 4)
        const randomY = Math.floor(Math.random() * 4)
        setGridValues(prevData => {
            const newData = prevData.map(randomX => [...randomX]); // Create a deep copy
            newData[randomX][randomY] = 1;
            return newData;
          });
    }, []);
    return (
        <div className='container'>
            <Grid values={gridValues} />
        </div>
    );
}

export default GameBoard;