// error reminder
export const errorHandle = (result) => {
  if (result.unifiedErrorCode) {
    alert(result.errorMessage);
    return true;
  }
};
