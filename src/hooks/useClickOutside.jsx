import { useEffect } from "react"

const useClickOutside = (ref, handler) => {
    useEffect(() => {
        const listener = (event) => {
            const element = ref?.current

            if (!element || element.contains(event?.target) || null) {
                return
            }

            handler(event)
        }

        document.addEventListener("mousedown", listener)

        return () => {
            document.removeEventListener("mousedown", listener)
        }
    }, [ref, handler])
}

export default useClickOutside
