export abstract class UsernameGenerationServiceAbstraction {
  generateUsername: (options: any) => Promise<string>;
  generateWord: (options: any) => Promise<string>;
  generateSubaddress: (options: any) => Promise<string>;
  generateCatchall: (options: any) => Promise<string>;
  generateForwarded: (options: any) => Promise<string>;
  getOptions: () => Promise<any>;
  saveOptions: (options: any) => Promise<void>;
}
