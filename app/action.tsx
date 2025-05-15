"use server";

export const fetchAnime = async (page: number) => {
    const res = await fetch(
        `https://shikimore.one/api/animes?page=${page}&limit=8&order=popularity`
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    console.log(data);
    return data;
};
