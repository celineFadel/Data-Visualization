import csv


fieldnames=[]
rows=[]

donations=[]

with open('./aiddata.csv') as csv_file:
    csv_reader = csv.reader(csv_file,delimiter=',')
    line_count = 0
    
    for row in csv_reader:
        if line_count == 0:
            line_count += 1
            fieldnames=row
        else:
            # print(str(row))
            rows.append(row)

            donations.append(row[3])


donations=list(set(donations))
donationsTemp=[]
for num in donations:
    donationsTemp.append(int(num))

donations=donationsTemp
donations.sort()



for i,row in enumerate(rows):

    if i is not 0:
        print(row)
        row[5]=donations.index(int(row[3]))
        print(row)
        print("==============")

print(donations)



with open('aiddata2.csv',mode="w") as csv_file:
    # pass
    writer=csv.writer(csv_file)

    writer.writerow(fieldnames)

    writer.writerows(rows)




