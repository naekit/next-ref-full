import React from "react"
import MeetupDetails from "../../components/meetups/MeetupDetails"
import { MongoClient, ObjectId } from "mongodb"
import Head from "next/head"

const EventDetails = (props) => {
	return (
		<>
			<Head>
				<title>{props.eventData.title}</title>
				<meta
					name="description"
					content={props.eventData.description}
				/>
			</Head>
			<MeetupDetails
				image={props.eventData.image}
				title={props.eventData.title}
				address={props.eventData.address}
				description={props.eventData.description}
			/>
		</>
	)
}

export async function getStaticPaths() {
	const client = await MongoClient.connect(
		`mongodb+srv://natkha:potemkin99@cluster0.mqi9zgw.mongodb.net/nextref?retryWrites=true&w=majority`
	)
	const db = client.db()
	const eventsCollection = db.collection("events")

	const events = await eventsCollection.find({}, { _id: 1 }).toArray()

	client.close()
	return {
		paths: events.map((event) => ({
			params: { eventId: event._id.toString() },
		})),
		fallback: "blocking",
	}
}

export async function getStaticProps(context) {
	// Fetch data from an API
	const eventId = context.params.eventId

	const client = await MongoClient.connect(
		`mongodb+srv://natkha:potemkin99@cluster0.mqi9zgw.mongodb.net/nextref?retryWrites=true&w=majority`
	)
	const db = client.db()
	const eventsCollection = db.collection("events")

	const eventData = await eventsCollection.findOne({ _id: ObjectId(eventId) })

	client.close()

	return {
		props: {
			eventData: {
				id: eventData._id.toString(),
				title: eventData.title,
				image: eventData.image,
				address: eventData.address,
				description: eventData.description,
			},
		},
	}
}

export default EventDetails
