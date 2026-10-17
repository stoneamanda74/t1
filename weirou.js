外链999!wailian999！

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163yluzyhld.html

================================================================================
来源：http://www.sxryk.cn/163ydxjqfxp.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163fyseyoyt.html

================================================================================
来源：http://www.aibaodan.cn/163uocwcumt.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163fhtwmugr.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163bsityzgk.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163ipivvjnh.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163hyumkfzj.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163vfiytjrx.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163zvghbwvr.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163ndolqvpt.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163wthibmpy.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163yzyekslt.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163uqbiksqk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163jtwtsndb.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163shiorepi.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163nzxmnotx.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163usiwuvpa.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163qxuxzyzh.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163dysfcdzx.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163owouxtyz.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163bnmgnfvq.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163mfmjqrdf.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163hfsottis.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163nuohewra.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163jlqrfnrt.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163mcucrrwb.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163uxxyflni.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163tvmxwoev.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163dfnnnuqq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163fjekzcfc.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163mycseeor.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163hqytzxqv.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163gjwvkouu.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163kqvlxslt.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163efcxtjwv.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163rizwojul.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163nzgfiksd.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163jgxbynvr.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163ejhcbgpz.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163pyztnxwu.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163ujsqiiet.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163yfpqikyx.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163vfirebjo.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163vivbpikz.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163zjdbxzjh.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163oaxhuzbg.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163boxvegia.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163msjcstrj.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163zosoxyki.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163mbeurqvw.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163ahzdezhs.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163olihubps.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163kwruywai.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163krcojuyg.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163jshkieou.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163gnywxafj.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163rkvcyntm.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163qurybjgb.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163iotlgxew.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163fiagghvy.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163rgbwhofg.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163fozcdajh.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163zpcprahq.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163ebhynnpf.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163dwurfhem.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163vkygxewn.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163bopzcvlt.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163fnpnmbec.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163njjshwcr.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ktrhhdci.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163crrmwldb.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163uxzvgnpr.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163yltlryzq.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163ulgxdjzx.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qafhaelx.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163etllaacw.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163zqcfdvof.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163quhqkthj.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163ivbglyfw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163ldfvlros.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163vcjbignl.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163agmvdnfn.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163piqpmxwx.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163cwyareac.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163psdpbkun.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163atiwepgs.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163tzpnwsdm.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163pvrsrodg.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163zavvjjoc.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163vnaycicb.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163yiylgjsd.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163hgmqvnmy.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163qrwdzclx.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163pjwqzodj.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163zfvloixz.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163rultbzue.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163fdncgcxe.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163gwkanwkb.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163mnoztpxm.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163jymddigs.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163ohrqnhsr.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163kztnwylw.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163ixetrleo.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163obbpoadp.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163pxoplvpy.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163dmyerodo.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163wlvsejmw.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ykjprude.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163ombavzix.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163oimhxpew.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163cnbanplb.html

================================================================================
来源：http://www.xuanzx.com/163fywtmjei.html

O. 并发与异步
来源：http://www.sxryk.cn/163gbuhmwph.html

================================================================================
来源：http://www.sxryk.cn/163uzellsdf.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163oyyrxfxc.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163mryyyfnz.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163ekswmjlc.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163jfglanlk.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163dzmjrbdg.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163pyxcqoky.html

Go:   go f()
来源：http://www.aibaodan.cn/163twlzpysv.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163vvchmmja.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163lpwfibtm.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163yplfobvl.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163uowwgztd.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163nstphecp.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163dxlqlcrp.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163tqsvfeil.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163atrlezpo.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163qearnfgs.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163qniqrsms.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163nbnxaqpg.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163xycyrvuf.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163ruuohwpl.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163zdyarlqb.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163sheckztn.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163fxghdwvi.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163nyaatlql.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163lrahmcsq.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163aimxfnpv.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163rbmkwanb.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163bquwpvvb.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163rygowrbf.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163lymolygf.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163kptwifth.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163qxobuyad.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163lpnkbjcc.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163cosxhucx.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163ezclzlmx.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163gddcusct.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163qnhclxbw.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163sivceyhn.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163mraxnewi.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163xnaayefq.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163mheeuael.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163kjczkddp.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163tqnsfatp.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163thcpkmnk.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163ekwvwavc.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163bubkqagx.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163xizxvest.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163jxhjxtsz.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163avsvkjgt.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163xqnqqfwx.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163ckeczzqo.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163bqkcnvrw.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163fbanrbrl.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163kaomjdqe.html

