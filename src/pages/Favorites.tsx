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

import { useQueryClient } from "react-query";

const Favorites: React.FC = () => {
  //todo add auth and favorites

  const queryClient = useQueryClient();

  const { data: favorites } = useQuery(
    "favorites",
    () => {
      return [];
    },
    {
      refetchOnWindowFocus: false,
      enabled: false,
      initialData: [],
    }
  );

  console.log({ favorites });

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
        <IonButton
          onClick={() =>
            queryClient.setQueryData("favorites", (oldData) => [
              ...oldData,
              "nikos",
            ])
          }
        >
          Add query Data{" "}
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Favorites;
