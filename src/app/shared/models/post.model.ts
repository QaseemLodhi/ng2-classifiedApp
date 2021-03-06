// import { Profile } from './profile.model';

/*export class Article {
  slug: string;
  title: string = '';
  description: string = '';
  body: string = '';
  tagList: Array<string> = [];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
//   author: Profile;
}*/

export class Article {
  slug: string;
  user_id: string;
  title: string = '';
  description: string = '';
  body: string = '';
  createdAt: string;
  updatedAt: string;
  token: string;
}
