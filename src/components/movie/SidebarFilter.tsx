import { useEffect, useState } from "react";
import Auth from "../Authentication/Auth";
import { getCategoryApi } from "../../service/categoryService";
import { categoryType } from "../../Type";
import { stat } from "fs";

interface propType {
  category: number[];
}
export const FilterSidebar = (props: {
  key: number;
  setFilter: React.Dispatch<
    React.SetStateAction<{
      query: string | null;
      category: number[];
      sort: number;
      page: number;
    }>
  >;
}) => {
  const [filter, setFilter] = useState<propType>({
    category: [],
  });
  const [data, setData] = useState([]);
  const [showShort, setShowShort] = useState(false);
  useEffect(() => {
    props.setFilter((state) => ({ ...state, category: filter.category }));
  }, [filter]);
  useEffect(() => {
    const call = async () => {
      const res = await getCategoryApi();
      // console.log(res);
      setData(res.data);
    };
    call();
  }, []);
  useEffect(() => {
    console.log(filter);
  }, [filter]);
  return (
    <>
      <div
        className="text-white w-full flex flex-col pl-4 shadow-lg shadow-red-800  "
        key={props.key}
      >
        <div className="mb-4">
          {!showShort ? (
            <div
              onClick={() => {
                setShowShort((state) => !state);
              }}
              className=" w-full px-4 py-1 border-b border-cyan-300 text-cyan-400 my-4 flex justify-between cursor-pointer"
            >
              <div> sort by</div>
              <div> {">"}</div>
            </div>
          ) : (
            <div>
              <div
                onClick={() => {
                  setShowShort((state) => !state);
                }}
                className=" w-full px-4 py-1 border-b border-cyan-300 text-cyan-400 my-4 flex justify-between cursor-pointer"
              >
                <div> sort by</div>
                <div> {"v"}</div>
              </div>
              <div className="bg-black">
                <select
                  onChange={(e) => {
                    //    console.log(e.target.value);
                    props.setFilter((state) => ({
                      ...state,
                      sort: parseInt(e.target.value),
                    }));
                  }}
                  className="border border-cyan-300 w-full py-1 px-4 bg-[#1E293B] border border-cyan-300  px-4 rounded-lg"
                >
                  <option value={0}> Release Date Ascending </option>
                  <option value={1}> Rating Decending </option>
                </select>
              </div>
            </div>
          )}
        </div>

        {data &&
          data?.map((item: categoryType) => {
            return (
              <>
                <div className="flex gap-2 mb-2">
                  <label
                    className={
                      filter.category.includes(item.id)
                        ? "text-blue-300 border border-cyan-500 rounded-full px-2 py-1"
                        : "border border-white rounded-full rounded-full px-2 py-1"
                    }
                    htmlFor={item.title}
                  >
                    {item.title}
                  </label>
                  <input
                    className={`hidden`}
                    id={item.title}
                    type="checkbox"
                    value={item.id}
                    onChange={(e) => {
                      if (!filter.category.includes(parseInt(e.target.value)))
                        setFilter((state) => ({
                          ...state,
                          category: [
                            ...state.category,
                            parseInt(e.target.value),
                          ],
                        }));
                      else {
                        setFilter((state) => ({
                          ...state,
                          category: state.category.filter((au) => {
                            return au != parseInt(e.target.value);
                          }),
                        }));
                      }
                    }}
                  ></input>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};
