import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useQuery } from "react-query";
import * as theme from "../theme";

const Favorites: React.FC = () => {
  //todo add auth and favorites
  const { data } = useQuery("favorites", []);

  console.log("data mesa sta favorites", { data });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent
        className="contentBgBlog"
        className="contentBgBlackGray2"
        fullscreen
      >
        <IonHeader collapse="condense">
          <IonToolbar className="transparentDrinkPageToolbar">
            <IonTitle size="large">Favorites</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Favorites;
