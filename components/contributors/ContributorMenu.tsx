'use client'
import React from 'react';
import { useAuth,  UserButton} from '@clerk/nextjs';
import {Button} from '@/components/ui/button';

export default function ContributorMenu() {

    const { isSignedIn } = useAuth();

    return (
        <>
            <div className="flex flex-row justify-center items-center space-x-4 ml-4">
                {isSignedIn ? (
                       <>
                           <p>Welcome back!</p>
                           <UserButton afterSignOutUrl="/"/>
                       </>
                ) : (
                    <>
                        <Button className="bg-sky-500 hover:bg-slate-900 dark:hover:bg-slate-100 text-white dark:hover:text-slate-900">
                            <a href="/sign-in">Contribute</a>
                        </Button>
                    </>
                )}
            </div>
        </>
    )
}