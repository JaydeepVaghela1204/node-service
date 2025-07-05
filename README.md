# Node.js Service

## Overview
A basic Express.js service with a `/health` endpoint.

## Setup

### Local Development
```bash
npm install
npm start
```

Service runs on port 3000.

### Docker
```bash
docker build -t node-service .
docker run -p 3000:3000 node-service
```

### Kubernetes
Apply manifests in the `k8s/` directory:
```bash
kubectl apply -f k8s/
```

### Endpoints
- `GET /health` → Health check

### Example Response
```
{
  "status": true,
  "response": {
    "message": "Server is running",
    "timestamp": "2024-06-01T12:00:00.000Z"
  },
  "error_code": null,
  "error_message": null
}
```

### CI/CD
Deployment is automated via GitHub Actions to AWS ECR/EKS. See `.github/workflows/deploy.yml`.

### Environment Variables
- Set via `k8s/configmap.yaml` and `k8s/secret.yaml`.