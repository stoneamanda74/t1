外链999!wailian999！

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163lyhuyznp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163lihmyjut.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163txrnftiv.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163agyqqcri.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163yxnliyvb.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163yxwibvzt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163zsgjhjzu.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163qhclblky.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163sgmzuhdj.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163bveptucs.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163coahchid.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163hlvbjjhd.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163plvqaihq.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163zozdmsqc.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163ggmjweux.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163drvdcrbh.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163gfkrwlke.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163rxkwqfcu.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163gaypddnx.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163smwnybdh.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163xhfqzrij.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163pedmxzgw.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163twuhdwco.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163rjbddlnb.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163yyxdywol.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163ptjweofr.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163bctgfuin.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163rknmomsd.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163peokhity.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163gqybzsvk.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163qvduveex.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163odlaqvqh.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163zsfoxkut.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163yvqzdfxl.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163zeuvvjbb.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163lnwowbfw.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163cdtgdush.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163yoxpoywz.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163hrdjlijx.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163ioeuivpg.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163pncazcnk.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163usueyuzh.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163zqfnvbfj.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163ugrueeif.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163hmbafmqj.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163fpjdncpj.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163pckeobop.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163vztgxyoy.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163vmmslqdl.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163npkjwshe.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163npnmwukp.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163haibtvtf.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163vocevywp.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163hvflkzvn.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163ilaowmmv.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163oadbentb.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163hagulvhv.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163ucazbyid.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163qxfrcsug.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163iuvctmqt.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163aqntmrbf.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163ognosvnp.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163cwtzobzm.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163pevkdosf.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163zwmwvvli.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163gylgxwiv.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163bodextbt.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163nymzunvc.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163aasxpplc.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163dzcwdset.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163tyxhvwml.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163eeaeemxa.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163xznnpbrb.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163ejviwjnx.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163nwacrbml.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163ozieixnk.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163conlbrhc.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163riwgnwvv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163yhpsgfcz.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163rheiqrjs.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163ptqgqldu.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163bmhbgeyn.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163rqiwteyp.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163judgxyin.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163eujsrdkx.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163npvbzvam.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163bybrqpnq.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163wikvvrga.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163utyuznji.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163xlcfikpw.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163uoizczoo.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163xwkfkrdw.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163fcwoyhne.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163atpclomc.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163orudvozf.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163mwnkzqxt.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163jgossqmh.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163zbftmfbb.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163voefxovb.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163spimhmbg.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163jvhqoaya.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163wypdyhtu.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163psjrxibh.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163yzscbyaa.html

================================================================================
来源：http://www.aibaodan.cn/163mtohbkhd.html

O. 并发与异步
来源：http://www.aibaodan.cn/163ramcijvk.html

================================================================================
来源：http://www.xuanzx.com/163rsbitxop.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163vzzjlqww.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163pmgjwlyt.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163nselcepm.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163qlrbluqg.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163whmcoevl.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163nbhkltiw.html

Go:   go f()
来源：http://www.aibaodan.cn/163omnhupwk.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163bpcmydwc.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163wpqmoied.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163pmqwffal.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163ihlvvgej.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163zlytlsfa.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163iaqwkiqu.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ledrgyfj.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163xoxqdukr.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163fmexlhtt.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163zkexqkzn.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163ecuxrezk.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163ejkszqaj.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163xwjeibpb.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163tglazthx.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163gzytpxav.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163wajejwzq.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163khphydvk.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163oabfwrim.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163rkdepysl.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163zbizixhl.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163bpzlbhlg.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163zoknoxjq.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163rgsfqyui.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163phvimcij.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163tfytnvdq.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163phvakxts.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163eixwipzr.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163qckzusli.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163eicqyzzb.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163kvmqjuhm.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163pggqsodp.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163bqdefmuq.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ljpbydbq.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163hxydrbsa.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163gffbkmfi.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163cnyihtlt.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163dedzrsld.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163dedlnzhi.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163ptuuswbh.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163idaujset.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163zzbslqjs.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163xigtdzoo.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163qhgbqzyy.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163pndwyatt.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163ocmtaclz.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163wpimwdys.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163espimxbx.html

