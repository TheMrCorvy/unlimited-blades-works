import React, { useState } from 'react'

const MusicPlayer = () => {
    const [playing, setPlaying] = useState(true)

    const handleClick = () => {

        setPlaying(!playing)
    }
    return (
        <>
            {playing && <audio src='/music.mp3' autoPlay loop></audio>}
            <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleClick}
                style={{ zIndex: 400, position: 'absolute', right: '2%', top: '2%' }}
            >
                {playing ? 'Pause' : 'Play'}
            </button>
        </>
    )
}

export default MusicPlayer