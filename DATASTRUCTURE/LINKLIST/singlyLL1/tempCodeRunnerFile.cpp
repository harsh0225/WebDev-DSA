    while(temp1 != NULL)
    {
        Node *head1next = temp1 -> next ;
        if(head1next!=NULL)
        {
            head1next = head1->next;
        }   

        Node *head2next = temp2 -> next ;
        if(head2next != NULL)
        {
            head2next = head2next -> next;
        }
        temp1 -> next = head1next;
        temp2 -> next = head2next;
        temp1 = head1next;
        temp2 = head2next;
    }