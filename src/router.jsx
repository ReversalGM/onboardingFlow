import { createBrowserRouter } from "react-router-dom"
import { Onboarding } from "./Onboarding/Onboarding"

export const router = createBrowserRouter([
  { index: true, path: "/", element: <Onboarding /> },
])
