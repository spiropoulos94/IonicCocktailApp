import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonText,
  IonRouterLink,
} from "@ionic/react";
import * as theme from "../theme";
import styles from "./home.module.css";

const Tab1: React.FC = (props) => {
  console.log({ props });
  console.log({ styles });
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent scrollY={false} fullscreen>
        <div className={styles.pageContainer}>
          <div className={styles.main}>
            <IonText className={styles.mainText}>
              Welcome to your Next Drink App!
            </IonText>
            <div className={styles.buttonContainer}>
              <IonRouterLink routerLink="/search">
                <IonButton>Get Started</IonButton>
              </IonRouterLink>
              <IonRouterLink>
                <IonButton color="secondary">Show Features</IonButton>
              </IonRouterLink>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
