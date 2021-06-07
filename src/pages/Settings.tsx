import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonIcon, IonLabel, IonRippleEffect } from "@ionic/react";
import DarkModeSwitch from "../components/DarkModeToggler";
import { informationCircle } from "ionicons/icons";

import { useHistory } from "react-router-dom";

const Settings: React.FC = () => {
  let history = useHistory();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <DarkModeSwitch name="Settings page" />
          <IonItem onClick={() => history.push("/about")}>
            <IonIcon slot="start" icon={informationCircle} />
            <IonLabel>About</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
