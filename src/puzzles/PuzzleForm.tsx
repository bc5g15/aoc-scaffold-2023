import { FC, useState } from 'react';

export type Solution = (input: string) => JSX.Element;

type PuzzleFormProps = {
    onSolve: Solution;
}

export const PuzzleForm: FC<PuzzleFormProps> = ({ onSolve }) => {
    const [puzzleInput, setPuzzleInput] = useState('');
    const [solution, setSolution] = useState(<div>SolutionGoesHere</div>);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <textarea name='puzzle-input' 
                value={puzzleInput}
                onChange={e => setPuzzleInput(e.target.value.trim())}/>
            <button onClick={() => setSolution(onSolve(puzzleInput))}>
                Submit
            </button>
            <div id='solution-box' style={{
                padding: '1rem',
                border: '1px solid black',
                minHeight: '5rem'
            }}>{solution}</div>
        </div>
    )
};
