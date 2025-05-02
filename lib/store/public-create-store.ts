import { create } from "zustand";
import { PublicCreateStore, QRType } from "../type";
import { steps, total_steps } from "../data";

const initial_state = {
  step: 0,
  type: null,
  content: null,
  custom_message: null,
};

export const usePublicCreate = create<PublicCreateStore>((set) => ({
  step: 0,
  type: null,
  content: null,
  custom_message: null,

  setStep: (step: number) => set({ step }),
  nextStep: () =>
    set((state) => ({
      step: total_steps > state.step ? state.step + 1 : state.step,
      title:
        steps[total_steps > state.step ? state.step + 1 : state.step].title,
    })),
  prevStep: () =>
    set((state) => ({
      step: state.step > 0 ? state.step - 1 : state.step,
      title: steps[state.step - 1].title,
    })),

  setType: (type: QRType) => set({ type }),
  setContent: (content: string) => set({ content }),
  setCustomMessage: (message: string) => set({ custom_message: message }),

  reset: () => set(initial_state),
}));
