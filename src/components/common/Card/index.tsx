import * as S from "./style";

type CardProps = {
  children: JSX.Element;
};

const Card = ({ children }: CardProps) => {
  return <S.Card>{children}</S.Card>;
};

export default Card;
