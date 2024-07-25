import globals from 'globals'
import js from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import reactConfig from 'eslint-plugin-react/configs/recommended.js'
import { fixupConfigRules } from '@eslint/compat'
import eslintConfigPrettier from 'eslint-config-prettier'

// Destructure the needed properties from the CommonJS module
const { configs: tsConfigs } = tsPlugin

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      globals: globals.browser
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactConfig,
      prettier: eslintConfigPrettier
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tsConfigs.recommended.rules,
      ...fixupConfigRules(reactConfig).rules,
      ...eslintConfigPrettier.rules
    }
  }
]
