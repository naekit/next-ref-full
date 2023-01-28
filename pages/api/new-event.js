import { MongoClient } from "mongodb"
// /api/new-event
// POST

async function handler(req, res) {
	if (req.method === "POST") {
		const data = req.body

		const client = await MongoClient.connect(
			`mongodb+srv://natkha:potemkin99@cluster0.mqi9zgw.mongodb.net/nextref?retryWrites=true&w=majority`
		)
		const db = client.db()
		const meetupsCollection = db.collection("events")

		const result = await meetupsCollection.insertOne(data)

		console.log(result)
		client.close()

		res.status(201).json({ message: "Event inserted!" })
	}
}

export default handler
