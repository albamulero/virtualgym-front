import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import LayoutApp from "./components/LayoutApp"
import { Home, Completo, Perfil, Signup, Login, NotFound, Administrador,
  BicepsSuperior, Triceps, Abdominales, Pecho,
  Cuadriceps, Gemelos, BicepsInferior, Gluteos,
  Pesas, Banco, Barra, Ligas, Calentamiento, Estiramientos,
  Modificar
} from "./pages"

const Router = () => (
  <BrowserRouter>
    <LayoutApp>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/calentamiento' component={Calentamiento} />
        <Route exact path='/completo' component={Completo} />
        <Route exact path='/estiramientos' component={Estiramientos} />
        <Route exact path='/perfil' component={Perfil} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/administrador' component={Administrador} />

        <Route exact path='/bicepsSuperior' component={BicepsSuperior} />
        <Route exact path='/triceps' component={Triceps} />
        <Route exact path='/abdominales' component={Abdominales} />
        <Route exact path='/pecho' component={Pecho} />

        <Route exact path='/cuadriceps' component={Cuadriceps} />
        <Route exact path='/gemelos' component={Gemelos} />
        <Route exact path='/bicepsInferior' component={BicepsInferior} />
        <Route exact path='/gluteos' component={Gluteos} />

        <Route exact path='/pesas' component={Pesas} />
        <Route exact path='/banco' component={Banco} />
        <Route exact path='/barra' component={Barra} />
        <Route exact path='/ligas' component={Ligas} />

        <Route exact path='/modificar/:id' component={Modificar} />

        <Route component={NotFound} />

      </Switch>
    </LayoutApp>
  </BrowserRouter>
)

export default Router
