import { getCurrentUser } from "./user";


export function bootstrap() {
  return async dispatch => {
    const user = await dispatch(getCurrentUser);
    return true;
  }
}