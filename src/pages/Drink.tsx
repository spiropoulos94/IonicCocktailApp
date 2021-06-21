import { useEffect } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
} from "@ionic/react";

import * as theme from "../theme";
// import { fetchCocktailsByID } from "../utils";
import { useQuery } from "react-query";

const DrinkPage: React.FC = (props) => {
  let { drink } = (props.location && props.location.state) || {};

  //When this component first mounts, it contains the location.state.data from the search page.It utilises the useQuery hook
  //in order to cache them. (If it doesnt, the location state data will become null when changing to another page)

  const { isLoading, error, data, isFetching } = useQuery(
    `drink-${props.match.params.drink}`,
    //useQuery returns the drink obj from the location.state, and caches it like it was fetched
    () => drink,
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>

          <IonTitle>{data && data.strDrink}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="contentBgBlog" fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{drink && drink.strDrink}</IonTitle>
          </IonToolbar>
        </IonHeader> */}
      </IonContent>
    </IonPage>
  );
};

export default DrinkPage;
