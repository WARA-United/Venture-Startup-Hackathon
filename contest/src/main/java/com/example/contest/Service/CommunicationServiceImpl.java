package com.example.contest.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.LinkedHashMap;
import java.util.List;

@Service
public class CommunicationServiceImpl implements CommunicationService{
    private final RestTemplate restTemplate;

    @Autowired
    public CommunicationServiceImpl(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Override
    public String imageUpload(MultipartFile image) throws IOException {
        ByteArrayResource body = new ByteArrayResource(image.getBytes()) {
            @Override
            public String getFilename() {
                return image.getOriginalFilename();
            }
        };

        try {
            HttpHeaders headers = new HttpHeaders();
            HttpEntity<?> http = new HttpEntity<>(headers);

            MultiValueMap<String, Object> bodyMap = new LinkedMultiValueMap<>();
            bodyMap.add("images", body);
            headers.setContentType(MediaType.MULTIPART_FORM_DATA);
            http = new HttpEntity<>(bodyMap, headers);

            URI uri = new URI("http://15.165.192.29:9000/api/image/upload");
            ResponseEntity response = restTemplate.exchange(uri, HttpMethod.POST, http, LinkedHashMap.class);

            if (response.getStatusCode().is2xxSuccessful()) {
                LinkedHashMap responseBody = (LinkedHashMap) response.getBody();
                List<String> images = (List) responseBody.get("images");
                String imageUri = (String) images.get(0);

                return imageUri;
            }
        } catch (HttpClientErrorException | URISyntaxException e) {
            return "Failed to upload image";
        }
        return "Failed to upload image";
    }
}
