import { List } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { portfolio } from '../../Data/Data'

function Projects() {
    const [list, setList] = useState(portfolio);
    return (
        <>
            <article>
                <div className="container">
                    <div className="catButton">
                        ddddddddddddddddddddddddddddddddd
                    </div>
                </div>
                <div className="content grid3">
                    {list.map((items) =>
                        <div className="box">
                            <div className="img">
                                <img src={items.cover} alt="" />
                            </div>
                            <div className="overlay">
                                <h3>{items.title}</h3>
                                <h3>{items.name}</h3>
                            </div>
                        </div>
                    )}
                </div>
            </article>
        </>
    )
}

export default Projects
