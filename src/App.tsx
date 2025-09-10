import { useRoutes } from "react-router-dom"
import routes from "./routes/Routes"

function App() {

  const route: React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | null = useRoutes(routes)

  return (
    <>
      <div className="container">
        {route}
      </div>
      

    </>
  )
}

export default App