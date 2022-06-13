

export const XmlPROJECT = {
  name: 'PROJECT',
  order: 30,
  xmlStart: '<PROJECT>',
  xmlEnd: '</PROJECT>',
  features:
  [
  
    {
      name: 'PROJECT.PROJ_NAME',
      type: 'TEXT',
      order: 40,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<PROJ_NAME>',
      xmlEnd: '</PROJ_NAME>',
    },
  
    {
      name: 'PROJECT.PROJ_ID',
      type: 'TEXT',
      order: 45,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<PROJ_ID>',
      xmlEnd: '</PROJ_ID>',
    },
  
    {
      name: 'PROJECT.Office',
      type: 'QUICKPICK',
      order: 50,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Office>',
      xmlEnd: '</Office>',
    },
  
    {
      name: 'PROJECT.Memo',
      type: 'TEXT',
      order: 60,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Memo>',
      xmlEnd: '</Memo>',
    },
  
    {
      name: 'PROJECT.Location',
      type: 'TEXT',
      order: 70,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Location>',
      xmlEnd: '</Location>',
    },
  ]
}

export const XmlPOINT = {
  name: 'POINT',
  order: 90,
  xmlStart: '<TT_FLDCA_POINT>',
  xmlEnd: '</TT_FLDCA_POINT>',
  features:
  [
  
    {
      name: 'POINT.POINT_ID',
      type: 'TEXT',
      order: 100,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<POINT_ID>',
      xmlEnd: '</POINT_ID>',
    },
  
    {
      name: 'POINT.Status',
      type: 'QUICKPICK',
      order: 110,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Status>',
      xmlEnd: '</Status>',
    },
  
    {
      name: 'POINT.Type',
      type: 'QUICKPICK',
      order: 120,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Type>',
      xmlEnd: '</Type>',
    },
  
    {
      name: 'POINT.Location',
      type: 'TEXT',
      order: 135,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Location>',
      xmlEnd: '</Location>',
    },
  
    {
      name: 'POINT.LocationMethod',
      type: 'QUICKPICK',
      order: 140,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<LocationMethod>',
      xmlEnd: '</LocationMethod>',
    },
  
    {
      name: 'POINT.ElevationMethod',
      type: 'QUICKPICK',
      order: 150,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<ElevationMethod>',
      xmlEnd: '</ElevationMethod>',
    },
  
    {
      name: 'POINT.OriginalElevation',
      type: 'QUICKPICK',
      order: 160,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<OriginalElevation>',
      xmlEnd: '</OriginalElevation>',
    },
  
    {
      name: 'POINT.OriginalGrid',
      type: 'QUICKPICK',
      order: 170,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<OriginalGrid>',
      xmlEnd: '</OriginalGrid>',
    },
  
    {
      name: 'POINT.LatitudeLongitudeFormat',
      type: 'TEXT',
      order: 180,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<LatitudeLongitudeFormat>',
      xmlEnd: '</LatitudeLongitudeFormat>',
    },
  
    {
      name: 'POINT.Latitude',
      type: 'NUMBER',
      order: 190,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Latitude>',
      xmlEnd: '</Latitude>',
    },
  
    {
      name: 'POINT.Longitude',
      type: 'NUMBER',
      order: 200,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Longitude>',
      xmlEnd: '</Longitude>',
    },
  
    {
      name: 'POINT.NationalDatum',
      type: 'QUICKPICK',
      order: 210,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<NationalDatum>',
      xmlEnd: '</NationalDatum>',
    },
  
    {
      name: 'POINT.NationalElevation',
      type: 'NUMBER',
      order: 220,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<NationalElevation>',
      xmlEnd: '</NationalElevation>',
    },
  
    {
      name: 'POINT.Orientation',
      type: 'NUMBER',
      order: 240,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Orientation>',
      xmlEnd: '</Orientation>',
    },
  
    {
      name: 'POINT.Inclination',
      type: 'NUMBER',
      order: 250,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Inclination>',
      xmlEnd: '</Inclination>',
    },
  
    {
      name: 'POINT.StartDate',
      type: 'DATE',
      order: 260,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<StartDate>',
      xmlEnd: '</StartDate>',
    },
  
    {
      name: 'POINT.EndDate',
      type: 'DATE',
      order: 270,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<EndDate>',
      xmlEnd: '</EndDate>',
    },
  
    {
      name: 'POINT.BackfillDate',
      type: 'DATE',
      order: 280,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<BackfillDate>',
      xmlEnd: '</BackfillDate>',
    },
  
    {
      name: 'POINT.Organisation',
      type: 'TEXT',
      order: 290,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Organisation>',
      xmlEnd: '</Organisation>',
    },
  
    {
      name: 'POINT.Crew',
      type: 'TEXT',
      order: 300,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Crew>',
      xmlEnd: '</Crew>',
    },
  
    {
      name: 'POINT.Machine',
      type: 'TEXT',
      order: 310,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Machine>',
      xmlEnd: '</Machine>',
    },
  
    {
      name: 'POINT.Length',
      type: 'NUMBER',
      order: 320,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Length>',
      xmlEnd: '</Length>',
    },
  
    {
      name: 'POINT.Width',
      type: 'NUMBER',
      order: 330,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Width>',
      xmlEnd: '</Width>',
    },
  
    {
      name: 'POINT.LoggedBy',
      type: 'TEXT',
      order: 340,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<LoggedBy>',
      xmlEnd: '</LoggedBy>',
    },
  
    {
      name: 'POINT.LoggedDate',
      type: 'DATE',
      order: 350,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<LoggedDate>',
      xmlEnd: '</LoggedDate>',
    },
  
    {
      name: 'POINT.Termination',
      type: 'QUICKPICK',
      order: 360,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Termination>',
      xmlEnd: '</Termination>',
    },
  
    {
      name: 'POINT.Remarks',
      type: 'TEXT',
      order: 370,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Remarks>',
      xmlEnd: '</Remarks>',
    },
  
    {
      name: 'POINT.TT_FLDCA',
      type: 'BIT',
      order: 375,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<TT_FLDCA>',
      xmlEnd: '</TT_FLDCA>',
    },
  
    {
      name: 'POINT.TT_FLDCAVersion',
      type: 'BIT',
      order: 375,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<TT_FLDCAVersion>',
      xmlEnd: '</TT_FLDCAVersion>',
    },
  
    {
      name: 'POINT.TT_FLDCA_PointGuid',
      type: 'GUID',
      order: 376,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<TT_FLDCA_PointGUID>',
      xmlEnd: '</TT_FLDCA_PointGUID>',
    },
  
    {
      name: 'POINT.TT_FLDCA_MACAddr',
      type: 'MACADDR',
      order: 377,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<TT_FLDCA_MACAddr>',
      xmlEnd: '</TT_FLDCA_MACAddr>',
    },
  ]
}

export const XmlConstructionSPT = {
  name: 'ConstructionSPT',
  order: 390,
  xmlStart: '<TT_FLDCA_ConstructionSPT>',
  xmlEnd: '</TT_FLDCA_ConstructionSPT>',
  features:
  [
  
    {
      name: 'POINT.POINT_ID',
      type: 'TEXT',
      order: 400,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<POINT_ID>',
      xmlEnd: '</POINT_ID>',
      referValue: {
        workflow: 'POINT',
        feature: 'POINT.POINT_ID',
      }
    },
  
    {
      name: 'ConstructionSPT.TOP',
      type: 'NUMBER',
      order: 410,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<TOP>',
      xmlEnd: '</TOP>',
    },
  
    {
      name: 'ConstructionSPT.BASE',
      type: 'NUMBER',
      order: 420,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<BASE>',
      xmlEnd: '</BASE>',
    },
  
    {
      name: 'ConstructionSPT.TYPE',
      type: 'QUICKPICK',
      order: 440,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<TYPE>',
      xmlEnd: '</TYPE>',
    },
  
    {
      name: 'ConstructionSPT.DrillBit',
      type: 'QUICKPICK',
      order: 450,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<DrillBit>',
      xmlEnd: '</DrillBit>',
    },
  
    {
      name: 'ConstructionSPT.TypeDiameterOuter',
      type: 'NUMBER',
      order: 460,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<TypeDiameterOuter>',
      xmlEnd: '</TypeDiameterOuter>',
    },
  
    {
      name: 'ConstructionSPT.TCR',
      type: 'NUMBER',
      order: 470,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<TCR>',
      xmlEnd: '</TCR>',
    },
  
    {
      name: 'ConstructionSPT.SCR',
      type: 'NUMBER',
      order: 480,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<SCR>',
      xmlEnd: '</SCR>',
    },
  
    {
      name: 'ConstructionSPT.RQD',
      type: 'NUMBER',
      order: 490,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<RQD>',
      xmlEnd: '</RQD>',
    },
  
    {
      name: 'ConstructionSPT.RemarksSAMPLE',
      type: 'MULTIPICK',
      order: 495,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<SAMPLE_Remarks>',
      xmlEnd: '</SAMPLE_Remarks>',
    },
  
    {
      name: 'ConstructionSPT.Length',
      type: 'NUMBER',
      order: 500,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Length>',
      xmlEnd: '</Length>',
    },
  
    {
      name: 'ConstructionSPT.Width',
      type: 'NUMBER',
      order: 510,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Width>',
      xmlEnd: '</Width>',
    },
  
    {
      name: 'ConstructionSPT.Shoring',
      type: 'TEXT',
      order: 520,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Shoring>',
      xmlEnd: '</Shoring>',
    },
  
    {
      name: 'ConstructionSPT.Stability',
      type: 'TEXT',
      order: 530,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Stability>',
      xmlEnd: '</Stability>',
    },
  
    {
      name: 'ConstructionSPT.StartDate',
      type: 'DATETIME',
      order: 540,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<StartDate>',
      xmlEnd: '</StartDate>',
    },
  
    {
      name: 'ConstructionSPT.Organisation',
      type: 'TEXT',
      order: 550,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Organisation>',
      xmlEnd: '</Organisation>',
    },
  
    {
      name: 'ConstructionSPT.Crew',
      type: 'TEXT',
      order: 560,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Crew>',
      xmlEnd: '</Crew>',
    },
  
    {
      name: 'ConstructionSPT.Machine',
      type: 'TEXT',
      order: 570,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Machine>',
      xmlEnd: '</Machine>',
    },
  
    {
      name: 'ConstructionSPT.SupervisedBy',
      type: 'TEXT',
      order: 580,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<SupervisedBy>',
      xmlEnd: '</SupervisedBy>',
    },
  
    {
      name: 'ConstructionSPT.Pickup',
      type: 'NUMBER',
      order: 590,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Pickup>',
      xmlEnd: '</Pickup>',
    },
  
    {
      name: 'ConstructionSPT.Stickup',
      type: 'NUMBER',
      order: 600,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Stickup>',
      xmlEnd: '</Stickup>',
    },
  
    {
      name: 'ConstructionSPT.BaseMeasured',
      type: 'NUMBER',
      order: 610,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<BaseMeasured>',
      xmlEnd: '</BaseMeasured>',
    },
  
    {
      name: 'ConstructionSPT.LossIntervalStart',
      type: 'NUMBER',
      order: 620,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<LossIntervalStart>',
      xmlEnd: '</LossIntervalStart>',
    },
  
    {
      name: 'ConstructionSPT.LossIntervalEnd',
      type: 'NUMBER',
      order: 630,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<LossIntervalEnd>',
      xmlEnd: '</LossIntervalEnd>',
    },
  
    {
      name: 'ConstructionSPT.RawData',
      type: 'BIT',
      order: 640,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<RawData>',
      xmlEnd: '</RawData>',
    },
  
    {
      name: 'ConstructionSPT.RemarksSPT',
      type: 'TEXT',
      order: 650,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<SPT_Remarks>',
      xmlEnd: '</SPT_Remarks>',
    },
  
    {
      name: 'ConstructionSPT.RockTest',
      type: 'BIT',
      order: 730,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<SPT_RockTest>',
      xmlEnd: '</SPT_RockTest>',
    },
  
    {
      name: 'ConstructionSPT.FallIn',
      type: 'NUMBER',
      order: 740,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<SPT_FallIn>',
      xmlEnd: '</SPT_FallIn>',
    },
  
    {
      name: 'ConstructionSPT.SWP',
      type: 'NUMBER',
      order: 750,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<SPT_SWP>',
      xmlEnd: '</SPT_SWP>',
    },
  
    {
      name: 'ConstructionSPT.RWP',
      type: 'NUMBER',
      order: 760,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<SPT_RWP>',
      xmlEnd: '</SPT_RWP>',
    },
  
    {
      name: 'ConstructionSPT.Refusal',
      type: 'BIT',
      order: 770,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<SPT_Refusal>',
      xmlEnd: '</SPT_Refusal>',
    },
  
    {
      name: 'ConstructionSPT.HammerBouncing',
      type: 'BIT',
      order: 780,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<SPT_HammerBouncing>',
      xmlEnd: '</SPT_HammerBouncing>',
    },
  
    {
      name: 'ConstructionSPT.Blow1',
      type: 'NUMBER',
      order: 790,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<SPT_Blow1>',
      xmlEnd: '</SPT_Blow1>',
    },
  
    {
      name: 'ConstructionSPT.Blow2',
      type: 'NUMBER',
      order: 800,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<SPT_Blow2>',
      xmlEnd: '</SPT_Blow2>',
    },
  
    {
      name: 'ConstructionSPT.Blow3',
      type: 'NUMBER',
      order: 810,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<SPT_Blow3>',
      xmlEnd: '</SPT_Blow3>',
    },
  
    {
      name: 'ConstructionSPT.Blow4',
      type: 'NUMBER',
      order: 820,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<SPT_Blow4>',
      xmlEnd: '</SPT_Blow4>',
    },
  
    {
      name: 'ConstructionSPT.Blow5',
      type: 'NUMBER',
      order: 830,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<SPT_Blow5>',
      xmlEnd: '</SPT_Blow5>',
    },
  
    {
      name: 'ConstructionSPT.Blow6',
      type: 'NUMBER',
      order: 840,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<SPT_Blow6>',
      xmlEnd: '</SPT_Blow6>',
    },
  
    {
      name: 'ConstructionSPT.Incr1',
      type: 'NUMBER',
      order: 850,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<SPT_Incr1>',
      xmlEnd: '</SPT_Incr1>',
    },
  
    {
      name: 'ConstructionSPT.Incr2',
      type: 'NUMBER',
      order: 860,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<SPT_Incr2>',
      xmlEnd: '</SPT_Incr2>',
    },
  
    {
      name: 'ConstructionSPT.Incr3',
      type: 'NUMBER',
      order: 870,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<SPT_Incr3>',
      xmlEnd: '</SPT_Incr3>',
    },
  
    {
      name: 'ConstructionSPT.Incr4',
      type: 'NUMBER',
      order: 880,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<SPT_Incr4>',
      xmlEnd: '</SPT_Incr4>',
    },
  
    {
      name: 'ConstructionSPT.Incr5',
      type: 'NUMBER',
      order: 890,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<SPT_Incr5>',
      xmlEnd: '</SPT_Incr5>',
    },
  
    {
      name: 'ConstructionSPT.Incr6',
      type: 'NUMBER',
      order: 900,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<SPT_Incr6>',
      xmlEnd: '</SPT_Incr6>',
    },
  
    {
      name: 'ConstructionSPT.TotalPenetration',
      type: 'NUMBER',
      order: 910,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<SPT_TotalPenetration>',
      xmlEnd: '</SPT_TotalPenetration>',
    },
  
    {
      name: 'ConstructionSPT.Reported',
      type: 'TEXT',
      order: 930,
      exportYN: false,
      hasDataYN: true,
      xmlStart: '<SPT_Reported>',
      xmlEnd: '</SPT_Reported>',
    },
  
    {
      name: 'ConstructionSPT.StickUp',
      type: 'NUMBER',
      order: 940,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<SPT_StickUp>',
      xmlEnd: '</SPT_StickUp>',
    },
  
    {
      name: 'ConstructionSPT.CasingDepth',
      type: 'NUMBER',
      order: 950,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<SPT_CasingDepth>',
      xmlEnd: '</SPT_CasingDepth>',
    },
  
    {
      name: 'ConstructionSPT.WaterDepth',
      type: 'NUMBER',
      order: 960,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<SPT_WaterDepth>',
      xmlEnd: '</SPT_WaterDepth>',
    },
  
    {
      name: 'ConstructionSPT.Status',
      type: 'QUICKPICK',
      order: 970,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<SPT_Status>',
      xmlEnd: '</SPT_Status>',
    },
  
    {
      name: 'ConstructionSPT.StatusRemarks',
      type: 'QUICKPICK',
      order: 980,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<SPT_StatusRemarks>',
      xmlEnd: '</SPT_StatusRemarks>',
    },
  
    {
      name: 'ConstructionSPT.Remarks',
      type: 'TEXT',
      order: 1000,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Remarks>',
      xmlEnd: '</Remarks>',
    },
  
    {
      name: 'ConstructionSPT.RemarksOriginator',
      type: 'QUICKPICK',
      order: 1010,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<SPT_RemarksOriginator>',
      xmlEnd: '</SPT_RemarksOriginator>',
    },
  ]
}

