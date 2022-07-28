import * as SavedAPIUtil from "../util/save_util";

export const RECEIVE_SAVE = "RECEIVE_SAVE";
export const REMOVE_SAVE = "REMOVE_SAVE";
export const RECEIVE_SAVEALL = "RECEIVE_SAVEALL";

const receiveSavedAll = (savedAll) => {
    return {
        type: RECEIVE_SAVEALL,
        savedAll
    }
} 

const receiveSaved = (saved) => {
   return {
    type: RECEIVE_SAVE,
    saved 
}} 

const removedSaved = (savedId) => {
    return {
        type: REMOVE_SAVE,
        savedId
    }
}

export const fetchSaved = () => dispatch => (
    SavedAPIUtil.fetchSaved().then((saved) => dispatch(receiveSavedAll(saved)))
)

export const createSaved = (saved) => dispatch => (
    SavedAPIUtil.createSaved(saved).then((saved) => dispatch(receiveSaved(saved)))
)
export const deleteSaved = (savedId) => dispatch => (
    SavedAPIUtil.deleteSaved(savedId).then(() => dispatch(removedSaved(savedId)))
)

