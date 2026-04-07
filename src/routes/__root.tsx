import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className="">
      <Navbar />
      <main className="grid">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
