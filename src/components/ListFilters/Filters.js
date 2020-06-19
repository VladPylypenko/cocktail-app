import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Filters = ({strCategory}) => {
  const [filters, setFilters] = useState([]);
  //console.log('', filters);
  console.log('category', strCategory);
  return (
    <View style={{}}>
      {/* {strCategory.map((item, index) => (
        <TouchableOpacity style={{}} onPress={str => setFilters(str)}>
          <Text>{strCategory}</Text>
        </TouchableOpacity>
      ))} */}
    </View>
  );
};

export default Filters;
