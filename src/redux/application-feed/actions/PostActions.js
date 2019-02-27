
export const SEND_POST = 'SEND_POST';

export function sendPost(value) {
  return {
    type: SEND_POST,
    payload: {
      value,
    },
  };
}
