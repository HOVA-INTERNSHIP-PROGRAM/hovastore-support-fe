import HSInput from "../UI/HSInput";
import TableBody from "./TableBody";
const TableHeader = ({ tableHeading, action }) => {
  const data = [
    {
      article: "How To Witdraw your friends",
      category: "friend",
      views: 300,
      likes: 50000,
    },
    {
      article: "How To Withdraw",
      category: "Testing",
      views: 300,
      likes: 50000,
    }
  ];
  return (
    <div class="relative overflow-x-auto">
      <table class="w-screen md:w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th>
              <HSInput
                type="input"
                text="checkbox"
                style={`!w-fit !px-0 -mt-2 border`}
              />
            </th>
            {tableHeading.map((heading, index) => (
              <th key={index} scope="col" class="py-3 text-primary">
                {heading?.name}
              </th>
            ))}
            {action && (
              <th
                scope="col"
                class="px-6 py-3 text-primary flex items-center gap-2 col-span-2 "
              >
                Action
              </th>
            ) }
          </tr>
        </thead>
        <TableBody bodyData={data} />
      </table>
    </div>
  );
};

export default TableHeader;
