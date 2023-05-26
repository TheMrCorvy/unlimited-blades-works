'use client';

import React, { useState } from "react"

import classNames from './classNames'
import useClassNames from '../../hooks/useClassNames'

const Modal = () => {
    const [open, setOpen] = useState(true)

    const customClassNames = useClassNames

    const {
        opaqueBg,
        flexContainer,
        positionRelative,
        itemsCenter,
        activateBtn,
        cancelBtn
    } = customClassNames(classNames)

    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className={opaqueBg}></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className={flexContainer}>
                    <div className={positionRelative}>
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className={itemsCenter}>
                                    {/* <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                    </svg> */}
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
                            <button type="button" className={activateBtn}>Activate</button>
                            <button type="button" className={cancelBtn}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal