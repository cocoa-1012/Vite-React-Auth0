import { DataType } from "./types";
import YesImg from "../../assets/images/yes.png";
import NoImg from "../../assets/images/no.png";
import PendingImg from "../../assets/images/pending.png";

function GameNightsTable({ data }: { data: DataType[] }) {
  const headerStyle =
    "text-white1 whitespace-nowrap font-bold font-poppins text-sm px-2 py-4 text-left min-w-24";
  const rowStyle =
    "text-white3 whitespace-nowrap font-poppins font-normal text-sm py-5 px-2";

  return (
    <div className=" bg-table p-4 rounded-xl">
      <div className="flow-root">
        <div className="-mx-2 -my-2 overflow-x-auto sm:-mx-2 lg:-mx-8">
          <div className="inline-block min-w-full max-h-[367px] align-middle sm:px-6 lg:px-8 scrollbar-hide">
            <div className="relative">
              <table className="min-w-full table-fixed divide-y divide-input">
                <thead>
                  <tr>
                    <th scope="col" className={`${headerStyle}`}>
                      Game Night
                    </th>
                    <th scope="col" className={`${headerStyle}`}>
                      Date
                    </th>
                    <th scope="col" className={`${headerStyle} min-w-16`}>
                      Time
                    </th>
                    <th scope="col" className={headerStyle}>
                      Location
                    </th>
                    <th scope="col" className={`${headerStyle}  text-center`}>
                      #participants
                    </th>
                    <th scope="col" className={`${headerStyle}  text-center`}>
                      Voting
                    </th>
                    <th scope="col" className={`${headerStyle}`}>
                      Games
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-input">
                  {data.map((item: DataType) => (
                    <tr key={item.id}>
                      <td className={`${rowStyle} text-wrap`}>{item.gameNight}</td>
                      <td className={rowStyle}>{item.date}</td>
                      <td className={rowStyle}>{item.time}</td>
                      <td className={rowStyle}>{item.location}</td>
                      <td className={rowStyle}>{item.participants}</td>
                      <td align="center">
                        <img
                          src={
                            item.voting === "yes"
                              ? YesImg
                              : item.voting === "no"
                              ? NoImg
                              : PendingImg
                          }
                        />
                      </td>
                      <td align="center">
                        {item.games.map(
                          (item, i) =>
                            i < 3 && (
                              <div>
                                <p className={`${rowStyle} py-0 text-left`}>{item} {i === 2 ? "..." : ","}</p>
                              </div>
                            )
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameNightsTable;
