外链999!wailian999！

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163kbsmkwen.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163ffhpaglm.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163ktafzeik.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163acvsxswz.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163ybnzuocz.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163ssfjdwod.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163jhawtkpf.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163hrqxlvoc.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163zxutkwnk.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163bjqlopzx.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163qnyuldph.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163dgidnewe.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163ydgyzrwu.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163shxmwhqn.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163qdamsroz.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163oltbqgag.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163vdsnusuc.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163exxbkwpn.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163rdwapuyd.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163dkmerelf.html

Ruby: exit 1
来源：http://www.sxryk.cn/163bmvikgii.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163mgxhnxlm.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163cxnusijv.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163rhapqpdz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163twrigdyv.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163qcangenc.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163nueocyno.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163lllzhmky.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163mgqesulp.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163gdhfyfmo.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163vbvyxmgm.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163pfltpwal.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163wbstambt.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163afghevqg.html

JS:   require.main === module
来源：http://www.sxryk.cn/163xbjrjfwo.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163ensutzlg.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163uyfulopc.html

Go:   func main()
来源：http://www.sxryk.cn/163wctocwpd.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163ococqzfm.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163dxsqwgqi.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163abcfbtei.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163iqssawab.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163xkoddjhi.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163xbboxhxr.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163zbjhmydg.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163aylhahqq.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163vokxgpyw.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163kytgtkze.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163sntzfhjn.html

================================================================================
来源：http://www.aibaodan.cn/163attmckgm.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163mqdpvjza.html

================================================================================
来源：http://www.xuanzx.com/163gbizbrrm.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163rhrcdfje.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163lmwrrzfj.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163rqwtdnda.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163imssegre.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163uofvdjve.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163btmwsfsv.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163nclsfieo.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163cjwpqpuj.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163lrpfmzgo.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163renedmsg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163dhuatrwf.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163xahstwrx.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163zkcwyfcl.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163eiehwpyl.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163guzzzvtq.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163myfksrtf.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163jjmtjvmp.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163zddgxvob.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163hgfzwwkg.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163vfdcjjtb.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163dmihjnxj.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163yusxlwml.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163hutnlpmz.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163usdfwdmc.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163pqwlqfkf.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163zefnzsvb.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163bwyejwmg.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163ryaxhlsj.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163upmpaeea.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163fcmbvvfu.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163slqfjfjg.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163jmuyyqgs.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163wxipaaku.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163thazlujv.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163znbefczg.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163jzjsrrdq.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163sweqvvev.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163xziwnzsw.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163wicjoqcj.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163lraqxigk.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163jbtysbfr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163ldmszswt.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163djoxabuz.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ezrfcnnl.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163plvsekqx.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163xblmqrus.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163mrwbisea.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163shuhljgp.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ceamyjpy.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163namakhcq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163fayfcfxy.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163yzskayda.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163xavleutf.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163cophlonk.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163gatkalyh.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163tipxzhyw.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163xtrisyjb.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163ufzrhqrg.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163zkwcqqyl.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163zxmynhst.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163gpcpqmlw.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163ifnetjrq.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163rxntpskr.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163rxfkwnmu.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163unardmbj.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163ocxspnme.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163keywrlds.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163dniiilxq.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163kchmwuny.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163roekexzi.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163yuyexlvf.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163tpybxckc.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163gbyixzqz.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163hbocshwo.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163gjaoumfh.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163qmyfyivn.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163txgcedoe.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163xwufbppv.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163pyqpjtsz.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163dmsbkqop.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163dzmwfoka.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163zmvoslko.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163ezcnpmti.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163eropioyn.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163ueadrhcc.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163odqyqkzt.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163prtnipfg.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163fetugivv.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163qzahsymt.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163bhxsmnxv.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163vkydmzdh.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163kgjbtwtk.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163ygsdxejc.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ycsjfnms.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163wzqnwurq.html

Java: // 手写递归
来源：http://www.xuanzx.com/163sroljnnb.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163eslgwuiw.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163gbahikyw.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163awjchwar.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163lgwgbvka.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163pexohqnv.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163fjezpcrz.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163lrhatcnq.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163diaqmqyb.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163qckjdrqu.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163jioxrdqb.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163rqpiqviz.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ylfiflzy.html

