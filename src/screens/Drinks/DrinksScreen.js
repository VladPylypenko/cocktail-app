import React, {useEffect} from 'react';
import {View, Text, Image, SectionList} from 'react-native';
import {connect} from 'react-redux';
import {fetchDrinks} from '../../modules/drinks/drinksOperations';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import s from './styles';

const DrinksScreen = props => {
  useEffect(() => {
    loadMore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.filters]);

  const loadMore = () => {
    const pageIndex = props.drinks.pageIndex;
    const filters = props.filters.items;
    const selectedFilters = filters
      .filter(({isSelected}) => isSelected)
      .map(({strCategory}) => strCategory);
    const currentFilter = selectedFilters[pageIndex];

    if (currentFilter) {
      props.fetchDrinks(currentFilter);
    }
  };

  const sections = (props.drinks.items || []).map(i => ({
    title: i.category,
    data: i.drinks,
  }));

  return (
    <View style={s.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View style={s.listItem}>
            <Image style={s.image} source={{uri: item.strDrinkThumb}} />
            <Text key={item.idDrink} style={s.greyFont}>
              {item.strDrink}
            </Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={[s.header, s.greyFont]}>{title}</Text>
        )}
        onEndReached={() => loadMore()}
      />
    </View>
  );
};

DrinksScreen.navigationOptions = ({navigation}) => ({
  headerRight: () => (
    <Icon
      style={s.icon}
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
