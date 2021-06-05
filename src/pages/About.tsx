import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText } from "@ionic/react";
import * as theme from "../theme";

const About: React.FC = () => {
  console.log({ theme });
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding ion-text-center" fullscreen>
        <IonText style={theme.FONTS.body1}>
          This is a web app made by me for drink lovers. You can use it to search for your desired drink and learn about it. You can even try making it! If you
          have any suggestions let me know! Thanks!
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default About;
