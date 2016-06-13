// Copyright 2015 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import petSetDetailModule from 'petsetdetail/petsetdetail_module';

describe('Pet Set Info controller', () => {
  /**
   * Pet Set Info controller.
   * @type {!PetSetInfoController}
   */
  let ctrl;

  beforeEach(() => {
    angular.mock.module(petSetDetailModule.name);

    angular.mock.inject(($componentController, $rootScope) => {
      ctrl = $componentController('kdPetSetInfo', {$scope: $rootScope}, {
        petSet: {
          podInfo: {
            running: 0,
            desired: 0,
            failed: 0,
            current: 0,
            pending: 0,
          },
        },
      });
    });
  });

  it('should return true when all desired pods are running', () => {
    // given
    ctrl.petSet = {
      podInfo: {
        running: 0,
        desired: 0,
      },
    };

    // then
    expect(ctrl.areDesiredPodsRunning()).toBeTruthy();
  });

  it('should return false when not all desired pods are running', () => {
    // given
    ctrl.petSet = {
      podInfo: {
        running: 0,
        desired: 1,
      },
    };

    // then
    expect(ctrl.areDesiredPodsRunning()).toBeFalsy();
  });
});
