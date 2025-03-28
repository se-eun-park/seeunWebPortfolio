import { create } from 'zustand'

type useNavClickStateStoreProps = {
  isNavClicked: boolean
  setIsNavClicked: (isNavClicked: boolean) => void
}

const useNavClickStateStore = create<useNavClickStateStoreProps>((set) => ({
  isNavClicked: false,
  setIsNavClicked: (isNavClicked) => set({ isNavClicked }),
}))

export const useIsNavClicked = () => useNavClickStateStore((state) => state.isNavClicked)
export const useSetIsNavClicked = () => useNavClickStateStore((state) => state.setIsNavClicked)
