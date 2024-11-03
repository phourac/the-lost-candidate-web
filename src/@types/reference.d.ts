declare namespace IReference {
  interface IReferenceList {
    status: number;
    message: string;
    data: IReferenceData[];
    meta: Meta;
  }

  interface IReferenceData {
    _id: string;
    name: string;
    website: string;
    app_store: string;
    play_store: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    focus?: string;
  }

  interface Meta {
    currentPage: number;
    totalPages: number;
    totalDocuments: number;
  }
}
