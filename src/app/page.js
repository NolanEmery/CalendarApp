'use client';
import { useReducer } from 'react';

export default function Home() {
  const [currentMonth, dispatch] = useReducer(reducer, "");

  function handleJanuary() {
    dispatch({
      month: "January"
    });
  }

  function handleFebruary() {
    dispatch({
      month: "February"
    });
  }

  
  function handleMarch() {
    dispatch({
      month: "March"
    });
  }

  
  function handleApril() {
    dispatch({
      month: "April"
    });
  }

  function handleMay() {
    dispatch({
      month: "May"
    });
  }

  function handleJune() {
    dispatch({
      month: "June"
    });
  }

  
  function handleJuly() {
    dispatch({
      month: "July"
    });
  }

  
  function handleAugust() {
    dispatch({
      month: "August"
    });
  }

  
  function handleSeptember() {
    dispatch({
      month: "September"
    });
  }

  
  function handleOctober() {
    dispatch({
      month: "October"
    });
  }

  
  function handleNovember() {
    dispatch({
      month: "November"
    });
  }

  
  function handleDecember() {
    dispatch({
      month: "December"
    });
  }

  return (
    <>
    <table>
      <tr>
        <td onClick={handleJanuary}>
          January
        </td>
        <td onClick={handleFebruary}>
          February
        </td>
        <td onClick={handleMarch}>
          March
        </td>
        <td onClick={handleApril}>
          April
        </td>
        <td onClick={handleMay}>
          May
        </td>
        <td onClick={handleJune}>
          June
        </td>
        <td onClick={handleJuly}>
          July
        </td>
        <td onClick={handleAugust}>
          August
        </td>
        <td onClick={handleSeptember}>
          September
        </td>
        <td onClick={handleOctober}>
          October
        </td>
        <td onClick={handleNovember}>
          November
        </td>
        <td onClick={handleDecember}>
          December
        </td>
      </tr>
    </table>
    {currentMonth == "January" && <table><b>January</b>
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
        <td>1 <input type="text"></input></td>
        <td>2 <input type="text"></input></td>
        <td>3 <input type="text"></input></td>
        <td>4 <input type="text"></input></td>
      </tr>
      <tr>
        <td>5 <input type="text"></input></td>
        <td>6 <input type="text"></input></td>
        <td>7 <input type="text"></input></td>
        <td>8 <input type="text"></input></td>
        <td>9 <input type="text"></input></td>
        <td>10  <input type="text"></input></td>
        <td>11  <input type="text"></input></td>
      </tr>
      <tr>
        <td>12  <input type="text"></input></td>
        <td>13  <input type="text"></input></td>
        <td>14  <input type="text"></input></td>
        <td>15  <input type="text"></input></td>
        <td>16  <input type="text"></input></td>
        <td>17  <input type="text"></input></td>
        <td>18  <input type="text"></input></td>
      </tr>
      <tr>
        <td>19  <input type="text"></input></td>
        <td>20  <input type="text"></input></td>
        <td>21  <input type="text"></input></td>
        <td>22  <input type="text"></input></td>
        <td>23  <input type="text"></input></td>
        <td>24  <input type="text"></input></td>
        <td>25  <input type="text"></input></td>
      </tr>
      <tr>
        <td>26  <input type="text"></input></td>
        <td>27  <input type="text"></input></td>
        <td>28  <input type="text"></input></td>
        <td>29  <input type="text"></input></td>
        <td>30  <input type="text"></input></td>
        <td>31  <input type="text"></input></td>
        <td></td>
      </tr>
    </table>}
    {currentMonth == "February" && <table><b>February</b>
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
        <td>1 <input type="text"></input></td>
      </tr>
      <tr>
        <td>2 <input type="text"></input></td>
        <td>3 <input type="text"></input></td>
        <td>4 <input type="text"></input></td>
        <td>5 <input type="text"></input></td>
        <td>6 <input type="text"></input></td>
        <td>7 <input type="text"></input></td>
        <td>8 <input type="text"></input></td>
      </tr>
      <tr>
        <td>9 <input type="text"></input></td>
        <td>10 <input type="text"></input></td>
        <td>11  <input type="text"></input></td>
        <td>12  <input type="text"></input></td>
        <td>13  <input type="text"></input></td>
        <td>14  <input type="text"></input></td>
        <td>15  <input type="text"></input></td>
      </tr>
      <tr>
        <td>16  <input type="text"></input></td>
        <td>17  <input type="text"></input></td>
        <td>18  <input type="text"></input></td>
        <td>19  <input type="text"></input></td>
        <td>20  <input type="text"></input></td>
        <td>21  <input type="text"></input></td>
        <td>22  <input type="text"></input></td>
      </tr>
      <tr>
        <td>23  <input type="text"></input></td>
        <td>24  <input type="text"></input></td>
        <td>25  <input type="text"></input></td>
        <td>26  <input type="text"></input></td>
        <td>27  <input type="text"></input></td>
        <td>28  <input type="text"></input></td>
        <td></td>
      </tr>
    </table>}
    {currentMonth == "March" && <table><b>March</b>
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
        <td>1 <input type="text"></input></td>
      </tr>
      <tr>
        <td>2 <input type="text"></input></td>
        <td>3 <input type="text"></input></td>
        <td>4 <input type="text"></input></td>
        <td>5 <input type="text"></input></td>
        <td>6 <input type="text"></input></td>
        <td>7 <input type="text"></input></td>
        <td>8 <input type="text"></input></td>
      </tr>
      <tr>
        <td>9 <input type="text"></input></td>
        <td>10 <input type="text"></input></td>
        <td>11  <input type="text"></input></td>
        <td>12  <input type="text"></input></td>
        <td>13  <input type="text"></input></td>
        <td>14  <input type="text"></input></td>
        <td>15  <input type="text"></input></td>
      </tr>
      <tr>
        <td>16  <input type="text"></input></td>
        <td>17  <input type="text"></input></td>
        <td>18  <input type="text"></input></td>
        <td>19  <input type="text"></input></td>
        <td>20  <input type="text"></input></td>
        <td>21  <input type="text"></input></td>
        <td>22  <input type="text"></input></td>
      </tr>
      <tr>
        <td>23  <input type="text"></input></td>
        <td>24  <input type="text"></input></td>
        <td>25  <input type="text"></input></td>
        <td>26  <input type="text"></input></td>
        <td>27  <input type="text"></input></td>
        <td>28  <input type="text"></input></td>
        <td>29  <input type="text"></input></td>
      </tr>
      <tr>
        <td>30  <input type="text"></input></td>
        <td>31  <input type="text"></input></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>}
    {currentMonth == "April" && <table><b>April</b>
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
        <td>1 <input type="text"></input></td>
        <td>2 <input type="text"></input></td>
        <td>3 <input type="text"></input></td>
        <td>4 <input type="text"></input></td>
        <td>5 <input type="text"></input></td>
      </tr>
      <tr>
        <td>6<input type="text"></input></td>
        <td>7 <input type="text"></input></td>
        <td>8  <input type="text"></input></td>
        <td>9  <input type="text"></input></td>
        <td>10  <input type="text"></input></td>
        <td>11  <input type="text"></input></td>
        <td>12  <input type="text"></input></td>
      </tr>
      <tr>
        <td>13  <input type="text"></input></td>
        <td>14  <input type="text"></input></td>
        <td>15  <input type="text"></input></td>
        <td>16  <input type="text"></input></td>
        <td>17  <input type="text"></input></td>
        <td>18  <input type="text"></input></td>
        <td>19  <input type="text"></input></td>
      </tr>
      <tr>
        <td>20  <input type="text"></input></td>
        <td>21  <input type="text"></input></td>
        <td>22  <input type="text"></input></td>
        <td>23  <input type="text"></input></td>
        <td>24  <input type="text"></input></td>
        <td>25  <input type="text"></input></td>
        <td>26  <input type="text"></input></td>
      </tr>
      <tr>
        <td>27  <input type="text"></input></td>
        <td>28  <input type="text"></input></td>
        <td>29  <input type="text"></input></td>
        <td>30  <input type="text"></input></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>}
    {currentMonth == "May" && <table><b>May</b>
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
        <td>1 <input type="text"></input></td>
        <td>2 <input type="text"></input></td>
        <td>3 <input type="text"></input></td>
      </tr>
      <tr>
        <td>4 <input type="text"></input></td>
        <td>5 <input type="text"></input></td>
        <td>6 <input type="text"></input></td>
        <td>7 <input type="text"></input></td>
        <td>8 <input type="text"></input></td>
        <td>9 <input type="text"></input></td>
        <td>10 <input type="text"></input></td>
      </tr>
      <tr>
        <td>11  <input type="text"></input></td>
        <td>12  <input type="text"></input></td>
        <td>13  <input type="text"></input></td>
        <td>14  <input type="text"></input></td>
        <td>15  <input type="text"></input></td>
        <td>16  <input type="text"></input></td>
        <td>17  <input type="text"></input></td>
      </tr>
      <tr>
        <td>18  <input type="text"></input></td>
        <td>19  <input type="text"></input></td>
        <td>20  <input type="text"></input></td>
        <td>21  <input type="text"></input></td>
        <td>22  <input type="text"></input></td>
        <td>23  <input type="text"></input></td>
        <td>24  <input type="text"></input></td>
      </tr>
      <tr>
        <td>25  <input type="text"></input></td>
        <td>26  <input type="text"></input></td>
        <td>27  <input type="text"></input></td>
        <td>28  <input type="text"></input></td>
        <td>29  <input type="text"></input></td>
        <td>30  <input type="text"></input></td>
        <td>31  <input type="text"></input></td>
      </tr>
    </table>}
    {currentMonth == "June" && <table><b>June</b>
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
        <td>1 <input type="text"></input></td>
        <td>2 <input type="text"></input></td>
        <td>3 <input type="text"></input></td>
        <td>4 <input type="text"></input></td>
        <td>5 <input type="text"></input></td>
        <td>6 <input type="text"></input></td>
        <td>7 <input type="text"></input></td>
      </tr>
      <tr>
        <td>8 <input type="text"></input></td>
        <td>9 <input type="text"></input></td>
        <td>10  <input type="text"></input></td>
        <td>11  <input type="text"></input></td>
        <td>12  <input type="text"></input></td>
        <td>13  <input type="text"></input></td>
        <td>14  <input type="text"></input></td>
      </tr>
      <tr>
        <td>15  <input type="text"></input></td>
        <td>16  <input type="text"></input></td>
        <td>17  <input type="text"></input></td>
        <td>18  <input type="text"></input></td>
        <td>19  <input type="text"></input></td>
        <td>20  <input type="text"></input></td>
        <td>21  <input type="text"></input></td>
      </tr>
      <tr>
        <td>22  <input type="text"></input></td>
        <td>23  <input type="text"></input></td>
        <td>24  <input type="text"></input></td>
        <td>25  <input type="text"></input></td>
        <td>26  <input type="text"></input></td>
        <td>27  <input type="text"></input></td>
        <td>28  <input type="text"></input></td>
      </tr>
      <tr>
        <td>29  <input type="text"></input></td>
        <td>30  <input type="text"></input></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>}
    {currentMonth == "July" && <table><b>July</b>
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
        <td>1 <input type="text"></input></td>
        <td>2 <input type="text"></input></td>
        <td>3 <input type="text"></input></td>
        <td>4 <input type="text"></input></td>
        <td>5 <input type="text"></input></td>
      </tr>
      <tr>
        <td>6 <input type="text"></input></td>
        <td>7 <input type="text"></input></td>
        <td>8 <input type="text"></input></td>
        <td>9 <input type="text"></input></td>
        <td>10 <input type="text"></input></td>
        <td>11 <input type="text"></input></td>
        <td>12 <input type="text"></input></td>
      </tr>
      <tr>
        <td>13 <input type="text"></input></td>
        <td>14 <input type="text"></input></td>
        <td>15  <input type="text"></input></td>
        <td>16  <input type="text"></input></td>
        <td>17  <input type="text"></input></td>
        <td>18  <input type="text"></input></td>
        <td>19  <input type="text"></input></td>
      </tr>
      <tr>
        <td>20  <input type="text"></input></td>
        <td>21  <input type="text"></input></td>
        <td>22  <input type="text"></input></td>
        <td>23  <input type="text"></input></td>
        <td>24  <input type="text"></input></td>
        <td>25  <input type="text"></input></td>
        <td>26  <input type="text"></input></td>
      </tr>
      <tr>
        <td>27  <input type="text"></input></td>
        <td>28  <input type="text"></input></td>
        <td>29  <input type="text"></input></td>
        <td>30  <input type="text"></input></td>
        <td>31  <input type="text"></input></td>
        <td></td>
        <td></td>
      </tr>
    </table>}
    {currentMonth == "August" && <table><b>August</b>
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
        <td>1 <input type="text"></input></td>
        <td>2 <input type="text"></input></td>
      </tr>
      <tr>
        <td>3 <input type="text"></input></td>
        <td>4 <input type="text"></input></td>
        <td>5 <input type="text"></input></td>
        <td>6 <input type="text"></input></td>
        <td>7 <input type="text"></input></td>
        <td>8 <input type="text"></input></td>
        <td>9 <input type="text"></input></td>
      </tr>
      <tr>
        <td>10  <input type="text"></input></td>
        <td>11  <input type="text"></input></td>
        <td>12  <input type="text"></input></td>
        <td>13  <input type="text"></input></td>
        <td>14  <input type="text"></input></td>
        <td>15  <input type="text"></input></td>
        <td>16  <input type="text"></input></td>
      </tr>
      <tr>
        <td>17  <input type="text"></input></td>
        <td>18  <input type="text"></input></td>
        <td>19  <input type="text"></input></td>
        <td>20  <input type="text"></input></td>
        <td>21  <input type="text"></input></td>
        <td>22  <input type="text"></input></td>
        <td>23  <input type="text"></input></td>
      </tr>
      <tr>
        <td>24  <input type="text"></input></td>
        <td>25  <input type="text"></input></td>
        <td>26  <input type="text"></input></td>
        <td>27  <input type="text"></input></td>
        <td>28  <input type="text"></input></td>
        <td>29  <input type="text"></input></td>
        <td>30  <input type="text"></input></td>
      </tr>
      <tr>
        <td>31  <input type="text"></input></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>}
    {currentMonth == "September" && <table><b>September</b>
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
        <td>1 <input type="text"></input></td>
        <td>2 <input type="text"></input></td>
        <td>3 <input type="text"></input></td>
        <td>4 <input type="text"></input></td>
        <td>5 <input type="text"></input></td>
        <td>6 <input type="text"></input></td>
      </tr>
      <tr>
        <td>7 <input type="text"></input></td>
        <td>8 <input type="text"></input></td>
        <td>9  <input type="text"></input></td>
        <td>10  <input type="text"></input></td>
        <td>11  <input type="text"></input></td>
        <td>12  <input type="text"></input></td>
        <td>13  <input type="text"></input></td>
      </tr>
      <tr>
        <td>14  <input type="text"></input></td>
        <td>15  <input type="text"></input></td>
        <td>16  <input type="text"></input></td>
        <td>17  <input type="text"></input></td>
        <td>18  <input type="text"></input></td>
        <td>19  <input type="text"></input></td>
        <td>20  <input type="text"></input></td>
      </tr>
      <tr>
        <td>21  <input type="text"></input></td>
        <td>22  <input type="text"></input></td>
        <td>23  <input type="text"></input></td>
        <td>24  <input type="text"></input></td>
        <td>25  <input type="text"></input></td>
        <td>26  <input type="text"></input></td>
        <td>27  <input type="text"></input></td>
      </tr>
      <tr>
        <td>28  <input type="text"></input></td>
        <td>29  <input type="text"></input></td>
        <td>30  <input type="text"></input></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>}
    {currentMonth == "October" && <table><b>October</b>
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
        <td>1 <input type="text"></input></td>
        <td>2 <input type="text"></input></td>
        <td>3 <input type="text"></input></td>
        <td>4 <input type="text"></input></td>
      </tr>
      <tr>
        <td>5 <input type="text"></input></td>
        <td>6 <input type="text"></input></td>
        <td>7 <input type="text"></input></td>
        <td>8 <input type="text"></input></td>
        <td>9 <input type="text"></input></td>
        <td>10  <input type="text"></input></td>
        <td>11  <input type="text"></input></td>
      </tr>
      <tr>
        <td>12  <input type="text"></input></td>
        <td>13  <input type="text"></input></td>
        <td>14  <input type="text"></input></td>
        <td>15  <input type="text"></input></td>
        <td>16  <input type="text"></input></td>
        <td>17  <input type="text"></input></td>
        <td>18  <input type="text"></input></td>
      </tr>
      <tr>
        <td>19  <input type="text"></input></td>
        <td>20  <input type="text"></input></td>
        <td>21  <input type="text"></input></td>
        <td>22  <input type="text"></input></td>
        <td>23  <input type="text"></input></td>
        <td>24  <input type="text"></input></td>
        <td>25  <input type="text"></input></td>
      </tr>
      <tr>
        <td>26  <input type="text"></input></td>
        <td>27  <input type="text"></input></td>
        <td>28  <input type="text"></input></td>
        <td>29  <input type="text"></input></td>
        <td>30  <input type="text"></input></td>
        <td>31  <input type="text"></input></td>
        <td></td>
      </tr>
    </table>}
    {currentMonth == "November" && <table><b>November</b>
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
        <td>1 <input type="text"></input></td>
      </tr>
      <tr>
        <td>2 <input type="text"></input></td>
        <td>3 <input type="text"></input></td>
        <td>4 <input type="text"></input></td>
        <td>5 <input type="text"></input></td>
        <td>6 <input type="text"></input></td>
        <td>7 <input type="text"></input></td>
        <td>8 <input type="text"></input></td>
      </tr>
      <tr>
        <td>9 <input type="text"></input></td>
        <td>10  <input type="text"></input></td>
        <td>11  <input type="text"></input></td>
        <td>12  <input type="text"></input></td>
        <td>13  <input type="text"></input></td>
        <td>14  <input type="text"></input></td>
        <td>15  <input type="text"></input></td>
      </tr>
      <tr>
        <td>16  <input type="text"></input></td>
        <td>17  <input type="text"></input></td>
        <td>18  <input type="text"></input></td>
        <td>19  <input type="text"></input></td>
        <td>20  <input type="text"></input></td>
        <td>21  <input type="text"></input></td>
        <td>22  <input type="text"></input></td>
      </tr>
      <tr>
        <td>23  <input type="text"></input></td>
        <td>24  <input type="text"></input></td>
        <td>25  <input type="text"></input></td>
        <td>26  <input type="text"></input></td>
        <td>27  <input type="text"></input></td>
        <td>28  <input type="text"></input></td>
        <td>29  <input type="text"></input></td>
      </tr>
      <tr>
        <td>30  <input type="text"></input></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>}
    {currentMonth == "December" && <table><b>December</b>
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
        <td>1 <input type="text"></input></td>
        <td>2 <input type="text"></input></td>
        <td>3 <input type="text"></input></td>
        <td>4 <input type="text"></input></td>
        <td>5 <input type="text"></input></td>
        <td>6 <input type="text"></input></td>
      </tr>
      <tr>
        <td>7 <input type="text"></input></td>
        <td>8 <input type="text"></input></td>
        <td>9 <input type="text"></input></td>
        <td>10  <input type="text"></input></td>
        <td>11  <input type="text"></input></td>
        <td>12  <input type="text"></input></td>
        <td>13  <input type="text"></input></td>
      </tr>
      <tr>
        <td>14  <input type="text"></input></td>
        <td>15  <input type="text"></input></td>
        <td>16  <input type="text"></input></td>
        <td>17  <input type="text"></input></td>
        <td>18  <input type="text"></input></td>
        <td>19  <input type="text"></input></td>
        <td>20  <input type="text"></input></td>
      </tr>
      <tr>
        <td>21  <input type="text"></input></td>
        <td>22  <input type="text"></input></td>
        <td>23  <input type="text"></input></td>
        <td>24  <input type="text"></input></td>
        <td>25  <input type="text"></input></td>
        <td>26  <input type="text"></input></td>
        <td>27  <input type="text"></input></td>
      </tr>
      <tr>
        <td>28  <input type="text"></input></td>
        <td>29  <input type="text"></input></td>
        <td>30  <input type="text"></input></td>
        <td>31  <input type="text"></input></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>}
    </>
  );
}

function reducer(currentMonth, action) {
  switch (action.month) {
    case "January":
      return "January";
    case "February":
      return "February";
    case "March":
      return "March";
    case "April":
      return "April";
    case "May":
      return "May";
    case "June":
      return "June";
    case "July":
      return "July";
    case "August":
      return "August";
    case "September":
      return "September";
    case "October":
      return "October";
    case "November":
      return "November";
    case "December":
      return "December";
    default:
      throw Error('Unknown month: ' + action.month);
  }
}
