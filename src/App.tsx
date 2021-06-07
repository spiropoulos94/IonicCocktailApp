import { Redirect, Route } from "react-router-dom";
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonHeader, IonToolbar, IonTitle } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { settings, home, search, person, informationCircle } from "ionicons/icons";
import Tab1 from "./pages/Home";
import Tab2 from "./pages/About";
import Tab3 from "./pages/Search";

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
            <Route exact path="/tab1">
              <Tab1 />
            </Route>
            <Route exact path="/tab2">
              <Tab2 />
            </Route>
            <Route path="/tab3">
              <Tab3 />
            </Route>
            <Route path="/tab4">
              <AskBartender />
            </Route>
            <Route path="/tab5">
              <Settings />
            </Route>
            <Route exact path="/">
              <Redirect to="/tab1" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon icon={home} />
              {/* <IonLabel>Tab 1</IonLabel> */}
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon icon={search} />
              {/* <IonLabel>Search</IonLabel> */}
            </IonTabButton>
            <IonTabButton tab="tab4" href="/tab4">
              <IonIcon icon={person} />
              {/* <IonLabel>Bartender</IonLabel> */}
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon icon={informationCircle} />
              {/* <IonLabel>Tab 2</IonLabel> */}
            </IonTabButton>
            <IonTabButton tab="tab5" href="/tab5">
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
