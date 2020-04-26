import { calculatorActions } from './calculator.types';

const today = moment();
const nextMonday = today.day() <= 1 ? today.day(1) : today.day(8);

export const initialCalculatorState = {
  holidays: [],
  participants: [],
  percentage: 70,
  startDay: nextMonday,
};

export const calculatorReducer = (state, action) => {
  switch (action.type) {
    case calculatorActions.ADD_HOLIDAY:
      return {
        ...state,
        holidays: [...state.holidays, action.dayIndex],
      };
    case calculatorActions.ADD_PARTICIPANT:
      return {
        ...state,
        participants: [...state.participants, { name: action.name, absent: [] }]
      };
    case calculatorActions.CHANGE_PERCENTAGE:
      return {
        ...state,
        percentage: action.percentage,
      };
    case calculatorActions.CHANGE_START_DAY:
      return {
        ...state,
        startDay: action.date,
      };
    case calculatorActions.REMOVE_HOLIDAY:
      return {
        ...state,
        holidays: state.holidays.filter(day => day !== action.dayIndex),
      };
    case calculatorActions.REMOVE_PARTICIPANT:
      return {
        ...state,
        participants: state.participants.filter(p => p.name !== action.name),
      };
    case calculatorActions.SET_ABSENT:
      return {
        ...state,
        participants: state.participants.map((participant) => {
          if (participant.name === action.name) {
            participant.absent = [...participant.absent, action.day];
          }
          return participant;
        }),
      };
    case calculatorActions.UNSET_ABSENT:
      return {
        ...state,
        participants: state.participants.map((participant) => {
          if (participant.name === action.name) {
            participant.absent = participant.absent.filter(d => d !== action.day);
          }
          return participant;
        }),
      };
    default:
      return state;
  }
};
