import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";

interface drink {}

const CocktailPreviewCart = ({ drink }) => {
  console.log(drink);

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{drink.strDrink}</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        <img src={drink.strDrinkThumb} />
        {/* Keep close to Nature's heart... and break clear away, once in awhile,
        and climb a mountain or spend a week in the woods. Wash your spirit
        clean. */}
      </IonCardContent>
    </IonCard>
  );
};

export default CocktailPreviewCart;
