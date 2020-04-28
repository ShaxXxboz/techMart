const updateFormData = (state, action) => {
  const emptyForm = {
    fullName: "",
    address: "",
    city: "",
    zip: "",
    nameOnCard: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  };
  if (state === undefined) {
    return emptyForm;
  }

  switch (action.type) {
    case "FORM_FIELD_CHANGED": {
      const { field, value } = action.payload;
      return {
        ...state.formData,
        [field]: value,
      };
    }
    case "FORM_CLEARED": {
      return emptyForm;
    }
    default:
      return state.formData;
  }
};

export default updateFormData;
