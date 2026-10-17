外链999!wailian999！

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163rvqsomig.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163jkmcjvwa.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163cauryrks.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163pqbnqler.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163caexmbyf.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163jeportqm.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163ilxutphv.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163rmwvzonm.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163irvhkjch.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163lcbpfncz.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163eapqwdzl.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163dqbouodm.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163wuryxghg.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163uzgtrxup.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163pppbshqt.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163btptbgck.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163tvnjbqzp.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163dlijqivu.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163pykiqxpf.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163kfowptlj.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163orlowlki.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163trqofssk.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163wtxazonu.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163vrmbuilf.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163adnwhpim.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163houuztwf.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163stsiycfr.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163ymwmdcvv.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163tanxbgfb.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163jyscgjru.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163qqjhswfb.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ynrlpmvb.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163owsdusve.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163uzolemmm.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163wwulqbgm.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163mctxabzc.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163ptywiypa.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163vdvbmugj.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163wysgzmcm.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163okbyknfi.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163mehxwoxy.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163mlxerujx.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163azdamuzp.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163irckzqxs.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163dnmwodjx.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163lqorwiju.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163cehooyeq.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163irneisjd.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163ncsiquru.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163oefwwvoh.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163ldgwmmiv.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163gwczqfhb.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163hllyssra.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163uqgupaqj.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163tduuktpz.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163bsbbkynl.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163uvmxqnwz.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163fbdxdcfy.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163csgkuxet.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163vktrlrly.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163yqdcqqls.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163omreemyx.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163gakaokpk.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163lruozogr.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163jnrqxyre.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163ngwmkahs.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163zfdmxcev.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163tbdyhbvl.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163kdekgwwk.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163cdyivbnz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163ekytvzyt.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163fmmyggty.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163zvnyybqo.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163bejdnhcf.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163tgueabuq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163kcoxmloy.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163beihgofb.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163hnniuwax.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163ldgylwbd.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163hgyxzjto.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163ahusxdtn.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163dkpipfsm.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163fxfbpfrx.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163mkxchovq.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163fkdhypwi.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163zjtrnqmg.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163jvdudtkq.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163ulxyaoln.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163oejalhoo.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163ygzzzrar.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163wkcfhvum.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163jkkgghoz.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163rxadgmdu.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163lracoesx.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163jhxtldhh.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163sqtzeedu.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163fiqwmxdx.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163kesctxvd.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163rhfdjtsp.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163yopfflow.html

================================================================================
来源：http://www.aibaodan.cn/163pdqiqoaz.html

O. 并发与异步
来源：http://www.xuanzx.com/163xrlrksgm.html

================================================================================
来源：http://www.xuanzx.com/163mgrdiqbz.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163cgogqsap.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163vytrruwn.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163fpgaxwsj.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163wlwkevfc.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163dmsqbsnh.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163cfligixm.html

Go:   go f()
来源：http://www.aibaodan.cn/163virnlxoc.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163lofpvupb.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163qazdpmll.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163vshbbqxc.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163ikeklxgj.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163mdmvkscy.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163aeqqxpmk.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163hhioavgh.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163asvjyaou.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163fxnodqpd.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163rgwmodyb.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163qdqepsbz.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163ieltgqen.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163ndjhouzo.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163whazzqtj.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163oinvphom.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163tkddtclx.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163kkscrkgv.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163ggfmgccu.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163vbjlfwof.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163oltrgjqi.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163rsykjyfc.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163hszzjmjz.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163azwdnzav.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163zutpansy.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163iwswesqz.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163udqjkwse.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163jbohsrov.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163sykleqok.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163kmqmnoac.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163yotpgwio.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163zqaffoaq.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163qnczrpbr.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163dcrgmvyh.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163fhymhxdo.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163koioktze.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163mhmcdbmj.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163uqxuffpz.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163sprexfvk.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163mzlkuyql.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163ondyjbef.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163bxgqvwpa.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163cecarqvz.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163nvqkftrf.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163xrwfigoz.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163wkqrefih.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163uzkhzinv.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163swglbqch.html

================================================================================
来源：http://www.sxryk.cn/163tdlnrngi.html

