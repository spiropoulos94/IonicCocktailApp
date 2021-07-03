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

import Spinner from "../components/Spinner";

import { useQuery, useQueryClient } from "react-query";

const DrinkPage: React.FC = (props) => {
  let { drink } = (props.location && props.location.state) || {};

  const queryClient = useQueryClient();

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

  const handleCheck = (checkedIngredient) => {
    checkedIngredient.checked = !checkedIngredient.checked;

    queryClient.setQueryData(`drink-${props.match.params.drink}`, {
      ...data,
    });
  };

  if (data && data.drink) {
    const { drink, ingredients } = data;
    return (
      <>
        <IonPage>
          <IonHeader>
            <IonToolbar color="secondary">
              <IonButtons slot="start">
                <IonBackButton />
              </IonButtons>
              <IonTitle>{drink ? drink.strDrink : "Drink Title"}</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent
            className="contentBgBlog"
            className="contentBgBlackGray2"
            fullscreen
          >
            <IonHeader collapse="condense">
              <IonToolbar className="drinkPageToolbar">
                <IonTitle style={{ textAlign: "start" }} size="large">
                  {drink.strDrink}
                </IonTitle>
              </IonToolbar>
            </IonHeader>

            <img
              style={{ padding: 20, borderRadius: "10%" }}
              src={data.drink && data.drink.strDrinkThumb}
            />
            <IonList
              className="ingredient-list"
              style={{ background: "transparent" }}
            >
              <IonListHeader lines="inset">
                <IonLabel style={{ color: "white" }}>Ingredients</IonLabel>
              </IonListHeader>

              {ingredients.map((ingredient) => {
                return (
                  <IonItem
                    className="ingredient-item"
                    // button
                    onClick={() => {
                      handleCheck(ingredient);
                    }}
                    style={{ background: "transparent" }}
                  >
                    {/*  */}
                    <IonLabel style={{ color: "white" }}>
                      <h3>{ingredient.ingredient}</h3>
                      <p style={{ color: "white" }}>{ingredient.measure}</p>
                    </IonLabel>
                    <IonCheckbox checked={ingredient.checked} />
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
        <IonHeader>
          <IonToolbar color="secondary">
            <IonButtons slot="start">
              <IonBackButton />
            </IonButtons>
            <IonTitle>{drink.strDrink}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="contentBgBlog spinner">
          <Spinner />
        </IonContent>
      </IonPage>
    );
  }
};

export default DrinkPage;
