export const DataArr: DataI[] = [
  {
    name: "Mort Connor",
    avatar: "/avatar/pf1.png",
    email: "m.c.example@gmail.com",
  },
  {
    name: "Sumeet Kendal",
    avatar: "/avatar/pf2.png",
    email: "s.c.example@gmail.com",
  },
  {
    name: "Maruf Ignatov",
    avatar: "/avatar/pf3.png",
    email: "m.i.example@gmail.com",
  },
  {
    name: "Llŷr Sýkora",
    avatar: "/avatar/pf4.png",
    email: "l.s.example@gmail.com",
  },
  {
    name: "Shelah McInnes",
    avatar: "/avatar/pf5.png",
    email: "s.m.example@gmail.com",
  },
  {
    name: "Leon Di Caprio",
    avatar: "/avatar/pf6.png",
    email: "l.c.example@gmail.com",
  },
  {
    name: "Mort Connor",
    avatar: "/avatar/pf1.png",
    email: "m.c.example@gmail.com",
  },
  {
    name: "Sumeet Kendal",
    avatar: "/avatar/pf2.png",
    email: "s.c.example@gmail.com",
  },
  {
    name: "Maruf Ignatov",
    avatar: "/avatar/pf3.png",
    email: "m.i.example@gmail.com",
  },
  {
    name: "Llŷr Sýkora",
    avatar: "/avatar/pf4.png",
    email: "l.s.example@gmail.com",
  },
  {
    name: "Shelah McInnes",
    avatar: "/avatar/pf5.png",
    email: "s.m.example@gmail.com",
  },
  {
    name: "Leon Di Caprio",
    avatar: "/avatar/pf6.png",
    email: "l.c.example@gmail.com",
  },
];

export interface DataI {
  name: string;
  avatar: string;
  email: string;
}

export interface ChipI extends DataI {
  id: number;
}
