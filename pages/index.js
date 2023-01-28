import React from "react"
import MeetupList from "../components/meetups/MeetupList"
import { MongoClient } from "mongodb"

const SampleEvents = [
	{
		id: "e1",
		title: "First Event",
		image: "https://images.unsplash.com/photo-1530743373890-f3c506b0b5b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1535&q=80",
		address: "Some Address",
		description: "This is a first event",
	},
	{
		id: "e2",
		title: "Second Event",
		image: "https://images.unsplash.com/photo-1530743373890-f3c506b0b5b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1535&q=80",
		address: "Some Address",
		description: "This is a second event",
	},
	{
		id: "e3",
		title: "Third Event",
		image: "https://images.unsplash.com/photo-1530743373890-f3c506b0b5b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1535&q=80",
		address: "Some Address",
		description: "This is a third event",
	},
]

const HomePage = (props) => {
	return <MeetupList meetups={props.events} />
}

// export async function getServerSideProps(context) {
// 	// Fetch data from an API
// 	const req = context.req
// 	const res = context.res

// 	return {
// 		props: {
// 			events: SampleEvents,
// 		},
// 	}
// }

export async function getStaticProps() {
	// Fetch data from an API
	const client = await MongoClient.connect(
		`mongodb+srv://natkha:potemkin99@cluster0.mqi9zgw.mongodb.net/nextref?retryWrites=true&w=majority`
	)
	const db = client.db()
	const eventsCollection = db.collection("events")

	const events = await eventsCollection.find().toArray()

	return {
		props: {
			events: events.map((event) => ({
				title: event.title,
				address: event.address,
				image: event.image,
				id: event._id.toString(),
			})),
		},
		revalidate: 1,
	}
}

export default HomePage