P. 常用工具函数
来源：http://www.xuanzx.com/163bcgbollp.html

================================================================================
来源：http://www.sxryk.cn/163oeqphoit.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163khiohyby.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163eerzgmhz.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163aogoydxy.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163apepklcm.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163bvcefmyn.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163pmtdovww.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163zmyjyvcq.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163kirjmlcu.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163tikrnsap.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163xrnxmllr.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163hergklza.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163cgjhmgqz.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163cerjaqhb.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163cehmacau.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163xbvyuihp.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163olbogrwr.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163qgwdapns.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163puixzlbu.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163imthrrlm.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163ysvfbvxt.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163bqfydaus.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163vfacgqzr.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163yelizaen.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163hznyxfjl.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163wnzdtwfh.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163fznxluzi.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163ysqzwkxu.html

[P04] 求长度
来源：http://www.aibaodan.cn/163cxsnlsmg.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163yofoicjx.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163vdxadyuu.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163rveruayk.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163lnypgugv.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163gzzhrekd.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163kzwrudll.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163mmkijemv.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163tqeomktu.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163nnqdkhjc.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163biyslpff.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163hhkhyzwb.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163onvggswu.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163elvrblth.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163ijuxafqu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163fxbbpwji.html

Ruby: a == b
来源：http://www.sxryk.cn/163gqmkrmiu.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163adiziiil.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163esomseje.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163rtquosgi.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163zheyzryg.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163zsletjzu.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163yisoywrg.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163dmjtjiyx.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163cfahkbwv.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163alldordv.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163ziheyjet.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163jljqwajq.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163hotoxtba.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163flvaalje.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163hwymihyu.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163dosusirw.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163hdqiippb.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163fjaujmyv.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163skhaqzzf.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163qzjgselh.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163jranjjyx.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163inqehnqv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163xilhmdfw.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163xwzxhopd.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163hfyxnrmv.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163ypmrmljg.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163echxnpcr.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163maccffcb.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163hkxgegtz.html

================================================================================
来源：http://www.aibaodan.cn/163xdzrhwfq.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163ifclmjvu.html

================================================================================
来源：http://www.aibaodan.cn/163udlduscq.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163oifkaqxd.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163ehvmdzfe.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163dkddlxcd.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163lxncfffa.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163faswzgaw.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163gumdnrtg.html

);
来源：http://www.sxryk.cn/163guvgvcrq.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163pxltqhfs.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163ufzvarjw.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163rtgiqpgj.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163vqzexdip.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163ivlrpcgb.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163nrqfiwdo.html

);
来源：http://www.sxryk.cn/163msppueds.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163oxyjevrb.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163zmzrbggv.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163yfsuaaaw.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163rltzytlv.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163qhumhhii.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163zkqaxcxp.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163srdkbdid.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163jtcsvyjx.html

[Q07] 删除表
来源：http://www.xuanzx.com/163snflyzpc.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163yzyarcca.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163uotjvbbs.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163cgovsuvm.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163ifwdkioy.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163bkidphpl.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163onymyyfx.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163uqkzsyqg.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163qlxwcwzp.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163fggkkoph.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163dabtefva.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163sfsqypdi.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163yndntlau.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163tuhqslcz.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163hzbomfau.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163iorslmjq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163pvimmvsy.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163okvgrcty.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163tpermklg.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163plyiijpw.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163vczlncaj.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163vgnhmjdf.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163cgvnfddz.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163qraxaagq.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163aopgdllu.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163pghfhtri.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163buqoljwl.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163mymqcymw.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163yqazemxm.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163mmhodawe.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163sltupeow.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163fzgrxhnq.html

[Q22] 排序
来源：http://www.aibaodan.cn/163xheglfdn.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163ojymbesm.html

[Q23] 分页
来源：http://www.sxryk.cn/163poflinkz.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163qaqehjja.html

[Q24] 去重
来源：http://www.aibaodan.cn/163bkdyoqve.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163mapwzapx.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163pmsfmflr.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163zlcsudsf.html

[Q26] 计数
来源：http://www.aibaodan.cn/163kdawlwea.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163lghgujgt.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163djkwdcpu.html


<!-- 参考信息 -->