package br.com.fiap.service;

import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import br.com.salesforce.beans.ContatoUsuario;

public class ViaCepService {

    public ContatoUsuario getContatoUsuario(String cep) throws Exception {
  
        if (cep == null || cep.isEmpty()) {
            throw new IllegalArgumentException("CEP não pode ser nulo ou vazio");
        }


        try (CloseableHttpClient httpClient = HttpClients.createDefault()) {

            String url = "https://viacep.com.br/ws/" + cep + "/json/";
            HttpGet request = new HttpGet(url);

            HttpResponse response = httpClient.execute(request);

            int statusCode = response.getStatusLine().getStatusCode();
            if (statusCode != 200) {
                throw new RuntimeException("Falha na solicitação HTTP: Código de status " + statusCode);
            }

            String jsonResponse = EntityUtils.toString(response.getEntity());

            JsonObject jsonObject = JsonParser.parseString(jsonResponse).getAsJsonObject();

            ContatoUsuario contatoUsuario = new ContatoUsuario();
            contatoUsuario.setCep(cep);
            contatoUsuario.setLougradoro(jsonObject.get("logradouro").getAsString());
            contatoUsuario.setLocalidade(jsonObject.get("localidade").getAsString());

            return contatoUsuario;
        }
    }
}