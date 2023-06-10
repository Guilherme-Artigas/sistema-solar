export interface PropTitle {
  headline: string;
};

export default function Title(props: PropTitle) {
  const { headline } = props;

  return <h2>{headline}</h2>;
};
