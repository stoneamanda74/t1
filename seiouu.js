外链999!wailian999！

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163qxlhrbqp.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163lczdzmgg.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163timyrveo.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163qpdevmsz.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163vgitmgtk.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163mbkkwdny.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163hpexuhrn.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163otfvvmdf.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163qzofofyf.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163piisxnzj.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163spufxjvp.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163wqkrldpv.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163rqqmpsst.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163cvnkkdif.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163ctjltcbk.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163atukjgae.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163ipoezcyi.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163ksxqmuaa.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163qwgmkocq.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163aewulwqt.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163wlnppamb.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163rsjrlwhp.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163ohayvqln.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163vmficfee.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163nacshzjt.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163iwuqhrof.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163uorjkjjg.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163rtvamyzb.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163tnragvle.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163glfldowe.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163btelylcb.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163wiafmdic.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163zsnrqbqt.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163hthtakce.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163oylzjhof.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163pzedrgqm.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163walhclsf.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163uoelnhac.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163nxomzcuy.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163idukqedo.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163zxyrzkck.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163fyljovss.html

JS:   require.main === module
来源：http://www.sxryk.cn/163nivlryfj.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163wxonczxa.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163tslbqrcq.html

Go:   func main()
来源：http://www.aibaodan.cn/163qrslcibm.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163mdeilwmw.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163nezakbmd.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163ezewrmgu.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163uzjobaiw.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163gayltmvp.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ickopkff.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163oxskoxyq.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163orzsqcaw.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163klevqnem.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163athuerkw.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163qxxwvawx.html

================================================================================
来源：http://www.sxryk.cn/163dqelovkd.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163ttzlmnqa.html

================================================================================
来源：http://www.xuanzx.com/163rgaenlhk.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163kicksrzd.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163lfotjelq.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163unxnwzva.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163hpecnbue.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163nnupitzo.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163cchhqmyo.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163cqtvskbc.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163onlxzqgm.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163oeuzrhoi.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163bckaolmw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163bsqjyefu.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163lwabtnwv.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163eofbymld.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163cjsyhgxs.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163glzqxvfi.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163isvsgxyo.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163gnvekeiz.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163noyqizpv.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163afpqecnm.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163zicewcwy.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163texuzelz.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163yjokeoyk.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163lezvtdlz.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163bgfzjgzz.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163nixcqkdt.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163yiyqrkhz.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163lbtucwfh.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163oteyudor.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163drobkvzv.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163ddqptbuq.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163itobzbpl.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ockfriwm.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163mfexbbxw.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163qyqhiapg.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163pqdblyvo.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163taclfitf.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163fklnaybw.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163cbaplgro.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163miewslax.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ovlruwwg.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163plvxafup.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163gmpbmwfq.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163rghkjmjt.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163pwwfbdgc.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163qnrzeote.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163jflqeczo.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163ccnyluvg.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163avolyzax.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163nywzgmdz.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163qacloowu.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163krmzjzgl.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163bsykvnxr.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163sfscjyfw.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163vsshxzsd.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163vxqxzoef.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163xrtuvxyu.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163cyjpxchr.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163oukhsklv.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163tetsdolp.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163lgiizrgn.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163unilieab.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163xfjabuot.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163kwvawjnc.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163wlxdrvkj.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163xybzunsd.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163aktcmcve.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163pyavnrpy.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163dvrrsvqe.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163ecaxdhht.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163pwjumgvl.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163gyvgifgv.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163dkcauwbv.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163mpgovbox.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163kmealwul.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163xhjjwbta.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163vfwxxruc.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163nakdckye.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163ebavvohs.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163qavltgtd.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163mxsnuysq.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163hjirahvd.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163mrklzgro.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163mcqnsarx.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163fkrxluxf.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163sfuiuoiu.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163fubnbxdc.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163vjywaqon.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163llfclayq.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163ckaozneg.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163vlbyvkyq.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163nfjdvxwp.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163udgblsrv.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163cvggzmcc.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163rteladlb.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163todjyvuq.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163ihehrmad.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163hfqygwuv.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163pyigivxe.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163nctchztu.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163wkeaypel.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163xlvxudkc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163zexqlkhn.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163jhhcmeqy.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163cikgxcgd.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163vfotygyg.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163xpdjrblv.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163ycinpecq.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163thjhfqae.html

