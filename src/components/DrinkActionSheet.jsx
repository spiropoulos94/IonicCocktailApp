/* Using with IonActionSheet Component */

import React, { useState } from "react";
import { IonActionSheet, IonContent, IonButton } from "@ionic/react";
import {
  trash,
  share,
  caretForwardCircle,
  heart,
  close,
  constructOutline,
} from "ionicons/icons";

export const DrinkActionSheet = ({ status, setStatus, drink }) => {
  //tsekare poio drink tou exei perasei kathe fora gia na mporei na to kanei favorite
  console.log({ status }, { drink });
  return (
    <IonActionSheet
      backdropDismiss={false}
      isOpen={status}
      onDidDismiss={() => setStatus(false)}
      cssClass="my-custom-class"
      buttons={[
        {
          text: "Share",
          icon: share,
          handler: () => {
            console.log("Share clicked");
          },
        },

        {
          text: "Favorite",
          icon: heart,
          handler: () => {
            console.log("Favorite clicked");
          },
        },
        {
          text: "Cancel",
          icon: close,
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ]}
    ></IonActionSheet>
  );
};
