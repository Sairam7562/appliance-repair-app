import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define types for better type checking
interface Appliance {
  id: string;
  name: string;
  category: string;
  image: string;
}

// Appliances slice
const appliancesSlice = createSlice({
  name: 'appliances',
  initialState: {
    list: [] as Appliance[],
    selected: null as Appliance | null,
    loading: false,
    error: null as string | null,
  },
  reducers: {
    setAppliances: (state, action: PayloadAction<Appliance[]>) => {
      state.list = action.payload;
    },
    selectAppliance: (state, action: PayloadAction<Appliance>) => {
      state.selected = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

// Export actions
export const { setAppliances, selectAppliance, setLoading, setError } = appliancesSlice.actions;

// Configure the store
export const store = configureStore({
  reducer: {
    appliances: appliancesSlice.reducer,
  },
});

// Export types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;