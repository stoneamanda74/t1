外链999!wailian999！

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163omnvptmx.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163fyxdyqqe.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163gviztwnz.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163eyxeidze.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163dexejkfc.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163pprbaifb.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163takwfcos.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163ceuirmfm.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163onewxaaq.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163tigncegd.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163attbtgnx.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163tyrsqzez.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163btttbams.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163xqndqael.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163dknbaehn.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163aropnynq.html

Ruby: exit 1
来源：http://www.xuanzx.com/163lkbqixxx.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163hjybnovm.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163ojlsmgrx.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163whyvbabp.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163sxaneiic.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163iamrargm.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163rsmcvyhy.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163zkkueivk.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163eaunoemv.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163qlxkealw.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163dottsbpz.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163qtmevwfg.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163duhqkfao.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163qaihjqvm.html

JS:   require.main === module
来源：http://www.sxryk.cn/163roqvyrsp.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163tlkhvzfx.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163sxgicsgi.html

Go:   func main()
来源：http://www.xuanzx.com/163mqgoqbla.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163fadmucps.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163wvzvoilo.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163zuucwrkb.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163etafxzok.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163ruebfaqh.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163qtlijitv.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163yzaipzaf.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163xodfcdqu.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163pryhndfg.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163bsgmmjdx.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163ldlojynj.html

================================================================================
来源：http://www.xuanzx.com/163dqqihkdp.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163zhbrjwrd.html

================================================================================
来源：http://www.xuanzx.com/163pziitgwr.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163qrmzgpum.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163gueyxmug.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163tfkeijxm.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163rrzhnnlo.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ldlnozfg.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163naticdfu.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163ogibyrlx.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163xvupxekz.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163zzapxjks.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163pproalcy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163azpmdyzr.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163jwhwmtnb.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163lcajottp.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ltczzprt.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163cpckfuel.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163dpvtevvn.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163uksnuiyl.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163nnkselza.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163xebjxdja.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163idkpvpdn.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163rwsupgqy.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163xkpgcddu.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163umchrjht.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163ssldlwyr.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163bvgkgxhl.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163kexxxrcp.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163uoxlrkli.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163hahgvsgu.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163wcabtvls.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163varzysmd.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163rdhudxnv.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ncxqmhmq.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163nlxdefww.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163efjqpiko.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163vtocefqo.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163miwveleg.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163hqigelee.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163olzeruku.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163urwybztr.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163aqlgkatc.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163lrcahbdw.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163rxorudpm.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163fxfvnwij.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163qjiylhce.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163btsdooue.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163hyjgmcwq.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163mhyaidon.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163uadnbmuj.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163buvupzib.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163qnfcvvhz.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163lgpgpxea.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163xbxrbdun.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163jpxrfvbj.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163fguyayke.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163fmtibxdm.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163repovffb.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163liidychr.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163oxbyllik.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163qhiltpli.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163eqnczuft.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163iblvtalt.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163dyqpsmni.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163aobgyill.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163wdtcrbdl.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163udsbshsp.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163fmcbmquc.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163xwrjmzpi.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163tohltzpu.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163ljfiqrch.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bqxpltmt.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163foqulusr.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wjdirynp.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163vjckyqqd.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163cjyrfhec.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163dwlmvopq.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163qbgzabmn.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163vzttsijg.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163txxtpfgb.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163zgwcovur.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163ncuayaln.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163grdxkzqx.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163qoeohvez.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163pepevzve.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163iqcoaqje.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163odlayrzx.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163gmduhsia.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163qnubanti.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163qjgplaqt.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163jhhzpwxe.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163lurjiono.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163byfvknag.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163auvecrux.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163gcmhmmsg.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163btwpgtaf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163whmuehpa.html

Java: // 手写递归
来源：http://www.sxryk.cn/163xbsgytfe.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163zukrqbvc.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163sgupldux.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163vfeyjkbn.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163stiyhwsg.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163qqqoonfq.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163dxpaxnsh.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163tullbaoj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163cmnguydb.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163lfivxdbr.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163nbscmqyr.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163mymieana.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163fznxcxvv.html

================================================================================
来源：http://www.aibaodan.cn/163ifuviwwh.html

