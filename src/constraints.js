export const warFighting=[
    {
        value:"G",
        name:"Ground Unit",
        type:"parent",
        children:[
            {
                value:"U-----",
                name:"UNIT"
            },
            {
                value:"UC----",
                name:"UNIT COMBAT"
            },
            {
                value:"UCDS--",
                name:"UNIT COMBAT AIR DEFENSE SHORT RANGE"
            },
            {
                value:"UCDM--",
                name:"AIR DEFENSE MISSILE"
            },
            {
                value:"UCDG--",
                name:" AIR DEFENSE GUN UNIT"
            }
        ]
    },
    {
        value:"A",
        name:"Air",
        type:"parent",
        children:[
            {
                value:"------",
                name:"AIR TRACK"
            },
            {
                value:"M-----",
                name:"MILITARY"
            },      
            {
                value:"MF----",
                name:"FIXED WING"
            },
            {
                value:"MFB---",
                name:"BOMBER"
            },
            {
                value:"MFF---",
                name:" FIGHTER"
            }
        ]
    },
    {
        value:"S",
        name:"Sea Surface",
        type:"parent",
        children:[
            {
                value:"------",
                name:"SEA SURFACE TRACK"
            },
            {
                value:"C-----",
                name:"COMBATANT"
            },
            {
                value:"CLCV--",
                name:"LINE"
            },
            {
                value:"CLCV--",
                name:"CARRIER"
            },
            {
                value:"CLBB--",
                name:" BATTLESHIP"
            }
        ]
    }
]

export const TacticalGrapics=[
    {
        value:"T",
        name:"Tasks",
        type:"parent",
        children:[
            // {
            //     value:"-------",
            //     name:"TASKS"
            // },
            {
                value:"D-----",
                name:"DESTROY"
            },
            {
                value:"I-----",
                name:"INTERDICT"
            }
        ]
    },
    {
        value:"G",
        name:"Command and control and general maneuver",
        type:"parent",
        children:[
            {
                value:"-------",
                name:"WITHDRAW"
            },
            {
                value:"GPUUD-",
                name:"DATUM"
            },
            {
                value:"GPUUB-",
                name:"BRIEF CONTACT"
            },
            {
                value:"GPUUL-",
                name:"LOST CONTACT"
            },
            {
                value:"GPUUS-",
                name:"SINKER"
            },
            {
                value:"GPUY--",
                name:"SONOBUOY"
            }
        ]
    },
    {
        value:"M",
        name:"Mobility/Survivability",
        type:"parent",
        children:[
            {
                value:"------",
                name:"AREA"
            },
            {
                value:"OAOF--",
                name:"FIXED AND PREFABRICATED"
            },
            {
                value:"OAOM--",
                name:"MOVEABLE"
            },
            {
                value:"OAOP--",
                name:"MOVEABLE AND PREFABRICATED"
            },
            {
                value:"OB----",
                name:"BOOBY TRAP"
            },
            
        ]
    },
]

