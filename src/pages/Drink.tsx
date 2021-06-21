import { useEffect } from "react";
import { gatherIngredients } from "../utils";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonText,
} from "@ionic/react";

import Spinner from "../components/Spinner";

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

  let ingredients = gatherIngredients(data);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>{data ? data.strDrink : "Cocktail Page"}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="contentBgBlog" fullscreen>
        {data ? (
          <>
            <IonHeader collapse="condense">
              <IonToolbar className="drinkPageToolbar">
                <IonTitle size="large">{drink && drink.strDrink}</IonTitle>
              </IonToolbar>
            </IonHeader>

            <img
              style={{ padding: 20, borderRadius: "10%" }}
              src={data && data.strDrinkThumb}
            />
          </>
        ) : (
          <Spinner />
        )}
      </IonContent>
    </IonPage>
  );
};

export default DrinkPage;
