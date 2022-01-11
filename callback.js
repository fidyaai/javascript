function getDataMahasiswa(url, success, error) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange= function () {
        if (xhr.readyState === 4)
          if (xhr.status === 200) {
            success (xhr.response);
        } else if (xhr.status === 404) {
            error();
        }
        
    }

xhr.open('get', url);
xhr.send();
}

console.log('mulai');
getDataMahasiswa('https://jsonplaceholder.typicode.com/users', (results) => {
    console.log (JSON.parse(results));
} , () => { } );
console.log('selesai');


class Table {
    constructor(init) {
      this.init = init;
    }

    createHeader(data) {
      let open = "<thead><tr>";
      let close = "</tr></thead>";
      data.forEach((d) => {
        open += `<th>${d}</th>`;
      });

      return open + close;
    }

    createBody(data) {
      let open = "<tbody>";
      let close = "</tbody>";

      data.forEach((d) => {
        open += `
          <tr>
            <td>${d[0]}</td>
            <td>${d[1]}</td>
            <td>${d[2]}</td>
            <td>${d[3]}</td>
            <td>${d[4]}</td>
            <td>${d[5]}</td>
          </tr>
        `;
      });

    return open + close;
    }

    render(element) {
      let table =
        "<table class='table table-hover'>" +
        this.createHeader(this.init.columns) +
        this.createBody(this.init.data) +
        "</table>";
      element.innerHTML = table;
    }
  }

  const table = new Table({
    columns: ["ID","Name", "Username", "Email","Address","Company"],
    data: [
      ["1","Leanne Graham", "Bret","Sincere@april.biz","Kulas light, Apt. 556, Gwenborough","Romaguera-Crona"],
      ["2","Ervin Howell", "Antonette","Shanna@melissa.tv", "Victor Plains, Suite 879, Wisokyburgh","Deckow-Crist"],
      ["3","Clementine Bauch", "Samantha","Nathan@yesenia.net", "Douglas Extension, Suite 847, McKenziehaven", "Romaguera-Jacobson"],
      ["4","Patricia Lebsack", "Karianne","Julianne.OConner@kory.org","Hoeger Mall, Apt. 692. South Elvis","Robel-Corkery"],
      ["5","Chelsey Dietrich", "Kamren","Lucio_Hettinger@annie.ca","Skiles Walks, Suite 351, Roscoeview","Keebler LLC"],
      ["6","Mrs. Dennis Schulist", "Leopoldo_Corkery","Karley_Dach@jasper.info","Norberto Crossing, Apt. 950, South Christy","Considine-Lockman"],
      ["7","Kurtis Weissnat", "Elwyn.Skiles","Telly.Hoeger@billy.biz", "Rex Trail, Suite 280, Howemouth","Johns Group"],
      ["8","Nicholas Runolfdottir V", "Maxime_Nienow",  "Sherwood@rosamond.me", "Ellsworth Summit, Suite 729, Aliyaview", "Abernathy Group"],
      ["9","Glenna Reichert", "Delphine", "Chaim_McDermott@dana.io","Dayna Park, Suite 449, Bartholomeburry","Yost and Sons"],
      ["10","Clementina DuBuque", "Moriah.Stanton", "Rey.Padberg@karina.biz","Kattie Turnpike, Suite 198, Lebsackbury","Hoeger LLC"]
    ]
  });
  const app = document.getElementById("app");
  table.render(app);