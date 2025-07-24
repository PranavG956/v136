
import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {
    const url = params.url;
    const client= await clientPromise;
    const db = client.db("slinks");
    const collection = db.collection("url");
    const doc = await collection.findOne({ shortUrl: url });
    if(doc){
        redirect(doc.url);
    }
    else {
        redirect(`${process.env.NEXT_PUBLIC_URL}`);
    }
}