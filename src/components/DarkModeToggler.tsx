import { IonButton, IonToggle, IonItem, IonIcon, IonLabel } from "@ionic/react";
import { moon } from "ionicons/icons";

interface ContainerProps {
  name: string;
}

const ToggleDarkMode: React.FC<ContainerProps> = ({ name }) => {
  const toggleDarkModeHandler = () => {
    document.body.classList.toggle("dark");
  };
  return (
    <IonItem>
      <IonIcon slot="start" icon={moon} />
      <IonLabel>Dark Mode</IonLabel>
      <IonToggle slot="end" name="darkMode" onIonChange={toggleDarkModeHandler} />
    </IonItem>
  );
};

export default ToggleDarkMode;