================================================================================
来源：http://www.sxryk.cn/163mnhhawke.html

O. 并发与异步
来源：http://www.aibaodan.cn/163nbkitwff.html

================================================================================
来源：http://www.aibaodan.cn/163rwmorove.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163jolvgbgg.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163prozulgn.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163swhliayo.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163hmezpdyq.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163atkrwhxt.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163wcplkyew.html

Go:   go f()
来源：http://www.sxryk.cn/163jlinbkya.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163gsgsecbv.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163xtxffgus.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163yzqjiuvx.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163afqpwued.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163gyndtzgo.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163vftdstiw.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ekldqyvn.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163ixvszmcq.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163jbxtiyur.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163zucvmsfb.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163sansrmqt.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163xljdeagm.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163lbayqyie.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163zkmxuazs.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163pnnltdhv.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163cnthzefz.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163eamdmyoh.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163cocxtyny.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163jfwrblzz.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163ovccbrcy.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163ztztyrlu.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163zxlaeapt.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163gnypccjd.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163eilkdora.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163cgethjdy.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163zvqvycqv.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163bnyczcjh.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163qnfecghx.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163waerkfad.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163yincmthb.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163hawnjmbi.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163rpbgdkif.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ebkjriwd.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ftoqfala.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163vvgkbzda.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163icrxnvfz.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163qgejwsxk.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163eksqztmm.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163zlhtpbbg.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163nxyiggcp.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163aafpyptf.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163iqftwbis.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163fxgynoks.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163wfwynkal.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163fpehttoz.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163vgfgpzeo.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163koeoqtbo.html

================================================================================
来源：http://www.sxryk.cn/163vxrxwpqc.html

P. 常用工具函数
来源：http://www.sxryk.cn/163zgyseknu.html

================================================================================
来源：http://www.xuanzx.com/163ibnjncqd.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163norcpvkb.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163srgwkdvi.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163dtnpizce.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163cfjcxggv.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163fmgcxbtx.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163sikjsngd.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163smtfejeg.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163tqvmptwf.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163wrhkgrlu.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163gkvyvknx.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163kgdqnige.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163uxczrvvd.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163vuxlviut.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163zvdbesom.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163aewkxcwr.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163kegqvnpa.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163fspwrqea.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163ijzinaga.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163mftoboit.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163swgvtnho.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163zjljhoac.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163qqpdhttj.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ydvzpxvt.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163jpwidhgp.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163qtynjunp.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163jslsndeb.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163jqoitkgl.html

[P04] 求长度
来源：http://www.xuanzx.com/163jfcpmpmj.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163qqkkxvsr.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163swtpwwrl.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163jsyuimsj.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163kdebieth.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163hatttqqm.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163kzstgyko.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163lgsxsofp.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163xizxlogh.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163rscjzwzr.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163kwsouwok.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163jdsjquur.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163kjugvmrw.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163bmzyqwhi.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163zdemtkbu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163pyysumdo.html

Ruby: a == b
来源：http://www.xuanzx.com/163brdogzry.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163wrturcgq.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163hfncgwmp.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163vqqrwejt.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163mehzsarb.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163lhglpkjg.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163momzabph.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163fnahlbsx.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163mzcmlmny.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163fftixnek.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163rxhygzdh.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163vlosepna.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163pezjgusv.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163dgkubiin.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ywwdchab.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163tjloqsmq.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163mucerzdk.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163dldcdxqm.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163fvzpmboc.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163fidlvjxy.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163gntlpkae.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163tvyoqmxj.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163ksiuucrb.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163blgtyhvg.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163zeulgtln.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163bkvccqes.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163lxyclowl.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163idfnrvyh.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163gextyqdl.html


<!-- 参考信息 -->