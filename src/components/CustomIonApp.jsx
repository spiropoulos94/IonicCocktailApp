import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  settings,
  home,
  search,
  person,
  informationCircle,
  heart,
  chatbubbles,
} from "ionicons/icons";

import { useQuery } from "react-query";

import Home from "../pages/Home";
import About from "../pages/About";
import Search from "../pages/Search";
import Favorites from "../pages/Favorites";
import DrinkPage from "../pages/Drink";

import AskBartender from "../pages/AskBartender";
import Settings from "../pages/Settings";

import barmanSvg from "../assets/customIcons/bartender.svg";

//this component is a child of app in order to use useQuery inside

const CustomIonApp = () => {
  console.log({ barmanSvg });
  const { data: favorites } = useQuery(
    "favorites",
    () => {
      return [];
    },
    {
      refetchOnWindowFocus: false,
      enabled: false,
      initialData: [],
    }
  );

  return (
    <IonApp>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Global header</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            {/* <Route exact path="/Home">
                <Home />
              </Route> */}
            <Route path="/home" component={Home} />

            <Route path="/settings/about" component={About} />

            <Route exact path="/search" component={Search} />

            <Route path="/search/:drink" component={DrinkPage} />
            <Route path="/ask-bartender" component={AskBartender} />
            <Route path="/favorites" component={Favorites} />
            <Route exact path="/settings" component={Settings} />

            <Route exact path="/">
              <Redirect to="/Home" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar color="secondary" slot="bottom">
            <IonTabButton tab="Home" href="/home">
              <IonIcon icon={home} />
              {/* <IonLabel>Tab 1</IonLabel> */}
            </IonTabButton>
            <IonTabButton tab="Search" href="/search">
              <IonIcon icon={search} />
              {/* <IonLabel>Search</IonLabel> */}
            </IonTabButton>
            <IonTabButton tab="ask-bartender" href="/ask-bartender">
              {/* <IonIcon icon={chatbubbles} /> */}
              <IonIcon src={barmanSvg} font-size="48px" />
              {/* <IonLabel>Bartender</IonLabel> */}
            </IonTabButton>
            {favorites.length && (
              <IonTabButton tab="favorites" href="/favorites">
                <IonIcon icon={heart} />
                {/* <IonLabel>Tab 2</IonLabel>  */}
              </IonTabButton>
            )}
            <IonTabButton tab="settings" href="/settings">
              <IonIcon icon={settings} />
              {/* <IonLabel>Bartender</IonLabel> */}
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default CustomIonApp;
