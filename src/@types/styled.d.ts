import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			primary: string
			grey: string
			grey2: string
			grey3: string
			grey4: string
			grey5: string
			grey6: string
			black: string
			dark: string
			white: string
			success: string
			danger: string
			warning: string
			info: string
			bg: string
			size: string
			text: string
			line: string
		}
		fontSizes: {
			h1: number
			h2: number
			h3: number
			h4: number
			h5: number
		}
		fontWeight: {
			bold: number
			semiBold: number
			normal: number
		}
	}
}
