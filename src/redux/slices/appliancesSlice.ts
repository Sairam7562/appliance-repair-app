import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Appliance {
  id: string;
  name: string;
  category: string;
  image: string;
}

interface AppliancesState {
  appliances: Appliance[];
  selectedAppliance: Appliance | null;
  loading: boolean;
  error: string | null;
}

const initialState: AppliancesState = {
  appliances: [],
  selectedAppliance: null,
  loading: false,
  error: null,
};

export const appliancessSlice = createSlice({
  name: 'appliances',
  initialState,
  reducers: {
    setAppliances: (state, action: PayloadAction<Appliance[]>) => {
      state.appliances = action.payload;
    },
    selectAppliance: (state, action: PayloadAction<Appliance>) => {
      state.selectedAppliance = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setAppliances, selectAppliance, setLoading, setError } = appliancessSlice.actions;