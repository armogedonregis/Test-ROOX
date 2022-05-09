import React from "react";
import { Layout } from "../../container/layout";
import List from "../../components/list";
import "./home.scss";


function Home({loading, users}): JSX.Element {
  return (
    <Layout>
          <List loading={loading} users={users} />
      </Layout>
  );
};

export default Home;