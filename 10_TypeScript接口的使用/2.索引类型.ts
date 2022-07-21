// 通过interfacel 来定义索引类型
interface IndexLanguage {
  // 键 : 值
  [index: number]: string;
}

const frontLanguage: IndexLanguage = {
  0: "HTML",
  1: "CSS",
  2: "JavaScript",
  3: "Vue",
  // 'css': 'css', // 报错
};

interface ILanguageYear {
  [name: string]: number;
}

const languageYear: ILanguageYear = {
  C: 1972,
  Java: 1995,
  JavaScript: 1996,
  TypeScript: 2014,
};
