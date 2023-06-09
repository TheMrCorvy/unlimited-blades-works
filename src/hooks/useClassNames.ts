interface Params {
	[key: string]: string[]
}

interface Result {
	[key: string]: string
}

const useClassNames = (className: Params): Result => {
	let res: Result = {}

	Object.keys(className).forEach((key) => {
		res[key] = className[key].join(" ")
	})

	return res
}

export default useClassNames
