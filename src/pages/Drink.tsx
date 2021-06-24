import { useEffect, useState } from "react";
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
  IonLabel,
  IonItem,
  IonList,
  IonIcon,
  IonCheckbox,
  IonListHeader,
} from "@ionic/react";

import {
  closeCircle,
  home,
  star,
  navigate,
  informationCircle,
  checkmarkCircle,
  shuffle,
} from "ionicons/icons";

import Spinner from "../components/Spinner";

import * as theme from "../theme";
// import { fetchCocktailsByID } from "../utils";
import { useQuery } from "react-query";

const DrinkPage: React.FC = (props) => {
  let { drink } = (props.location && props.location.state) || {};

  const { isLoading, error, data, isFetching } = useQuery(
    `drink-${props.match.params.drink}`,
    //useQuery returns the drink obj from the location.state, and caches it like it was fetched
    () => {
      return { drink, ingredients: gatherIngredients(drink) };
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  console.log({ data });

  if (data) {
    const { drink, ingredients } = data;
    return (
      <>
        <IonPage>
          <IonHeader>
            <IonToolbar color="secondary">
              <IonButtons slot="start">
                <IonBackButton />
              </IonButtons>
              <IonTitle>{drink.strDrink}</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="contentBgBlog" fullscreen>
            <IonHeader collapse="condense">
              <IonToolbar className="drinkPageToolbar">
                <IonTitle size="large">{drink.strDrink}</IonTitle>
              </IonToolbar>
            </IonHeader>

            <img
              style={{ padding: 20, borderRadius: "10%" }}
              src={data.drink && data.drink.strDrinkThumb}
            />
            <IonList>
              <IonListHeader lines="inset">
                <IonLabel>Ingredients</IonLabel>
              </IonListHeader>

              {ingredients.map((item) => {
                return (
                  <IonItem
                    // button
                    onClick={() => {
                      // alert("ckicl");
                    }}
                  >
                    {/*  */}
                    <IonLabel>
                      <h3>{item.ingredient}</h3>
                      <p>{item.measure}</p>
                    </IonLabel>
                    <IonCheckbox checked={true} />
                  </IonItem>
                );
              })}
            </IonList>
          </IonContent>
        </IonPage>
      </>
    );
  } else {
    return (
      <IonPage>
        <IonContent className="contentBgBlog">
          <Spinner />
        </IonContent>
      </IonPage>
    );
  }
};

export default DrinkPage;
