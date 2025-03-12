// import type { PayloadAction } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
// import type { AppThunk } from "../../app/store"

export interface ExchangeRates {
  [key: string]: number
}

export interface CurrencyWidget {
  id: string
  baseCurrency: string
  targetCurrencies: string[]
  rates?: ExchangeRates[]
}

interface WidgetsState {
  widgets: CurrencyWidget[]
}

const initialState: WidgetsState = {
  widgets: [
    {
      id: "1",
      baseCurrency: "USD",
      targetCurrencies: ["EUR", "JPY"],
    },
    {
      id: "2",
      baseCurrency: "CAD",
      targetCurrencies: ["EUR", "JPY"],
    },
  ],
}

export const widgetsSlice = createAppSlice({
  name: "widgets",
  initialState,
  reducers: create => ({
    addWidget: create.reducer((state, action: PayloadAction<any>) => {
      state.widgets.push(action.payload)
    }),
    editWidget: create.reducer((state, action: PayloadAction<any>) => {
      const widget = state.widgets.find(
        widget => widget.id === action.payload.id,
      )
      if (widget) {
        widget.baseCurrency = action.payload.baseCurrency
        widget.targetCurrencies = action.payload.targetCurrencies
      }
    }),
    removeWidget: create.reducer((state, action: PayloadAction<any>) => {
      state.widgets = state.widgets.filter(
        widget => widget.id !== action.payload,
      )
    }),
  }),
  selectors: {
    selectAllWidgets: state => state.widgets,
    selectSpecificWidget: (state: WidgetsState, id: string) =>
      state.widgets.find(widget => widget.id === id),
    selectWidgetId: (state: WidgetsState, id: string) => id,
  },
})

export const { addWidget, editWidget, removeWidget } = widgetsSlice.actions
export const { selectAllWidgets, selectSpecificWidget, selectWidgetId } =
  widgetsSlice.selectors

export default widgetsSlice.reducer
