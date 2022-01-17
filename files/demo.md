1. Show buddy work integration with github + pipeline configuration

2. Tag the source code based on the commit ID to generate versioned Docker image: 
git tag -a v1.0 89af0fac61cb0ebb3f2c89f1f25b814ce9ee17f0 -m "The first version"
git tag -a v2.0 613b3f4879bef16ee4ea65856208e85a4b735ab0 -m "The second version"
git tag -a v3.0 860bf3abbaae2112d5ccda45d78531fbf1155d2c -m "The third version"

3. Wait for the Docker image to be built and pushed to Docker Hub.

4. Run deployment
kubectl -n xendittrial rollout history deployment/xendittrial-app
kubectl -n xendittrial rollout undo deployment/xendittrial-app
kubectl -n xendittrial rollout undo deployment/xendittrial-app --to-revision=3
kubectl -n xendittrial --record=true set image deployment/xendittrial-app xendittrial-app=docker.io/azraaibaharin/xendittrial:v1.0
kubectl -n xendittrial --record=true set image deployment/xendittrial-app xendittrial-app=docker.io/azraaibaharin/xendittrial:v2.0
kubectl -n xendittrial --record=true set image deployment/xendittrial-app xendittrial-app=docker.io/azraaibaharin/xendittrial:v3.0



5. View service
kubectl get service <service-name> --output='jsonpath="{.spec.ports[0].nodePort}"'
kubectl get service xendittrial-app-svc --output='jsonpath="{.spec.ports[0].nodePort}"'

5. Show logging
    - access
    - application

6. Show logging data is transfered to ES
