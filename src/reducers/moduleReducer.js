const initialState = [
	{
    id: 1,
		moduleName: "Configuration",
		activityName: "Item Category",
		isCreate: false,
		isView: true,
		isEdit: true,
		isDelete: false,
		isApprove: false,
  },
  {
    id: 2,
    moduleName: "Configuration",
    activityName: "Item",
    isCreate: true,
    isView: true,
    isEdit: false,
    isDelete: true,
    isApprove: false,
  },
  {
    id: 3,
		moduleName: "Configuration",
		activityName: "Item Category",
		isCreate: false,
		isView: true,
		isEdit: false,
		isDelete: true,
		isApprove: false,
  },
  {
    id: 4,
    moduleName: "Configuration",
    activityName: "Item",
    isCreate: true,
    isView: false,
    isEdit: true,
    isDelete: true,
    isApprove: false,
  }
];

const moduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_MODULE':
      const newModule = action.payload;
      const newState = state.map(item => {
        if (item?.id === newModule?.id) {
          return newModule
        }
        return item
      })
      return newState
    default:
        return state;
  }
};

export default moduleReducer;
