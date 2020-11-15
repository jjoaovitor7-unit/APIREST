$(document).ready(function () {
  $("#btn-a").click(function () {
    $.ajax({
      type: "GET",
      url: "http://localhost:8005/",
      success: function (data) {
        return $("#result").html(data);
      },
      error: function () {
        console.log("Erro.");
      },
    });
  });

  $("#btn-b").click(function () {
    $.ajax({
      type: "POST",
      url: "http://localhost:8005/",
      success: function (data) {
        return $("#result").html(data);
      },
      error: function () {
        console.log("Erro.");
      },
    });
  });

  $("#btn-c").click(function () {
    $.ajax({
      type: "PUT",
      url: "http://localhost:8005/",
      success: function (data) {
        return $("#result").html(data);
      },
      error: function () {
        console.log("Erro.");
      },
    });
  });

  $("#btn-d").click(function () {
    $.ajax({
      type: "POST",
      url: `http://localhost:8005/${document.getElementById("nome").value}`,
      success: function (data) {
        return $("#result").html(data);
      },
      error: function () {
        console.log("Erro.");
      },
    });
  });

  $("#btn-e").click(function () {
    $.ajax({
      type: "PUT",
      url: `http://localhost:8005/estudante`,
      data: document.getElementById("nome").value,
      dataType: 'json',
      contentType: "application/json; charset=utf-8",
      success: function (data) {
        return $("#result").html(data);
      },
      error: function () {
        console.log("Erro.");
      },
    });
  });

  $("#btn-f").click(function () {
    $.ajax({
      type: "DELETE",
      url: `http://localhost:8005/`,
      success: function (data) {
        return $("#result").html(data);
      },
      error: function () {
        console.log("Erro.");
      },
    });
  });

});
