pipeline {
  agent {
    docker {
      image 'node:8.1-alpine'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm config set registry https://registry.npm.taobao.org && npm install'
      }
    }
  }
}