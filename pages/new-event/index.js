import React from "react"
import NewMeetupForm from "../../components/meetups/NewMeetupForm"

const NewEventPage = () => {
	function addMeetupHandler(meetupData) {
		console.log(meetupData)
	}

	return (
		<>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</>
	)
}

export default NewEventPage
