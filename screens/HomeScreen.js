import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, CheckBox, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { generateSchedule } from '../api/scheduleAPI';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [preferences, setPreferences] = useState({
    categories: [],
    demographics: { age: '', sex: '', location: '', occupation: '' },
    preferences: [
      { preference: 'smoking', value: false, time: 'NA' },
      { preference: 'drinking', value: false, time: 'evening' },
      { preference: 'group_size', value: 'individual', time: 'NA' },
      { preference: 'outdoorsy', value: false, time: 'morning' }
    ],
    text_inputs: { specific_activities: '', additional_notes: '' },
    energy_level: '',
    schedule_density: '',
    spend: '',
    budget_range: { low: '', high: '' },
    travel_preference: 0,
  });

  const handleSubmit = async () => {
    try {
      const schedule = await generateSchedule(preferences);
      navigation.navigate('Schedule', { schedule });
    } catch (error) {
      console.error('Error generating schedule', error);
    }
  };

  const handleInputChange = (field, value) => {
    setPreferences({
      ...preferences,
      [field]: value,
    });
  };

  const handleDemographicsChange = (field, value) => {
    setPreferences({
      ...preferences,
      demographics: {
        ...preferences.demographics,
        [field]: value,
      },
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Enter your preferences</Text>

      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit} />
        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Schedule')}>
          <Text style={styles.linkText}>Go to Schedule</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.label}>Categories:</Text>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={preferences.categories.includes('fun')}
          onValueChange={() => handleInputChange('categories', [...preferences.categories, 'fun'])}
        />
        <Text style={styles.checkboxLabel}>Fun</Text>
        {/* Add more categories similarly */}
      </View>
      
      <Text style={styles.label}>Age:</Text>
      <TextInput
        style={styles.input}
        value={preferences.demographics.age}
        onChangeText={(value) => handleDemographicsChange('age', value)}
        keyboardType="numeric"
      />
      
      <Text style={styles.label}>Sex:</Text>
      <TextInput
        style={styles.input}
        value={preferences.demographics.sex}
        onChangeText={(value) => handleDemographicsChange('sex', value)}
      />
      
      <Text style={styles.label}>Location:</Text>
      <TextInput
        style={styles.input}
        value={preferences.demographics.location}
        onChangeText={(value) => handleDemographicsChange('location', value)}
      />
      
      <Text style={styles.label}>Occupation:</Text>
      <TextInput
        style={styles.input}
        value={preferences.demographics.occupation}
        onChangeText={(value) => handleDemographicsChange('occupation', value)}
      />
      
      <Text style={styles.label}>Smoking:</Text>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={preferences.preferences.find(pref => pref.preference === 'smoking').value}
          onValueChange={(value) => {
            const newPrefs = preferences.preferences.map(pref => 
              pref.preference === 'smoking' ? { ...pref, value } : pref
            );
            handleInputChange('preferences', newPrefs);
          }}
        />
        <Text style={styles.checkboxLabel}>Smoking</Text>
      </View>
      {/* Add more preferences similarly */}
      
      <Text style={styles.label}>Specific Activities:</Text>
      <TextInput
        style={styles.input}
        value={preferences.text_inputs.specific_activities}
        onChangeText={(value) => handleInputChange('text_inputs', { ...preferences.text_inputs, specific_activities: value })}
      />
      
      <Text style={styles.label}>Additional Notes:</Text>
      <TextInput
        style={styles.input}
        value={preferences.text_inputs.additional_notes}
        onChangeText={(value) => handleInputChange('text_inputs', { ...preferences.text_inputs, additional_notes: value })}
      />
      
      <Text style={styles.label}>Energy Level:</Text>
      <TextInput
        style={styles.input}
        value={preferences.energy_level}
        onChangeText={(value) => handleInputChange('energy_level', value)}
      />
      
      <Text style={styles.label}>Schedule Density:</Text>
      <TextInput
        style={styles.input}
        value={preferences.schedule_density}
        onChangeText={(value) => handleInputChange('schedule_density', value)}
      />
      
      <Text style={styles.label}>Spend:</Text>
      <TextInput
        style={styles.input}
        value={preferences.spend}
        onChangeText={(value) => handleInputChange('spend', value)}
        keyboardType="numeric"
      />
      
      <Text style={styles.label}>Budget Range Low:</Text>
      <TextInput
        style={styles.input}
        value={preferences.budget_range.low}
        onChangeText={(value) => handleInputChange('budget_range', { ...preferences.budget_range, low: value })}
        keyboardType="numeric"
      />
      
      <Text style={styles.label}>Budget Range High:</Text>
      <TextInput
        style={styles.input}
        value={preferences.budget_range.high}
        onChangeText={(value) => handleInputChange('budget_range', { ...preferences.budget_range, high: value })}
        keyboardType="numeric"
      />
      
      <Text style={styles.label}>Travel Preference (km):</Text>
      <TextInput
        style={styles.input}
        value={preferences.travel_preference.toString()}
        onChangeText={(value) => handleInputChange('travel_preference', parseInt(value))}
        keyboardType="numeric"
      />
      
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit} />
        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Schedule')}>
          <Text style={styles.linkText}>Go to Schedule</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 18,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  link: {
    marginTop: 10,
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default HomeScreen;
