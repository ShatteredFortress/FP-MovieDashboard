import React from 'react'

import "./Authorspage.css";
const Authorspage = () => {
    return (
        <div>
            <div className={'authorspage'}>
                <h1 style={{color: "white"}}>This is the authors page</h1>
                <section className={'authorbox'}>
                    <h2>name</h2>
                    <img alt="photoguy"></img>
                    <p>
                        Descrption about said person
                    </p>
                </section>
                <section className={'authorbox'}>
                    <h2>name2</h2>
                    <img alt="photoguy"></img>
                    <p>
                        Descrption about said person
                    </p>
                </section>
                
            </div>
        </div>
    )
}

export default Authorspage