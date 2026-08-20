import { useEffect, useState } from 'react';
import React from 'react';

function Clock() {

    const [now, setNow] = useState(new Date())

    // useEffect нужен чтобы зайти в функцию только один раз, благодаря нему не будет рекурсии
    useEffect(() => {
        const interval = setInterval(() => setNow(new Date()), 1000)

        return () => {
            clearInterval(interval)
            console.log()
        }
    }, [])

    return (
        <>
            <span>{now.toLocaleTimeString()},</span>&nbsp;
            <span>{now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </>
    )
}

export default Clock;