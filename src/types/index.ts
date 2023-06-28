type ID = number

interface Note {
  id: ID
  memo: string
}

interface ModalParams {
  title: string
  id?: ID
}

interface ModalMethods {
  showModal: () => null
  close: () => null
}

export type { ID, Note, ModalParams, ModalMethods }