export const XmlGEOLOGY = {
  name: 'GEOLOGY',
  order: 1030,
  xmlStart: '<GEOLOGY>',
  xmlEnd: '</GEOLOGY>',
  features:
  [
  
  {
    name: 'POINT.POINT_ID',
    type: 'TEXT',
    order: 1040,
    exportYN: true,
    hasDataYN: true,
    xmlStart: '<POINT_ID>',
    xmlEnd: '</POINT_ID>',
    referValue: {
      workflow: 'POINT',
      feature: 'POINT.POINT_ID',
    }
  },
  
  {
    name: 'GEOLOGY.TOP',
    type: 'NUMBER',
    order: 1050,
    exportYN: true,
    hasDataYN: true,
    xmlStart: '<TOP>',
    xmlEnd: '</TOP>',
  },
  
  {
    name: 'GEOLOGY.BASE',
    type: 'NUMBER',
    order: 1060,
    exportYN: true,
    hasDataYN: true,
    xmlStart: '<BASE>',
    xmlEnd: '</BASE>',
  },
  
  {
    name: 'GEOLOGY.Remarks',
    type: 'TEXT',
    order: 1100,
    exportYN: true,
    hasDataYN: true,
    xmlStart: '<Remarks>',
    xmlEnd: '</Remarks>',
  },
  
  {
    name: 'GEOLOGY.Legend',
    type: 'TEXT',
    order: 1140,
    exportYN: true,
    hasDataYN: true,
    xmlStart: '<Legend>',
    xmlEnd: '</Legend>',
  },
  
  {
    name: 'GEOLOGY.LineType',
    type: 'NUMBER',
    order: 1150,
    exportYN: true,
    hasDataYN: true,
    xmlStart: '<LineType>',
    xmlEnd: '</LineType>',
  },
  
  {
    order: 1160,
    exportYN: true,
    hasDataYN: true,
    xmlStart: '<DESX>',
    xmlEnd: '</DESX>',
    isEncode: true,
    children:
    [

      {
        order: 1170,
        exportYN: true,
        hasDataYN: true,
        xmlStart: '<Data><Version>1.0</Version><DataSettings>',
        xmlEnd: '</DataSettings></Data>',
        children:
        [

          {
            order: 1180,
            exportYN: true,
            hasDataYN: true,
            xmlStart: '<Order>',
            xmlEnd: '</Order>',
            children:
            [

              {
                order: 1190,
                exportYN: true,
                logic: 'GEOLOGY.LayerClass0 == "Cohesive" || GEOLOGY.LayerClass0 == "Granular" || GEOLOGY.LayerClass0 == "NoDescriptionSoil"',
                hasDataYN: true,
                xmlStart: '<Item>Soil_0</Item>',
                xmlEnd: '',
              },

              {
                order: 1200,
                exportYN: true,
                logic: 'GEOLOGY.LayerClass0 == "Sedimentary" || GEOLOGY.LayerClass0 == "Pyroclastic" || GEOLOGY.LayerClass0 == "Volcanic" || GEOLOGY.LayerClass0 == "Igneous" || GEOLOGY.LayerClass0 == "Metamorphic" || GEOLOGY.LayerClass0 == "Anthropogenic" || GEOLOGY.LayerClass0 == "NoDescriptionRock"',
                hasDataYN: true,
                xmlStart: '<Item>Rock_0</Item>',
                xmlEnd: '',
              },

              {
                order: 1210,
                exportYN: true,
                logic: 'GEOLOGY.LayerClass1 == "Cohesive" || GEOLOGY.LayerClass1 == "Granular" || GEOLOGY.LayerClass1 == "NoDescriptionSoil"',
                hasDataYN: true,
                xmlStart: '<Item>Soil_1</Item>',
                xmlEnd: '',
              },

              {
                order: 1220,
                exportYN: true,
                logic: 'GEOLOGY.LayerClass1 == "Sedimentary" || GEOLOGY.LayerClass1 == "Pyroclastic" || GEOLOGY.LayerClass1 == "Volcanic" || GEOLOGY.LayerClass1 == "Igneous" || GEOLOGY.LayerClass1 == "Metamorphic" || GEOLOGY.LayerClass1 == "Anthropogenic" || GEOLOGY.LayerClass1 == "NoDescriptionRock"',
                hasDataYN: true,
                xmlStart: '<Item>Rock_1</Item>',
                xmlEnd: '',
              },
            ],
          },

          {
            order: 1250,
            exportYN: true,
            logic: 'GEOLOGY.LayerClass0 == "Cohesive" || GEOLOGY.LayerClass0 == "Granular" || GEOLOGY.LayerClass0 == "NoDescriptionSoil"',
            hasDataYN: true,
            xmlStart: '<Soil><ID>0</ID>',
            xmlEnd: '</Soil>',
            children:
            [

              {
                name: 'GEOLOGY.Soil0_ColorText',
                type: 'MULTIPICK',
                order: 1260,
                exportYN: true,
                desxClass: 'Value',
                hasDataYN: true,
                xmlStart: '',
                value: '<ColorText>',
                xmlEnd: '</ColorText>',
              },

              {
                name: 'GEOLOGY.Soil0_Prefix',
                type: 'QUICKPICK',
                order: 1370,
                exportYN: true,
                desxClass: 'KeyValue',
                hasDataYN: true,
                xmlStart: '<Prefix><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Prefix>',
              },

              {
                name: 'GEOLOGY.Soil0_Suffix',
                type: 'TEXT',
                order: 1380,
                exportYN: true,
                desxClass: 'Value',
                hasDataYN: true,
                xmlStart: '<Suffix><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Suffix>',
              },

              {
                name: 'GEOLOGY.Soil0_Moisture',
                type: 'QUICKPICK',
                order: 1390,
                exportYN: true,
                desxClass: 'KeyValue',
                hasDataYN: true,
                xmlStart: '<Moisture><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Moisture>',
              },

              {
                name: 'GEOLOGY.Soil0_Structure',
                type: 'MULTIPICK',
                order: 1400,
                exportYN: true,
                desxClass: 'Value',
                hasDataYN: true,
                xmlStart: '<Structure><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Structure>',
              },

              {
                name: 'GEOLOGY.Soil0_Strength',
                type: 'QUICKPICK',
                order: 1410,
                exportYN: true,
                desxClass: 'KeyValue',
                hasDataYN: true,
                xmlStart: '<Strength><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Strength>',
              },

              {
                name: 'GEOLOGY.Soil0_Plasticity',
                type: 'QUICKPICK',
                order: 1420,
                exportYN: true,
                desxClass: 'KeyValue',
                hasDataYN: true,
                xmlStart: '<Plasticity><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Plasticity>',
              },

              {
                name: 'GEOLOGY.Soil0_Distribution',
                type: 'QUICKPICK',
                order: 1430,
                exportYN: true,
                desxClass: 'KeyValue',
                hasDataYN: true,
                xmlStart: '<Distribution><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Distribution>',
              },

              {
                name: 'GEOLOGY.Soil0_Origin',
                type: 'MULTIPICK',
                order: 1450,
                exportYN: true,
                desxClass: 'Value',
                hasDataYN: true,
                xmlStart: '<Origin><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Origin>',
              },

              {
                order: 1460,
                exportYN: true,
                hasDataYN: true,
                xmlStart: '<Fractions>',
                xmlEnd: '</Fractions>',
                children:
                [

                  {
                    order: 1470,
                    exportYN: true,
                    hasDataYN: true,
                    xmlStart: '<Organic>',
                    xmlEnd: '</Organic>',
                    children:
                    [

                      {
                        order: 1480,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_Main == "ORGANICS"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>35db735c-e9ec-4f86-833b-baa6857d055f</Key><Value>MAJOR</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 1490,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_Subordinate == "organic"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>83f345b8-0876-4bf7-92fa-1d0b94620428</Key><Value>Subord</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 1500,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_Some == "organic"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>44d42880-9668-46b4-9443-a317e3565157</Key><Value>Some</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 1505,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_SomeSecondary == "organic"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>44d42880-9668-46b4-9443-a317e3565157</Key><Value>Some</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 1510,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_Minor == "organic"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>af4e8164-1ddc-4f10-b4bf-bc9775f91697</Key><Value>Minor</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 1515,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_MinorSecondary == "organic"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>af4e8164-1ddc-4f10-b4bf-bc9775f91697</Key><Value>Minor</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 1520,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_Trace == "organic"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>e84fe9c0-4176-4c19-ae15-2fe534746f18</Key><Value>Trace</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 1525,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_TraceSecondary == "organic"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>e84fe9c0-4176-4c19-ae15-2fe534746f18</Key><Value>Trace</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        name: 'GEOLOGY.Soil0_FractionsOrganicMaterial',
                        type: 'QUICKPICK',
                        order: 1530,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Material>',
                        xmlEnd: '</Material>',
                      },

                      {
                        name: 'GEOLOGY.Soil0_FractionsOrganicComment',
                        type: 'TEXT',
                        order: 1540,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Comment>',
                        xmlEnd: '</Comment>',
                      },
                    ],
                  },

                  {
                    order: 1560,
                    exportYN: true,
                    hasDataYN: true,
                    xmlStart: '<Clay>',
                    xmlEnd: '</Clay>',
                    children:
                    [

                      {
                        order: 1570,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_Main == "CLAY"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>35db735c-e9ec-4f86-833b-baa6857d055f</Key><Value>MAJOR</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 1580,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_Subordinate == "clayey"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>83f345b8-0876-4bf7-92fa-1d0b94620428</Key><Value>Subord</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 1590,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_Some == "clay"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>44d42880-9668-46b4-9443-a317e3565157</Key><Value>Some</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 1595,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_SomeSecondary == "clay"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>44d42880-9668-46b4-9443-a317e3565157</Key><Value>Some</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 1600,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_Minor == "clay"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>af4e8164-1ddc-4f10-b4bf-bc9775f91697</Key><Value>Minor</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 1605,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_MinorSecondary == "clay"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>af4e8164-1ddc-4f10-b4bf-bc9775f91697</Key><Value>Minor</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 1610,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_Trace == "clay"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>e84fe9c0-4176-4c19-ae15-2fe534746f18</Key><Value>Trace</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 1615,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_TraceSecondary == "clay"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>e84fe9c0-4176-4c19-ae15-2fe534746f18</Key><Value>Trace</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        name: 'GEOLOGY.Soil0_FractionsClayComment',
                        type: 'TEXT',
                        order: 1620,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Comment>',
                        xmlEnd: '</Comment>',
                      },
                    ],
                  },

                  {
                    order: 1640,
                    exportYN: true,
                    hasDataYN: true,
                    xmlStart: '<Silt>',
                    xmlEnd: '</Silt>',
                    children:
                    [

                      {
                        order: 1650,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_Main == "SILT"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>35db735c-e9ec-4f86-833b-baa6857d055f</Key><Value>MAJOR</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 1660,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_Subordinate == "silty"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>83f345b8-0876-4bf7-92fa-1d0b94620428</Key><Value>Subord</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 1670,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_Some == "silt"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>44d42880-9668-46b4-9443-a317e3565157</Key><Value>Some</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 1675,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_SomeSecondary == "silt"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>44d42880-9668-46b4-9443-a317e3565157</Key><Value>Some</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 1680,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_Minor == "silt"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>af4e8164-1ddc-4f10-b4bf-bc9775f91697</Key><Value>Minor</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 1685,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_MinorSecondary == "silt"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>af4e8164-1ddc-4f10-b4bf-bc9775f91697</Key><Value>Minor</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 1690,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_Trace == "silt"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>e84fe9c0-4176-4c19-ae15-2fe534746f18</Key><Value>Trace</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 1695,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_TraceSecondary == "silt"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>e84fe9c0-4176-4c19-ae15-2fe534746f18</Key><Value>Trace</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        name: 'GEOLOGY.Soil0_FractionsSiltComment',
                        type: 'TEXT',
                        order: 1700,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Comment>',
                        xmlEnd: '</Comment>',
                      },
                    ],
                  },

                  {
                    order: 1720,
                    exportYN: true,
                    hasDataYN: true,
                    xmlStart: '<Sand>',
                    xmlEnd: '</Sand>',
                    children:
                    [

                      {
                        order: 1730,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_Main == "SAND"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>35db735c-e9ec-4f86-833b-baa6857d055f</Key><Value>MAJOR</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 1740,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_Subordinate == "sandy"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>83f345b8-0876-4bf7-92fa-1d0b94620428</Key><Value>Subord</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 1750,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_Some == "sand"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>44d42880-9668-46b4-9443-a317e3565157</Key><Value>Some</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 1755,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_SomeSecondary == "sand"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>44d42880-9668-46b4-9443-a317e3565157</Key><Value>Some</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 1760,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_Minor == "sand"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>af4e8164-1ddc-4f10-b4bf-bc9775f91697</Key><Value>Minor</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 1765,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_MinorSecondary == "sand"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>af4e8164-1ddc-4f10-b4bf-bc9775f91697</Key><Value>Minor</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 1770,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_Trace == "sand"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>e84fe9c0-4176-4c19-ae15-2fe534746f18</Key><Value>Trace</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 1775,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_TraceSecondary == "sand"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>e84fe9c0-4176-4c19-ae15-2fe534746f18</Key><Value>Trace</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        name: 'GEOLOGY.Soil0_FractionsSandMaterial',
                        type: 'MULTIPICK',
                        order: 1780,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Material>',
                        xmlEnd: '</Material>',
                      },

                      {
                        name: 'GEOLOGY.Soil0_FractionsSandSize',
                        type: 'QUICKPICK',
                        order: 1790,
                        exportYN: true,
                        desxClass: 'Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<SizeMin><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></SizeMin>',
                      },

                      {
                        name: 'GEOLOGY.Soil0_FractionsSandSizeMinMaxStep',
                        type: 'NUMBER',
                        order: 1800,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '<SizeValue><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></SizeValue>',
                      },

                      {
                        name: 'GEOLOGY.Soil0_FractionsSandShape',
                        type: 'QUICKPICK',
                        order: 1810,
                        exportYN: true,
                        desxClass: 'Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<ShapeMin><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></ShapeMin>',
                      },

                      {
                        name: 'GEOLOGY.Soil0_FractionsSandComment',
                        type: 'TEXT',
                        order: 1830,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Comment>',
                        xmlEnd: '</Comment>',
                      },
                    ],
                  },

                  {
                    order: 1850,
                    exportYN: true,
                    hasDataYN: true,
                    xmlStart: '<Gravel>',
                    xmlEnd: '</Gravel>',
                    children:
                    [

                      {
                        order: 1860,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_Main == "GRAVEL"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>35db735c-e9ec-4f86-833b-baa6857d055f</Key><Value>MAJOR</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 1870,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_Subordinate == "gravelly"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>83f345b8-0876-4bf7-92fa-1d0b94620428</Key><Value>Subord</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 1880,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_Some == "gravel"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>44d42880-9668-46b4-9443-a317e3565157</Key><Value>Some</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 1885,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_SomeSecondary == "gravel"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>44d42880-9668-46b4-9443-a317e3565157</Key><Value>Some</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 1890,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_Minor == "gravel"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>af4e8164-1ddc-4f10-b4bf-bc9775f91697</Key><Value>Minor</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 1895,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_MinorSecondary == "gravel"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>af4e8164-1ddc-4f10-b4bf-bc9775f91697</Key><Value>Minor</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 1900,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_Trace == "gravel"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>e84fe9c0-4176-4c19-ae15-2fe534746f18</Key><Value>Trace</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 1905,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_TraceSecondary == "gravel"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>e84fe9c0-4176-4c19-ae15-2fe534746f18</Key><Value>Trace</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        name: 'GEOLOGY.Soil0_FractionsGravelMaterial',
                        type: 'MULTIPICK',
                        order: 1910,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Material>',
                        xmlEnd: '</Material>',
                      },

                      {
                        name: 'GEOLOGY.Soil0_FractionsGravelSize',
                        type: 'QUICKPICK',
                        order: 1920,
                        exportYN: true,
                        desxClass: 'Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<SizeMin><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></SizeMin>',
                      },

                      {
                        name: 'GEOLOGY.Soil0_FractionsGravelSizeMinMaxStep',
                        type: 'NUMBER',
                        order: 1930,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '<SizeValue><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></SizeValue>',
                      },

                      {
                        name: 'GEOLOGY.Soil0_FractionsGravelShape',
                        type: 'QUICKPICK',
                        order: 1940,
                        exportYN: true,
                        desxClass: 'Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<ShapeMin><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></ShapeMin>',
                      },

                      {
                        name: 'GEOLOGY.Soil0_FractionsGravelWeathering',
                        type: 'QUICKPICK',
                        order: 1950,
                        exportYN: true,
                        desxClass: 'Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<WeatherMin><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></WeatherMin>',
                      },

                      {
                        name: 'GEOLOGY.Soil0_FractionsGravelComment',
                        type: 'TEXT',
                        order: 1960,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Comment>',
                        xmlEnd: '</Comment>',
                      },
                    ],
                  },

                  {
                    order: 1980,
                    exportYN: true,
                    hasDataYN: true,
                    xmlStart: '<Cobble>',
                    xmlEnd: '</Cobble>',
                    children:
                    [

                      {
                        order: 1990,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_Main == "COBBLES"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>35db735c-e9ec-4f86-833b-baa6857d055f</Key><Value>MAJOR</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 2000,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_Subordinate == "cobbly"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>83f345b8-0876-4bf7-92fa-1d0b94620428</Key><Value>Subord</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 2010,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_Some == "cobbles"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>44d42880-9668-46b4-9443-a317e3565157</Key><Value>Some</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 2010,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_SomeSecondary == "cobbles"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>44d42880-9668-46b4-9443-a317e3565157</Key><Value>Some</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 2020,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_MinorSecondary == "cobbles"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>af4e8164-1ddc-4f10-b4bf-bc9775f91697</Key><Value>Minor</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 2020,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_Minor == "cobbles"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>af4e8164-1ddc-4f10-b4bf-bc9775f91697</Key><Value>Minor</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 2030,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_TraceSecondary == "cobbles"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>e84fe9c0-4176-4c19-ae15-2fe534746f18</Key><Value>Trace</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 2030,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_Trace == "cobbles"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>e84fe9c0-4176-4c19-ae15-2fe534746f18</Key><Value>Trace</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        name: 'GEOLOGY.Soil0_FractionsCobbleMaterial',
                        type: 'MULTIPICK',
                        order: 2040,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Material>',
                        xmlEnd: '</Material>',
                      },

                      {
                        name: 'GEOLOGY.Soil0_FractionsCobbleSizeMinMaxStep',
                        type: 'NUMBER',
                        order: 2050,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '<SizeValue><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></SizeValue>',
                      },

                      {
                        name: 'GEOLOGY.Soil0_FractionsCobbleShape',
                        type: 'QUICKPICK',
                        order: 2060,
                        exportYN: true,
                        desxClass: 'Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<ShapeMin><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></ShapeMin>',
                      },

                      {
                        name: 'GEOLOGY.Soil0_FractionsCobbleWeathering',
                        type: 'QUICKPICK',
                        order: 2070,
                        exportYN: true,
                        desxClass: 'Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<WeatherMin><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></WeatherMin>',
                      },

                      {
                        name: 'GEOLOGY.Soil0_FractionsCobbleComment',
                        type: 'TEXT',
                        order: 2080,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Comment>',
                        xmlEnd: '</Comment>',
                      },
                    ],
                  },

                  {
                    order: 2100,
                    exportYN: true,
                    hasDataYN: true,
                    xmlStart: '<Boulder>',
                    xmlEnd: '</Boulder>',
                    children:
                    [

                      {
                        order: 2110,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_Main == "BOULDERS"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>35db735c-e9ec-4f86-833b-baa6857d055f</Key><Value>MAJOR</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 2120,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_Subordinate == "bouldery"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>83f345b8-0876-4bf7-92fa-1d0b94620428</Key><Value>Subord</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 2130,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_Some == "boulders"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>44d42880-9668-46b4-9443-a317e3565157</Key><Value>Some</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 2135,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_SomeSecondary == "boulders"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>44d42880-9668-46b4-9443-a317e3565157</Key><Value>Some</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 2140,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_Minor == "boulders"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>af4e8164-1ddc-4f10-b4bf-bc9775f91697</Key><Value>Minor</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 2145,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_MinorSecondary == "boulders"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>af4e8164-1ddc-4f10-b4bf-bc9775f91697</Key><Value>Minor</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 2150,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_Trace == "boulders"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>e84fe9c0-4176-4c19-ae15-2fe534746f18</Key><Value>Trace</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 2155,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil0_TraceSecondary == "boulders"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>e84fe9c0-4176-4c19-ae15-2fe534746f18</Key><Value>Trace</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        name: 'GEOLOGY.Soil0_FractionsBoulderMaterial',
                        type: 'MULTIPICK',
                        order: 2160,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Material>',
                        xmlEnd: '</Material>',
                      },

                      {
                        name: 'GEOLOGY.Soil0_FractionsBoulderSizeMinMaxStep',
                        type: 'NUMBER',
                        order: 2170,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '<SizeValue><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></SizeValue>',
                      },

                      {
                        name: 'GEOLOGY.Soil0_FractionsBoulderShape',
                        type: 'QUICKPICK',
                        order: 2180,
                        exportYN: true,
                        desxClass: 'Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<ShapeMin><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></ShapeMin>',
                      },

                      {
                        name: 'GEOLOGY.Soil0_FractionsBoulderWeathering',
                        type: 'QUICKPICK',
                        order: 2190,
                        exportYN: true,
                        desxClass: 'Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<WeatherMin><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></WeatherMin>',
                      },

                      {
                        name: 'GEOLOGY.Soil0_FractionsBoulderComment',
                        type: 'TEXT',
                        order: 2200,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Comment>',
                        xmlEnd: '</Comment>',
                      },
                    ],
                  },

                  {
                    order: 2220,
                    exportYN: true,
                    hasDataYN: true,
                    xmlStart: '<UserDefined><Tag>udfsoilFracStrength</Tag>',
                    xmlEnd: '</UserDefined>',
                    children:
                    [

                      {
                        name: 'GEOLOGY.Soil0_FractionsUserDefinedItemFractionStrengthGravel',
                        type: 'QUICKPICK',
                        order: 2240,
                        exportYN: true,
                        desxClass: 'UserDef_Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<Gravel><Tag /><Minimum><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></Minimum></Gravel>',
                      },

                      {
                        name: 'GEOLOGY.Soil0_FractionsUserDefinedItemFractionStrengthCobble',
                        type: 'QUICKPICK',
                        order: 2250,
                        exportYN: true,
                        desxClass: 'UserDef_Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<Cobble><Tag /><Minimum><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></Minimum></Cobble>',
                      },

                      {
                        name: 'GEOLOGY.Soil0_FractionsUserDefinedItemFractionStrengthBoulder',
                        type: 'QUICKPICK',
                        order: 2260,
                        exportYN: true,
                        desxClass: 'UserDef_Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<Boulder><Tag /><Minimum><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></Minimum></Boulder>',
                      },
                    ],
                  },

                  {
                    order: 2280,
                    exportYN: true,
                    hasDataYN: true,
                    xmlStart: '<UserDefined><Tag>udfsoilFracColour</Tag>',
                    xmlEnd: '</UserDefined>',
                    children:
                    [

                      {
                        name: 'GEOLOGY.Soil0_FractionsUserDefinedItemFractionColourSand',
                        type: 'MULTIPICK',
                        order: 2290,
                        exportYN: true,
                        desxClass: 'UserDef_Frac_Value',
                        hasDataYN: true,
                        xmlStart: '<Sand><Tag /><Minimum><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></Minimum></Sand>',
                      },

                      {
                        name: 'GEOLOGY.Soil0_FractionsUserDefinedItemFractionColourGravel',
                        type: 'MULTIPICK',
                        order: 2300,
                        exportYN: true,
                        desxClass: 'UserDef_Frac_Value',
                        hasDataYN: true,
                        xmlStart: '<Gravel><Tag /><Minimum><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></Minimum></Gravel>',
                      },

                      {
                        name: 'GEOLOGY.Soil0_FractionsUserDefinedItemFractionColourCobble',
                        type: 'MULTIPICK',
                        order: 2310,
                        exportYN: true,
                        desxClass: 'UserDef_Frac_Value',
                        hasDataYN: true,
                        xmlStart: '<Cobble><Tag /><Minimum><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></Minimum></Cobble>',
                      },

                      {
                        name: 'GEOLOGY.Soil0_FractionsUserDefinedItemFractionColourBoulder',
                        type: 'MULTIPICK',
                        order: 2320,
                        exportYN: true,
                        desxClass: 'UserDef_Frac_Value',
                        hasDataYN: true,
                        xmlStart: '<Boulder><Tag /><Minimum><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></Minimum></Boulder>',
                      },
                    ],
                  },

                  {
                    order: 2340,
                    exportYN: true,
                    hasDataYN: true,
                    xmlStart: '<UserDefined><Tag>udfsoilOrganicMaterials</Tag>',
                    xmlEnd: '</UserDefined>',
                    children:
                    [

                      {
                        name: 'GEOLOGY.Soil0_FractionsUserDefinedItemOrganicMaterialsOrganic',
                        type: 'MULTIPICK',
                        order: 2350,
                        exportYN: true,
                        desxClass: 'UserDef_Frac_Value',
                        hasDataYN: true,
                        xmlStart: '<Organic><Tag /><Minimum><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></Minimum></Organic>',
                      },
                    ],
                  },
                ],
              },

              {
                name: 'GEOLOGY.Soil0_Comment',
                type: 'TEXT',
                order: 2380,
                exportYN: true,
                desxClass: 'Value',
                hasDataYN: true,
                xmlStart: '',
                value: '<Comment>',
                xmlEnd: '</Comment>',
              },

              {
                name: 'GEOLOGY.Soil0_UserDefinedSensitivity',
                type: 'QUICKPICK',
                order: 2390,
                exportYN: true,
                desxClass: 'UserDef_KeyValue',
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfsoilSensitivity</Tag><Minimum><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Minimum></UserDefined>',
              },

              {
                name: 'GEOLOGY.Soil0_UserDefinedWeathering',
                type: 'QUICKPICK',
                order: 2400,
                exportYN: true,
                desxClass: 'UserDef_KeyValue',
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfsoilWeathering</Tag><Minimum><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Minimum></UserDefined>',
              },

              {
                name: 'GEOLOGY.Soil0_UserDefinedItemFillMaterials',
                type: 'MULTIPICK',
                order: 2410,
                exportYN: true,
                desxClass: 'UserDef_Value',
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfsoilFillMaterials</Tag><Minimum><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Minimum></UserDefined>',
              },

              {
                name: 'GEOLOGY.Soil0_UserDefinedItemNoDescription',
                type: 'MULTIPICK',
                order: 2430,
                exportYN: true,
                desxClass: 'UserDef_Value',
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfsoilNoDescription</Tag><Minimum><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Minimum></UserDefined>',
              },
            ],
          },

          {
            order: 2450,
            exportYN: true,
            logic: 'GEOLOGY.LayerClass0 == "Sedimentary" || GEOLOGY.LayerClass0 == "Pyroclastic" || GEOLOGY.LayerClass0 == "Volcanic" || GEOLOGY.LayerClass0 == "Igneous" || GEOLOGY.LayerClass0 == "Metamorphic" || GEOLOGY.LayerClass0 == "Anthropogenic" || GEOLOGY.LayerClass0 == "NoDescriptionRock"',
            hasDataYN: true,
            xmlStart: '<Rock><ID>0</ID>',
            xmlEnd: '</Rock>',
            children:
            [

              {
                name: 'GEOLOGY.Rock0_Prefix',
                type: 'MULTIPICK',
                order: 2460,
                exportYN: true,
                desxClass: 'Value',
                hasDataYN: true,
                xmlStart: '<Prefix><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Prefix>',
              },

              {
                name: 'GEOLOGY.Rock0_Name',
                type: 'QUICKPICK',
                order: 2470,
                exportYN: true,
                desxClass: 'KeyValue',
                hasDataYN: true,
                xmlStart: '<Name><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Name>',
              },

              {
                name: 'GEOLOGY.Rock0_Suffix',
                type: 'MULTIPICK',
                order: 2480,
                exportYN: true,
                desxClass: 'Value',
                hasDataYN: true,
                xmlStart: '<Suffix><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Suffix>',
              },

              {
                name: 'GEOLOGY.Rock0_GrainSize',
                type: 'QUICKPICK',
                order: 2490,
                exportYN: true,
                desxClass: 'KeyValue',
                hasDataYN: true,
                xmlStart: '<GrainSize><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></GrainSize>',
              },

              {
                name: 'GEOLOGY.Rock0_Texture',
                type: 'MULTIPICK',
                order: 2500,
                exportYN: true,
                desxClass: 'Value',
                hasDataYN: true,
                xmlStart: '<Texture><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Texture>',
              },

              {
                name: 'GEOLOGY.Rock0_Fabric',
                type: 'MULTIPICK',
                order: 2510,
                exportYN: true,
                desxClass: 'Value',
                hasDataYN: true,
                xmlStart: '<Fabric><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Fabric>',
              },

              {
                name: 'GEOLOGY.Rock0_LayerType',
                type: 'QUICKPICK',
                order: 2520,
                exportYN: true,
                desxClass: 'KeyValue',
                hasDataYN: true,
                xmlStart: '<LayerType><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></LayerType>',
              },

              {
                name: 'GEOLOGY.Rock0_ColorText',
                type: 'MULTIPICK',
                order: 2525,
                exportYN: true,
                desxClass: 'Value',
                hasDataYN: true,
                xmlStart: '',
                value: '<ColorText>',
                xmlEnd: '</ColorText>',
              },

              {
                name: 'GEOLOGY.Rock0_Strength',
                type: 'QUICKPICK',
                order: 2530,
                exportYN: true,
                desxClass: 'KeyValue',
                hasDataYN: true,
                xmlStart: '<Strength><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Strength>',
              },

              {
                name: 'GEOLOGY.Rock0_Weathering',
                type: 'QUICKPICK',
                order: 2540,
                exportYN: true,
                desxClass: 'KeyValue',
                hasDataYN: true,
                xmlStart: '<Weathering><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Weathering>',
              },

              {
                name: 'GEOLOGY.Rock0_Comments',
                type: 'TEXT',
                order: 2560,
                exportYN: true,
                desxClass: 'Value',
                hasDataYN: true,
                xmlStart: '',
                value: '<Comment>',
                xmlEnd: '</Comment>',
              },

              {
                name: 'GEOLOGY.Rock0_UserDefinedOrigin',
                type: 'MULTIPICK',
                order: 2570,
                exportYN: true,
                desxClass: 'UserDef_Value',
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfrockOrigin</Tag><Minimum><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Minimum></UserDefined>',
              },

              {
                name: 'GEOLOGY.Rock0_UserDefinedItemNoDescriptionRock',
                type: 'MULTIPICK',
                order: 2590,
                exportYN: true,
                desxClass: 'UserDef_Value',
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfrockNoDescriptionRock</Tag><Minimum><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Minimum></UserDefined>',
              },

              {
                name: 'GEOLOGY.Rock0_UserDefinedCement',
                type: 'QUICKPICK',
                order: 2600,
                exportYN: true,
                desxClass: 'UserDef_KeyValue',
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfrockCement</Tag><Minimum><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Minimum></UserDefined>',
              },

              {
                order: 2610,
                exportYN: true,
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfrockLayerInclinationClass</Tag>',
                xmlEnd: '</UserDefined>',
              },

              {
                order: 2650,
                exportYN: true,
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfrockLayerThicknessClass</Tag>',
                xmlEnd: '</UserDefined>',
              },

              {
                order: 2690,
                exportYN: true,
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfrockLayerSpacingClass</Tag>',
                xmlEnd: '</UserDefined>',
              },

              {
                order: 2730,
                exportYN: true,
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfrockInclinationNumeric</Tag>',
                xmlEnd: '</UserDefined>',
                children:
                [

                  {
                    name: 'GEOLOGY.Rock0_UserDefinedInclinationNumericMin',
                    type: 'NUMBER',
                    order: 2740,
                    exportYN: true,
                    desxClass: 'UserDef_Value_Part1',
                    hasDataYN: true,
                    xmlStart: '<Minimum><Key>',
                    value: '</Key><Value>',
                    xmlEnd: '</Value></Minimum>',
                  },

                  {
                    name: 'GEOLOGY.Rock0_UserDefinedInclinationNumericMax',
                    type: 'NUMBER',
                    order: 2750,
                    exportYN: true,
                    desxClass: 'UserDef_Value_part2 optional',
                    hasDataYN: true,
                    xmlStart: '<Joiner><Key>2eb1d827-0404-4c98-9494-57908b1b097e</Key><Value>to</Value></Joiner><Maximum><Key>',
                    value: '</Key><Value>',
                    xmlEnd: '</Value></Maximum>',
                  },
                ],
              },

              {
                order: 2770,
                exportYN: true,
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfrockThicknessNumeric</Tag>',
                xmlEnd: '</UserDefined>',
                children:
                [

                  {
                    name: 'GEOLOGY.Rock0_UserDefinedThicknessNumericMin',
                    type: 'NUMBER',
                    order: 2780,
                    exportYN: true,
                    desxClass: 'UserDef_Value_Part1',
                    hasDataYN: true,
                    xmlStart: '<Minimum><Key>',
                    value: '</Key><Value>',
                    xmlEnd: '</Value></Minimum>',
                  },

                  {
                    name: 'GEOLOGY.Rock0_UserDefinedThicknessNumericMax',
                    type: 'NUMBER',
                    order: 2790,
                    exportYN: true,
                    desxClass: 'UserDef_Value_part2 optional',
                    hasDataYN: true,
                    xmlStart: '<Joiner><Key>d17eb126-8032-4ff0-bec3-ee33c3d7aa13</Key><Value>to</Value></Joiner><Maximum><Key>',
                    value: '</Key><Value>',
                    xmlEnd: '</Value></Maximum>',
                  },
                ],
              },

              {
                order: 2810,
                exportYN: true,
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfrockSpacingNumeric</Tag>',
                xmlEnd: '</UserDefined>',
                children:
                [

                  {
                    name: 'GEOLOGY.Rock0_UserDefinedSpacingNumericMin',
                    type: 'NUMBER',
                    order: 2820,
                    exportYN: true,
                    desxClass: 'UserDef_Value_Part1',
                    hasDataYN: true,
                    xmlStart: '<Minimum><Key>',
                    value: '</Key><Value>',
                    xmlEnd: '</Value></Minimum>',
                  },

                  {
                    name: 'GEOLOGY.Rock0_UserDefinedSpacingNumericMax',
                    type: 'NUMBER',
                    order: 2830,
                    exportYN: true,
                    desxClass: 'UserDef_Value_part2 optional',
                    hasDataYN: true,
                    xmlStart: '<Joiner><Key>91672a52-6e68-4bfc-9406-c72aad9d2e7c</Key><Value>to</Value></Joiner><Maximum><Key>',
                    value: '</Key><Value>',
                    xmlEnd: '</Value></Maximum>',
                  },
                ],
              },

              {
                name: 'GEOLOGY.Rock0_UserDefinedSuffixComment',
                type: 'TEXT',
                order: 2850,
                exportYN: true,
                desxClass: 'UserDef_Value',
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfrockSuffixComment</Tag><Minimum><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Minimum></UserDefined>',
              },
            ],
          },

          {
            order: 2870,
            exportYN: true,
            logic: 'GEOLOGY.LayerClass1 == "Cohesive" || GEOLOGY.LayerClass1 == "Granular" || GEOLOGY.LayerClass1 == "NoDescriptionSoil"',
            hasDataYN: true,
            xmlStart: '<Soil><ID>1</ID>',
            xmlEnd: '</Soil>',
            children:
            [

              {
                name: 'GEOLOGY.Soil1_Concatenation',
                type: 'QUICKPICK',
                order: 2890,
                exportYN: true,
                desxClass: 'KeyValue',
                hasDataYN: true,
                xmlStart: '<Concatenation><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Concatenation>',
              },

              {
                name: 'GEOLOGY.Soil1_ColorText',
                type: 'MULTIPICK',
                order: 2900,
                exportYN: true,
                desxClass: 'Value',
                hasDataYN: true,
                xmlStart: '',
                value: '<ColorText>',
                xmlEnd: '</ColorText>',
              },

              {
                name: 'GEOLOGY.Soil1_Prefix',
                type: 'QUICKPICK',
                order: 2960,
                exportYN: true,
                desxClass: 'KeyValue',
                hasDataYN: true,
                xmlStart: '<Prefix><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Prefix>',
              },

              {
                name: 'GEOLOGY.Soil1_Suffix',
                type: 'TEXT',
                order: 2970,
                exportYN: true,
                desxClass: 'Value',
                hasDataYN: true,
                xmlStart: '<Suffix><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Suffix>',
              },

              {
                name: 'GEOLOGY.Soil1_Moisture',
                type: 'QUICKPICK',
                order: 2980,
                exportYN: true,
                desxClass: 'KeyValue',
                hasDataYN: true,
                xmlStart: '<Moisture><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Moisture>',
              },

              {
                name: 'GEOLOGY.Soil1_Structure',
                type: 'MULTIPICK',
                order: 2990,
                exportYN: true,
                desxClass: 'Value',
                hasDataYN: true,
                xmlStart: '<Structure><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Structure>',
              },

              {
                name: 'GEOLOGY.Soil1_Strength',
                type: 'QUICKPICK',
                order: 3000,
                exportYN: true,
                desxClass: 'KeyValue',
                hasDataYN: true,
                xmlStart: '<Strength><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Strength>',
              },

              {
                name: 'GEOLOGY.Soil1_Plasticity',
                type: 'QUICKPICK',
                order: 3010,
                exportYN: true,
                desxClass: 'KeyValue',
                hasDataYN: true,
                xmlStart: '<Plasticity><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Plasticity>',
              },

              {
                name: 'GEOLOGY.Soil1_Distribution',
                type: 'QUICKPICK',
                order: 3020,
                exportYN: true,
                desxClass: 'KeyValue',
                hasDataYN: true,
                xmlStart: '<Distribution><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Distribution>',
              },

              {
                name: 'GEOLOGY.Soil1_Origin',
                type: 'MULTIPICK',
                order: 3040,
                exportYN: true,
                desxClass: 'Value',
                hasDataYN: true,
                xmlStart: '<Origin><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Origin>',
              },

              {
                order: 3050,
                exportYN: true,
                hasDataYN: true,
                xmlStart: '<Fractions>',
                xmlEnd: '</Fractions>',
                children:
                [

                  {
                    order: 3060,
                    exportYN: true,
                    hasDataYN: true,
                    xmlStart: '<Organic>',
                    xmlEnd: '</Organic>',
                    children:
                    [

                      {
                        order: 3070,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil1_Main == "ORGANICS"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>35db735c-e9ec-4f86-833b-baa6857d055f</Key><Value>MAJOR</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 3080,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil1_Subordinate == "organic"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>83f345b8-0876-4bf7-92fa-1d0b94620428</Key><Value>Subord</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 3090,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil1_Some == "organic"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>44d42880-9668-46b4-9443-a317e3565157</Key><Value>Some</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 3100,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil1_Minor == "organic"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>af4e8164-1ddc-4f10-b4bf-bc9775f91697</Key><Value>Minor</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 3110,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil1_Trace == "organic"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>e84fe9c0-4176-4c19-ae15-2fe534746f18</Key><Value>Trace</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        name: 'GEOLOGY.Soil1_FractionsOrganicMaterial',
                        type: 'QUICKPICK',
                        order: 3120,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Material>',
                        xmlEnd: '</Material>',
                      },

                      {
                        name: 'GEOLOGY.Soil1_FractionsOrganicComment',
                        type: 'TEXT',
                        order: 3130,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Comment>',
                        xmlEnd: '</Comment>',
                      },
                    ],
                  },

                  {
                    order: 3150,
                    exportYN: true,
                    hasDataYN: true,
                    xmlStart: '<Clay>',
                    xmlEnd: '</Clay>',
                    children:
                    [

                      {
                        order: 3160,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil1_Main == "CLAY"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>35db735c-e9ec-4f86-833b-baa6857d055f</Key><Value>MAJOR</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 3170,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil1_Subordinate == "clayey"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>83f345b8-0876-4bf7-92fa-1d0b94620428</Key><Value>Subord</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 3180,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil1_Some == "clay"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>44d42880-9668-46b4-9443-a317e3565157</Key><Value>Some</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 3190,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil1_Minor == "clay"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>af4e8164-1ddc-4f10-b4bf-bc9775f91697</Key><Value>Minor</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 3200,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil1_Trace == "clay"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>e84fe9c0-4176-4c19-ae15-2fe534746f18</Key><Value>Trace</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        name: 'GEOLOGY.Soil1_FractionsClayComment',
                        type: 'TEXT',
                        order: 3210,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Comment>',
                        xmlEnd: '</Comment>',
                      },
                    ],
                  },

                  {
                    order: 3230,
                    exportYN: true,
                    hasDataYN: true,
                    xmlStart: '<Silt>',
                    xmlEnd: '</Silt>',
                    children:
                    [

                      {
                        order: 3240,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil1_Main == "SILT"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>35db735c-e9ec-4f86-833b-baa6857d055f</Key><Value>MAJOR</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 3250,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil1_Subordinate == "silty"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>83f345b8-0876-4bf7-92fa-1d0b94620428</Key><Value>Subord</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 3260,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil1_Some == "silt"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>44d42880-9668-46b4-9443-a317e3565157</Key><Value>Some</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 3270,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil1_Minor == "silt"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>af4e8164-1ddc-4f10-b4bf-bc9775f91697</Key><Value>Minor</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 3280,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil1_Trace == "silt"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>e84fe9c0-4176-4c19-ae15-2fe534746f18</Key><Value>Trace</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        name: 'GEOLOGY.Soil1_FractionsSiltComment',
                        type: 'TEXT',
                        order: 3290,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Comment>',
                        xmlEnd: '</Comment>',
                      },
                    ],
                  },

                  {
                    order: 3310,
                    exportYN: true,
                    hasDataYN: true,
                    xmlStart: '<Sand>',
                    xmlEnd: '</Sand>',
                    children:
                    [

                      {
                        order: 3320,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil1_Main == "SAND"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>35db735c-e9ec-4f86-833b-baa6857d055f</Key><Value>MAJOR</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 3330,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil1_Subordinate == "sandy"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>83f345b8-0876-4bf7-92fa-1d0b94620428</Key><Value>Subord</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 3340,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil1_Some == "sand"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>44d42880-9668-46b4-9443-a317e3565157</Key><Value>Some</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 3350,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil1_Minor == "sand"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>af4e8164-1ddc-4f10-b4bf-bc9775f91697</Key><Value>Minor</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 3360,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil1_Trace == "sand"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>e84fe9c0-4176-4c19-ae15-2fe534746f18</Key><Value>Trace</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        name: 'GEOLOGY.Soil1_FractionsSandMaterial',
                        type: 'MULTIPICK',
                        order: 3370,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Material>',
                        xmlEnd: '</Material>',
                      },

                      {
                        name: 'GEOLOGY.Soil1_FractionsSandSize',
                        type: 'QUICKPICK',
                        order: 3380,
                        exportYN: true,
                        desxClass: 'Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<SizeMin><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></SizeMin>',
                      },

                      {
                        name: 'GEOLOGY.Soil1_FractionsSandSizeMinMaxStep',
                        type: 'NUMBER',
                        order: 3390,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '<SizeValue><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></SizeValue>',
                      },

                      {
                        name: 'GEOLOGY.Soil1_FractionsSandShape',
                        type: 'QUICKPICK',
                        order: 3400,
                        exportYN: true,
                        desxClass: 'Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<ShapeMin><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></ShapeMin>',
                      },

                      {
                        name: 'GEOLOGY.Soil1_FractionsSandComment',
                        type: 'TEXT',
                        order: 3420,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Comment>',
                        xmlEnd: '</Comment>',
                      },
                    ],
                  },

                  {
                    order: 3440,
                    exportYN: true,
                    hasDataYN: true,
                    xmlStart: '<Gravel>',
                    xmlEnd: '</Gravel>',
                    children:
                    [

                      {
                        order: 3450,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil1_Main == "GRAVEL"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>35db735c-e9ec-4f86-833b-baa6857d055f</Key><Value>MAJOR</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 3460,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil1_Subordinate == "gravelly"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>83f345b8-0876-4bf7-92fa-1d0b94620428</Key><Value>Subord</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 3470,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil1_Some == "gravel"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>44d42880-9668-46b4-9443-a317e3565157</Key><Value>Some</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 3480,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil1_Minor == "gravel"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>af4e8164-1ddc-4f10-b4bf-bc9775f91697</Key><Value>Minor</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 3490,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil1_Trace == "gravel"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>e84fe9c0-4176-4c19-ae15-2fe534746f18</Key><Value>Trace</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        name: 'GEOLOGY.Soil1_FractionsGravelMaterial',
                        type: 'MULTIPICK',
                        order: 3500,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Material>',
                        xmlEnd: '</Material>',
                      },

                      {
                        name: 'GEOLOGY.Soil1_FractionsGravelSize',
                        type: 'QUICKPICK',
                        order: 3510,
                        exportYN: true,
                        desxClass: 'Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<SizeMin><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></SizeMin>',
                      },

                      {
                        name: 'GEOLOGY.Soil1_FractionsGravelSizeMinMaxStep',
                        type: 'NUMBER',
                        order: 3520,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '<SizeValue><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></SizeValue>',
                      },

                      {
                        name: 'GEOLOGY.Soil1_FractionsGravelShape',
                        type: 'QUICKPICK',
                        order: 3530,
                        exportYN: true,
                        desxClass: 'Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<ShapeMin><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></ShapeMin>',
                      },

                      {
                        name: 'GEOLOGY.Soil1_FractionsGravelWeathering',
                        type: 'QUICKPICK',
                        order: 3540,
                        exportYN: true,
                        desxClass: 'Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<WeatherMin><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></WeatherMin>',
                      },

                      {
                        name: 'GEOLOGY.Soil1_FractionsGravelComment',
                        type: 'TEXT',
                        order: 3550,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Comment>',
                        xmlEnd: '</Comment>',
                      },
                    ],
                  },

                  {
                    order: 3570,
                    exportYN: true,
                    hasDataYN: true,
                    xmlStart: '<Cobble>',
                    xmlEnd: '</Cobble>',
                    children:
                    [

                      {
                        order: 3580,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil1_Main == "COBBLES"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>35db735c-e9ec-4f86-833b-baa6857d055f</Key><Value>MAJOR</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 3590,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil1_Subordinate == "cobbly"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>83f345b8-0876-4bf7-92fa-1d0b94620428</Key><Value>Subord</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 3600,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil1_Some == "cobbles"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>44d42880-9668-46b4-9443-a317e3565157</Key><Value>Some</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 3610,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil1_Minor == "cobbles"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>af4e8164-1ddc-4f10-b4bf-bc9775f91697</Key><Value>Minor</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 3620,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil1_Trace == "cobbles"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>e84fe9c0-4176-4c19-ae15-2fe534746f18</Key><Value>Trace</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        name: 'GEOLOGY.Soil1_FractionsCobbleMaterial',
                        type: 'MULTIPICK',
                        order: 3630,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Material>',
                        xmlEnd: '</Material>',
                      },

                      {
                        name: 'GEOLOGY.Soil1_FractionsCobbleSizeMinMaxStep',
                        type: 'NUMBER',
                        order: 3640,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '<SizeValue><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></SizeValue>',
                      },

                      {
                        name: 'GEOLOGY.Soil1_FractionsCobbleShape',
                        type: 'QUICKPICK',
                        order: 3650,
                        exportYN: true,
                        desxClass: 'Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<ShapeMin><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></ShapeMin>',
                      },

                      {
                        name: 'GEOLOGY.Soil1_FractionsCobbleWeathering',
                        type: 'QUICKPICK',
                        order: 3660,
                        exportYN: true,
                        desxClass: 'Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<WeatherMin><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></WeatherMin>',
                      },

                      {
                        name: 'GEOLOGY.Soil1_FractionsCobbleComment',
                        type: 'TEXT',
                        order: 3670,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Comment>',
                        xmlEnd: '</Comment>',
                      },
                    ],
                  },

                  {
                    order: 3690,
                    exportYN: true,
                    hasDataYN: true,
                    xmlStart: '<Boulder>',
                    xmlEnd: '</Boulder>',
                    children:
                    [

                      {
                        order: 3700,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil1_Main == "BOULDERS"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>35db735c-e9ec-4f86-833b-baa6857d055f</Key><Value>MAJOR</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 3710,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil1_Subordinate == "bouldery"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>83f345b8-0876-4bf7-92fa-1d0b94620428</Key><Value>Subord</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 3720,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil1_Some == "boulders"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>44d42880-9668-46b4-9443-a317e3565157</Key><Value>Some</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 3730,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil1_Minor == "boulders"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>af4e8164-1ddc-4f10-b4bf-bc9775f91697</Key><Value>Minor</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 3740,
                        exportYN: true,
                        logic: 'GEOLOGY.Soil1_Trace == "boulders"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>e84fe9c0-4176-4c19-ae15-2fe534746f18</Key><Value>Trace</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        name: 'GEOLOGY.Soil1_FractionsBoulderMaterial',
                        type: 'MULTIPICK',
                        order: 3750,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Material>',
                        xmlEnd: '</Material>',
                      },

                      {
                        name: 'GEOLOGY.Soil1_FractionsBoulderSizeMinMaxStep',
                        type: 'NUMBER',
                        order: 3760,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '<SizeValue><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></SizeValue>',
                      },

                      {
                        name: 'GEOLOGY.Soil1_FractionsBoulderShape',
                        type: 'QUICKPICK',
                        order: 3770,
                        exportYN: true,
                        desxClass: 'Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<ShapeMin><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></ShapeMin>',
                      },

                      {
                        name: 'GEOLOGY.Soil1_FractionsBoulderWeathering',
                        type: 'QUICKPICK',
                        order: 3780,
                        exportYN: true,
                        desxClass: 'Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<WeatherMin><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></WeatherMin>',
                      },

                      {
                        name: 'GEOLOGY.Soil1_FractionsBoulderComment',
                        type: 'TEXT',
                        order: 3790,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Comment>',
                        xmlEnd: '</Comment>',
                      },
                    ],
                  },

                  {
                    order: 3810,
                    exportYN: true,
                    hasDataYN: true,
                    xmlStart: '<UserDefined><Tag>udfsoilFracStrength</Tag>',
                    xmlEnd: '</UserDefined>',
                    children:
                    [

                      {
                        name: 'GEOLOGY.Soil1_FractionsUserDefinedItemFractionStrengthGravel',
                        type: 'QUICKPICK',
                        order: 3830,
                        exportYN: true,
                        desxClass: 'UserDef_Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<Gravel><Tag /><Minimum><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></Minimum></Gravel>',
                      },

                      {
                        name: 'GEOLOGY.Soil1_FractionsUserDefinedItemFractionStrengthCobble',
                        type: 'QUICKPICK',
                        order: 3840,
                        exportYN: true,
                        desxClass: 'UserDef_Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<Cobble><Tag /><Minimum><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></Minimum></Cobble>',
                      },

                      {
                        name: 'GEOLOGY.Soil1_FractionsUserDefinedItemFractionStrengthBoulder',
                        type: 'QUICKPICK',
                        order: 3850,
                        exportYN: true,
                        desxClass: 'UserDef_Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<Boulder><Tag /><Minimum><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></Minimum></Boulder>',
                      },
                    ],
                  },

                  {
                    order: 3870,
                    exportYN: true,
                    hasDataYN: true,
                    xmlStart: '<UserDefined><Tag>udfsoilFracColour</Tag>',
                    xmlEnd: '</UserDefined>',
                    children:
                    [

                      {
                        name: 'GEOLOGY.Soil1_FractionsUserDefinedItemFractionColourSand',
                        type: 'MULTIPICK',
                        order: 3880,
                        exportYN: true,
                        desxClass: 'UserDef_Frac_Value',
                        hasDataYN: true,
                        xmlStart: '<Sand><Tag /><Minimum><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></Minimum></Sand>',
                      },

                      {
                        name: 'GEOLOGY.Soil1_FractionsUserDefinedItemFractionColourGravel',
                        type: 'MULTIPICK',
                        order: 3890,
                        exportYN: true,
                        desxClass: 'UserDef_Frac_Value',
                        hasDataYN: true,
                        xmlStart: '<Gravel><Tag /><Minimum><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></Minimum></Gravel>',
                      },

                      {
                        name: 'GEOLOGY.Soil1_FractionsUserDefinedItemFractionColourCobble',
                        type: 'MULTIPICK',
                        order: 3900,
                        exportYN: true,
                        desxClass: 'UserDef_Frac_Value',
                        hasDataYN: true,
                        xmlStart: '<Cobble><Tag /><Minimum><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></Minimum></Cobble>',
                      },

                      {
                        name: 'GEOLOGY.Soil1_FractionsUserDefinedItemFractionColourBoulder',
                        type: 'MULTIPICK',
                        order: 3910,
                        exportYN: true,
                        desxClass: 'UserDef_Frac_Value',
                        hasDataYN: true,
                        xmlStart: '<Boulder><Tag /><Minimum><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></Minimum></Boulder>',
                      },
                    ],
                  },

                  {
                    order: 3930,
                    exportYN: true,
                    hasDataYN: true,
                    xmlStart: '<UserDefined><Tag>udfsoilOrganicMaterials</Tag>',
                    xmlEnd: '</UserDefined>',
                    children:
                    [

                      {
                        name: 'GEOLOGY.Soil1_FractionsUserDefinedItemOrganicMaterialsOrganic',
                        type: 'MULTIPICK',
                        order: 3940,
                        exportYN: true,
                        desxClass: 'UserDef_Frac_Value',
                        hasDataYN: true,
                        xmlStart: '<Organic><Tag /><Minimum><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></Minimum></Organic>',
                      },
                    ],
                  },
                ],
              },

              {
                name: 'GEOLOGY.Soil1_Comment',
                type: 'TEXT',
                order: 3970,
                exportYN: true,
                desxClass: 'Value',
                hasDataYN: true,
                xmlStart: '',
                value: '<Comment>',
                xmlEnd: '</Comment>',
              },

              {
                name: 'GEOLOGY.Soil1_UserDefinedSensitivity',
                type: 'QUICKPICK',
                order: 3980,
                exportYN: true,
                desxClass: 'UserDef_KeyValue',
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfsoilSensitivity</Tag><Minimum><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Minimum></UserDefined>',
              },

              {
                name: 'GEOLOGY.Soil1_UserDefinedWeathering',
                type: 'QUICKPICK',
                order: 3990,
                exportYN: true,
                desxClass: 'UserDef_KeyValue',
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfsoilWeathering</Tag><Minimum><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Minimum></UserDefined>',
              },

              {
                name: 'GEOLOGY.Soil1_UserDefinedItemFillMaterials',
                type: 'MULTIPICK',
                order: 4000,
                exportYN: true,
                desxClass: 'UserDef_Value',
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfsoilFillMaterials</Tag><Minimum><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Minimum></UserDefined>',
              },

              {
                name: 'GEOLOGY.Soil1_UserDefinedItemNoDescription',
                type: 'MULTIPICK',
                order: 4020,
                exportYN: true,
                desxClass: 'UserDef_Value',
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfsoilNoDescription</Tag><Minimum><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Minimum></UserDefined>',
              },
            ],
          },

          {
            order: 4040,
            exportYN: true,
            logic: 'GEOLOGY.LayerClass1 == "Sedimentary" || GEOLOGY.LayerClass1 == "Pyroclastic" || GEOLOGY.LayerClass1 == "Volcanic" || GEOLOGY.LayerClass1 == "Igneous" || GEOLOGY.LayerClass1 == "Metamorphic" || GEOLOGY.LayerClass1 == "Anthropogenic" || GEOLOGY.LayerClass1 == "NoDescriptionRock"',
            hasDataYN: true,
            xmlStart: '<Rock><ID>1</ID>',
            xmlEnd: '</Rock>',
            children:
            [

              {
                name: 'GEOLOGY.Rock1_Concatenation',
                type: 'QUICKPICK',
                order: 4050,
                exportYN: true,
                desxClass: 'KeyValue',
                hasDataYN: true,
                xmlStart: '<Concatenation><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Concatenation>',
              },

              {
                name: 'GEOLOGY.Rock1_Prefix',
                type: 'MULTIPICK',
                order: 4060,
                exportYN: true,
                desxClass: 'Value',
                hasDataYN: true,
                xmlStart: '<Prefix><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Prefix>',
              },

              {
                name: 'GEOLOGY.Rock1_Name',
                type: 'QUICKPICK',
                order: 4070,
                exportYN: true,
                desxClass: 'KeyValue',
                hasDataYN: true,
                xmlStart: '<Name><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Name>',
              },

              {
                name: 'GEOLOGY.Rock1_Suffix',
                type: 'MULTIPICK',
                order: 4080,
                exportYN: true,
                desxClass: 'Value',
                hasDataYN: true,
                xmlStart: '<Suffix><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Suffix>',
              },

              {
                name: 'GEOLOGY.Rock1_GrainSize',
                type: 'QUICKPICK',
                order: 4090,
                exportYN: true,
                desxClass: 'KeyValue',
                hasDataYN: true,
                xmlStart: '<GrainSize><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></GrainSize>',
              },

              {
                name: 'GEOLOGY.Rock1_Texture',
                type: 'MULTIPICK',
                order: 4100,
                exportYN: true,
                desxClass: 'Value',
                hasDataYN: true,
                xmlStart: '<Texture><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Texture>',
              },

              {
                name: 'GEOLOGY.Rock1_Fabric',
                type: 'MULTIPICK',
                order: 4110,
                exportYN: true,
                desxClass: 'Value',
                hasDataYN: true,
                xmlStart: '<Fabric><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Fabric>',
              },

              {
                name: 'GEOLOGY.Rock1_LayerType',
                type: 'QUICKPICK',
                order: 4120,
                exportYN: true,
                desxClass: 'KeyValue',
                hasDataYN: true,
                xmlStart: '<LayerType><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></LayerType>',
              },

              {
                name: 'GEOLOGY.Rock1_ColorText',
                type: 'MULTIPICK',
                order: 4125,
                exportYN: true,
                desxClass: 'Value',
                hasDataYN: true,
                xmlStart: '',
                value: '<ColorText>',
                xmlEnd: '</ColorText>',
              },

              {
                name: 'GEOLOGY.Rock1_Strength',
                type: 'QUICKPICK',
                order: 4130,
                exportYN: true,
                desxClass: 'KeyValue',
                hasDataYN: true,
                xmlStart: '<Strength><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Strength>',
              },

              {
                name: 'GEOLOGY.Rock1_Weathering',
                type: 'QUICKPICK',
                order: 4140,
                exportYN: true,
                desxClass: 'KeyValue',
                hasDataYN: true,
                xmlStart: '<Weathering><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Weathering>',
              },

              {
                name: 'GEOLOGY.Rock1_Comments',
                type: 'TEXT',
                order: 4160,
                exportYN: true,
                desxClass: 'Value',
                hasDataYN: true,
                xmlStart: '',
                value: '<Comment>',
                xmlEnd: '</Comment>',
              },

              {
                name: 'GEOLOGY.Rock1_UserDefinedOrigin',
                type: 'MULTIPICK',
                order: 4170,
                exportYN: true,
                desxClass: 'UserDef_Value',
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfrockOrigin</Tag><Minimum><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Minimum></UserDefined>',
              },

              {
                name: 'GEOLOGY.Rock1_UserDefinedItemNoDescriptionRock',
                type: 'MULTIPICK',
                order: 4190,
                exportYN: true,
                desxClass: 'UserDef_Value',
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfrockNoDescriptionRock</Tag><Minimum><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Minimum></UserDefined>',
              },

              {
                name: 'GEOLOGY.Rock1_UserDefinedCement',
                type: 'QUICKPICK',
                order: 4200,
                exportYN: true,
                desxClass: 'UserDef_KeyValue',
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfrockCement</Tag><Minimum><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Minimum></UserDefined>',
              },

              {
                order: 4210,
                exportYN: true,
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfrockLayerInclinationClass</Tag>',
                xmlEnd: '</UserDefined>',
              },

              {
                order: 4250,
                exportYN: true,
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfrockLayerThicknessClass</Tag>',
                xmlEnd: '</UserDefined>',
              },

              {
                order: 4290,
                exportYN: true,
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfrockLayerSpacingClass</Tag>',
                xmlEnd: '</UserDefined>',
              },

              {
                order: 4330,
                exportYN: true,
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfrockInclinationNumeric</Tag>',
                xmlEnd: '</UserDefined>',
                children:
                [

                  {
                    name: 'GEOLOGY.Rock1_UserDefinedInclinationNumericMin',
                    type: 'NUMBER',
                    order: 4340,
                    exportYN: true,
                    desxClass: 'UserDef_Value_Part1',
                    hasDataYN: true,
                    xmlStart: '<Minimum><Key>',
                    value: '</Key><Value>',
                    xmlEnd: '</Value></Minimum>',
                  },

                  {
                    name: 'GEOLOGY.Rock1_UserDefinedInclinationNumericMax',
                    type: 'NUMBER',
                    order: 4350,
                    exportYN: true,
                    desxClass: 'UserDef_Value_part2 optional',
                    hasDataYN: true,
                    xmlStart: '<Joiner><Key>2eb1d827-0404-4c98-9494-57908b1b097e</Key><Value>to</Value></Joiner><Maximum><Key>',
                    value: '</Key><Value>',
                    xmlEnd: '</Value></Maximum>',
                  },
                ],
              },

              {
                order: 4370,
                exportYN: true,
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfrockThicknessNumeric</Tag>',
                xmlEnd: '</UserDefined>',
                children:
                [

                  {
                    name: 'GEOLOGY.Rock1_UserDefinedThicknessNumericMin',
                    type: 'NUMBER',
                    order: 4380,
                    exportYN: true,
                    desxClass: 'UserDef_Value_Part1',
                    hasDataYN: true,
                    xmlStart: '<Minimum><Key>',
                    value: '</Key><Value>',
                    xmlEnd: '</Value></Minimum>',
                  },

                  {
                    name: 'GEOLOGY.Rock1_UserDefinedThicknessNumericMax',
                    type: 'NUMBER',
                    order: 4390,
                    exportYN: true,
                    desxClass: 'UserDef_Value_part2 optional',
                    hasDataYN: true,
                    xmlStart: '<Joiner><Key>d17eb126-8032-4ff0-bec3-ee33c3d7aa13</Key><Value>to</Value></Joiner><Maximum><Key>',
                    value: '</Key><Value>',
                    xmlEnd: '</Value></Maximum>',
                  },
                ],
              },

              {
                order: 4410,
                exportYN: true,
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfrockSpacingNumeric</Tag>',
                xmlEnd: '</UserDefined>',
                children:
                [

                  {
                    name: 'GEOLOGY.Rock1_UserDefinedSpacingNumericMin',
                    type: 'NUMBER',
                    order: 4420,
                    exportYN: true,
                    desxClass: 'UserDef_Value_Part1',
                    hasDataYN: true,
                    xmlStart: '<Minimum><Key>',
                    value: '</Key><Value>',
                    xmlEnd: '</Value></Minimum>',
                  },

                  {
                    name: 'GEOLOGY.Rock1_UserDefinedSpacingNumericMax',
                    type: 'NUMBER',
                    order: 4430,
                    exportYN: true,
                    desxClass: 'UserDef_Value_part2 optional',
                    hasDataYN: true,
                    xmlStart: '<Joiner><Key>91672a52-6e68-4bfc-9406-c72aad9d2e7c</Key><Value>to</Value></Joiner><Maximum><Key>',
                    value: '</Key><Value>',
                    xmlEnd: '</Value></Maximum>',
                  },
                ],
              },

              {
                name: 'GEOLOGY.Rock1_UserDefinedSuffixComment',
                type: 'TEXT',
                order: 4450,
                exportYN: true,
                desxClass: 'UserDef_Value',
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfrockSuffixComment</Tag><Minimum><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Minimum></UserDefined>',
              },
            ],
          },
        ],
      },
    ],
  },
  ]
}

