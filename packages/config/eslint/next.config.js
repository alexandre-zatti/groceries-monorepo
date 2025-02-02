import reactConfig from "./react.config.js";
import nextPlugin from "@next/eslint-plugin-next"

export default [
    ...reactConfig,
    {
        files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
        plugins: {
            '@next/next': nextPlugin,
        }, rules: {
            ...nextPlugin.configs.recommended.rules
        },
    }
]

