import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Profile } from "../types/profile";

interface ProfileState {
  profile: Profile[];
  loading: boolean;
  error: string | null;
}


// Fetch API menggunakan Redux Thunk
export const fetchProjects = createAsyncThunk<Profile[], void, { state: RootState }>(
    "projects/fetchProjects",
    async (_, { rejectWithValue }) => {
      try {
        const response = await fetch("http://localhost:8080/projects");
        if (!response.ok) {
          throw new Error("Gagal mengambil data proyek");
        }
        return await response.json();
      } catch (error: any) {
        return rejectWithValue(error.message);
      }
    }
  );


const initialState: ProfileState = {
  profile: [],
  loading: false,
  error: null,
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchProjects.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchProjects.fulfilled, (state, action: PayloadAction<Profile[]>) => {
            state.loading = false;
            state.profile = action.payload;
          })
          .addCase(fetchProjects.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
          });
      },
 });

// export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;


