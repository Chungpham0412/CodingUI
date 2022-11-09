import create from 'zustand';

export const globalStore = create((set) => ({
    // state
    filterId: 0,
    isShowCode: false,
    htmlCodeView: '',
    cssCodeView: '',
    userInfo: {},
    // actions
    setFilterId: (filterId) => set({ filterId }),
    setIsShowCode: () => set((state) => ({ isShowCode: !state.isShowCode })),
    setHtmlCodeView: (htmlCodeView) => set({ htmlCodeView }),
    setCssCodeView: (cssCodeView) => set({ cssCodeView }),
    setUserInfo: (userInfo) => set({ userInfo }),
}));
