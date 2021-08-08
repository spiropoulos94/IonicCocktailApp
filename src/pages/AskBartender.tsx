import { useState } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonCol,
  IonRow,
  IonItemDivider,
  IonLabel,
  IonItem,
  IonList,
  IonModal,
} from "@ionic/react";
import * as theme from "../theme";
import styles from "../pages/askbartender.module.css";

const AskBartenderModal: React.FC = ({ showModal, setShowModal }) => {
  return (
    <>
      <IonModal isOpen={showModal} cssClass="my-custom-class">
        <ion-header translucent>
          <ion-toolbar>
            <ion-title>Modal Content</ion-title>
            <ion-buttons slot="end">
              <ion-button onclick="dismissModal()">Close</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <IonContent fullscreen>
          <IonList>
            <IonItem>
              <ion-label>
                <h2>Gollum</h2>
                <p>Sneaky little hobbitses!</p>
              </ion-label>
            </IonItem>
            <IonItem>
              <ion-label>
                <h2>Frodo</h2>
                <p>Go back, Sam! I'm going to Mordor alone!</p>
              </ion-label>
            </IonItem>
            <IonItem>
              <ion-label>
                <h2>Samwise</h2>
                <p>What we need is a few good taters.</p>
              </ion-label>
            </IonItem>
          </IonList>
        </IonContent>
        <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
      </IonModal>
      <IonButton onClick={() => setShowModal(true)}>Show Modal</IonButton>
    </>
  );
};

const AskBartender: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Ask the Bartender</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollY={false} className="contentBgBlackGray2" fullscreen>
        <IonGrid style={{ height: "100%", display: "flex" }}>
          <IonRow style={{ margin: "auto" }}>
            <IonCol
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "20px",
              }}
            >
              <IonText style={{ fontSize: theme.SIZES.h1, color: "white" }}>
                Out of ideas?
              </IonText>
              <IonItemDivider style={{ backgroundColor: "transparent" }} />
              <IonText
                style={{
                  fontSize: theme.SIZES.h4,
                  color: "white",
                }}
              >
                Try answering some simple questions and find that perfect match!
              </IonText>
              <IonButton
                style={{ marginTop: "25px" }}
                expand="block"
                onClick={() => setShowModal(true)}
              >
                Let's Go !
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <AskBartenderModal showModal={showModal} setShowModal={setShowModal} />
      </IonContent>
    </IonPage>
  );
};

export default AskBartender;
