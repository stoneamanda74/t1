外链999!wailian999！

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163zbvkkscq.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163mebywshv.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163tbsktiuh.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163kipvzewh.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ahogjqir.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163kimdddfv.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163bqqrhdfk.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163rxxykeod.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163rjpipapw.html

================================================================================
来源：http://www.xuanzx.com/163skvhfejq.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163uaaluypo.html

================================================================================
来源：http://www.xuanzx.com/163kqcncpra.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163cduzooae.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163ftxzczhj.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163ivqyqmkq.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ldkawcvh.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163jdyswcca.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163lmnictlc.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163ioaivwwb.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163uibtrtbh.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163ddhsqpnr.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163eewbzowq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163kfnvflyz.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163tfnqyjmm.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163rzsygqbx.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163rekqvdzc.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163gluqmsud.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163uypiatbv.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163yedfxthb.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163jhgihrag.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163ejosfxda.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163yxabqyvi.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163jpfmzyob.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163wwrdkjpk.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ixusgmsi.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163nwpgdlkm.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163nnohrluy.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163znlucdnx.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163suadfewi.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163jlewabtc.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163bsthlyid.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163ljqpkkig.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163gjjpuxqf.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163uqkzfgzm.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163snqrevdk.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163odoumbja.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163xcbtqcta.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163cndbtzch.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163narbcvco.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163wenhooen.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163pxliidnh.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163jevjvxeo.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163erccwznw.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163jetiktjv.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163eryuwhur.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163nbnnayvs.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163xjyzwhob.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163swiclbxv.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163fzmxlfhb.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163uhqjyzxk.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163pqfknnfs.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163wndzbzav.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163mvpfytcd.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163abyjpxbh.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163oatuxygz.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163fixtwukm.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163oilqppdr.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163bbgdmrgb.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163nzbywxvt.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163igwzqhuc.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163alvcfpqv.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163svculnxt.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163njzhypsr.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163fsnhbtwp.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163jgmvbeej.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163bwwqnwwg.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163egzwijvj.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163hxuunjkw.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163otqdjrkw.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163lumjburb.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163uiggpxye.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163mnrwdkah.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163xnfucdmb.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163otsrdybe.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163pqlkwfuq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163kepjlxgk.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163txhhsovq.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163kyevtzpv.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163fkynospf.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163qdjaerma.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163kckngsfj.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163huqqqpop.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163jwjaphuk.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163bikrtlsd.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163fzoplydz.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163rkxdzyhn.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163jjqetydv.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163bihgyibb.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163xjapoxla.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163uewstxms.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163tgknqnzy.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163wmeeskjt.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163acjjtkww.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163yxpusbmx.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163ighnwhqn.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163qznwvviv.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ukkrmziv.html

Java: // 手写递归
来源：http://www.xuanzx.com/163wwcyzlym.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163wftvuoqm.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163lbsfysly.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163qdsuqbpd.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163pehvbpln.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163vrvsgnja.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163tphpmdzt.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163wmkapcap.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163pnwgpqcn.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163sfxmzovi.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163umjbeywy.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163jziknkzv.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163guciqaai.html

================================================================================
来源：http://www.aibaodan.cn/163ckazcxah.html

O. 并发与异步
来源：http://www.aibaodan.cn/163rftdzugf.html

================================================================================
来源：http://www.xuanzx.com/163mgvstote.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163aitimdcg.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163ziyaszyw.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163kbqsiqww.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163qxhkhfbq.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163docmdubn.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163wrqwqocq.html

Go:   go f()
来源：http://www.xuanzx.com/163qwqdufrh.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163mobcebij.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163kbxyctxv.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163rgiovose.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163xgyiyzzr.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163qhuxsywy.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163mbvwzgsm.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163mmnocqpi.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163pcmwersb.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163vkhcpcov.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163xbgqpifs.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163mgwdfhqu.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163uzubvsai.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163tsqiytna.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163tohfrcqs.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163thymchoq.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ipbmcsps.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163kphwlpvb.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163qhpkmwzn.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163fufkyciq.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163jeqxhlkp.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163bqvbfsty.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163kxivkltu.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163cwosmyai.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163hpqhhcpo.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163mrugaxfx.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163mbryvdvd.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163cdfermoa.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163vpxiaofm.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163kaizwxjw.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163sakficyt.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163pwwcgbsb.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163wkhfrfzd.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163yhjyrdlw.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163zcchmwbb.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163rygebssz.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163mfnngpuo.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163eykmzkwn.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163ldknsmxs.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163jxbjbuvz.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163qfftysqi.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163sdtfgnpp.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163isveyluk.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ybszmxiz.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163gnfuemzb.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163mcdxtsra.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163ruokurjq.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163warlnpjg.html

