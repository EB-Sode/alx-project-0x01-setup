export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}


export interface HomeProps {
  posts: PostProps[];
}


export interface UserProps {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
}
export interface Address {
    street: string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name:        string;
    catchPhrase: string;
    bs:          string;
}

export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}


// 👇 The main data structure
export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// 👇 Props for a Modal component that displays a user's information
export interface UserModalProps {
  user: UserData;        // the user data being displayed in the modal
  isOpen: boolean;       // whether the modal is visible or not
  onClose: () => void;   // function to close the modal
}
