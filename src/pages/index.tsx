import { Htag, Button, Paragraf, Tag, Rating, Input, Textarea } from "@/components";
import { withLayout } from "@/layout/Layout";
import axios from "axios";
import { GetStaticProps } from "next";
import { useState } from "react";
import { API } from "../../helpers/api";
import { MenuItem } from "../../interfaces/menu.interface";

function Home({menu}: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  console.log(menu);

  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary" arrow="right">
        Button
      </Button>
      <Button appearance="ghost" arrow="down">
        Button
      </Button>
      <Paragraf size="s">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic
        ipsum dolores nesciunt dicta officiis ex iste ipsam non? Quos iste ullam
        voluptatibus praesentium cum aspernatur quidem ipsam, velit ipsa!
      </Paragraf>
      <Tag color="ghost">Tag</Tag>
      <Tag color="red" size="m">
        Tag
      </Tag>
      <Tag color="primary">Tag</Tag>
      <Tag color="green" size="m">
        Tag
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <Input placeholder="test" />
      <Textarea placeholder="test" />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory
  });

  return {
    props: {
      menu,
      firstCategory,
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}