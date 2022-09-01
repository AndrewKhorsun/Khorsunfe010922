import React, {useState } from "react";

export const Scale: React.FC = () => {


    const [lending, setLending] = useState(7.4);
    const [configur, setConfigur] = useState(0.2);
    const [checkOut, setCheckOut] = useState(7.0);
    const [d, setD] = useState(3.8);

    const allTime = lending + configur + checkOut + d;

    let landing = (lending / allTime * 100).toFixed(2);
    let conf = (configur / allTime * 100).toFixed(2)
    let check = (checkOut / allTime * 100).toFixed(2)
    let deal = (d / allTime * 100).toFixed(2)

    const Random = () => {
        setLending(Math.floor(1 + Math.random() * (100 + 1 - 1)))
        setConfigur(Math.floor(1 + Math.random() * (100 + 1 - 1)))
        setCheckOut(Math.floor(1 + Math.random() * (100 + 1 - 1)))
        setD(Math.floor(1 + Math.random() * (100 + 1 - 1)))
    };


    let interval = setInterval(() => Random(), 53000)




    return (
        <div className="container">
            <div className="block">
                <div className="title">Landing Page</div>
                <div className="line__landing">
                    <div
                        className="line__landing--scale"
                        style={{ width: `${landing}%`, left: "0%" }}
                    ></div>
                </div>
            </div>
            <div className="block">
                <div className="title">Configurator</div>
                <div className="line__conf">
                    <div className="line__conf--scale" style={{ width: `${conf}%`, left: `${landing}%` }}></div>
                </div>
            </div>
            <div className="block">
                <div className="title">Check-out</div>
                <div className="line__check">
                    <div className="line__check--scale" style={{ width: `${check}%`, left: `${+conf + +landing}%` }}></div>
                </div>
            </div>
            <div className="block">
                <div className="title">Deal</div>
                <div className="line__deal">
                    <div className="line__deal--scale" style={{ width: `${deal}%`, left: `${+conf + +landing + +check}%` }}></div>
                </div>
            </div>
            <button onClick={() => {
                Random()
                clearInterval(interval)
            }}
            >
                RANDOM
            </button>
        </div>


    )
};