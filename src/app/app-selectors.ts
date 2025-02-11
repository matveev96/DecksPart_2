import type { AppRootState } from './store.ts'

export const selectApp = (state: AppRootState) => state.app
