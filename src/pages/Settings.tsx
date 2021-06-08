import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonIcon, IonLabel, IonRippleEffect } from "@ionic/react";
import DarkModeToggler from "../components/DarkModeToggler";
import { informationCircle } from "ionicons/icons";

import { useHistory } from "react-router-dom";

const Settings: React.FC = () => {
  let history = useHistory();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <DarkModeToggler name="Settings page" />
          <IonItem onClick={() => history.push("/settings/about")}>
            <IonIcon slot="start" icon={informationCircle} />
            <IonLabel>About</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
