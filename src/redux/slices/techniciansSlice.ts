import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Technician {
  id: string;
  name: string;
  specialty: string[];
  location: string;
  rating: number;
  reviews: number;
  image: string;
}

interface TechniciansState {
  technicians: Technician[];
  selectedTechnician: Technician | null;
  loading: boolean;
  error: string | null;
}

const initialState: TechniciansState = {
  technicians: [],
  selectedTechnician: null,
  loading: false,
  error: null,
};

export const techniciansSlice = createSlice({
  name: 'technicians',
  initialState,
  reducers: {
    setTechnicians: (state, action: PayloadAction<Technician[]>) => {
      state.technicians = action.payload;
    },
    selectTechnician: (state, action: PayloadAction<Technician>) => {
      state.selectedTechnician = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setTechnicians, selectTechnician, setLoading, setError } = techniciansSlice.actions;