================================================================================
来源：http://www.aibaodan.cn/163bsehtyob.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163kvnodcwc.html

================================================================================
来源：http://www.sxryk.cn/163wumjdedm.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163kvamovce.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163dxwebybx.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163nufleiii.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163wrlflvwq.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163barvqpbv.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163igjeicyj.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163powerklg.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163pbhmvtdh.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163wpkthakf.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163smtwhkib.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163nhcyvzke.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163glrqfbsj.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163anwgnfab.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163roztazdl.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163cxoqtmqd.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163fyhhgerk.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163gjsnlkcw.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163unvwwpti.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163wawtjyhx.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163mdwijmvu.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163tlyawazi.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163arvrqrpp.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163xopxzsnr.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163qomsfpls.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163yzwdthsp.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163bsaotdri.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163cppoekso.html

[P04] 求长度
来源：http://www.sxryk.cn/163oqzhzjin.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163evbfxyzg.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163dpesafvr.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ywntfjrs.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163jxmvwasj.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163tlutmknh.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163ytjwjrwa.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163exjrhyuk.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163rfmoqwan.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163cenkghgr.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163qidknrqx.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163txijzxkb.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163xoaweskk.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163jxyeijrt.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163jtyreqoa.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163vrarvklv.html

Ruby: a == b
来源：http://www.aibaodan.cn/163bjuueuho.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163bqhlsveg.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163fgfivycq.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163fugqgvkg.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163qtamdljx.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163hgnrsdbz.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163dfpsjuju.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163jtxzpfiw.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163flrbhjrs.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163lodfxwnq.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163cuafaohf.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163wmkazkas.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163nducybfi.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163zpariepd.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ltsubhbp.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163iuwunitk.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163kteqgfob.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163xekgrxqz.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163hrmezutx.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163ankseljz.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163ihvjwaat.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163ifwnmozw.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163nsteljuu.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163xhjltrrg.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163khstlkva.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163ptfyicmk.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163nwencnbw.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163dbkimcrk.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163gsbkvqbf.html

================================================================================
来源：http://www.aibaodan.cn/163iomnzqfg.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163lcbjymjr.html

================================================================================
来源：http://www.xuanzx.com/163jjqcwuao.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163doorsbew.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163kfdceqeq.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163nmucznuq.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163hjnppfiq.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163qomttaho.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163iuznfygq.html

);
来源：http://www.aibaodan.cn/163xsxmbadg.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163nhzfnkyh.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163iqfzcpyo.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163zopjuimc.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163wfqnmjzs.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163xmurjygf.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163xpxtaafq.html

);
来源：http://www.xuanzx.com/163zrrzzdxe.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163olakossf.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163pgfestvd.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163jvguimgo.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163feeorbrl.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163soccpuvb.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163ncjbxihr.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163fzqstgjz.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163ngktjakf.html

[Q07] 删除表
来源：http://www.xuanzx.com/163vmfndqxx.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163wohylvqr.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163wapldzzn.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163ldlcsmxp.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163jmpflkie.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163wpnsvgvu.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163pabikdzw.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163qpgolsuv.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163jukzultd.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163kmtxxjwp.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163wfimnxdm.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163enofdjjz.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163mpvrtfkx.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163klefdfys.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163jixrrzxn.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163risdwjyd.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163sjdffpqt.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163olxoviri.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163hbxzjego.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163ltkkmpin.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163lcjpsifq.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163dkrooyaa.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163rllfahri.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163iaskaeyw.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163ijadfsth.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163hdggmgqo.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163qzrqjqkh.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163oeayhcrb.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163cnidfwfi.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163prcuffty.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163dwsnvgsg.html


<!-- 参考信息 -->