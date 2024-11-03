declare namespace IProblem {
  interface IProblemList {
    status: number;
    message: string;
    data: IProblemData[];
    meta: Meta;
  }

  interface IProblemData {
    _id: string;
    problem: string;
    solution: string[];
    example: string[];
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
