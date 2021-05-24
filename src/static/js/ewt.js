$(function() {
  main()
});

const main = async() => {

  let tableData = {
    "title":"EWT Network",
    "heading":["Pool Provider","LP", "Reward Tokens", "INFO"],
    "rows": [
      [
        "Carbonswap",
        `<a href='carbonswap'>Various</a>`,
        "SUSU",
        "https://carbonswap.exchange"
      ]
    ]
  }

  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();
}