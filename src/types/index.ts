type ID = number

interface Note {
  id: ID
  memo: string
}

interface ModalParams {
  title: string
  id?: ID
}

export type { ID, Note, ModalParams }
