interface Category {
  id: number;
  name: string;
}
interface Page {
  id: number;
  text: string;
  pageNumber: number;
}

interface Book {
  id: number;
  author: string;
  releaseDate: string;
  title: string;
  description: string;
  cover: string;
  categories: Category[];
  pages: Page[];
}

export type {Book};