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
import CocktailPreviewCard from "../components/CocktailPreviewCard";

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
        {favorites &&
          favorites.map((drink) => <CocktailPreviewCard drink={drink} />)}
      </IonContent>
    </IonPage>
  );
};

export default Favorites;
