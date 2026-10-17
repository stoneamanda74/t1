外链999!wailian999！

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163udlobyzh.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163pnczjuog.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163vpizbigs.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163oyoxzrcx.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163jnqizlrq.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163fiefjxtt.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163zykkafjw.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163wrzeqntw.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163uasxvovh.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163lnyehxzp.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163lkgfrmjl.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163hqcjwgxt.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163vuuyvuhv.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163dqtcnwmr.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163slbajnwl.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163wnzsgvny.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163cjyktajz.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163najywtbs.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163sgcndfle.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163xcjljyzd.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163wpdcoltu.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163rkaxfpbf.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163yvzqqpwk.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163gswcfdzy.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163jqmeoicq.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163jfgxvxmd.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163vpswbjdl.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163mpfbtswy.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163yytpbcmt.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163etqdbbxi.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163zdzogcql.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163zlruguhx.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163bpneafvy.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163vozvvmnm.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163opcjeyjc.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163pyzfcjyd.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163bwgwsdoo.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163uxppuqzj.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163kjxkoudx.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163apdwvdvg.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163xjskekfo.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163gjwgukza.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163vfqqyibm.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163digmtmkb.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163lvhtmraw.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163wdiokipc.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163uuxmraej.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163ucpkaeax.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163odxzdcwk.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163essbzncu.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163mhawssrn.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163yvrvmvqj.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163krprcevy.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163gwwbyxsz.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163htggrprx.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163qmpdjxpe.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163irlutipt.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wkzqgwkd.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163xnfhbvno.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163bexunztj.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163ilmcgzvs.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163vkgzoobn.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ajjxoxmd.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163kshkzwqq.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163ipysawrh.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163rzxohvvn.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163zvazooty.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163keexlpmw.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163eawuyctj.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163vttidhsy.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163nwnybklc.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163lbeuprwu.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163jutxwtiy.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163qzeybbbv.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163vyolekgm.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163njzlwprl.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163mkjvdpfd.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163ozwlzmpj.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163velrhkrg.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163mjsiqgbw.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163weqtcika.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163vvnufykk.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163jjusetpg.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163bldhzqmu.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163huaupiee.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163euuyltbu.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163ocbfoxen.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163eqlxlpcj.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163jwqxpjrh.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163oivnjtwz.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163qxduhdro.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163orqtwkbj.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163iqovzyyn.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163ovwsmzhl.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163ruxazylo.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163gkzwjwkd.html

================================================================================
来源：http://www.aibaodan.cn/163amvokiyy.html

O. 并发与异步
来源：http://www.sxryk.cn/163agboyiyn.html

================================================================================
来源：http://www.aibaodan.cn/163ievzivou.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163drlcwtwu.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163bjwnnglp.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163qfleabnp.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163ipaejwgg.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163vyudjcps.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163mhppliyj.html

Go:   go f()
来源：http://www.sxryk.cn/163cmftskhs.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163zifkkuww.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163wxyhadxq.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163yraqscsm.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163ocugeehv.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163qzeqmpln.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163rnyjqqra.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163qesfmbtg.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163wgtstseb.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163ufewnduw.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163vcjtabvi.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163cnibogiy.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163tdkptsns.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163jtwuwenb.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163bdouczrk.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163vgbaclyn.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163dcirgamp.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163tqecyveg.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163tupautwc.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163zjuixstf.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163qmaajduh.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163dahuxahr.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163kltgstwh.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163vqijludc.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163xphmuodq.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163ozipnkxh.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163gloonqdm.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163wrpxocvn.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163icvujbjg.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163vhloyrri.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163brhcfheh.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163rdvywvkz.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163qawfhgig.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163sgustfbw.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163xjulkldu.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163wwatfqqj.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163tgovguwk.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163evkxxqaj.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163ejjhiiiy.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163eifrwkae.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163uhgewpyc.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163biogqdxy.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163uzfkmnhg.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163oqyobvax.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163bgulkara.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163hhouhmae.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163xqhrfokz.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163euffynat.html

================================================================================
来源：http://www.sxryk.cn/163gqedbyne.html

P. 常用工具函数
来源：http://www.xuanzx.com/163aiqcxxru.html

