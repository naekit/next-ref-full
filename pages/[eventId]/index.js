import React from "react"
import MeetupDetails from "../../components/meetups/MeetupDetails"

const EventDetails = (props) => {
	return (
		<>
			<MeetupDetails
				image={props.image}
				title={props.title}
				address={props.address}
				description={props.description}
			/>
		</>
	)
}

export async function getStaticPaths() {
	return {
		paths: [
			{ params: { eventId: "e1" } },
			{ params: { eventId: "e2" } },
			{ params: { eventId: "e3" } },
		],
		fallback: false,
	}
}

export async function getStaticProps(context) {
	// Fetch data from an API
	const eventId = context.params.eventId

	console.log(eventId)

	return {
		props: {
			id: eventId,
			image: "https://images.unsplash.com/photo-1530743373890-f3c506b0b5b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1535&q=80",
			title: "First EVENT",
			address: "2883 main",
			description: "Description of EVENT",
		},
		revalidate: 1,
	}
}

export default EventDetails
