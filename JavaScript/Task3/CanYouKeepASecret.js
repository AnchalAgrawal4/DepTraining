//http://www.codewars.com/kata/can-you-keep-a-secret

function createSecretHolder(secret) {
  return {
    getSecret: () => {
      return secret;
    },
    setSecret: (v) => {
      secret = v;
    }
  };
}
