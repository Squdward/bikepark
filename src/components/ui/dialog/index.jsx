import Button from "../button"
import Popup from "../popup"

const Dialog = ({title, inSucces, inCancel, placeholder1, placeholder2}) => {
	const onSuccesClick = () => {
		inSucces()
	}
	
	const onCancelClick = () => {
		inCancel()
	}
	
	return (
		<Popup exitOnOverlay={false} isDialog={true}>
			<h2>{title}</h2>
			<Button onClick={onSuccesClick}>{placeholder1}</Button>
			<Button onClick={onCancelClick}>{placeholder2}</Button>
		</Popup>
	)
}

export default Dialog