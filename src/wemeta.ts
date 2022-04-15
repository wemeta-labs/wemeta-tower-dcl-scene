import { isPreviewMode } from "@decentraland/EnvironmentAPI"
import { getUserData } from "@decentraland/Identity"
import { getParcel } from '@decentraland/ParcelIdentity'

export const WeMeta = (SCENE_TOKEN: string) => {
  executeTask(async () => {
    const parcel = await getParcel()
    const previewMode = await isPreviewMode()

    if(!previewMode){
      const parcels = parcel.land.sceneJsonData.scene.parcels
      const spawnpoints = parcel.land.sceneJsonData.spawnPoints
      const baseParcel = parcel.land.sceneJsonData.scene.base
      const sceneJsonData = parcel.land.sceneJsonData

      const method = 'PUT'
      const BASE_URL = 'https://analytics-backend.wemeta.world/api/v1/decentraland_event'
      const headers = { "Content-Type": "application/json" }

      const sendAnalyticsEvent = (tag: string, data:any) => {
        executeTask(async () => {
          const player = await getUserData()
          const scene = { spawnpoints, parcels, baseParcel, sceneJsonData }
          const playerPosition = Camera.instance.worldPosition;
          const payload = { "scene_token": SCENE_TOKEN, data, tag, player, scene, playerPosition }
          const body = JSON.stringify(payload)
          fetch(BASE_URL, { method, headers, body });
        })
      }

      onPlayerConnectedObservable.add((player) => 
        sendAnalyticsEvent("player_connected", player)
      )

      onPlayerDisconnectedObservable.add((player) => {
        sendAnalyticsEvent("player_disconnected", player)
      })

      onEnterSceneObservable.add((player) => {
        sendAnalyticsEvent("player_entered_scene", player)
      })

      onLeaveSceneObservable.add((player) => {
        sendAnalyticsEvent("player_left_scene", player)
      })

      onIdleStateChangedObservable.add(({ isIdle }) => {
         if(isIdle) sendAnalyticsEvent("idle_state_true", isIdle)
         else sendAnalyticsEvent("idle_state_false", isIdle)
      })

      onPlayerExpressionObservable.add(({ expressionId }) => {
        sendAnalyticsEvent("player_expression", expressionId)
      })

      onRealmChangedObservable.add((realmChange) => {
        sendAnalyticsEvent("player_realm_change", realmChange)
      })

      getUserData().then((data) => {
        sendAnalyticsEvent("user_data", data)
      })
    }
  })
}