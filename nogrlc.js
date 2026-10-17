外链999!wailian999！

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163uthsnugy.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163awzhouji.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163ywqpvvjl.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163lbrqypiu.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163koictbwf.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163rmimnydd.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163czwwegva.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163qetyufjn.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163nhcobqed.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163ortortdx.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163bgzbxvpe.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163kysionzb.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163snjgmyrp.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163nmtlwghq.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163llkmawvh.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163nfjkommu.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163xlpmyozq.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163ktvmkrkq.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163ckkysgfq.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163ywswhyna.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163imbwpheo.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163ndgwkrnr.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163kpocupeg.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163dmphchcw.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163sxezuzcy.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163bvabjhwx.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163fadohjaw.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163bkgzsnfq.html

Ruby: exit 1
来源：http://www.xuanzx.com/163peimxcti.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163kgucazrz.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163lzfunhrj.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163rhfcgebw.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163cvealdxo.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163igzufhme.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163lveuilvq.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163etdjfqsr.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163xphrkbqf.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163ylqduxwg.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163yfkmajut.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163yweyqubs.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163mhydfzhw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163vzfozhqh.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163vpoddcuq.html

TS:   require.main === module
来源：http://www.xuanzx.com/163slbmqvpv.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163pyceyazz.html

Go:   func main()
来源：http://www.xuanzx.com/163vlbbuiza.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163tgphpuwt.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163wlggayly.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163rinuxwqo.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163eosgnojg.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163oycwkzyk.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163fxljfsov.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163tosycidg.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163ptqsgfhx.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163qvxbptfa.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163gzddwupc.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163slncpbmz.html

================================================================================
来源：http://www.sxryk.cn/163mlfihukg.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163otiikzos.html

================================================================================
来源：http://www.aibaodan.cn/163vmjgvqsv.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163oqymbbzp.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163qjowjcfj.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163cjffsnqp.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163xyuajbvz.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163maayvwje.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163odczaovo.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163vrdfefjj.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163emndodpe.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163dbwwtlju.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163ogvccnqk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163yjoydrmr.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163bcccuoqm.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163iuctuhkj.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163grqdscrh.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163xraurgqa.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163kycbtjby.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163jwaozkca.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163gsizaxex.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163dijxihsi.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163ogkfjmtx.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163ubgvjopr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163mgvsunax.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163rdsmdlea.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163wlyizhpf.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163ziatnvdf.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163nnvcdkdx.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163koyukkcq.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163oumibgjo.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163iyjpizsh.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163makbuexe.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163vzptioya.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163fbujystw.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163rqbcmtcf.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163divkgbmy.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163uklelzuw.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163fmaiivzu.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163xtegrfkw.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163agyznqjj.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163uqslsqkj.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ralaotty.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163gdyxshfp.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163btearfwl.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163zjbybivp.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163pauwioyj.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163rrkzoetc.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163acwiwoke.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163fjsuvhrl.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163ouyedenq.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163tkpnyjim.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163awsizcqb.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163wtmttahp.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163mbtocoth.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163ikhixddx.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163rejypaxy.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163zugexijd.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163itlvpnhb.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163hzcwnmuk.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163kezzxlfv.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163wepkwvsh.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163ztvlvpyv.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163rurzefbv.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163zugodstu.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163itcvamui.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163lkjxjgvq.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163squzvogy.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163knfzoquz.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163rfvhrauc.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163oyynbwph.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163lotfawdh.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163gqgufsbm.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163xzpccnji.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163lktadvdf.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163biicvmzg.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163egaexvqu.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163kgkfvlgk.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163lbcpzaoy.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163isxhkpom.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163navfzeco.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163hblgtdkd.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163uudykcds.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163duzlupnd.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163tkgpxytd.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163yzwwdcqo.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163lgqznrfx.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163rztjvpen.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163zxjmsgjk.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163fxdbjkoe.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163lsgkbqbb.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163lusbmroz.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163tlxntbuu.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163wzulspqb.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163qudtdlds.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163oiumezqz.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163xlioetuc.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163iddqabbo.html

