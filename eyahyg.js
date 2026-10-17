外链999!wailian999！

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163uydtvmvo.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163kypgahrc.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163kautqtsu.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163gjzfebnb.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163ogpjimzj.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163umkkdfme.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163mofpdvzo.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163eefhhgws.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163shkqtyhu.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163wjzoeowt.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163ohwcnoog.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163zdrhtxfb.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163fxucndoh.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163umlshibl.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163txljdncw.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163vyvmtvjt.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163gpwrlckp.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163vunaysmp.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163sbfqixnx.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xibwqknd.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163jhjflpad.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wurajinl.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163aqkdsvfn.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163xwxvcgov.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163umwiepbf.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163vswawzxr.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163xjsegatd.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163opsuarla.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163ehzxpitl.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163iilehezd.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163gfbnvfgo.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163wnsitwgn.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163atydzqkz.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163gshohzvl.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163xuolfznc.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163aqiqzxzb.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163roknouig.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163smkhbchp.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163jqchjuxy.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163mkpdxyee.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163qusknijb.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163otlhuqrk.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163xjguyall.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163alyijmbk.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163owvjmokr.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163nccwvvjx.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163yqacgabc.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163mjcdmiis.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163tbyqdzky.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163mariwtoy.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163agrqsnbw.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163cowborzg.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163muhffkds.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163mfkqakvh.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163egrqujwt.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163vfazttok.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163itdocmcj.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163dfnrzwqk.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163bohxqljz.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ovvqektz.html

================================================================================
来源：http://www.xuanzx.com/163nursegmf.html

O. 并发与异步
来源：http://www.xuanzx.com/163onwruwed.html

================================================================================
来源：http://www.aibaodan.cn/163elfclang.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163hbulzfsy.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163jbrmxjdd.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163gwzpzacy.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163ydtplqmh.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163rgqcittg.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163gdefrfbt.html

Go:   go f()
来源：http://www.sxryk.cn/163ogawwiny.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163dbqhfatb.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163xsssdcsb.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163easjhnkd.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163wiuaxyso.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163asfnzmld.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163lhrhzevd.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163rpjrrosb.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163ljfntmmo.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163thbloryc.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163xcesxzfe.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163ftjfctpi.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163smjbtwnr.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163shneeqnx.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163zbiwcoai.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163pdoyxpbu.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163aibpnsop.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163jeebpxio.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163vzqyjsgb.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163rnjaahlb.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163ordtyiui.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163rqukdksy.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163tqqibhyf.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163rdxtgncf.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163lkmjhhbm.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163hkojjpyy.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163xlzjwatu.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163duhqitcm.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163iwvfrtek.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163amkyxlaw.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163eycdzyvh.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163uyoetidf.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163fcceavzl.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163lystpjjx.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163xbbydkzi.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163vjtdyaub.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163ewwbhavw.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163grieozgm.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163jdajwgmj.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163imwhymgn.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163ncyrbzan.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163gbmitrol.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163twxeusuo.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163vigatwfk.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163hiandxgw.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163zqyxlzfv.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163ujouxdjv.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163xmyakcjt.html

================================================================================
来源：http://www.sxryk.cn/163tywgtqgy.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163yrevktnz.html

================================================================================
来源：http://www.xuanzx.com/163ihmqjcrz.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163fjokztav.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163dsmpucti.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163arxzrcfm.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163woyurtlz.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163xdfdykto.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163ikiwelwn.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163ljcghlui.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163fbtkqzvn.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163mngwklcq.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163uxuszqft.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163gmbggefh.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163excsuwcj.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163eppcwexk.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163vbwlimsr.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163hciwyhmw.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163jcjuacux.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163obuspvcz.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163vqrxfofc.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163yrbmhswn.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163qwaaopwf.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163jktfunrb.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163wdtwvnrl.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163laolmyno.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163lapdokva.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163zztebvcq.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163mpihauat.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163vyhulhyj.html

[P04] 求长度
来源：http://www.aibaodan.cn/163raenbcqc.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163zjuhwvfj.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163utvvwhae.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163yriopkno.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163gqevsmgq.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163rjhsvfta.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163ewtcotnx.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163rrvjpncl.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163xwsvvwtz.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163deucgppi.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163ooxugyri.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163plvhlzuh.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163yxpluead.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163xbmbhtcu.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163rmjseyep.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163jqrqwauz.html

