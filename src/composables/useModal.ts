import { ref } from 'vue'
import type { ModalMethods } from '@/types'

const isShowModal = ref(false)
const modalRef = ref<null | ModalMethods>(null)

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
