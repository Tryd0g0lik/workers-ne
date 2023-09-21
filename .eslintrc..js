module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true,
		"jest": true,
    },
	"extends": ["airbnb-base",
		"standard-with-typescript"],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
			"dot-location": ["error", "property"],
			"func-call-spacing": ["error", "never"],
			'indent': ["error", "tab"]
	},
	"linebreak-style": [
		"error",
		"windows"
	],
	"parser": ["babel-eslint", '@typescript-eslint/parser']
}
