import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    step: 0,
    activeComponent: 'DefaultComponent',
    intermediateComponents: ['Intermediate1', 'Intermediate2', 'Intermediate3'] // Масив проміжних компонентів
};

const stepSlice = createSlice({
    name: 'step',
    initialState,
    reducers: {
        nextStep: (state) => {
            state.step += 1;
        },
        prevStep: (state) => {
            state.step -= 1;
        },
        setStep: (state, action) => {
            state.step = action.payload;
        },
        setActiveComponent: (state, action) => {
            const { component, isIntermediate } = action.payload;
            if (isIntermediate) {
                state.activeComponent = state.intermediateComponents[component] || 'DefaultComponent';
            } else {
                state.activeComponent = component;
            }
        }
    }
});

export const { nextStep, prevStep, setStep, setActiveComponent } = stepSlice.actions;
export default stepSlice.reducer;