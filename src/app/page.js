"use client";
import { Provider } from "@/components/ui/provider";
import { Tabs } from "@chakra-ui/react";
import { useState } from 'react';

export default function Home() {
  const [jan, setJan] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "",
    nine: "",
    ten: "",
    eleven: "",
    twelve: "",
    thirteen: "",
    fourteen: "",
    fifteen: "",
    sixteen: "",
    seventeen: "",
    eighteen: "",
    nineteen: "",
    twenty: "",
    twentyone: "",
    twentytwo: "",
    twentythree: "",
    twentyfour: "",
    twentyfive: "",
    twentysix: "",
    twentyseven: "",
    twentyeight: "",
    twentynine: "",
    thirty: "",
    thirtyone: ""
  });
  const [feb, setFeb] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "",
    nine: "",
    ten: "",
    eleven: "",
    twelve: "",
    thirteen: "",
    fourteen: "",
    fifteen: "",
    sixteen: "",
    seventeen: "",
    eighteen: "",
    nineteen: "",
    twenty: "",
    twentyone: "",
    twentytwo: "",
    twentythree: "",
    twentyfour: "",
    twentyfive: "",
    twentysix: "",
    twentyseven: "",
    twentyeight: ""
  });
  const [mar, setMar] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "",
    nine: "",
    ten: "",
    eleven: "",
    twelve: "",
    thirteen: "",
    fourteen: "",
    fifteen: "",
    sixteen: "",
    seventeen: "",
    eighteen: "",
    nineteen: "",
    twenty: "",
    twentyone: "",
    twentytwo: "",
    twentythree: "",
    twentyfour: "",
    twentyfive: "",
    twentysix: "",
    twentyseven: "",
    twentyeight: "",
    twentynine: "",
    thirty: "",
    thirtyone: ""
  });
  const [apr, setApr] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "",
    nine: "",
    ten: "",
    eleven: "",
    twelve: "",
    thirteen: "",
    fourteen: "",
    fifteen: "",
    sixteen: "",
    seventeen: "",
    eighteen: "",
    nineteen: "",
    twenty: "",
    twentyone: "",
    twentytwo: "",
    twentythree: "",
    twentyfour: "",
    twentyfive: "",
    twentysix: "",
    twentyseven: "",
    twentyeight: "",
    twentynine: "",
    thirty: ""
  });
  const [may, setMay] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "",
    nine: "",
    ten: "",
    eleven: "",
    twelve: "",
    thirteen: "",
    fourteen: "",
    fifteen: "",
    sixteen: "",
    seventeen: "",
    eighteen: "",
    nineteen: "",
    twenty: "",
    twentyone: "",
    twentytwo: "",
    twentythree: "",
    twentyfour: "",
    twentyfive: "",
    twentysix: "",
    twentyseven: "",
    twentyeight: "",
    twentynine: "",
    thirty: "",
    thirtyone: ""
  });
  const [jun, setJun] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "",
    nine: "",
    ten: "",
    eleven: "",
    twelve: "",
    thirteen: "",
    fourteen: "",
    fifteen: "",
    sixteen: "",
    seventeen: "",
    eighteen: "",
    nineteen: "",
    twenty: "",
    twentyone: "",
    twentytwo: "",
    twentythree: "",
    twentyfour: "",
    twentyfive: "",
    twentysix: "",
    twentyseven: "",
    twentyeight: "",
    twentynine: "",
    thirty: ""
  });
  const [jul, setJul] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "",
    nine: "",
    ten: "",
    eleven: "",
    twelve: "",
    thirteen: "",
    fourteen: "",
    fifteen: "",
    sixteen: "",
    seventeen: "",
    eighteen: "",
    nineteen: "",
    twenty: "",
    twentyone: "",
    twentytwo: "",
    twentythree: "",
    twentyfour: "",
    twentyfive: "",
    twentysix: "",
    twentyseven: "",
    twentyeight: "",
    twentynine: "",
    thirty: "",
    thirtyone: ""
  });
  const [aug, setAug] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "",
    nine: "",
    ten: "",
    eleven: "",
    twelve: "",
    thirteen: "",
    fourteen: "",
    fifteen: "",
    sixteen: "",
    seventeen: "",
    eighteen: "",
    nineteen: "",
    twenty: "",
    twentyone: "",
    twentytwo: "",
    twentythree: "",
    twentyfour: "",
    twentyfive: "",
    twentysix: "",
    twentyseven: "",
    twentyeight: "",
    twentynine: "",
    thirty: "",
    thirtyone: ""
  });
  const [sep, setSep] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "",
    nine: "",
    ten: "",
    eleven: "",
    twelve: "",
    thirteen: "",
    fourteen: "",
    fifteen: "",
    sixteen: "",
    seventeen: "",
    eighteen: "",
    nineteen: "",
    twenty: "",
    twentyone: "",
    twentytwo: "",
    twentythree: "",
    twentyfour: "",
    twentyfive: "",
    twentysix: "",
    twentyseven: "",
    twentyeight: "",
    twentynine: "",
    thirty: ""
  });
  const [oct, setOct] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "",
    nine: "",
    ten: "",
    eleven: "",
    twelve: "",
    thirteen: "",
    fourteen: "",
    fifteen: "",
    sixteen: "",
    seventeen: "",
    eighteen: "",
    nineteen: "",
    twenty: "",
    twentyone: "",
    twentytwo: "",
    twentythree: "",
    twentyfour: "",
    twentyfive: "",
    twentysix: "",
    twentyseven: "",
    twentyeight: "",
    twentynine: "",
    thirty: "",
    thirtyone: ""
  });
  const [nov, setNov] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "",
    nine: "",
    ten: "",
    eleven: "",
    twelve: "",
    thirteen: "",
    fourteen: "",
    fifteen: "",
    sixteen: "",
    seventeen: "",
    eighteen: "",
    nineteen: "",
    twenty: "",
    twentyone: "",
    twentytwo: "",
    twentythree: "",
    twentyfour: "",
    twentyfive: "",
    twentysix: "",
    twentyseven: "",
    twentyeight: "",
    twentynine: "",
    thirty: ""
  });
  const [dec, setDec] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "",
    nine: "",
    ten: "",
    eleven: "",
    twelve: "",
    thirteen: "",
    fourteen: "",
    fifteen: "",
    sixteen: "",
    seventeen: "",
    eighteen: "",
    nineteen: "",
    twenty: "",
    twentyone: "",
    twentytwo: "",
    twentythree: "",
    twentyfour: "",
    twentyfive: "",
    twentysix: "",
    twentyseven: "",
    twentyeight: "",
    twentynine: "",
    thirty: "",
    thiryone: ""
  });

  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <Tabs.Root fitted>
            <Tabs.List>
              <Tabs.Trigger value="january">January</Tabs.Trigger>
              <Tabs.Indicator value="january" />
              <Tabs.Trigger value="february">February</Tabs.Trigger>
              <Tabs.Indicator value="february" />
              <Tabs.Trigger value="march">March</Tabs.Trigger>
              <Tabs.Indicator value="march" />
              <Tabs.Trigger value="april">April</Tabs.Trigger>
              <Tabs.Indicator value="april" />
              <Tabs.Trigger value="may">May</Tabs.Trigger>
              <Tabs.Indicator value="may" />
              <Tabs.Trigger value="june">June</Tabs.Trigger>
              <Tabs.Indicator value="june" />
              <Tabs.Trigger value="july">July</Tabs.Trigger>
              <Tabs.Indicator value="july" />
              <Tabs.Trigger value="august">August</Tabs.Trigger>
              <Tabs.Indicator value="august" />
              <Tabs.Trigger value="september">September</Tabs.Trigger>
              <Tabs.Indicator value="september" />
              <Tabs.Trigger value="october">October</Tabs.Trigger>
              <Tabs.Indicator value="october" />
              <Tabs.Trigger value="november">November</Tabs.Trigger>
              <Tabs.Indicator value="november" />
              <Tabs.Trigger value="december">December</Tabs.Trigger>
              <Tabs.Indicator value="december" />
            </Tabs.List>
            <Tabs.Content value="january">
              <b>Add items here (click field to submit)</b>
              <table>
                <b>January</b>
                <tr>
                  <th>Sunday</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    1{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJan({
                          ...jan,
                          one: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    2{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJan({
                          ...jan,
                          two: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    3{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJan({
                          ...jan,
                          three: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    4{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJan({
                          ...jan,
                          four: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    5{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJan({
                          ...jan,
                          five: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    6{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJan({
                          ...jan,
                          six: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    7{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJan({
                          ...jan,
                          seven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    8{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJan({
                          ...jan,
                          eight: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    9{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJan({
                          ...jan,
                          nine: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    10{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJan({
                          ...jan,
                          ten: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    11{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJan({
                          ...jan,
                          eleven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    12{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJan({
                          ...jan,
                          twelve: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    13{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJan({
                          ...jan,
                          thirteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    14{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJan({
                          ...jan,
                          fourteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    15{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJan({
                          ...jan,
                          fifteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    16{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJan({
                          ...jan,
                          sixteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    17{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJan({
                          ...jan,
                          seventeen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    18{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJan({
                          ...jan,
                          eighteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    19{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJan({
                          ...jan,
                          nineteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    20{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJan({
                          ...jan,
                          twenty: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    21{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJan({
                          ...jan,
                          twentyone: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    22{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJan({
                          ...jan,
                          twentytwo: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    23{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJan({
                          ...jan,
                          twentythree: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    24{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJan({
                          ...jan,
                          twentyfour: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    25{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJan({
                          ...jan,
                          twentyfive: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    26{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJan({
                          ...jan,
                          twentysix: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    27{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJan({
                          ...jan,
                          twentyseven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    28{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJan({
                          ...jan,
                          twentyeight: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    29{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJan({
                          ...jan,
                          twentynine: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    30{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJan({
                          ...jan,
                          thirty: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    31{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJan({
                          ...jan,
                          thirtyone: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td></td>
                </tr>
              </table>
            </Tabs.Content>
            <Tabs.Content value="february">
              <b>Add items here (click field to submit)</b>
              <table>
                <b>February</b>
                <tr>
                  <th>Sunday</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    1{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setFeb({
                          ...feb,
                          one: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    2{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setFeb({
                          ...feb,
                          two: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    3{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setFeb({
                          ...feb,
                          three: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    4{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setFeb({
                          ...feb,
                          four: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    5{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setFeb({
                          ...feb,
                          five: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    6{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setFeb({
                          ...feb,
                          six: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    7{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setFeb({
                          ...feb,
                          seven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    8{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setFeb({
                          ...feb,
                          eight: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    9{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setFeb({
                          ...feb,
                          nine: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    10{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setFeb({
                          ...feb,
                          ten: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    11{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setFeb({
                          ...feb,
                          eleven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    12{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setFeb({
                          ...feb,
                          twelve: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    13{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setFeb({
                          ...feb,
                          thirteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    14{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setFeb({
                          ...feb,
                          fourteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    15{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setFeb({
                          ...feb,
                          fifteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    16{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setFeb({
                          ...feb,
                          sixteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    17{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setFeb({
                          ...feb,
                          seventeen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    18{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setFeb({
                          ...feb,
                          eighteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    19{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setFeb({
                          ...feb,
                          nineteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    20{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setFeb({
                          ...feb,
                          twenty: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    21{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setFeb({
                          ...feb,
                          twentyone: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    22{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setFeb({
                          ...feb,
                          twentytwo: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    23{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setFeb({
                          ...feb,
                          twentythree: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    24{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setFeb({
                          ...feb,
                          twentyfour: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    25{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setFeb({
                          ...feb,
                          twentyfive: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    26{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setFeb({
                          ...feb,
                          twentysix: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    27{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setFeb({
                          ...feb,
                          twentyseven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    28{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setFeb({
                          ...feb,
                          twentyeight: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td></td>
                </tr>
              </table>
            </Tabs.Content>
            <Tabs.Content value="march">
              <b>Add items here (click field to submit)</b>
              <table>
                <b>March</b>
                <tr>
                  <th>Sunday</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    1{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMar({
                          ...mar,
                          one: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    2{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMar({
                          ...mar,
                          two: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    3{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMar({
                          ...mar,
                          three: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    4{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMar({
                          ...mar,
                          four: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    5{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMar({
                          ...mar,
                          five: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    6{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMar({
                          ...mar,
                          six: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    7{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMar({
                          ...mar,
                          seven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    8{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMar({
                          ...mar,
                          eight: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    9{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMar({
                          ...mar,
                          nine: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    10{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMar({
                          ...mar,
                          ten: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    11{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMar({
                          ...mar,
                          eleven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    12{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMar({
                          ...mar,
                          twelve: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    13{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMar({
                          ...mar,
                          thirteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    14{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMar({
                          ...mar,
                          fourteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    15{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMar({
                          ...mar,
                          fifteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    16{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMar({
                          ...mar,
                          sixteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    17{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMar({
                          ...mar,
                          seventeen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    18{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMar({
                          ...mar,
                          eighteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    19{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMar({
                          ...mar,
                          nineteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    20{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMar({
                          ...mar,
                          twenty: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    21{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMar({
                          ...mar,
                          twentyone: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    22{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMar({
                          ...mar,
                          twentytwo: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    23{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMar({
                          ...mar,
                          twentythree: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    24{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMar({
                          ...mar,
                          twentyfour: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    25{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMar({
                          ...mar,
                          twentyfive: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    26{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMar({
                          ...mar,
                          twentysix: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    27{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMar({
                          ...mar,
                          twentyseven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    28{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMar({
                          ...mar,
                          twentyeight: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    29{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMar({
                          ...mar,
                          twentynine: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    30{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMar({
                          ...mar,
                          thirty: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    31{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMar({
                          ...mar,
                          thirtyone: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </Tabs.Content>
            <Tabs.Content value="april">
              <b>Add items here (click field to submit)</b>
              <table>
                <b>April</b>
                <tr>
                  <th>Sunday</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    1{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setApr({
                          ...apr,
                          one: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    2{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setApr({
                          ...apr,
                          two: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    3{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setApr({
                          ...apr,
                          three: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    4{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setApr({
                          ...apr,
                          four: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    5{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setApr({
                          ...apr,
                          five: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    6
                    <input
                      type="text"
                      onChange={e => {
                        setApr({
                          ...apr,
                          six: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    7{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setApr({
                          ...apr,
                          seven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    8{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setApr({
                          ...apr,
                          eight: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    9{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setApr({
                          ...apr,
                          nine: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    10{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setApr({
                          ...apr,
                          ten: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    11{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setApr({
                          ...apr,
                          eleven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    12{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setApr({
                          ...apr,
                          twelve: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    13{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setApr({
                          ...apr,
                          thirteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    14{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setApr({
                          ...apr,
                          fourteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    15{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setApr({
                          ...apr,
                          fifteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    16{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setApr({
                          ...apr,
                          sixteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    17{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setApr({
                          ...apr,
                          seventeen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    18{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setApr({
                          ...apr,
                          eighteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    19{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setApr({
                          ...apr,
                          nineteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    20{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setApr({
                          ...apr,
                          twenty: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    21{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setApr({
                          ...apr,
                          twentyone: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    22{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setApr({
                          ...apr,
                          twentytwo: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    23{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setApr({
                          ...apr,
                          twentythree: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    24{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setApr({
                          ...apr,
                          twentyfour: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    25{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setApr({
                          ...apr,
                          twentyfive: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    26{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setApr({
                          ...apr,
                          twentysix: ""
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    27{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setApr({
                          ...apr,
                          twentyseven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    28{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setApr({
                          ...apr,
                          twentyeight: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    29{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setApr({
                          ...apr,
                          twentynine: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    30{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setApr({
                          ...apr,
                          thirty: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </Tabs.Content>
            <Tabs.Content value="may">
              <b>Add items here (click field to submit)</b>
              <table>
                <b>May</b>
                <tr>
                  <th>Sunday</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    1{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMay({
                          ...may,
                          one: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    2{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMay({
                          ...may,
                          two: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    3{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMay({
                          ...may,
                          three: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    4{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMay({
                          ...may,
                          four: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    5{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMay({
                          ...may,
                          five: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    6{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMay({
                          ...may,
                          six: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    7{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMay({
                          ...may,
                          seven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    8{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMay({
                          ...may,
                          eight: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    9{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMay({
                          ...may,
                          nine: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    10{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMay({
                          ...may,
                          ten: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    11{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMay({
                          ...may,
                          eleven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    12{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMay({
                          ...may,
                          twelve: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    13{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMay({
                          ...may,
                          thirteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    14{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMay({
                          ...may,
                          fourteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    15{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMay({
                          ...may,
                          fifteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    16{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMay({
                          ...may,
                          sixteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    17{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMay({
                          ...may,
                          seventeen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    18{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMay({
                          ...may,
                          eighteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    19{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMay({
                          ...may,
                          nineteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    20{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMay({
                          ...may,
                          twenty: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    21{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMay({
                          ...may,
                          twentyone: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    22{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMay({
                          ...may,
                          twentytwo: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    23{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMay({
                          ...may,
                          twentythree: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    24{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMay({
                          ...may,
                          twentyfour: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    25{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMay({
                          ...may,
                          twentyfive: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    26{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMay({
                          ...may,
                          twentysix: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    27{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMay({
                          ...may,
                          twentyseven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    28{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMay({
                          ...may,
                          twentyeight: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    29{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMay({
                          ...may,
                          twentynine: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    30{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMay({
                          ...may,
                          thirty: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    31{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setMay({
                          ...may,
                          thirtyone: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
              </table>
            </Tabs.Content>
            <Tabs.Content value="june">
              <b>Add items here (click field to submit)</b>
              <table>
                <b>June</b>
                <tr>
                  <th>Sunday</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                </tr>
                <tr>
                  <td>
                    1{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJun({
                          ...jun,
                          one: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    2{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJun({
                          ...jun,
                          two: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    3{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJun({
                          ...jun,
                          three: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    4{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJun({
                          ...jun,
                          four: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    5{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJun({
                          ...jun,
                          five: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    6{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJun({
                          ...jun,
                          six: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    7{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJun({
                          ...jun,
                          seven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    8{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJun({
                          ...jun,
                          eight: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    9{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJun({
                          ...jun,
                          nine: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    10{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJun({
                          ...jun,
                          ten: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    11{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJun({
                          ...jun,
                          eleven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    12{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJun({
                          ...jun,
                          twelve: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    13{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJun({
                          ...jun,
                          thirteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    14{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJun({
                          ...jun,
                          fourteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    15{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJun({
                          ...jun,
                          fifteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    16{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJun({
                          ...jun,
                          sixteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    17{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJun({
                          ...jun,
                          seventeen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    18{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJun({
                          ...jun,
                          eighteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    19{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJun({
                          ...jun,
                          nineteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    20{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJun({
                          ...jun,
                          twenty: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    21{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJun({
                          ...jun,
                          twentyone: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    22{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJun({
                          ...jun,
                          twentytwo: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    23{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJun({
                          ...jun,
                          twentythree: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    24{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJun({
                          ...jun,
                          twentyfour: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    25{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJun({
                          ...jun,
                          twentyfive: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    26{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJun({
                          ...jun,
                          twentysix: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    27{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJun({
                          ...jun,
                          twentyseven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    28{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJun({
                          ...jun,
                          twentyeight: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    29{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJun({
                          ...jun,
                          twentynine: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    30{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJun({
                          ...jun,
                          thirty: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </Tabs.Content>
            <Tabs.Content value="july">
              <b>Add items here (click field to submit)</b>
              <table>
                <b>July</b>
                <tr>
                  <th>Sunday</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    1{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJul({
                          ...jul,
                          one: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    2{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJul({
                          ...jul,
                          two: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    3{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJul({
                          ...jul,
                          three: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    4{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJul({
                          ...jul,
                          four: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    5{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJul({
                          ...jul,
                          five: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    6{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJul({
                          ...jul,
                          six: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    7{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJul({
                          ...jul,
                          seven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    8{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJul({
                          ...jul,
                          eight: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    9{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJul({
                          ...jul,
                          nine: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    10{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJul({
                          ...jul,
                          ten: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    11{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJul({
                          ...jul,
                          eleven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    12{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJul({
                          ...jul,
                          twelve: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    13{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJul({
                          ...jul,
                          thirteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    14{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJul({
                          ...jul,
                          fourteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    15{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJul({
                          ...jul,
                          fifteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    16{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJul({
                          ...jul,
                          sixteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    17{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJul({
                          ...jul,
                          seventeen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    18{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJul({
                          ...jul,
                          eighteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    19{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJul({
                          ...jul,
                          nineteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    20{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJul({
                          ...jul,
                          twenty: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    21{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJul({
                          ...jul,
                          twentyone: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    22{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJul({
                          ...jul,
                          twentytwo: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    23{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJul({
                          ...jul,
                          twentythree: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    24{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJul({
                          ...jul,
                          twentyfour: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    25{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJul({
                          ...jul,
                          twentyfive: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    26{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJul({
                          ...jul,
                          twentysix: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    27{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJul({
                          ...jul,
                          twentyseven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    28{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJul({
                          ...jul,
                          twentyeight: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    29{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJul({
                          ...jul,
                          twentynine: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    30{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJul({
                          ...jul,
                          thirty: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    31{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setJul({
                          ...jul,
                          thirtyone: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </Tabs.Content>
            <Tabs.Content value="august">
              <b>Add items here (click field to submit)</b>
              <table>
                <b>August</b>
                <tr>
                  <th>Sunday</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    1{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setAug({
                          ...aug,
                          one: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    2{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setAug({
                          ...aug,
                          two: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    3{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setAug({
                          ...aug,
                          three: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    4{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setAug({
                          ...aug,
                          four: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    5{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setAug({
                          ...aug,
                          five: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    6{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setAug({
                          ...aug,
                          six: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    7{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setAug({
                          ...aug,
                          seven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    8{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setAug({
                          ...aug,
                          eight: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    9{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setAug({
                          ...aug,
                          nine: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    10{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setAug({
                          ...aug,
                          ten: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    11{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setAug({
                          ...aug,
                          eleven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    12{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setAug({
                          ...aug,
                          twelve: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    13{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setAug({
                          ...aug,
                          thirteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    14{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setAug({
                          ...aug,
                          fourteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    15{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setAug({
                          ...aug,
                          fifteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    16{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setAug({
                          ...aug,
                          sixteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    17{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setAug({
                          ...aug,
                          seventeen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    18{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setAug({
                          ...aug,
                          eighteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    19{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setAug({
                          ...aug,
                          nineteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    20{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setAug({
                          ...aug,
                          twenty: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    21{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setAug({
                          ...aug,
                          twentyone: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    22{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setAug({
                          ...aug,
                          twentytwo: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    23{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setAug({
                          ...aug,
                          twentythree: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    24{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setAug({
                          ...aug,
                          twentyfour: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    25{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setAug({
                          ...aug,
                          twentyfive: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    26{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setAug({
                          ...aug,
                          twentysix: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    27{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setAug({
                          ...aug,
                          twentyseven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    28{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setAug({
                          ...aug,
                          twentyeight: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    29{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setAug({
                          ...aug,
                          twentynine: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    30{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setAug({
                          ...aug,
                          thirty: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    31{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setAug({
                          ...aug,
                          thirtyone: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </Tabs.Content>
            <Tabs.Content value="september">
              <b>Add items here (click field to submit)</b>
              <table>
                <b>September</b>
                <tr>
                  <th>Sunday</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    1{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setSep({
                          ...sep,
                          one: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    2{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setSep({
                          ...sep,
                          two: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    3{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setSep({
                          ...sep,
                          three: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    4{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setSep({
                          ...sep,
                          four: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    5{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setSep({
                          ...sep,
                          five: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    6{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setSep({
                          ...sep,
                          six: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    7{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setSep({
                          ...sep,
                          seven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    8{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setSep({
                          ...sep,
                          eight: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    9{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setSep({
                          ...sep,
                          nine: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    10{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setSep({
                          ...sep,
                          ten: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    11{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setSep({
                          ...sep,
                          eleven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    12{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setSep({
                          ...sep,
                          twelve: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    13{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setSep({
                          ...sep,
                          thirteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    14{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setSep({
                          ...sep,
                          fourteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    15{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setSep({
                          ...sep,
                          fifteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    16{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setSep({
                          ...sep,
                          sixteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    17{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setSep({
                          ...sep,
                          seventeen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    18{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setSep({
                          ...sep,
                          eighteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    19{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setSep({
                          ...sep,
                          nineteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    20{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setSep({
                          ...sep,
                          twenty: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    21{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setSep({
                          ...sep,
                          twentyone: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    22{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setSep({
                          ...sep,
                          twentytwo: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    23{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setSep({
                          ...sep,
                          twentythree: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    24{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setSep({
                          ...sep,
                          twentyfour: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    25{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setSep({
                          ...sep,
                          twentyfive: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    26{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setSep({
                          ...sep,
                          twentysix: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    27{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setSep({
                          ...sep,
                          twentyseven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    28{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setSep({
                          ...sep,
                          twentyeight: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    29{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setSep({
                          ...sep,
                          twentynine: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    30{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setSep({
                          ...sep,
                          thirty: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </Tabs.Content>
            <Tabs.Content value="october">
              <b>Add items here (click field to submit)</b>
              <table>
                <b>October</b>
                <tr>
                  <th>Sunday</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    1{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setOct({
                          ...oct,
                          one: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    2{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setOct({
                          ...oct,
                          two: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    3{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setOct({
                          ...oct,
                          three: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    4{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setOct({
                          ...oct,
                          four: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    5{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setOct({
                          ...oct,
                          five: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    6{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setOct({
                          ...oct,
                          six: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    7{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setOct({
                          ...oct,
                          seven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    8{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setOct({
                          ...oct,
                          eight: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    9{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setOct({
                          ...oct,
                          nine: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    10{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setOct({
                          ...oct,
                          ten: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    11{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setOct({
                          ...oct,
                          eleven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    12{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setOct({
                          ...oct,
                          twelve: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    13{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setOct({
                          ...oct,
                          thirteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    14{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setOct({
                          ...oct,
                          fourteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    15{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setOct({
                          ...oct,
                          fifteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    16{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setOct({
                          ...oct,
                          sixteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    17{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setOct({
                          ...oct,
                          seventeen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    18{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setOct({
                          ...oct,
                          eighteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    19{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setOct({
                          ...oct,
                          nineteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    20{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setOct({
                          ...oct,
                          twenty: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    21{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setOct({
                          ...oct,
                          twentyone: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    22{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setOct({
                          ...oct,
                          twentytwo: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    23{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setOct({
                          ...oct,
                          twentythree: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    24{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setOct({
                          ...oct,
                          twentyfour: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    25{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setOct({
                          ...oct,
                          twentyfive: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    26{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setOct({
                          ...oct,
                          twentysix: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    27{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setOct({
                          ...oct,
                          twentyseven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    28{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setOct({
                          ...oct,
                          twentyeight: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    29{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setOct({
                          ...oct,
                          twentynine: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    30{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setOct({
                          ...oct,
                          thirty: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    31{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setOct({
                          ...oct,
                          thirtyone: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td></td>
                </tr>
              </table>
            </Tabs.Content>
            <Tabs.Content value="november">
              <b>Add items here (click field to submit)</b>
              <table>
                <b>November</b>
                <tr>
                  <th>Sunday</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    1{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setNov({
                          ...nov,
                          one: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    2{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setNov({
                          ...nov,
                          two: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    3{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setNov({
                          ...nov,
                          three: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    4{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setNov({
                          ...nov,
                          four: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    5{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setNov({
                          ...nov,
                          five: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    6{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setNov({
                          ...nov,
                          six: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    7{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setNov({
                          ...nov,
                          seven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    8{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setNov({
                          ...nov,
                          eight: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    9{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setNov({
                          ...nov,
                          nine: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    10{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setNov({
                          ...nov,
                          ten: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    11{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setNov({
                          ...nov,
                          eleven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    12{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setNov({
                          ...nov,
                          twelve: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    13{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setNov({
                          ...nov,
                          thirteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    14{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setNov({
                          ...nov,
                          fourteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    15{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setNov({
                          ...nov,
                          fifteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    16{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setNov({
                          ...nov,
                          sixteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    17{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setNov({
                          ...nov,
                          seventeen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    18{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setNov({
                          ...nov,
                          eighteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    19{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setNov({
                          ...nov,
                          nineteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    20{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setNov({
                          ...nov,
                          twenty: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    21{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setNov({
                          ...nov,
                          twentyone: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    22{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setNov({
                          ...nov,
                          twentytwo: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    23{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setNov({
                          ...nov,
                          twentythree: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    24{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setNov({
                          ...nov,
                          twentyfour: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    25{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setNov({
                          ...nov,
                          twentyfive: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    26{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setNov({
                          ...nov,
                          twentysix: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    27{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setNov({
                          ...nov,
                          twentyseven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    28{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setNov({
                          ...nov,
                          twentyeight: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    29{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setNov({
                          ...nov,
                          twentynine: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    30{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setNov({
                          ...nov,
                          thirty: e.target.value
                        })
                      }}
                    ></input>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </Tabs.Content>
            <Tabs.Content value="december">
              <b>Add items here (click field to submit)</b>
              <table>
                <b>December</b>
                <tr>
                  <th>Sunday</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    1{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setDec({
                          ...dec,
                          one: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    2{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setDec({
                          ...dec,
                          two: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    3{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setDec({
                          ...dec,
                          three: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    4{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setDec({
                          ...dec,
                          four: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    5{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setDec({
                          ...dec,
                          five: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    6{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setDec({
                          ...dec,
                          six: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    7{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setDec({
                          ...dec,
                          seven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    8{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setDec({
                          ...dec,
                          eight: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    9{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setDec({
                          ...dec,
                          nine: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    10{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setDec({
                          ...dec,
                          ten: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    11{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setDec({
                          ...dec,
                          eleven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    12{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setDec({
                          ...dec,
                          twelve: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    13{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setDec({
                          ...dec,
                          thirteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    14{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setDec({
                          ...dec,
                          fourteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    15{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setDec({
                          ...dec,
                          fifteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    16{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setDec({
                          ...dec,
                          sixteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    17{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setDec({
                          ...dec,
                          seventeen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    18{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setDec({
                          ...dec,
                          eighteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    19{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setDec({
                          ...dec,
                          nineteen: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    20{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setDec({
                          ...dec,
                          twenty: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    21{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setDec({
                          ...dec,
                          twentyone: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    22{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setDec({
                          ...dec,
                          twentytwo: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    23{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setDec({
                          ...dec,
                          twentythree: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    24{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setDec({
                          ...dec,
                          twentyfour: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    25{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setDec({
                          ...dec,
                          twentyfive: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    26{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setDec({
                          ...dec,
                          twentysix: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    27{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setDec({
                          ...dec,
                          twentyseven: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    28{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setDec({
                          ...dec,
                          twentyeight: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    29{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setDec({
                          ...dec,
                          twentynine: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    30{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setDec({
                          ...dec,
                          thirty: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td>
                    31{" "}
                    <input
                      type="text"
                      onChange={e => {
                        setDec({
                          ...dec,
                          thirtyone: e.target.value
                        });
                      }}
                    ></input>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </Tabs.Content>
          </Tabs.Root>
        </Provider>
        <b>Add items here (click field to submit)</b>
        <table>
          <b>January</b>
          <tr>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              1{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jan.one}
              ></input>
            </td>
            <td>
              2{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jan.two}
              ></input>
            </td>
            <td>
              3{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jan.three}
              ></input>
            </td>
            <td>
              4{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jan.four}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              5{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jan.five}
              ></input>
            </td>
            <td>
              6{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jan.six}
              ></input>
            </td>
            <td>
              7{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jan.seven}
              ></input>
            </td>
            <td>
              8{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jan.eight}
              ></input>
            </td>
            <td>
              9{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jan.nine}
              ></input>
            </td>
            <td>
              10{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jan.ten}
              ></input>
            </td>
            <td>
              11{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jan.eleven}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              12{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jan.twelve}
              ></input>
            </td>
            <td>
              13{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jan.thirteen}
              ></input>
            </td>
            <td>
              14{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jan.fourteen}
              ></input>
            </td>
            <td>
              15{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jan.fifteen}
              ></input>
            </td>
            <td>
              16{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jan.sixteen}
              ></input>
            </td>
            <td>
              17{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jan.seventeen}
              ></input>
            </td>
            <td>
              18{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jan.eighteen}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              19{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jan.nineteen}
              ></input>
            </td>
            <td>
              20{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jan.twenty}
              ></input>
            </td>
            <td>
              21{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jan.twentyone}
              ></input>
            </td>
            <td>
              22{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jan.twentytwo}
              ></input>
            </td>
            <td>
              23{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jan.twentythree}
              ></input>
            </td>
            <td>
              24{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jan.twentyfour}
              ></input>
            </td>
            <td>
              25{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jan.twentyfive}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              26{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jan.twentysix}
              ></input>
            </td>
            <td>
              27{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jan.twentyseven}
              ></input>
            </td>
            <td>
              28{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jan.twentyeight}
              ></input>
            </td>
            <td>
              29{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jan.twentynine}
              ></input>
            </td>
            <td>
              30{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jan.thirty}
              ></input>
            </td>
            <td>
              31{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jan.thirtyone}
              ></input>
            </td>
            <td></td>
          </tr>
        </table>
        <b>Add items here (click field to submit)</b>
        <table>
          <b>February</b>
          <tr>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              1{" "}
              <input
                type="text"
                onChange={() => { }}
                value={feb.one}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              2{" "}
              <input
                type="text"
                onChange={() => { }}
                value={feb.two}
              ></input>
            </td>
            <td>
              3{" "}
              <input
                type="text"
                onChange={() => { }}
                value={feb.three}
              ></input>
            </td>
            <td>
              4{" "}
              <input
                type="text"
                onChange={() => { }}
                value={feb.four}
              ></input>
            </td>
            <td>
              5{" "}
              <input
                type="text"
                onChange={() => { }}
                value={feb.five}
              ></input>
            </td>
            <td>
              6{" "}
              <input
                type="text"
                onChange={() => { }}
                value={feb.six}
              ></input>
            </td>
            <td>
              7{" "}
              <input
                type="text"
                onChange={() => { }}
                value={feb.seven}
              ></input>
            </td>
            <td>
              8{" "}
              <input
                type="text"
                onChange={() => { }}
                value={feb.eight}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              9{" "}
              <input
                type="text"
                onChange={() => { }}
                value={feb.nine}
              ></input>
            </td>
            <td>
              10{" "}
              <input
                type="text"
                onChange={() => { }}
                value={feb.ten}
              ></input>
            </td>
            <td>
              11{" "}
              <input
                type="text"
                onChange={() => { }}
                value={feb.eleven}
              ></input>
            </td>
            <td>
              12{" "}
              <input
                type="text"
                onChange={() => { }}
                value={feb.twelve}
              ></input>
            </td>
            <td>
              13{" "}
              <input
                type="text"
                onChange={() => { }}
                value={feb.thirteen}
              ></input>
            </td>
            <td>
              14{" "}
              <input
                type="text"
                onChange={() => { }}
                value={feb.fourteen}
              ></input>
            </td>
            <td>
              15{" "}
              <input
                type="text"
                onChange={() => { }}
                value={feb.fifteen}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              16{" "}
              <input
                type="text"
                onChange={() => { }}
                value={feb.sixteen}
              ></input>
            </td>
            <td>
              17{" "}
              <input
                type="text"
                onChange={() => { }}
                value={feb.seventeen}
              ></input>
            </td>
            <td>
              18{" "}
              <input
                type="text"
                onChange={() => { }}
                value={feb.eighteen}
              ></input>
            </td>
            <td>
              19{" "}
              <input
                type="text"
                onChange={() => { }}
                value={feb.nineteen}
              ></input>
            </td>
            <td>
              20{" "}
              <input
                type="text"
                onChange={() => { }}
                value={feb.twenty}
              ></input>
            </td>
            <td>
              21{" "}
              <input
                type="text"
                onChange={() => { }}
                value={feb.twentyone}
              ></input>
            </td>
            <td>
              22{" "}
              <input
                type="text"
                onChange={() => { }}
                value={feb.twentytwo}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              23{" "}
              <input
                type="text"
                onChange={() => { }}
                value={feb.twentythree}
              ></input>
            </td>
            <td>
              24{" "}
              <input
                type="text"
                onChange={() => { }}
                value={feb.twentyfour}
              ></input>
            </td>
            <td>
              25{" "}
              <input
                type="text"
                onChange={() => { }}
                value={feb.twentyfive}
              ></input>
            </td>
            <td>
              26{" "}
              <input
                type="text"
                onChange={() => { }}
                value={feb.twentysix}
              ></input>
            </td>
            <td>
              27{" "}
              <input
                type="text"
                onChange={() => { }}
                value={feb.twentyseven}
              ></input>
            </td>
            <td>
              28{" "}
              <input
                type="text"
                onChange={() => { }}
                value={feb.twentyeight}
              ></input>
            </td>
            <td></td>
          </tr>
        </table>
        <b>Add items here (click field to submit)</b>
        <table>
          <b>March</b>
          <tr>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              1{" "}
              <input
                type="text"
                onChange={() => { }}
                value={mar.one}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              2{" "}
              <input
                type="text"
                onChange={() => { }}
                value={mar.two}
              ></input>
            </td>
            <td>
              3{" "}
              <input
                type="text"
                onChange={() => { }}
                value={mar.three}
              ></input>
            </td>
            <td>
              4{" "}
              <input
                type="text"
                onChange={() => { }}
                value={mar.four}
              ></input>
            </td>
            <td>
              5{" "}
              <input
                type="text"
                onChange={() => { }}
                value={mar.five}
              ></input>
            </td>
            <td>
              6{" "}
              <input
                type="text"
                onChange={() => { }}
                value={mar.six}
              ></input>
            </td>
            <td>
              7{" "}
              <input
                type="text"
                onChange={() => { }}
                value={mar.seven}
              ></input>
            </td>
            <td>
              8{" "}
              <input
                type="text"
                onChange={() => { }}
                value={mar.eight}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              9{" "}
              <input
                type="text"
                onChange={() => { }}
                value={mar.nine}
              ></input>
            </td>
            <td>
              10{" "}
              <input
                type="text"
                onChange={() => { }}
                value={mar.ten}
              ></input>
            </td>
            <td>
              11{" "}
              <input
                type="text"
                onChange={() => { }}
                value={mar.eleven}
              ></input>
            </td>
            <td>
              12{" "}
              <input
                type="text"
                onChange={() => { }}
                value={mar.twelve}
              ></input>
            </td>
            <td>
              13{" "}
              <input
                type="text"
                onChange={() => { }}
                value={mar.thirteen}
              ></input>
            </td>
            <td>
              14{" "}
              <input
                type="text"
                onChange={() => { }}
                value={mar.fourteen}
              ></input>
            </td>
            <td>
              15{" "}
              <input
                type="text"
                onChange={() => { }}
                value={mar.fifteen}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              16{" "}
              <input
                type="text"
                onChange={() => { }}
                value={mar.sixteen}
              ></input>
            </td>
            <td>
              17{" "}
              <input
                type="text"
                onChange={() => { }}
                value={mar.seventeen}
              ></input>
            </td>
            <td>
              18{" "}
              <input
                type="text"
                onChange={() => { }}
                value={mar.eighteen}
              ></input>
            </td>
            <td>
              19{" "}
              <input
                type="text"
                onChange={() => { }}
                value={mar.nineteen}
              ></input>
            </td>
            <td>
              20{" "}
              <input
                type="text"
                onChange={() => { }}
                value={mar.twenty}
              ></input>
            </td>
            <td>
              21{" "}
              <input
                type="text"
                onChange={() => { }}
                value={mar.twentyone}
              ></input>
            </td>
            <td>
              22{" "}
              <input
                type="text"
                onChange={() => { }}
                value={mar.twentytwo}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              23{" "}
              <input
                type="text"
                onChange={() => { }}
                value={mar.twentythree}
              ></input>
            </td>
            <td>
              24{" "}
              <input
                type="text"
                onChange={() => { }}
                value={mar.twentyfour}
              ></input>
            </td>
            <td>
              25{" "}
              <input
                type="text"
                onChange={() => { }}
                value={mar.twentyfive}
              ></input>
            </td>
            <td>
              26{" "}
              <input
                type="text"
                onChange={() => { }}
                value={mar.twentysix}
              ></input>
            </td>
            <td>
              27{" "}
              <input
                type="text"
                onChange={() => { }}
                value={mar.twentyseven}
              ></input>
            </td>
            <td>
              28{" "}
              <input
                type="text"
                onChange={() => { }}
                value={mar.twentyeight}
              ></input>
            </td>
            <td>
              29{" "}
              <input
                type="text"
                onChange={() => { }}
                value={mar.twentynine}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              30{" "}
              <input
                type="text"
                onChange={() => { }}
                value={mar.thirty}
              ></input>
            </td>
            <td>
              31{" "}
              <input
                type="text"
                onChange={() => { }}
                value={mar.thirtyone}
              ></input>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
        <b>Add items here (click field to submit)</b>
        <table>
          <b>April</b>
          <tr>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>
              1{" "}
              <input
                type="text"
                onChange={() => { }}
                value={apr.one}
              ></input>
            </td>
            <td>
              2{" "}
              <input
                type="text"
                onChange={() => { }}
                value={apr.two}
              ></input>
            </td>
            <td>
              3{" "}
              <input
                type="text"
                onChange={() => { }}
                value={apr.three}
              ></input>
            </td>
            <td>
              4{" "}
              <input
                type="text"
                onChange={() => { }}
                value={apr.four}
              ></input>
            </td>
            <td>
              5{" "}
              <input
                type="text"
                onChange={() => { }}
                value={apr.five}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              6
              <input
                type="text"
                onChange={() => { }}
                value={apr.six}
              ></input>
            </td>
            <td>
              7{" "}
              <input
                type="text"
                onChange={() => { }}
                value={apr.seven}
              ></input>
            </td>
            <td>
              8{" "}
              <input
                type="text"
                onChange={() => { }}
                value={apr.eight}
              ></input>
            </td>
            <td>
              9{" "}
              <input
                type="text"
                onChange={() => { }}
                value={apr.nine}
              ></input>
            </td>
            <td>
              10{" "}
              <input
                type="text"
                onChange={() => { }}
                value={apr.ten}
              ></input>
            </td>
            <td>
              11{" "}
              <input
                type="text"
                onChange={() => { }}
                value={apr.eleven}
              ></input>
            </td>
            <td>
              12{" "}
              <input
                type="text"
                onChange={() => { }}
                value={apr.twelve}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              13{" "}
              <input
                type="text"
                onChange={() => { }}
                value={apr.thirteen}
              ></input>
            </td>
            <td>
              14{" "}
              <input
                type="text"
                onChange={() => { }}
                value={apr.fourteen}
              ></input>
            </td>
            <td>
              15{" "}
              <input
                type="text"
                onChange={() => { }}
                value={apr.fifteen}
              ></input>
            </td>
            <td>
              16{" "}
              <input
                type="text"
                onChange={() => { }}
                value={apr.sixteen}
              ></input>
            </td>
            <td>
              17{" "}
              <input
                type="text"
                onChange={() => { }}
                value={apr.seventeen}
              ></input>
            </td>
            <td>
              18{" "}
              <input
                type="text"
                onChange={() => { }}
                value={apr.eighteen}
              ></input>
            </td>
            <td>
              19{" "}
              <input
                type="text"
                onChange={() => { }}
                value={apr.nineteen}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              20{" "}
              <input
                type="text"
                onChange={() => { }}
                value={apr.twenty}
              ></input>
            </td>
            <td>
              21{" "}
              <input
                type="text"
                onChange={() => { }}
                value={apr.twentyone}
              ></input>
            </td>
            <td>
              22{" "}
              <input
                type="text"
                onChange={() => { }}
                value={apr.twentytwo}
              ></input>
            </td>
            <td>
              23{" "}
              <input
                type="text"
                onChange={() => { }}
                value={apr.twentythree}
              ></input>
            </td>
            <td>
              24{" "}
              <input
                type="text"
                onChange={() => { }}
                value={apr.twentyfour}
              ></input>
            </td>
            <td>
              25{" "}
              <input
                type="text"
                onChange={() => { }}
                value={apr.twentyfive}
              ></input>
            </td>
            <td>
              26{" "}
              <input
                type="text"
                onChange={() => { }}
                value={apr.twentysix}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              27{" "}
              <input
                type="text"
                onChange={() => { }}
                value={apr.twentyseven}
              ></input>
            </td>
            <td>
              28{" "}
              <input
                type="text"
                onChange={() => { }}
                value={apr.twentyeight}
              ></input>
            </td>
            <td>
              29{" "}
              <input
                type="text"
                onChange={() => { }}
                value={apr.twentynine}
              ></input>
            </td>
            <td>
              30{" "}
              <input
                type="text"
                onChange={() => { }}
                value={apr.thirty}
              ></input>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
        <b>Add items here (click field to submit)</b>
        <table>
          <b>May</b>
          <tr>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              1{" "}
              <input
                type="text"
                onChange={() => { }}
                value={may.one}
              ></input>
            </td>
            <td>
              2{" "}
              <input
                type="text"
                onChange={() => { }}
                value={may.two}
              ></input>
            </td>
            <td>
              3{" "}
              <input
                type="text"
                onChange={() => { }}
                value={may.three}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              4{" "}
              <input
                type="text"
                onChange={() => { }}
                value={may.four}
              ></input>
            </td>
            <td>
              5{" "}
              <input
                type="text"
                onChange={() => { }}
                value={may.five}
              ></input>
            </td>
            <td>
              6{" "}
              <input
                type="text"
                onChange={() => { }}
                value={may.six}
              ></input>
            </td>
            <td>
              7{" "}
              <input
                type="text"
                onChange={() => { }}
                value={may.seven}
              ></input>
            </td>
            <td>
              8{" "}
              <input
                type="text"
                onChange={() => { }}
                value={may.eight}
              ></input>
            </td>
            <td>
              9{" "}
              <input
                type="text"
                onChange={() => { }}
                value={may.nine}
              ></input>
            </td>
            <td>
              10{" "}
              <input
                type="text"
                onChange={() => { }}
                value={may.ten}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              11{" "}
              <input
                type="text"
                onChange={() => { }}
                value={may.eleven}
              ></input>
            </td>
            <td>
              12{" "}
              <input
                type="text"
                onChange={() => { }}
                value={may.twelve}
              ></input>
            </td>
            <td>
              13{" "}
              <input
                type="text"
                onChange={() => { }}
                value={may.thirteen}
              ></input>
            </td>
            <td>
              14{" "}
              <input
                type="text"
                onChange={() => { }}
                value={may.fourteen}
              ></input>
            </td>
            <td>
              15{" "}
              <input
                type="text"
                onChange={() => { }}
                value={may.fifteen}
              ></input>
            </td>
            <td>
              16{" "}
              <input
                type="text"
                onChange={() => { }}
                value={may.sixteen}
              ></input>
            </td>
            <td>
              17{" "}
              <input
                type="text"
                onChange={() => { }}
                value={may.seventeen}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              18{" "}
              <input
                type="text"
                onChange={() => { }}
                value={may.eighteen}
              ></input>
            </td>
            <td>
              19{" "}
              <input
                type="text"
                onChange={() => { }}
                value={may.nineteen}
              ></input>
            </td>
            <td>
              20{" "}
              <input
                type="text"
                onChange={() => { }}
                value={may.twenty}
              ></input>
            </td>
            <td>
              21{" "}
              <input
                type="text"
                onChange={() => { }}
                value={may.twentyone}
              ></input>
            </td>
            <td>
              22{" "}
              <input
                type="text"
                onChange={() => { }}
                value={may.twentytwo}
              ></input>
            </td>
            <td>
              23{" "}
              <input
                type="text"
                onChange={() => { }}
                value={may.twentythree}
              ></input>
            </td>
            <td>
              24{" "}
              <input
                type="text"
                onChange={() => { }}
                value={may.twentyfour}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              25{" "}
              <input
                type="text"
                onChange={() => { }}
                value={may.twentyfive}
              ></input>
            </td>
            <td>
              26{" "}
              <input
                type="text"
                onChange={() => { }}
                value={may.twentysix}
              ></input>
            </td>
            <td>
              27{" "}
              <input
                type="text"
                onChange={() => { }}
                value={may.twentyseven}
              ></input>
            </td>
            <td>
              28{" "}
              <input
                type="text"
                onChange={() => { }}
                value={may.twentyeight}
              ></input>
            </td>
            <td>
              29{" "}
              <input
                type="text"
                onChange={() => { }}
                value={may.twentynine}
              ></input>
            </td>
            <td>
              30{" "}
              <input
                type="text"
                onChange={() => { }}
                value={may.thirty}
              ></input>
            </td>
            <td>
              31{" "}
              <input
                type="text"
                onChange={() => { }}
                value={may.thirtyone}
              ></input>
            </td>
          </tr>
        </table>
        <b>Add items here (click field to submit)</b>
        <table>
          <b>June</b>
          <tr>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
          <tr>
            <td>
              1{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jun.one}
              ></input>
            </td>
            <td>
              2{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jun.two}
              ></input>
            </td>
            <td>
              3{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jun.three}
              ></input>
            </td>
            <td>
              4{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jun.four}
              ></input>
            </td>
            <td>
              5{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jun.five}
              ></input>
            </td>
            <td>
              6{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jun.six}
              ></input>
            </td>
            <td>
              7{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jun.seven}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              8{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jun.eight}
              ></input>
            </td>
            <td>
              9{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jun.nine}
              ></input>
            </td>
            <td>
              10{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jun.ten}
              ></input>
            </td>
            <td>
              11{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jun.eleven}
              ></input>
            </td>
            <td>
              12{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jun.twelve}
              ></input>
            </td>
            <td>
              13{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jun.thirteen}
              ></input>
            </td>
            <td>
              14{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jun.fourteen}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              15{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jun.fifteen}
              ></input>
            </td>
            <td>
              16{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jun.sixteen}
              ></input>
            </td>
            <td>
              17{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jun.seventeen}
              ></input>
            </td>
            <td>
              18{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jun.eighteen}
              ></input>
            </td>
            <td>
              19{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jun.nineteen}
              ></input>
            </td>
            <td>
              20{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jun.twenty}
              ></input>
            </td>
            <td>
              21{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jun.twentyone}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              22{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jun.twentytwo}
              ></input>
            </td>
            <td>
              23{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jun.twentythree}
              ></input>
            </td>
            <td>
              24{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jun.twentyfour}
              ></input>
            </td>
            <td>
              25{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jun.twentyfive}
              ></input>
            </td>
            <td>
              26{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jun.twentysix}
              ></input>
            </td>
            <td>
              27{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jun.twentyseven}
              ></input>
            </td>
            <td>
              28{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jun.twentyeight}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              29{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jun.twentynine}
              ></input>
            </td>
            <td>
              30{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jun.thirty}
              ></input>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
        <b>Add items here (click field to submit)</b>
        <table>
          <b>July</b>
          <tr>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>
              1{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jul.one}
              ></input>
            </td>
            <td>
              2{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jul.two}
              ></input>
            </td>
            <td>
              3{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jul.three}
              ></input>
            </td>
            <td>
              4{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jul.four}
              ></input>
            </td>
            <td>
              5{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jul.five}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              6{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jul.six}
              ></input>
            </td>
            <td>
              7{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jul.seven}
              ></input>
            </td>
            <td>
              8{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jul.eight}
              ></input>
            </td>
            <td>
              9{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jul.nine}
              ></input>
            </td>
            <td>
              10{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jul.ten}
              ></input>
            </td>
            <td>
              11{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jul.eleven}
              ></input>
            </td>
            <td>
              12{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jul.twelve}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              13{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jul.thirteen}
              ></input>
            </td>
            <td>
              14{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jul.fourteen}
              ></input>
            </td>
            <td>
              15{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jul.fifteen}
              ></input>
            </td>
            <td>
              16{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jul.sixteen}
              ></input>
            </td>
            <td>
              17{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jul.seventeen}
              ></input>
            </td>
            <td>
              18{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jul.eighteen}
              ></input>
            </td>
            <td>
              19{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jul.nineteen}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              20{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jul.twenty}
              ></input>
            </td>
            <td>
              21{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jul.twentyone}
              ></input>
            </td>
            <td>
              22{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jul.twentytwo}
              ></input>
            </td>
            <td>
              23{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jul.twentythree}
              ></input>
            </td>
            <td>
              24{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jul.twentyfour}
              ></input>
            </td>
            <td>
              25{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jul.twentyfive}
              ></input>
            </td>
            <td>
              26{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jul.twentysix}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              27{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jul.twentyseven}
              ></input>
            </td>
            <td>
              28{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jul.twentyeight}
              ></input>
            </td>
            <td>
              29{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jul.twentynine}
              ></input>
            </td>
            <td>
              30{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jul.thirty}
              ></input>
            </td>
            <td>
              31{" "}
              <input
                type="text"
                onChange={() => { }}
                value={jul.thirtyone}
              ></input>
            </td>
            <td></td>
            <td></td>
          </tr>
        </table>
        <b>Add items here (click field to submit)</b>
        <table>
          <b>August</b>
          <tr>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              1{" "}
              <input
                type="text"
                onChange={() => { }}
                value={aug.one}
              ></input>
            </td>
            <td>
              2{" "}
              <input
                type="text"
                onChange={() => { }}
                value={aug.two}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              3{" "}
              <input
                type="text"
                onChange={() => { }}
                value={aug.three}
              ></input>
            </td>
            <td>
              4{" "}
              <input
                type="text"
                onChange={() => { }}
                value={aug.four}
              ></input>
            </td>
            <td>
              5{" "}
              <input
                type="text"
                onChange={() => { }}
                value={aug.five}
              ></input>
            </td>
            <td>
              6{" "}
              <input
                type="text"
                onChange={() => { }}
                value={aug.six}
              ></input>
            </td>
            <td>
              7{" "}
              <input
                type="text"
                onChange={() => { }}
                value={aug.seven}
              ></input>
            </td>
            <td>
              8{" "}
              <input
                type="text"
                onChange={() => { }}
                value={aug.eight}
              ></input>
            </td>
            <td>
              9{" "}
              <input
                type="text"
                onChange={() => { }}
                value={aug.nine}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              10{" "}
              <input
                type="text"
                onChange={() => { }}
                value={aug.ten}
              ></input>
            </td>
            <td>
              11{" "}
              <input
                type="text"
                onChange={() => { }}
                value={aug.eleven}
              ></input>
            </td>
            <td>
              12{" "}
              <input
                type="text"
                onChange={() => { }}
                value={aug.twelve}
              ></input>
            </td>
            <td>
              13{" "}
              <input
                type="text"
                onChange={() => { }}
                value={aug.thirteen}
              ></input>
            </td>
            <td>
              14{" "}
              <input
                type="text"
                onChange={() => { }}
                value={aug.fourteen}
              ></input>
            </td>
            <td>
              15{" "}
              <input
                type="text"
                onChange={() => { }}
                value={aug.fifteen}
              ></input>
            </td>
            <td>
              16{" "}
              <input
                type="text"
                onChange={() => { }}
                value={aug.sixteen}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              17{" "}
              <input
                type="text"
                onChange={() => { }}
                value={aug.seventeen}
              ></input>
            </td>
            <td>
              18{" "}
              <input
                type="text"
                onChange={() => { }}
                value={aug.eighteen}
              ></input>
            </td>
            <td>
              19{" "}
              <input
                type="text"
                onChange={() => { }}
                value={aug.nineteen}
              ></input>
            </td>
            <td>
              20{" "}
              <input
                type="text"
                onChange={() => { }}
                value={aug.twenty}
              ></input>
            </td>
            <td>
              21{" "}
              <input
                type="text"
                onChange={() => { }}
                value={aug.twentyone}
              ></input>
            </td>
            <td>
              22{" "}
              <input
                type="text"
                onChange={() => { }}
                value={aug.twentytwo}
              ></input>
            </td>
            <td>
              23{" "}
              <input
                type="text"
                onChange={() => { }}
                value={aug.twentythree}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              24{" "}
              <input
                type="text"
                onChange={() => { }}
                value={aug.twentyfour}
              ></input>
            </td>
            <td>
              25{" "}
              <input
                type="text"
                onChange={() => { }}
                value={aug.twentyfive}
              ></input>
            </td>
            <td>
              26{" "}
              <input
                type="text"
                onChange={() => { }}
                value={aug.twentysix}
              ></input>
            </td>
            <td>
              27{" "}
              <input
                type="text"
                onChange={() => { }}
                value={aug.twentyseven}
              ></input>
            </td>
            <td>
              28{" "}
              <input
                type="text"
                onChange={() => { }}
                value={aug.twentyeight}
              ></input>
            </td>
            <td>
              29{" "}
              <input
                type="text"
                onChange={() => { }}
                value={aug.twentynine}
              ></input>
            </td>
            <td>
              30{" "}
              <input
                type="text"
                onChange={() => { }}
                value={aug.thirty}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              31{" "}
              <input
                type="text"
                onChange={() => { }}
                value={aug.thirtyone}
              ></input>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
        <b>Add items here (click field to submit)</b>
        <table>
          <b>September</b>
          <tr>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
          <tr>
            <td></td>
            <td>
              1{" "}
              <input
                type="text"
                onChange={() => { }}
                value={sep.one}
              ></input>
            </td>
            <td>
              2{" "}
              <input
                type="text"
                onChange={() => { }}
                value={sep.two}
              ></input>
            </td>
            <td>
              3{" "}
              <input
                type="text"
                onChange={() => { }}
                value={sep.three}
              ></input>
            </td>
            <td>
              4{" "}
              <input
                type="text"
                onChange={() => { }}
                value={sep.four}
              ></input>
            </td>
            <td>
              5{" "}
              <input
                type="text"
                onChange={() => { }}
                value={sep.five}
              ></input>
            </td>
            <td>
              6{" "}
              <input
                type="text"
                onChange={() => { }}
                value={sep.six}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              7{" "}
              <input
                type="text"
                onChange={() => { }}
                value={sep.seven}
              ></input>
            </td>
            <td>
              8{" "}
              <input
                type="text"
                onChange={() => { }}
                value={sep.eight}
              ></input>
            </td>
            <td>
              9{" "}
              <input
                type="text"
                onChange={() => { }}
                value={sep.nine}
              ></input>
            </td>
            <td>
              10{" "}
              <input
                type="text"
                onChange={() => { }}
                value={sep.ten}
              ></input>
            </td>
            <td>
              11{" "}
              <input
                type="text"
                onChange={() => { }}
                value={sep.eleven}
              ></input>
            </td>
            <td>
              12{" "}
              <input
                type="text"
                onChange={() => { }}
                value={sep.twelve}
              ></input>
            </td>
            <td>
              13{" "}
              <input
                type="text"
                onChange={() => { }}
                value={sep.thirteen}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              14{" "}
              <input
                type="text"
                onChange={() => { }}
                value={sep.fourteen}
              ></input>
            </td>
            <td>
              15{" "}
              <input
                type="text"
                onChange={() => { }}
                value={sep.fifteen}
              ></input>
            </td>
            <td>
              16{" "}
              <input
                type="text"
                onChange={() => { }}
                value={sep.sixteen}
              ></input>
            </td>
            <td>
              17{" "}
              <input
                type="text"
                onChange={() => { }}
                value={sep.seventeen}
              ></input>
            </td>
            <td>
              18{" "}
              <input
                type="text"
                onChange={() => { }}
                value={sep.eighteen}
              ></input>
            </td>
            <td>
              19{" "}
              <input
                type="text"
                onChange={() => { }}
                value={sep.nineteen}
              ></input>
            </td>
            <td>
              20{" "}
              <input
                type="text"
                onChange={() => { }}
                value={sep.twenty}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              21{" "}
              <input
                type="text"
                onChange={() => { }}
                value={sep.twentyone}
              ></input>
            </td>
            <td>
              22{" "}
              <input
                type="text"
                onChange={() => { }}
                value={sep.twentytwo}
              ></input>
            </td>
            <td>
              23{" "}
              <input
                type="text"
                onChange={() => { }}
                value={sep.twentythree}
              ></input>
            </td>
            <td>
              24{" "}
              <input
                type="text"
                onChange={() => { }}
                value={sep.twentyfour}
              ></input>
            </td>
            <td>
              25{" "}
              <input
                type="text"
                onChange={() => { }}
                value={sep.twentyfive}
              ></input>
            </td>
            <td>
              26{" "}
              <input
                type="text"
                onChange={() => { }}
                value={sep.twentysix}
              ></input>
            </td>
            <td>
              27{" "}
              <input
                type="text"
                onChange={() => { }}
                value={sep.twentyseven}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              28{" "}
              <input
                type="text"
                onChange={() => { }}
                value={sep.twentyeight}
              ></input>
            </td>
            <td>
              29{" "}
              <input
                type="text"
                onChange={() => { }}
                value={sep.twentynine}
              ></input>
            </td>
            <td>
              30{" "}
              <input
                type="text"
                onChange={() => { }}
                value={sep.thirty}
              ></input>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
        <b>Add items here (click field to submit)</b>
        <table>
          <b>October</b>
          <tr>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              1{" "}
              <input
                type="text"
                onChange={() => { }}
                value={oct.one}
              ></input>
            </td>
            <td>
              2{" "}
              <input
                type="text"
                onChange={() => { }}
                value={oct.two}
              ></input>
            </td>
            <td>
              3{" "}
              <input
                type="text"
                onChange={() => { }}
                value={oct.three}
              ></input>
            </td>
            <td>
              4{" "}
              <input
                type="text"
                onChange={() => { }}
                value={oct.four}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              5{" "}
              <input
                type="text"
                onChange={() => { }}
                value={oct.five}
              ></input>
            </td>
            <td>
              6{" "}
              <input
                type="text"
                onChange={() => { }}
                value={oct.six}
              ></input>
            </td>
            <td>
              7{" "}
              <input
                type="text"
                onChange={() => { }}
                value={oct.seven}
              ></input>
            </td>
            <td>
              8{" "}
              <input
                type="text"
                onChange={() => { }}
                value={oct.eight}
              ></input>
            </td>
            <td>
              9{" "}
              <input
                type="text"
                onChange={() => { }}
                value={oct.nine}
              ></input>
            </td>
            <td>
              10{" "}
              <input
                type="text"
                onChange={() => { }}
                value={oct.ten}
              ></input>
            </td>
            <td>
              11{" "}
              <input
                type="text"
                onChange={() => { }}
                value={oct.eleven}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              12{" "}
              <input
                type="text"
                onChange={() => { }}
                value={oct.twelve}
              ></input>
            </td>
            <td>
              13{" "}
              <input
                type="text"
                onChange={() => { }}
                value={oct.thirteen}
              ></input>
            </td>
            <td>
              14{" "}
              <input
                type="text"
                onChange={() => { }}
                value={oct.fourteen}
              ></input>
            </td>
            <td>
              15{" "}
              <input
                type="text"
                onChange={() => { }}
                value={oct.fifteen}
              ></input>
            </td>
            <td>
              16{" "}
              <input
                type="text"
                onChange={() => { }}
                value={oct.sixteen}
              ></input>
            </td>
            <td>
              17{" "}
              <input
                type="text"
                onChange={() => { }}
                value={oct.seventeen}
              ></input>
            </td>
            <td>
              18{" "}
              <input
                type="text"
                onChange={() => { }}
                value={oct.eighteen}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              19{" "}
              <input
                type="text"
                onChange={() => { }}
                value={oct.nineteen}
              ></input>
            </td>
            <td>
              20{" "}
              <input
                type="text"
                onChange={() => { }}
                value={oct.twenty}
              ></input>
            </td>
            <td>
              21{" "}
              <input
                type="text"
                onChange={() => { }}
                value={oct.twentyone}
              ></input>
            </td>
            <td>
              22{" "}
              <input
                type="text"
                onChange={() => { }}
                value={oct.twentytwo}
              ></input>
            </td>
            <td>
              23{" "}
              <input
                type="text"
                onChange={() => { }}
                value={oct.twentythree}
              ></input>
            </td>
            <td>
              24{" "}
              <input
                type="text"
                onChange={() => { }}
                value={oct.twentyfour}
              ></input>
            </td>
            <td>
              25{" "}
              <input
                type="text"
                onChange={() => { }}
                value={oct.twentyfive}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              26{" "}
              <input
                type="text"
                onChange={() => { }}
                value={oct.twentysix}
              ></input>
            </td>
            <td>
              27{" "}
              <input
                type="text"
                onChange={() => { }}
                value={oct.twentyseven}
              ></input>
            </td>
            <td>
              28{" "}
              <input
                type="text"
                onChange={() => { }}
                value={oct.twentyeight}
              ></input>
            </td>
            <td>
              29{" "}
              <input
                type="text"
                onChange={() => { }}
                value={oct.twentynine}
              ></input>
            </td>
            <td>
              30{" "}
              <input
                type="text"
                onChange={() => { }}
                value={oct.thirty}
              ></input>
            </td>
            <td>
              31{" "}
              <input
                type="text"
                onChange={() => { }}
                value={oct.thirtyone}
              ></input>
            </td>
            <td></td>
          </tr>
        </table>
        <b>Add items here (click field to submit)</b>
        <table>
          <b>November</b>
          <tr>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              1{" "}
              <input
                type="text"
                onChange={() => { }}
                value={nov.one}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              2{" "}
              <input
                type="text"
                onChange={() => { }}
                value={nov.two}
              ></input>
            </td>
            <td>
              3{" "}
              <input
                type="text"
                onChange={() => { }}
                value={nov.three}
              ></input>
            </td>
            <td>
              4{" "}
              <input
                type="text"
                onChange={() => { }}
                value={nov.four}
              ></input>
            </td>
            <td>
              5{" "}
              <input
                type="text"
                onChange={() => { }}
                value={nov.five}
              ></input>
            </td>
            <td>
              6{" "}
              <input
                type="text"
                onChange={() => { }}
                value={nov.six}
              ></input>
            </td>
            <td>
              7{" "}
              <input
                type="text"
                onChange={() => { }}
                value={nov.seven}
              ></input>
            </td>
            <td>
              8{" "}
              <input
                type="text"
                onChange={() => { }}
                value={nov.eight}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              9{" "}
              <input
                type="text"
                onChange={() => { }}
                value={nov.nine}
              ></input>
            </td>
            <td>
              10{" "}
              <input
                type="text"
                onChange={() => { }}
                value={nov.ten}
              ></input>
            </td>
            <td>
              11{" "}
              <input
                type="text"
                onChange={() => { }}
                value={nov.eleven}
              ></input>
            </td>
            <td>
              12{" "}
              <input
                type="text"
                onChange={() => { }}
                value={nov.twelve}
              ></input>
            </td>
            <td>
              13{" "}
              <input
                type="text"
                onChange={() => { }}
                value={nov.thirteen}
              ></input>
            </td>
            <td>
              14{" "}
              <input
                type="text"
                onChange={() => { }}
                value={nov.fourteen}
              ></input>
            </td>
            <td>
              15{" "}
              <input
                type="text"
                onChange={() => { }}
                value={nov.fifteen}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              16{" "}
              <input
                type="text"
                onChange={() => { }}
                value={nov.sixteen}
              ></input>
            </td>
            <td>
              17{" "}
              <input
                type="text"
                onChange={() => { }}
                value={nov.seventeen}
              ></input>
            </td>
            <td>
              18{" "}
              <input
                type="text"
                onChange={() => { }}
                value={nov.eighteen}
              ></input>
            </td>
            <td>
              19{" "}
              <input
                type="text"
                onChange={() => { }}
                value={nov.nineteen}
              ></input>
            </td>
            <td>
              20{" "}
              <input
                type="text"
                onChange={() => { }}
                value={nov.twenty}
              ></input>
            </td>
            <td>
              21{" "}
              <input
                type="text"
                onChange={() => { }}
                value={nov.twentyone}
              ></input>
            </td>
            <td>
              22{" "}
              <input
                type="text"
                onChange={() => { }}
                value={nov.twentytwo}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              23{" "}
              <input
                type="text"
                onChange={() => { }}
                value={nov.twentythree}
              ></input>
            </td>
            <td>
              24{" "}
              <input
                type="text"
                onChange={() => { }}
                value={nov.twentyfour}
              ></input>
            </td>
            <td>
              25{" "}
              <input
                type="text"
                onChange={() => { }}
                value={nov.twentyfive}
              ></input>
            </td>
            <td>
              26{" "}
              <input
                type="text"
                onChange={() => { }}
                value={nov.twentysix}
              ></input>
            </td>
            <td>
              27{" "}
              <input
                type="text"
                onChange={() => { }}
                value={nov.twentyseven}
              ></input>
            </td>
            <td>
              28{" "}
              <input
                type="text"
                onChange={() => { }}
                value={nov.twentyeight}
              ></input>
            </td>
            <td>
              29{" "}
              <input
                type="text"
                onChange={() => { }}
                value={nov.twentynine}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              30{" "}
              <input
                type="text"
                onChange={() => { }}
                value={nov.thirty}
              ></input>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
        <b>Add items here (click field to submit)</b>
        <table>
          <b>December</b>
          <tr>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
          <tr>
            <td></td>
            <td>
              1{" "}
              <input
                type="text"
                onChange={() => { }}
                value={dec.one}
              ></input>
            </td>
            <td>
              2{" "}
              <input
                type="text"
                onChange={() => { }}
                value={dec.two}
              ></input>
            </td>
            <td>
              3{" "}
              <input
                type="text"
                onChange={() => { }}
                value={dec.three}
              ></input>
            </td>
            <td>
              4{" "}
              <input
                type="text"
                onChange={() => { }}
                value={dec.four}
              ></input>
            </td>
            <td>
              5{" "}
              <input
                type="text"
                onChange={() => { }}
                value={dec.five}
              ></input>
            </td>
            <td>
              6{" "}
              <input
                type="text"
                onChange={() => { }}
                value={dec.six}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              7{" "}
              <input
                type="text"
                onChange={() => { }}
                value={dec.seven}
              ></input>
            </td>
            <td>
              8{" "}
              <input
                type="text"
                onChange={() => { }}
                value={dec.eight}
              ></input>
            </td>
            <td>
              9{" "}
              <input
                type="text"
                onChange={() => { }}
                value={dec.nine}
              ></input>
            </td>
            <td>
              10{" "}
              <input
                type="text"
                onChange={() => { }}
                value={dec.ten}
              ></input>
            </td>
            <td>
              11{" "}
              <input
                type="text"
                onChange={() => { }}
                value={dec.eleven}
              ></input>
            </td>
            <td>
              12{" "}
              <input
                type="text"
                onChange={() => { }}
                value={dec.twelve}
              ></input>
            </td>
            <td>
              13{" "}
              <input
                type="text"
                onChange={() => { }}
                value={dec.thirteen}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              14{" "}
              <input
                type="text"
                onChange={() => { }}
                value={dec.fourteen}
              ></input>
            </td>
            <td>
              15{" "}
              <input
                type="text"
                onChange={() => { }}
                value={dec.fifteen}
              ></input>
            </td>
            <td>
              16{" "}
              <input
                type="text"
                onChange={() => { }}
                value={dec.sixteen}
              ></input>
            </td>
            <td>
              17{" "}
              <input
                type="text"
                onChange={() => { }}
                value={dec.seventeen}
              ></input>
            </td>
            <td>
              18{" "}
              <input
                type="text"
                onChange={() => { }}
                value={dec.eighteen}
              ></input>
            </td>
            <td>
              19{" "}
              <input
                type="text"
                onChange={() => { }}
                value={dec.nineteen}
              ></input>
            </td>
            <td>
              20{" "}
              <input
                type="text"
                onChange={() => { }}
                value={dec.twenty}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              21{" "}
              <input
                type="text"
                onChange={() => { }}
                value={dec.twentyone}
              ></input>
            </td>
            <td>
              22{" "}
              <input
                type="text"
                onChange={() => { }}
                value={dec.twentytwo}
              ></input>
            </td>
            <td>
              23{" "}
              <input
                type="text"
                onChange={() => { }}
                value={dec.twentythree}
              ></input>
            </td>
            <td>
              24{" "}
              <input
                type="text"
                onChange={() => { }}
                value={dec.twentyfour}
              ></input>
            </td>
            <td>
              25{" "}
              <input
                type="text"
                onChange={() => { }}
                value={dec.twentyfive}
              ></input>
            </td>
            <td>
              26{" "}
              <input
                type="text"
                onChange={() => { }}
                value={dec.twentysix}
              ></input>
            </td>
            <td>
              27{" "}
              <input
                type="text"
                onChange={() => { }}
                value={dec.twentyseven}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              28{" "}
              <input
                type="text"
                onChange={() => { }}
                value={dec.twentyeight}
              ></input>
            </td>
            <td>
              29{" "}
              <input
                type="text"
                onChange={() => { }}
                value={dec.twentynine}
              ></input>
            </td>
            <td>
              30{" "}
              <input
                type="text"
                onChange={() => { }}
                value={dec.thirty}
              ></input>
            </td>
            <td>
              31{" "}
              <input
                type="text"
                onChange={() => { }}
                value={dec.thirtyone}
              ></input>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </body>
    </html>
  );
}
