import * as LaunchDarkly from '@launchdarkly/node-server-sdk'
let launchDarklyClient: LaunchDarkly.LDClient

async function initialize() {
  const sdkKey = process.env.LAUNCHDARKLY_SDK_KEY
  if (!sdkKey || sdkKey === 'dummy-sdk-key') {
    console.warn('Using mock LaunchDarkly client')
    // @ts-ignore - Mocking the client for development
    launchDarklyClient = {
      waitForInitialization: async () => {},
      variation: async (key: string, context: any, defaultValue: any) => defaultValue,
      allFlagsState: async () => ({
        allValues: () => ({}),
      }),
    } as unknown as LaunchDarkly.LDClient
    return
  }

  launchDarklyClient = LaunchDarkly.init(sdkKey)
  return launchDarklyClient.waitForInitialization()
}

export async function getClient(): Promise<LaunchDarkly.LDClient> {
  if (launchDarklyClient) {
    await launchDarklyClient.waitForInitialization()
    return launchDarklyClient
  }
  await initialize()
  return launchDarklyClient
}
