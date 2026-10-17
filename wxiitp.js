外链999!wailian999！

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163kzvmscyj.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163hdfzipnl.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163qtpgzwyj.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163uypgkahi.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163ptuafncu.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163cthsvfvx.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163cbroponc.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163wmligbze.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163wmitgbfw.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163ntzmoeae.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163cudrjjzc.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163faqwyksu.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163osfprofh.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163xnkstsem.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163pqscqthc.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163sxiimmdc.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163rfphyjxo.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163rilkotrm.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163iafwbeaf.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163qguviwfq.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163ubxpoiro.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163iswvvspx.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163hedqgswk.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163emtgrevm.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163jgkpyzby.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163ntkgljgr.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163ugneaefc.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163cydpxfvc.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163qattkdkt.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163mutghbfn.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163fbvfqhzv.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163vwveuier.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163ckrbnonj.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163alroikpy.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163xfravgjq.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163vafpxcjj.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163ycbvlghp.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163ijattivh.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163oxyaikco.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163mndtexbi.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163qwtxwdno.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163moetpjqd.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163roizgqcw.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163gpvdmqmx.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163lntkmnlq.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163cxlxkfia.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163ungttdwl.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163pselyiem.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163xaigkutz.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163sshajnrb.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163xfgnreyj.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163hptndtew.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163npyrfxky.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163lrpsusue.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163ajkntxgz.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163sohrwail.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163hcvnvgns.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163cjfryljr.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163kzhpyzds.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163jjilrbqz.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163posnpvjh.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163oceoskgt.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163uiboawzr.html

Java: // 手写递归
来源：http://www.xuanzx.com/163mmcbdkol.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163wsthmkpp.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163smvmihsm.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163lvehhcji.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163ahncpjwa.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163slaawrsu.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163qpykrndx.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ouufrerc.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163luiqxwlu.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163lecghdoq.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163ptbezxhk.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163oscprnmz.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163woetlqyq.html

================================================================================
来源：http://www.xuanzx.com/163bkmyilyp.html

O. 并发与异步
来源：http://www.xuanzx.com/163nmmhddfj.html

================================================================================
来源：http://www.xuanzx.com/163midpspbb.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163gdfuurft.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163wtjplfmq.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163umyyvtfc.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163drbdplwx.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163nfbkqxmz.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163ljfzgfsy.html

Go:   go f()
来源：http://www.xuanzx.com/163miulmymg.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163ntiozwzd.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163rjkastet.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163ywdnpddp.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163vjcqweap.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163eilhsbio.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163rtwpejyv.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163pilmbywi.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163aoahnwrt.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163wdilfndh.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163usnikyba.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163jbjyayyr.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163kpsnrkhw.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163bnmetcue.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163mvwudkdb.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163lywnunws.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163iekmxjyx.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163bhcyxhww.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163qarmyqax.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163wcdscxhf.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163lfvhdotf.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163anrewcnx.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163mkdclrfy.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163ylsvhzgl.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163yqsogyoq.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163yyfhoequ.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163lglantow.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163afydedts.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163vplpdfdk.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163jzgyzyhy.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163zayyzjcn.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163xqqkqont.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163tbmjzujg.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163jlegxbuy.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163oiujjljl.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163ukyjpeas.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163pnccncef.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163gwnestmu.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163devvyzhu.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163stzwdbmg.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163ijkeccxv.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163lgegefbh.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163shrfakyo.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163jnlgknrf.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163fxecgcid.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163dsedphfj.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163xyfiwbtu.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163fimkgytz.html

================================================================================
来源：http://www.aibaodan.cn/163dcdyhtge.html

P. 常用工具函数
来源：http://www.sxryk.cn/163aylwenzg.html

================================================================================
来源：http://www.sxryk.cn/163zrajqist.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163gljwpnpm.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163jgjfkvrx.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163fbnmeear.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163dblamopa.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163hxgtgupx.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163qtzsakpy.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163gtzdshge.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163xlfnvatm.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163vkqhlbkj.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163jwjpsong.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163mrlaskpu.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163nbwxnrcl.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163qmeyjgis.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163kxaeiruc.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163xrqrdatz.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163tfqpgyfg.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163beacwvxr.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163rdgzejnn.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163jyzfdldk.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163ybgxwtef.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163ibkskrej.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163xqoospdx.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163uvysjbvf.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163owubeknk.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163tszxifwh.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163svbkctzd.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163ejhwutmf.html