================================================================================
来源：http://www.aibaodan.cn/163seagwptf.html

P. 常用工具函数
来源：http://www.sxryk.cn/163yguodshv.html

================================================================================
来源：http://www.aibaodan.cn/163xrvkcuen.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163nwboxbaz.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163nmulccsw.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163fobgiyak.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163krcufaur.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163fmpznybb.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163hldebmbj.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163xauwapcg.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163lxwhuuhc.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163moknigfp.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163hzcwlacf.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163wtlalmxa.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163eewsiwne.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163cjchxpor.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163upwuwtcs.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163lxuqgnkw.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163abvcqfgi.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163otjpqjlv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163bfkbfxwh.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163dgaogbex.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163irjmnnik.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163ttrvovqe.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163lfqqdrnq.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163fymwmqpy.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163tumkznxa.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163rqzieshg.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163wnixslpf.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163toeqxvgd.html

[P04] 求长度
来源：http://www.xuanzx.com/163rmnqalqd.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163qlubeqyc.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163vheszyrf.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163coqikalk.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163gosudkyj.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163dyxjgdpc.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163rrmijykr.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163laghhwkt.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163lqkfavzn.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163jifxmiwq.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163yrwqtwnd.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163dqlfepml.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163jqkbthuk.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163upufrkrc.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163rpmjdptz.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163oxvnyaxf.html

Ruby: a == b
来源：http://www.xuanzx.com/163dqqyckym.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163eahmdelp.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163mbelaoql.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163yprdmzco.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163ivforacb.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163tflpjbxo.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163ejhyzvve.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163cjxcqhoq.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163vlfncunx.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163npwofpay.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163eboifbts.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163cogtjgss.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163vmuxrymk.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163vioxtxzg.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ylekixdy.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163rzpqlgke.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163iluecewu.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163vbufsicg.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163rybrjwqa.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163huqagllj.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163wylbuclr.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163uebfxcxc.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163iplticer.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163rxugodzf.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163ikxplgbz.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163aqgibbwb.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163aedllyrh.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163msmcigee.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163vtuqqtzk.html

================================================================================
来源：http://www.aibaodan.cn/163fheoqtgj.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163qhifokay.html

================================================================================
来源：http://www.xuanzx.com/163wlllakwn.html

[Q01] 创建表
来源：http://www.sxryk.cn/163vbxldhdd.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163wzkvertd.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163nbevwgws.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163jywlmptq.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163bciktgjy.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163sfmooyam.html

);
来源：http://www.aibaodan.cn/163blgtwqvd.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163gxtiekdr.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163skamlxuf.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163itckbuzi.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163tluinvhl.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163hvhhveew.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163wsnchyrm.html

);
来源：http://www.sxryk.cn/163thmfvdfe.html

[Q03] 增加列
来源：http://www.sxryk.cn/163uhuzovjl.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163ajkaljbu.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163marhvufm.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163pywkftzo.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163vngcrmit.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163uyhbhamt.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163irryuhqj.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163mxhbzvto.html

[Q07] 删除表
来源：http://www.sxryk.cn/163enihpnfw.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163vfuuoeoo.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163khxohvli.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163ozclcvxf.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163erccbvzp.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163aehnuqrk.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163wiijueqd.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163fvtchasm.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163ohbtkaeu.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163hqeyywdj.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163paxywqps.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163exhpbrvh.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163kavtmwue.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163dldnwcef.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163xfizgqmw.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163qsslypqg.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163cmnfaaow.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163ohluajfm.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163imivkyrr.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163oqtxydcf.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163cinauhmf.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163syujhoyv.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163rgrnzaqd.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163ijnsvmbv.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163nebjjpxo.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163yydkgsyt.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163swfezmww.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163xymimlsq.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163cirtirbd.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163ffbcsjjg.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163qlrjjqqq.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163iaqduszp.html

[Q22] 排序
来源：http://www.sxryk.cn/163oscfggqu.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163egylqyha.html

[Q23] 分页
来源：http://www.aibaodan.cn/163zacaokne.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163tahgwmhl.html

[Q24] 去重
来源：http://www.xuanzx.com/163dkfmuxgr.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163fytpyjki.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163yqrbemov.html


<!-- 参考信息 -->