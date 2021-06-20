import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import * as theme from "../theme";

const DrinkPage: React.FC = (props) => {
  console.log({ props });
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>DrinkPage</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="contentBgBlog" fullscreen>
        {/* <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">DrinkPage</IonTitle>
            </IonToolbar>
          </IonHeader> */}
      </IonContent>
    </IonPage>
  );
};

export default DrinkPage;
