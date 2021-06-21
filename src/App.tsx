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
} from "ionicons/icons";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

import Home from "./pages/Home";
import About from "./pages/About";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import DrinkPage from "./pages/Drink";

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

// Import global css
import "./theme/global.css";

// Imports
import AskBartender from "./pages/AskBartender";
import Settings from "./pages/Settings";
//todo Continue query client setup!
const queryClient = new QueryClient();
const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
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
                <IonIcon icon={person} />
                {/* <IonLabel>Bartender</IonLabel> */}
              </IonTabButton>
              <IonTabButton tab="favorites" href="/favorites">
                <IonIcon icon={heart} />
                {/* <IonLabel>Tab 2</IonLabel>  */}
              </IonTabButton>
              <IonTabButton tab="settings" href="/settings">
                <IonIcon icon={settings} />
                {/* <IonLabel>Bartender</IonLabel> */}
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
    </QueryClientProvider>
  );
};

export default App;
