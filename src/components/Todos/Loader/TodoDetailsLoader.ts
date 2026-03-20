import { getTodo } from "../todos.api";

type LoaderParams = {
  params: {
    id?: string;
  };
};


const todoDetailsLoader = async ({ params }: LoaderParams) => {
 if (!params.id) {
      throw new Error("Todo ID is required");
    }

    const data = await getTodo(params.id);

    return data;

};

export default todoDetailsLoader;