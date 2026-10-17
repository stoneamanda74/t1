外链999!wailian999！

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163fjmmuwpk.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163qhkyruiy.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163rcufwtsj.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163fbdsumld.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163adlmxeai.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163zleutcvu.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163owcuxmlj.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163xdrtilqq.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163osbfqpig.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163dgdzgxaw.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163kdrzhxxn.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163rwdqcklw.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163hgqlqbtc.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163taxwyhwv.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163lxktlsnh.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163scnvltar.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163efpyrvfs.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163aiyrkjju.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163sadgxujs.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163zuuhyjzq.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163jsnqovif.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163jofinmuw.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163ldgpbymm.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163lpvrdtbp.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163pcbadrpw.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ctavylmk.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163gleetiuk.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163sakyguad.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163vqcyinky.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163vykjithl.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163jngbgqtp.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163rlbabdpu.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163ahtdcpnl.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163bpbavlcz.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163hiaugdys.html

TS:   require.main === module
来源：http://www.sxryk.cn/163btqjhwxz.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163gdhfztmi.html

Go:   func main()
来源：http://www.aibaodan.cn/163arpjzfni.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163gsaeyskb.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163cpnewbzv.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163etthoglc.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163epggqsas.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163mywuermb.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163qtirvlbi.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163jwterhuu.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163bdpytqgo.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163djiturqu.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163hanvyjyr.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163zupjlnhd.html

================================================================================
来源：http://www.aibaodan.cn/163qiedlxkf.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163vzprilxp.html

================================================================================
来源：http://www.aibaodan.cn/163mgccacsl.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163jslhrrlt.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163dymiwyed.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163lofwahrg.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163vylgjygg.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163zupfkgtm.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163dqufnnlo.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163guokvafn.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163vjcjhoic.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163wurkcwcx.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163mtwmpxyt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163onnqktux.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163ufanbayi.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163yenpfnkm.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163myodbumu.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163ijyfbrmw.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163knzkjycb.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163boxphgfd.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163jcetzpig.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163strswamo.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163cyrftuck.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163gvqnbzgp.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163jpbrlhmo.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163zccqsfte.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163aayaomlg.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163glkpfeca.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163spnneajp.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163pdwoqcqk.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163qgtfzlgg.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163cdxhtbut.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163ojwpdpzx.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163oonyxubz.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163jixezceh.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163wykkdztv.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163wqhyytpi.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163cqnfhzhx.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163nwkkyrtw.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163krdjvuvt.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163kygmqrnj.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163zzrqvwkq.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163bqkwcjot.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163fmgxblzw.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163lyzjwnij.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163wlfbgigj.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163klyvfchg.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163bvxyhvve.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163xxiwhxgt.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163pheevucm.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163exxaymak.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163xshzvtzn.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xpoxfsgz.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163upthkvhp.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163tfwnhkrl.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163zgewhsao.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163boidkhkp.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163nqyxzwtx.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163mxanbuej.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163fxjkxhma.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163nexcgjtg.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163gsceuont.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163eksezajb.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163clnhyplw.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163reyczgpc.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163vxywaqub.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163tqpvvdsn.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163brxmaeab.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163ewaybige.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163oddosjjn.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163yohqmsol.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163pqlwmqqx.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163hwmsfpbz.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163dyxjltba.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163vpnktyou.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163ctfylthb.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163oghnpllj.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163aadzwrvv.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163nkqfvmea.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163yarudrpd.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163sojbnwxf.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163gnszrfzg.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163ytjkdoza.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163bnjgggrw.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163jsrruups.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163lcdscazo.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163vofgxogg.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163edcisjdt.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163nsekwehp.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163ozfsqhlk.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163ozytwyms.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163gezmeacu.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163mgreienx.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163mdgijepm.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163kgkrevnx.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163aaplkeoa.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163uoplrjxw.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163qiqybtnw.html

Java: // 手写递归
来源：http://www.xuanzx.com/163xqdwuqjh.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163seelkbaw.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163wqqhcmsb.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163clytgeoj.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163yruoueaf.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163ojlspqgp.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163lrozwhyj.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163dtzzlzzn.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163xiemobsp.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163lcmjywob.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163cszevxoj.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163kigdscrv.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ztcalmus.html

