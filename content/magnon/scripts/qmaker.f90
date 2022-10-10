!> Program to calculate qfile for SQW
program qmaker
  implicit none
  !
  character(len=13), dimension(1):: label
  integer, parameter :: out_file = 1
  integer :: i, j, num_q_points, num_grid
  real(8) :: t, xaxis,step
  real(8), dimension(3) :: x0, x1, x
  real(8), dimension(:,:), allocatable :: q_points
  !
  !Initizalize variables
  xaxis=0
  num_grid=0
  step=0.01d0

  !Reading q-points from the standart input
  print *, 'Introduce the number of high symmetry q-points:'
  read (*,*) num_q_points

  !Allocating array
  allocate(q_points(num_q_points,3))
  
  ! Reading high symmetry q-points
  print *, 'Type high symmetry q-points (three components of the vector and press enter)'
  print *, '(After every high symmetry point, type the label)'
  print *, 'Possible labels:'
  print *, 'Gamma -> {/Symbol G}, X, L, K, a@^b_c, ...'
  do i=1,num_q_points
     read (*,*) q_points(i,:)
     read (*,'(a)') label(i)
  end do

  !open file
  open(out_file,file='qfile')

  x1 = q_points(1, :)
  do i=1,num_q_points-1
     x0 = x1
     x1 = q_points(i+1,:)
     num_grid = num_grid + int(sqrt(sum((x1 - x0)**2)) / step)
  end do

  write(out_file,'(11x,i5)')  num_grid+1
  write(out_file,'(4f11.6,a13)')  q_points(1,1),q_points(1,2),q_points(1,3), xaxis, trim(label(1))

  x1 = q_points(1, :)
  do i=1,num_q_points-1
     x0 = x1
     x1 = q_points(i+1,:)
     num_grid = int(sqrt(sum((x1 - x0)**2)) / step)
     
     do j=1,num_grid       
        t = 1d0/num_grid * j                
        xaxis = xaxis + step
        x = x1*t + x0*(1d0-t)

        !Write the x,y,z components and x axis for the AMS plot
        if (j==num_grid) then
          write(out_file,'(4f11.6,a13)')  x,xaxis, trim(label(i+1))
        else
          write(out_file,'(4f11.6)')  x,xaxis
        end if
     end do     
  end do
  
  !Deallocate arrays
  deallocate(q_points)
  !close file
  close(out_file)
  !
end program qmaker
