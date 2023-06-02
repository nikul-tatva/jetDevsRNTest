import { navigationRef } from "./app-navigator";

export function resetRoot(screenName: string, params: any = {}) {
    if (navigationRef.isReady()) {
      navigationRef.reset({
        index: 0,
        routes: [{
          name: screenName,
          params: { ...params }
        }]
      })
    }
  }