export const SignalIntelligence =[

    {
        value:"A",
        name:"Signals intelligence air",
        type:"parent",
        children:[
            {
                value:"------",
                name:"AIR TRACK"
            },
            {
                value:"S-----",
                name:"SIGNAL INTERCEPT"
            },
            {
                value:"SC----",
                name:"COMMUNICATIONS"
            },
            {
                value:"SC----",
                name:"COMMUNICATIONS"
            },
            {
                value:"SR----",
                name:"RADAR"
            }
        ]
    },
    {
        value:"G",
        name:"Signals intelligence ground",
        type:"parent",
        children:[
            {
                value:"-------",
                name:"GROUND TRACK"
            },
            {
                value:"S-----",
                name:"SIGNAL INTERCEPT"
            },
            {
                value:"SC----",
                name:"COMMUNICATIONS"
            },
            {
                value:"SR----",
                name:"RADAR"
            },
           
        ]
    },
    {
        value:"S",
        name:"Signals intelligence sea surface",
        type:"parent",
        children:[
            {
                value:"------",
                name:"SEA SURFACE TRACK"
            },
            {
                value:"S-----",
                name:"SIGNAL INTERCEPT "
            },
            {
                value:"SC----",
                name:"COMMUNICATIONS"
            },
            {
                value:"SR-----",
                name:"RADAR"
            },
           
            
        ]
    },

]
export const stabilityOperation =[

    {
        value:"V",
        name:"Violent activities",
        type:"parent",
        children:[
            {
                value:"------",
                name:"VIOLENT ACTIVITIES (DEATH CAUSING)"
            },
            {
                value:"A-----",
                name:"ARSON/FIRE"
            },
            {
                value:"M------",
                name:"KILLING (GENERAL)"
            },
            {
                value:"MA----",
                name:"MURDER"
            },
            {
                value:"MB-----",
                name:"EXECUTION"
            }
        ]
    },
    {
        value:"L",
        name:"Locations",
        type:"parent",
        children:[
            {
                value:"-------",
                name:"LOCATIONS"
            },
            {
                value:"B-----",
                name:"BLACK LIST LOCATION"
            },
            {
                value:"G-----",
                name:"GRAY LIST LOCATION"
            },
            {
                value:"W-----",
                name:"WHITE LIST LOCATION"
            },
           
        ]
    },
    {
        value:"O",
        name:"Operations",
        type:"parent",
        children:[
            {
                value:"------",
                name:"OPERATIONS"
            },
            {
                value:"P-----",
                name:"PATROLLING"
            },
            {
                value:"R-----",
                name:"RECRUITMENT"
            },
            {
                value:"RW----",
                name:"RECRUITMENT (WILLING)"
            },
           
            
        ]
    },
    {
        value:"I",
        name:"Items",
        type:"parent",
        children:[
            {
                value:"------",
                name:"ITEMS"
            },
            {
                value:"R-----",
                name:"REFUGEES"
            },
            {
                value:"S-----",
                name:"SAFE HOUSE"
            },
            {
                value:"G-----",
                name:"GRAFFITI"
            },
            {
                value:"V-----",
                name:"VANDALISM/LOOT/RANSACK/PLUNDER/SACK"
            }
        ]
    },
   

]
export const emeergencyManagement =[

    {
        value:"I",
        name:"Incident",
        type:"parent",
        children:[
            {
                value:"------",
                name:"INCIDENT"
            },
            {
                value:"A-----",
                name:"CIVIL DISTURBANCE INCIDENT"
            },
           
            {
                value:"R-----",
                name:"CIVIL DISPLACED POPULATION"
            },
            {
                value:"AC----",
                name:"CIVIL RIOTING"
            },
            {
                value:"B-----",
                name:"CRIMINAL ACTIVITY INCIDENT"
            },
        ]
    },
    {
        value:"N",
        name:"Natural events",
        type:"parent",
        children:[
            {
                value:"-------",
                name:"NATURAL EVENTS"
            },
            {
                value:"A-----",
                name:"GEOLOGIC"
            },
            {
                value:"AA----",
                name:"AFTERSHOCK"
            },
            {
                value:"AB----",
                name:"AVALANCHE"
            },
           
        ]
    },
    {
        value:"O",
        name:"Operations",
        type:"parent",
        children:[
            {
                value:"------",
                name:"OPERATIONS"
            },
            {
                value:"A-----",
                name:"EMERGENCY MEDICAL OPERATION"
            },
            {
                value:"AA-----",
                name:"EMERGENCY MEDICAL OPERATION UNIT"
            },
            {
                value:"AB----",
                name:"EMERGENCY MEDICAL OPERATION EQUIPMENT"
            },
           
            
        ]
    },
    {
        value:"F",
        name:"Infrastructure",
        type:"parent",
        children:[
            {
                value:"------",
                name:"INFRASTRUCTURE"
            },
            {
                value:"A-----",
                name:"AGRICULTURE AND FOOD INFRASTRUCTURE"
            },
            {
                value:"AA----",
                name:"AGRICULTURAL LABORATORY"
            },
            {
                value:"AB----",
                name:"ANIMAL FEEDLOT"
            },
            {
                value:"AC----",
                name:"COMMERCIAL FOOD DISTRIBUTION CENTER"
            }
        ]
    },
   

]


export const Coding_Scheme = [
    {
      name: "Warfighting",
      value: "S",
      id: "Warfighting",
    },
    {
      name: "Tactical Graphics",
      value: "G",
      id: "Tactical Graphics",
    },
    {
      name: "Signal Inelligence",
      value: "I",
      id: "Signal Inelligence",
    },
    {
      name: "Stability Operations",
      value: "O",
      id: "Stability Operations",
    },
    {
      name: "Emergency Manage",
      value: "E",
      id: "Emergency Manage",
    },
  ];

export const AffiliationData = [
    {
      name: "Pending",
      value: "P",
    },
    {
      name: "Unknown",
      value: "U",
    },
    {
      name: "Assumed Friend",
      value: "A",
    },
    {
      name: "Friend",
      value: "F",
    },
    {
      name: "Neutral",
      value: "N",
    },
    {
      name: "Suspect",
      value: "S",
    },
    {
      name: "Hostile",
      value: "H",
    },
    {
      name: "Exercise Pending",
      value: "G",
    },
    {
      name: "Exercise Unknown",
      value: "W",
    },
    {
      name: "Exercise Friend",
      value: "D",
    },
    {
      name: "Exercise Neutral",
      value: "L",
    },
    {
      name: "Exercise Assumed Friend",
      value: "M",
    },
    {
      name: "Joker",
      value: "J",
    },
    {
      name: "Faker",
      value: "K",
    },
    {
      name: "None Specified",
      value: "O",
    },
  ];

  export const StatusData = [
    {
      name: "Anticipated/Planned",
      value: "A",
    },
    {
      name: "Present",
      value: "P",
    },
    {
      name: "Present/Fully Capable",
      value: "C",
    },
    {
      name: "Present/Damaged",
      value: "D",
    },
    {
      name: "Present/Destroyed",
      value: "X",
    },
    {
      name: "Present/Full To Capacity",
      value: "F",
    },
  ];