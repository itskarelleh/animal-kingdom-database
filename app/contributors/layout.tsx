import React from 'react';
import ContributorNav from '@/components/contributors/ContributorNav';

export default function Layout({ children } : { children: React.ReactNode }) {
    return (
        <div className="min-h-screen w-full flex flex-col bg-slate-300">
            <ContributorNav />
            {children}
        </div>
    )
}
