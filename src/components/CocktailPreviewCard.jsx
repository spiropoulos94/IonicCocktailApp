import React, { useState } from "react";
import { useHistory } from "react-router";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonChip,
  IonLabel,
  IonText,
  IonIcon,
  IonRippleEffect,
  IonRouterLink,
  IonButton,
} from "@ionic/react";

import { enterOutline } from "ionicons/icons";

interface drink {}

//  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/cocktailBackground.jpg") no-repeat centerOutline centerOutline / cover;

const CocktailPreviewCart = ({ drink }) => {
  const ingredients = [];

  const history = useHistory();

  for (const property in drink) {
    if (property.toString().includes("strIngredient") && drink[property]) {
      ingredients.push(drink[property]);
    }
  }

  console.log({ drink });

  //TODO otan pataei to link kai se paei sthn drink page, prepei na kouvalaei mazi kai to {drink} object gia na mhn ksanakanei fetch

  return (
    <IonCard
      style={{
        backgroundImage: `url(${drink.strDrinkThumb})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "darken",
        backgroundColor: "rgba(0,0,0,0.65",
      }}
    >
      <IonCardHeader>
        <IonCardTitle>
          <IonText style={{ color: "white" }}>{drink.strDrink}</IonText>
        </IonCardTitle>
        <IonCardSubtitle styles={{ color: "white" }}>
          <IonText style={{ color: "white" }}>
            {drink.strAlcoholic} ({ingredients.length} ingredients)
          </IonText>
        </IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <img style={{ borderRadius: 25 }} src={drink.strDrinkThumb} />
        {/* Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit
          clean. */}
        {ingredients.map((ingredient, index) => (
          <IonChip outline="true" color="secondary" key={index}>
            <IonLabel style={{ color: "white" }}>{ingredient}</IonLabel>
          </IonChip>
        ))}
        <IonButton
          onClick={() =>
            history.push({
              pathname: `/search/${drink.idDrink}`,
              state: { drink },
            })
          }
          style={{
            position: "absolute",
            right: "0%",
            top: "-15%",
            padding: 0,
          }}
          size="large"
          fill="clear"
          shape="round"
          mode="ios"
        >
          <IonIcon
            style={{
              color: "white",
            }}
            icon={enterOutline}
          />
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default CocktailPreviewCart;