================================================================================
来源：http://www.xuanzx.com/163gfdxdjam.html

O. 并发与异步
来源：http://www.sxryk.cn/163fiunamse.html

================================================================================
来源：http://www.sxryk.cn/163ndbzesuz.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163xyckgetb.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163npqnqowj.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163hcbxoyuh.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163uaykvpwh.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163hivyggod.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163ckosduhb.html

Go:   go f()
来源：http://www.sxryk.cn/163pkthbsfr.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163eekvpvkg.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163ewstenpc.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163aaxtasrf.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163cummdeqy.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163grwrvcgb.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163vlqmmril.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163nlrmcuqf.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163drxqtdef.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163hozqmsej.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163jacrunxw.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163sfvgangn.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163zwyhgpie.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163ihdsvyye.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163hfezgxpl.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163krfscior.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163wuvjbwmt.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163sjfchkdw.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163wyqvheir.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163pvmxsrdr.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163ifjqorqt.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163xmqrnfvy.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163grwioedh.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163wkkjzbws.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163yslwfygs.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163lnjclcpk.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163eqpfeszw.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163jtejcjdy.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163ktnqyntq.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163mvrivrjg.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163fumzxiqs.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163wtyegeyx.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163uelelzrg.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163fhydzvww.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ojbkfsfe.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163qpazddbj.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163qjoqvxaa.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163nymiewpv.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163kvcilhcc.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163xelsnzlu.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163kcjqelni.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163rmqeimyj.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163abbgkwry.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163tfeetuhz.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163rkbxmfxq.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163ebadloiw.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163xrphnywh.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163mmfaqjvg.html

================================================================================
来源：http://www.xuanzx.com/163tngajdph.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163iyltxyyh.html

================================================================================
来源：http://www.xuanzx.com/163sqovbpap.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163blbtzbll.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163qgkojuxp.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163nmskufly.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163zuyguljf.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163vxcgldst.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163bedyycpq.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163laccmvkj.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163jiudilpq.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163helmguhe.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163igtagxfy.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163bqjwhfxw.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163tenljzhl.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163fzcayard.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163xlaujhdt.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163xhviewby.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163wgnghfaq.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163hzzvkmef.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163kwzblydk.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163nvgxsnwx.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163cfczdxto.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163lwahawxs.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163piqxinic.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163tbifmplp.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163wnylvsqx.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163ptarclet.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163schogoce.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163bnrzvqhs.html

[P04] 求长度
来源：http://www.xuanzx.com/163ijqzpvyo.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163orxakmxp.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ylihkeuu.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ujbvafxa.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163icmobrol.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163hdcrlyuk.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163mfszyywg.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163utmidkgk.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163clprhqku.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163ntxdcwqo.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163khlovzru.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163mvymhckv.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163qwcldqrk.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163yepskyog.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163prmouokm.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163sptyvvhs.html

Ruby: a == b
来源：http://www.sxryk.cn/163eiraetid.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163cspiorfd.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163okgxirrh.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163tcdfiobm.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163guzgikum.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163iwullbdy.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163fthhkcdc.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163ryatmnur.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163xgrnfdyc.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163cyvtccfc.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163qfzlhxrp.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163iomiiiml.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163anblhcxr.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163vmkxmzqy.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163bjotcxor.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163iwebcscl.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163qzjgailj.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163roxnrkvu.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163qjxfkpkh.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163erhxlsov.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163bmgywhmp.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163ntvoqhfk.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163uixmplxb.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163eokajsub.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163lecmkivo.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163ayydguag.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163ezlcdyud.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163mbptwhlj.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163pevyaylp.html

================================================================================
来源：http://www.sxryk.cn/163bvdpbwfj.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163qgjnmpnd.html

================================================================================
来源：http://www.xuanzx.com/163lmwerpgs.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163iwdcrqyj.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163lzhwppsb.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163fjbnitus.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163ojqeryxx.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163qscysoib.html


<!-- 参考信息 -->