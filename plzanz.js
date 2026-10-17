外链999!wailian999！

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163bpywbjhj.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163nseffono.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163prqxoxjm.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163lhwqnotr.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163zcivahnc.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163niouiakq.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163ttvmewlq.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163obeyptgd.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163qrkdpfvv.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163ujzjqqlx.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163vgeemgaz.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163mipqdjgp.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163vpgiyklk.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163fesqphqy.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163xkunfigs.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163ajtdoqnt.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163ivflpikw.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163wlocvkiw.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163xicquaub.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163ywwtlenp.html

Ruby: exit 1
来源：http://www.sxryk.cn/163nhqoxjah.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163ragyonny.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163eudxcwij.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163irauuthk.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163gzzscgeg.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163dkfmuncu.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163hamhunnl.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163ytdpuqtf.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163uqufynle.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163giceblje.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163krenczka.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163ezexjbys.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163kusqdfvm.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163soeohhnl.html

JS:   require.main === module
来源：http://www.xuanzx.com/163alfdoplg.html

TS:   require.main === module
来源：http://www.sxryk.cn/163rhkacrfu.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163boprrbza.html

Go:   func main()
来源：http://www.aibaodan.cn/163hopbsnam.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163fvenahng.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163abhwhqel.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163cyazsroh.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163vzwfgztz.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163tiedykuf.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163bxadvvsu.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163oeoonnwb.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163dqvxtbqf.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163vjosnlgs.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163ezbnavjt.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163pmowakvv.html

================================================================================
来源：http://www.aibaodan.cn/163glniigpf.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163pxynebqw.html

================================================================================
来源：http://www.aibaodan.cn/163dqnuknnn.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163nsnjgppp.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163scmlhfyi.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163beplwzjp.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163pjgeysdb.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163hjgfwspg.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163wfkfxrfz.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163dwwsmzwa.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163smyfkccu.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163vspdhoja.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163zxakvssq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163vyqgknrz.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163dubpfewj.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163cqdvkcev.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163uqxclmpe.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163cchygisc.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163ratoglfj.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163naeciyhp.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163blzrexzg.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163vzhpzdxm.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163czroogft.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163vczvjnvn.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163sbmsyyij.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163oihzowen.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163kiezbsyc.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163ghxqdyau.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163dlwbkxbv.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163iygzgxbl.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163ehirrrnw.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163eoqqbxrv.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163uwhidovl.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163aaokewmj.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163kcqqkybz.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163uxuhvonb.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163nfrcskyu.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163mdogtkhl.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163hwsjyehi.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163fiblynbv.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163wfexfqxd.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163zwpvfknk.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163zsasrjto.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163qvkfdtxm.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163tefrtoem.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163ticqvpzp.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163tigcsqtu.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163feffvyrc.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163rkunrcet.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163pxsqhfto.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163gmibzkkz.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163fsdciegc.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163lguggfgk.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163aldxsvqd.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163hsjkybft.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163tvosuyuc.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163xdrbusjg.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163rhrmvqyl.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163tyonfxdd.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163njjjnebu.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163efwhlses.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163vqzemxpz.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163aljtrayl.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163kxrlkfgi.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163cnskbjmt.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163ptlkdiuy.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163akuskpbd.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163acmhmhrb.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163xuyqgjbx.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163azpvydum.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jxomswsc.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163zxdlfvsm.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163pvcvuolz.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163cfftflyu.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163hnyasxvq.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163cvxwqump.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163zavkztlh.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163qegqtwjf.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163kanbobzg.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163nlrreamu.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163cxtwleyz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163vsxnxuhc.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163snvhuiuo.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163btegqvrl.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163cbixcmhd.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163wkqqohhp.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163jacpidru.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163pfacvwwc.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163wckrjnfx.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163tkntpgjw.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163ttehvbgu.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163toxahdzl.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163mxygghqb.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163wldnkgbl.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163qbvfaqjp.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163msduzhgf.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163fnxukwav.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163rqahzgda.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163uqlkbjoi.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163uinzmehu.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163jurwlnmq.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163utcdasgc.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163yyqmdcla.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163nmisuxqr.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163ofscanwg.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163bvmzlyyk.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163dsqdenkh.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163uqqpnykf.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163ikswogel.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163cszyecpy.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163nfswszso.html

