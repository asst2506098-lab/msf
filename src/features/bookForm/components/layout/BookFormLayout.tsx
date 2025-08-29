import { ReactNode } from "react";

type RootProps = {
  children: ReactNode;
};

function Root({ children }: RootProps) {
  return <div>{children}</div>;
}

type HeaderProps = {
  current: number;
  total: number;
  title: string;
  description: string;
};

function Header({ current, total, title, description }: HeaderProps) {
  return (
    <header>
      <div>
        <span>
          {current} / {total}
        </span>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </header>
  );
}

type ContentProps = {
  children: React.ReactNode;
};

function Content({ children }: ContentProps) {
  return <section>{children}</section>;
}

type FooterProps = {
  isFirst: boolean;
  isLast: boolean;
  onFirst: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSubmit: () => void;
};

function Footer({
  isFirst,
  isLast,
  onFirst,
  onPrev,
  onNext,
  onSubmit,
}: FooterProps) {
  return (
    <footer>
      <button type="button" onClick={onFirst} disabled={isFirst}>
        처음으로
      </button>
      <button type="button" onClick={onPrev} disabled={isFirst}>
        이전
      </button>
      {!isLast && (
        <button type="button" onClick={onNext}>
          다음
        </button>
      )}
      {isLast && (
        <button type="button" onClick={onSubmit}>
          제출
        </button>
      )}
    </footer>
  );
}

export const BookFormLayout = Object.assign(Root, {
  Header,
  Content,
  Footer,
});
