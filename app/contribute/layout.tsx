import React from 'react';

export default function Layout({ children } : { children: React.ReactNode }) {
    return (
        <div className="min-h-screen w-full flex flex-col">
            {children}
        </div>
    )
}
