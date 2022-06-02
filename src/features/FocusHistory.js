import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

const FocusHistory = ({ history }) => {
  if (!history || !history.length) {
    return (
      <Text style={styles.title}>We haven't focused on Anything yet:</Text>
    );
  }

  const renderItem = ({ item }) => <Text style={styles.item}>-{item}</Text>;
  return (
    <View style={styles.conatiner}>
      <Text style={styles.title}>Things we've Focused on:</Text>
      <FlatList
        data={history}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    padding: spacing.md,
    flex: 1,
  },
  item: {
    color: colors.white,
    paddingTop: spacing.sm,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    marginTop:-250
  },
});

export default FocusHistory;
