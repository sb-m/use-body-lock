import { useLayoutEffect, useState } from 'react'

const Hook = () => {
	const [bodyScrollLocked, setBodyScrollLocked] = useState(false)

	useLayoutEffect(() => {
		if (typeof window === 'undefined') return
		if (bodyScrollLocked) {
			const originalStyle = window.getComputedStyle(document.body).overflow
			document.body.style.overflow = 'hidden'
			return () => document.body.style.overflow = originalStyle
		}
	}, [bodyScrollLocked])

	return setBodyScrollLocked
}

export default Hook
