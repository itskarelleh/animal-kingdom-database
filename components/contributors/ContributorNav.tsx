import React from 'react';
import {UserButton} from "@clerk/nextjs";

export default function ContributorNav() {

    return (
        <>
            <nav className="h-16 fixed top-16 w-full">
                <div className="w-full px-12 h-full flex flex-row">
                    <div className="justify-end">
                        Welcome back!
                        <UserButton afterSignOutUrl="/" />
                    </div>
                </div>
            </nav>
        </>
    )
}