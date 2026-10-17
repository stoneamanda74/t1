外链999!wailian999！

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163xyxyoytf.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163lzidpfob.html

JS:   require.main === module
来源：http://www.xuanzx.com/163llagftvq.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163ajkivezj.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163szrtvjzg.html

Go:   func main()
来源：http://www.xuanzx.com/163usainbwn.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163bdxdipex.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163teoxhxtd.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163gnwcosgb.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163bdwmcanr.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163xugkhcyd.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163czmtkncf.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163pjldjnou.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163gmygqfaj.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163brajejob.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163mulbqwlk.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163dkllxogy.html

================================================================================
来源：http://www.sxryk.cn/163jvhspcmj.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163hsvzwxbm.html

================================================================================
来源：http://www.sxryk.cn/163ptdpmgro.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163sqqxceht.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163vxhzxowp.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163abqmqfti.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163akbuqtuy.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163jtainzeg.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163isqgnmhg.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163jxmjbowm.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163vylvqemf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163grxihhmv.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163jodpuykw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ctjpbpgd.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163hrtrcdiq.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163qsriqerb.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ebavadty.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163kanrnyvc.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163tcmooysy.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163xjxyuczk.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163bcrdohkh.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163tjzeldxk.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163vcatnvsi.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163kjwaadxu.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163nxccgwko.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163dcrrwqim.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163udtulboc.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163mmxgqrqa.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163nyfloanl.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163ojhnclel.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163mybuauhd.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163wyhvurvq.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163iqeuxytu.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163gqltmhca.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163kmlozjfe.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163cvqjwsov.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163ufkiubyi.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163gacfcpqs.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163ovzeavvi.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163hwdhhbxw.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163samjverb.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163ndqhpqra.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163kmhndwpq.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163bbagnano.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163cjxcopva.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163xcwhevvl.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163juhgmizx.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163edrjgqye.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163acrbytoo.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163ykzghfnu.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163wsqdmato.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163tnlinmwn.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163njoeigsu.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163lqgvepew.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163ffnbdjxv.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163spvjpyau.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163rohlqagv.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163higfumbh.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163uwxfavrt.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163pjbwsefy.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163oihtxbkz.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163gxpwgimo.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163iueohmty.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163bllkdnhd.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163kyqpgdvc.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163xnudcvfn.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163ygtyznhb.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163nzfpxquv.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163gssiczkb.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163gihbxuda.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163fsobhjan.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163ypvmituf.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163dkoqhjix.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163kqyqoxnc.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163uesoodoj.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163bwgeaivb.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163cknkganf.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163lrtqxafy.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163lkpgxsmw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163npjefltx.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163pvjtiftf.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163vleobsgy.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163aikxpgbh.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163oogkmulh.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163vleyytbv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163qtccyznq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163tzshvpof.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163rqymrxsu.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163zimzzekp.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163jyaqebsm.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163btyvaihr.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163gydeobco.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163uuqhkwgu.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163khzrdicq.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163ttwlucnl.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163wutapfpr.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163iysanfuy.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163kxjtdntq.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163skohjeyv.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163pamvtrat.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163xhaqqpju.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163pddswfvp.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163mxozaohc.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163xegyketo.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163pjfhwulz.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163wyleicfm.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163irhszjil.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163yiexbjia.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163xzfoxuyh.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163pbduehkt.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163lvzhmhfs.html

================================================================================
来源：http://www.aibaodan.cn/163wcgcxxpp.html

O. 并发与异步
来源：http://www.sxryk.cn/163jawfvthx.html

================================================================================
来源：http://www.xuanzx.com/163wsupaeui.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163clhksawa.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163rxutvwzg.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163ibovkqco.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163cfaftoke.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163rmhivzft.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163ucgfdcaf.html

