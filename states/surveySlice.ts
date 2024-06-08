import { SurveyType, SurveyState } from "@/@types/coupon";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: SurveyState = {
    surveys: null,
    encuesta_id: undefined,
    filters: {
        desde: '',
        hasta: '',
        per_page: 10,
        page: 1,
    }
};

const surveySlice = createSlice({
    name: "survey",
    initialState,
    reducers: {
        setSurvey: (state, action: PayloadAction<UserType>) => {
            state.surveys = action.payload;
        },
        clearSurvey: () => null,
        setSurveyId: (state, action: PayloadAction<number>) => {
            state.encuesta_id = action.payload;
        },
        setFilters: (state, action: PayloadAction<Partial<SurveyState["filters"]>>) => {
            state.filters = { ...state.filters, ...action.payload };
        }
    }
});

export const { setSurvey, clearSurvey, setSurveyId, setFilters } = surveySlice.actions;
export default surveySlice.reducer;