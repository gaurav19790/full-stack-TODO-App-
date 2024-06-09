import zod from "zod";

const Createtodo = zod.object({
  title: zod.string().min(1),
  description: zod.string().min(1),
});
const Updatetodo = zod.object({
  id: zod.string(),
});

export { Createtodo, Updatetodo };
