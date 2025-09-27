import { reactive } from 'vue'

interface PopupOptions {
  component: any
  id: string
  props?: Record<string, any>
  onClose?: () => void
}

interface PopupState {
  isOpen: boolean
  component: any | null
  props: Record<string, any>
  onClose?: () => void
}

const popups = reactive<Record<string, PopupState>>({})

export const popupService = {
  showPopup(options: PopupOptions) {
    popups[options.id] = {
      isOpen: true,
      component: options.component,
      props: options.props || {},
      onClose: options.onClose
    }
  },

  hidePopup(id: string) {
    if (popups[id]) {
      if (popups[id].onClose) {
        popups[id].onClose!()
      }
      delete popups[id]
    }
  },

  gePopup(id: string) {
    return popups[id]
  },

  isOpen(id: string) {
    return popups[id]?.isOpen || false
  }
}
