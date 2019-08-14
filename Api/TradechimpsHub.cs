using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace Api
{
    public class TradechimpsHub : Hub
    {
        public Task SendMessage(string user, string message)
        {
            return Clients.All.SendAsync("ReceiveMessage", user, message + " - " + DateTime.Now.Ticks);
        }
        
        public override Task OnConnectedAsync()
        {
            return base.OnConnectedAsync();
        }

        public override Task OnDisconnectedAsync(Exception exception)
        {
            return base.OnDisconnectedAsync(exception);
        }
    }
}