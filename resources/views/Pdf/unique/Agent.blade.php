<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .date {
            margin:-20px 0 0 75%;
        }
        .page {
            padding:20px;
        }
        table {
            border:1px solid;
        }
        td, th {
            border:1px solid;
            font-size:14px;
            padding:10px;
            text-align: left;
        }
        .image-container {
            float:right;
            margin-right: 20px;
        }
        .img-logo {
            width: 100px;
            height: 50px;
        }
        .img {
            width: 250px;
            height: 250px;
        }
    </style>
</head>
<body class="page">
    <img class="img-logo" src="{{ public_path('images/logo.png') }}" alt="logo"/>
    <p class='date'>{{ date('d-m-Y H:i:s') }}</p>
    <hr/>
    <br/>
    <h2 style="text-align: center;">Détails agent maintenance: {{ $nom }}  {{ $prenom }}</h2>
    <br/>
    <div>
        <div class="image-container">
            <img class="img" src="{{ public_path('images/agentMaintenance/'.$photo) }}" alt="photo"/>
        </div>
        <table>
            <tr>
                <th>Identifiant:</th>
                <td>{{$id}}</td>
            </tr>
            <tr>
                <th>Nom: </th>
                <td>{{ $nom }}</td>
            </tr>
            <tr>
                <th>Prénom: </th>
                <td>{{ $prenom }}</td>
            </tr>
            <tr>
                <th>Numéro télephone:</th>
                <td>{{ $numero_telephone }}</td>
            </tr>
            <tr>
                <th>E-mail:</th>
                <td style='color:blue; font-weight:bold;text-decoration:underline;'> {{ $email }}</td>
            </tr>
            <tr>
                <th>Date de création:</th>
                <td>{{$created_at}}</td>
            </tr>
            <tr>
                <th>Date de dernier modification: </th>
                <td>{{$updated_at}}</td>
            </tr>
        </table>
    </div>
</body>
</html>
