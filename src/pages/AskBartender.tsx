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

const AskBartender: React.FC = () => {
  console.log({ theme });

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
        <div style={{ padding: "30px 20px" }}>
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
      </IonContent>
    </IonPage>
  );
};

export default AskBartender;
