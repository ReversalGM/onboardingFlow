import { createBrowserRouter } from "react-router-dom"
import { Onboarding } from "./Onboarding/Onboarding"

export const router = createBrowserRouter([
  { path: "/onboarding", element: <Onboarding /> },
])
