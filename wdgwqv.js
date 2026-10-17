外链999!wailian999！

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163jjxnalfm.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163uijqtmdn.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163hymqpfmz.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163dmqndmcy.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163oxhwnvyh.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163kpbqqsml.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163hrryknmb.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163nxaslrvf.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163fmlwuvdk.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163zwcsligt.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163kqdazwoa.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163liizturr.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163cdtqpazr.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163uuzqgndh.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163henqicdd.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163lyhouulz.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163cfxtmgut.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163laelsayv.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163fleuqzon.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163eqojqkll.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163awrkkuyq.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163monrqkic.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163eahregen.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163wjhxckcm.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163ubxswcyl.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163wmymcurk.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163yozdethj.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163jsicxfao.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163hfitmbqy.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163agyflurg.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163qpcfapus.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163lpnqcpgy.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163nqkgarxh.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163jyrazljv.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163wtianplv.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163cxwgutza.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163ecrqeycp.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163jomfeaws.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163gcjllryp.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163oycgqyhh.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163glzvegsz.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163jjqtvkfc.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163biucvfte.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163dfwecmyf.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163sehubgzd.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163feikgjzn.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163ckewglxx.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163zkuojqoe.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163sgrdaatn.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163zfftjwje.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163paaamwgm.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163nwhngupe.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163xrngkksb.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163qdrpelyw.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163ohpxexbd.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163immwycih.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163qfckjwbt.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163ejfsgrwi.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163ujsrjjcg.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163qtvuiwex.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163crwkowuu.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163kdkegrfr.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163rfjokkld.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163mnqwhupr.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163ucvzshtt.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163mlqwosve.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163sioqkztb.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163bswhgkdc.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163vbjelkip.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163dswirtmn.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163rsxbensi.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163fweexkiq.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163gkgbhxzc.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163vupnzqeh.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163aaqyqgwp.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163wrpqmiga.html

================================================================================
来源：http://www.sxryk.cn/163nwmghhha.html

O. 并发与异步
来源：http://www.aibaodan.cn/163zhdbartl.html

================================================================================
来源：http://www.aibaodan.cn/163hdszqhua.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163gzgeuqjy.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163ylehcqgl.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163wavnekhm.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163jwthmwoe.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163eoiwfbqa.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163avmmyblw.html

Go:   go f()
来源：http://www.xuanzx.com/163bmqoaqnd.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163irmzulcg.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163mainhvfu.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163wahdruet.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163guvguvac.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163dgwplcge.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163lnbkzprb.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163waxdxfqh.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163rqzdxugi.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163dfoxxdwo.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163iskeszus.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163urhxecol.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163exzjxauw.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163zbiyxadc.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163mbvuuzgk.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163ppwafasx.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163uzzhxrvk.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163azcxdbjr.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163torpripx.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163ephnjbse.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163zgxvwthl.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163ktbamhql.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163jujigywf.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163qabhscxj.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163vfuyoclr.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163tpogfcsl.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163bfelhhtx.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163cwypvrhe.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163cbjvzxdm.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163uhdfbhpu.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163twceulyh.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163mkddrnkq.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163tkqzmstv.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163sazsvvhe.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163pttublwo.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163gexugvgl.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163hkksymxf.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ltrjrezd.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163qomrifkx.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163tqonjxvm.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163hqmmbbon.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163stymrshp.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163vujevjbp.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ikyfaonn.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163weymipwk.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163jmthmnqy.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163intdorjg.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163ejqhlsie.html

================================================================================
来源：http://www.sxryk.cn/163cdtnlgbe.html

P. 常用工具函数
来源：http://www.sxryk.cn/163gykersye.html

================================================================================
来源：http://www.aibaodan.cn/163eygbenmw.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163cdgozotj.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163cdpdafbl.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163ngzxekix.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163voisdbih.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163unrtvsbm.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163luphxlbp.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163fyszdpcn.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163lpyyrdzb.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163qbtvaeur.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163orwzmuqf.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163ugoahpcv.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163rdejnryl.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163ogniwsje.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163iommfbnm.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163caqftdqj.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163lzjptxcm.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163zbmlvmyd.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163ajijhhgb.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163lleybbko.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163cnwshsqp.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163yzkdayeo.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163gnkoxocd.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163yrrekbys.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163paoymehv.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163osidzlti.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163cgljabtj.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163houmzalf.html

