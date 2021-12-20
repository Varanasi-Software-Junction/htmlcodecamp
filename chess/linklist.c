#include<stdio.h>
#include<stdlib.h>

typedef struct mynode{
    int data;
    struct mynode * next;
}listnode;

void addLast(listnode** head,int data);
void addFirst(listnode** head,int data);
void addSorted(listnode** head,int data);
int  getLength(listnode* head);
void traverse(listnode* head);
int main()
 
 {
     listnode* head=NULL;
     int x,pos;
     while(1)
     {
         printf("0-exit, 1-AddFirst, 2-AddLast, 3-AddSorted, 4-GetLength, 5-traverse\n");
         int opt;
         scanf("%d",&opt);
         switch(opt)
         {
             case 0:
             return 0;
             break;

             case 1:
             printf("Enter the number :");
             scanf("%d",&x);
             addFirst(&head,x);
             break;

             case 2:
             printf("Enter the number :");
             scanf("%d",&x);
             addLast(&head,x);
             break;

             case 3:
             printf("Enter the number :");
             scanf("%d",&x);
             addSorted(&head,x);
             break;

             case 4:
             x=getLength(head);
             printf("Length of linkedList :%d\n",x);
             
             break;

             case 5:
             traverse(head);
             break;

             default:
             break;
         


             

         }

     }
     return 0;

 }
 void addFirst(listnode** head,int val)
 {
     listnode* p=(listnode*)malloc(sizeof(listnode));//Create a node
     p->data=val;
     

     p->next = (*head);//next of new node is the previous first node 
     *head=p;//new node becomes first node
 }
 void traverse(listnode* head)
 {
     while(head!=NULL)
    {
         printf("%d,",head->data);
         head=head->next;//head element go to back
     }
         printf("\n");
 }
void addLast(listnode** head,int val)
{
     listnode* p=(listnode*)malloc(sizeof(listnode));//create a node
     p->data=val;//value asign in struct
     p->next=NULL;
     if (*head ==NULL)//There is o node in list. So our node becomes first node
    {
    *head = p;
    return;
    }  

listnode* temp;
temp =(*head);
    while(temp->next!=NULL)//Keep moving till you find  node whose next is null
{
    temp=temp->next;
}
    temp->next=p;//Assign new node to place where next is null
}
int getLength(listnode* head)
{
    int length=0;
    while(head!=NULL)
    {
        length++;
        head=head->next;
    }
    return length;

}
void addSorted(listnode** head,int val)
{
    listnode* newnode=(listnode*)malloc(sizeof(listnode));//create a new node
    listnode* p;//p=starting value
    listnode* q;//q=last value
    newnode->data=val;
    newnode->next=NULL;
    if((*head)==NULL)//keep moving tell you find next vlue is null
    {
        *head=newnode;
        return;
    }
    p=*head;//so starting value is head
    //10-20,  5
    if(val <= p->data)
    {
        newnode->next=p;
        *head=newnode;
        return;
    }
    // 10,   11     12
if(p->next==NULL)
{
    p->next=newnode;
    return;
}
//2 Nodes
q=p->next;
while (q->data< val && q->next!=NULL)
{
    p=q;
    q=q->next;
}
if(q->data>=val)
{
    p->next=newnode;
    newnode->next=q;
}
else 
{
    q->next=newnode;
}

    




    
}
//10,15 12










