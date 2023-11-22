import { NavLink, NavLinkProps} from 'react-router-dom';
import { FC } from 'react';
import { puzzleIndex2015 } from './puzzles/2015/puzzleIndex2015';
import { puzzleIndex2018 } from './puzzles/2018/puzzleIndex2018';

const StyleLink: FC<NavLinkProps> = ({ children, to }) => {
    return (
        <NavLink to={to} style={({ isActive }) => ({
            fontWeight: isActive ? 'bolder' : '',
        })}>
            {children}
        </NavLink>
    )
}

export function Navbar() {
    return (
        <>
            <StyleLink to='template'>Puzzle Template</StyleLink>
            {...puzzleIndex2015.map(({name}, index) => (
                <StyleLink key={`2015-${index}`} to={`2015/${index+1}`}>
                    {name}
                </StyleLink>
            ))}
            {...puzzleIndex2018.map(({name}, index) => (
                <StyleLink key={`2018-${index}`} to={`2018/${index+1}`}>
                    {name}
                </StyleLink>
            ))}
        </>
    )
}