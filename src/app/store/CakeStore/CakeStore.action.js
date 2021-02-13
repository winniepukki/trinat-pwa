export const BUY_CAKE = 'BUY_CAKE';

export const buyCake = (number = 1) => ({
  type: BUY_CAKE,
  payload: number
});
