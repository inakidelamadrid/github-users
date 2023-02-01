import { Heading } from '../components/typography/headings';

interface TypographyProps {
  text: string;
}
const Typography = ({ text }: TypographyProps) => {
  return <section>
    <Heading text={text} level={1} />
    <Heading text={text} level={2} />
    <p className="text-normal">{text}</p>
  </section>
};

export default <Typography text="Hello world!" />;