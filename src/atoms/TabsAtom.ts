import { atom, RecoilState } from 'recoil'

const TabsAtom: RecoilState<string> = atom({
  key: 'tabState', // any unique string
  default: 'home'

})

export default TabsAtom
