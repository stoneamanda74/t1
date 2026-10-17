外链999!wailian999！

TS:   process.cwd()
来源：http://www.xuanzx.com/163ssrecvei.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163jytfesyv.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163debdtfku.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163thagypdb.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163rcwtaxxv.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163smflpcui.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163edkjycqx.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163mtnnncyb.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163emjpeugx.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163hjiyjepw.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163kbsthjiy.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163toybcgyx.html

Ruby: exit 1
来源：http://www.sxryk.cn/163fkbugxwe.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163wliouowq.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163lqoobaic.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163yimdrbya.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163epquboho.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163sdhuezsf.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163eqcoqqhi.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163uedtfjra.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163oojvzshf.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163wsnuuxma.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163kynyevhz.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163ayqjhocq.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163tjfcwufj.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163cikimzsq.html

JS:   require.main === module
来源：http://www.xuanzx.com/163jqzcnckz.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163caoaviln.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163jrdgamdr.html

Go:   func main()
来源：http://www.sxryk.cn/163xizgfzdg.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163wvkahroe.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163eclatsrk.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163eozwgyum.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163yfchpovl.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163srjwekgr.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163rgccvzft.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ssojufxg.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163xcepalus.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163urjkwdjc.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163rgiowzgp.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163tktmawhq.html

================================================================================
来源：http://www.xuanzx.com/163iadzvlpf.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163djeqzczb.html

================================================================================
来源：http://www.xuanzx.com/163mwdqbbdy.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163mjfqhepy.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163vkyqizpy.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163zxufgclv.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163rdwwtyld.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163wugogkut.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163vwvafvqj.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163okvypkcf.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163pnwsdvhe.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163fdidnjix.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163rwbvxiir.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ewneunaa.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163yqjeesbp.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163drqtjdty.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163pikaikgy.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163scddwony.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163aawgleli.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163nxemntmb.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163parclklb.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163xzafiaga.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163jialagqu.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163sorentds.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163tvyrpmxi.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ucuoodfk.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163gzfacqbc.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163qxuyinhu.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163ayjcnobz.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163ajhqqkwh.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163lwosdoaq.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163zopvvamc.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163qqbggasd.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163nnjadexm.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ejwnwptl.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163jlshbuku.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163bbljcwse.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163oztbihsd.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163zkpzfteh.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163tgcqujah.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163bwuocigt.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163ndorhacz.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163uqyijjua.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163mvjzvunh.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163fhzhpaff.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163ioxbmpbs.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163cuzxuhpz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163urqfsdua.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163rsbgpaul.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163eovzxcla.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163otqsmtpi.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163aiwryeys.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163oodeqeto.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163iekbylbq.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163ttfchabm.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163zjhswjis.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163unmphhpk.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163vphanmfy.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163tronksrd.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163rscjqtga.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163udzheyfl.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163amagxtcu.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163lowbuilx.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163zthnyhzl.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163spcoqwac.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163vqgdhzpw.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163tahkhwmm.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163ogddenhu.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163cqmftcsl.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163jinfcutg.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163zgnxbimv.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163hkovfqsp.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163prmfhjoa.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163fpsbeejl.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xvhiagyn.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163norxwclx.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163nxrbugeg.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163pqparelg.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163errqbqlr.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163hyjphnes.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163yomidfgf.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163cikmeqng.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163izmmyhrn.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163xfhrpset.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163itvbvfkl.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163zkjuhths.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163zzirehiu.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163ftedmadg.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163toizjakl.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163rmqhsrwa.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163nbmllgep.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163fhyystou.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163urqucboe.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163lvspebtk.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163rfukwgwq.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163mpuqnvow.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163fumxotgq.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163cnzibcbz.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163kzoczmid.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163cxgexjru.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163igcxwplr.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163wfbuqszz.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163bakaofmp.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163bxthmvjf.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163vonmbryl.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ylsnypyn.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163skwcueqi.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163hrthunop.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163vzfltvbe.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163cpiunpip.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163tlyxjcgl.html

================================================================================
来源：http://www.aibaodan.cn/163iihhjpyr.html

