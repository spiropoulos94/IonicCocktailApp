import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonText,
  IonDatetime,
  IonItemDivider,
  IonSearchbar,
  IonFooter,
  IonButton,
  useIonAlert,
} from "@ionic/react";

import CocktailPreviewCard from "../../src/components/CocktailPreviewCart";
import * as theme from "../theme";

const Tab3: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [shownMessage, setShownMessage] = useState("");

  console.log({ theme });

  const handleKeyPress = (e: any) => {
    if (e && e.key == "Enter") {
      setShownMessage(searchText);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="tertiary" fullscreen>
        <div
          style={{
            // width: "100%",
            paddingTop: theme.SIZES.padding * 2,
            paddingBottom: theme.SIZES.padding * 2,
          }}
        >
          <IonSearchbar
            enterkeyhint="search"
            type="search"
            color="secondary"
            value={searchText}
            onKeyPress={(e: any) => handleKeyPress(e)}
            placeholder={"Search your cocktail"}
            onIonChange={(e) => setSearchText(e.detail.value!)}
          ></IonSearchbar>
        </div>

        <IonToolbar>Search Text: {shownMessage ?? "(none)"}</IonToolbar>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
