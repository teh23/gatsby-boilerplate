import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type MenuList = string[]

const initialState: {
  menuList: MenuList
} = {
  menuList: ['Main page', 'Products', 'Contact'],
}

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    hideProducts: (state, action: PayloadAction<boolean>) => {
      const { payload } = action
      if (payload === true) {
        state.menuList = state.menuList.filter((item) => item !== 'Products')
      } else {
        state.menuList = initialState.menuList
      }
    },
  },
})

// Reducers
export default headerSlice.reducer

// Actions
const { hideProducts } = headerSlice.actions
