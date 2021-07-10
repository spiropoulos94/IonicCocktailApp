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

import {
  star,
  wineOutline,
  play,
  pause,
  ellipsisVerticalCircleOutline,
} from "ionicons/icons";

import Spinner from "../components/Spinner";
import { DrinkActionSheet } from "../components/DrinkActionSheet";

import { useQuery, useQueryClient } from "react-query";

const DrinkPage: React.FC = (props) => {
  let { drink } = (props.location && props.location.state) || {};

  const [actionSheetStatus, setActionsSheetStatus] = useState(false);

  const queryClient = useQueryClient();

  const { isLoading, error, data, isFetching } = useQuery(
    `drink-${props.match.params.drink}`,
    //useQuery returns the drink obj from the location.state, and caches it like it was fetched
    () => {
      return drink;
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

  if (data) {
    console.log({ data }, { drink });
    //data is used instead of drink, because drink returns undefined through page re-renders, while data is cached
    return (
      <>
        <IonPage>
          <IonHeader>
            <IonToolbar color="secondary">
              <IonButtons slot="start">
                <IonBackButton />
              </IonButtons>
              <IonIcon
                onClick={() => setActionsSheetStatus(true)}
                style={{ paddingRight: "10px" }}
                size="large"
                icon={ellipsisVerticalCircleOutline}
                slot="end"
              >
                ellipsisVerticalCircleOutline here
              </IonIcon>
              <IonTitle>{data ? data.strDrink : "Drink Title"}</IonTitle>
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
                  {data.strDrink}
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
                <IonLabel>{data.strGlass}</IonLabel>
              </IonItem>
              {data.strIBA && (
                <IonItem style={{ color: "white" }}>
                  <IonIcon
                    style={{
                      color: "white",
                    }}
                    icon={star}
                  />
                  <IonLabel>{data.strIBA}</IonLabel>
                </IonItem>
              )}
              {data.strAlcoholic === "Alcoholic" ? (
                <IonItem style={{ color: "white" }}>
                  <IonIcon
                    style={{
                      color: "white",
                    }}
                    icon={play}
                  />
                  <IonLabel>{data.strAlcoholic}</IonLabel>
                </IonItem>
              ) : (
                <IonItem style={{ color: "white" }}>
                  <IonIcon
                    style={{
                      color: "white",
                    }}
                    icon={pause}
                  />
                  <IonLabel>{data.strAlcoholic}</IonLabel>
                </IonItem>
              )}
            </IonList>

            <img
              style={{ padding: 20, borderRadius: "10%" }}
              src={data && data.strDrinkThumb}
            />

            <IonList
              className="transparent-list"
              style={{ background: "transparent" }}
            >
              <IonListHeader lines="inset">
                <IonLabel style={{ color: "white" }}>Ingredients</IonLabel>
              </IonListHeader>

              {data.ingredients.map((ingredient) => {
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
                    <IonLabel slot="center" style={{ color: "white" }}>
                      {/* link gia google */}
                      fafas
                    </IonLabel>
                    <IonCheckbox slot="end" checked={ingredient.checked} />
                  </IonItem>
                );
              })}
            </IonList>
            <IonList
              className="transparent-list"
              style={{ background: "transparent" }}
            >
              <IonListHeader lines="inset">
                <IonLabel style={{ color: "white" }}>How to make :</IonLabel>
              </IonListHeader>
              <IonItem lines="none">
                <IonText style={{ color: "white" }}>
                  {data.strInstructions}
                </IonText>
              </IonItem>
            </IonList>
            <DrinkActionSheet
              status={actionSheetStatus}
              setStatus={setActionsSheetStatus}
              drink={data}
            />
          </IonContent>
        </IonPage>
      </>
    );
  } else {
    return (
      <IonPage>
        <IonHeader>
          {/* <IonToolbar color="secondary"> */}
          {/* <IonButtons slot="start">
              <IonBackButton />
            </IonButtons>
            <IonTitle>No drink found</IonTitle>
          </IonToolbar> */}
        </IonHeader>
        <IonContent className="contentBgBlackGray2 spinner">
          <Spinner />
          {/* <p>No Drink found, please return to search page</p> */}
        </IonContent>
      </IonPage>
    );
  }
};

export default DrinkPage;
