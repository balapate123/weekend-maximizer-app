import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Agenda } from 'react-native-calendars';

const ScheduleScreen = () => {
  // Dummy data for testing
  const schedule = {
    '2024-05-25': [
      {
        activity: 'Morning Jog',
        type: 'Fitness',
        timeRange: { start: '2024-05-25T06:00:00', end: '2024-05-25T07:00:00' },
        location: 'Central Park',
        additional_detail: 'Jog with friends',
        estimated_activity_cost: '$0',
      },
      {
        activity: 'Breakfast',
        type: 'Food',
        timeRange: { start: '2024-05-25T07:30:00', end: '2024-05-25T08:00:00' },
        location: 'Home',
        additional_detail: 'Healthy breakfast',
        estimated_activity_cost: '$5',
      },
      {
        activity: 'Work on Project',
        type: 'Productivity',
        timeRange: { start: '2024-05-25T09:00:00', end: '2024-05-25T12:00:00' },
        location: 'Home Office',
        additional_detail: 'Finish the report',
        estimated_activity_cost: '$0',
      },
    ],
    '2024-05-26': [
      {
        activity: 'Lunch with Colleagues',
        type: 'Social',
        timeRange: { start: '2024-05-26T12:30:00', end: '2024-05-26T14:00:00' },
        location: 'Restaurant',
        additional_detail: 'Discuss project updates',
        estimated_activity_cost: '$20',
      },
      {
        activity: 'Afternoon Hike',
        type: 'Outdoors',
        timeRange: { start: '2024-05-26T15:00:00', end: '2024-05-26T17:00:00' },
        location: 'Trail Park',
        additional_detail: 'Hike with friends',
        estimated_activity_cost: '$0',
      },
      {
        activity: 'Dinner',
        type: 'Food',
        timeRange: { start: '2024-05-26T19:00:00', end: '2024-05-26T20:00:00' },
        location: 'Home',
        additional_detail: 'Cooked at home',
        estimated_activity_cost: '$10',
      },
      {
        activity: 'Watch Movie',
        type: 'Entertainment',
        timeRange: { start: '2024-05-26T21:00:00', end: '2024-05-26T23:00:00' },
        location: 'Home',
        additional_detail: 'Watch a comedy movie',
        estimated_activity_cost: '$0',
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Agenda
        items={schedule}
        renderItem={(item) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>Activity: {item.activity}</Text>
            <Text style={styles.itemText}>Type: {item.type}</Text>
            <Text style={styles.itemText}>Time: {new Date(item.timeRange.start).toLocaleTimeString()} - {new Date(item.timeRange.end).toLocaleTimeString()}</Text>
            <Text style={styles.itemText}>Location: {item.location}</Text>
            <Text style={styles.itemText}>Details: {item.additional_detail}</Text>
            <Text style={styles.itemText}>Cost: {item.estimated_activity_cost}</Text>
          </View>
        )}
        selected={'2024-05-25'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
});

export default ScheduleScreen;
