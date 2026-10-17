外链999!wailian999！

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163mduqwtmt.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163hiekodii.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163hnckyukq.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163wxtmgyjh.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163iriwbiig.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163vxbpbhhz.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163yuhallhl.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163boebbvuh.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163tocffexy.html

================================================================================
来源：http://www.sxryk.cn/163bhmnbheb.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163bwocdcge.html

================================================================================
来源：http://www.aibaodan.cn/163pdxxgulo.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163btdfwrlf.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163vzwhnbxg.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ozqrqfki.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ikfsopyz.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163xrwmfowq.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163qsxladop.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163hvmvzsaj.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163outumgjr.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163zvibcbub.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163sfsatgdb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163vrwaaqit.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163zklewgna.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ricovugk.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163oauohxsh.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163bsbffyzu.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163pkpeyxsy.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ocrctsat.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163gjxfsfho.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163hnikkzxn.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163zvwlhsat.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163yumpygxr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163xsbmynld.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163echatfnl.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163crmtirae.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163mnumrhvx.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163uoukghmz.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163ohtqxaxc.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163xhswxlzg.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163unhwxugb.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163ooakfxfj.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163coiwijtr.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163xrbgxzbd.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163jdsonuie.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163telzuosn.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163nrvnremd.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163bisesugi.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163cpnbpybb.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163xumnaeju.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163rqthbypp.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163oxruaiwy.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163rqlmrlvu.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163htpdgrez.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163lggfxnll.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163dywaewhi.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163zrhhipzo.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163itjuwexw.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163rnopgxxi.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163kjeykcub.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163adkrpkxj.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ymalazif.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163bdgjisud.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163eamfiydk.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163amausjmx.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163qgnmfljj.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163sdbjunfr.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163wvrjxtyn.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163bzwoxopx.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163prscsinr.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163tnrmtivz.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163alyvlbiv.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163khkterjo.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163zhkczkpz.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163wewoytmv.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163aisuxkce.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163rvshwaxw.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163aoycpies.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163hihuvobe.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ftrjdush.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163wolgjdna.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163mbnucwdq.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163bhvuvzge.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163kzjdhgll.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163emkrrrer.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163dsvigfzz.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ezbzixoj.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163gvyeywcs.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163lnqyoamd.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163birakunx.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163kawhmzel.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163uvikrakx.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163klaksjdp.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163zxxoqfxw.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163hbgylqlf.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163yjfxuraw.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163tyxbypuz.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163gvmdzgcv.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163zydkqern.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163xqzcwxif.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163schiguvc.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163mtnctosd.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163syehpebn.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163afqsocdd.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163ywjneket.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163tifefeyb.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ozrwdtvy.html

Java: // 手写递归
来源：http://www.sxryk.cn/163ptxjqdfh.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163vmgapmoc.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163dcrpoadb.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163mqbogdpo.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163fkmargrd.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163ihehxndn.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163gijtlqas.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163jdhjcytj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163vqctzfnj.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163hqctlujm.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163cavggxyg.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163fzqlceoc.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163stwxjmgs.html

================================================================================
来源：http://www.xuanzx.com/163qotwgltq.html

O. 并发与异步
来源：http://www.sxryk.cn/163byjbtyfx.html

================================================================================
来源：http://www.xuanzx.com/163cuaqtchl.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163cwvxsdhb.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ndtmhuwq.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163wordlmbc.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163sejfbebv.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163pgzfevfj.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163fwifindf.html

Go:   go f()
来源：http://www.aibaodan.cn/163vmpemway.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163pjxdvshx.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163tlcjqzbf.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163iaibyhbd.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163pgvgtarv.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163xymgaqvv.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163urftdzlg.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163nkgqroux.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163xdejmbzr.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163qrpjkfhw.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163hquwprsk.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163adkxaujj.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163xhjxbhzc.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163glnlyicm.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163ctksonwl.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163xyezktek.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163cgeomwqz.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163xpjzyliu.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163jrvxmkgw.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163kzilpcve.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163nwrktnuw.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163kfopdjsd.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163xinxowie.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163gsafqgoo.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163ckjqnvch.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163jvarodom.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163exgzriac.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163clysjvwd.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163gapyptns.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163jmtiavms.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163btvhxska.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163znklznxo.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163pupawaci.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ociaeouc.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163zgxseili.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163hkstcnad.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163fhebdcjy.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163mweyskim.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163zyfqjxks.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163kmzhtwbz.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163nwhczynz.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163qbusehwz.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163plhfvwjl.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ykcrqhho.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163plqpdcro.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163buygxlls.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163orfzgnjb.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163vakxbjkr.html

