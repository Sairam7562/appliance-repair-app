import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  applianceId: string;
  thumbnail: string;
}

interface VideosState {
  videos: Video[];
  selectedVideo: Video | null;
  loading: boolean;
  error: string | null;
}

const initialState: VideosState = {
  videos: [],
  selectedVideo: null,
  loading: false,
  error: null,
};

export const videosSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    setVideos: (state, action: PayloadAction<Video[]>) => {
      state.videos = action.payload;
    },
    selectVideo: (state, action: PayloadAction<Video>) => {
      state.selectedVideo = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setVideos, selectVideo, setLoading, setError } = videosSlice.actions;