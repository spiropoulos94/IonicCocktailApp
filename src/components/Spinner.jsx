import {
  IonSpinner,
  IonToggle,
  IonItem,
  IonIcon,
  IonLabel,
} from "@ionic/react";

const Spinner = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IonSpinner style={{ color: "white" }} />
    </div>
  );
};

export default Spinner;
