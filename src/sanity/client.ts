import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: "s2g38qvd",
    dataset: "production",
    useCdn: true, // `false` if you want to ensure fresh data
    apiVersion: "2024-03-01", // use current date
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}
