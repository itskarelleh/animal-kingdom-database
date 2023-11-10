"use server"
import {cookies} from "next/headers";

export const CookiesAndStuff = () => {

    const cookiesStore = cookies();
    const loginCookies = cookiesStore.get(process.env.PASSWORD_COOKIE_NAME!);
    const isLoggedIn = !!loginCookies?.value;

    return { cookiesStore, loginCookies, isLoggedIn };
}