export const XmlGeologyDetail = {
  name: 'GeologyDetail',
  order: 4500,
  xmlStart: '<GeologyDetail>',
  xmlEnd: '</GeologyDetail>',
  features:
  [
  
  {
    name: 'POINT.POINT_ID',
    type: 'TEXT',
    order: 4510,
    exportYN: true,
    hasDataYN: true,
    xmlStart: '<POINT_ID>',
    xmlEnd: '</POINT_ID>',
    referValue: {
      workflow: 'POINT',
      feature: 'POINT.POINT_ID',
    }
  },
  
  {
    name: 'GeologyDetail.TOP',
    type: 'NUMBER',
    order: 4520,
    exportYN: true,
    hasDataYN: true,
    xmlStart: '<TOP>',
    xmlEnd: '</TOP>',
  },
  
  {
    name: 'GeologyDetail.Base',
    type: 'NUMBER',
    order: 4530,
    exportYN: true,
    hasDataYN: true,
    xmlStart: '<Base>',
    xmlEnd: '</Base>',
  },
  
  {
    name: 'GeologyDetail.Lense',
    type: 'BIT',
    order: 4540,
    exportYN: true,
    hasDataYN: true,
    xmlStart: '<Lense>',
    xmlEnd: '</Lense>',
  },
  
  {
    name: 'GeologyDetail.Remarks',
    type: 'TEXT',
    order: 4580,
    exportYN: true,
    hasDataYN: true,
    xmlStart: '<Remarks>',
    xmlEnd: '</Remarks>',
  },
  
  {
    name: 'GeologyDetail.Legend',
    type: 'TEXT',
    order: 4590,
    exportYN: true,
    hasDataYN: true,
    xmlStart: '<Legend>',
    xmlEnd: '</Legend>',
  },
  
  {
    order: 4600,
    exportYN: true,
    hasDataYN: true,
    xmlStart: '<DESX>',
    xmlEnd: '</DESX>',
    isEncode: true,
    children:
    [

      {
        order: 4610,
        exportYN: true,
        hasDataYN: true,
        xmlStart: '<Data><Version>1.0</Version><DataSettings>',
        xmlEnd: '</DataSettings></Data>',
        children:
        [

          {
            order: 4620,
            exportYN: true,
            hasDataYN: true,
            xmlStart: '<Order>',
            xmlEnd: '</Order>',
            children:
            [

              {
                order: 4630,
                exportYN: true,
                logic: 'GeologyDetail.LayerClassDetail == "Cohesive" || GeologyDetail.LayerClassDetail == "Granular" || GeologyDetail.LayerClassDetail == "NoDescriptionSoil"',
                hasDataYN: true,
                xmlStart: '<Item>Soil_0</Item>',
                xmlEnd: '',
              },

              {
                order: 4640,
                exportYN: true,
                logic: 'GeologyDetail.LayerClassDetail == "Sedimentary" || GeologyDetail.LayerClassDetail == "Pyroclastic" || GeologyDetail.LayerClassDetail == "Volcanic" || GeologyDetail.LayerClassDetail == "Igneous" || GeologyDetail.LayerClassDetail == "Metamorphic" || GeologyDetail.LayerClassDetail == "Anthropogenic" || GeologyDetail.LayerClassDetail == "NoDescriptionRock"',
                hasDataYN: true,
                xmlStart: '<Item>Rock_0</Item>',
                xmlEnd: '',
              },
            ],
          },

          {
            order: 4670,
            exportYN: true,
            logic: 'GeologyDetail.LayerClassDetail == "Cohesive" || GeologyDetail.LayerClassDetail == "Granular" || GeologyDetail.LayerClassDetail == "NoDescriptionSoil"',
            hasDataYN: true,
            xmlStart: '<Soil><ID>0</ID>',
            xmlEnd: '</Soil>',
            children:
            [

              {
                name: 'GeologyDetail.Soil_ColorText',
                type: 'MULTIPICK',
                order: 4680,
                exportYN: true,
                desxClass: 'Value',
                hasDataYN: true,
                xmlStart: '',
                value: '<ColorText>',
                xmlEnd: '</ColorText>',
              },

              {
                name: 'GeologyDetail.Soil_Concatenation',
                type: 'QUICKPICK',
                order: 4690,
                exportYN: true,
                desxClass: 'KeyValue',
                hasDataYN: true,
                xmlStart: '<Concatenation><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Concatenation>',
              },

              {
                name: 'GeologyDetail.Soil_Prefix',
                type: 'QUICKPICK',
                order: 4750,
                exportYN: true,
                desxClass: 'KeyValue',
                hasDataYN: true,
                xmlStart: '<Prefix><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Prefix>',
              },

              {
                name: 'GeologyDetail.Soil_Suffix',
                type: 'TEXT',
                order: 4760,
                exportYN: true,
                desxClass: 'Value',
                hasDataYN: true,
                xmlStart: '<Suffix><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Suffix>',
              },

              {
                name: 'GeologyDetail.Soil_Moisture',
                type: 'QUICKPICK',
                order: 4770,
                exportYN: true,
                desxClass: 'KeyValue',
                hasDataYN: true,
                xmlStart: '<Moisture><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Moisture>',
              },

              {
                name: 'GeologyDetail.Soil_Structure',
                type: 'MULTIPICK',
                order: 4780,
                exportYN: true,
                desxClass: 'Value',
                hasDataYN: true,
                xmlStart: '<Structure><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Structure>',
              },

              {
                name: 'GeologyDetail.Soil_Strength',
                type: 'QUICKPICK',
                order: 4790,
                exportYN: true,
                desxClass: 'KeyValue',
                hasDataYN: true,
                xmlStart: '<Strength><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Strength>',
              },

              {
                name: 'GeologyDetail.Soil_Plasticity',
                type: 'QUICKPICK',
                order: 4800,
                exportYN: true,
                desxClass: 'KeyValue',
                hasDataYN: true,
                xmlStart: '<Plasticity><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Plasticity>',
              },

              {
                name: 'GeologyDetail.Soil_Distribution',
                type: 'QUICKPICK',
                order: 4810,
                exportYN: true,
                desxClass: 'KeyValue',
                hasDataYN: true,
                xmlStart: '<Distribution><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Distribution>',
              },

              {
                name: 'GeologyDetail.Soil_Origin',
                type: 'MULTIPICK',
                order: 4830,
                exportYN: true,
                desxClass: 'Value',
                hasDataYN: true,
                xmlStart: '<Origin><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Origin>',
              },

              {
                order: 4840,
                exportYN: true,
                hasDataYN: true,
                xmlStart: '<Fractions>',
                xmlEnd: '</Fractions>',
                children:
                [

                  {
                    order: 4850,
                    exportYN: true,
                    hasDataYN: true,
                    xmlStart: '<Organic>',
                    xmlEnd: '</Organic>',
                    children:
                    [

                      {
                        order: 4860,
                        exportYN: true,
                        logic: 'GeologyDetail.Soil_Main == "ORGANICS"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>35db735c-e9ec-4f86-833b-baa6857d055f</Key><Value>MAJOR</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 4870,
                        exportYN: true,
                        logic: 'GeologyDetail.Soil_Subordinate == "organic"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>83f345b8-0876-4bf7-92fa-1d0b94620428</Key><Value>Subord</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 4880,
                        exportYN: true,
                        logic: 'GeologyDetail.Soil_Some == "organic"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>44d42880-9668-46b4-9443-a317e3565157</Key><Value>Some</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 4890,
                        exportYN: true,
                        logic: 'GeologyDetail.Soil_Minor == "organic"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>af4e8164-1ddc-4f10-b4bf-bc9775f91697</Key><Value>Minor</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 4900,
                        exportYN: true,
                        logic: 'GeologyDetail.Soil_Trace == "organic"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>e84fe9c0-4176-4c19-ae15-2fe534746f18</Key><Value>Trace</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        name: 'GeologyDetail.Soil_FractionsOrganicMaterial',
                        type: 'QUICKPICK',
                        order: 4910,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Material>',
                        xmlEnd: '</Material>',
                      },

                      {
                        name: 'GeologyDetail.Soil_FractionsOrganicComment',
                        type: 'TEXT',
                        order: 4920,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Comment>',
                        xmlEnd: '</Comment>',
                      },
                    ],
                  },

                  {
                    order: 4940,
                    exportYN: true,
                    hasDataYN: true,
                    xmlStart: '<Clay>',
                    xmlEnd: '</Clay>',
                    children:
                    [

                      {
                        order: 4950,
                        exportYN: true,
                        logic: 'GeologyDetail.Soil_Main == "CLAY"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>35db735c-e9ec-4f86-833b-baa6857d055f</Key><Value>MAJOR</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 4960,
                        exportYN: true,
                        logic: 'GeologyDetail.Soil_Subordinate == "clayey"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>83f345b8-0876-4bf7-92fa-1d0b94620428</Key><Value>Subord</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 4970,
                        exportYN: true,
                        logic: 'GeologyDetail.Soil_Some == "clay"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>44d42880-9668-46b4-9443-a317e3565157</Key><Value>Some</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 4980,
                        exportYN: true,
                        logic: 'GeologyDetail.Soil_Minor == "clay"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>af4e8164-1ddc-4f10-b4bf-bc9775f91697</Key><Value>Minor</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 4990,
                        exportYN: true,
                        logic: 'GeologyDetail.Soil_Trace == "clay"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>e84fe9c0-4176-4c19-ae15-2fe534746f18</Key><Value>Trace</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        name: 'GeologyDetail.Soil_FractionsClayComment',
                        type: 'TEXT',
                        order: 5000,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Comment>',
                        xmlEnd: '</Comment>',
                      },
                    ],
                  },

                  {
                    order: 5020,
                    exportYN: true,
                    hasDataYN: true,
                    xmlStart: '<Silt>',
                    xmlEnd: '</Silt>',
                    children:
                    [

                      {
                        order: 5030,
                        exportYN: true,
                        logic: 'GeologyDetail.Soil_Main == "SILT"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>35db735c-e9ec-4f86-833b-baa6857d055f</Key><Value>MAJOR</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 5040,
                        exportYN: true,
                        logic: 'GeologyDetail.Soil_Subordinate == "silty"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>83f345b8-0876-4bf7-92fa-1d0b94620428</Key><Value>Subord</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 5050,
                        exportYN: true,
                        logic: 'GeologyDetail.Soil_Some == "silt"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>44d42880-9668-46b4-9443-a317e3565157</Key><Value>Some</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 5060,
                        exportYN: true,
                        logic: 'GeologyDetail.Soil_Minor == "silt"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>af4e8164-1ddc-4f10-b4bf-bc9775f91697</Key><Value>Minor</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 5070,
                        exportYN: true,
                        logic: 'GeologyDetail.Soil_Trace == "silt"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>e84fe9c0-4176-4c19-ae15-2fe534746f18</Key><Value>Trace</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        name: 'GeologyDetail.Soil_FractionsSiltComment',
                        type: 'TEXT',
                        order: 5080,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Comment>',
                        xmlEnd: '</Comment>',
                      },
                    ],
                  },

                  {
                    order: 5100,
                    exportYN: true,
                    hasDataYN: true,
                    xmlStart: '<Sand>',
                    xmlEnd: '</Sand>',
                    children:
                    [

                      {
                        order: 5110,
                        exportYN: true,
                        logic: 'GeologyDetail.Soil_Main == "SAND"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>35db735c-e9ec-4f86-833b-baa6857d055f</Key><Value>MAJOR</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 5120,
                        exportYN: true,
                        logic: 'GeologyDetail.Soil_Subordinate == "sandy"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>83f345b8-0876-4bf7-92fa-1d0b94620428</Key><Value>Subord</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 5130,
                        exportYN: true,
                        logic: 'GeologyDetail.Soil_Some == "sand"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>44d42880-9668-46b4-9443-a317e3565157</Key><Value>Some</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 5140,
                        exportYN: true,
                        logic: 'GeologyDetail.Soil_Minor == "sand"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>af4e8164-1ddc-4f10-b4bf-bc9775f91697</Key><Value>Minor</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 5150,
                        exportYN: true,
                        logic: 'GeologyDetail.Soil_Trace == "sand"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>e84fe9c0-4176-4c19-ae15-2fe534746f18</Key><Value>Trace</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        name: 'GeologyDetail.Soil_FractionsSandMaterial',
                        type: 'MULTIPICK',
                        order: 5160,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Material>',
                        xmlEnd: '</Material>',
                      },

                      {
                        name: 'GeologyDetail.Soil_FractionsSandSize',
                        type: 'QUICKPICK',
                        order: 5170,
                        exportYN: true,
                        desxClass: 'Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<SizeMin><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></SizeMin>',
                      },

                      {
                        name: 'GeologyDetail.Soil_FractionsSandSizeMinMaxStep',
                        type: 'NUMBER',
                        order: 5180,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '<SizeValue><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></SizeValue>',
                      },

                      {
                        name: 'GeologyDetail.Soil_FractionsSandShape',
                        type: 'QUICKPICK',
                        order: 5190,
                        exportYN: true,
                        desxClass: 'Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<ShapeMin><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></ShapeMin>',
                      },

                      {
                        name: 'GeologyDetail.Soil_FractionsSandComment',
                        type: 'TEXT',
                        order: 5210,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Comment>',
                        xmlEnd: '</Comment>',
                      },
                    ],
                  },

                  {
                    order: 5230,
                    exportYN: true,
                    hasDataYN: true,
                    xmlStart: '<Gravel>',
                    xmlEnd: '</Gravel>',
                    children:
                    [

                      {
                        order: 5240,
                        exportYN: true,
                        logic: 'GeologyDetail.Soil_Main == "GRAVEL"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>35db735c-e9ec-4f86-833b-baa6857d055f</Key><Value>MAJOR</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 5250,
                        exportYN: true,
                        logic: 'GeologyDetail.Soil_Subordinate == "gravelly"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>83f345b8-0876-4bf7-92fa-1d0b94620428</Key><Value>Subord</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 5260,
                        exportYN: true,
                        logic: 'GeologyDetail.Soil_Some == "gravel"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>44d42880-9668-46b4-9443-a317e3565157</Key><Value>Some</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 5270,
                        exportYN: true,
                        logic: 'GeologyDetail.Soil_Minor == "gravel"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>af4e8164-1ddc-4f10-b4bf-bc9775f91697</Key><Value>Minor</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 5280,
                        exportYN: true,
                        logic: 'GeologyDetail.Soil_Trace == "gravel"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>e84fe9c0-4176-4c19-ae15-2fe534746f18</Key><Value>Trace</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        name: 'GeologyDetail.Soil_FractionsGravelMaterial',
                        type: 'MULTIPICK',
                        order: 5290,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Material>',
                        xmlEnd: '</Material>',
                      },

                      {
                        name: 'GeologyDetail.Soil_FractionsGravelSize',
                        type: 'QUICKPICK',
                        order: 5300,
                        exportYN: true,
                        desxClass: 'Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<SizeMin><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></SizeMin>',
                      },

                      {
                        name: 'GeologyDetail.Soil_FractionsGravelSizeMinMaxStep',
                        type: 'NUMBER',
                        order: 5310,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '<SizeValue><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></SizeValue>',
                      },

                      {
                        name: 'GeologyDetail.Soil_FractionsGravelShape',
                        type: 'QUICKPICK',
                        order: 5320,
                        exportYN: true,
                        desxClass: 'Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<ShapeMin><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></ShapeMin>',
                      },

                      {
                        name: 'GeologyDetail.Soil_FractionsGravelWeathering',
                        type: 'QUICKPICK',
                        order: 5330,
                        exportYN: true,
                        desxClass: 'Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<WeatherMin><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></WeatherMin>',
                      },

                      {
                        name: 'GeologyDetail.Soil_FractionsGravelComment',
                        type: 'TEXT',
                        order: 5340,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Comment>',
                        xmlEnd: '</Comment>',
                      },
                    ],
                  },

                  {
                    order: 5360,
                    exportYN: true,
                    hasDataYN: true,
                    xmlStart: '<Cobble>',
                    xmlEnd: '</Cobble>',
                    children:
                    [

                      {
                        order: 5370,
                        exportYN: true,
                        logic: 'GeologyDetail.Soil_Main == "COBBLES"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>35db735c-e9ec-4f86-833b-baa6857d055f</Key><Value>MAJOR</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 5380,
                        exportYN: true,
                        logic: 'GeologyDetail.Soil_Subordinate == "cobbly"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>83f345b8-0876-4bf7-92fa-1d0b94620428</Key><Value>Subord</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 5390,
                        exportYN: true,
                        logic: 'GeologyDetail.Soil_Some == "cobbles"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>44d42880-9668-46b4-9443-a317e3565157</Key><Value>Some</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 5400,
                        exportYN: true,
                        logic: 'GeologyDetail.Soil_Minor == "cobbles"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>af4e8164-1ddc-4f10-b4bf-bc9775f91697</Key><Value>Minor</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 5410,
                        exportYN: true,
                        logic: 'GeologyDetail.Soil_Trace == "cobbles"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>e84fe9c0-4176-4c19-ae15-2fe534746f18</Key><Value>Trace</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        name: 'GeologyDetail.Soil_FractionsCobbleMaterial',
                        type: 'MULTIPICK',
                        order: 5420,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Material>',
                        xmlEnd: '</Material>',
                      },

                      {
                        name: 'GeologyDetail.Soil_FractionsCobbleSizeMinMaxStep',
                        type: 'NUMBER',
                        order: 5430,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '<SizeValue><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></SizeValue>',
                      },

                      {
                        name: 'GeologyDetail.Soil_FractionsCobbleShape',
                        type: 'QUICKPICK',
                        order: 5440,
                        exportYN: true,
                        desxClass: 'Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<ShapeMin><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></ShapeMin>',
                      },

                      {
                        name: 'GeologyDetail.Soil_FractionsCobbleWeathering',
                        type: 'QUICKPICK',
                        order: 5450,
                        exportYN: true,
                        desxClass: 'Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<WeatherMin><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></WeatherMin>',
                      },

                      {
                        name: 'GeologyDetail.Soil_FractionsCobbleComment',
                        type: 'TEXT',
                        order: 5460,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Comment>',
                        xmlEnd: '</Comment>',
                      },
                    ],
                  },

                  {
                    order: 5480,
                    exportYN: true,
                    hasDataYN: true,
                    xmlStart: '<Boulder>',
                    xmlEnd: '</Boulder>',
                    children:
                    [

                      {
                        order: 5490,
                        exportYN: true,
                        logic: 'GeologyDetail.Soil_Main == "BOULDERS"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>35db735c-e9ec-4f86-833b-baa6857d055f</Key><Value>MAJOR</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 5500,
                        exportYN: true,
                        logic: 'GeologyDetail.Soil_Subordinate == "bouldery"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>83f345b8-0876-4bf7-92fa-1d0b94620428</Key><Value>Subord</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 5510,
                        exportYN: true,
                        logic: 'GeologyDetail.Soil_Some == "boulders"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>44d42880-9668-46b4-9443-a317e3565157</Key><Value>Some</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 5520,
                        exportYN: true,
                        logic: 'GeologyDetail.Soil_Minor == "boulders"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>af4e8164-1ddc-4f10-b4bf-bc9775f91697</Key><Value>Minor</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        order: 5530,
                        exportYN: true,
                        logic: 'GeologyDetail.Soil_Trace == "boulders"',
                        desxClass: 'ProportionPickOneOf',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Proportion><Key>e84fe9c0-4176-4c19-ae15-2fe534746f18</Key><Value>Trace</Value></Proportion>',
                        xmlEnd: '',
                      },

                      {
                        name: 'GeologyDetail.Soil_FractionsBoulderMaterial',
                        type: 'MULTIPICK',
                        order: 5540,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Material>',
                        xmlEnd: '</Material>',
                      },

                      {
                        name: 'GeologyDetail.Soil_FractionsBoulderSizeMinMaxStep',
                        type: 'NUMBER',
                        order: 5550,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '<SizeValue><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></SizeValue>',
                      },

                      {
                        name: 'GeologyDetail.Soil_FractionsBoulderShape',
                        type: 'QUICKPICK',
                        order: 5560,
                        exportYN: true,
                        desxClass: 'Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<ShapeMin><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></ShapeMin>',
                      },

                      {
                        name: 'GeologyDetail.Soil_FractionsBoulderWeathering',
                        type: 'QUICKPICK',
                        order: 5570,
                        exportYN: true,
                        desxClass: 'Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<WeatherMin><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></WeatherMin>',
                      },

                      {
                        name: 'GeologyDetail.Soil_FractionsBoulderComment',
                        type: 'TEXT',
                        order: 5580,
                        exportYN: true,
                        desxClass: 'Frac_Value',
                        hasDataYN: true,
                        xmlStart: '',
                        value: '<Comment>',
                        xmlEnd: '</Comment>',
                      },
                    ],
                  },

                  {
                    order: 5600,
                    exportYN: true,
                    hasDataYN: true,
                    xmlStart: '<UserDefined><Tag>udfsoilFracStrength</Tag>',
                    xmlEnd: '</UserDefined>',
                    children:
                    [

                      {
                        name: 'GeologyDetail.Soil_FractionsUserDefinedItemFractionStrengthGravel',
                        type: 'QUICKPICK',
                        order: 5620,
                        exportYN: true,
                        desxClass: 'UserDef_Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<Gravel><Tag /><Minimum><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></Minimum></Gravel>',
                      },

                      {
                        name: 'GeologyDetail.Soil_FractionsUserDefinedItemFractionStrengthCobble',
                        type: 'QUICKPICK',
                        order: 5630,
                        exportYN: true,
                        desxClass: 'UserDef_Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<Cobble><Tag /><Minimum><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></Minimum></Cobble>',
                      },

                      {
                        name: 'GeologyDetail.Soil_FractionsUserDefinedItemFractionStrengthBoulder',
                        type: 'QUICKPICK',
                        order: 5640,
                        exportYN: true,
                        desxClass: 'UserDef_Frac_KeyValue',
                        hasDataYN: true,
                        xmlStart: '<Boulder><Tag /><Minimum><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></Minimum></Boulder>',
                      },
                    ],
                  },

                  {
                    order: 5660,
                    exportYN: true,
                    hasDataYN: true,
                    xmlStart: '<UserDefined><Tag>udfsoilFracColour</Tag>',
                    xmlEnd: '</UserDefined>',
                    children:
                    [

                      {
                        name: 'GeologyDetail.Soil_FractionsUserDefinedItemFractionColourSand',
                        type: 'MULTIPICK',
                        order: 5670,
                        exportYN: true,
                        desxClass: 'UserDef_Frac_Value',
                        hasDataYN: true,
                        xmlStart: '<Sand><Tag /><Minimum><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></Minimum></Sand>',
                      },

                      {
                        name: 'GeologyDetail.Soil_FractionsUserDefinedItemFractionColourGravel',
                        type: 'MULTIPICK',
                        order: 5680,
                        exportYN: true,
                        desxClass: 'UserDef_Frac_Value',
                        hasDataYN: true,
                        xmlStart: '<Gravel><Tag /><Minimum><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></Minimum></Gravel>',
                      },

                      {
                        name: 'GeologyDetail.Soil_FractionsUserDefinedItemFractionColourCobble',
                        type: 'MULTIPICK',
                        order: 5690,
                        exportYN: true,
                        desxClass: 'UserDef_Frac_Value',
                        hasDataYN: true,
                        xmlStart: '<Cobble><Tag /><Minimum><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></Minimum></Cobble>',
                      },

                      {
                        name: 'GeologyDetail.Soil_FractionsUserDefinedItemFractionColourBoulder',
                        type: 'MULTIPICK',
                        order: 5700,
                        exportYN: true,
                        desxClass: 'UserDef_Frac_Value',
                        hasDataYN: true,
                        xmlStart: '<Boulder><Tag /><Minimum><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></Minimum></Boulder>',
                      },
                    ],
                  },

                  {
                    order: 5720,
                    exportYN: true,
                    hasDataYN: true,
                    xmlStart: '<UserDefined><Tag>udfsoilOrganicMaterials</Tag>',
                    xmlEnd: '</UserDefined>',
                    children:
                    [

                      {
                        name: 'GeologyDetail.Soil_FractionsUserDefinedItemOrganicMaterialsOrganic',
                        type: 'MULTIPICK',
                        order: 5730,
                        exportYN: true,
                        desxClass: 'UserDef_Frac_Value',
                        hasDataYN: true,
                        xmlStart: '<Organic><Tag /><Minimum><Key>',
                        value: '</Key><Value>',
                        xmlEnd: '</Value></Minimum></Organic>',
                      },
                    ],
                  },
                ],
              },

              {
                name: 'GeologyDetail.Soil_Comment',
                type: 'TEXT',
                order: 5760,
                exportYN: true,
                desxClass: 'Value',
                hasDataYN: true,
                xmlStart: '',
                value: '<Comment>',
                xmlEnd: '</Comment>',
              },

              {
                name: 'GeologyDetail.Soil_UserDefinedSensitivity',
                type: 'QUICKPICK',
                order: 5770,
                exportYN: true,
                desxClass: 'UserDef_KeyValue',
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfsoilSensitivity</Tag><Minimum><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Minimum></UserDefined>',
              },

              {
                name: 'GeologyDetail.Soil_UserDefinedWeathering',
                type: 'QUICKPICK',
                order: 5780,
                exportYN: true,
                desxClass: 'UserDef_KeyValue',
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfsoilWeathering</Tag><Minimum><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Minimum></UserDefined>',
              },

              {
                name: 'GeologyDetail.Soil_UserDefinedItemFillMaterials',
                type: 'MULTIPICK',
                order: 5790,
                exportYN: true,
                desxClass: 'UserDef_Value',
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfsoilFillMaterials</Tag><Minimum><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Minimum></UserDefined>',
              },

              {
                name: 'GeologyDetail.Soil_UserDefinedItemNoDescription',
                type: 'MULTIPICK',
                order: 5810,
                exportYN: true,
                desxClass: 'UserDef_Value',
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfsoilNoDescription</Tag><Minimum><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Minimum></UserDefined>',
              },
            ],
          },

          {
            order: 5830,
            exportYN: true,
            logic: 'GeologyDetail.LayerClassDetail == "Sedimentary" || GeologyDetail.LayerClassDetail == "Pyroclastic" || GeologyDetail.LayerClassDetail == "Volcanic" || GeologyDetail.LayerClassDetail == "Igneous" || GeologyDetail.LayerClassDetail == "Metamorphic" || GeologyDetail.LayerClassDetail == "Anthropogenic" || GeologyDetail.LayerClassDetail == "NoDescriptionRock"',
            hasDataYN: true,
            xmlStart: '<Rock><ID>0</ID>',
            xmlEnd: '</Rock>',
            children:
            [

              {
                name: 'GeologyDetail.Rock_Concatenation',
                type: 'QUICKPICK',
                order: 5840,
                exportYN: true,
                desxClass: 'KeyValue',
                hasDataYN: true,
                xmlStart: '<Concatenation><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Concatenation>',
              },

              {
                name: 'GeologyDetail.Rock_Prefix',
                type: 'MULTIPICK',
                order: 5850,
                exportYN: true,
                desxClass: 'Value',
                hasDataYN: true,
                xmlStart: '<Prefix><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Prefix>',
              },

              {
                name: 'GeologyDetail.Rock_Name',
                type: 'QUICKPICK',
                order: 5860,
                exportYN: true,
                desxClass: 'KeyValue',
                hasDataYN: true,
                xmlStart: '<Name><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Name>',
              },

              {
                name: 'GeologyDetail.Rock_Suffix',
                type: 'MULTIPICK',
                order: 5870,
                exportYN: true,
                desxClass: 'Value',
                hasDataYN: true,
                xmlStart: '<Suffix><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Suffix>',
              },

              {
                name: 'GeologyDetail.Rock_GrainSize',
                type: 'QUICKPICK',
                order: 5880,
                exportYN: true,
                desxClass: 'KeyValue',
                hasDataYN: true,
                xmlStart: '<GrainSize><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></GrainSize>',
              },

              {
                name: 'GeologyDetail.Rock_Texture',
                type: 'MULTIPICK',
                order: 5890,
                exportYN: true,
                desxClass: 'Value',
                hasDataYN: true,
                xmlStart: '<Texture><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Texture>',
              },

              {
                name: 'GeologyDetail.Rock_Fabric',
                type: 'MULTIPICK',
                order: 5900,
                exportYN: true,
                desxClass: 'Value',
                hasDataYN: true,
                xmlStart: '<Fabric><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Fabric>',
              },

              {
                name: 'GeologyDetail.Rock_LayerType',
                type: 'QUICKPICK',
                order: 5910,
                exportYN: true,
                desxClass: 'KeyValue',
                hasDataYN: true,
                xmlStart: '<LayerType><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></LayerType>',
              },

              {
                name: 'GeologyDetail.Rock_ColorText',
                type: 'MULTIPICK',
                order: 5915,
                exportYN: true,
                desxClass: 'Value',
                hasDataYN: true,
                xmlStart: '',
                value: '<ColorText>',
                xmlEnd: '</ColorText>',
              },

              {
                name: 'GeologyDetail.Rock_Strength',
                type: 'QUICKPICK',
                order: 5920,
                exportYN: true,
                desxClass: 'KeyValue',
                hasDataYN: true,
                xmlStart: '<Strength><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Strength>',
              },

              {
                name: 'GeologyDetail.Rock_Weathering',
                type: 'QUICKPICK',
                order: 5930,
                exportYN: true,
                desxClass: 'KeyValue',
                hasDataYN: true,
                xmlStart: '<Weathering><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Weathering>',
              },

              {
                name: 'GeologyDetail.Rock_Comments',
                type: 'TEXT',
                order: 5950,
                exportYN: true,
                desxClass: 'Value',
                hasDataYN: true,
                xmlStart: '',
                value: '<Comment>',
                xmlEnd: '</Comment>',
              },

              {
                name: 'GeologyDetail.Rock_UserDefinedOrigin',
                type: 'MULTIPICK',
                order: 5960,
                exportYN: true,
                desxClass: 'UserDef_Value',
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfrockOrigin</Tag><Minimum><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Minimum></UserDefined>',
              },

              {
                name: 'GeologyDetail.Rock_UserDefinedItemNoDescriptionRock',
                type: 'MULTIPICK',
                order: 5980,
                exportYN: true,
                desxClass: 'UserDef_Value',
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfrockNoDescriptionRock</Tag><Minimum><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Minimum></UserDefined>',
              },

              {
                name: 'GeologyDetail.Rock_UserDefinedCement',
                type: 'QUICKPICK',
                order: 5990,
                exportYN: true,
                desxClass: 'UserDef_KeyValue',
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfrockCement</Tag><Minimum><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Minimum></UserDefined>',
              },

              {
                order: 6000,
                exportYN: true,
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfrockLayerInclinationClass</Tag>',
                xmlEnd: '</UserDefined>',
              },

              {
                order: 6040,
                exportYN: true,
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfrockLayerThicknessClass</Tag>',
                xmlEnd: '</UserDefined>',
              },

              {
                order: 6080,
                exportYN: true,
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfrockLayerSpacingClass</Tag>',
                xmlEnd: '</UserDefined>',
              },

              {
                order: 6120,
                exportYN: true,
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfrockInclinationNumeric</Tag>',
                xmlEnd: '</UserDefined>',
                children:
                [

                  {
                    name: 'GeologyDetail.Rock_UserDefinedInclinationNumericMin',
                    type: 'NUMBER',
                    order: 6130,
                    exportYN: true,
                    desxClass: 'UserDef_Value_Part1',
                    hasDataYN: true,
                    xmlStart: '<Minimum><Key>',
                    value: '</Key><Value>',
                    xmlEnd: '</Value></Minimum>',
                  },

                  {
                    name: 'GeologyDetail.Rock_UserDefinedInclinationNumericMax',
                    type: 'NUMBER',
                    order: 6140,
                    exportYN: true,
                    desxClass: 'UserDef_Value_part2 optional',
                    hasDataYN: true,
                    xmlStart: '<Joiner><Key>2eb1d827-0404-4c98-9494-57908b1b097e</Key><Value>to</Value></Joiner><Maximum><Key>',
                    value: '</Key><Value>',
                    xmlEnd: '</Value></Maximum>',
                  },
                ],
              },

              {
                order: 6160,
                exportYN: true,
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfrockThicknessNumeric</Tag>',
                xmlEnd: '</UserDefined>',
                children:
                [

                  {
                    name: 'GeologyDetail.Rock_UserDefinedThicknessNumericMin',
                    type: 'NUMBER',
                    order: 6170,
                    exportYN: true,
                    desxClass: 'UserDef_Value_Part1',
                    hasDataYN: true,
                    xmlStart: '<Minimum><Key>',
                    value: '</Key><Value>',
                    xmlEnd: '</Value></Minimum>',
                  },

                  {
                    name: 'GeologyDetail.Rock_UserDefinedThicknessNumericMax',
                    type: 'NUMBER',
                    order: 6180,
                    exportYN: true,
                    desxClass: 'UserDef_Value_part2 optional',
                    hasDataYN: true,
                    xmlStart: '<Joiner><Key>d17eb126-8032-4ff0-bec3-ee33c3d7aa13</Key><Value>to</Value></Joiner><Maximum><Key>',
                    value: '</Key><Value>',
                    xmlEnd: '</Value></Maximum>',
                  },
                ],
              },

              {
                order: 6200,
                exportYN: true,
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfrockSpacingNumeric</Tag>',
                xmlEnd: '</UserDefined>',
                children:
                [

                  {
                    name: 'GeologyDetail.Rock_UserDefinedSpacingNumericMin',
                    type: 'NUMBER',
                    order: 6210,
                    exportYN: true,
                    desxClass: 'UserDef_Value_Part1',
                    hasDataYN: true,
                    xmlStart: '<Minimum><Key>',
                    value: '</Key><Value>',
                    xmlEnd: '</Value></Minimum>',
                  },

                  {
                    name: 'GeologyDetail.Rock_UserDefinedSpacingNumericMax',
                    type: 'NUMBER',
                    order: 6220,
                    exportYN: true,
                    desxClass: 'UserDef_Value_part2 optional',
                    hasDataYN: true,
                    xmlStart: '<Joiner><Key>91672a52-6e68-4bfc-9406-c72aad9d2e7c</Key><Value>to</Value></Joiner><Maximum><Key>',
                    value: '</Key><Value>',
                    xmlEnd: '</Value></Maximum>',
                  },
                ],
              },

              {
                name: 'GeologyDetail.Rock_UserDefinedSuffixComment',
                type: 'TEXT',
                order: 6240,
                exportYN: true,
                desxClass: 'UserDef_Value',
                hasDataYN: true,
                xmlStart: '<UserDefined><Tag>udfrockSuffixComment</Tag><Minimum><Key>',
                value: '</Key><Value>',
                xmlEnd: '</Value></Minimum></UserDefined>',
              },
            ],
          },
        ],
      },
    ],
  },
  ]
}

