import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import * as theme from "../theme";
import { fetchCocktailsByID } from "../utils";
import { useQuery } from "react-query";

const DrinkPage: React.FC = (props) => {
  const { drink } = (props.location && props.location.state) || {};

  const { isLoading, error, data, isFetching } = useQuery(
    `drink-${props.match.params.drink}`,
    () => fetchCocktailsByID(props.match.params.drink)
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>{drink && drink.strDrink}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="contentBgBlog" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{drink && drink.strDrink}</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default DrinkPage;
