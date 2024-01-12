

interface Props { 
    text: string;
    headertext: string
}

const Paragraph: React.FC<Props> = (props: Props) => {
  return (
    <>
    <h1 style={{ fontFamily: 'Inter', fontSize: 29, fontWeight: '700', padding: "15px 19px 0px 15px"}}>{props.headertext}</h1>
    <p style={{ fontFamily: 'Inter', padding: "13px"}}>{props.text}</p>
    </>
  );
};

export default Paragraph;