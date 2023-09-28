// import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  drinkAll,
  drinkEach,
  LaCroix,
  addToWebsite,
  canClick,
} from "./myFunctions";

//.toBe
test("tests if 1 + 2 is 3", () => {
  const sum = 1 + 2;
  expect(sum).toBe(3);
});

//.toHaveBeenCalled
test("does not fire if drink is cherry-flavored", () => {
  const drink = jest.fn();
  drinkAll(drink, "cherry");
  expect(drink).not.toHaveBeenCalled();
});

//.toHaveBeenCalledTimes(number) meaning it tests if the function checks the whole array
test("for each flavor, the function is fired", () => {
  const drink = jest.fn();
  drinkEach(drink, ["lemon", "strawberry"]);
  expect(drink).toHaveBeenCalledTimes(2);
});

//.toHaveBeenCalledWith(arg1, arg2, ...)
test("adds the new beverage to the website and checks that it can be clicked", () => {
  let beverage = new LaCroix("orange");
  addToWebsite(beverage);
  const func = jest.fn();
  canClick(func);
  expect(func).toHaveBeenCalledWith(beverage);
});
//the above function won't pass for some reason

//.toHaveReturned()
test("the drink is returned", () => {
  const drink = jest.fn(() => true);

  drink();

  expect(drink).toHaveReturned();
});

//.toHaveReturnedTimes(number)
test("the drink is returned twice", () => {
  const drink = jest.fn(() => true);

  drink();
  drink();

  expect(drink).toHaveReturnedTimes(2);
});

//.toHaveReturnedWith(value)
test("drink returns as LaCroix", () => {
  const beverage = { name: "LaCroix" };
  const drink = jest.fn((beverage) => beverage.name);

  drink(beverage);

  expect(drink).toHaveReturnedWith("LaCroix");
});

//.toHaveLength(number)
test("length matches what is expected", () => {
  expect([1, 2, 3]).toHaveLength(3)
  expect('').not.toHaveLength(7)
})

//.toHaveProperty(keyPath, value?)
test("the object has the expected properties", () => {
  const apartment = {bedrooms: 2, kitchen: "open"}
  expect(apartment).toHaveProperty('bedrooms', 2)
  expect(apartment).toHaveProperty('kitchen', "open")
})