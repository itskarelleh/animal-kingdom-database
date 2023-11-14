"use client"
import React, { useState } from 'react';
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import SearchInput from "@/components/SearchInput";
import {X, Menu, Search} from 'lucide-react';
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {AnimalData} from "@/graphql/queries";
import {Button} from "@/components/ui/button";

function Nav() {
    // State to manage the toggle state of the menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="h-16 bg-white w-full dark:bg-slate-800 sticky top-0 z-[998] shadow-xl">
            <div className="h-full w-full px-8 flex flex-row justify-between">
                <div>
                    <Link href="/" className="font-bold">
                        Animal Kingdom Database
                    </Link>
                </div>
                <div id="menu-right" className="w-full relative flex flex-row justify-end">
                    <Dialog>
                        <Button variant="ghost" size="icon">
                            <DialogTrigger><Search /><span className="sr-only">search</span></DialogTrigger>
                        </Button>
                        <DialogContent className="dark:bg-slate-800">
                            <DialogHeader>
                                <DialogTitle>Search</DialogTitle>
                            </DialogHeader>
                            <SearchInput />
                        </DialogContent>
                    </Dialog>
                    <ThemeToggle />
                </div>
            </div>
        </nav>

    );
}



export { Nav }
