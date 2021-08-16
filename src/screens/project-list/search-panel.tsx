import React from "react";
import { User } from "./list";

interface Param {
  name: string;
  personId: string | number;
}

type props = {
  setParam: Function;
  param: Param;
  users: User[];
};

export const SearchPanel = ({ param, setParam, users }: props) => {
  return (
    <form>
      <div>
        <input
          type="text"
          value={param.name}
          onChange={(evt) => setParam({ ...param, name: evt.target.value })}
        />
        <select
          value={param.personId}
          onChange={(evt) =>
            setParam({
              ...param,
              personId: evt.target.value,
            })
          }
        >
          <option value={""}>负责人</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
