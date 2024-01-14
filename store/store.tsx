// import { create } from "zustand";
// import { devtools, persist, createJSONStorage } from "zustand/middleware";

// // Data
// // import { MockedJsonData } from "@/data";

// // types.d.ts
// // import IMockedJsonData from "@/types/types";

// export type State = {
//   isShowBuckslistModal: Boolean;
//   database: IMockedJsonData[];
// };

// export type Action = {
//   createNewWish: (payload: IMockedJsonData) => void;
// };

// // Create your store, which includes both state and (optionally) actions
// export const useBucksListStore = create<State & Action>()(
//   devtools(
//     persist(
//       (set) => ({
//         // Bucks State
//         isShowBuckslistModal: false,
//         database: MockedJsonData,

//         // Bucks Actions
//         createNewWish: (payload: IMockedJsonData) =>
//           set((store) => ({ database: [...store.database, payload] })),
//       }),
//       {
//         name: "bucks-storage", // name of the item in the storage (must be unique)
//         storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
//       }
//     )
//   )
// );

// export default useBucksListStore;

export const store = "store";
