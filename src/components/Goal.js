import React from "react";

export default function Goal(props){
    const { info } = props;
    const body = info.body;
    return (
        <div className="goal-wrapper" style={{
            backgroundColor: info.done ? 'rgba(1, 129, 184, 1)' : 'rgba(1, 129, 184 , 0.2)' 
        }}> 
            <div className="goal">
                <h3>{info.heading} {info.done && <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft: '10px'}} width="18" height="18" viewBox="0 0 24 24"><path fill="white" d="M24 4.685l-16.327 17.315-7.673-9.054.761-.648 6.95 8.203 15.561-16.501.728.685z"/></svg> }</h3>
                {body && <ul>
                    {body.map((i)=>( 
                        <li> {i} </li>
                    ))}
                </ul> }
            </div>
        </div>
    )
};
