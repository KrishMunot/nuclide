/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * @flow
 * @format
 */

import type {NuclideUri} from 'nuclide-commons/nuclideUri';

export type AppState = {
  customAdbPaths: Map<NuclideUri, ?string>,
  customSdbPaths: Map<NuclideUri, ?string>,
};

export type Store = {
  getState(): AppState,
  dispatch(action: Action): void,
};

export type SetCustomAdbPathAction = {
  type: 'SET_CUSTOM_ADB_PATH',
  payload: {
    host: NuclideUri,
    path: ?string,
  },
};

export type SetCustomSdbPathAction = {
  type: 'SET_CUSTOM_SDB_PATH',
  payload: {
    host: NuclideUri,
    path: ?string,
  },
};

export type Action = SetCustomSdbPathAction | SetCustomAdbPathAction;
