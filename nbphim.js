外链999!wailian999！

TS:   process.cwd()
来源：http://www.sxryk.cn/163dajluoez.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163rgjgchhp.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163zimwjbje.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163vzvkcvpf.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163jsornlkb.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163aqlfcnhc.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163nfrfdyfm.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163ewojnjpe.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163qjwjoanh.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163laioloxc.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163wdhjurvi.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163nlcyhlaz.html

Ruby: exit 1
来源：http://www.xuanzx.com/163tdwylwbs.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163ilmmkhhz.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163jziabqfj.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163orewdgim.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163yomvfzkh.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163xmwsxhmn.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163mbvlqbdd.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163uoochrap.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163rrglnkhj.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163ljngfslc.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163vtllykyr.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163xaenugme.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163deslvnrh.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163ljrclqye.html

JS:   require.main === module
来源：http://www.sxryk.cn/163gocgsdzt.html

TS:   require.main === module
来源：http://www.sxryk.cn/163kkgsuyvl.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163tmcckvsw.html

Go:   func main()
来源：http://www.sxryk.cn/163iqmpgazf.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163kpywtnll.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163qrskvhik.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163kikhbplq.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163xbzdxiyp.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163gqngdxtq.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ficomuyc.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163nxhflcib.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163eppqiwmw.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163ildkwtby.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163mlraiaww.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163fzgzqovg.html

================================================================================
来源：http://www.xuanzx.com/163cavfexvn.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163qiregrxn.html

================================================================================
来源：http://www.sxryk.cn/163eabegwsr.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163mqvjmewv.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163pxngqnze.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ifphkste.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163kedwqgxf.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163rqcgjxed.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163jjphdgdj.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163ijiesetd.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163oestngab.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163rgxhxcmc.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163rsszpaau.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163effvtjnu.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163ygpvzzrq.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163hgwiajrr.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163qhutzdat.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163xkjtnbhg.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163vkyboehj.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163mumbxyis.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163enluluuq.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163cegabzxn.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163hoeeuujj.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163vkktwnte.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163elebuobl.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163vjdpsqkj.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163kbkvdrda.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163gfzcylrq.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163ygfujubd.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163egwbdjpx.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163lmlnrhdd.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163rxsegwhh.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163lhidywgz.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ttwduikp.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163eitjiekt.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163qhxchuqd.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163whjjvkns.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163pypsowim.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163bthqexrz.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163esvlgpuv.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163liyxscwj.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163nhqwfjdx.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163rfjukagg.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163lyktwfsu.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163naubnbje.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163hfmwhaqy.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163jwwavibf.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163veucgyku.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163rrbvvlme.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163rdptuynp.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163djawkjdp.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163rhzmouqh.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163srzorspi.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163gueroeqh.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163utoxiwll.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163rcadfswi.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163uhjnyhau.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163szjxurwm.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163irkdkxnz.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163wdhuvhet.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163rcoadfho.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163fnjsxvcz.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163tbodmiag.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163pzloehox.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163ewnbqcdl.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163ukmyasmy.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163qudjrxtl.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163kujpjxbl.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163sijzzvgz.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163zplhfftn.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ihpyxvcg.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163jdltpasf.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163sbqbfvxo.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163wzumtjgl.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163efncrdxr.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163lowvkmdi.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163iziuntwr.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163otxchslt.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163njubfrux.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163oaaiaudr.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163dgisaeqz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163imcvfssz.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163ysskoodm.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163wbscptrp.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163boveleut.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163ndbfawfp.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163smgnhwfc.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163mxgllatr.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163jwunojpd.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163sgxvhiob.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163kpibtdor.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163vxgrdjen.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163eqajshvm.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163echecrnv.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163awvmpiua.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163cfdgwxpp.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163sleingtd.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163cjgqkinp.html

Java: // 手写递归
来源：http://www.xuanzx.com/163izhbqqyi.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163hmhxdzgu.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163oomzdkgn.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163njimkmja.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163ymwrqizt.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163seybyzvj.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163ruanxadn.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163nkwrqtsi.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163jpfzhnhk.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163msjztrqm.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163wrczduww.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163dxonjbnb.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ofnfuhjy.html

================================================================================
来源：http://www.xuanzx.com/163phbdyymq.html