export const XmlVane = {
  name: 'Vane',
  order: 6290,
  xmlStart: '<Vane>',
  xmlEnd: '</Vane>',
  features:
  [
  
    {
      name: 'POINT.POINT_ID',
      type: 'TEXT',
      order: 6300,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<POINT_ID>',
      xmlEnd: '</POINT_ID>',
      referValue: {
        workflow: 'POINT',
        feature: 'POINT.POINT_ID',
      }
    },
  
    {
      name: 'Vane.TOP',
      type: 'NUMBER',
      order: 6310,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<TOP>',
      xmlEnd: '</TOP>',
    },
  
    {
      name: 'Vane.ITEM',
      type: 'TEXT',
      order: 6320,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<ITEM>',
      xmlEnd: '</ITEM>',
    },
  
    {
      name: 'Vane.Type',
      type: 'QUICKPICK',
      order: 6330,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Type>',
      xmlEnd: '</Type>',
    },
  
    {
      name: 'Vane.Date',
      type: 'DATE',
      order: 6340,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Date>',
      xmlEnd: '</Date>',
    },
  
    {
      name: 'Vane.VaneID',
      type: 'TEXT',
      order: 6350,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<VaneID>',
      xmlEnd: '</VaneID>',
    },
  
    {
      name: 'Vane.Size',
      type: 'NUMBER',
      order: 6360,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Size>',
      xmlEnd: '</Size>',
    },
  
    {
      name: 'Vane.UTP',
      type: 'BIT',
      order: 6380,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<UTP>',
      xmlEnd: '</UTP>',
    },
  
    {
      name: 'Vane.PeakExceeded',
      type: 'BIT',
      order: 6390,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<PeakExceeded>',
      xmlEnd: '</PeakExceeded>',
    },
  
    {
      name: 'Vane.PeakUncorrected',
      type: 'NUMBER',
      order: 6400,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<PeakUncorrected>',
      xmlEnd: '</PeakUncorrected>',
    },
  
    {
      name: 'Vane.ResidualUncorrected',
      type: 'NUMBER',
      order: 6410,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<ResidualUncorrected>',
      xmlEnd: '</ResidualUncorrected>',
    },
  
    {
      name: 'Vane.Status',
      type: 'QUICKPICK',
      order: 6440,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Status>',
      xmlEnd: '</Status>',
    },
  
    {
      name: 'Vane.StatusRemarks',
      type: 'QUICKPICK',
      order: 6450,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<StatusRemarks>',
      xmlEnd: '</StatusRemarks>',
    },
  
    {
      name: 'Vane.Remarks',
      type: 'TEXT',
      order: 6460,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Remarks>',
      xmlEnd: '</Remarks>',
    },
  ]
}

