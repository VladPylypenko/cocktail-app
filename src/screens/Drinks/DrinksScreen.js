import React, {useLayoutEffect, useEffect} from 'react';
import {View, Text, Image, SectionList} from 'react-native';
import {connect} from 'react-redux';
import {fetchDrinks} from '../../modules/drinks/drinksOperations';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrinksScreen = props => {
  useEffect(() => {
    loadMore();
  }, [props.filters]);

  const loadMore = () => {
    const pageIndex = props.drinks.pageIndex;
    const filters = props.filters.items;
    const selectedFilters = filters
      .filter(({isSelected}) => isSelected)
      .map(({strCategory}) => strCategory);
    const currentFilter = selectedFilters[pageIndex];

    console.log(currentFilter);

    if (currentFilter) {
      props.fetchDrinks(currentFilter);
    }
  };
  console.log('ITEMS', props);
  const sections = props.drinks.items.map(i => ({
    title: i.category,
    items: i.drinks,
  }));

  return (
    <View style={{flex: 1}}>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => {
          console.log(item);
          return <Text>{item}</Text>;
        }}
        renderSectionHeader={({title}) => {
          console.log(title);
          return <Text>{title}</Text>;
        }}
        onEndReached={() => loadMore()}
      />
    </View>
  );
};

DrinksScreen.navigationOptions = ({navigation}) => ({
  headerRight: () => (
    <Icon
      style={{marginRight: 20}}
      onPress={() => navigation.navigate('Filters')}
      name="filter"
      size={32}
    />
  ),
});

const mapDispatchToProps = {
  fetchDrinks,
};

const mapStateToProps = ({drinks, filters}) => ({
  drinks,
  filters,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DrinksScreen);
