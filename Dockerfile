FROM node:20 AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build    # สร้าง .next

FROM python:3.11 AS backend
WORKDIR /app
COPY backend/requirements.txt .
RUN pip install -r requirements.txt

# copy backend code
COPY backend/ ./backend
# copy frontend build ไปด้วย
COPY --from=frontend-build /app/frontend/.next ./frontend/.next
COPY --from=frontend-build /app/frontend/public ./frontend/public
COPY --from=frontend-build /app/frontend/package*.json ./frontend/

# ติดตั้ง gunicorn + pm2 (หรือใช้ node start)
RUN pip install gunicorn

# script start ทั้งสอง process
COPY start.sh .
RUN chmod +x start.sh

CMD ["./start.sh"]
