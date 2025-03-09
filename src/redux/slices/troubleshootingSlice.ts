import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TroubleshootingGuide {
  id: string;
  applianceId: string;
  title: string;
  description: string;
  steps: string[];
}

interface TroubleshootingState {
  guides: TroubleshootingGuide[];
  selectedGuide: TroubleshootingGuide | null;
  loading: boolean;
  error: string | null;
}

const initialState: TroubleshootingState = {
  guides: [],
  selectedGuide: null,
  loading: false,
  error: null,
};

export const troubleshootingSlice = createSlice({
  name: 'troubleshooting',
  initialState,
  reducers: {
    setGuides: (state, action: PayloadAction<TroubleshootingGuide[]>) => {
      state.guides = action.payload;
    },
    selectGuide: (state, action: PayloadAction<TroubleshootingGuide>) => {
      state.selectedGuide = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setGuides, selectGuide, setLoading, setError } = troubleshootingSlice.actions;