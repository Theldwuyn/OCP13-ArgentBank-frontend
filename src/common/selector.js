export function isUserAuthentified(state) {
  return state.user.isAuthentified;
}

export function selectFirstName(state) {
  return state.user.firstName;
}

export function selectBankFeatures(state) {
  return state.bank.features;
}
