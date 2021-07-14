export interface ITest {
  test: string;
}

export class TestService {
  public async test(): Promise<ITest> {
    return {
      test: "Test1"
    }
  }
}