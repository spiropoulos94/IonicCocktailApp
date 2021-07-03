import React, { useState } from "react";
import { useQuery } from "react-query";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLoading,
  IonSearchbar,
} from "@ionic/react";

import CocktailPreviewCard from "../components/CocktailPreviewCard";
import * as theme from "../theme";

import { fetchCocktailsByName } from "../utils";

const Tab3: React.FC = (props) => {
  const [searchText, setSearchText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const { isLoading, error, data, isFetching } = useQuery(
    `drinks${searchQuery}`,
    () => fetchCocktailsByName(searchQuery),
    {
      refetchOnWindowFocus: false,
      // enabled: false, // turned off by default, manual refetch is needed
    }
  );

  const handleKeyPress = async (e: any) => {
    if (e.key == "Enter") {
      setSearchQuery(searchText);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent
        // scrollY={false}
        // className="test"
        className="contentBgBlackGray2"
        // color="tertiary"
        fullscreen
      >
        <IonLoading
          cssClass="my-custom-class"
          isOpen={isFetching}
          message={"Please wait..."}
        />
        <div
          style={{
            // width: "100%",
            paddingTop: theme.SIZES.padding * 2,
            paddingBottom: theme.SIZES.padding * 1,
          }}
        >
          <IonSearchbar
            enterkeyhint="search"
            type="search"
            color="secondary"
            value={searchText}
            onKeyPress={(e: any) => handleKeyPress(e)}
            placeholder={"Search your cocktail"}
            onIonChange={(e) => setSearchText(e.detail.value!)}
          ></IonSearchbar>
        </div>

        {/* <IonToolbar>Search Text: {searchQuery ?? "(none)"}</IonToolbar> */}
        {data &&
          data.map((item) => {
            const cocktailCardProps = {
              // make sure all required component's inputs/Props keys&types match
              drink: item,
            };
            return <CocktailPreviewCard key={item.id} {...cocktailCardProps} />;
          })}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
