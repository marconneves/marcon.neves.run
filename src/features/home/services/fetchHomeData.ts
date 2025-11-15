import { Home } from "../../../../payload-types";

export async function fetchHomeData(): Promise<Home> {
    const url = `${process.env.PAYLOAD_URL}/api/globals/home`;

    const res = await fetch(url, {
        next: { revalidate: 60 },
    });

    if (!res.ok) {
        throw new Error(`Falha ao buscar dados: ${res.statusText}`);
    }

    return res.json();
}