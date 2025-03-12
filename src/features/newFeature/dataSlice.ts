// import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
// import type { AppThunk } from "../../app/store"

export interface DataState {
  loading: boolean
  data: any
}

const initialState: DataState = {
  loading: false,
  data: null,
}

const dataSlice = createAppSlice({
  name: "data",
  initialState,
  reducers: {},
})
