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
} from "@ionic/react";
import * as theme from "../theme";
import styles from "../pages/askbartender.module.css";

const AskBartender: React.FC = () => {
  console.log({ styles });

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
              <IonButton style={{ marginTop: "25px" }} expand="block">
                Let's Go !
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default AskBartender;
