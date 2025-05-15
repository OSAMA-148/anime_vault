"use server";


export const fetchAnime = async () => {
    const res = await fetch("https://shikimore.one/api/animes");
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    
    const data = await res.json();
    console.log(data);
    return data;
}