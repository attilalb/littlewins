export interface PostType {
  _id: string;
  creator: {
    _id: string;
    username: string;
    email: string;
    image: string;
  };
  story: string;
  tags: string[];
}

export interface PromptCardProps {
  post: PostType;
  handleEdit?: () => void;
  handleDelete?: () => void;
  handleTagClick?: (tags: string[]) => void;
}

export interface ProfileProps {
  name: string;
  desc: string;
  data: PostType[]; // Replace with the correct type
  handleEdit: (post: PostType) => void; // Replace with the correct type
  handleDelete: (post: PostType) => void; // Replace with the correct type
}

export interface FormProps {
  type: string;
  post: PostType;
  setPost: React.Dispatch<React.SetStateAction<PostType>>;
  submitting: boolean;
  handleSubmit: (event: React.FormEvent) => void;
}
