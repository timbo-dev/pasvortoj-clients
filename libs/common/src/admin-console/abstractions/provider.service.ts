import { Provider } from "../../models/domain/provider";
import { ProviderData } from "../models/data/provider.data";

export abstract class ProviderService {
  get: (id: string) => Promise<Provider>;
  getAll: () => Promise<Provider[]>;
  save: (providers: { [id: string]: ProviderData }) => Promise<any>;
}
