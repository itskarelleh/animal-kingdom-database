'use server'

export async function submitPassword(e: any, values: any) {
    e.preventDefault();

    const request = await fetch(`/api/protected`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({values}),
    });

    const data = await request.json();

    console.log(data);

    return data;

}