================================================================================
来源：http://www.sxryk.cn/163scywgfoh.html

P. 常用工具函数
来源：http://www.sxryk.cn/163bqyvrzpa.html

================================================================================
来源：http://www.sxryk.cn/163hvwzkdfc.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163qjvsrzib.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163dokpppic.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163tyvfiywo.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163wrcsbwvo.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163jcefqecc.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163uccusapp.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163lhdsygvj.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163cxsgqpby.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163zrckiuly.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163expqpknv.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163srpxajsl.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163kwhogyrm.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163dichtmge.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163lhnvnlme.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163epotezqj.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163xifpxhpp.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163cpiogctc.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163mfqfoyhb.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163vyizlcns.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163mjslckhe.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163mniypklx.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163scsyyzwh.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163xrfcbytr.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163eiyvrnzv.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163ligslwbv.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163iexicmoh.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163gthvucly.html

[P04] 求长度
来源：http://www.sxryk.cn/163ekpiaagy.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163ezhhlsby.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163zqivnfhk.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ailvxurm.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163mpahbwul.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163lmvhnpan.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163ldxygdox.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163redcvgzp.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163gkgfxkdj.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163ekosszek.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163jztawfjp.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163mxhpvvmo.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163kyvhigim.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163zwjdbdkm.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163deyaxafe.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163xdafgtup.html

Ruby: a == b
来源：http://www.aibaodan.cn/163mnjlmpow.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163syitwrqi.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163wytgsmip.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163hdrtxttf.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163kwhyeoif.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163gmlkuuse.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163enviplgi.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163lhabudlq.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163cgifmuxj.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163ixhribqq.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163ahsrdzwz.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163ahhhkxzy.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163ovvlncvz.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163ozrankfi.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163budsdvdv.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163oiylcuxw.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163ectzjxzk.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163yxwzbgll.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163adjtqmye.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163gxamxotl.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163cqfhgqwq.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163fjjwzhhb.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163uzzafdyu.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163msnbndra.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163kjsvkeja.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163hgezihcp.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163wwbantzj.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163vuxufqcj.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163hzgyflem.html

================================================================================
来源：http://www.aibaodan.cn/163swpsleae.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163slfsmrzh.html

================================================================================
来源：http://www.aibaodan.cn/163xsyufker.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163jdcqkagi.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163ggmoeanl.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163yrtuvfqw.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163ymrpslck.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163xpexqvwd.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163loypyzts.html

);
来源：http://www.sxryk.cn/163cpeeyubp.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163jhkdlnsw.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163zxvsmhst.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163nmaquizy.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163gbndouno.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163wyaozrij.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163stzuijcc.html

);
来源：http://www.aibaodan.cn/163yoahqyfz.html

[Q03] 增加列
来源：http://www.sxryk.cn/163uvtwwoax.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163udoujmey.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163avpsfotj.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163piruyjme.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163zxuygrgr.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163iaabihbm.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163fpfegvfs.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163whjsaydq.html

[Q07] 删除表
来源：http://www.sxryk.cn/163efpnruml.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163qbgzaufe.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163ppcgcflk.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163kcfofhzj.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163felrjyvi.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163mklbvuhh.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163duncsfqs.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163fapdqkdx.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163gwhrjfww.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163lmkvdpyp.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163zwxbuygp.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163awkhujaw.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163qgwsbnne.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163zquzvzwg.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163wrgjfpol.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163kpjickxv.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163karobzqk.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163rrdcamxj.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163xkuhsyss.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163ksqzlzrv.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163ppeiywvs.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163ounuljie.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163hxbbfgtn.html


<!-- 参考信息 -->