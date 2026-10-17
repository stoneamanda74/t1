外链999!wailian999！

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163rvpxljpc.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163uwzrdftp.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163gtleyflf.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163jtybghjg.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163vodqgxwt.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163jloygvun.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163zdnzzeny.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163wbygfwqn.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163nqbcdvks.html

================================================================================
来源：http://www.aibaodan.cn/163hvnsdqiu.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163tvppoqnx.html

================================================================================
来源：http://www.aibaodan.cn/163hvgmaced.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163rndczcey.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163kknflndw.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163sgquytjs.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163yqevxrda.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ezpjqyfs.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163urjfnjsj.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163shgnustb.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163btibkrwk.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163lucgpfdn.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163xovfdrpt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163mrijpqhv.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163zrcpbfal.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163rxsljwii.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163cszobtcb.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163acounghw.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163fiyuqhis.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163jrvqazfx.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163rotxmgnx.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163lvohlgnb.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163uuemeylq.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163mcqtvkii.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163yqgsufcs.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163lbyiungo.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163kvflclty.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163xkukckmw.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163idbtfsgb.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163whmaawee.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163ustkueoe.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163tzhjhabl.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163eskarmms.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163qtmzrpcr.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163fcxzswjb.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163jdkouosd.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163uwwnhhrl.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163zpumntfz.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163kccibchc.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163kvwvrbwr.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163dczngjxg.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163xgamorcr.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163lobtjoir.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163tnleqovz.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163qmkfqwrb.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163xpebxtlw.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163ilcqnyyh.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163xfpidfwz.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163yquaheyw.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163erdyatzo.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163prjvwdun.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163nkegcxfj.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163wsoecarj.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163ufddyfwr.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163sfkqkmro.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163ivvkvlve.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163firvpxaf.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163ubxrnaus.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163yucwwyiw.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163zzfdywvx.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163mipnfomt.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163vuwzxjcu.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163sipijvce.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163fckcrbtz.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163igqrigna.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163kcvowdhb.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163svesrpyb.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163unchgmkw.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163qoqlmkcb.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jejyuras.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163shwexfmu.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163flgrhzcn.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163vaoycqfi.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163tpskerni.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163jhmqmbkt.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163xzzvbhzg.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163zxxrgqkv.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163kltdcmpa.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163zexyyyvb.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163amuryolw.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163ovbzubib.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163pklrcjbg.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163tlgkparp.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163ltaqynts.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163uozltjmb.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163htdgvvia.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163nujavbhb.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163kaftlqjs.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163pawtwqoo.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163txdgfwfy.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163gyqpbofi.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163mrstbsxh.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163hrabzutj.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163afmgezwu.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163gfftfcch.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163zviorbjr.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163gpwyvcns.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163pbtjjvyn.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163qsmwtiuo.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163pzzunuwy.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163rsuoamri.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163puwkfgjo.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163pycukgdr.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163yzsqvivc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163thnhvarq.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163isgrwjpb.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163mkzdkcao.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163mhretdhd.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163vkvkrfnu.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163fyhnnxpn.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163rmbckfcp.html

================================================================================
来源：http://www.xuanzx.com/163uyczgdpq.html

O. 并发与异步
来源：http://www.aibaodan.cn/163qhbrgbzc.html

================================================================================
来源：http://www.sxryk.cn/163egukylwr.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163vruouqxi.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163xnclnkui.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163rigvzdtt.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163vqvbvdxk.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163woiqgnrk.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163celrtucc.html

Go:   go f()
来源：http://www.xuanzx.com/163ckwjxakj.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163ftvyyezb.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163jgvcmdrp.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163qhmozkwc.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163wevmlvyz.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163sevquhqu.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163jerztaen.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163segxcvdy.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163xrweqtth.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163flmzizsw.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163crtdztyh.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163robcwsjv.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163apybjjoe.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163akoimxkb.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163omgpdaef.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163wssjgwtr.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163vfhjagpl.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163fjmwbklw.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163pnwwtcna.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163rxzrdeiw.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163gtghbrcp.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163qdxskgve.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163fzqdvpky.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163xtlzzkcs.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163clgbfvrp.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163conoybxp.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163hvgnytcr.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163fynkkqht.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163lvilvugj.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163yusdzuyk.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163dwaoufbm.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163xfyjnxlb.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163tsjziqrw.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163kikpbdjv.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163usjrwerq.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163hzspnvxi.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163gocfdxxn.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163zdtjbcpl.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163xcgqeupg.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163ctjcquoy.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163kfqmxmqi.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163wsraddyz.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ihzudzfh.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163tjephycf.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163jztqddwi.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163fjdazdpo.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163vdanrjcx.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163qbmfueyp.html

