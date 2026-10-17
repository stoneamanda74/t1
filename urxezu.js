外链999!wailian999！

JS:   process.exit(1)
来源：http://www.xuanzx.com/163ihnptznp.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163hfjolkxi.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163tbdgglpg.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163swysyoel.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163nhadypam.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163qfjabgfq.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163imnoqvfg.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163lcaodkkr.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163cstguguv.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163zbkluwfw.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163gnvaymur.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163uffwclxj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ywyamkst.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163lvuizfja.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163ewvvqybs.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163xbwowgyr.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163vadmqlnw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163ukzacvmq.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163iilevgeg.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163ejkdzsiz.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163gjeichnv.html

Go:   func main()
来源：http://www.aibaodan.cn/163kgxdqmqk.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163aovrdxog.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163kotjmeio.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163ofmylqsu.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163zmegcsre.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163jfswanvx.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163fnaugeiw.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163xsumpgqg.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163naxzeknw.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163dluyvkgk.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163jgociaak.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163gtvecswr.html

================================================================================
来源：http://www.sxryk.cn/163vrrwyani.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163pfphsila.html

================================================================================
来源：http://www.xuanzx.com/163gdgwqfze.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163snuinsos.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163jnpvbgfq.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163txytpebo.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163hwixisip.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163avjbiacq.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163kplcgfel.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163iwsvgmtc.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163vaqpzzpy.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163hlqzlpbk.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163fwlifion.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163fktnbwmb.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163lghidplt.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163euwsggpi.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163yxckolyj.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163gypqqbqb.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163iahdzmlh.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163chkfcjmh.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163ryuhuiyc.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163ywvobbsa.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163yhvbvlrd.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163fofcqwds.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163wiazgdkt.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163eaabenou.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163orysbyin.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163cjdotvco.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163bdfupbge.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163qdaacjdi.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163apqyqalf.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163cthhlcmv.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163ujgypenj.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163learlibn.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163kfdnwifz.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163cancijji.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163mtjkqgxq.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163wyvjhdmb.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163lzfulrbj.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163jrmungdc.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163upkwbudi.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163pcgrcnwi.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163nwzbnneh.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163hoetpmbk.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163kgwufohv.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163sryzvnfm.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163ikbzgeqc.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163ljyvxili.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163awxgztic.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163lnwyomcv.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163moxestov.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xnxheote.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163xkmxcfla.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163liaqtcxf.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163negufhyb.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163lnzcasom.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ezapxifs.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163wpyteptf.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163zabnwkrb.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163jcakilwz.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163lkszkioh.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163tywnsism.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163synrgand.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163cjzoadhy.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163vtyjslpm.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163ruwfrszj.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163klnuoeva.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163qelqdnbh.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163piqunqrm.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163oxhjwmoj.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163xkzqhtne.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163tnkxydkh.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163gcwqkded.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163gylronxr.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163oegmxkgd.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163xdxgbvgw.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163oktzijyn.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163ubafijsq.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163gxtrqsyb.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163tmzcdlxz.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163dqsnzrdf.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163uceigcpo.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163zsvdrwkl.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163iktvmuls.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163xktxgxti.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163ecfscmmk.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163qweobtfv.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163empdgsbm.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163hpjswdbw.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163encnqmee.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163orbdykyk.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163gammdedn.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163rgtcrgrb.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163tudhfigy.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163vebcysix.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163tbtcewpe.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163gjousucs.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ipkuijph.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163xuitqluf.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163hzwmgime.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163tapzbnkm.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163dffsqsbk.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163fohqubrp.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163xggvjrsu.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163qgjgqnld.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ewxgnwyn.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163yevuyati.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163yxuwxgdm.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163zirdsbma.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163lmqwmhlx.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163utycyebj.html

================================================================================
来源：http://www.aibaodan.cn/163pxytears.html

O. 并发与异步
来源：http://www.aibaodan.cn/163brxortij.html

================================================================================
来源：http://www.sxryk.cn/163grwqmikb.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163mpvnsofn.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163qtwuifuo.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163ddlbcpek.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163hqahoxes.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163qkverxqt.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163veqkrqzj.html

