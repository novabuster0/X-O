import { useState } from "react";
import Square from "./Square";
import GetWinner from "./winnerCheck";

export default function Board() {
    //
    // variables
    //
    const [playerTurn, setPlayerTurn] = useState("X");
    const [board, setBoard] = useState(Array(9).fill(undefined));
    const [winner, setWinner] = useState();
    const [history, setHistory] = useState(Array(9).fill(undefined));
    const [moveCounter, setMoveCounter] = useState(1);
    //
    // handling functions
    //

    function HandleHistoryButtonClick(index) {
        // return to starting
        if (index == -1) {
            setBoard(Array(9).fill(undefined));
            console.log(board);
            setPlayerTurn("X");
            setMoveCounter(index + 2);
            return;
        }
        setPlayerTurn(index % 2 == 0 ? "X" : "O");
        setMoveCounter(index + 1);
        setBoard(history[index]);
        console.log(board);
    }

    const HandleSquareClick = (index) => {
        // Board
        //
        //
        //
        let newBoard = [...board];
        newBoard[index] = playerTurn;
        // Winner
        //
        //
        //
        let tempWinner = GetWinner(newBoard);
        if (tempWinner) {
            setWinner(tempWinner);
            setPlayerTurn(undefined);
            setBoard(Array(9).fill(tempWinner));
            return;
        }
        // Updating the Board and Player Turn if the Game is still running
        setBoard(newBoard);
        //
        //
        let newHistory = [...history];
        newHistory[moveCounter] = [...newBoard];
        setMoveCounter(moveCounter + 1);
        setHistory(newHistory);
        //
        setPlayerTurn(playerTurn == "X" ? "O" : "X");
    };
    return (
        <>
            <div className=" border-2 border-black w-150 justify-around p-3 gap-3 rounded-xl h-100 flex dark:bg-slate-600 dark:border-indigo-950">
                <div
                    className="flex justify-center items-center flex-wrap gap-2  border-2 p-2 flex-2 rounded-xl "
                    id="squares"
                >
                    {/* rendering the squares */}
                    {board.map((value, index) => {
                        return (
                            <Square
                                value={value}
                                ExternalHandleClick={() => {
                                    HandleSquareClick(index);
                                }}
                                isgameEnded={winner ? true : false}
                            />
                        );
                    })}
                </div>
                <div className="border-2 bg-violet-100 flex flex-1 flex-col text-center p-1.5 gap-2 items-center rounded-xl overflow-y-scroll dark:bg-gray-500">
                    <div
                        className="bg-cyan-100 border-2 h-10 rounded-xl p-2 hover:cursor-pointer hover:scale-110 w-35 transition-all dark:bg-gray-700 dark:text-blue-200"
                        onClick={() => {
                            HandleHistoryButtonClick(-1);
                        }}
                    >
                        <p>back to Move 0</p>
                    </div>
                    {history.map((value, index) => {
                        if (value) {
                            return (
                                <div
                                    className="bg-cyan-100 border-2 h-10 rounded-xl p-2 hover:cursor-pointer hover:scale-110 w-35 transition-all dark:bg-gray-700 dark:text-blue-200"
                                    onClick={() => {
                                        HandleHistoryButtonClick(index);
                                    }}
                                >
                                    <p>back to Move {index}</p>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </>
    );
}
