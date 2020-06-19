const path = 'https://www.thecocktaildb.com/api/json/v1/1';

const urls = {
  filters: `${path}/filter.php?c=`,
  list: `${path}/list.php?c=list`,
};

export const Drinks = {
  async getCurrentDrinks(str) {
    console.log('currentCAT', str);
    return await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(
        str,
      )}`,
    );
  },
};

export const ListFilters = {
  async getList() {
    return await fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
    );
  },
};
