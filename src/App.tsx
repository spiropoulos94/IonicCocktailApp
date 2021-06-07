import { Redirect, Route } from "react-router-dom";
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonHeader, IonToolbar, IonTitle } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { settings, home, search, person, informationCircle } from "ionicons/icons";
import Home from "./pages/Home";
import About from "./pages/About";
import Search from "./pages/Search";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import AskBartender from "./pages/AskBartender";
import Settings from "./pages/Settings";

const App: React.FC = () => {
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
            <Route exact path="/Home">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route path="/Search">
              <Search />
            </Route>
            <Route path="/ask-bartender">
              <AskBartender />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route exact path="/">
              <Redirect to="/Home" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="Home" href="/Home">
              <IonIcon icon={home} />
              {/* <IonLabel>Tab 1</IonLabel> */}
            </IonTabButton>
            <IonTabButton tab="Search" href="/Search">
              <IonIcon icon={search} />
              {/* <IonLabel>Search</IonLabel> */}
            </IonTabButton>
            <IonTabButton tab="ask-bartender" href="/ask-bartender">
              <IonIcon icon={person} />
              {/* <IonLabel>Bartender</IonLabel> */}
            </IonTabButton>
            {/* <IonTabButton tab="about" href="/about">
              <IonIcon icon={informationCircle} />
              {/* <IonLabel>Tab 2</IonLabel> */}
            {/* </IonTabButton> */}
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

export default App;
