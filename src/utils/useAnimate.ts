import { ref, type Ref } from "vue"

interface animateContext {
	progress: Ref<number>
	done: Ref<boolean>
}

export function useAnimate(
	rate: number,
	scaleFunc: (x: number) => number,
	context?: Partial<animateContext>,
) {


	let progressLinear = 0
	const progress = context?.progress ?? ref(0)
	const done = context?.done ?? ref(false)


	function animate() {
		if (progressLinear >= 1) {
			done.value = true
			return
		}

		progressLinear += rate
		progress.value = scaleFunc(progressLinear)

		requestAnimationFrame(animate)
	}

	function start() {
		progress.value = 0
		progressLinear = 0
		done.value = false
		requestAnimationFrame(animate)
	}

	return { progress, done, start }
}
