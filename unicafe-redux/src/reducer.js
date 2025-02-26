const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
        const changedGood = {...state, good: state.good+1}
        return changedGood
    case 'OK':
        const changedOK = {...state, ok: state.ok+1}
        return changedOK
    case 'BAD':
        const changedBad = {...state, bad: state.bad+1}
        return changedBad
    case 'ZERO':
        const changedZero = {...state, good: 0, ok: 0, bad:0}
        return changedZero
    default: return state
  }
  
}

export default counterReducer
