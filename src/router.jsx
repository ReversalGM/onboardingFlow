import { createBrowserRouter } from "react-router-dom"
import { Onboarding } from "./Onboarding/Onboarding"

export const router = createBrowserRouter([
  { path: "/onboardingFlow/", element: <Onboarding /> },
])