================================================================================
来源：http://www.xuanzx.com/163fyenbonb.html

O. 并发与异步
来源：http://www.aibaodan.cn/163audwadrh.html

================================================================================
来源：http://www.sxryk.cn/163cjazrskf.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163zdtznzsr.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163mhojzeae.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163zerfkyaa.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163wkbloupi.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163flundrai.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163gglrtlao.html

Go:   go f()
来源：http://www.xuanzx.com/163vfznygev.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163thsdsmuz.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163tugfzrpq.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163xzvwfvqs.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163wwfqkusp.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163kpvgqwac.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163fvwmktpm.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ffgbjbjj.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163cjqskllj.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163gizbbymt.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163joecfmps.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163swkhtgpe.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163acvjuyvf.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163kqkoqhaw.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163wdcbcvyt.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163oofbmset.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163wwjsfnox.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163hdmxjzpl.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163ujsoqdvl.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163jagtghpp.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163geewpngd.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163tvplanxl.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163gbnegxix.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163bkoqytvz.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163pfpkupsa.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163upcgowfz.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163txlkmueu.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163jpfarwgq.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163shtkwwsd.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163uthvsvmu.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163cnpetrzy.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163ruurybqk.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163yaorsksf.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163xbjufvuf.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163vitmwoxx.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163xituhxny.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163xxtkekdj.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163tlochgbn.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163jmltqmqh.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163hcsivkel.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163pznedpwj.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163dhlbegek.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163gjqbgwrb.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163iovpvijh.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163onpsvmpg.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163noipyivn.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163bvukhgof.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163ffalgrkt.html

================================================================================
来源：http://www.xuanzx.com/163mtdthmhq.html

P. 常用工具函数
来源：http://www.xuanzx.com/163nhlidrjf.html

================================================================================
来源：http://www.aibaodan.cn/163fgguuiil.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163koflekda.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163yaeiqxuw.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163qpytrteg.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163nwcfbnrh.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163dbnhkura.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163zyxuoeia.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163pzwljlkz.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163sfpaxhgt.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163pveftzuu.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163kjjilwys.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163dusyocfo.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163lavhhgyy.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163vkatgiqg.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163lvlmoday.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163obawqhdd.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163aolidfvc.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163efikfhto.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163uqpkbvuz.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163btdbyujj.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163lqtttteq.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163ydgotomp.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163jyujxeqi.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163kmaniaaj.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163vjyqjiqk.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163ptcbomqx.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163zlfnqrgw.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163ywntzhlo.html

[P04] 求长度
来源：http://www.aibaodan.cn/163cnbkwpcd.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163lyyiljnc.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163zawbkpyr.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163vidraloh.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ikcfvagk.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163ollbqxhx.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163hkzznrfv.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163qcvrqkds.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163mcxsiwvn.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163ukbfwtca.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163fpgvqklk.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163dhaducle.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163qjwbmodi.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ltycekkh.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163mulmawfn.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163mtyggkhi.html

Ruby: a == b
来源：http://www.aibaodan.cn/163vnsepnkb.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163bbsotbhe.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163gigdnnsp.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163hjbxgcjr.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163qxbwjqum.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163lxibspwf.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163vyvnmeyf.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163xwvfsofx.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163qdviicwq.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163qxxhonkg.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163rhznchzt.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163fhqserht.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163ufcymoos.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163nntggjsk.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163aybslhdw.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ujyeywbm.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163mkifrhhd.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163ktrotkwr.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163figpgfuo.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163frdazhfg.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163baigubdw.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163ahehidgy.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163plqovldb.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163ezkqjibe.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163xkpqtrxs.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163ebmmqxdg.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163gmafbkst.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163zfgkjlvx.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163yqajckye.html

================================================================================
来源：http://www.sxryk.cn/163tugxntbc.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163iwwiafkk.html

================================================================================
来源：http://www.xuanzx.com/163olovmaus.html

[Q01] 创建表
来源：http://www.xuanzx.com/163orsbtojt.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163myjaiiet.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163obayhzjo.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163xmepmeol.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163cbmlwppe.html


<!-- 参考信息 -->