# store initial variables
LDA_int 1
STA 101

LDA_int 1
STA 102

LDA_int 0
STA 103

# add 101 and 102, store in 103
LDA_adr 101
ADD_adr 102
STA 103

# put 102 in 101
LDA_adr 102
STA 101

# put 103 in 102
LDA_adr 103
STA 102

LDA_adr 101
STA 56

JMP 12
