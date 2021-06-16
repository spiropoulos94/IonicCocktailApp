import React, { useState } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonChip,
  IonLabel,
  IonText,
} from "@ionic/react";

interface drink {}

//  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/cocktailBackground.jpg") no-repeat center center / cover;

const CocktailPreviewCart = ({ drink }) => {
  const ingredients = [];

  for (const property in drink) {
    if (property.toString().includes("strIngredient") && drink[property]) {
      ingredients.push(drink[property]);
    }
  }

  console.log({ drink });

  return (
    <div>
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
            <IonChip backgroundColor="red" key={index}>
              <IonLabel style={{ color: "white" }}>{ingredient}</IonLabel>
            </IonChip>
          ))}
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default CocktailPreviewCart;
