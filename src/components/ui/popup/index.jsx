import { useEffect } from "react";
import style from "./index.module.scss";

const Popup = ({ children, setClose }) => {
	const close = (e) => {
		e.preventDefault();
		setClose()
	}

	const closeOnEscape = (e) => {
		if (e.key === 'Escape') {
			setClose()
		}
	}

	useEffect(() => {
		const body = document.querySelector('body');

		window.addEventListener('keydown', closeOnEscape);

		body.style.overflow = 'hidden'
		return () => {
			window.removeEventListener('keydown', closeOnEscape)
			body.style.overflow = 'visible'
		}
	}, [])

	return (
		<>
			<div className={style.Wrapper} onClick={setClose}>
				<div className={style.Body} onClick={e => e.stopPropagation()}>
					<button href="/" className={style.Close} onClick={close}/>
					{children}
				</div>
			</div>
		</>
	)
}

export default Popup