import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
  IonBackButton,
  IonButtons,
} from "@ionic/react";
import * as theme from "../theme";

const About: React.FC = () => {
  // console.log({ theme });
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>

          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding ion-text-center">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "center",
          }}
        >
          <IonText style={theme.FONTS.body2}>
            This is a web app made by{" "}
            <a
              href="https://www.linkedin.com/in/nikos-spiropoulos-813167181/"
              target="_blank"
            >
              a cocktail enthusiast
            </a>
            {"  "}
            for drink lovers. You can use it to search for your desired drink
            and learn about it. You can even try making it! If you have any
            suggestions let me know! Thanks!
          </IonText>
        </div>
        {/* <IonText style={theme.FONTS.body1}>
          This is a web app made by me for drink lovers. You can use it to search for your desired drink and learn about it. You can even try making it! If you
          have any suggestions let me know! Thanks!
        </IonText> */}
      </IonContent>
    </IonPage>
  );
};

export default About;
