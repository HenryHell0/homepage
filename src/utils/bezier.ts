export function bezier(
	x1: number,
	y1: number,
	x2: number,
	y2: number,
	epsilon = 1e-6,
) {
	// Precompute coefficients
	const cx = 3 * x1
	const bx = 3 * (x2 - x1) - cx
	const ax = 1 - cx - bx

	const cy = 3 * y1
	const by = 3 * (y2 - y1) - cy
	const ay = 1 - cy - by

	function sampleCurveX(t: number) {
		return ((ax * t + bx) * t + cx) * t
	}

	function sampleCurveY(t: number) {
		return ((ay * t + by) * t + cy) * t
	}

	function sampleCurveDerivativeX(t: number) {
		return (3 * ax * t + 2 * bx) * t + cx
	}

	// Solve for t given x using Newton-Raphson
	function solveCurveX(x: number) {
		let t = x

		for (let i = 0; i < 8; i++) {
			const xEst = sampleCurveX(t) - x
			const dEst = sampleCurveDerivativeX(t)

			if (Math.abs(xEst) < epsilon) return t
			if (Math.abs(dEst) < epsilon) break

			t -= xEst / dEst
		}

		// Fallback to binary search
		let t0 = 0
		let t1 = 1
		t = x

		while (t0 < t1) {
			const xEst = sampleCurveX(t)
			if (Math.abs(xEst - x) < epsilon) return t

			if (x > xEst) t0 = t
			else t1 = t

			t = (t1 + t0) / 2
		}

		return t
	}

	return function (x: number) {
		return sampleCurveY(solveCurveX(x))
	}
}
