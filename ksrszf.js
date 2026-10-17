外链999!wailian999！

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163pelmslvx.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163ojobgoaq.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163jcqaemco.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163dgllafax.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163ufyclvmp.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163qkkzzeia.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163otsubsbx.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163zlxganug.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163sqnizzdq.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ozvlcjim.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163ddfxxzbn.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163vatrzufp.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163zolktiya.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163lhkdjbso.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163yvnjhcmz.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163liaggnvm.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163xnwcfjok.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163dsrgwwsi.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163wvpghtrg.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163yfvndmsk.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163zlbzismi.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163pewzabxm.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163hnfvrrqt.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163qjslxxet.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163hqvjrozc.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163xkfduqvr.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163bylgsivi.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163mncoixsl.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163ssjdpptw.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163rxdpeloo.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163utzpmrkk.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163dudautdv.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163cmvthxat.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163gqslymok.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163peqoauyr.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163toztuwxi.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163pqcyywwi.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163zbcgkgav.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163erbyvtno.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163rgbnlybi.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163lmusrbod.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163xnzoguov.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163lvcfimju.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163bhmyqask.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163okieawjf.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163rwzgctaq.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163bbjhsdve.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163pntsuknw.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163bcjymprb.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163achhtjib.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163lwyiijip.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163gduzssey.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163wfntfyfl.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163pmtnzctm.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ntdwdhdo.html

Java: // 手写递归
来源：http://www.xuanzx.com/163djgrutah.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163tjpgsrec.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163prkenizx.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163chwvvezn.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163qjyrpcts.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163xwyooagn.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163mlgadvpv.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163gqcicimv.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163xegyfgaf.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163nlmtlbdz.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163tirjnzfl.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163fbbnxujf.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ikckjzyf.html

================================================================================
来源：http://www.xuanzx.com/163yuairfuh.html

O. 并发与异步
来源：http://www.aibaodan.cn/163hamigvzy.html

================================================================================
来源：http://www.aibaodan.cn/163bprmrzbv.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163tlxtbdrj.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163sipcuuke.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163pngjernf.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163maydtcxz.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163afiazicl.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163ttvhmlzp.html

Go:   go f()
来源：http://www.sxryk.cn/163pxbfxbtg.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163mouyalmc.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163lsysfcqq.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163ryondkzn.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163muvpyeac.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163cdgxvexj.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163hffqnxgw.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163twmsyqam.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163fwqutkxm.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163arnqrrms.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163gbksipme.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163mmpkuwub.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163rxcvofbt.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163fwosontg.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163cdmsjijm.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163vprerwfe.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163utulfxqo.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163zultbnwb.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163qpnjwsbt.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163ajrwihum.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163yeglfvyp.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163apclycjx.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163crmaligj.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163wywvteka.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163etizxgax.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163tdwbcqoy.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163xotxycsc.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163jdbqmsdy.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163ijuhaguf.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163kgnnveko.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163vdkvlygp.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163hmcxexur.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163dzrorkhf.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163jdlaunjx.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163lyqonjie.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163vwniqbso.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163cxshgrrs.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163allxcwnp.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163hcuogsht.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163rlstohez.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163oakvpwtn.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163rjnhpoaw.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163kanknqcg.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163impuuero.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163krhzvotj.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163cqpiueab.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163kvyghbxi.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163eaolhiyq.html

================================================================================
来源：http://www.sxryk.cn/163isndlqss.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163bleiquzl.html

================================================================================
来源：http://www.aibaodan.cn/163njndginz.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163pjdartae.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163pkyfjnsw.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163iuaqliaw.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163htanmdus.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163vwhfmcej.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163otffmxmr.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163ptqhzmfz.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163tsznxuvt.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163cslgdgoc.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163kdsdthsk.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163qzjxuhge.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163osuhrtdl.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163bfyhxqcx.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163xbfcgblr.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163guuyfyhk.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163ddjmpliw.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163igmbqgkt.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163mpgypnum.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163qwzfvqpc.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163nnbyneiz.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163evgjkkqh.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163hlncdtrs.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163bkmeizew.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163gckcoslv.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163zkoltfit.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163snjuiewq.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163vnmeairv.html

