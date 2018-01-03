print ("*************************** Round Robin with File Reading ************************")
file_read_no_of_processes=open("RR/Num of processes.txt","r")
file_read_time_quantm=open("RR/Time quantm.txt","r")
file_read_processes_name=open("RR/processes.txt","r")
file_read_arrival_times=open("RR/Arrival time.txt","r")
file_read_burst_times=open("RR/Burst time.txt","r")
total_num_of_processes=int(file_read_no_of_processes.read(1))
time_quantm=int(file_read_time_quantm.read(1))
processes_list=[]
for index_of_processes_list in range(total_num_of_processes):
    processes_list.append([])
    processes_list[index_of_processes_list].append(file_read_processes_name.read(index_of_processes_list+1))
    processes_list[index_of_processes_list].append(file_read_arrival_times.read(index_of_processes_list+1))
    processes_list[index_of_processes_list].append(file_read_burst_times.read(index_of_processes_list+1))

arrival_time_list = []
for index_of_arrival_time_list in range(total_num_of_processes):
    arrival_time_list.append([])
    arrival_time_list[index_of_arrival_time_list]=processes_list[index_of_arrival_time_list][1]

burst_time_list=[]
for index_of_burst_time_list in range(total_num_of_processes):
    burst_time_list.append([])
    burst_time_list[index_of_burst_time_list]=processes_list[index_of_burst_time_list][2]

def print_processes_with_arrival_time():
    print ('Processes you enter with arrival and burst_time are:')
    for index in range(total_num_of_processes):
        print (arrival_time_list[index],burst_time_list[index])

remaining_processes=total_num_of_processes

remaining_time_list=[]
def initalize_remaining_time_list_with_burst_time():
    for index in range(total_num_of_processes):
        remaining_time_list.append([])
        remaining_time_list[index]=burst_time_list[index]

print_processes_with_arrival_time()
initalize_remaining_time_list_with_burst_time()


times=0
is_burst_time_smaller_than_time_quantm=0
waiting_time=0
turnaround_time=0
def calculate_and_print_waiting_and_turnaround_time(times,waiting_time,turnaround_time):
    i=0
    print('Turnaround time and Waiting time of the processes is given Below:')
    while(remaining_processes!=0 or (i==0 or i==1)):
        if (int(remaining_time_list[i])<=time_quantm and remaining_time_list[i]>0):
            times+=remaining_time_list[i]+arrival_time_list[i]
            remaining_time_list[i]=0
            is_burst_time_smaller_than_time_quantm=1
        else:
            if (remaining_time_list[i]>0):
                remaining_time_list[i]-=time_quantm
                times+=time_quantm

        if (is_burst_time_smaller_than_time_quantm==1 and remaining_time_list[i]==0):
            remaining_processes-1
            print (times-arrival_time_list[i],times-arrival_time_list[i]-burst_time_list[i])
            turnaround_time+=times-arrival_time_list[i]
            waiting_time+=times-arrival_time_list[i]-burst_time_list[i]
            is_burst_time_smaller_than_time_quantm=0
        if(i==total_num_of_processes-1):
            i=0
        else:
            if (arrival_time_list[i+1]<=times):
                i=i+1
            else:
                i=0


calculate_and_print_waiting_and_turnaround_time(times,waiting_time,turnaround_time)

