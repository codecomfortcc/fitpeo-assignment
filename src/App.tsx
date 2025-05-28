
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/main-layout";
import Dashboard from "./pages/dashboard";
import History from "./pages/history";
import Calendar from "./pages/calendar";
import Appointments from "./pages/appointments";
import Stats from "./pages/stats";
import Chat from "./pages/chat";
import Support from "./pages/support";
import Settings from "./pages/settings";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Navigate to="/dashboard" replace /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "history", element: <History /> },
        { path: "calendar", element: <Calendar /> },
        { path: "appointments", element: <Appointments /> },
        { path: "statistics", element: <Stats /> },
        { path: "chat", element: <Chat /> },
        { path: "support", element: <Support /> },
        { path: "settings", element: <Settings /> },
      ],
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
