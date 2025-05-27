"use cache";

export async function GetRepository({ blobID, id }: { blobID?: string; id?: string }) {
    if (!blobID && !id) {
        throw new Error("Either blob or ID must be provided");
    }
}