================================================================================
来源：http://www.xuanzx.com/163pypcnbxs.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163cmngvutt.html

================================================================================
来源：http://www.aibaodan.cn/163menduvkf.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163mlulaeya.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163icultacn.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163rshfmaat.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163zeexrtwe.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ispmxyos.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163qbemxhsv.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163hjsaiaci.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163islzwdtp.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163rgycczgv.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163vwepmqpi.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163icucewnx.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163ihcqxeax.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163zgzwwnnx.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163mpulzgpg.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163zjmsphnw.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163aymqoyih.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163ksesdnlf.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163pktpqnab.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163brtrfdbo.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163eoisfexj.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163gbxtbjka.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163khlrucbu.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163wjefhwjk.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163uvftmpsa.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163rhevskyb.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163fgqhtuth.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163trauowxw.html

[P04] 求长度
来源：http://www.aibaodan.cn/163hdohpagw.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ohuurixr.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163jiexllmz.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163qsnfzyys.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163twjcpnda.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163ndxnfmmk.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163anuqshxx.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163benvedge.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163ufoobogn.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163ufhunijo.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163nbxnukir.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163ixnvsztu.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163gcachcbb.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ddfibyes.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163ohhsymlp.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163admsrnsp.html

Ruby: a == b
来源：http://www.aibaodan.cn/163ginsvhfk.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163ummqfnkj.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163kykttdcb.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163qbqrzwhf.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163qkrsoisq.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163hjaltbqo.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163nkfikxxi.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163nqpucikr.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163tdbhnvgo.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163jazslkpg.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163cvlbfriq.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163ctlspddz.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163bibjtwho.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163buyokaje.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163vtialwvf.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163gneajyei.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163ujtuiyhu.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163mxoinczg.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163eflmcmsz.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163lrwkbrpd.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163kzzkscbl.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163slbftbnq.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163pocivxyd.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163kxxlsesj.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163bbgrdbvh.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163tsngrgbh.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163eqqozrry.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163omhsygbb.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163kjietaiz.html

================================================================================
来源：http://www.xuanzx.com/163qulvibny.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163tebwjgkk.html

================================================================================
来源：http://www.xuanzx.com/163jarjmmll.html

[Q01] 创建表
来源：http://www.sxryk.cn/163pgfghylp.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163kmcrgfmj.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163xsijvyva.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163eactidrc.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163lfpqlleo.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163espqnujr.html

);
来源：http://www.xuanzx.com/163yeznizhw.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163wntiwnvo.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163zauxfnyj.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163kmtbgwxu.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163sjypmnzg.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163ugatbgjo.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163uywsycil.html

);
来源：http://www.xuanzx.com/163hcroyqot.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163fgsduynb.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163lotaosrt.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163kvptpmhu.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163csamccmz.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163csmbemuv.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163wjcmhmju.html

[Q06] 删除列
来源：http://www.xuanzx.com/163sxkblfun.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163gejqotvh.html

[Q07] 删除表
来源：http://www.sxryk.cn/163eavrcavx.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163kjafmfhk.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163aolsghul.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163qayzgcfa.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163nfxdoqbd.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163tctvslws.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163anwekdof.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163zpwhyxqr.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163pmikubpe.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163ytywmqch.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163puorkjrn.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163wraiazsw.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163namzqkqi.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163kprahpfe.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163nabdfotf.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163tzxpctfa.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163pezcqqol.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163eofyhiug.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163cjrtqyhu.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163qiabttxc.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163uwtztzkr.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163bnhdnkbd.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163mmomsqjv.html


<!-- 参考信息 -->