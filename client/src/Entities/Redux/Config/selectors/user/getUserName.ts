import { StateShema } from '../../UI/StateSchema';

export const getUserName = (state: StateShema) => state.user?.userData?.name;