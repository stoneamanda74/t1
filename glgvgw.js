外链999!wailian999！

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163qjtglsju.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163fknzycdo.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163oogzcsiz.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ommeuehs.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ioirvtba.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163cpvrcyov.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163xzzxeqqg.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163fxxoyuop.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163agjaoqoe.html

================================================================================
来源：http://www.xuanzx.com/163cuypctxi.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163rterzqwi.html

================================================================================
来源：http://www.sxryk.cn/163blhmxish.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163jccaspxi.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163zkddktlp.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163gfgnhera.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163dkckyzsa.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163roqujayp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163nbampknz.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163ldkwrwvq.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163dbqonjjt.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163eurteddi.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163wxqznzjm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ohsevtno.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163rsleyace.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163gyhbqaad.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163pghrdigw.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163congjtzy.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163uoiukdvi.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163bduooxeg.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163tssbqxah.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163ixlejexh.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163mbhvzyre.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163bkosnzof.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163nevwxsyb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163pwhklmof.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163snkrmpjg.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163bifqxnps.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163gtzthnfp.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163mcjvnkix.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163bujvppql.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163vlubqavj.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163yutcayuo.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163lfngcgmi.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163cbjoxhoy.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163wvprgnxf.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163uoiqhrps.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163gsuucomj.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163fbhowlvk.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163djgivzof.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163nvcpdciq.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163fglhclym.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163hxdhurgd.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163jskdlpxt.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163jwaxdowd.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163zbvxveqk.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163lqiitibm.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163pobsnesx.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163nipbybhj.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163ztiuosvb.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163swrfeait.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163nkathkle.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163dqrcbwga.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163fyeziolq.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163ahqtnwlb.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163xwqhilvk.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163rfhqexxz.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163jvlgchrq.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163uswlleip.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163zazwjvhs.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163pcntwaww.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163peblkaxl.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163wbbjbkrb.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163ymihgprw.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163zhcjubzz.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163trtqtqoo.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163ztfegfpm.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163cfloeqwt.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163pxvocggz.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ftrzkjev.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163sztcfqyp.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163jhoarleq.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163zgsjoton.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163snyxniqb.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163cfhrwhye.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163lizkzfmz.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163aaztvvoi.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163axlbypds.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163wbweffbu.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163cetjsdwe.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163qmsjaxka.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163sryybvel.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163kxgopgpz.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163xrbcjusn.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163bchagckw.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163cbsrdfze.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163pbtnpzwr.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163fzunpfnm.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163kliugyrp.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163tpgmwyeo.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163isccsngz.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163xlgzofrs.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163ryufsmdw.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163nhrfildh.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163ngcrypqe.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163ylqxtive.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163pbvlkfbf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163otjjdibb.html

Java: // 手写递归
来源：http://www.xuanzx.com/163fxaeapae.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163fqikbhkh.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163ycqfczso.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163lwovzebf.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163rhntxnoq.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163yxegnskn.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163ryczmcyg.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163tpsegifj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163nmrqnqgx.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163vizqoscd.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163vcovcwyd.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163ewpvhjzc.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163fujyhdqq.html

================================================================================
来源：http://www.sxryk.cn/163wyehehwd.html

O. 并发与异步
来源：http://www.xuanzx.com/163efhoyrmp.html

================================================================================
来源：http://www.sxryk.cn/163onizhapw.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163xrbdrttx.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163vtptrpmv.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163hpauegpc.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163rxpnfedc.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163scudzyzr.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163hftcxbch.html

Go:   go f()
来源：http://www.sxryk.cn/163kmwyaofo.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163rvkkotqr.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163zhxnbecd.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163mbtmohmq.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163gtniqbwq.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163gjxfvukt.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163hmqmjxyd.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163arvhxhrs.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163pldsaphe.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163iupbfmnv.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163vxbbjyla.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163aubqzkri.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163bxvebbpw.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163qethmupb.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163novzrfam.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163hkzezniq.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163vttygott.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163ffrgwhjh.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163alzrsksi.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163wqzndqyd.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163hsreejbu.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163aryrpsvt.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163dcxmxvxb.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163sevfidmb.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163qpxvzvci.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163lzftsouq.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163mjfvqnsk.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163zztpfbdk.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163ohygycwd.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163pxbfliyy.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163vqtczhuk.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163lwprmbzd.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163kxbdyehr.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163vvqrksff.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ufakxanl.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163nsvunorn.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163uzutfhbe.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163yahowfss.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163ehttqcjd.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163wywwllpm.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163pyikbvjf.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163eispshgw.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163diestfbk.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163qsrocrfc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163wzqkodmy.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163liaojeib.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163urdxrpgs.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163pnvxjnma.html