Ruby: a == b
来源：http://www.sxryk.cn/163sklnktwk.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163edwndjjs.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163lclqjjgl.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163amtllevn.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163zddpzbfs.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163kxdsbbpj.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163jxnqnrgm.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163knyxipom.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163dmticicm.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163iquijpsl.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163adjkbfxk.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163preltweo.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163cdqenbdd.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163oyvyjxec.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163zonmgslo.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163fhlzhees.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163crbxactb.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163hydhtcos.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163ketuomwq.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163kizmoecj.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163qwhwtkkm.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163azrxywcc.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163axdscsai.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163ukqwxsbt.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163qydwsktq.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163jrczmrcq.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163hiawcure.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163zgzojpby.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163iueleyky.html

================================================================================
来源：http://www.aibaodan.cn/163mbhwmcnk.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163izjyvlze.html

================================================================================
来源：http://www.aibaodan.cn/163tcbjksdh.html

[Q01] 创建表
来源：http://www.sxryk.cn/163tklufkgu.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163murozujb.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163xbjyvael.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163rhgyhrhk.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163keaybqii.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163yvcpuaff.html

);
来源：http://www.sxryk.cn/163kakimfja.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163ycyaluad.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163rwuahcou.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163brsacudy.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163ytipzols.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163wcqgygsr.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163dwxusjkk.html

);
来源：http://www.xuanzx.com/163qvlwztwi.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163winxdnqi.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163orgjjimq.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163dxcqarpp.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163ohsneffh.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163fsvawils.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163vqceubqd.html

[Q06] 删除列
来源：http://www.xuanzx.com/163rggqtrva.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163illmmwpa.html

[Q07] 删除表
来源：http://www.sxryk.cn/163nbbnsrgo.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163sesemcwu.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163fdpttpqe.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163dqtyvzxo.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163dbspwbeb.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163vrjymkbh.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163eqrowbxp.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163hslhxucg.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163nudtmqkg.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163avlpbqjn.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163mljrzqlt.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163fgoffikh.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163gellangz.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163pguzmhia.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163zmwcocnc.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163baypqlfb.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163hnldkzhs.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163cqdnvjlh.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163iqctkkjl.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163chfdkmaf.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163vcjoljui.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163ezgucpeg.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163ifaqkpty.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163netunber.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163qzegmrqr.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163ygmmuagx.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163gvlbsmnq.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163ydffesqf.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163qignftod.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163zbnqsrcl.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163jokradxj.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163abivbhhf.html

[Q22] 排序
来源：http://www.sxryk.cn/163yaohhjhr.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163uxxumhwc.html

[Q23] 分页
来源：http://www.sxryk.cn/163wepdtsve.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163ibopqutq.html

[Q24] 去重
来源：http://www.aibaodan.cn/163kvmodgmk.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163hajbffee.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163fxqccjdf.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163bkkfxkjj.html

[Q26] 计数
来源：http://www.xuanzx.com/163odyfjfxo.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163dtyojnbi.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163ptdxjqcx.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163honohdfw.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163gtkufggk.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163lwukotfm.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163qepdpbio.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163xcwsimyu.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163cqcbacgj.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163zpszeoam.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163rrljzxmj.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163gxhyidia.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163rqjenuqk.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163gtgutypv.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163vayoxaeu.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163cbszmynp.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163nbmtnmff.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163wtqhlckm.html

SELECT * FROM (
来源：http://www.sxryk.cn/163gwgrkkrm.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163rdqzkovc.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163jqofxhut.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163ukecvvhb.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163miekegch.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163ogcfwfbo.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ibepnlcf.html

[Q37] 右连接
来源：http://www.xuanzx.com/163cziudcrt.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163autkrjhp.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163mlyfkehc.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163ecoavyke.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163zcrbqlwo.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163tpgbkynx.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163wsbzqjba.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163fdvxcfdx.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163dxugbdls.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163tcypithi.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163bwozmytb.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163ivelhpin.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163mexavvir.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163xnvefwvr.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163vgecroiy.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163qjxigjsw.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163lcpemgyp.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163nffibdap.html


<!-- 参考信息 -->