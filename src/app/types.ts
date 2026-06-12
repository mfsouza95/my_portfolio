export default interface ProjectProps {
    title: string;
    description: string;
    imageUrl?: string;
    link?: string;
}

export interface SkillsProps extends Omit<ProjectProps, 'description'> {
  description: string[];
  subdescription: string;
}

export interface aboutProps {
  description: string;
}

export interface HeaderProps {
  currentLang?: 'PT' | 'EN';
  onLangChange?: () => void;
}

export interface CartItem {
  quantity: number;
  fileUrl: string;
  title: string;
}

export interface CartState {
  items: { [productId: string]: CartItem };
  isOpen: boolean;
}

export type CartAction =
  | { type: 'ADD'; productId: string; fileUrl: string; title: string }
  | { type: 'INCREASE'; productId: string }
  | { type: 'DECREASE'; productId: string }
  | { type: 'CLEAR_ITEM'; productId: string }
  | { type: 'CLEAR_ALL' }
  | { type: 'TOGGLE_SIDEBAR' }
  | { type: 'CLOSE_SIDEBAR' };

  export interface ProductCardProps {
    productId: string;
    title: string;
    fileUrl: string;
    description?: string;
    imageUrl?: string;
  }

  export type Status = 'idle' | 'loading' | 'success' | 'error';
  
  export interface FormFields {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  }
  
  export interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    message?: string;
  }
  