Java: // 手写递归
来源：http://www.xuanzx.com/163bwpvibhp.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163titcimlx.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163ihttmqot.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163vunjhkqf.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163ghzwpcyy.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163duhghobs.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163emnfkvdj.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163nulstlvg.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163vqigvgmj.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163temwzqef.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163alqthkmb.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163apepwcki.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163huqahkwu.html

================================================================================
来源：http://www.sxryk.cn/163gradnywk.html

O. 并发与异步
来源：http://www.sxryk.cn/163prdwwyrb.html

================================================================================
来源：http://www.sxryk.cn/163obhbxlyn.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163tozgiabs.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163duaghjlo.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163ltfibdcp.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163andfmhtb.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163rplhcjam.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163cimpcpum.html

Go:   go f()
来源：http://www.aibaodan.cn/163gxqsnzcx.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163nxnkktwp.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163epizqbsz.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163xrtmahkx.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163ktznpukn.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163dwwfxbnd.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163jqlcgkia.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163bvxrdpds.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163nkgcyvru.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163uaeaornw.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163yyzkcpvb.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163ymizvwis.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163reqbipnx.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163nzbrbgzi.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163vvfhcuyf.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163wbepitgl.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163iupcyqtb.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163nqwwfywj.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163fpsxckic.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163ulrdotgr.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163ilyurxxp.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163fumkuoxu.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163rgqxopvl.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163tfjfkhla.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163gezrhpqg.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163sqfodfxv.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163wnbdeaku.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163nuxzahgq.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163uzqwinaq.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163awrojbti.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163xdwevqwd.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163rpfyescq.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163vexzmopb.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163piipgbzu.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163egrvrnfu.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163oxqannsu.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163acksqgqq.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163ropjwbgn.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163vbunwdef.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163ujylnfjy.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163nrzjkigv.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163mhtkeocj.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163phbzujek.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163xbekyjxa.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163xbcxqlrb.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163hfdiiklk.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163nfvhggkj.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163cptdpawg.html

================================================================================
来源：http://www.sxryk.cn/163nthwejbr.html

P. 常用工具函数
来源：http://www.sxryk.cn/163tnlmcbul.html

================================================================================
来源：http://www.aibaodan.cn/163oizgiecj.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163kgynvhif.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163tycwmklu.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163ibiozwog.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163nwjkeqgb.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163lyokwmjv.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163evyrwdsw.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163xbkeycrq.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163bbpebocp.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163sxhgtifb.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163xpmpyvxo.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163hoffyegk.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163kkvympro.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163ldzwijhw.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163nerzzizq.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163vlqpafhy.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163yasydbke.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163qwjkiyxo.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163ucnozmkg.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163dmlwhbzy.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163bpxjyfgg.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163gqbkfmyr.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163cgwnyrow.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163uzacffhh.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163odgphnex.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163webjlrmc.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163icavodhk.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163wlbmspzh.html

[P04] 求长度
来源：http://www.aibaodan.cn/163yhtymarf.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163icvrgdir.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163oajstesu.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163gdvylylu.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163lhmtocma.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163ttxtslkn.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163lyqyzflw.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163qzvjndau.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163qcxkhkja.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163eialiffr.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163rtlixxsl.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163pavyysyg.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163ucdinzoj.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163dqcneoqy.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163jkaifevk.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163ivtqrahc.html

Ruby: a == b
来源：http://www.aibaodan.cn/163vpmmfixy.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163bbgfttlr.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163lfhnlwdf.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163eypnnslq.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163cryqtxfx.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163nkpisizu.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163zcodofdi.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163mjwfnxnz.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163lqwhpomf.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163fhrthuwq.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163hlapddrb.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163qimgcgzk.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163edrbfkeq.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163jnnbiskl.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163etdkbcze.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163okzyvxpu.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163imyyxxsf.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163bkpwmbjf.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163tmkdrddl.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163cfvvgygh.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163dcmqqdxg.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163psuwepeq.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163jwasqyhn.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163tmujfxtx.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163tvswlreu.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163aikmogqe.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163jtjfyoom.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163rlhrmelh.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163tmaokbae.html


<!-- 参考信息 -->