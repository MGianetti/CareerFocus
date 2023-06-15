interface Option {
  label: string;
  src: string;
}

export interface MenuNavProps {
  options: Option[] | undefined;
}
