// screens/DashboardScreen.js

import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import {projects, employees, equipment} from '../../constants/Data'

const DashboardScreen = ({ navigation }) => {
  const renderProjectItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, styles.projectCard]}
      onPress={() => navigation.navigate('ProjectDetails', { projectId: item.id })}
    >
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text>Status: <Text style={styles[`status${item.status}`]}>{item.status}</Text></Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Projects Overview</Text>
      <FlatList
        data={projects}
        renderItem={renderProjectItem}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalList}
      />

      <Text style={styles.header}>Employee Details</Text>
      <View style={styles.listContainer}>
        {employees.map(emp => (
          <View key={emp.id} style={[styles.card, styles.employeeCard]}>
            <Text style={styles.cardTitle}>{emp.name}</Text>
            <Text>Role: {emp.role}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.header}>Equipment Status</Text>
      <View style={styles.listContainer}>
        {equipment.map(eq => (
          <View key={eq.id} style={[styles.card, styles.equipmentCard]}>
            <Text style={styles.cardTitle}>{eq.name}</Text>
            <Text>Available: {eq.available ? 'Yes' : 'No'}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
    marginLeft: 10,
  },
  horizontalList: {
    paddingLeft: 10,
    marginBottom: 20,
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  projectCard: {
    marginRight: 10,
    width: 250,
  },
  employeeCard: {
    width: '48%',
  },
  equipmentCard: {
    width: '48%',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  statusOngoing: {
    color: '#4caf50',
  },
  statusPending: {
    color: '#ff9800',
  },
  statusCompleted: {
    color: '#2196f3',
  },
});

export default DashboardScreen;