export const XmlTT_FLDCA_ScalaPenetrometer = {
  name: 'TT_FLDCA_ScalaPenetrometer',
  order: 6480,
  xmlStart: '<TT_FLDCA_ScalaPenetrometer>',
  xmlEnd: '</TT_FLDCA_ScalaPenetrometer>',
  features:
  [
  
    {
      name: 'POINT.POINT_ID',
      type: 'TEXT',
      order: 6482,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<POINT_ID>',
      xmlEnd: '</POINT_ID>',
      referValue: {
        workflow: 'POINT',
        feature: 'POINT.POINT_ID',
      }
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.ITEM',
      type: 'TEXT',
      order: 6484,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<ITEM>',
      xmlEnd: '</ITEM>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.TT_StartDepth',
      type: 'NUMBER',
      order: 6486,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<TT_StartDepth>',
      xmlEnd: '</TT_StartDepth>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Increment',
      type: 'QUICKPICK',
      order: 6488,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Increment>',
      xmlEnd: '</Increment>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Scale',
      type: 'TEXT',
      order: 6490,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Scale>',
      xmlEnd: '</Scale>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Date',
      type: 'DATE',
      order: 6492,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Date>',
      xmlEnd: '</Date>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Type',
      type: 'TEXT',
      order: 6494,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Type>',
      xmlEnd: '</Type>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.HammerMass',
      type: 'NUMBER',
      order: 6498,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<HammerMass>',
      xmlEnd: '</HammerMass>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.HammerDrop',
      type: 'NUMBER',
      order: 6500,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<HammerDrop>',
      xmlEnd: '</HammerDrop>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.AnvilType',
      type: 'TEXT',
      order: 6502,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<AnvilType>',
      xmlEnd: '</AnvilType>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.AnvilDamper',
      type: 'TEXT',
      order: 6504,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<AnvilDamper>',
      xmlEnd: '</AnvilDamper>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.RodDiameter',
      type: 'NUMBER',
      order: 6506,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<RodDiameter>',
      xmlEnd: '</RodDiameter>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.RodMass',
      type: 'NUMBER',
      order: 6508,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<RodMass>',
      xmlEnd: '</RodMass>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.FrictionReduction',
      type: 'TEXT',
      order: 6510,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<FrictionReduction>',
      xmlEnd: '</FrictionReduction>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.ConeDiameter',
      type: 'NUMBER',
      order: 6512,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<ConeDiameter>',
      xmlEnd: '</ConeDiameter>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.ConeAngle',
      type: 'NUMBER',
      order: 6514,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<ConeAngle>',
      xmlEnd: '</ConeAngle>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Predrilling',
      type: 'TEXT',
      order: 6516,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Predrilling>',
      xmlEnd: '</Predrilling>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.DisposedDepth',
      type: 'NUMBER',
      order: 6518,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<DisposedDepth>',
      xmlEnd: '</DisposedDepth>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.BlowCountFreq',
      type: 'TEXT',
      order: 6520,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<BlowCountFreq>',
      xmlEnd: '</BlowCountFreq>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.WaterDepth',
      type: 'NUMBER',
      order: 6522,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<WaterDepth>',
      xmlEnd: '</WaterDepth>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Termination',
      type: 'QUICKPICK',
      order: 6524,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Termination>',
      xmlEnd: '</Termination>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Weather',
      type: 'TEXT',
      order: 6526,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Weather>',
      xmlEnd: '</Weather>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Remarks',
      type: 'TEXT',
      order: 6528,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Remarks>',
      xmlEnd: '</Remarks>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Method',
      type: 'TEXT',
      order: 6530,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Method>',
      xmlEnd: '</Method>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Organisation',
      type: 'TEXT',
      order: 6532,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Organisation>',
      xmlEnd: '</Organisation>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Accreditation',
      type: 'TEXT',
      order: 6534,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Accreditation>',
      xmlEnd: '</Accreditation>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Status',
      type: 'TEXT',
      order: 6536,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Status>',
      xmlEnd: '</Status>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_0000',
      type: 'NUMBER',
      order: 6538,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_0000>',
      xmlEnd: '</Blows_Inc_0000>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_0050',
      type: 'NUMBER',
      order: 6540,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_0050>',
      xmlEnd: '</Blows_Inc_0050>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_0100',
      type: 'NUMBER',
      order: 6542,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_0100>',
      xmlEnd: '</Blows_Inc_0100>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_0150',
      type: 'NUMBER',
      order: 6544,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_0150>',
      xmlEnd: '</Blows_Inc_0150>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_0200',
      type: 'NUMBER',
      order: 6546,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_0200>',
      xmlEnd: '</Blows_Inc_0200>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_0250',
      type: 'NUMBER',
      order: 6548,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_0250>',
      xmlEnd: '</Blows_Inc_0250>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_0300',
      type: 'NUMBER',
      order: 6550,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_0300>',
      xmlEnd: '</Blows_Inc_0300>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_0350',
      type: 'NUMBER',
      order: 6552,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_0350>',
      xmlEnd: '</Blows_Inc_0350>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_0400',
      type: 'NUMBER',
      order: 6554,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_0400>',
      xmlEnd: '</Blows_Inc_0400>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_0450',
      type: 'NUMBER',
      order: 6556,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_0450>',
      xmlEnd: '</Blows_Inc_0450>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_0500',
      type: 'NUMBER',
      order: 6558,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_0500>',
      xmlEnd: '</Blows_Inc_0500>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_0550',
      type: 'NUMBER',
      order: 6560,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_0550>',
      xmlEnd: '</Blows_Inc_0550>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_0600',
      type: 'NUMBER',
      order: 6562,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_0600>',
      xmlEnd: '</Blows_Inc_0600>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_0650',
      type: 'NUMBER',
      order: 6564,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_0650>',
      xmlEnd: '</Blows_Inc_0650>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_0700',
      type: 'NUMBER',
      order: 6566,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_0700>',
      xmlEnd: '</Blows_Inc_0700>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_0750',
      type: 'NUMBER',
      order: 6568,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_0750>',
      xmlEnd: '</Blows_Inc_0750>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_0800',
      type: 'NUMBER',
      order: 6570,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_0800>',
      xmlEnd: '</Blows_Inc_0800>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_0850',
      type: 'NUMBER',
      order: 6572,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_0850>',
      xmlEnd: '</Blows_Inc_0850>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_0900',
      type: 'NUMBER',
      order: 6574,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_0900>',
      xmlEnd: '</Blows_Inc_0900>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_0950',
      type: 'NUMBER',
      order: 6576,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_0950>',
      xmlEnd: '</Blows_Inc_0950>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_1000',
      type: 'NUMBER',
      order: 6578,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_1000>',
      xmlEnd: '</Blows_Inc_1000>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_1050',
      type: 'NUMBER',
      order: 6580,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_1050>',
      xmlEnd: '</Blows_Inc_1050>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_1100',
      type: 'NUMBER',
      order: 6582,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_1100>',
      xmlEnd: '</Blows_Inc_1100>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_1150',
      type: 'NUMBER',
      order: 6584,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_1150>',
      xmlEnd: '</Blows_Inc_1150>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_1200',
      type: 'NUMBER',
      order: 6586,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_1200>',
      xmlEnd: '</Blows_Inc_1200>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_1250',
      type: 'NUMBER',
      order: 6588,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_1250>',
      xmlEnd: '</Blows_Inc_1250>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_1300',
      type: 'NUMBER',
      order: 6590,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_1300>',
      xmlEnd: '</Blows_Inc_1300>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_1350',
      type: 'NUMBER',
      order: 6592,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_1350>',
      xmlEnd: '</Blows_Inc_1350>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_1400',
      type: 'NUMBER',
      order: 6594,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_1400>',
      xmlEnd: '</Blows_Inc_1400>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_1450',
      type: 'NUMBER',
      order: 6596,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_1450>',
      xmlEnd: '</Blows_Inc_1450>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_1500',
      type: 'NUMBER',
      order: 6598,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_1500>',
      xmlEnd: '</Blows_Inc_1500>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_1550',
      type: 'NUMBER',
      order: 6600,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_1550>',
      xmlEnd: '</Blows_Inc_1550>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_1600',
      type: 'NUMBER',
      order: 6602,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_1600>',
      xmlEnd: '</Blows_Inc_1600>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_1650',
      type: 'NUMBER',
      order: 6604,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_1650>',
      xmlEnd: '</Blows_Inc_1650>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_1700',
      type: 'NUMBER',
      order: 6606,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_1700>',
      xmlEnd: '</Blows_Inc_1700>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_1750',
      type: 'NUMBER',
      order: 6608,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_1750>',
      xmlEnd: '</Blows_Inc_1750>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_1800',
      type: 'NUMBER',
      order: 6610,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_1800>',
      xmlEnd: '</Blows_Inc_1800>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_1850',
      type: 'NUMBER',
      order: 6612,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_1850>',
      xmlEnd: '</Blows_Inc_1850>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_1900',
      type: 'NUMBER',
      order: 6614,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_1900>',
      xmlEnd: '</Blows_Inc_1900>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_1950',
      type: 'NUMBER',
      order: 6616,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_1950>',
      xmlEnd: '</Blows_Inc_1950>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_2000',
      type: 'NUMBER',
      order: 6618,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_2000>',
      xmlEnd: '</Blows_Inc_2000>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_2050',
      type: 'NUMBER',
      order: 6620,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_2050>',
      xmlEnd: '</Blows_Inc_2050>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_2100',
      type: 'NUMBER',
      order: 6622,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_2100>',
      xmlEnd: '</Blows_Inc_2100>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_2150',
      type: 'NUMBER',
      order: 6624,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_2150>',
      xmlEnd: '</Blows_Inc_2150>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_2200',
      type: 'NUMBER',
      order: 6626,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_2200>',
      xmlEnd: '</Blows_Inc_2200>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_2250',
      type: 'NUMBER',
      order: 6628,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_2250>',
      xmlEnd: '</Blows_Inc_2250>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_2300',
      type: 'NUMBER',
      order: 6630,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_2300>',
      xmlEnd: '</Blows_Inc_2300>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_2350',
      type: 'NUMBER',
      order: 6632,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_2350>',
      xmlEnd: '</Blows_Inc_2350>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_2400',
      type: 'NUMBER',
      order: 6634,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_2400>',
      xmlEnd: '</Blows_Inc_2400>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_2450',
      type: 'NUMBER',
      order: 6636,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_2450>',
      xmlEnd: '</Blows_Inc_2450>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_2500',
      type: 'NUMBER',
      order: 6638,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_2500>',
      xmlEnd: '</Blows_Inc_2500>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_2550',
      type: 'NUMBER',
      order: 6640,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_2550>',
      xmlEnd: '</Blows_Inc_2550>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_2600',
      type: 'NUMBER',
      order: 6642,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_2600>',
      xmlEnd: '</Blows_Inc_2600>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_2650',
      type: 'NUMBER',
      order: 6644,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_2650>',
      xmlEnd: '</Blows_Inc_2650>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_2700',
      type: 'NUMBER',
      order: 6646,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_2700>',
      xmlEnd: '</Blows_Inc_2700>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_2750',
      type: 'NUMBER',
      order: 6648,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_2750>',
      xmlEnd: '</Blows_Inc_2750>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_2800',
      type: 'NUMBER',
      order: 6650,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_2800>',
      xmlEnd: '</Blows_Inc_2800>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_2850',
      type: 'NUMBER',
      order: 6652,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_2850>',
      xmlEnd: '</Blows_Inc_2850>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_2900',
      type: 'NUMBER',
      order: 6654,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_2900>',
      xmlEnd: '</Blows_Inc_2900>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_2950',
      type: 'NUMBER',
      order: 6656,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_2950>',
      xmlEnd: '</Blows_Inc_2950>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_3000',
      type: 'NUMBER',
      order: 6658,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_3000>',
      xmlEnd: '</Blows_Inc_3000>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_3050',
      type: 'NUMBER',
      order: 6660,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_3050>',
      xmlEnd: '</Blows_Inc_3050>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_3100',
      type: 'NUMBER',
      order: 6662,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_3100>',
      xmlEnd: '</Blows_Inc_3100>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_3150',
      type: 'NUMBER',
      order: 6664,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_3150>',
      xmlEnd: '</Blows_Inc_3150>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_3200',
      type: 'NUMBER',
      order: 6666,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_3200>',
      xmlEnd: '</Blows_Inc_3200>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_3250',
      type: 'NUMBER',
      order: 6668,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_3250>',
      xmlEnd: '</Blows_Inc_3250>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_3300',
      type: 'NUMBER',
      order: 6670,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_3300>',
      xmlEnd: '</Blows_Inc_3300>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_3350',
      type: 'NUMBER',
      order: 6672,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_3350>',
      xmlEnd: '</Blows_Inc_3350>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_3400',
      type: 'NUMBER',
      order: 6674,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_3400>',
      xmlEnd: '</Blows_Inc_3400>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_3450',
      type: 'NUMBER',
      order: 6676,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_3450>',
      xmlEnd: '</Blows_Inc_3450>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_3500',
      type: 'NUMBER',
      order: 6678,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_3500>',
      xmlEnd: '</Blows_Inc_3500>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_3550',
      type: 'NUMBER',
      order: 6680,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_3550>',
      xmlEnd: '</Blows_Inc_3550>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_3600',
      type: 'NUMBER',
      order: 6682,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_3600>',
      xmlEnd: '</Blows_Inc_3600>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_3650',
      type: 'NUMBER',
      order: 6684,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_3650>',
      xmlEnd: '</Blows_Inc_3650>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_3700',
      type: 'NUMBER',
      order: 6686,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_3700>',
      xmlEnd: '</Blows_Inc_3700>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_3750',
      type: 'NUMBER',
      order: 6688,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_3750>',
      xmlEnd: '</Blows_Inc_3750>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_3800',
      type: 'NUMBER',
      order: 6690,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_3800>',
      xmlEnd: '</Blows_Inc_3800>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_3850',
      type: 'NUMBER',
      order: 6692,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_3850>',
      xmlEnd: '</Blows_Inc_3850>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_3900',
      type: 'NUMBER',
      order: 6694,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_3900>',
      xmlEnd: '</Blows_Inc_3900>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_3950',
      type: 'NUMBER',
      order: 6696,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_3950>',
      xmlEnd: '</Blows_Inc_3950>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_4000',
      type: 'NUMBER',
      order: 6698,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_4000>',
      xmlEnd: '</Blows_Inc_4000>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_4050',
      type: 'NUMBER',
      order: 6700,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_4050>',
      xmlEnd: '</Blows_Inc_4050>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_4100',
      type: 'NUMBER',
      order: 6702,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_4100>',
      xmlEnd: '</Blows_Inc_4100>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_4150',
      type: 'NUMBER',
      order: 6704,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_4150>',
      xmlEnd: '</Blows_Inc_4150>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_4200',
      type: 'NUMBER',
      order: 6706,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_4200>',
      xmlEnd: '</Blows_Inc_4200>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_4250',
      type: 'NUMBER',
      order: 6708,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_4250>',
      xmlEnd: '</Blows_Inc_4250>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_4300',
      type: 'NUMBER',
      order: 6710,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_4300>',
      xmlEnd: '</Blows_Inc_4300>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_4350',
      type: 'NUMBER',
      order: 6712,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_4350>',
      xmlEnd: '</Blows_Inc_4350>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_4400',
      type: 'NUMBER',
      order: 6714,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_4400>',
      xmlEnd: '</Blows_Inc_4400>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_4450',
      type: 'NUMBER',
      order: 6716,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_4450>',
      xmlEnd: '</Blows_Inc_4450>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_4500',
      type: 'NUMBER',
      order: 6718,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_4500>',
      xmlEnd: '</Blows_Inc_4500>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_4550',
      type: 'NUMBER',
      order: 6720,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_4550>',
      xmlEnd: '</Blows_Inc_4550>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_4600',
      type: 'NUMBER',
      order: 6722,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_4600>',
      xmlEnd: '</Blows_Inc_4600>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_4650',
      type: 'NUMBER',
      order: 6724,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_4650>',
      xmlEnd: '</Blows_Inc_4650>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_4700',
      type: 'NUMBER',
      order: 6726,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_4700>',
      xmlEnd: '</Blows_Inc_4700>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_4750',
      type: 'NUMBER',
      order: 6728,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_4750>',
      xmlEnd: '</Blows_Inc_4750>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_4800',
      type: 'NUMBER',
      order: 6730,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_4800>',
      xmlEnd: '</Blows_Inc_4800>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_4850',
      type: 'NUMBER',
      order: 6732,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_4850>',
      xmlEnd: '</Blows_Inc_4850>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_4900',
      type: 'NUMBER',
      order: 6734,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_4900>',
      xmlEnd: '</Blows_Inc_4900>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_4950',
      type: 'NUMBER',
      order: 6736,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_4950>',
      xmlEnd: '</Blows_Inc_4950>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_5000',
      type: 'NUMBER',
      order: 6738,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_5000>',
      xmlEnd: '</Blows_Inc_5000>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_5050',
      type: 'NUMBER',
      order: 6740,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_5050>',
      xmlEnd: '</Blows_Inc_5050>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_5100',
      type: 'NUMBER',
      order: 6742,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_5100>',
      xmlEnd: '</Blows_Inc_5100>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_5150',
      type: 'NUMBER',
      order: 6744,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_5150>',
      xmlEnd: '</Blows_Inc_5150>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_5200',
      type: 'NUMBER',
      order: 6746,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_5200>',
      xmlEnd: '</Blows_Inc_5200>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_5250',
      type: 'NUMBER',
      order: 6748,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_5250>',
      xmlEnd: '</Blows_Inc_5250>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_5300',
      type: 'NUMBER',
      order: 6750,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_5300>',
      xmlEnd: '</Blows_Inc_5300>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_5350',
      type: 'NUMBER',
      order: 6752,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_5350>',
      xmlEnd: '</Blows_Inc_5350>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_5400',
      type: 'NUMBER',
      order: 6754,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_5400>',
      xmlEnd: '</Blows_Inc_5400>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_5450',
      type: 'NUMBER',
      order: 6756,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_5450>',
      xmlEnd: '</Blows_Inc_5450>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_5500',
      type: 'NUMBER',
      order: 6758,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_5500>',
      xmlEnd: '</Blows_Inc_5500>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_5550',
      type: 'NUMBER',
      order: 6760,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_5550>',
      xmlEnd: '</Blows_Inc_5550>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_5600',
      type: 'NUMBER',
      order: 6762,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_5600>',
      xmlEnd: '</Blows_Inc_5600>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_5650',
      type: 'NUMBER',
      order: 6764,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_5650>',
      xmlEnd: '</Blows_Inc_5650>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_5700',
      type: 'NUMBER',
      order: 6766,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_5700>',
      xmlEnd: '</Blows_Inc_5700>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_5750',
      type: 'NUMBER',
      order: 6768,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_5750>',
      xmlEnd: '</Blows_Inc_5750>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_5800',
      type: 'NUMBER',
      order: 6770,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_5800>',
      xmlEnd: '</Blows_Inc_5800>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_5850',
      type: 'NUMBER',
      order: 6772,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_5850>',
      xmlEnd: '</Blows_Inc_5850>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_5900',
      type: 'NUMBER',
      order: 6774,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_5900>',
      xmlEnd: '</Blows_Inc_5900>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_5950',
      type: 'NUMBER',
      order: 6776,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_5950>',
      xmlEnd: '</Blows_Inc_5950>',
    },
  
    {
      name: 'TT_FLDCA_ScalaPenetrometer.Blows_Inc_6000',
      type: 'NUMBER',
      order: 6778,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Blows_Inc_6000>',
      xmlEnd: '</Blows_Inc_6000>',
    },
  ]
}

