import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class NotificationsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('join')
  handleJoinRoom(client: Socket, room: string) {
    client.join(room);
    console.log(`Client ${client.id} joined room: ${room}`);
  }

  sendToOwner(ownerId: number, event: string, data: any) {
    this.server.to(`owner:${ownerId}`).emit(event, data);
  }

  sendToCustomer(customerId: number, event: string, data: any) {
    this.server.to(`customer:${customerId}`).emit(event, data);
  }

  notifyNewBooking(ownerId: number, booking: any) {
    this.sendToOwner(ownerId, 'new_booking', booking);
  }

  notifyBookingConfirmed(customerId: number, booking: any) {
    this.sendToCustomer(customerId, 'booking_confirmed', booking);
  }
}
