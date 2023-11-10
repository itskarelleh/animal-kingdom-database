"use server"

import PasswordPopover from "@/components/PasswordPopover";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
export default async function Page() {
    const cookiesStore = cookies();
    const loginCookies = cookiesStore.get(process.env.PASSWORD_COOKIE_NAME!);
    const isLoggedIn = !!loginCookies?.value;


    if(isLoggedIn) {
        //redirect to /api/admin
        redirect('/api/admin')
    }

    return (
        <>
            <PasswordPopover />
        </>
    )
}