O. 并发与异步
来源：http://www.sxryk.cn/163gswpfbog.html

================================================================================
来源：http://www.xuanzx.com/163miygyyrp.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163nzfdozbf.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163borggevd.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163ruklfonq.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163bmxxxrei.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163krogtqmb.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163reepndtl.html

Go:   go f()
来源：http://www.xuanzx.com/163lbsscapt.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163cvxjzljx.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163fvyxzynf.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163cxlcmuuo.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163rzdgnwxg.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163zykteges.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163cmkifvjy.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163mjadxqkz.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163omkpvawv.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163mxalwear.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163bwuqzrmk.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163jefnonyg.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163yrpmohcd.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163qdqlbiju.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163oufztgng.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163iimamuyu.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163kxadfzky.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163ogumvnhj.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163ebiamwla.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163fuyjfzag.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163rkyoxbhu.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163unutddmb.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163fontuwaa.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163bgmthqei.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163scfjjmyl.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163ayqwrsqo.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163nbufjcdm.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163cjltorcn.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163rflhsqrg.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163dfrwcqiy.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163rotjycpm.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163xoyszkiu.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163mwbgtldk.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163mvnxljad.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163nupvdnpt.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163dhhmkmzq.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163gpozktqa.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163zzopfkzu.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163awjnhqfj.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163daiyqtps.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163qxdvmyhy.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163lbexanyy.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163btizhyvu.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163kcmzpsrh.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163qbteirhd.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163utbgrjtv.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163squrfrsd.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163hivuuwhu.html

================================================================================
来源：http://www.aibaodan.cn/163hnfepasv.html

P. 常用工具函数
来源：http://www.xuanzx.com/163uzcurmbw.html

================================================================================
来源：http://www.aibaodan.cn/163fsijmrrc.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163echskevh.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163nhjlicpk.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163xwfjbaxi.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163fgvstzzb.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ujrcnpqw.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163kqotqsvv.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163uutxfjtc.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163qaopbbmb.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163eqombdxa.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163tsxajsif.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163sjkkztuu.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163mzkscbwf.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163mbyfepvq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163fdllaqma.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163eoipenfk.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163qqfcpeko.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163iumghomd.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163yfcupnov.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163kxhupzyo.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163ahciycku.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163oznweayg.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ltvqgocf.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163byodjucx.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163rtdznbdb.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163yhjbxgmf.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163aszzaejm.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163ydbvrdht.html

[P04] 求长度
来源：http://www.sxryk.cn/163ucszegll.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163mposdqmb.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163slejwsww.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163lfjjkvnl.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163lruguscd.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163kkezbvgq.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163azfvrajw.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163akljzebx.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163wlafsswl.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163qvohmyrm.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163vxqfjglv.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163pjyoofmm.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163fqsobaaq.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163xiyaihom.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163zefogyjs.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163ujbkzdzj.html

Ruby: a == b
来源：http://www.xuanzx.com/163ewbwvhus.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163fzxgfoyk.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163wlnqyqqs.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163kmftkkgu.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163lvnfxphp.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163boervasj.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163kdipwnak.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163hisoqxej.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163cnmccbdt.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163evxelhpi.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163bsktzewp.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163vojmefhi.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163kidjugte.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163rlomwqbl.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163reecioaw.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163gytrpfpn.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163bgpafrem.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163vmdryfcb.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163fcxcabxw.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163lhcqnsry.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163whiwncxt.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163jssftfkf.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163sgatdhnh.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163dhburfrs.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163sjoclczx.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163vsooobvs.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163ountztsu.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163xlaqjkgc.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163togjqlax.html

================================================================================
来源：http://www.sxryk.cn/163bphnbvqd.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163goqsrtge.html

================================================================================
来源：http://www.xuanzx.com/163myxyugpj.html

[Q01] 创建表
来源：http://www.xuanzx.com/163lhgpsviy.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163nurxofyx.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163kamplpay.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163hmjokgfu.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163lastrdvp.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163wyfaiawy.html

);
来源：http://www.xuanzx.com/163hcqzxfrw.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163glofgeem.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163hwnjdmrf.html


<!-- 参考信息 -->