import { useEffect, useState } from "react"
import { Container, Typography } from "@mui/material"

import { addWidget, selectAllWidgets } from "./dataSlice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import axiosClient, { API_BASE_URL, API_KEY } from "../../api/axiosClient"

import CurrencyWidget from "./currencyWidget"

function CurrencyExchangeDashboard() {
  // const dispatch = useAppDispatch()
  const widgets = useAppSelector(selectAllWidgets)

  return (
    <Container maxWidth="md" style={{ marginTop: "20px" }}>
      <Typography variant="h3" align="center" gutterBottom>
        Currency Exchange Dashboard
      </Typography>
      {widgets.map(widget => (
        <CurrencyWidget key={widget.id} />
      ))}
    </Container>
  )
}

export default CurrencyExchangeDashboard
