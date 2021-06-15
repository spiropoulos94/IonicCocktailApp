import React, { useState } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonChip,
  IonLabel,
} from "@ionic/react";

interface drink {}

const CocktailPreviewCart = ({ drink }) => {
  // const [ingredients, setIngredients] = useState([]);

  const ingredients = [];

  for (const property in drink) {
    if (property.toString().includes("strIngredient") && drink[property]) {
      ingredients.push(drink[property]);
    }
  }

  console.log(ingredients);

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{drink.strDrink}</IonCardTitle>
        <IonCardSubtitle>{drink.strAlcoholic}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <img src={drink.strDrinkThumb} />
        {/* Keep close to Nature's heart... and break clear away, once in awhile,
        and climb a mountain or spend a week in the woods. Wash your spirit
        clean. */}
        {ingredients.map((ingredient) => (
          <IonChip>
            <IonLabel>{ingredient}</IonLabel>
          </IonChip>
        ))}
      </IonCardContent>
    </IonCard>
  );
};

export default CocktailPreviewCart;
