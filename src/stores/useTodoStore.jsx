import { create } from "zustand";

export const useTodoStore = create(() => ({
  todos: {
    heading: "Todo",
  },
}));
