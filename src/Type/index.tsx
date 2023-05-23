export interface reviewType {
  id: number | null;
  text: string;
  rating: number | null;
  userName: string;
}

export interface registerType {
  name: string;
  email: string;
  userName: string;
  password: string;
}
export interface createReviewType {
  text: string;
  rating: number | null;
  userId: number | null;
  movieId: number | null;
}
export interface movieType {
  id: number | null;
  url: string;
  poster: string;
  background: string;
  score: number;
  title: string;
  description: string;
  categories: categoryType[];
}

export interface categoryType {
  id: number;
  title: string;
}

export interface actorType {
  id: number;
  name: string;
  description: string;
  image: string;
}
export interface userType {
  id: number | null;
  name: string;
  userName: string;
  email: string;
}
