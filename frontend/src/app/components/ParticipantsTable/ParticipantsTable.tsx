import { DataType } from "./types";
import YesImg from "../../assets/images/yes.png";
import NoImg from "../../assets/images/no.png";
import PendingImg from "../../assets/images/pending.png";

function ParticipantsTable({ data }: { data: DataType[] }) {
  const headerStyle =
    "text-white1 font-bold font-poppins text-sm px-3 py-4 text-left min-w-28";
  const rowStyle =
    "text-white3 whitespace-nowrap font-poppins font-normal text-sm py-5 px-3";

  return (
    <div className=" bg-table p-4 rounded-xl">
      <div className="flow-root">
        <div className="-mx-2 -my-2 overflow-x-auto sm:-mx-2 lg:-mx-8">
          <div className="inline-block min-w-full max-h-[367px] align-middle sm:px-6 lg:px-8 scrollbar-hide">
            <div className="relative">
              <table className="min-w-full table-fixed divide-y divide-input">
                <thead>
                  <tr>
                    <th scope="col" className={`${headerStyle} min-w-40`}>
                      Nickname
                    </th>
                    <th scope="col" className={`${headerStyle} min-w-48`}>
                      Username
                    </th>
                    <th scope="col" className={headerStyle}>
                      Email
                    </th>
                    <th scope="col" className={`${headerStyle}  text-center`}>
                      Accepted
                    </th>
                    <th scope="col" className={`${headerStyle}  text-center`}>
                      Voted
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-input">
                  {data.map((item: DataType) => (
                    <tr key={item.id}>
                      <td className={rowStyle}>{item.nickName}</td>
                      <td className={rowStyle}>{item.userName}</td>
                      <td className={rowStyle}>{item.email}</td>
                      <td align="center">
                        <img
                          src={
                            item.accepted === "yes"
                              ? YesImg
                              : item.accepted === "no"
                              ? NoImg
                              : PendingImg
                          }
                        />
                      </td>
                      <td align="center">
                        <img
                          src={
                            item.voted === "yes"
                              ? YesImg
                              : item.voted === "no"
                              ? NoImg
                              : PendingImg
                          }
                          className=""
                        />
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

export default ParticipantsTable;
