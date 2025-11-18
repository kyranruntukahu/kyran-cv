import * as React from "react"
import { ToastViewport } from "./toast"

const ToastContext = React.createContext()

export function useToast() {
  return React.useContext(ToastContext)
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])

  const addToast = (toast) => {
    setToasts((prev) => [...prev, toast])
  }

  return (
    <ToastContext.Provider value={{ addToast, toasts }}>
      {children}
      <ToastViewport />
    </ToastContext.Provider>
  )
}
