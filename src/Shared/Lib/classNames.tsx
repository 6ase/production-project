/* eslint-disable @typescript-eslint/no-unused-vars */

type Mods = Record < string, boolean | string >


export function classNames (cls: string, mods: Mods = { }, additionals: string[] = [ ]):string {

	return [
		cls,
		...additionals.filter(Boolean),
		Object.entries(mods)
			.filter(([ cls, value ]) => Boolean(value))
			.map(([ cls, value ]) => cls)
	]
		.join(' ');
}