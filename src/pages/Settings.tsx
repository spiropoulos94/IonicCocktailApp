import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import DarkModeSwitch from "../components/DarkModeToggler";

const Settings: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <DarkModeSwitch name="Settings page" />
      </IonContent>
    </IonPage>
  );
};

export default Settings;
