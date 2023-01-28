import styles from "./MeetupDetails.module.css"

function MeetupDetails(props) {
	const { image, title, address, description } = props
	return (
		<section className={styles.section}>
			<img className={styles.image} src={props.image} alt={props.title} />
			<div>
				<h1>{props.title}</h1>
				<address>{props.address}</address>
				<p>{props.description}</p>
			</div>
		</section>
	)
}

export default MeetupDetails
