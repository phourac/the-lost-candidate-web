declare namespace IInterview {
  interface IInterviewList {
    status: number;
    message: string;
    data: IInterviewData[];
    meta: Meta;
  }

  interface IInterviewData {
    _id: string;
    question: string;
    answer: string[];
    createdAt: string;
    updatedAt: string;
    __v: number;
  }

  interface Meta {
    currentPage: number;
    totalPages: number;
    totalDocuments: number;
    limit:number
  }

    interface IDetail{
    data:IProblemData
  }

  //create interview
  interface ICreateInterview{
  question: string;
  answer: string[];
  }
}
