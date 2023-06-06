import { create } from 'zustand'

const useStore = create((set) => ({
    loading: false,
    setLoading: () => set({loading: true}),
    setLoaded: () => set({loading: false})

}))

export default useStore