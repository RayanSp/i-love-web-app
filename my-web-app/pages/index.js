import Layout from "../components/Layout/Layout";
import WebSession from "../components/WebSession/WebSession";
import Form from "../components/Form/Form";


export default function Home() {
  return (
    <>
      <Layout>
        <WebSession></WebSession>
        <Form></Form>
      </Layout>
    </>
  );
}