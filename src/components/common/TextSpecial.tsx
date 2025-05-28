type TextSpecialProps = {
  text: string;
};

const TextSpecial = ({ text }: TextSpecialProps) => {
  if (!text) return null;

  const mainText = text.slice(0, -1);
  const lastChar = text.slice(-1);

  return (
    <div style={{position: "relative"}}>
      {mainText}
      <span
        style={{
          fontSize: '0.8em',
          textDecoration: 'underline',
          display: 'inline-block',
          position: 'absolute',
          top: '-0.4em'
        }}
      >
        {lastChar}
      </span>
    </div>
  );
};

export default TextSpecial;
