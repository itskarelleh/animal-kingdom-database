import {Permit} from "permitio";

export type Response = {
    message: string,
}

export const permit = new Permit({
    // in production, you might need to change this url to fit your deployment
    pdp: "https://cloudpdp.api.permit.io",
    // your api key
    token: "permit_key_WbJHuw4XU5r7VtpM4vVvRDtM5djQvH57xWdBvoW724R9bt5pa5saP8QLhtmv9i13gmDjXq8wFEHXhdulz5we2h"
});