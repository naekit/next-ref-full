import React from "react"
import MeetupDetails from "../../components/meetups/MeetupDetails"

const EventDetails = () => {
	const image =
		"https://images.unsplash.com/photo-1530743373890-f3c506b0b5b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1535&q=80"
	const title = "First EVENT"
	const address = "2883 main"
	const description = "Description of EVENT"
	return (
		<>
			<MeetupDetails
				image={image}
				title={title}
				address={address}
				description={description}
			/>
		</>
	)
}

export default EventDetails
