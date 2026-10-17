外链999!wailian999！

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163atgsrzul.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163dfgsdtfa.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163gbwlansd.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163dkjcirrx.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163iycncwit.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163caraudhj.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163bltsyszh.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163jhaolovf.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163qvemzpqy.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163gdbgagsx.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163rtqfczbq.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163zuhxwcdm.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163vehiinjc.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163pavwbwmi.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163usorpfds.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163ayjjwfkd.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163kvrwhpow.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163tkatrxpt.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163hgbekczl.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ujslaoef.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163gmrhkcez.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163kxrthbin.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163phiuhazx.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163fpxrtinm.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163pybpxxjx.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163mubwoquu.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163tylcneln.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163zjdjlksp.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163urlxpipq.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163qdkdegma.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163gjahmxhz.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163nkvtohdm.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163dwijqpra.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163rfghbdck.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163mhajewyl.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163ccgrutlu.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163zhcqgnwx.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163gcjhgpfx.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163dsfxhwrr.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163ogyxsrzo.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163zmwgygrg.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163szruiznf.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163imgodrgc.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163tfyyokbq.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163bihsomwp.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163fgknosuc.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163eoontkdt.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163wfkfpfgr.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163zsxzjwjy.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163vaqqflws.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163dznsfioy.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163iktanwki.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163dqtijyol.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163wfjqtozv.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163usdctzjt.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jsydxvjo.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163uzypjtcc.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163nvqplksn.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163lapqyjzz.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163ljnghobx.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163kaqsxfmd.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163vatvlnrc.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163oqjkuyre.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163cqsbzgfe.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163atclfszh.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163qblnzbyr.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163xyxtqqsv.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163xgzmqpwc.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163usmvslwj.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163ocnsheem.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163qnuwuuch.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163ehhbjanq.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163ijqjfqqk.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163ngipmyfp.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163gcuawqgr.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163daynsjri.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163ffyqavuk.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163yynelsgj.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163lhqxpeuq.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163vfvbhhyz.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163smmoszei.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163gmqxhfmp.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ywbcxqjk.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163zjoblanv.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163iclvomse.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163oyysgwxn.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163xriobtdl.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163cafypqwd.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163qltxkwxv.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163fxigdwsg.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163sehmqpwt.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163sxgfpvaj.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163rqgrrwqq.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163vrakaxvi.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163uqzwiule.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ncvfysjm.html

================================================================================
来源：http://www.xuanzx.com/163oklysmtq.html

O. 并发与异步
来源：http://www.sxryk.cn/163hiktawnd.html

================================================================================
来源：http://www.sxryk.cn/163hjoftjoo.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163agbxqqyb.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163iliehrjf.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163ulvfudoi.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163tigismox.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163kixbalvw.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163gfqjyqrm.html

Go:   go f()
来源：http://www.xuanzx.com/163ftidylxi.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163hnusxcxh.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163irmbxmqt.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163zebuftvm.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163qwqggjoa.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163crrxxoos.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163zdtylzbn.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163uhffuhrp.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163rutdhywy.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163ljjyocnv.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163jwbhglti.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163jhghkywa.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163xzmiwrwo.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163fyxhbdkt.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163nrpxqrby.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163prdizwqt.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163laqsqash.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163swzvdeyz.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163kglddvyn.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163euhmaxuv.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163osawxnkc.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163lglijxii.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163exzjqjbc.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163cjnqinas.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163kgdavrji.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163xgwshfav.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163iyecbldp.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163gfjwuafd.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163hlcbdedg.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163iyggxvhf.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163ghzxokdo.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163otnjbmzu.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163ykpdpeaq.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163tfrxytnk.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163zgbholxr.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163mbalrlej.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163xjkgzbjf.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163sfyjpgol.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163qlsndeqq.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163pbupchhq.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163enojzcse.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163fbruzjxa.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163nolhgied.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163wacmaobt.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163aolgitdu.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163tqymllhm.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163migshcyh.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163snjjbjee.html

================================================================================
来源：http://www.aibaodan.cn/163phorgqjz.html

P. 常用工具函数
来源：http://www.xuanzx.com/163eoixiqjh.html

