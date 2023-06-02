import { ref } from 'vue'

interface modalMethods {
  showModal: () => null
  close: () => null
}

const isShowModal = ref(false)
const modalRef = ref<null | modalMethods>(null)

const openModal = () => {
  modalRef.value?.showModal()
}

const closeModal = () => {
  modalRef.value?.close()
}

const useModal = () => {
  return { isShowModal, modalRef, openModal, closeModal }
}

export default useModal
