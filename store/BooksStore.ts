import { defineStore } from "pinia";
import type { Book } from "@/models";

export const useBookStore = defineStore("BookStore",{
  state: () => ({
    books: [] as Book[],
    book: null as Book | null,
  }),

  actions: {
    async indexBooks() {
      try {
        const data = await $fetch<Book[]>("http://localhost:3333/books",{
          method: "GET",
        })
        this.books = data;
      } catch (error) {
        console.error('Erro ao buscar livros:',error);
      }
    },

    async showBook(id:Number) {
      try {
        const data = await $fetch<Book>(`http://localhost:3333/books/${id}`,{
          method: "GET",
        })
        this.book = data
      } catch (error) {
        console.error('Erro ao buscar livro:', error)
      }
    }
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBookStore, import.meta.hot));
}