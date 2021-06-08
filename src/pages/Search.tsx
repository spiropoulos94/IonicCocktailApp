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
  const [present] = useIonAlert();

  console.log({ theme });

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
            color="secondary"
            value={searchText}
            placeholder={"Search your cocktail"}
            onIonChange={(e) => setSearchText(e.detail.value!)}
          ></IonSearchbar>

          {/* <IonButton slot="end">Shake it!</IonButton> */}
        </div>

        <IonToolbar>Search Text: {searchText ?? "(none)"}</IonToolbar>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
