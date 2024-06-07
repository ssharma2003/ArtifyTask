import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView, Image } from 'react-native';
import axios from 'axios';
import ipconstant from '../../ipconstant/ipconstant';

const ProjectDetails = ({ route }) => {
  const { projectId } = route.params;
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`${ipconstant}/api/projects/${projectId}`);
        setProject(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProject();
  }, [projectId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#000000" style={styles.loadingIndicator} />;
  }

  if (!project) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Project not found</Text>
      </View>
    );
  }

  const { name, description, startDate, endDate, assignedEmployees = [], assignedEquipment = [] } = project;

  let imageSource;
  if (name === 'Office Building Construction') {
    imageSource = require('../../assets/office.png');
  } else if (name === 'Bridge Construction') {
    imageSource = require('../../assets/bridge.png');
  }else if (name === 'Residential Apartment Complex') {
    imageSource = require('../../assets/residence.png');
  }else if (name === 'School Building Renovation') {
    imageSource = require('../../assets/bldg.png');
  }
  // Add more conditions as needed

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        {imageSource && <Image source={imageSource} style={styles.image} />}
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
            <View key={emp._id} style={styles.listItem}>
              <Text style={styles.listItemText}>- {emp.name}</Text>
              <Text style={styles.bulletPoint}>• Role: {emp.role}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.noDataText}>No employees assigned.</Text>
        )}

        <Text style={styles.sectionHeader}>Assigned Equipment</Text>
        {assignedEquipment.length > 0 ? (
          assignedEquipment.map(eq => (
            <View key={eq._id} style={styles.listItem}>
              <Text style={styles.listItemText}>- {eq.name}</Text>
              <Text style={styles.bulletPoint}>• Available: {eq.available ? 'Yes' : 'No'}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.noDataText}>No equipment assigned.</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 15,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000', // Black color
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    paddingBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  detailContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    color: '#000',
  },
  value: {
    marginLeft: 5,
    color: '#666',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000', // Black color
    marginTop: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 5,
  },
  listItem: {
    backgroundColor: '#eeeeee',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  listItemText: {
    fontSize: 16,
    color: '#333',
  },
  bulletPoint: {
    fontSize: 14,
    color: '#000',
    marginLeft: 10,
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
