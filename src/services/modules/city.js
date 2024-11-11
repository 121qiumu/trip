import Request from "@/services/request/index"

export function GetCityAll() {
  return Request.get({
    url: "/city/all"
  })
}