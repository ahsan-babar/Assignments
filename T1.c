#include <stdio.h>
#include <unistd.h>
int main()
{
	int arr[100];
	for(int i=0;i<100;i++){
		arr[i]=i+1;
	}
	int sum=0,cpid1,cpid2,cpid3;
	
	cpid1=fork();
	cpid2=fork();
	cpid3=fork();
	
	if(cpid3==0){		
		for(int i=0;i<25;i++){
			sum+=arr[i];
		}
	}
	
	if(cpid2==0){

		for(int i=25;i<50;i++){
			sum+=arr[i];
			
		}
	}
	
	if(cpid1==0){
		for(int i=50;i<75;i++){
			sum+=arr[i];
		}
	}
	
	if(cpid1>0){
		for(int i=75;i<100;i++){
			sum+=arr[i];
		}
		printf("%d",sum); 
		printf("\n");
	}
	
	return 0;
}