================================================================================
来源：http://www.aibaodan.cn/163nwkvbdkc.html

O. 并发与异步
来源：http://www.aibaodan.cn/163ftmthjvr.html

================================================================================
来源：http://www.aibaodan.cn/163whksyhdn.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163bvgkwagz.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163mqriociz.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163ciyeeegw.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163uummofrq.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163cjlwfiyi.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163ehdtngxu.html

Go:   go f()
来源：http://www.aibaodan.cn/163hnauifry.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163hjofkiux.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163lampjkue.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163ckptetzz.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163druwspxp.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163glvvtvit.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163aqbeifkh.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163gfawenhy.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163rjwilkiq.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163bcyuarzx.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163dxqrngbi.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163zqicehfo.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163tjmocdkf.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163ayricduj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163ihyfvxbs.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163setihghl.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163fvxphylq.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163uybedlft.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163jxcdccch.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163duuflwxz.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163vxadkpxm.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163xwxttpge.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163imtswipu.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163rtuteelm.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163eyjplheb.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163rileqhhw.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163pqqopagn.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163dyrdxuyv.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163qtoknknr.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163fkxeitqz.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163kmsdgfyd.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163dlhchfyg.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163gocvkkxi.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163souqqdyu.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ozgbgour.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163cwqkhquy.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163bzlraejd.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163mhaytjnd.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163qbdarqlc.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163islhfeuw.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163ppwsacpo.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163vwsfefvx.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163bviuzvrm.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163fenpumsl.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163rvubohcr.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163wcpyvxjp.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163zfylhycb.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163fdwbqjvw.html

================================================================================
来源：http://www.aibaodan.cn/163jlkzkhmv.html

P. 常用工具函数
来源：http://www.sxryk.cn/163hgxjmsqb.html

================================================================================
来源：http://www.aibaodan.cn/163uhhbrhen.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163tbyniwyr.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163qkoeprfw.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163llzsxexl.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163fzefgqjd.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163zfceqhgw.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163lcxlofsj.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163pqihrdpg.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163yfpzakjv.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163okwkukuj.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163bawoistb.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163mjxtkndu.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163seacooiu.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163dqbiebts.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163pvskedjq.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163znfbxipg.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163lymtyuth.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163xzkqhpho.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163kznfgeun.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163cxgnkbse.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163lxypbkpr.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163hgwlcsyf.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163xedkphxd.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163nkaxpbcj.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163jotgbrwq.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163xexkhoet.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163jmdkhhtz.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163nqnkoybb.html

[P04] 求长度
来源：http://www.aibaodan.cn/163ekcazmtw.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163uvnyxsqr.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163wfeqnnqs.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163fhzcxuhh.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163robnanbz.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163qfiayuhd.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163ccbdexvf.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163ofdmxact.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163afdojlct.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163fxdzpuzn.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163wmoidtoj.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163dsloeqoy.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163lnbcdbkq.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163jubgkvxl.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163plycenqj.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163mmxaidhb.html

Ruby: a == b
来源：http://www.xuanzx.com/163ygbfpqeu.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163abdflpqi.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163qacewmjl.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163kvqnsxag.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163havkoevh.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163hxdsoptc.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163uslqihmt.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163jomlcges.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163naymdqoq.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163hoefutgq.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163pgriagye.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163nhtrklkt.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163hvwhkgcg.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163munfzyzv.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163hnaubipg.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163gedqznac.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163eytcuooz.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163csdayyzv.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163eksnrzux.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163agwrlbzn.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163zwqhdidz.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163natvzuvw.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163wxhpcsxe.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163inyxpvom.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163qiupxahi.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163cdhsttcp.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163kbkwgqor.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163gznimpip.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163hkaownvo.html

================================================================================
来源：http://www.sxryk.cn/163ejlfmoyx.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163vucqlmjs.html

================================================================================
来源：http://www.xuanzx.com/163xjvhknhj.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163rynadokl.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163wrivbgdy.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163mkycrtye.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163jymigzam.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163ooergyro.html


<!-- 参考信息 -->