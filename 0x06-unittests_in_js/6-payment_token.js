function getPaymentTokenFromAPI(success) {
  if (success) {
    return new Promise((resolve) => {
      resolve({ data: 'Successful response from the API' });
    });
  }

  return null;
}

module.exports = getPaymentTokenFromAPI;
