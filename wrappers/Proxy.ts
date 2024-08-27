import { Address, beginCell, Cell } from "@ton/core";

export type ProxyConfig = {
  owner: Address;
};

export function proxyConfigToCell(config: ProxyConfig): Cell {
  return beginCell().storeAddress(config.owner).endCell();
}