export const XmlDiscontinuityWithImage = {
  name: 'DiscontinuityWithImage',
  order: 6860,
  xmlStart: '<TT_FLDCA_DiscontinuityWithImage>',
  xmlEnd: '</TT_FLDCA_DiscontinuityWithImage>',
  features:
  [
  
    {
      name: 'POINT.POINT_ID',
      type: 'TEXT',
      order: 6870,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<POINT_ID>',
      xmlEnd: '</POINT_ID>',
      referValue: {
        workflow: 'POINT',
        feature: 'POINT.POINT_ID',
      }
    },
  
    {
      name: 'DiscontinuityWithImage.TOP',
      type: 'NUMBER',
      order: 6880,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<TOP>',
      xmlEnd: '</TOP>',
    },
  
    {
      name: 'DiscontinuityWithImage.Base',
      type: 'NUMBER',
      order: 6890,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Base>',
      xmlEnd: '</Base>',
    },
  
    {
      name: 'DiscontinuityWithImage.Type',
      type: 'QUICKPICK',
      order: 6900,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Type>',
      xmlEnd: '</Type>',
    },
  
    {
      name: 'DiscontinuityWithImage.Number',
      type: 'NUMBER',
      order: 6910,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Number>',
      xmlEnd: '</Number>',
    },
  
    {
      name: 'DiscontinuityWithImage.SpacingClass',
      type: 'QUICKPICK',
      order: 6920,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<SpacingClass>',
      xmlEnd: '</SpacingClass>',
    },
  
    {
      name: 'DiscontinuityWithImage.Dip',
      type: 'NUMBER',
      order: 6930,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Dip>',
      xmlEnd: '</Dip>',
    },
  
    {
      name: 'DiscontinuityWithImage.DipMax',
      type: 'NUMBER',
      order: 6940,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<DipMax>',
      xmlEnd: '</DipMax>',
    },
  
    {
      name: 'DiscontinuityWithImage.Planar',
      type: 'QUICKPICK',
      order: 6950,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Planar>',
      xmlEnd: '</Planar>',
    },
  
    {
      name: 'DiscontinuityWithImage.Roughness',
      type: 'QUICKPICK',
      order: 6960,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Roughness>',
      xmlEnd: '</Roughness>',
    },
  
    {
      name: 'DiscontinuityWithImage.JCR',
      type: 'NUMBER',
      order: 6970,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<JCR>',
      xmlEnd: '</JCR>',
    },
  
    {
      name: 'DiscontinuityWithImage.WallStrengthClass',
      type: 'QUICKPICK',
      order: 6980,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<WallStrengthClass>',
      xmlEnd: '</WallStrengthClass>',
    },
  
    {
      name: 'DiscontinuityWithImage.WallWeathering',
      type: 'QUICKPICK',
      order: 6990,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<WallWeathering>',
      xmlEnd: '</WallWeathering>',
    },
  
    {
      name: 'DiscontinuityWithImage.ApertureObservation',
      type: 'QUICKPICK',
      order: 7000,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<ApertureObservation>',
      xmlEnd: '</ApertureObservation>',
    },
  
    {
      name: 'DiscontinuityWithImage.Aperture',
      type: 'NUMBER',
      order: 7010,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Aperture>',
      xmlEnd: '</Aperture>',
    },
  
    {
      name: 'DiscontinuityWithImage.Infill',
      type: 'TEXT',
      order: 7030,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Infill>',
      xmlEnd: '</Infill>',
    },
  
    {
      name: 'DiscontinuityWithImage.InfillStrength',
      type: 'QUICKPICK',
      order: 7040,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<InfillStrength>',
      xmlEnd: '</InfillStrength>',
    },
  
    {
      name: 'DiscontinuityWithImage.InfillWidth',
      type: 'NUMBER',
      order: 7050,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<InfillWidth>',
      xmlEnd: '</InfillWidth>',
    },
  
    {
      name: 'DiscontinuityWithImage.Remarks',
      type: 'TEXT',
      order: 7100,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Remarks>',
      xmlEnd: '</Remarks>',
    },
  
    {
      name: 'DiscontinuityWithImage.Image',
      type: 'IMAGE',
      order: 8240,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Image>',
      xmlEnd: '</Image>',
    },
  ]
}

