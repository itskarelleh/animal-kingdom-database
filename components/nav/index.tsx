"use client"
import React from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import Link from "next/link";
import SearchInput from '@/components/SearchInput';
import { Search } from 'lucide-react';
import {Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from '@/components/ui/dialog';

function Nav() {

    return (
        <nav className="h-16 bg-white w-full dark:bg-slate-800 sticky top-0 z-[998] shadow-xl">
            <div className="h-full w-full px-12 flex flex-row justify-between">
                    <Link href="/" className="w-2/5 font-bold h-full justify-center flex flex-col">
                        <span>
                            Animal Kingdom
                        </span>
                    </Link>
                <div id="menu-right" className="w-full relative flex flex-row justify-end items-center">
                    <Dialog>
                        <DialogTrigger><Search /><span className="sr-only">search</span></DialogTrigger>
                        <DialogContent className="dark:bg-slate-800">
                            <DialogHeader>
                                <DialogTitle>Search</DialogTitle>
                            </DialogHeader>
                                <SearchInput isDialogClose={true} />
                        </DialogContent>
                    </Dialog>
                    <ThemeToggle />
                </div>
            </div>
        </nav>

    );
}



export { Nav }
