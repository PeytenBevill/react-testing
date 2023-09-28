const drinkAll = (functionIsCalled, flavor) => {
  if (flavor !== "cherry") {
    functionIsCalled(flavor);
  }
};

//flavor of flavors checks each individual flavor
const drinkEach = (functionIsCalled, flavors) => {
  for (const flavor of flavors) {
    functionIsCalled(flavor);
  }
};

class LaCroix {
  constructor(flavor) {
    this.flavor = flavor;
  }
}

const addToWebsite = (beverage) => {
  console.log(`added ${beverage.flavor} to the website`);
};

const canClick = (clicked, beverage) => {
  if (beverage === LaCroix) {
    clicked(beverage);
  }
};

export { drinkAll, drinkEach, LaCroix, addToWebsite, canClick };