export const XmlFracture = {
  name: 'Fracture',
  order: 7120,
  xmlStart: '<Fracture>',
  xmlEnd: '</Fracture>',
  features:
  [
  
    {
      name: 'POINT.POINT_ID',
      type: 'TEXT',
      order: 7130,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<POINT_ID>',
      xmlEnd: '</POINT_ID>',
      referValue: {
        workflow: 'POINT',
        feature: 'POINT.POINT_ID',
      }
    },
  
    {
      name: 'Fracture.TOP',
      type: 'NUMBER',
      order: 7140,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<TOP>',
      xmlEnd: '</TOP>',
    },
  
    {
      name: 'Fracture.BASE',
      type: 'NUMBER',
      order: 7150,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<BASE>',
      xmlEnd: '</BASE>',
    },
  
    {
      name: 'Fracture.AvgFractureSpacing',
      type: 'NUMBER',
      order: 7160,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<AvgFractureSpacing>',
      xmlEnd: '</AvgFractureSpacing>',
    },
  
    {
      name: 'Fracture.MinFractureSpacing',
      type: 'TEXT',
      order: 7170,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<MinFractureSpacing>',
      xmlEnd: '</MinFractureSpacing>',
    },
  
    {
      name: 'Fracture.MaxFractureSpacing',
      type: 'NUMBER',
      order: 7180,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<MaxFractureSpacing>',
      xmlEnd: '</MaxFractureSpacing>',
    },
  
    {
      name: 'Fracture.FractureIndex',
      type: 'QUICKPICK',
      order: 7190,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<FractureIndex>',
      xmlEnd: '</FractureIndex>',
    },
  
    {
      name: 'Fracture.Remarks',
      type: 'TEXT',
      order: 7200,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Remarks>',
      xmlEnd: '</Remarks>',
    },
  ]
}

