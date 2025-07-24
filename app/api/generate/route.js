import clientPromise from "@/lib/mongodb"

export async function POST(request) {
    const body= await request.json();
    const client= await clientPromise;
    const db = client.db("slinks");
    const collection = db.collection("url");

    const doc= await collection.findOne({ shortUrl: body.shorturl });
    if(doc){
        return Response.json({ success:false, error:true, message: 'Duplicate' })
    }
    const result = await collection.insertOne({
        url: body.url,
        shortUrl: body.shorturl
    });


  return Response.json({ success:true, error:false, message: 'Inserted', shortUrl: body.shorturl });
}