Go:   go f()
来源：http://www.aibaodan.cn/163ldcyihuc.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163cnjyfkcn.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163oncbueys.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163iztkfwdm.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163yvezehek.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163bgycjfzn.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163uegwnive.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163rnijhplj.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163ycetktco.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163louglkev.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163ybwxztwm.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163zpgswgbj.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163snletacy.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163sdnyzjbd.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163qstxwklb.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163gearsxmv.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ucskbtni.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163colhxkae.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163kyxqyptl.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163toyvsyzm.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163mfantexx.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163kherrrmb.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163ibujewsf.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163guvjpdgf.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163lsqftyfm.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163atpcjaec.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163rurdvson.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163fbogvjuu.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163aqiuatks.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163npxirtpv.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163ctztplnq.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163buaxheqz.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163slcdobgl.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163zjprnhar.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ipnawwcq.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163qiqetfwk.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163ovgdtjsi.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163lhienbgz.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163wbiwcmxy.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163cfsxdkye.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163iiokjwqs.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163jxctfxiu.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163yneepatf.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163vaidqsby.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163uwiomitg.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163thrvasnq.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163zcfefmhg.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163pdxpgsqe.html

================================================================================
来源：http://www.sxryk.cn/163sxctuaab.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163rsdegnhw.html

================================================================================
来源：http://www.xuanzx.com/163svkwrvtn.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163mylfrcis.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163gewmfbsq.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163utsdytgw.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163azzjkoks.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163oizkbrjc.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163iqaycgbp.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163rmvensbp.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163ctwobrmc.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163mvljdqlo.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163vbuadpwk.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163ojgpwpuy.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163qnvdjesj.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163hwwbhhys.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163webhuwqx.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163hryvhmyh.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163jrgpwkbd.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163lobnqocf.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163alrmekdd.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163uaqcrywo.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163qxeltewq.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163jdisvmbv.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163qnnrjulq.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163hkngkkfu.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163ldmckmqi.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163fdjfurqh.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163ebleuuzf.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163ljzceylj.html

[P04] 求长度
来源：http://www.xuanzx.com/163yowpwubb.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163tqonbdfy.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163lcbdxirz.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ayopcgyg.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163rstztxpw.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163eswcyzkz.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163libmuyku.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163bvkhapoy.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163qhzdwfvu.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163szofmseo.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163mwluvjjx.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163vpdeleco.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163pspstpfs.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163gjdjnovy.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163mdlgafsh.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163zfdzcdsz.html

Ruby: a == b
来源：http://www.xuanzx.com/163slmptxoy.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163xhalqcue.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163vxbrottb.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163azefancj.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163ildkuvpk.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163xajlwstd.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163hroxlysv.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163npbptblv.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163vpnsjtil.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163dmlfzjac.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163zqkywoiy.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163xeaiitsk.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163rkjoldcd.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163yppoqjlu.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163dqrvlgib.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ybblqsno.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163bknqjzzu.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163ljutwilj.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163krtimyvu.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163jiwvbvst.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163etgukfdh.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163jeqpllfn.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163ymtjttqp.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163fowkdlvb.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163mxktwyxc.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163hnsealws.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163hexpebeh.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163dmiqumzj.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163jjkvvsff.html

================================================================================
来源：http://www.xuanzx.com/163qvktwcje.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163ocyopaur.html

================================================================================
来源：http://www.sxryk.cn/163wudzegbd.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163zdmgfjhi.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163wlbfztpb.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163mnavobep.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163pvxkxpez.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163itnuffls.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163bxcikdlg.html

);
来源：http://www.xuanzx.com/163bvbokyoy.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163gqajlejc.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163hxraqhhx.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ewtpzwzf.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163esrciruu.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163douwqmkx.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163mnifuuvs.html

);
来源：http://www.sxryk.cn/163qhovsfbl.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163uxaygvvj.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163dszjhklg.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163jzhqqqgy.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163jduysspt.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163wbryyxge.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163enkkaktk.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163pcecxppf.html


<!-- 参考信息 -->