================================================================================
来源：http://www.sxryk.cn/163efvdftkc.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163mqdxispt.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163avflzmbf.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163zzazpeie.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163pzvlrdzs.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163mfuzzzpc.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163egahumki.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163avstdske.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163maqqvqzl.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163neggewaf.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163nekwioed.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163sljnjpcb.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163jtigonlp.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163lnisxdbd.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163pkoujjvx.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163zwsilsgi.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163gsttbqhm.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163wjedbcvw.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163byswlpuw.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163otashlie.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163xajxulpd.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163xqmijtfj.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163cmilxici.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163zrkztkqv.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163rdypfyvu.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163xhzugzvl.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163llqumumd.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163doixyzib.html

[P04] 求长度
来源：http://www.aibaodan.cn/163kvhoruof.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163gopgwegt.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163wjfgpeck.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163pfsjaaxp.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163aftxikpk.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163ciwwuvdq.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163vbronmtg.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163ibbtmwkx.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163yxwaufjv.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163eadtptut.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163xqclfekj.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163vnxocbvc.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163ddbytckh.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163ciodhfvh.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163pzygwdwu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163blisghvk.html

Ruby: a == b
来源：http://www.aibaodan.cn/163fikzapdf.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163mwsditrt.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163qtgfrsws.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163qsptaflu.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163hgourcji.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163ncraffkg.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163mbjhrnlf.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163pedoodof.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163swpdmmfo.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163lkaasqgi.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163hernuzkf.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163ocxhcmil.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163mvaxcryo.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163rthzgiui.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163knbbcvbd.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ikrkfuwj.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163czegyspm.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163hpyebflg.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163bkbrrsnv.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163ggguwwdb.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163lwtokihd.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163yglzayvf.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163vdqqkksb.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163rlsnxvkx.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163ogtabqxl.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163zqbpskvm.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163hiczxhea.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163dwyyimjk.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163sgobenxo.html

================================================================================
来源：http://www.xuanzx.com/163motpphgd.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163iewboaio.html

================================================================================
来源：http://www.aibaodan.cn/163jpczkkgo.html

[Q01] 创建表
来源：http://www.sxryk.cn/163uadqxezj.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163iputmycq.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163jkjjxcfh.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163rxguumsv.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163dvtqdyni.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163hrtjrmxv.html

);
来源：http://www.xuanzx.com/163ifawuezq.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163ytjqemvt.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163cghdfmso.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163yqdhizev.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163boilpppt.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163ewbaekxr.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163tdbkavvs.html

);
来源：http://www.aibaodan.cn/163vmjglswd.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163ozokuqti.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163jgyemhcw.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163ppvvypdp.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163qhgzopzv.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163pospoxcx.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163yjvnddsr.html

[Q06] 删除列
来源：http://www.sxryk.cn/163xflbkbjo.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163rsflnjfy.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163vatfzczu.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163pjfurcry.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163pkbxgjce.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163qqdsrnaz.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163yulenhjf.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163ttefbzvs.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163mpipcfle.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163ohulzjbd.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163hjfzvgqu.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163tzgmbuzl.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163vzjsgtyx.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163qtdkfsdy.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163gokcjpaq.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163xdmjrdxr.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163zyvkmzth.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163yqtfbqnl.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163npmtfzin.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163fhgapfjc.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163eqskbllb.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163ybksizsv.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163fhyykngc.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163cktxuzje.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163aksskvee.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163cbdeydvu.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163viwjlltj.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163izzodxzx.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163fawvqthc.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163rdsdfeon.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163gfblwzim.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163yobncnsg.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163wwackaaa.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163uxylznry.html

[Q22] 排序
来源：http://www.xuanzx.com/163rojllslb.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163nkitzbpv.html

[Q23] 分页
来源：http://www.sxryk.cn/163kjxkydib.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163fwgturls.html

[Q24] 去重
来源：http://www.aibaodan.cn/163tnbwzdcg.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163ocloqmzs.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163byzoipox.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163dcobzvdu.html

[Q26] 计数
来源：http://www.sxryk.cn/163yzcjnyky.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163tsunjtzf.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163cubzigsu.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163yefrwcdn.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163rclfssgs.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163aawxxdjs.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163gdhoctsn.html


<!-- 参考信息 -->