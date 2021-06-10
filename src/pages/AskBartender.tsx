import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import * as theme from "../theme";

const AskBartender: React.FC = () => {
  const toggle = document.querySelector("#themeToggle");
  console.log({ toggle });
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Ask the Bartender</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="tertiary" fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Ask the Bartender</IonTitle>
          </IonToolbar>
        </IonHeader> */}
      </IonContent>
    </IonPage>
  );
};

export default AskBartender;
