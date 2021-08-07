import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
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
      <IonContent className="contentBgBlackGray2" fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Ask the Bartender</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <div className={styles.pageContentContainer}>
          <div className={styles.prompt} style={{ padding: "30px 20px" }}>
            <IonText style={{ fontSize: theme.SIZES.h1, color: "white" }}>
              Out of ideas?
            </IonText>
            <br />
            <br />
            <IonText
              style={{
                fontSize: theme.SIZES.h4,
                color: "white",
                marginTop: "100px",
              }}
            >
              Try answering some simple questions and find that perfect match!
            </IonText>
            <IonButton style={{ marginTop: "25px" }} expand="block">
              Let's Go !
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AskBartender;
