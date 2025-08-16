<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
            .date{
                margin:-20px 0 0 75%  ;
            }
            .img-container{
                border-radius: 20px;
                border:2px rgb(198, 106, 210) dashed;
                width: 180px;
                height: 180px;
                margin-left: 20px;
            }
            .page{
                padding:20px;
            }
            .imgp{
                width:40px;
            }
            table{
                border:1px solid;
            }
             td , th{
                border:1px solid;
                font-size:14px;
                padding:10px;
                text-align: left;
            }
        </style>
    </head>
    <body class="page">
        <img class="img-logo" src="{{ public_path('images/logo.png') }}" alt="logo" width="50px" height="50px"/>
        <p class='date'>{{ date('d-m-Y H:i:s') }}</p>
        <hr/>
        <br/>
        <h2 style="text-align: center;">Liste des administrateurs </h2>        <br/>
        <table>
            <tr>
                <th>Id:</th>
                <th>Photo:</th>
                <th>Nom: </th>
                <th>Prénom: </th>
                <th>Numéro carte identité:</th>
                <th>Numéro télephone:</th>
                <th>E-mail:</th>
                <th>Date de création:</th>
                <th>Date de dernier modification: </th>
            </tr>
            @foreach ($data as $l)
            <tr>
                <td> {{ $l['id'] }}</td>
                <td><img class="imgp" src="{{ public_path('images/administrateur/'. $l['photo'] ) }}" alt="photo"/></td>s
                <td>{{ $l['nom'] }}</td>
                <td>{{ $l['prenom'] }}</td>
                <td>{{ $l['CIN'] }}</td>
                <td>{{ $l['numero_telephone'] }}</td>
                <td style='color:blue; font-weight:bold;text-decoration:underline;'>{{ $l['email'] }}</td>
                <td>{{ $l['created_at'] }}</td>
                <td>{{ $l['updated_at'] }}</td>
            </tr>
            @endforeach
        </table>

    </body>
</html>
