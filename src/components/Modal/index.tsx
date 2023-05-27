'use client';

import React, { useState, useEffect } from "react"
import Image from 'next/image'
import dynamic from 'next/dynamic';

import classNames from './classNames'
import useClassNames from '../../hooks/useClassNames'

const Modal = () => {
    const [open, setOpen] = useState(true)
    const [play, setPlay] = useState(false)

    const MusicPlayer = dynamic(() => import('../MusicPlayer'));

    useEffect(() => setOpen(true), [])

    const {
        opaqueBg,
        flexContainer,
        positionRelative,
        itemsCenter,
        activateBtn,
        cancelBtn
    } = useClassNames(classNames)

    const handleClick = (option: 'play' | 'cancel') => {
        option === 'play' && setPlay(true)
        setOpen(false)
    }

    const backdrop = () => {
        if (open) {
            return 'ease-out duration-300 opacity-100'
        }
        return 'ease-in duration-300 opacity-0'
    }

    const panel = () => {
        if (open) {
            return 'ease-out duration-300 opacity-100 translate-y-0 sm:scale-100'
        }
        return 'ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
    }

    return (
        <>
            {play && <MusicPlayer />}
            <div className={`relative z-10 transition-all ease-in duration-300 ${backdrop()}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className={opaqueBg}></div>
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className={flexContainer + ' ' + panel()}>
                        <div className={positionRelative}>
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className={itemsCenter}>
                                        <Image src='/sound-icon.svg' className="text-red-600" alt='Sound Icon' width={30} height={30} />
                                    </div>
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">This site plays music</h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">If you want to have the full experience, you can activate the sound on your device.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button type="button" onClick={() => handleClick('play')} className={activateBtn}>Activate</button>
                                <button type="button" onClick={() => handleClick('cancel')} className={cancelBtn}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal