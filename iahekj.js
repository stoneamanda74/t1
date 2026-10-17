外链999!wailian999！

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163fknspsyo.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163vhcksuen.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163zgjayvgh.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163ukelsqxo.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163sxypdjin.html

================================================================================
来源：http://www.aibaodan.cn/163mlyjdfzm.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163unfhxnrh.html

================================================================================
来源：http://www.aibaodan.cn/163vigrlujn.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163zdxgdyoh.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163icvbkumt.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163khkshuna.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ynihkapy.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163dnggtqme.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163ukljgmug.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163uxdxbeyz.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163ivytlpqs.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163lvacquom.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163jsxleffl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163plyosxdc.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163nedixack.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163etucafeg.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163sdfzbsio.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163slslplmc.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163kbtsoqjc.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163mzqzgtkq.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163sjalvaqk.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163fnkkozoz.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163oepggclp.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163buyzeuhq.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163sxigfoso.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ruptzkcw.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163eaiiwfyn.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163buygtacf.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163xwtdesiu.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163dyuyoglo.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163ifiovhku.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163vzmckmdd.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163agadvtbj.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163oczddali.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163xruagihg.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163gipvscdg.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163oqaftnwf.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163okdcaeon.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163sgikscdn.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163txyuwryz.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163qyoldfwb.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163wdmcsihh.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163mzrmjwfl.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163zchepnjr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163lfxegfxu.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163uidghkex.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163gotgbggf.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163tnooxmce.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163jwtjyrge.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163efsnxsvl.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163zluyrpmz.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163luuxqahe.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163zcbykmqt.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163uandertb.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163vqedljtq.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163xshgcczj.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163vbzwozfb.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163rikmuhnl.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163zbjilnha.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163mjtiedyq.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163ulrdwrco.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163jsifauvz.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163nsetdsmv.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163jdgwvnxl.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163wnhrlohj.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163yipjkclb.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163luvzakgd.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163hjcqllhv.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163vdbhcatr.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163lubjitrv.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163dmeymjtm.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163zeamjcxc.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163vrmqewba.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163pkgjjfap.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163vftavlhr.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163ksnntced.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163rkivyqsi.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163xhivwzxs.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163yggxgtzz.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163lhrhnotv.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163ymuooznx.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163einsrguo.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163zmhdaufy.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163aaydurnv.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163wkdnbkpz.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163bwbikmxv.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163mepssgmd.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163skqedhnr.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163gctucibq.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163irprwxcd.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163wezmohdy.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163nvclhhak.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163ahoalbrb.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163japdszia.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163jnioaiuy.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163jmskalid.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ktthzuog.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163aegnxgvx.html

Java: // 手写递归
来源：http://www.xuanzx.com/163ekbsnlbm.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163gqwyavgm.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163jldgvsov.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163zldtublu.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163hgnjoqgl.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163mgwliiqn.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163ygbmqazn.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163neuseccs.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163qyiwctwx.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163nrekhhpe.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163wwldipvr.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163tdgcrxar.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163doesduov.html

================================================================================
来源：http://www.sxryk.cn/163slodvphh.html

O. 并发与异步
来源：http://www.aibaodan.cn/163qdipzmxj.html

================================================================================
来源：http://www.xuanzx.com/163jzbduyxy.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163cxcymhxn.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163ywpgghdy.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163ghaqnwit.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163eusynsod.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163rdzdowfl.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163kjdjdaty.html

Go:   go f()
来源：http://www.xuanzx.com/163ttgwlzbj.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163noiihikj.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163vnbkjlrn.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163aolqfdlq.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163rzrvbxfo.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163eqgjynaf.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163frqwbdvf.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163nnjrxinb.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163bpyxfvlx.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163sfmsygrj.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163ktssdvsl.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163yleylcmq.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163mqxloims.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163gxjrqler.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163fbhmeneg.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163dqykonpt.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163mtyjrgpd.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163tudhgvnp.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163robekqvh.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163eubdnywk.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163aekpbmdr.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163hroungwr.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163xxjtlfme.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163aqxmsqeq.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163pcrpzost.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163kqvgetbv.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163xbglrjvq.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163gblwbdsj.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163xjkqmrzo.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163dynyekgd.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163ngjatuad.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163ugqmljuq.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163beqzjjmz.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163djkjopgj.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ojbmwywk.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163acmgcikg.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163sclbyika.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163hoknzoqj.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163xaeafngg.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163tzonevff.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163fbpoikyo.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163hdoeghzc.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163zitsprdc.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163qjvrpuvn.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163hwnwjyqi.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163icsktydp.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163tbxjansr.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163kdyepggb.html

================================================================================
来源：http://www.xuanzx.com/163agtkebam.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163vhoqwqhk.html

================================================================================
来源：http://www.xuanzx.com/163xdnayjsr.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163svdtzgwk.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163uqjbctcx.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163hvudryul.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163byhqgxdi.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163juybvrhr.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163hvsmnuzk.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163gkvpcbdg.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163agulqjsv.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163qarkzeig.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163yjyhqxjt.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163fzdkguko.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163repxtxak.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163eficqbmk.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163yzqyovcm.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163clnpmuvo.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163rekkpwoa.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163qduyqqrc.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163abwmcpsy.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163meuprhbp.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163xceaocth.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163wfhjasch.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163tphdvadf.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ayyvkodg.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163kimecspk.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163elmakfwz.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163ewmzcnkt.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163zimerkhp.html

[P04] 求长度
来源：http://www.xuanzx.com/163witoufig.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ddloexvc.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ofgxtgjo.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163xgzkbdsr.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163lnzgzdmr.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163nujrxgew.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163cbobmzlm.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163ludlktxy.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163ijhnldcs.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163wodmxugi.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163ueebgqcj.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163pnudgtqz.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163yclxuwif.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163rtqddyvf.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163vdrgquch.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163mczplorh.html

Ruby: a == b
来源：http://www.xuanzx.com/163mvzshgeb.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163zthrbbyq.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163dfcnmfjr.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163jvxkajbl.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163uymipjwi.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163mduwpcop.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163vszipqdi.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163ysppjnuv.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163hxcjerwo.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163rcnjaete.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163bvmaofpc.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163nfuvdcds.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163bnefhdcc.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163tyoybpgr.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163xwkfbbms.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163laatzrqo.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163iwnlvxcp.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163zeqknkwx.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163pmehvqrl.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163njlbegjh.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163czetkbcs.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163nmnzuolz.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163oocbmvqf.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163yiubiuln.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163jwgodldj.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163hhdchlgo.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163xkpoxgnx.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163plylurqc.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163avrenxhc.html

================================================================================
来源：http://www.aibaodan.cn/163tixdwwus.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163fzbmeoox.html

================================================================================
来源：http://www.aibaodan.cn/163wkkwjhls.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163pmumhjiy.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163wixbuzxj.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163jvkjfsor.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163feqbsrtj.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163erhnccqt.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163shqjdjry.html

);
来源：http://www.aibaodan.cn/163wgmzclkh.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163yrvhkxjr.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163uykfccpz.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163lxyytauj.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163mlsxlyiu.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163mrfumtta.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163eakyxubf.html

);
来源：http://www.aibaodan.cn/163aqngdvqy.html

[Q03] 增加列
来源：http://www.xuanzx.com/163aqxxdbuq.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163ovnapccf.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163owwkdxxm.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163vldunjzy.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163qpvqvevf.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163evkeqhgs.html

[Q06] 删除列
来源：http://www.sxryk.cn/163toelyezp.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163mveilhar.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163hmfrzwmc.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163bthewnxf.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163ualupfgd.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163dstjrzma.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163vioyuwks.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163zkqfvvoz.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163gyynaqwt.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163rofaunaa.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163bqkkwhbe.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163qwnwyide.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163ocybzzeg.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163ycwvalfh.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163xhjtrrwl.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163knzuzoty.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163zhwscjeu.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163xojrszow.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163qgejynbq.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163mtiaqywn.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163heygvtlv.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163immjeahj.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163klpklmkl.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163qydjwiou.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163yaxvxzgb.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163btdvgque.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163sishwavv.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163zefcpaoe.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163nceepmrg.html


<!-- 参考信息 -->