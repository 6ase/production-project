import { StateShema } from 'Entities/Redux/Config/UI/StateSchema';

export const getIsModalActive = (state: StateShema) => state.modal.isActive;