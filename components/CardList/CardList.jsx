import React, { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { SelectableCard } from "../";

// renders a scrollable list of selectable card elements
const CardList = ({ items, scrollDirection, handleSelected }) => {
  const [selectedCard, selectedCardSelected] = useState("");
  const handlePress = (id, text) => {
    selectedCardSelected(id);
    handleSelected({ id: id, text: text });
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <SelectableCard
            key={item.id}
            id={item.id}
            text={item.text}
            description={item.description || ""}
            selected={selectedCard === item.id}
            onPress={() => handlePress(item.id)}
          >
            {item.icon}
          </SelectableCard>
        )}
        keyExtractor={(item) => item.id}
        horizontal={scrollDirection === "horizontal" ? true : false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    justifyContent: "center",
  },
});

export default CardList;