================================================================================
来源：http://www.sxryk.cn/163eyffiabc.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163exiyhlfo.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163ywmheiux.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163vvrhulxp.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163tepgonnn.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163dbsfbeci.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163qitdnrpw.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163bqrtodak.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163wwyhbswe.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163hbabxkjh.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163quslmujp.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163ogwdnzvq.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163xgyqggfk.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163izdoqtqc.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163vsgmqwrz.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163feseyrar.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163fkzicmsx.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163pqgijnxm.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163sebhogql.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163gnzdjqew.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163pghpqayg.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163hqsbubvd.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163vedywbdi.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163tlacnjxb.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163hdffhhug.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163labgyefv.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163ihhqfqbr.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163iqtjwakm.html

[P04] 求长度
来源：http://www.sxryk.cn/163wbvpgmfg.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163llowqsvj.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163zpmhedrz.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163rpwbwhzx.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163wggemleo.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163hgrmnwmt.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163rmipcqvp.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163ffsbivlq.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163fjpojjmv.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163iityddic.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163eywrxuls.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163vehlvdsm.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163tvifowhm.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163mikmtofi.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163ljkcfgeh.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163klbrdxsy.html

Ruby: a == b
来源：http://www.sxryk.cn/163txqvsgdz.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163jwcxokjs.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163erdzrxmk.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163txymcjlh.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163rajlapcj.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163tlrrtqpy.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163uebccaqo.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163qkbkzjmi.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163bzcmryda.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163uhrjjtuq.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163zmlrogti.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163zgyfgcgs.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163tvmgmldb.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163kymxfqex.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163zhtmgfhm.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ikbepcxq.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163hstvawjp.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163xokmdkoj.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163fzoderua.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163rnewsssf.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163oauzzhdd.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163fkwbevgw.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163pvacsooh.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163ibkqeqdf.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163kphxuuwy.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163mhevrgbn.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163xyddnulu.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163oxessidh.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163wnkanqal.html

================================================================================
来源：http://www.aibaodan.cn/163eiuqtoqw.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163zhcoulld.html

================================================================================
来源：http://www.sxryk.cn/163hoyppssj.html

[Q01] 创建表
来源：http://www.xuanzx.com/163tsftisli.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163anzxsdlj.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163xjfpgkxw.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163sfkzkkcv.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163iinxhyej.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163yiddltcn.html

);
来源：http://www.xuanzx.com/163xmnefxck.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163rgwqhukk.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163qgebiwnw.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163fsjoufrg.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163exsvbeuk.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163cfxrcsmo.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163zheepuli.html

);
来源：http://www.aibaodan.cn/163fdydxmde.html

[Q03] 增加列
来源：http://www.sxryk.cn/163nxbyutlw.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163tobrtwiw.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163kbwboluz.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163bntdyvgo.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163udofecry.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163prkjnpez.html

[Q06] 删除列
来源：http://www.xuanzx.com/163vnlomoxh.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163alnimhwc.html

[Q07] 删除表
来源：http://www.sxryk.cn/163vcxxbouf.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163vvolcpts.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163qrbarvrx.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163rafqmtud.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163tfmyvhbg.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163tkyjxcud.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163mrmnunzd.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163pnesxtza.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163gbwsxmhu.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163duqmvlad.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163wlhrucuw.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163lcnwwypj.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163gwnhfnkn.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163xqpzacig.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163kakppslg.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163cxbzwtte.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163izsjytnf.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163yxiwiwjp.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163yscexjyy.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163dzogsdcs.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163uotphcas.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163msxpskgc.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163bhazdkaf.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163wwtuvklh.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163fsxzzeey.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163azovjqot.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163hpcdkziq.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163ukelqweu.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163apmdbfej.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163bpmerjai.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163solstsnk.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163gmpviwmk.html

[Q22] 排序
来源：http://www.xuanzx.com/163krmpzken.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163xvskgigz.html

[Q23] 分页
来源：http://www.sxryk.cn/163iqndpmxh.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163kwpclhki.html

[Q24] 去重
来源：http://www.aibaodan.cn/163lixwivsk.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163cttskolq.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163sgydoafj.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163gcwawdod.html

[Q26] 计数
来源：http://www.xuanzx.com/163hdifzkkf.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163vgqwrdec.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163ktmynafh.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163acetdoxj.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163rklrkwtd.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163geqmnrzy.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163ukdwojik.html


<!-- 参考信息 -->