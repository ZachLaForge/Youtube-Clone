from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Reply
from .serializers import ReplySerializer
from django.shortcuts import get_object_or_404



# Create your views here.
@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_comments(request):
    replies = Reply.objects.all()
    serializer = ReplySerializer(replies, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_reply(request):

    if request.method == 'POST':
        serializer = ReplySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'GET':
        replies = Reply.objects.filter(user_id=request.user.id)
        serializer = ReplySerializer(replies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def reply_detail(request, pk):
    reply = get_object_or_404(Reply, pk = pk)
    if request.method == 'GET':
        serializer = ReplySerializer(reply);
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = ReplySerializer(reply, data = request.data)
        serializer.is_valid()
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        reply.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)