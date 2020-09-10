// Parse array to object

export const parseArray = (result: any) => {
  const rv: any = {};
  for (let i = 0; i < result.length; ++i)
  rv[i] = result[i];
  return rv[0];
}