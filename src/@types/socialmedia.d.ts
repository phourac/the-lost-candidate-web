declare namespace ISocialMedia {
  interface ISocialMediaList {
    status: number;
    message: string;
    data: ISocialMediaData[];
    meta: Meta;
  }

  interface ISocialMediaData {
    _id: string;
    name: string;
    link: string;
    type: string;
    focus: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }

  interface Meta {
    currentPage: number;
    totalPages: number;
    totalDocuments: number;
  }
}
