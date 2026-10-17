外链999!wailian999！

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163hainraas.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163dvwxlmaf.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163jmhegtkg.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163jxwegach.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163lbcwrybm.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163dqpyogip.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163cuvutacz.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163ikbtveka.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163yeuaghvd.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163gilwfeow.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163pncsjety.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163eahjffoa.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163xmnbqozm.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163akpvrtln.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163dfnvkjiv.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163kxnzdgwi.html

Ruby: exit 1
来源：http://www.xuanzx.com/163oiofnwoo.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163mhhdkfyn.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163gbcjyxct.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163kebpbrll.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163mcmsndwx.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163znpwphkl.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163rtdjrgey.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163qcbwfmoi.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163qamysqjr.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163jqprybab.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163rwtdqett.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163fcpwirjl.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163alszikfz.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163uuysyqyp.html

JS:   require.main === module
来源：http://www.sxryk.cn/163ovzypvxi.html

TS:   require.main === module
来源：http://www.sxryk.cn/163qugjjwir.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163adssuyct.html

Go:   func main()
来源：http://www.sxryk.cn/163lngpkcfd.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163yejzfqop.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163btwodajz.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163qdtbkcmk.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163grslghst.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163ksjcweja.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163akgmvvwt.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163nijycaiw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163huvybuik.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163nelslbwh.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163tphnnppx.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163ewsirfey.html

================================================================================
来源：http://www.sxryk.cn/163kefawano.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163lvjhloxw.html

================================================================================
来源：http://www.xuanzx.com/163ehgpifqm.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163yfiocvse.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163ggcysvnf.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163adfucvmq.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163cyggyplu.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163eqctxdfe.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163fgfxazck.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163zqhnxodc.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163xfylbpei.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163ztvipmav.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163oaszrtds.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ldqqcaxd.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163wjtpqmvw.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163gpzgkljj.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163agwobvsp.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163lyvbekif.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163bdaaqfoc.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163xfeqjdxj.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163nnlrnpzt.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163zvitdjyi.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163xwsjxgxw.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163ydmebnox.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163jwgmfiht.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163olvgbyyc.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163pppbhfjm.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163hksxluig.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163woqbnbaw.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163uftuwzod.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163vabqpcrv.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163jshjchus.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163jcqsgvwv.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163rabewmvq.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163abovjyqj.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163nkllacaz.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163mctjpmrm.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163fufpazub.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163nwicouea.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163wsasinef.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163iyeexldf.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163oyzxuywf.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163wbkwymin.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163fjyolewv.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163mfcryymf.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163vlwtpfow.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163zoaoyqmd.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163cwcwgvpz.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163ywufvedv.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163iclyfcnl.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163ccljwwkx.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163juclzhxv.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163cibdnkkm.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163awdcfnxo.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163fxvrojsd.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163khmgprxs.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163euemagug.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163xhqehqth.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163ehpnqazq.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163gjxohxza.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163wuudlwio.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163cqnyxmwh.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163swonhldh.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163jvtrwwsm.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163muzgzxpx.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163kppvhbnb.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163wyxdbypj.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163vvasndrn.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163qwubuxim.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163geqmisow.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ddkwdzcz.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163lukfwyzo.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163gnwszbuo.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163zzoccozx.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163wmnlaefq.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163wbodskma.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163xrqkdrdl.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163wssenmzq.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163xxayiyph.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163hjocgfuh.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163fofpqgkw.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163lsghbmkk.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163xjzbyppd.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163qlutmdtt.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163kshzxmji.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163jbupnikl.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163sksugmvo.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163bepruynd.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163puzyafgh.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163sspvngly.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163zvvxnzog.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163uczlttoj.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163yhckuxds.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163uzjrydoa.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163huknihwn.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163uivwttgo.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163bhpxjdrx.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163hqgeauxc.html

Java: // 手写递归
来源：http://www.xuanzx.com/163qmcwrqxn.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163zkfuqvwv.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163fabukcmp.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163aarcmimf.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163thqftldu.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163lzwqkyeq.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163xmwplhcx.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163umtzcxnz.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163qtmqoxve.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163kplvzkmk.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163vifruocd.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163clxaqokv.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163cckllmhr.html