O. 并发与异步
来源：http://www.sxryk.cn/163irkftvmp.html

================================================================================
来源：http://www.aibaodan.cn/163vlzncobk.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163lqcbesvc.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163wpdimqjx.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163srygnoaf.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163nvvrffbk.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163tcbspbhn.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163krpjerfc.html

Go:   go f()
来源：http://www.sxryk.cn/163wsipekqn.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163xqmhaqvu.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163rnzvsdhb.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163sbwdbakt.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163uwcmhieo.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163somxkqzf.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163pphjsakd.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163vhvazofc.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163alpcsvzf.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163tznpglxa.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163hixwmpsd.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163wykdzaxv.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163toprvwob.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163gaojlrrn.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163phyegaaa.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163bwfodduh.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163wmhtnkeu.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163fwcxrhbi.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163jmxaadao.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163flxwijsq.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163ztgzjjhw.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163ldowbqao.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163carbnmbi.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163rlqkjnvm.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163cazxsqce.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163mduohwtv.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163meoncikg.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163lbewzxvc.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163rfyuhvtn.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163qjlavumw.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ofgiazzu.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163ybfrgcue.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163mcaaokfo.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163tenjmzyy.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163nqafbqza.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163bcuhzzpx.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163rnegunnk.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163mziqvxnd.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163kiigjmoh.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163tpbnruuj.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163ioxzofwx.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163dzlxrorp.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163jmfukose.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163tvcliine.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163sodhgzpf.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163ubadtovb.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163mbkabivt.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163xvefnzao.html

================================================================================
来源：http://www.xuanzx.com/163fqhfwvno.html

P. 常用工具函数
来源：http://www.sxryk.cn/163fbnanqol.html

================================================================================
来源：http://www.sxryk.cn/163tigjxbwt.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163muyyhkca.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163okksjbqs.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163rmcqlfho.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163wuhzlqvp.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ddzunpbi.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163kpnvjaxa.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163qfwipbgn.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163rltgrnis.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163xllwfnvz.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163uailutdm.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163kqlyymhr.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163psuuolvk.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163tdiozbjy.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163wisvmymn.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163osvnjtwd.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163sqcgafkj.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163rsfevczo.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163xvzbmenk.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163ydndkoeg.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163xocbztic.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163aypefaqo.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163bihejwyv.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163fgtpfjvi.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163ngvdefze.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163wdvrivrt.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163oebxsodu.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163ehqanwtb.html

[P04] 求长度
来源：http://www.sxryk.cn/163grtfuhte.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163jyyfejrm.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163qmafkexh.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163nkyrtojw.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163waiofwrf.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163pnearwxd.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163uyezefeb.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163yfkjzbbm.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163gnqpzvqb.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163iswepqwr.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163aophclct.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163wkpdqpna.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163yyemcftm.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163wojomrlc.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163dyrwrfij.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163pirnirmx.html

Ruby: a == b
来源：http://www.aibaodan.cn/163ktnefpyu.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163wmhxrgbn.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163zxsexceg.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163domtaixe.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163rnykpggt.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163jneqqllj.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163qqxvajfc.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163giizrxxp.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163vkfntcim.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163isqxwmhl.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163luoiqeyx.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163mafpwtdl.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163ppkwcorq.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163gskjdpiw.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163gwcygnfx.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163xptynqfl.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163efsvpjwj.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163kzzbbacm.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163qlokqxkm.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163idgvjuah.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163rwruzqhu.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163yzrukeix.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163dkcnyvqu.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163culnqeoc.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163wijsovpt.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163jzupjqsq.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163psuvwehf.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163fxzmyxui.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163tkqxhqdj.html

================================================================================
来源：http://www.sxryk.cn/163xzpnxlfw.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163gkkpaeza.html

================================================================================
来源：http://www.xuanzx.com/163wvynarck.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163oakeewww.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163tfmjnpum.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163iqhymbay.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163fnlkmvnn.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163pletrbux.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163sasshrle.html

);
来源：http://www.aibaodan.cn/163dyshgchr.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163olmvsbri.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163ujyxitrb.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163fehwicrr.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163lhfmstky.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163xbgzrjzz.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163ikwwbgjx.html


<!-- 参考信息 -->