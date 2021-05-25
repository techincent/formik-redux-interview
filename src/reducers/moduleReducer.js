const initialState = [
	{
		moduleName: "Configuration",
		activityName: "Item Category",
		isCreate: false,
		isView: false,
		isEdit: false,
		isDelete: false,
		isApprove: false,
  },
  {
    moduleName: "Configuration",
    activityName: "Item",
    isCreate: true,
    isView: false,
    isEdit: false,
    isDelete: false,
    isApprove: false,
  }
];

const moduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_MODULE':
        return state
    default:
        return state;
  }
};

export default moduleReducer;
