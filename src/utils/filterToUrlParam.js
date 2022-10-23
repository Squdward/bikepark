import { bicycleType } from "./constant"

export const filterToUrlParams = (options) => {
    const params = new URLSearchParams()

    for (let key in options) {
        const keyIn = options[key]

        if (key === "type") {
            for (let type in keyIn) {
                const isActive = keyIn[type]

                if (isActive) {
                    const urlParam = Object.keys(bicycleType).find(
                        (key) => bicycleType[key] === type
                    )

                    params.append("type", urlParam)
                }
            }
        } else {
            if (keyIn.value !== "All") {
                params.append(key, keyIn.value)
            }
        }
    }

    return params.toString()
}
