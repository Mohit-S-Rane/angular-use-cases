
import { Resume } from './../models/resume';
import { Action } from './../actions/index';
import { RESUME_DELETE_SKILL, RESUME_ERROR, RESUME_LIST_REQUEST, RESUME_UPDATE, RESUME_UPDATE_SKILL } from '../actions/resume-actions';
import { RESUME_LIST_SUCCESS, RESUME_DELETE, RESUME_ADD_CONTACT_DETAIL, RESUME_UPDATE_CONTACT_DETAIL, RESUME_ADD_SKILL } from './../actions/resume-actions';
import { StoreUtility } from './../utility/store-utility';
import { Contact } from 'src/app/models/resume';
import { createSelector } from '@ngrx/store';
import { LOGOUT_ACTION } from '../actions/user-actions';



export interface ResumeReducerState {
    loading: boolean;
    error: boolean;
    loaded: boolean;
    entities: {[_id: string]: Resume},
    ids: string[]
}

const initialState: ResumeReducerState = {
    loaded: false,
    loading: false,
    error: false,
    entities: {},
    ids: []
}

export function ResumeReducer(state = initialState, action: Action): ResumeReducerState {
    switch(action.type){

        case RESUME_LIST_REQUEST: {
            return {...state, loading: true}
        }
        case RESUME_LIST_SUCCESS: {
            const resume = action.payload;
            const obj = StoreUtility.normalize(resume);
            const newEntities = {...state.entities, ...obj};
            const ids = resume.map((res) => res._id);
            const newIds = StoreUtility.filterDuplicateIds([...state.ids, ...ids]);
            return {...state, loading: false, loaded: true, error: false, entities: newEntities, ids: newIds};
          }
        case RESUME_ERROR: {
            return {...initialState}
        }
        case RESUME_UPDATE: {
            const resume = action.payload;
            const obj = {[resume._id]: resume};
            const newEntities = {...state.entities, ...obj};
            return {...state, entities: newEntities}
        }
        case RESUME_DELETE: {
            const id = action.payload;
            const newIds = state.ids.filter((elem) => elem !== id);
            const newEntities = StoreUtility.removeKey(state.entities, id)
            return {...state, ids: newIds, entities: newEntities}
        }
        case RESUME_ADD_CONTACT_DETAIL: 
        case RESUME_UPDATE_CONTACT_DETAIL: {
            const contactDetail = action.payload.contact;
            const resumeId = action.payload.resume_id;
            const oldResume = JSON.parse(JSON.stringify(state.entities['resumeId']));
            oldResume.contact_details = contactDetail;
            const obj = {[resumeId]: oldResume};
            const newEntities = {...state.entities, ...obj};
            return {...state, entities: newEntities}
        }

        case RESUME_ADD_SKILL: {
            const skill = action.payload.skill;
            const resumeId = action.payload.resume_id;
            const oldResume = JSON.parse(JSON.stringify(state.entities['resumeId']));
            oldResume.skills.push(skill);
            const obj = {[resumeId]: oldResume};
            const newEntities = {...state.entities, ...obj};
            return {...state, ...{entities: newEntities}}
        }
        case RESUME_DELETE_SKILL: {
            const skill = action.payload.skill;
            const resumeId = action.payload.resume_id;
            const oldResume = JSON.parse(JSON.stringify(state.entities['resumeId']));
            oldResume.skills = oldResume.skills.filter((data) => data._id !== skill._id);
            const obj = {[resumeId]: oldResume};
            const newEntities = {...state.entities, ...obj};
            return {...state, ...{entities: newEntities}}
        }
        case LOGOUT_ACTION: {
            return {...initialState};
        }
        case RESUME_UPDATE_SKILL: {
            const skill = action.payload.skill;
            const resumeId = action.payload.resume_id;
            const oldResume = JSON.parse(JSON.stringify(state.entities['resumeId']));
            oldResume.skills = oldResume.skills.filter((data) => data._id !== skill._id);
            oldResume.skills.push(skill);
            const obj = {[resumeId]: oldResume};
            const newEntities = {...state.entities, ...obj};
            return {...state, ...{entities: newEntities}}
        }
        

        default: {
            return state;
        }
    }
}

export const getLoading = (state: ResumeReducerState) => state.loading;
export const getLoaded = (state: ResumeReducerState) => state.loaded;
export const getEntities = (state: ResumeReducerState) => state.entities;
export const getIds = (state: ResumeReducerState) => state.ids;
export const getError = (state: ResumeReducerState) => state.error;
export const getResumeList = createSelector(getEntities, (entities) => {
  return StoreUtility.unNormalized(entities);
});