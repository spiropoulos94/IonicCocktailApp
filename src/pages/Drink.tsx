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
  IonImg,
  IonLabel,
  IonItem,
  IonList,
  IonIcon,
  IonCheckbox,
  IonListHeader,
  useIonAlert,
} from "@ionic/react";

import { star, wineOutline, play, pause } from "ionicons/icons";

import Spinner from "../components/Spinner";

import { useQuery, useQueryClient } from "react-query";

const DrinkPage: React.FC = (props) => {
  let { drink } = (props.location && props.location.state) || {};

  const queryClient = useQueryClient();

  const { isLoading, error, data, isFetching } = useQuery(
    `drink-${props.match.params.drink}`,
    //useQuery returns the drink obj from the location.state, and caches it like it was fetched
    () => {
      return drink;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  const [present] = useIonAlert();

  const handleCheck = (checkedIngredient) => {
    checkedIngredient.checked = !checkedIngredient.checked;

    queryClient.setQueryData(`drink-${props.match.params.drink}`, {
      ...data,
    });

    if (data.ingredients.every((i) => i.checked)) {
      present({
        header: "That's great!",
        message: "You 've got all you need! Check the recipe!",
        buttons: [{ text: "Ok", handler: (d) => console.log("ok pressed") }],
        onDidDismiss: (e) => console.log("did dismiss"),
      });
    }
  };

  console.log({ data });

  if (data) {
    const drink = data;
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
                <IonTitle
                  style={{ textAlign: "start", fontStyle: "italic" }}
                  size="large"
                >
                  {drink.strDrink}
                </IonTitle>
              </IonToolbar>
            </IonHeader>

            {/* <img
              style={{ padding: 20, borderRadius: "10%" }}
              src={data.drink && data.drink.strDrinkThumb}
            /> */}

            {/* <IonImg
              style={{ padding: 20, borderRadius: "10%" }}
              src={data.drink && data.drink.strDrinkThumb}
            /> */}

            <IonList lines="none" className="transparent-list">
              <IonItem style={{ color: "white" }} className="transparent-item">
                {/* <IonLabel>Glass</IonLabel> */}
                <IonIcon
                  style={{
                    color: "white",
                  }}
                  icon={wineOutline}
                />
                <IonLabel>{drink.strGlass}</IonLabel>
              </IonItem>
              {drink.strIBA && (
                <IonItem style={{ color: "white" }}>
                  <IonIcon
                    style={{
                      color: "white",
                    }}
                    icon={star}
                  />
                  <IonLabel>{drink.strIBA}</IonLabel>
                </IonItem>
              )}
              {drink.strAlcoholic === "Alcoholic" ? (
                <IonItem style={{ color: "white" }}>
                  <IonIcon
                    style={{
                      color: "white",
                    }}
                    icon={play}
                  />
                  <IonLabel>{drink.strAlcoholic}</IonLabel>
                </IonItem>
              ) : (
                <IonItem style={{ color: "white" }}>
                  <IonIcon
                    style={{
                      color: "white",
                    }}
                    icon={pause}
                  />
                  <IonLabel>{drink.strAlcoholic}</IonLabel>
                </IonItem>
              )}
            </IonList>

            <img
              style={{ padding: 20, borderRadius: "10%" }}
              src={drink && drink.strDrinkThumb}
            />

            <IonList
              className="transparent-list"
              style={{ background: "transparent" }}
            >
              <IonListHeader lines="inset">
                <IonLabel style={{ color: "white" }}>Ingredients</IonLabel>
              </IonListHeader>

              {drink.ingredients.map((ingredient) => {
                return (
                  <IonItem
                    lines="none"
                    detail={false}
                    className="transparent-item"
                    button
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
                    <IonLabel style={{ color: "white" }}>
                      {/* link gia google */}
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
