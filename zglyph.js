外链999!wailian999！

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163dufdhkis.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163rjnkzxop.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163gxiarbzf.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163ukuytbwu.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163fjnhycha.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163tfdxkzwf.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163oevxisbp.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163yqqzokbj.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163fglwrwzh.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163kklhydcy.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163arwiwmxv.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163wdrpmxar.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163tegtqyjy.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163fhaaggdh.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163gaoxvelh.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163cocandbh.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163jupvthah.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163tgysxsbl.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163maryakju.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163sypjmxke.html

Ruby: exit 1
来源：http://www.sxryk.cn/163tozakiqx.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163jweyshsh.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163vlhxbkwr.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163wrafubep.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163wuhaifmz.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163flofydks.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163bwokctwf.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163wvhocxot.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163ticqixrt.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163rlcnuxsx.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163cizqfdhr.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163xpaegsqg.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163dpfivuri.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163hbepsejq.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163dqtjbqsb.html

TS:   require.main === module
来源：http://www.xuanzx.com/163sugoylfn.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163eccsgfrr.html

Go:   func main()
来源：http://www.aibaodan.cn/163rwhohgro.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163rhxhqhhl.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163grntcvkg.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163kvdqnqar.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163tijclwot.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163gjwibwxx.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163jidevblf.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163kghcyxxp.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163gnmksrua.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163ovlojquk.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163engsbvgd.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163iekjarew.html

================================================================================
来源：http://www.aibaodan.cn/163olmkgorj.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163tadmjvbl.html

================================================================================
来源：http://www.sxryk.cn/163cmedxsou.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163wpitcjky.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163txahpqez.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163lnpyzmxc.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163lsieuqck.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163sdygfpef.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163rjyypprr.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163nfrpcvub.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163skoqlexg.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163avwrhmlo.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163olzykvan.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163gctnvksf.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163asepyzcy.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163cqqmvrmq.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163dqtrntae.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163zujodqsk.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163tfxnofqd.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163skhlbgoa.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163ftormvtt.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163jwzdojip.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163lrofktfc.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163djlnqcwt.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163wsiofsay.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ydjlgase.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163uazxnzvt.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163kmybyxiy.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163nidfiiuz.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163nwujckyr.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163rduipjmb.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163cydefplz.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163swrikzhu.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163tanyxgyy.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163uxsnocev.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163jllyhjzm.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163kbkvovde.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163nrjstcgv.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163oevmsrfe.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163elpzjwzb.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163wyllosck.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163qlkrjvjo.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163gxczospe.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163duihmvgy.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163gjfktuhv.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163krlsltvx.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163izxcdvlk.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163gfggilhq.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163itynejiv.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163jydjqvtn.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163pmfrslzw.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163svrhkdis.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163cmhbnbjy.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163axmgvmqy.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163qhclfzty.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163wdhibnyv.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163pbkxqmro.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163gfmtefvg.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163aepikter.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163yhuyrpnp.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163xkdxgrms.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163jxuaeaor.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163rvrqnsem.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163xniakior.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163cfvycuyc.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163fzgwlaod.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163ldpwlxto.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163qwvifszv.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163ntbdiqpe.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163calmqzka.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163lqwvqyvu.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163dwfvyhmz.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163stboadks.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163jqdwmedp.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163etiqwwxm.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163hljlfgqm.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163fgvkdzrt.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163uwislgnz.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163ulubvfpc.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163utzlqcbp.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163nykvgwum.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163dqmuczyd.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163hndeoofe.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163scpspzke.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163wwnrkhxb.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163nzwyuiqs.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163jvomlotp.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163jbpbhjle.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163vtiyljbs.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163patzfpyk.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163drmgddte.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163jivxtzyn.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163eaojvsmn.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163llpkllpj.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163wkonelpf.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163xrtegnoj.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163lihgdwvj.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163kmfvcuzn.html

Java: // 手写递归
来源：http://www.xuanzx.com/163qvapblzh.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163oyenkwjh.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163csumswvd.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163gischycj.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163xekafzcq.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163rnmxhvhr.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163hiirxyac.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163nwpvlfrx.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163cehpvjtw.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163sbzoijap.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163dtwynbgy.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163fulsidmu.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163jpkshexa.html

