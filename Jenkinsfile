pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git clone 'https://github.com/bskamal1933/dj-pykt.git'
            }
        }
        stage('Install all-Dependencies') {
            steps {
                sh 'pip install -r requirements.txt'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'echo Kamal ga Nuvvu Thopu ra'
            }
        }
    }
}
