import { create } from "zustand";

interface SettingsStoreProps {
  userData: any;
  showAddAdminlayout: boolean;
  showEditUserLayout: boolean;
  // ----------------- Functions -----------------
  setAddAdminlayout: (stateValue: boolean) => void;
  setShowUserEditLayout: (stateValue: boolean) => void;
}

// TODO: when the user log in the application, the data will be added to the "userData" property

export const useSettingsStore = create<SettingsStoreProps>()((set) => {
  return {
    userData: "hi",
    showAddAdminlayout: false,
    showEditUserLayout: false,

    // ----------------- Functions -----------------
    setAddAdminlayout: (stateValue) => {
      set({ showAddAdminlayout: stateValue });
    },
    setShowUserEditLayout: (stateValue) => {
      set({ showEditUserLayout: stateValue });
    },
  };
});