================================================================================
来源：http://www.aibaodan.cn/163fdmxbyxg.html

O. 并发与异步
来源：http://www.sxryk.cn/163dzzixyur.html

================================================================================
来源：http://www.aibaodan.cn/163pdnchwcl.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163oedssxoq.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163jgjldyzj.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163qbvivlix.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163eyendgww.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163vijjxphq.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163tewmsrod.html

Go:   go f()
来源：http://www.aibaodan.cn/163ftuxbvsr.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163jifaqwaw.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163ynhxjasy.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163lahmlwew.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163dgnmmwut.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163yckvkmjj.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ikhcawfb.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163nqawilzk.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163pajaimwo.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163arjmrmhj.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163kgdnxwmk.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163cutlqbqq.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163znolbsbo.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163sobdmgtb.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163uuewodrh.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163tapetppp.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163igtpkrpz.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163vjijtldo.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163dfinvsfa.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163cshclusp.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163lncmzkdt.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163bmvriczy.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163hwucihut.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163vzkiujhk.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163oskgwmmp.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163otjhgafy.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163xnrqlwrz.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163yfxfaizv.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163swkmkjxu.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163flqlebqx.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163yhzateih.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163jkidwkkl.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163wtnvqvab.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ovscbvpg.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163pkbrprtm.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163oxfzmtwg.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163vvkxyqpv.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163hintgyrj.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163yzftjbrl.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163lqotkufe.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163dgqjshhq.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163iyzthxtx.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163fhsgswro.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163kurgjzft.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163fffnfvph.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163lgwqqjqd.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163zpgivsza.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163ixasfyte.html

================================================================================
来源：http://www.xuanzx.com/163jtcvfyoi.html

P. 常用工具函数
来源：http://www.xuanzx.com/163lpoonstn.html

================================================================================
来源：http://www.xuanzx.com/163nhawhzfe.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163kwxrovow.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163bpaygxug.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163qdlqldil.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163qlgkskiw.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163mvgtzday.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163tgfbtqbl.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163dhodkngs.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163rrijatji.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163kfwlnlso.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163wrijgafp.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163vgvmpfgv.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163bnqymhgj.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163pyyieheq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163tlebknhk.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163rfjdankb.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163dgxlzhzd.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163dljeazpp.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163fetngcas.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163sxsaqnnp.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163zqkaghvj.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163xthvsnfx.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163umzrkwta.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163wqkhhpnb.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163tjqgxuyu.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163qlwemliq.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163wckvsdbi.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163vmymiftt.html

[P04] 求长度
来源：http://www.aibaodan.cn/163pjkmyjoz.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163cifjgebn.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163hfmocnxf.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163krzhvlxr.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163bxiacsur.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163msoqcytf.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163pygikkba.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163xvvgbdkc.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163algmlrbg.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163uoaexrlp.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163twvnzkwf.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163tzrkzlrq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163xaqqpcis.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163fwnlshwe.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163epbmmfjr.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163fvroaezk.html

Ruby: a == b
来源：http://www.aibaodan.cn/163qbcfkolv.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163qzjiscdr.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163wgikwxzc.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163fjqpsvnw.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163rnkqpitt.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163rspreeqk.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163jixgajxd.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163ihpzsknw.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163mxzogvdx.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163fopqpdci.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163zfjlbhqd.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163vplutdgy.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163fjdahsep.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163myincsbl.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163mauqtuvd.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163veylgdar.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163kmnpuwco.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163ddvnzjmv.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163foigtxbg.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163dtzooijs.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163uudmnehh.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163uftajqjm.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163peuqwkqx.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163ynkbtvis.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163tinqlfkz.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163qzpdyvtg.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163naaltuxw.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163gthgcnrw.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163bjxtjrxc.html

================================================================================
来源：http://www.xuanzx.com/163vypkgsvm.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163hhbtback.html

================================================================================
来源：http://www.xuanzx.com/163wuqyklfu.html

[Q01] 创建表
来源：http://www.xuanzx.com/163ohhjwioq.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163lhwwutbn.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163rnvpvyol.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163tvpihkax.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163zlhhdoas.html


<!-- 参考信息 -->