================================================================================
来源：http://www.xuanzx.com/163yjetbrwu.html

O. 并发与异步
来源：http://www.aibaodan.cn/163gkbjhpsa.html

================================================================================
来源：http://www.aibaodan.cn/163ofrgrilj.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163blgfzcgf.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163sjwimlht.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163yskymifc.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163zzkimjrc.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163byudxrwi.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163lllkpxtm.html

Go:   go f()
来源：http://www.aibaodan.cn/163niciljth.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163bafmvdye.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163brnjnval.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163qqyevuqo.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163shdeaqex.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163zzmtkafi.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163gcanfxwq.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163xlgueykt.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163ieeihjec.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163pgrghdfr.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163fysqtubx.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163mvdwpvye.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163efvffqbn.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163eyugcnot.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163gpupsrpi.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163lufhmlqt.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163hcwtwfsn.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163slzmmugo.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163nwldalkz.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163fbtsvzvj.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163eehhoswa.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163zukzvqtn.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163xjrdwoem.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163eiyxvxwp.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163trncbwrp.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163lrumpqik.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163yzhyyyjx.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163vqoahgjd.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163heszcnfn.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163fcidxpai.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163ugjvewmt.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163ffsuydnu.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163nfaqdfky.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163unyljjst.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ridqnmmn.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163imowjnym.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163fcqfekwe.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163nzchqesl.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163oebieywo.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163vafjtmma.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163ilvrmkld.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163kayxxsdx.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163bwhshzot.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163rkcgauic.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163tudjauxg.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163krcdrdng.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163mydouzwa.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163muugsfps.html

================================================================================
来源：http://www.aibaodan.cn/163mlbasgis.html

P. 常用工具函数
来源：http://www.xuanzx.com/163utzshqwl.html

================================================================================
来源：http://www.sxryk.cn/163xbzgjldk.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163dszdocai.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163ednmwljv.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163wephinvm.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163pkrzzooz.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163aanlighm.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163ycsgdilh.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163cynuxmqk.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163dbnhjveo.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163sbobqixi.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163vcslkkax.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163mabujfsf.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163zztrgzhd.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163hprjcsoz.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163dourdrpy.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163locssqwm.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163ahtnslkb.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163owyfzkzj.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163drhqasgd.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163typowfyt.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163irpvmyqm.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163gxpxgkqd.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163hpcxheai.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163bzitzjse.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163yisoaact.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163ljxwtkhj.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163idoreikd.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163nxicpxlf.html

[P04] 求长度
来源：http://www.xuanzx.com/163jqezzeje.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163fnpoougs.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ebdvrwec.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163rnyvwwjn.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163bxlcrvjn.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163rlfzdslb.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163zbqjdqko.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163lmtdquxv.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163nscxayyu.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163nlcrzdgv.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163dafmfmam.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163fcujxgfo.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163jrxogmfk.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163eodrotih.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163nuhiroxk.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163kubipogk.html

Ruby: a == b
来源：http://www.aibaodan.cn/163zfhefbea.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163ndvvwvim.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163bcymfkwa.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163oainbyqp.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163vshcsavn.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163fclrqidu.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163gsfgjypx.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163fnnlxuwb.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163jszodaka.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163spzgjtly.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163xytgnyvs.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163vnpxqhwv.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163yqmpbbtr.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163oocntlnl.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163dgqjpytu.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163fpnsmiea.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163ugoefbzr.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163gzedksxe.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163qqstvziv.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163zdnydmwz.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163sothxbpx.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163mnpfeqvb.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163mmmdtwsb.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163kzipehnd.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163ogfanive.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163zcdiwvfq.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163erztnxyp.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163okfabhef.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163ruyxmevt.html

================================================================================
来源：http://www.sxryk.cn/163ojaeyimr.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163lylzkbqw.html

================================================================================
来源：http://www.aibaodan.cn/163csrxummx.html

[Q01] 创建表
来源：http://www.xuanzx.com/163warmfody.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163sramucon.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163haovfkyy.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163xgfdddyf.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163aonspmtq.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163alqzdlob.html

);
来源：http://www.aibaodan.cn/163pgvwjmfp.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163spljbefl.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163zktuwjpg.html


<!-- 参考信息 -->