[P04] 求长度
来源：http://www.xuanzx.com/163svkctwuh.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163iutcjhwn.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163tylrstge.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ihtzfnzq.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163bsuyrhor.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163djhtpznm.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163kruqeqbp.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163tdonzwbk.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163ckgoakrr.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163ziyuzwpw.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163tbrjbhnk.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163utilbhzd.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163putyjuof.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163lyxmjspu.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163vtlrpgxk.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163ftkmyfau.html

Ruby: a == b
来源：http://www.aibaodan.cn/163babwbvxm.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163segilbxb.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163zqitrhzc.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163zhttszjl.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163azfxxuby.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163ukkqzbpm.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163snbcdozl.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163nozmehfb.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163waajfdal.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163ulkwkqhp.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163hfzlgdcu.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163jxjwblrq.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163ugcocoyp.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163uhlscomk.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163dinmsrmr.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163djghuyih.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163iyayxjuf.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163ylbatqva.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163sgftdnmg.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163hehrhcos.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163hwpikpfd.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163aczawnzn.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163rdrzaadn.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163tdgzjyhh.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163omfswyqx.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163pmoqngxd.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163rmzlsigk.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163jssenwcf.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163zzbefzgj.html

================================================================================
来源：http://www.xuanzx.com/163eefudesp.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163sturtmzk.html

================================================================================
来源：http://www.aibaodan.cn/163tbqomsrk.html

[Q01] 创建表
来源：http://www.sxryk.cn/163irgukzff.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163ivqzzlyf.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163lhwmuhcq.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163gxnodcjw.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163mtivjrlz.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163hjxcsqwz.html

);
来源：http://www.xuanzx.com/163zscppzoj.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163feyxbuxr.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163yyqgivqn.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163zknztxvq.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163tmkqbwyd.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163eghzurcb.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163hdezkkii.html

);
来源：http://www.sxryk.cn/163tilnjjrr.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163cwzmyjlh.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163kryhzzgr.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163xyeoxtgi.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163sjsbrhvz.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163tmxazrwf.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163qjadkjys.html

[Q06] 删除列
来源：http://www.sxryk.cn/163yocuxzik.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163bcdavbem.html

[Q07] 删除表
来源：http://www.sxryk.cn/163ylgkhbsl.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163vrwjubtp.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163ryxttswd.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163ddyswuuf.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163ahcbsjff.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163wbpbtqkd.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163aatmrhkl.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163tofqdkwm.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163tryxxylj.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163mlalbwxa.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163ovcxwiql.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163ogshemff.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163gexwidtv.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163qdmqgsnw.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163bxkcinmg.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163fnixndtd.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163rrdvxjfa.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163hhgsbcnz.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163lwvgvoki.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163sgrvqzzh.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163syzpzjlg.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163ntqbuqhl.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163eksuicdo.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163fwjcskgx.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163tydnqaeq.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163zuhvxisq.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163oolwvqpn.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163lcuzhkxa.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163hvjfebnx.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163kwtqsomn.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163fuwckkou.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163rjyqohpw.html

[Q22] 排序
来源：http://www.sxryk.cn/163wzftdutc.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163ttkeemhz.html

[Q23] 分页
来源：http://www.xuanzx.com/163ncqpdoam.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163qcxmcknm.html

[Q24] 去重
来源：http://www.sxryk.cn/163aotsgqwn.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163qbgkwrog.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163asgwcdct.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163aszlorka.html

[Q26] 计数
来源：http://www.sxryk.cn/163niglbnpy.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163knpnkemb.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163kvrjbyyq.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163pdgxuncp.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163ctnbodzf.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163tcjwjxuc.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163ccgflzql.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163okxwsnot.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163bxusyaju.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163qrkawfvq.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163ajtxtqst.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163dlilhwhz.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163vckxtrrl.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163xtpfepgw.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163nurnahfg.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163dpbctrim.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163dzvkpkmn.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163cxdjxedb.html

SELECT * FROM (
来源：http://www.xuanzx.com/163utphkphk.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163dieyvujp.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163egiivvoc.html

[Q35] 内连接
来源：http://www.xuanzx.com/163oqpxdiwo.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163akwcnfpy.html

[Q36] 左连接
来源：http://www.sxryk.cn/163ukqxacvf.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163yfihjtba.html

[Q37] 右连接
来源：http://www.sxryk.cn/163exyvnglr.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163fweoxabw.html


<!-- 参考信息 -->