import React from 'react';
import Copy from "./iconComponent/Copy";

function Result({ pass }) {
    return (
        <div className="wid h-16 items-center flex justify-between wid p-8 bg-[var(--bgb)] jetbrains-mono">
            <p className="text-[var(--tx)] text-2xl hover:text-[var(--gray)]">
                {pass}
            </p>
            <div 
                className="flex gap-4 text-[var(--green)] hover:text-[var(--tx)] cursor-pointer"
               
            >
                <Copy />
            </div>
        </div>
    );
}

export default Result;
