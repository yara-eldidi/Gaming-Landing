import LandingPage from "./layout/Landing";
import HomePage from "./pages/home";
import LeaguePage from "./pages/LeagueOfLegend";

const routes = [
    {
        path: "/",
        element: <HomePage/>,
        children: [
            {
                index: true,
                element: <LandingPage/> 
            },
            {
                path: "/leagueOfLegend",
                element:<LeaguePage/>
             }
            // {
            //     path: "/CounterStrike",
            //     element:<LeaguePage/>
            // },
            // {
            //     path: "/Valorant",
            //     element:<LeaguePage/>
            // },
            // {
            //     path: "/TeamFight",
            //     element:<LeaguePage/>
            // },
            // {
            //     path: "/ApexLegend",
            //     element:<LeaguePage/>
            // },
            // {
            //     path: "/Destiny",
            //     element:<LeaguePage/>
            // },
            // {
            //     path: "/Fortnite",
            //     element:<LeaguePage/>
            // },
            // {
            //     path: "/Escape",
            //     element:<LeaguePage/>
            // }
        ]
    },

];

export {routes}