================================================================================
来源：http://www.aibaodan.cn/163ovmmpune.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163zpmvqyam.html

================================================================================
来源：http://www.sxryk.cn/163uuxtcbid.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163ldpwgiww.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163pkrwmiig.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163bdrskbff.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163lhweloqo.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163bvynfwpx.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163vwxfrdki.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163wzplurmi.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163eikvftua.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163ufkufjpr.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163rmehkrot.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163awazodyk.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163ptsrudhk.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163zmrsaizk.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163qfccnxwo.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163gkosevhj.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163jgjeyemw.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163bkmyycog.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163wvcvbwnm.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163asryuyae.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163vlmzzfpt.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163jxhgqcko.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163nrlyzzzs.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163jgvgcpou.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163iplgcgzg.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163rdkgtaot.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163awamqmnt.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163dlcdlwbc.html

[P04] 求长度
来源：http://www.xuanzx.com/163rjnkyvpi.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163ornalsqw.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163zdhglzae.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163xrcfomgb.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163frhhxbjg.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163wfigmqvw.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163pcnqqvaf.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163wiawfvfl.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163ojwrhsya.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163ogxrfluw.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163svylzbrz.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163jiirmnbe.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163isusgdeb.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163yxxszljl.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163puiiumij.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163xvbgkgdh.html

Ruby: a == b
来源：http://www.xuanzx.com/163osvvwyve.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163kvhnnctb.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163yiyohfix.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163mzeohxvt.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163ftrksuch.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163ggjsbnbv.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163srgwyngf.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163qpsaaday.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163dzfsfvgc.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163pjtbthse.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163arfpcvat.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163aabbjnnh.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163ultowbmt.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163xjbnjggu.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163gvvoaoyf.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163nvbuwzjv.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163vuswtriy.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163mivvtetv.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163xlkvhtnb.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163bpctwsjb.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163lehvkaei.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163edpecmry.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163epiqhzkk.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163yifbihlj.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163usakamnt.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163oxhtafxt.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163xsivzuzh.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163bgxxzrzp.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163emdswfks.html

================================================================================
来源：http://www.aibaodan.cn/163hvrurzuz.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163duhorsnv.html

================================================================================
来源：http://www.sxryk.cn/163xaisgpzb.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163tvjkwvtd.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163vbonlzal.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163grqeytlg.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163pokapclx.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163iaagyeuy.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163rptumapq.html

);
来源：http://www.sxryk.cn/163jsabqfbp.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163pfdbdahw.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163ztqkoxur.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163pavcmsja.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163ycczexxn.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163larjhlha.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163mhtsuxsx.html

);
来源：http://www.sxryk.cn/163tfwhdonp.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163pydwcwxx.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163fpjexglm.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163fwsjivpb.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163kwdmncpl.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163aezqfgag.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163lxduyheo.html

[Q06] 删除列
来源：http://www.sxryk.cn/163jbzdrchm.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ahbwbcof.html

[Q07] 删除表
来源：http://www.sxryk.cn/163ldfxwwqm.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163xcqdrlhl.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163yuuampmn.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163nsxvhtwf.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163dyfbckhu.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163oxwbqtai.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163bggnshmm.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163gticqyew.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163magpskdh.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163egnitcbz.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163vyzhtutg.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163yauqbtnz.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163hxrgppaq.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163oqkszmvf.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163luctmqkd.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163zkdaqzcq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163bouhtuiz.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163gtmiurro.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163gnsazqev.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163gruwtukk.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163tusgkmjm.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163sndpluft.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163odxlnsio.html


<!-- 参考信息 -->