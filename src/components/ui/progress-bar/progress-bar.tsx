import { useState, useEffect } from "react"
import { LoadingBar, LoadingHolder } from "./styles"

interface Props {
}

export default function ProgressBar(props: Props) {
	const [progress, setProgress] = useState<number>(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress(prevProgress =>
				prevProgress < 70 ? prevProgress + 10 :
					prevProgress < 75 ? prevProgress + 1 :
						prevProgress < 80 ? prevProgress + 0.5 :
							prevProgress < 85 ? prevProgress + 0.25 :
								prevProgress > 99 ? 99 :
									prevProgress + 0.01
			)
		}, 100)

		return () => {
			clearInterval(interval)
		}
	}, [])
	return (
		<LoadingHolder>
			<LoadingBar style={{ width: `${progress}%` }} />
		</LoadingHolder>
	)
}