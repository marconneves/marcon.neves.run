import { About } from "../../../../payload-types";

export async function fetchAboutData(): Promise<About> {
    const url = `${process.env.PAYLOAD_URL}/api/globals/about`;

    const res = await fetch(url, {
        next: { revalidate: 60 },
    });

    if (!res.ok) {
        throw new Error(`Falha ao buscar dados About: ${res.statusText}`);
    }

    return res.json();
}