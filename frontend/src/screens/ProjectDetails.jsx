// screens/ProjectDetailsScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {projects, employees, equipment} from '../../constants/Data'

const ProjectDetails = ({ route }) => {
  const { projectId } = route.params;
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Project not found</Text>
      </View>
    );
  }

  const { name, description, startDate, endDate, assignedEmployees = [], assignedEquipment = [] } = project;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Start Date:</Text>
        <Text style={styles.value}>{startDate}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>End Date:</Text>
        <Text style={styles.value}>{endDate}</Text>
      </View>

      <Text style={styles.sectionHeader}>Assigned Employees</Text>
      {assignedEmployees.length > 0 ? (
        assignedEmployees.map(emp => (
          <Text key={emp.id} style={styles.listItem}>- {emp.name}</Text>
        ))
      ) : (
        <Text style={styles.noDataText}>No employees assigned.</Text>
      )}

      <Text style={styles.sectionHeader}>Assigned Equipment</Text>
      {assignedEquipment.length > 0 ? (
        assignedEquipment.map(eq => (
          <Text key={eq.id} style={styles.listItem}>- {eq.name}</Text>
        ))
      ) : (
        <Text style={styles.noDataText}>No equipment assigned.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 15,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  detailContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
  },
  value: {
    marginLeft: 5,
    color: '#666',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    color: '#666',
    marginLeft: 10,
    marginBottom: 5,
  },
  noDataText: {
    fontSize: 16,
    color: '#999',
    marginLeft: 10,
    marginBottom: 5,
  },
  error: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ProjectDetails;
