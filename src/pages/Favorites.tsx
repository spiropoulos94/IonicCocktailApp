import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import * as theme from "../theme";

const Favorites: React.FC = () => {
  const toggle = document.querySelector("#themeToggle");
  console.log({ toggle });
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="tertiary" fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Favorites</IonTitle>
          </IonToolbar>
        </IonHeader> */}
      </IonContent>
    </IonPage>
  );
};

export default Favorites;