import { configureStore } from '@reduxjs/toolkit'

// Exporta uma função que cria uma nova store em cada chamada
export const makeStore = () => {
  return configureStore({
    reducer: {

    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']