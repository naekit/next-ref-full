import { useRouter } from "next/router"
import React from "react"
import NewMeetupForm from "../../components/meetups/NewMeetupForm"

const NewEventPage = () => {
	const router = useRouter()

	async function addMeetupHandler(meetupData) {
		const res = await fetch("/api/new-event", {
			method: "POST",
			body: JSON.stringify(meetupData),
			headers: {
				"Content-Type": "application/json",
			},
		})

		const data = await res.json()
		console.log(data)

		router.push("/")
	}

	return (
		<>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</>
	)
}

export default NewEventPage
