import http from "../utils/http";
export const Citydata = (ut='',platform=2,companyId=30,platformId=3,areaLevel=1,times=1566821567561)=>http.get("/api/location/areaGroupList",{ut,platform,companyId,platformId,areaLevel,times})
