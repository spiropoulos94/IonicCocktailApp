import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="tertiary" fullscreen></IonContent>
    </IonPage>
  );
};

export default Tab3;