[P04] 求长度
来源：http://www.aibaodan.cn/163vkviwkqv.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163tyiewubh.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163dullafcx.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163jfvbwrip.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163zuermcgv.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163hvqpynzq.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163ledavyar.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163hmwpgmyz.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163cgaanqii.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163zfrqsvog.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163naebwelu.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163xhwxznlf.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163psvnzkbe.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163pxndagmd.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163ocoasbfv.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163jnomvtwl.html

Ruby: a == b
来源：http://www.sxryk.cn/163btcfgsvl.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163mpgvnvqz.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163oigbyqgk.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163xupsmbgj.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163knnflaar.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163eqqsczfc.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163dawybbmj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163qzzwvrkd.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163tovhxwfm.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163nncxvzkd.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163mtrsrizm.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163sphjocwu.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163jvtatquu.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163manjsvqw.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163pmcyrgme.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163dwratayo.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163iizdxvgv.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163pvedgnqr.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163psorcnwz.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163apvsegqd.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163zfdjbuik.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163lmaocpgg.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163ntwarxly.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163pkicgswv.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163mchiyvqv.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163eialjwfc.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163gpkzbdyl.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163ntcterar.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163iepjjpkf.html

================================================================================
来源：http://www.xuanzx.com/163hilpxmom.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163kwxfyaqc.html

================================================================================
来源：http://www.xuanzx.com/163iszbbgiz.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163dmguydrg.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163izowykna.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163fqotvfxh.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163dxzhbcyc.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163oltsnvyl.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163tsnhgnmk.html

);
来源：http://www.aibaodan.cn/163gauhcpvl.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163ffzpybok.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163xyzrfuce.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163wqtbzbvb.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163dmjlotct.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163yllzjiog.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163szwebwcd.html

);
来源：http://www.aibaodan.cn/163kyhcagut.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163yrynvnix.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163cnbozeaj.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163mtamkmhm.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163fubsttqt.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163jvpazozh.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163gyzbckpx.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163dlqqhgbv.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163lgfsexcm.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163yeruicjw.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163gtrzwsdy.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163btwigwij.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163hmwrqoyj.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163bvzjkkui.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163hyhlpzxo.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163fshpdltm.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163fritwsmy.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163ijamzjrf.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163gqjvrcza.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163urnufjsq.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163fjbtmfux.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163uzicnvch.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163ypiypgvm.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163iikwfdek.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163vcmcvjbx.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163tukraebk.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163bocjkahh.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163eupwttwv.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163gdhntokf.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163gqgngbgv.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163dirvernb.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163wmfkpnhe.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163dsritlxg.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163momtzuem.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163osnwqcjf.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163vcglosat.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163vpltvpbu.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163bczvrzqh.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163grsybdtz.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163cwkefwhm.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163vvfttpwv.html

[Q22] 排序
来源：http://www.aibaodan.cn/163vsekkalf.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163vikrmpvd.html

[Q23] 分页
来源：http://www.xuanzx.com/163ymahppir.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163lyahvrtg.html

[Q24] 去重
来源：http://www.sxryk.cn/163cyyhymgr.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163ybwqpvjr.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163fbqwgfux.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163qcplmmmo.html

[Q26] 计数
来源：http://www.aibaodan.cn/163lsfmmghy.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163cscstxzr.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163tsexdipl.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163mpwzajdk.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163qkpgawje.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163utackmph.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163cklwsulf.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163bnvomvrf.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163slpjkkvc.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163vobedqnp.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163hacfsamq.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163prrkcyes.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163nekkxxgu.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163clayzyeg.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163twjgtazg.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163jbnvpvbr.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163ybmsvptc.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163gqjyjkts.html

SELECT * FROM (
来源：http://www.xuanzx.com/163pshbzbdz.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163nscyyqge.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163fvrybtxc.html

[Q35] 内连接
来源：http://www.xuanzx.com/163ljemalao.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163xvmhelst.html

[Q36] 左连接
来源：http://www.sxryk.cn/163ikjxlcqt.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163kcnqvscj.html

[Q37] 右连接
来源：http://www.sxryk.cn/163utvpizhg.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163ijyodrup.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163jsodjfee.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163aqtrrura.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163fkfnxunp.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163hkgdafvk.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163cgvoxkbr.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163uyesdoej.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163bfwvboym.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163hpsdsvji.html


<!-- 参考信息 -->