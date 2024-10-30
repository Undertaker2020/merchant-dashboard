import { createSlice } from '@reduxjs/toolkit';
import { DATA_PROGRESS } from "@/data";


interface ProgressItem {
    title: string;
    active: boolean;
    successful: boolean;
    done: boolean;
}
const initialState: ProgressItem[] = [...DATA_PROGRESS];

const progressSlice = createSlice({
    name: 'progress',
    initialState,
    reducers: {
        markSuccessful: (state, action) => {
            const title = action.payload;
            const item = state.find(item => item.title === title);
            if (item) {
                item.successful = true;
            }
        },
        markDone: (state, action) => {
            const title = action.payload;
            const item = state.find(item => item.title === title);
            if (item) {
                item.done = true;
            }
        },
        markActive: (state, action) => {
            const title = action.payload;
            const item = state.find(item => item.title === title);
            if (item) {
                item.active = true;
            }
        }
    },
});

export const { markSuccessful, markDone, markActive } = progressSlice.actions;
export default progressSlice.reducer;