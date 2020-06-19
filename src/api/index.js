const path = 'https://www.thecocktaildb.com/api/json/v1/1';

const urls = {
  filters: `${path}/filter.php?c=`,
  list: `${path}/list.php?c=list`,
};

export const Drinks = {
  async getCurrentDrinks(str) {
    return await fetch(`${urls.filters}${encodeURIComponent(str)}`);
  },
};

export const ListFilters = {
  async getList() {
    return await fetch(`${urls.list}`);
  },
};
