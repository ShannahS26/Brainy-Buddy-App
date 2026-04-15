import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  RefreshControl,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_BASE_URL } from "../lib/api";
import { router } from "expo-router";

export default function ParentDashboard() {
  const [children, setChildren] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchChildren = async () => {
    try {
      const token = await AsyncStorage.getItem("token");

      const response = await fetch(`${API_BASE_URL}/parent/children`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();

      if (response.ok) setChildren(data);
      else console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchChildren();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchChildren();
    setRefreshing(false);
  };

  const totalChildren = children.length;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>

        {/* Header */}
        <Text style={styles.title}>Parent Dashboard</Text>
        <Text style={styles.subtitle}>
          Track your child’s learning journey
        </Text>

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{totalChildren}</Text>
            <Text style={styles.statLabel}>Children</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statNumber}>--</Text>
            <Text style={styles.statLabel}>Avg Score</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statNumber}>--</Text>
            <Text style={styles.statLabel}>Attempts</Text>
          </View>
        </View>

        {/* Add Child Button */}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => router.push("/createChild")}
        >
          <Text style={styles.addButtonText}>+ Add Child</Text>
        </TouchableOpacity>

        {/* Children List */}
        <FlatList
          data={children}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 40 }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListEmptyComponent={
            <Text style={styles.emptyText}>
              No children added yet. Tap “Add Child” to get started.
            </Text>
          }
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/childProgress",
                  params: { childId: item.id },
                })
              }
            >
              <View style={styles.childCard}>
                <Text style={styles.name}>{item.username}</Text>
                <Text style={styles.email}>{item.email}</Text>

                {/* Progress preview */}
                <View style={styles.progressBarBg}>
                  <View style={[styles.progressBarFill, { width: "60%" }]} />
                </View>

                <View style={styles.childFooter}>
                  <Text style={styles.progressText}>Accuracy: 60%</Text>
                  <Text style={styles.lastActive}>Last active: --</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5cbbcc",
    padding: 20,
  },

  card: {
    flex: 1,
    backgroundColor: "#fff9f3",
    borderRadius: 28,
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "900",
    color: "#355c9a",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 15,
    color: "#355c9a",
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },

  statBox: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 16,
    alignItems: "center",
    elevation: 2,
  },

  statNumber: {
    fontSize: 18,
    fontWeight: "900",
    color: "#355c9a",
  },

  statLabel: {
    fontSize: 12,
    color: "#777",
  },

  addButton: {
    backgroundColor: "#ffb800",
    padding: 14,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "#000",
  },

  addButtonText: {
    fontSize: 16,
    fontWeight: "900",
  },

  childCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#eee",
  },

  name: {
    fontSize: 18,
    fontWeight: "900",
    color: "#355c9a",
  },

  email: {
    color: "#777",
    marginBottom: 10,
  },

  progressBarBg: {
    height: 8,
    backgroundColor: "#eee",
    borderRadius: 10,
    overflow: "hidden",
  },

  progressBarFill: {
    height: 8,
    backgroundColor: "#4caf50",
  },

  childFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },

  progressText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#355c9a",
  },

  lastActive: {
    fontSize: 11,
    color: "#999",
  },

  emptyText: {
    textAlign: "center",
    marginTop: 30,
    color: "#777",
    fontWeight: "600",
  },
});