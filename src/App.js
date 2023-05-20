import React, { useEffect, useRef, useState } from "react";
import ms from "milsymbol";
import {
  Coding_Scheme,
  AffiliationData,
  StatusData,
  warFighting,
  TacticalGrapics,
  SignalIntelligence,
  stabilityOperation,
  emeergencyManagement,
} from "./constraints";
import "./App.css";

function App() {
  const [id, setId] = useState("");
  const [dataProcess, setDataProcess] = useState([]);
  const [functionunit, setFunctionunit] = useState([]);
  const [image, setImage] = useState(null);
  const [defaultfunction, setDefaultfunction] = useState("");
  const [scheme, setScheme] = useState("");
  const [affliation, setAffliation] = useState("");
  const [battel, setBattel] = useState("");
  const [status, setStatus] = useState("");
  const [functions, setFunctions] = useState("");
  const [modifier1, setModifier1] = useState("-");
  const [modifier2, setModifier2] = useState("-");
  const [show, setShow] = useState(true);

  const refscheme = useRef();
  const refaffliation = useRef();
  const refbattel = useRef();
  const refstatus = useRef();
  const reffunctions = useRef();

  const handleScheme = (e) => {
    if (e.target.value == "") {
      setShow(false);
    } else {
      setScheme(refscheme.current.value);
      setAffliation("");
      refaffliation.current.value = "";
      setBattel("");
      refbattel.current.value = "";
      setStatus("");
      refstatus.current.value = "";
      setFunctions("");
      reffunctions.current.value = "";
    }
  };

  const handleAffliation = (e) => {
    if (e.target.value == "") {
      setShow(false);
    } else {
      setAffliation(refaffliation.current.value);
      setBattel("");
      refbattel.current.value = "";
      setStatus("");
      refstatus.current.value = "";
      setFunctions("");
      reffunctions.current.value = "";
      setShow(false);
    }
  };

  const handleBattel = (e) => {
    if (e.target.value == "") {
      setShow(false);
    } else {
      setBattel(refbattel.current.value);
      setStatus("");
      refstatus.current.value = "";
      setFunctions("");
      reffunctions.current.value = "";
    }
  };

  const handleStatus = (e) => {
    if (e.target.value == "") {
      setShow(false);
    } else {
      setStatus(refstatus.current.value);
      setFunctions("");
      reffunctions.current.value = "";
      setShow(false);
    }
  };

  const handlefunctions = (e) => {
    // setFunctions(e.target.value);
    if (e.target.value == "") {
      setShow(false);
    } else {
      setFunctions(reffunctions.current.value);

      if (
        scheme !== "" &&
        affliation !== "" &&
        battel !== "" &&
        status !== "" &&
        functions !== ""
      ) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
  };

  useEffect(() => {
    if (
      scheme !== "" &&
      affliation !== "" &&
      battel !== "" &&
      status !== "" &&
      functions !== ""
    ) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [functions]);

  useEffect(() => {
    setShow(false);
    switch (scheme) {
      case "S":
        setDataProcess(warFighting);
        //  handlebattelvalue()
        break;
      case "G":
        setDataProcess(TacticalGrapics);
        break;
      case "I":
        setDataProcess(SignalIntelligence);
        break;
      case "O":
        setDataProcess(stabilityOperation);
        break;
      case "E":
        setDataProcess(emeergencyManagement);
        break;
      default:
        setDataProcess([]);
    }
  }, [scheme]);

  useEffect(() => {
    refbattel.current.value = "";
    reffunctions.current.value = "";
  }, [dataProcess]);

  useEffect(() => {
    reffunctions.current.value = "";
    setShow(false);
  }, [functionunit]);

  useEffect(() => {
    {
      let srt1 = scheme + affliation + battel + status + functions;
      let length = srt1.length;
      let length2 = 10 - length;
      for (let i = 1; i <= length2; i++) {
        srt1 += "-";
      }

      let srt2 = srt1 + modifier1 + modifier2;
      setId(srt2);
      console.log("type ", typeof srt2);
      let a = new ms.Symbol(srt2, {
        size: 35,
      }).asSVG();
      setImage(a);
    }
  }, [scheme, affliation, battel, status, functions]);

  useEffect(() => {
    dataProcess?.map((item, i) => {
      if (item.value == battel) {
        setFunctionunit(item.children);
      }
    });
  }, [battel]);

  return (
    <div className="App">
      <div>
        <h2>{id}</h2>
        {show ? (
          <div dangerouslySetInnerHTML={{ __html: image }}></div>
        ) : (
          <div>
            <h2>Please Select all option</h2>
          </div>
        )}
      </div>
      <form>
        <div className="formData">
          <label htmlFor="scheme">Coding Scheme:</label>
          <select
            name="scheme"
            ref={refscheme}
            onChange={(e) => handleScheme(e)}
          >
            <option value="" disabled selected>
              please select
            </option>
            {Coding_Scheme?.map((items, i) => {
              return (
                <option value={items?.value} id={items?.id}>
                  {items?.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="formData">
          <label htmlFor="affliation">Affiliation:</label>
          <select
            name="affliation"
            id="affliation"
            ref={refaffliation}
            onChange={(e) => handleAffliation(e)}
          >
            <option value="" disabled selected>
              please select
            </option>
            {AffiliationData.map((item) => {
              return <option value={item?.value}>{item?.name}</option>;
            })}
          </select>
        </div>
        <div className="formData">
          <label htmlFor="battle">Battle Dimension:</label>
          <select
            name="battle"
            id="battle"
            ref={refbattel}
            onChange={(e) => handleBattel(e)}
          >
            <option value="" disabled selected>
              please select
            </option>

            {dataProcess.map((item) => (
              <option value={item?.value}>{item?.name}</option>
            ))}
          </select>
        </div>
        <div className="formData">
          <label htmlFor="status">Status:</label>
          <select
            name="status"
            id="status"
            ref={refstatus}
            onChange={(e) => handleStatus(e)}
          >
            <option value="" disabled selected>
              please select
            </option>

            {StatusData.map((item) => {
              return <option value={item?.value}>{item?.name}</option>;
            })}
          </select>
        </div>
        <div className="formData">
          <label htmlFor="function">Function ID:</label>
          <select
            name="function"
            id="function"
            ref={reffunctions}
            onChange={(e) => handlefunctions(e)}
          >
            <option value="" disabled selected>
              please select
            </option>
            {functionunit.map((item) => (
              <option value={item?.value}>{item?.name}</option>
            ))}
          </select>
        </div>

        {show ? (
          <div>
            {" "}
            <button type="button" className="btn btn-primary submitbutton">
              Submit
            </button>
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}

export default App;