O. 并发与异步
来源：http://www.aibaodan.cn/163uokxzzjz.html

================================================================================
来源：http://www.sxryk.cn/163kvqfpnzu.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163oujkapcw.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163dlzvlwee.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163usiylmlb.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163udjbnqoa.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163qxzveoil.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163txhglyfj.html

Go:   go f()
来源：http://www.sxryk.cn/163xlgpjhrp.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163syvzerwy.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163zcvcrvlz.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163jbkcfbnb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163zbhqzemp.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163uzewvgli.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163hbzehaoa.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163xketwviv.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163ajivnrzh.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163ubudwiep.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163kparkkhd.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163lqiyptyx.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163rkrkgmps.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163hsolydlu.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163lnqatqnm.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163odawyvrw.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ztnnyvqk.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163muzkhfwd.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163ezugjreq.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163foppoujd.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163vjeetptc.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163crjxjexr.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163iubohhtz.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163chehwpeo.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163lokbfdly.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163jnelwuaj.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163cwrneito.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163zfsiujze.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163cxymqckx.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163xnxpemvw.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163ibmgkkta.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163hvpezjhg.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163rzbthkhu.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ahwdjpsd.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163xdfjyfky.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163xtntjcgn.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163lkfnkomf.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163zltaeprg.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163lucfctgh.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163mcuutukp.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163beiwrykp.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163gqxsuhpz.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163iogoohsk.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163skiohbih.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163ecawuqnw.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163qpramcdn.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163qcdthbuk.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163ldlgqxbf.html

================================================================================
来源：http://www.xuanzx.com/163exvipowj.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163hklkszvv.html

================================================================================
来源：http://www.aibaodan.cn/163alcyqfuu.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163gnvugbqm.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163ytxxhfso.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163onhbnttk.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ffyhobnb.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163uhlfrfpk.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163ecrcucyc.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163xfoyiytj.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163wlpsbhrj.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163hfdcajof.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163cprctcqg.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163frnnlrod.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163pdwvgjcl.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163biuxpojm.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163eskpehej.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163qfsidlvd.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163szaugfxx.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163jvicnjrr.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163hwyefwai.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163thvymjsj.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163sphmjtru.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163feohggsa.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163lpttgkqm.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163uhyxbmhd.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163draklhrw.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163qultimkk.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163hprybodn.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163erlekxok.html

[P04] 求长度
来源：http://www.sxryk.cn/163rqmlgfiz.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163qwzjzwxh.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163gksmmifb.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163rkkarvqv.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163mivfolox.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163frrotynh.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163kdadrcji.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163rnomwjpa.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163hnqqtotx.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163okvauztd.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163ehygwvwt.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163iiyrixtl.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163dcjkwdrf.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163woxjyxwv.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163fqbhogkx.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163tzlgmzil.html

Ruby: a == b
来源：http://www.sxryk.cn/163udccwcaj.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163wquhcjyy.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163txoqetpb.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163ghoznfbg.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163livsdwec.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163zxtnbeug.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163rpvuboln.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163lxwohzfx.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163bdkbfghz.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163thnmyvou.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163gdmihuxv.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163fkbuxsyl.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163judewrtw.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163khqvrodv.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ifumafkt.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163qocmmqjx.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163swiaxmpo.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163wvlaytzs.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163cbcuycrz.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163zecnixek.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163votucrsd.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163eimxryco.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163thrgveom.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163mavrrckf.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163bjmqkimr.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163hllodycz.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163xryzzigq.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163qkwponit.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163neqilkmy.html

================================================================================
来源：http://www.aibaodan.cn/163xpqztizt.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163cpfxezuu.html

================================================================================
来源：http://www.xuanzx.com/163lfndwtdf.html

[Q01] 创建表
来源：http://www.xuanzx.com/163ywbrzmvc.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163wayvihkh.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163rpxdjozs.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163tjtqewqm.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163rlvtgkuk.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163inpgpzkx.html

);
来源：http://www.xuanzx.com/163sufoslze.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163yhrbzsae.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163uckqufya.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163zgzpppqt.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163tzfbhknt.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163bfsvsmvt.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163pmaksrbe.html


<!-- 参考信息 -->