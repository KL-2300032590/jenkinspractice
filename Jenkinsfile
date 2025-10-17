pipeline {
    agent any

    environment {
        PATH = "/opt/homebrew/bin:/Users/pardhasaradhireddy/maven/bin:${env.PATH}"
        TOMCAT_HOME = "/Users/pardhasaradhireddy/apache-tomcat-10.1.43"
    }

    stages {

        // ===== FRONTEND BUILD =====
        stage('Build Frontend') {
            steps {
                dir('HouseSales') {
                    sh '''
                    npm install
                    npm run build
                    '''
                }
            }
        }

        // ===== FRONTEND DEPLOY =====
        stage('Deploy Frontend to Tomcat') {
            steps {
                sh '''
                FRONTEND_PATH="$TOMCAT_HOME/webapps/housesales"
                rm -rf "$FRONTEND_PATH"
                mkdir -p "$FRONTEND_PATH"

                if [ -d "HouseSales/build" ]; then
                    cp -R HouseSales/build/* "$FRONTEND_PATH/"
                elif [ -d "HouseSales/dist" ]; then
                    cp -R HouseSales/dist/* "$FRONTEND_PATH/"
                else
                    echo "No frontend build output found!"
                    exit 1
                fi
                '''
            }
        }

        // ===== BACKEND BUILD =====
        stage('Build Backend') {
            steps {
                dir('OnlineArt') {
                    sh 'mvn clean package -DskipTests'
                }
            }
        }

        // ===== BACKEND DEPLOY =====
        stage('Deploy Backend (Spring Boot Jar)') {
            steps {
                sh '''
                echo "Stopping any running backend process..."
                pkill -f "house.jar" || true
                echo "Starting backend..."
                nohup java -jar OnlineArt/target/house.jar > backend.log 2>&1 &
                '''
            }
        }

        // ===== RESTART TOMCAT =====
        stage('Restart Tomcat') {
            steps {
                sh '''
                $TOMCAT_HOME/bin/shutdown.sh || true
                sleep 3
                $TOMCAT_HOME/bin/startup.sh
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Deployment Successful!'
        }
        failure {
            echo '❌ Pipeline Failed.'
        }
    }
}
