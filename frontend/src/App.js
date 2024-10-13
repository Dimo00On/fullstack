import MainPage from './Main components/MainPage.js';
import {ResultsPage} from "./Result components/ResultsPage.js";
import { useState } from "react";
import { FiltersPage } from './Filter components/FiltersPage.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { NoAuthorizedAdd } from './Authorization components/NoAuthorizedAdd.js';
import Authorization from './Authorization components/Authorization.js';
import { Registration } from './Authorization components/Registration.js';
import { AddPage } from './Add components/AddPage.js';
import { PersonalPage } from './Authorization components/PersonalPage.js';

export function App() {
    const [tags, set_tags] = useState(new Set());
    const [results, set_results] = useState(new Set());
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainPage 
                tags={tags} 
                set_tags={set_tags} 
                set_results={set_results}
                />
        },
        {
            path: "/results",
            element:<ResultsPage 
                tags={tags} 
                set_tags={set_tags} 
                results={results} 
                set_results={set_results}
                />
        },
        {
            path: "/results/filters",
            element:<div><FiltersPage tags={tags} set_tags={set_tags} back={"/results"}/></div>
        },
        {
            path: "/add",
            element:<div><AddPage tags={tags} set_tags={set_tags}/></div>
        },
        {
            path: "/add/authorization",
            element:<div><NoAuthorizedAdd/></div>
        },
        {
            path: "/add/filters",
            element:<div><FiltersPage tags={tags} set_tags={set_tags} back={"/add"}/></div>
        },
        {
            path: "/authorization",
            element:<div><Authorization/></div>
        },
        {
            path: "/authorization/new",
            element:<div><Registration/></div>
        },
        {
            path: "/personal",
            element:<div><PersonalPage/></div>
        },
    ]);
    return <RouterProvider router={router}></RouterProvider>
}