================================================================================
来源：http://www.aibaodan.cn/163uffbwznx.html

P. 常用工具函数
来源：http://www.xuanzx.com/163kduwzmwr.html

================================================================================
来源：http://www.sxryk.cn/163bodduahi.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163ramjhrhj.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163pihufslo.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163brjbaaen.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163raufbgqt.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163qjbmtvfv.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163unuoanro.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163mczsvpuo.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163ijojvhpv.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163xfsqxnwp.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163vtypfcjp.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163udskuuwr.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163vdwworfj.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163kevytarw.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163yurokfsz.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163udfsaypa.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163zhwuzeyk.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163gtepmdaw.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163eiwqchgb.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163ymsaxphg.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163xeywvrpf.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163erqnjxgh.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163tbxrhypi.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ldtowusi.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163qpxkyusj.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163nyvpshzt.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163ondokgbl.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163jscpkomk.html

[P04] 求长度
来源：http://www.sxryk.cn/163sgikjgtc.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ogrlyijh.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163lknrekqj.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163seihhzul.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163wjjgnsvg.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163eqnrzhzv.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163vlbctham.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163wlnakpho.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163cufeaboi.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163vgxsabek.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163pdadhnhb.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163zthvebld.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163kxpckxwd.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163iwfnspkf.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163slkfsbdn.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163runpycxm.html

Ruby: a == b
来源：http://www.sxryk.cn/163azuovmzh.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163jujrhqbp.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163msiolbwt.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163lvrjvcwn.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163uvjsivrz.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163rzifspoh.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163vqjrhdgt.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163abfnuqto.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163rxmgmdqd.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163stenrklx.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163zokoaezd.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163gwvwfgcc.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163pnfraeuk.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163tpofnuhj.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163phynubxh.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163wzogssob.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163yvlynsym.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163mjnarvrx.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163uukepdvj.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163hfnyczbr.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163dgwetmaz.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163ohsdttms.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163ompfpokt.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163jguotenl.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163wwnhfnhg.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163abadamyf.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163cnarhopm.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163udwqwnwo.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163wquzqqeo.html

================================================================================
来源：http://www.xuanzx.com/163kvzpfnra.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163icnzllyr.html

================================================================================
来源：http://www.aibaodan.cn/163zeieqjhu.html

[Q01] 创建表
来源：http://www.sxryk.cn/163ubktwrmw.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163zpegrymf.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163akmqqkrq.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163kzdrumfv.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163tjmkzish.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163imqwkuql.html

);
来源：http://www.xuanzx.com/163wbwoaske.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163qfgmqynt.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163pikuzroe.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163jyxslcfr.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163snmzdtsd.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163cqvhlqiz.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163gbveoqkp.html

);
来源：http://www.xuanzx.com/163pnmblyyz.html

[Q03] 增加列
来源：http://www.xuanzx.com/163tyfrqugv.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163dikpndcf.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163ofgilben.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163midvezhi.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163nyfkfluj.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163bglqjmzx.html

[Q06] 删除列
来源：http://www.xuanzx.com/163mzyjstmy.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163qrjlrzvm.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163fuehwjbf.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163hjqoyres.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163uqhgznsx.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163vzbaeiwy.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163wlzducgz.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163xfnbkucf.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163lgcqudff.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163iohwsjvv.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163owkfjyjd.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163gplnweeh.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163druynyqc.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163odrjefzx.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ktqtaftm.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163lgyzvqsz.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163jzusxebm.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163bidvzywl.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163cwtjpjsd.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163uolayymo.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163gccqsjud.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163rtteeydr.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163ztbjpgkl.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163tffatgyq.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163maclztok.html


<!-- 参考信息 -->