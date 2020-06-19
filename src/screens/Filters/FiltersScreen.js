import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity, FlatList, Alert} from 'react-native';
import {updateFiltersSelected} from '../../modules/filters/filtersOperations';
import {clearDrinks} from '../../modules/drinks/drinksOperations';
import Icon from 'react-native-vector-icons/Ionicons';
import s from './styles';

const FiltersScreen = props => {
  useEffect(() => {
    setFilters(props.filters.items);
  }, [props.filters]);

  const [selectedFilters, setFilters] = useState([]);

  const selectCategory = (category, select) => {
    setFilters(filters =>
      filters.map(filter => ({
        strCategory: filter.strCategory,
        isSelected:
          filter.strCategory === category ? select : filter.isSelected,
      })),
    );
  };
  return (
    <View style={s.container}>
      <FlatList
        style={s.flatList}
        data={selectedFilters}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={s.listItem}
              key={item.strCategory}
              onPress={() =>
                selectCategory(item.strCategory, !item.isSelected)
              }>
              <Text style={s.grayFont}>{item.strCategory}</Text>
              {item.isSelected && <Icon name="md-checkmark" size={32} />}
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.strCategory}
      />
      <TouchableOpacity
        style={s.applyBtn}
        onPress={() => {
          if (!selectedFilters.some(f => f.isSelected)) {
            return Alert.alert(
              'Select category',
              'You do not select eny category!!!',
              [{text: 'OK'}],
              {cancelable: false},
            );
          }
          props.updateFiltersSelected(selectedFilters);
          props.clearDrinks();
          props.navigation.navigate('Drinks');
        }}>
        <Text style={s.whiteFont}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = ({filters}) => ({
  filters,
});

const mapDispatchToProps = {
  updateFiltersSelected,
  clearDrinks,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FiltersScreen);
