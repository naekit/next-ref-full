import React from "react"
import MeetupList from "../components/meetups/MeetupList"

const SampleEvents = [
	{
		id: 1,
		title: "First Event",
		image: "https://images.unsplash.com/photo-1530743373890-f3c506b0b5b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1535&q=80",
		address: "Some Address",
		description: "This is a first event",
	},
	{
		id: 2,
		title: "Second Event",
		image: "https://images.unsplash.com/photo-1530743373890-f3c506b0b5b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1535&q=80",
		address: "Some Address",
		description: "This is a second event",
	},
	{
		id: 3,
		title: "Third Event",
		image: "https://images.unsplash.com/photo-1530743373890-f3c506b0b5b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1535&q=80",
		address: "Some Address",
		description: "This is a third event",
	},
]

const HomePage = (props) => {
	return <MeetupList meetups={props.events} />
}

export function getStaticProps() {
	// Fetch data from an API
	return {
		props: {
			events: SampleEvents,
		},
	}
}

export default HomePage