export const XmlProgress = {
  name: 'Progress',
  order: 7220,
  xmlStart: '<Progress>',
  xmlEnd: '</Progress>',
  features:
  [
  
    {
      name: 'POINT.POINT_ID',
      type: 'TEXT',
      order: 7230,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<POINT_ID>',
      xmlEnd: '</POINT_ID>',
      referValue: {
        workflow: 'POINT',
        feature: 'POINT.POINT_ID',
      }
    },
  
    {
      name: 'Progress.DATETIME',
      type: 'DATETIME',
      order: 7240,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<DATETIME>',
      xmlEnd: '</DATETIME>',
    },
  
    {
      name: 'Progress.HoleDepth',
      type: 'NUMBER',
      order: 7250,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<HoleDepth>',
      xmlEnd: '</HoleDepth>',
    },
  
    {
      name: 'Progress.CasingDepth',
      type: 'NUMBER',
      order: 7260,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<CasingDepth>',
      xmlEnd: '</CasingDepth>',
    },
  
    {
      name: 'Progress.WaterDepth',
      type: 'NUMBER',
      order: 7270,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<WaterDepth>',
      xmlEnd: '</WaterDepth>',
    },
  
    {
      name: 'Progress.Dry',
      type: 'BIT',
      order: 7280,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Dry>',
      xmlEnd: '</Dry>',
    },
  
    {
      name: 'Progress.Remarks',
      type: 'TEXT',
      order: 7290,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Remarks>',
      xmlEnd: '</Remarks>',
    },
  ]
}

export const XmlSAMPLE = {
  name: 'SAMPLE',
  order: 7390,
  xmlStart: '<TT_FLDCA_SAMPLE>',
  xmlEnd: '</TT_FLDCA_SAMPLE>',
  features:
  [
  
    {
      name: 'POINT.POINT_ID',
      type: 'TEXT',
      order: 7400,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<POINT_ID>',
      xmlEnd: '</POINT_ID>',
      referValue: {
        workflow: 'POINT',
        feature: 'POINT.POINT_ID',
      }
    },
  
    {
      name: 'SAMPLE.SAMPLE_TOP',
      type: 'NUMBER',
      order: 7410,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<SAMPLE_TOP>',
      xmlEnd: '</SAMPLE_TOP>',
    },
  
    {
      name: 'SAMPLE.SAMPLE_ID',
      type: 'TEXT',
      order: 7415,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<SAMPLE_ID>',
      xmlEnd: '</SAMPLE_ID>',
    },
  
    {
      name: 'SAMPLE.SAMPLE_REFERENCE',
      type: 'TEXT',
      order: 7420,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<SAMPLE_REFERENCE>',
      xmlEnd: '</SAMPLE_REFERENCE>',
    },
  
    {
      name: 'SAMPLE.SAMPLE_TYPE',
      type: 'QUICKPICK',
      order: 7430,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<SAMPLE_TYPE>',
      xmlEnd: '</SAMPLE_TYPE>',
    },
  
    {
      name: 'SAMPLE.Base',
      type: 'NUMBER',
      order: 7440,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Base>',
      xmlEnd: '</Base>',
    },
  
    {
      name: 'SAMPLE.Date',
      type: 'DATETIME',
      order: 7450,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Date>',
      xmlEnd: '</Date>',
    },
  
    {
      name: 'SAMPLE.TestScheduleRemarks',
      type: 'MULTIPICK',
      order: 7455,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<TestScheduleRemarks>',
      xmlEnd: '</TestScheduleRemarks>',
    },
  
    {
      name: 'SAMPLE.Remarks',
      type: 'MEMO',
      order: 7460,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Remarks>',
      xmlEnd: '</Remarks>',
    },
  ]
}

export const XmlCasing = {
  name: 'Casing',
  order: 7480,
  xmlStart: '<Casing>',
  xmlEnd: '</Casing>',
  features:
  [
  
    {
      name: 'POINT.POINT_ID',
      type: 'TEXT',
      order: 7490,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<POINT_ID>',
      xmlEnd: '</POINT_ID>',
      referValue: {
        workflow: 'POINT',
        feature: 'POINT.POINT_ID',
      }
    },
  
    {
      name: 'Casing.CasingTop',
      type: 'NUMBER',
      order: 7500,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<CasingTop>',
      xmlEnd: '</CasingTop>',
    },
  
    {
      name: 'Casing.TOP',
      type: 'NUMBER',
      order: 7510,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<TOP>',
      xmlEnd: '</TOP>',
    },
  
    {
      name: 'Casing.HoleDepth',
      type: 'NUMBER',
      order: 7520,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<HoleDepth>',
      xmlEnd: '</HoleDepth>',
    },
  
    {
      name: 'Casing.Type',
      type: 'QUICKPICK',
      order: 7530,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Type>',
      xmlEnd: '</Type>',
    },
  
    {
      name: 'Casing.Diameter',
      type: 'NUMBER',
      order: 7540,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Diameter>',
      xmlEnd: '</Diameter>',
    },
  
    {
      name: 'Casing.Remarks',
      type: 'TEXT',
      order: 7550,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Remarks>',
      xmlEnd: '</Remarks>',
    },
  ]
}

export const XmlFlush = {
  name: 'Flush',
  order: 7570,
  xmlStart: '<Flush>',
  xmlEnd: '</Flush>',
  features:
  [
  
    {
      name: 'POINT.POINT_ID',
      type: 'TEXT',
      order: 7580,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<POINT_ID>',
      xmlEnd: '</POINT_ID>',
      referValue: {
        workflow: 'POINT',
        feature: 'POINT.POINT_ID',
      }
    },
  
    {
      name: 'Flush.TOP',
      type: 'NUMBER',
      order: 7590,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<TOP>',
      xmlEnd: '</TOP>',
    },
  
    {
      name: 'Flush.BASE',
      type: 'NUMBER',
      order: 7600,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<BASE>',
      xmlEnd: '</BASE>',
    },
  
    {
      name: 'Flush.Type',
      type: 'QUICKPICK',
      order: 7610,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Type>',
      xmlEnd: '</Type>',
    },
  
    {
      name: 'Flush.MinReturn',
      type: 'NUMBER',
      order: 7620,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<MinReturn>',
      xmlEnd: '</MinReturn>',
    },
  
    {
      name: 'Flush.MaxReturn',
      type: 'NUMBER',
      order: 7621,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<MaxReturn>',
      xmlEnd: '</MaxReturn>',
    },
  
    {
      name: 'Flush.AvgReturn',
      type: 'NUMBER',
      order: 7622,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<AvgReturn>',
      xmlEnd: '</AvgReturn>',
    },
  
    {
      name: 'Flush.Remarks',
      type: 'TEXT',
      order: 7625,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Remarks>',
      xmlEnd: '</Remarks>',
    },
  ]
}

export const XmlWater = {
  name: 'Water',
  order: 7640,
  xmlStart: '<Water>',
  xmlEnd: '</Water>',
  features:
  [
  
    {
      name: 'POINT.POINT_ID',
      type: 'TEXT',
      order: 7650,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<POINT_ID>',
      xmlEnd: '</POINT_ID>',
      referValue: {
        workflow: 'POINT',
        feature: 'POINT.POINT_ID',
      }
    },
  
    {
      name: 'Water.WATERDEPTH',
      type: 'NUMBER',
      order: 7660,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<WATERDEPTH>',
      xmlEnd: '</WATERDEPTH>',
    },
  
    {
      name: 'Water.Type',
      type: 'QUICKPICK',
      order: 7670,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Type>',
      xmlEnd: '</Type>',
    },
  
    {
      name: 'Water.DateTime',
      type: 'DATETIME',
      order: 7680,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<DateTime>',
      xmlEnd: '</DateTime>',
    },
  
    {
      name: 'Water.HoleDepth',
      type: 'NUMBER',
      order: 7690,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<HoleDepth>',
      xmlEnd: '</HoleDepth>',
    },
  
    {
      name: 'Water.CasingDepth',
      type: 'NUMBER',
      order: 7700,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<CasingDepth>',
      xmlEnd: '</CasingDepth>',
    },
  
    {
      name: 'Water.Remarks',
      type: 'TEXT',
      order: 7705,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Remarks>',
      xmlEnd: '</Remarks>',
    },
  ]
}

export const XmlTT_FLDCA_Piezometer = {
  name: 'TT_FLDCA_Piezometer',
  order: 7720,
  xmlStart: '<TT_FLDCA_Piezometer>',
  xmlEnd: '</TT_FLDCA_Piezometer>',
  features:
  [
  
    {
      name: 'POINT.POINT_ID',
      type: 'TEXT',
      order: 7730,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<POINT_ID>',
      xmlEnd: '</POINT_ID>',
      referValue: {
        workflow: 'POINT',
        feature: 'POINT.POINT_ID',
      }
    },
  
    {
      name: 'TT_FLDCA_Piezometer.ITEM',
      type: 'QUICKPICK',
      order: 7740,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<ITEM>',
      xmlEnd: '</ITEM>',
    },
  
    {
      name: 'TT_FLDCA_Piezometer.Zeromeasurement',
      type: 'NUMBER',
      order: 7750,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Zeromeasurement>',
      xmlEnd: '</Zeromeasurement>',
    },
  
    {
      name: 'TT_FLDCA_Piezometer.Date',
      type: 'DATE',
      order: 7760,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Date>',
      xmlEnd: '</Date>',
    },
  
    {
      name: 'TT_FLDCA_Piezometer.Type',
      type: 'QUICKPICK',
      order: 7770,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Type>',
      xmlEnd: '</Type>',
    },
  
    {
      name: 'TT_FLDCA_Piezometer.TipDepth',
      type: 'NUMBER',
      order: 7780,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<TipDepth>',
      xmlEnd: '</TipDepth>',
    },
  
    {
      name: 'TT_FLDCA_Piezometer.ResponseTop',
      type: 'NUMBER',
      order: 7790,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<ResponseTop>',
      xmlEnd: '</ResponseTop>',
    },
  
    {
      name: 'TT_FLDCA_Piezometer.ResponseBase',
      type: 'NUMBER',
      order: 7800,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<ResponseBase>',
      xmlEnd: '</ResponseBase>',
    },
  
    {
      name: 'TT_FLDCA_Piezometer.PipePlainTop',
      type: 'NUMBER',
      order: 7810,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<PipePlainTop>',
      xmlEnd: '</PipePlainTop>',
    },
  
    {
      name: 'TT_FLDCA_Piezometer.PipePlainBase',
      type: 'NUMBER',
      order: 7820,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<PipePlainBase>',
      xmlEnd: '</PipePlainBase>',
    },
  
    {
      name: 'TT_FLDCA_Piezometer.PipePlainMaterial',
      type: 'TEXT',
      order: 7830,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<PipePlainMaterial>',
      xmlEnd: '</PipePlainMaterial>',
    },
  
    {
      name: 'TT_FLDCA_Piezometer.PipePlainDiameter',
      type: 'NUMBER',
      order: 7840,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<PipePlainDiameter>',
      xmlEnd: '</PipePlainDiameter>',
    },
  
    {
      name: 'TT_FLDCA_Piezometer.PipeSlottedTop',
      type: 'NUMBER',
      order: 7850,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<PipeSlottedTop>',
      xmlEnd: '</PipeSlottedTop>',
    },
  
    {
      name: 'TT_FLDCA_Piezometer.PipeSlottedBase',
      type: 'NUMBER',
      order: 7860,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<PipeSlottedBase>',
      xmlEnd: '</PipeSlottedBase>',
    },
  
    {
      name: 'TT_FLDCA_Piezometer.PipeSlottedMaterial',
      type: 'TEXT',
      order: 7870,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<PipeSlottedMaterial>',
      xmlEnd: '</PipeSlottedMaterial>',
    },
  
    {
      name: 'TT_FLDCA_Piezometer.PipeSlottedDiameter',
      type: 'NUMBER',
      order: 7880,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<PipeSlottedDiameter>',
      xmlEnd: '</PipeSlottedDiameter>',
    },
  
    {
      name: 'TT_FLDCA_Piezometer.Remarks',
      type: 'TEXT',
      order: 7890,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Remarks>',
      xmlEnd: '</Remarks>',
    },
  ]
}

export const XmlBackfill = {
  name: 'Backfill',
  order: 7910,
  xmlStart: '<Backfill>',
  xmlEnd: '</Backfill>',
  features:
  [
  
    {
      name: 'POINT.POINT_ID',
      type: 'TEXT',
      order: 7920,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<POINT_ID>',
      xmlEnd: '</POINT_ID>',
      referValue: {
        workflow: 'POINT',
        feature: 'POINT.POINT_ID',
      }
    },
  
    {
      name: 'Backfill.TOP',
      type: 'NUMBER',
      order: 7930,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<TOP>',
      xmlEnd: '</TOP>',
    },
  
    {
      name: 'Backfill.BASE',
      type: 'NUMBER',
      order: 7940,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<BASE>',
      xmlEnd: '</BASE>',
    },
  
    {
      name: 'Backfill.Legend',
      type: 'QUICKPICK',
      order: 7950,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Legend>',
      xmlEnd: '</Legend>',
    },
  
    {
      name: 'Backfill.Remarks',
      type: 'TEXT',
      order: 7960,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Remarks>',
      xmlEnd: '</Remarks>',
    },
  ]
}

export const XmlCoreImage = {
  name: 'CoreImage',
  order: 7980,
  xmlStart: '<CoreImage>',
  xmlEnd: '</CoreImage>',
  features:
  [
  
    {
      name: 'POINT.POINT_ID',
      type: 'TEXT',
      order: 7990,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<POINT_ID>',
      xmlEnd: '</POINT_ID>',
      referValue: {
        workflow: 'POINT',
        feature: 'POINT.POINT_ID',
      }
    },
  
    {
      name: 'CoreImage.TOP',
      type: 'NUMBER',
      order: 8000,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<TOP>',
      xmlEnd: '</TOP>',
    },
  
    {
      name: 'CoreImage.BASE',
      type: 'NUMBER',
      order: 8010,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<BASE>',
      xmlEnd: '</BASE>',
    },
  
    {
      name: 'CoreImage.Image',
      type: 'IMAGE',
      order: 8020,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Image>',
      xmlEnd: '</Image>',
    },
  
    {
      name: 'CoreImage.ImageType',
      type: 'QUICKPICK',
      order: 8030,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<ImageType>',
      xmlEnd: '</ImageType>',
    },
  
    {
      name: 'CoreImage.ImageReportTF',
      type: 'BIT',
      order: 8040,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<ImageReportTF>',
      xmlEnd: '</ImageReportTF>',
    },
  
    {
      name: 'CoreImage.Remarks',
      type: 'TEXT',
      order: 8050,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Remarks>',
      xmlEnd: '</Remarks>',
    },
  ]
}

export const XmlExcavationImage = {
  name: 'ExcavationImage',
  order: 8070,
  xmlStart: '<ExcavationImage>',
  xmlEnd: '</ExcavationImage>',
  features:
  [
  
    {
      name: 'ExcavationImage.IMAGE_ID',
      type: 'NUMBER',
      order: 8080,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<IMAGE_ID>',
      xmlEnd: '</IMAGE_ID>',
    },
  
    {
      name: 'POINT.POINT_ID',
      type: 'TEXT',
      order: 8090,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<POINT_ID>',
      xmlEnd: '</POINT_ID>',
      referValue: {
        workflow: 'POINT',
        feature: 'POINT.POINT_ID',
      }
    },
  
    {
      name: 'ExcavationImage.TOP',
      type: 'NUMBER',
      order: 8100,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<TOP>',
      xmlEnd: '</TOP>',
    },
  
    {
      name: 'ExcavationImage.BASE',
      type: 'NUMBER',
      order: 8110,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<BASE>',
      xmlEnd: '</BASE>',
    },
  
    {
      name: 'ExcavationImage.ImageType',
      type: 'QUICKPICK',
      order: 8120,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<ImageType>',
      xmlEnd: '</ImageType>',
    },
  
    {
      name: 'ExcavationImage.Image',
      type: 'IMAGE',
      order: 8130,
      exportYN: true,
      hasDataYN: false,
      xmlStart: '<Image>',
      xmlEnd: '</Image>',
    },
  
    {
      name: 'ExcavationImage.Remarks',
      type: 'TEXT',
      order: 8140,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<Remarks>',
      xmlEnd: '</Remarks>',
    },
  
    {
      name: 'ExcavationImage.ImageFacingAzimuth',
      type: 'NUMBER',
      order: 8150,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<ImageFacingAzimuth>',
      xmlEnd: '</ImageFacingAzimuth>',
    },
  
    {
      name: 'ExcavationImage.ImageFacingQuadrant',
      type: 'QUICKPICK',
      order: 8160,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<ImageFacingQuadrant>',
      xmlEnd: '</ImageFacingQuadrant>',
    },
  
    {
      name: 'ExcavationImage.ImageReportTF',
      type: 'BIT',
      order: 8170,
      exportYN: true,
      hasDataYN: true,
      xmlStart: '<ImageReportTF>',
      xmlEnd: '</ImageReportTF>',
    },
  ]
}

export const XmlRef =
[
  {
    order: 1,
    name: 'PROJECT',
    schema: XmlPROJECT
  },
  {
    order: 2,
    name: 'POINT',
    parent: 'PROJECT',
    schema: XmlPOINT
  },
  {
    order: 3,
    name: 'ConstructionSPT',
    parent: 'POINT',
    schema: XmlConstructionSPT
  },
  {
    order: 4,
    name: 'GEOLOGY',
    parent: 'POINT',
    schema: XmlGEOLOGY
  },
  {
    order: 5,
    name: 'GeologyDetail',
    parent: 'POINT',
    schema: XmlGeologyDetail
  },
  {
    order: 6,
    name: 'Vane',
    parent: 'POINT',
    schema: XmlVane
  },
  {
    order: 7,
    name: 'TT_FLDCA_ScalaPenetrometer',
    parent: 'POINT',
    schema: XmlTT_FLDCA_ScalaPenetrometer
  },
  {
    order: 8,
    name: 'DiscontinuityWithImage',
    parent: 'POINT',
    schema: XmlDiscontinuityWithImage
  },
  {
    order: 9,
    name: 'Fracture',
    parent: 'POINT',
    schema: XmlFracture
  },
  {
    order: 10,
    name: 'Progress',
    parent: 'POINT',
    schema: XmlProgress
  },
  {
    order: 11,
    name: 'SAMPLE',
    parent: 'POINT',
    schema: XmlSAMPLE
  },
  {
    order: 12,
    name: 'Casing',
    parent: 'POINT',
    schema: XmlCasing
  },
  {
    order: 13,
    name: 'Flush',
    parent: 'POINT',
    schema: XmlFlush
  },
  {
    order: 14,
    name: 'Water',
    parent: 'POINT',
    schema: XmlWater
  },
  {
    order: 15,
    name: 'TT_FLDCA_Piezometer',
    parent: 'POINT',
    schema: XmlTT_FLDCA_Piezometer
  },
  {
    order: 16,
    name: 'Backfill',
    parent: 'POINT',
    schema: XmlBackfill
  },
  {
    order: 17,
    name: 'CoreImage',
    parent: 'POINT',
    schema: XmlCoreImage
  },
  {
    order: 18,
    name: 'ExcavationImage',
    parent: 'POINT',
    schema: XmlExcavationImage
  },
]


export const XmlRoot = {
  version: '<?xml version="1.0" standalone="yes"?>',
  xmlStart: '<DATA>',
  xmlEnd: '</DATA>'
}