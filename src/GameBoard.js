import './GameBoard.css'
import '../node_modules/react-grid-layout/css/styles.css'
import '../node_modules/react-resizable/css/styles.css'
import GridLayout from 'react-grid-layout'

function GameBoard() {
    const layout = [
        { i: "a", x: 0, y: 0, w: 1, h: 1, static: true },
        { i: "b", x: 1, y: 0, w: 1, h: 1, static: true },
        { i: "c", x: 2, y: 0, w: 1, h: 1, static: true },
        { i: "d", x: 3, y: 0, w: 1, h: 1, static: true },
        { i: "e", x: 0, y: 1, w: 1, h: 1, static: true },
        { i: "f", x: 1, y: 1, w: 1, h: 1, static: true },
        { i: "g", x: 2, y: 1, w: 1, h: 1, static: true },
        { i: "h", x: 3, y: 1, w: 1, h: 1, static: true },
        { i: "i", x: 0, y: 2, w: 1, h: 1, static: true },
        { i: "j", x: 1, y: 2, w: 1, h: 1, static: true },
        { i: "k", x: 2, y: 2, w: 1, h: 1, static: true },
        { i: "l", x: 3, y: 2, w: 1, h: 1, static: true },
        { i: "m", x: 0, y: 3, w: 1, h: 1, static: true },
        { i: "n", x: 1, y: 3, w: 1, h: 1, static: true },
        { i: "o", x: 2, y: 3, w: 1, h: 1, static: true },
        { i: "p", x: 3, y: 3, w: 1, h: 1, static: true },
    ]
    return (
        <div className='container'>
            <GridLayout
                className="layout"
                layout={layout}
                cols={4}
                rowHeight={100}
                width={450}
            >
                <div key="a" className='item'></div>
                <div key="b" className='item'></div>
                <div key="c" className='item'></div>
                <div key="d" className='item'></div>
                <div key="e" className='item'></div>
                <div key="f" className='item'></div>
                <div key="g" className='item'></div>
                <div key="h" className='item'></div>
                <div key="i" className='item'></div>
                <div key="j" className='item'></div>
                <div key="k" className='item'></div>
                <div key="l" className='item'></div>
                <div key="m" className='item'></div>
                <div key="n" className='item'></div>
                <div key="o" className='item'></div>
                <div key="p" className='item'></div>
            </GridLayout>
        </div>
    );
}

export default GameBoard;