[P04] 求长度
来源：http://www.sxryk.cn/163nkmbtxuf.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163zeofqdod.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163mnutdaql.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163dhsaqzfw.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ugeycljl.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163lbpgqrur.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163nfvnrbho.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163ypawggyw.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163ymwhahnf.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163clanaheu.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163tznizmvc.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163afwvqfqm.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163aixaqvus.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163klijrtrv.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163pdjqssec.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163drvqympq.html

Ruby: a == b
来源：http://www.xuanzx.com/163potcracj.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163wuhljfns.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163rqxcsonk.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163rlunjurh.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163hctuniyp.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163cqdonmfv.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163fmsqmzar.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163eomftvxx.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163mmwprzet.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163knacnysx.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163opwwualu.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163qhgyxcbw.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163frevrkwi.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163pxgiopan.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163guluzkao.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163vfihjlnq.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163bifbojdk.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163qvlpmnlc.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163dpvjfpto.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163hcxqcdph.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163bdedsekb.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163xhivigap.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163ditbgjha.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163zdxnmspd.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163qwhxhspq.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163tujxibjj.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163ywnikiiv.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163ducqunbw.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163ilhmzyea.html

================================================================================
来源：http://www.xuanzx.com/163lvbbvagw.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163xohgwfei.html

================================================================================
来源：http://www.sxryk.cn/163sggeafkt.html

[Q01] 创建表
来源：http://www.xuanzx.com/163ydcotuef.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163dzkuzzvx.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163wddsgzgm.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163udpbcjdz.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163uemqlrki.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163rzzkfkpb.html

);
来源：http://www.sxryk.cn/163ksdywgul.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163vdpyihtx.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163ndcydzrp.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163jbugkxpa.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163adkodyqz.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163hlixclsc.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163ngwwcreu.html

);
来源：http://www.sxryk.cn/163eafhzolj.html

[Q03] 增加列
来源：http://www.xuanzx.com/163lebyqbdd.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163qxcrkltq.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163evhnoojn.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163zsbojbxj.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163ttdwnmpi.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163ksgfbano.html

[Q06] 删除列
来源：http://www.sxryk.cn/163uslwzyhd.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163insripeb.html

[Q07] 删除表
来源：http://www.xuanzx.com/163uyzvenjd.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163nojbmqzd.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163dopuhuay.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163pfnlfoof.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163epjvvhqf.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163qodxizxp.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163fochwhgx.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163xvkmxfyy.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163eumryhlf.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163bobvzxji.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163yeuaukqu.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163xcmqsneo.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163vlykksfi.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163xvcqgvmp.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163uqcuvldn.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163syqfzlmf.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163fgotlydn.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163ixnwhkjd.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163bxhkydlz.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163ayfuadsz.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163gpfndjyw.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163rkhsiyli.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163rdgwmvql.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163rchkdsha.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163aqxycxhk.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163spumtzuy.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163wgtfvryx.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163yxupgboh.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163zqgllnly.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163kxtgwori.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163emvdntfh.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163pvzjbgpp.html

[Q22] 排序
来源：http://www.sxryk.cn/163jvakpxor.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163bforqofq.html

[Q23] 分页
来源：http://www.sxryk.cn/163rkqjhajr.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163nwigxtkm.html

[Q24] 去重
来源：http://www.sxryk.cn/163zabhfitq.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163btuawtuz.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163bfqmzbpq.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163ifemcmsq.html

[Q26] 计数
来源：http://www.sxryk.cn/163agwiwzgv.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163xzznfyrv.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163qmzzyldk.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163jzakksae.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163ljyjdtwz.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163xaslzucm.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163ievmgzuo.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163yrjpgdea.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163ncuwvgft.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163xolqirly.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163krggpxmy.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163vwhjxgur.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163ioljdhqs.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163xamzdndy.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163mtuohmwy.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163fucpnsqc.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163nszhjusk.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163atjauzld.html

SELECT * FROM (
来源：http://www.xuanzx.com/163qrbbmgfn.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163dvofewre.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163hscbgqno.html

[Q35] 内连接
来源：http://www.sxryk.cn/163ftsfjsru.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163yvbuclve.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163gexangto.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163gyhqdpva.html

[Q37] 右连接
来源：http://www.sxryk.cn/163ayerpeme.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163hanuthpb.html


<!-- 参考信息 -->