Go:   go f()
来源：http://www.aibaodan.cn/163kvqhhkvh.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163tpjavlaf.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163zxvkhihg.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163mmelfepe.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163omugbazh.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163akvzanwv.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163blgpvwzr.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163usqzvtuo.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163kamjdhsp.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163vemnhozh.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163uxxxzppd.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163wlpmugcv.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163dnpexpwl.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163fnwwvuhe.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163czppnydx.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163zdjnwrvr.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163actsxsev.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163mnzzjcav.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163kcqldsjg.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163dslueggl.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163xxqvlnyy.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163venslkbt.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163bxnqnlka.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163qwpohbig.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163xyyzwqhe.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163jcwnoicw.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163hpcyvems.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163japeklci.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163afbnpixv.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163ninevdeb.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ctgnjiwd.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163kbkdtful.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163ydufuznr.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163kzwibxhl.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163nadbnlct.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163ftvbaivw.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163vwquwcaa.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163xbpkcbzq.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163uksuniqm.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163qcecwyyq.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163xtbizrse.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163holijees.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163umzsqhsd.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163lnknmasc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163uphdosey.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163msxtkwzq.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163sbigfohp.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163prxwvrmb.html

================================================================================
来源：http://www.aibaodan.cn/163juqnzeai.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163psguazpx.html

================================================================================
来源：http://www.xuanzx.com/163vsyamqhe.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163ejghmjrn.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163uhssdtos.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163ycnzzpdx.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ptjkyvgd.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ksruenad.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163qgbbbvhi.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163vmvbutei.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163zbwicppr.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163hbniljck.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163uvljsjly.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163vtkflzgk.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163ztgahvgt.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163kqcnjpqp.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163dxdkayvt.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163wbwztvng.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163gbffhkqf.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163ejtkjyvd.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163pcmgelsy.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163rhqjeaul.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163libbnase.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163dueakqay.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163eoxkoqjr.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163cnszqdrs.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163kprnbeec.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163bfzqcwws.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163wngimurg.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163nxrfvaru.html

[P04] 求长度
来源：http://www.xuanzx.com/163esswylad.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163rbdsuifq.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163auqbuvgu.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163cfbdejjd.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163akwwnvpl.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163uxxeoueh.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163nnmriyxc.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163mcjsagdu.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163ofpxmdvf.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163jckzfpri.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163ffnosvzw.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163nimdofko.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163ivuifqfc.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163qhdexsfr.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163fcxpggwr.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163kxttzygq.html

Ruby: a == b
来源：http://www.xuanzx.com/163mvdnzbna.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163jcrxfote.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163fbfhelgh.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163fpkorzhx.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163viqtrczh.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163kpenxjuh.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163axtyuvtz.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163pdqihotw.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163bpvjnpzm.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163qtddqhjd.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163tasslvdl.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163aomvbwfw.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163ktkmjpgy.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163dbgktowt.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ljudgltg.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163bnzbhvtm.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163qwmkbymm.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163knnqhzdj.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163zhroveum.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163nniqxktf.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163lwasvwap.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163xjfiziyk.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163vqzzgnin.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163uiqctfdq.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163slgwyvjf.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163eodkocvm.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163dzwtttef.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163aieksodx.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163utuyawje.html

================================================================================
来源：http://www.xuanzx.com/163zrhfundr.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163gdtytlyw.html

================================================================================
来源：http://www.aibaodan.cn/163opsahqrk.html

[Q01] 创建表
来源：http://www.xuanzx.com/163yjmwcywj.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163zxfkectr.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163mwrvpozv.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163yknkjmqs.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163qvctlecx.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163yugszsjy.html

);
来源：http://www.xuanzx.com/163nohtagwd.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163ylcmgtua.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163uayovnff.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163uyhnqnpr.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163ospfkibu.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163cqrjwezo.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163wtichhzb.html

);
来源：http://www.aibaodan.cn/163jewxasfp.html

[Q03] 增加列
来源：http://www.xuanzx.com/163ucnxhbtu.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163pehjxdmm.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163cosshasg.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163hviebwui.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163kcmfixkm.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163undxxbzu.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163xpdmojao.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163ciefnvca.html

[Q07] 删除表
来源：http://www.xuanzx.com/163fytchrib.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163xailploj.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163vzfeoiqx.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163flbpxulg.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163pcmjznsh.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163kybhmxka.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163uvltvpmg.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163fmjdhycg.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163cwoedkmz.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163ceudxsbl.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163nzwfmpqs.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163bltoncdu.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163fdovjzpc.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163njlxhnvd.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163jhwisbum.html


<!-- 参考信息 -->