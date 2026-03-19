type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type LoaderParams = {
  params: {
    id?: string;
  };
};

type LoaderSuccess = {
  data: Todo;
};

type LoaderError = {
  error: string;
};

const todoDetailsLoader = async (
  { params }: LoaderParams
): Promise<LoaderSuccess | LoaderError> => {
  try {
    // ✅ Validate param
    if (!params.id) {
      throw new Error("Todo ID is required");
    }

    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${params.id}`
    );

    // ✅ Handle HTTP errors
    if (!res.ok) {
      throw new Error(`Failed to fetch todo (status: ${res.status})`);
    }

    const data: Todo = await res.json();

    return { data };
  } catch (error: unknown) {
    return {
      error:
        error instanceof Error
          ? error.message
          : "Something went wrong"
    };
  }
};

export default todoDetailsLoader;