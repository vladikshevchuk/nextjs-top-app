import { Htag } from "@/components";
import { withLayout } from "@/layout/Layout";
import axios from "axios";
import { GetStaticProps } from "next";
import { API } from "../../helpers/api";
import { MenuItem } from "../../interfaces/menu.interface";

function Home(): JSX.Element {
  return (
    <div className="homePage">
      <Htag tag='h1'>Добро пожаловать в приложение "Top-App"</Htag>
    </div>
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