import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonText } from "@ionic/react";
import * as theme from "../theme";
import styles from "./home.module.css";

const Tab1: React.FC = () => {
  console.log({ styles });
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent color="tertiary" fullscreen>
        <div className={styles.pageContainer}>
          <div className={styles.main}>
            <IonText className={styles.mainText}>Welcome to your Next Drink App!</IonText>
            <div className={styles.buttonContainer}>
              <IonButton color="primary">Get Started</IonButton>
              <IonButton color="secondary">Show Features</IonButton>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
