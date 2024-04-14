import HSInput from "../UI/HSInput";
const TableBody = ({ bodyData }) => {
  return (
    <tbody className=" cursor-pointer ">
      {bodyData.map((data, index) => (
        <tr key={index} class="bg-white border-b  text-gray-900">
          <td>
            <HSInput
              type="input"
              text="checkbox"
              style={`!w-fit !px-0 -mt-2 border`}
            />
          </td>
          <th class="py-4 font-medium text-gray-900 whitespace-nowrap">
            {data?.article}
          </th>
          <td class="py-4">{data?.category}</td>
          <td class="py-4">{data?.views}</td>
          <td class="py-4">{data?.likes}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
