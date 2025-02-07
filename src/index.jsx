/* @refresh reload */
import { render } from 'solid-js/web';
import {Router, Route, Navigate} from "@solidjs/router"

import {lazy, createSignal} from "solid-js"

import './index.css';
import App from './App';
import Products from './Products'
/* import Categories from './Categories'
import Contact from './Contact' */
import Login from "./Login"
import User from "./User"

import CompanyHome from "./company/CompanyHome"
import About from "./company/About"
import Services from "./company/Services"
import Staff from "./company/Staff"
import PageLayout from './company/PageLayout';

const Categories = lazy(() => import("./Categories"))
const Contact = lazy(() => import("./Contact"))

const routes = [
  {
    path: "/",
    component: App
  },
  {
    path: "/products",
    component: lazy(() => import("./Products"))
  },
  {
    path: "/contact",
    component: lazy(() => import("./Contact"))
  },
  {
    path: "/user/:userID?",
    component: User
  },
  {
    path: "/company",
    component: PageLayout,
    children: [
      {
        path: "/",
        component: CompanyHome
      },
      {
        path: "/about",
        component: About
      },
      {
        path: "/services",
        component: Services
      },
      {
        path: "/staff",
        component: Staff
      }
    ]
  }
]

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

const [isAuthenticated, setAuthenticated] = createSignal(false)

render(() => <Router>
              {routes}
      {/* <Route path="/" component={() => {isAuthenticated()? <App /> : <Navigate href="/login" />}} />
      <Route path="/products" component={Products} />
      <Route path="/categories" component={Categories} />
      <Route path="/contact" component={Contact} />
      <Route path={["login", "register"]} component={Login} />
      <Route path="/user/:userID?" component={User} />

      <Route path="/company" component={PageLayout}>
        <Route path="/" component={CompanyHome} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/staff" component={Staff} />
      </Route> */}
  </Router>, root);
