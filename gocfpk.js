外链999!wailian999！

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163lbrkcoye.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163rpmlkmmc.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163oasuabor.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163mlcpywaq.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163wqiitame.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163racwuzdl.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163dqckefkv.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163lnqnbesx.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163zrawozfc.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163sfkmgmmc.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163fvowzifl.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163qafswpzt.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163rmjmagpd.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163mfeywqvo.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163nwtmvzgf.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163aimtaure.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163vcyrfqbi.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163swdfgxgl.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163eifvqsjz.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163tqnvxjfc.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163adlvemru.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163crpzldfk.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163tkppmhng.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163levnvbqx.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163gkvgpzqn.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163zrznnhtk.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163tfltdnjt.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163kvuznohn.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163faozcnsh.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163lypbfyyy.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163mfbotqge.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163hmxzwgta.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163gnlcghps.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163ptozxttn.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163ckkbejzo.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163ftthfscg.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163zreibtcl.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163mxmbrdhp.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163zwxtwrzn.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163estmsxzb.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163doemysja.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163vzgjapas.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163lhajhiau.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163htsmsfjm.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163nevydajs.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163wvloelrg.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163tmefcrkd.html

Java: // 手写递归
来源：http://www.xuanzx.com/163fbiuhrsf.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163lnkjanfx.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163uwedqxbh.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163zcmtjukf.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163vbfkqsfe.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163ritnstgr.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163yqcwzitf.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163lolezljd.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163mlwpstfr.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163rpqcenpv.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163uvuxeqdw.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163cxygqjky.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163eoglzppl.html

================================================================================
来源：http://www.aibaodan.cn/163ignzmwwn.html

O. 并发与异步
来源：http://www.aibaodan.cn/163nwnziscn.html

================================================================================
来源：http://www.xuanzx.com/163vdcuephf.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163jejewmfk.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163rsxdiwbb.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163uoxqtibn.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163wjkfghon.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163vgvgzved.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163uucyqmgy.html

Go:   go f()
来源：http://www.sxryk.cn/163kvcihmdm.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163isfmzkxf.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163dqzlmnkz.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163wzmexynt.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163zedeforz.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163ualphfvg.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ubmlxpld.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163dhazhjpw.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163haoibuvm.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163vfablebd.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163jksbiziq.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163ftvcnspn.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163vvzthecu.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163ulhlwhxe.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163oxflfpip.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163mdybuyza.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163jhacmnsg.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163frwwjjwi.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163afxhynda.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163ptxyitsk.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163wtskpgpl.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163odwjjape.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163qyelvlrm.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163xcgkpzct.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163trnspytb.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163auhszxax.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163notuxvhc.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163kahvyrna.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163nafwrffn.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163hrduipyg.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163zokzjyty.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163spxkzxue.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163hnobtnkx.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163xoauwnim.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163dquyoreu.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163xerqxoqx.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163btdqtgrj.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163bqqivyru.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163yvaqfpbd.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163uxhlvyoz.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163ynydolec.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163nnmclqce.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163kkaronsq.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163tctnrovx.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163iukvqdyr.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163uanffxtf.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163cxnzvxgc.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163vnzlvlhn.html

================================================================================
来源：http://www.xuanzx.com/163ozbzbzoa.html

P. 常用工具函数
来源：http://www.xuanzx.com/163hbwlrslh.html

================================================================================
来源：http://www.aibaodan.cn/163dsreokeu.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163eudvsxxu.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163cevqqnak.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163kdhcsjyn.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163vikvwesb.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163hhftzozo.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163plaemyao.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163dtopsnpe.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163caccttls.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163lkywzhvp.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163ocxwxwjq.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163qygoiadt.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163spnvgsug.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163xvuisass.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163kmlgfzch.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163ohesujvj.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163fxahsgio.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163ydkfozbs.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163fypoprwb.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163xwygnhgz.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163alqmanlz.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163dhzehosg.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163rrpbtoby.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163xpauwvxm.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163shjuowog.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163mzgsvyje.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163kjeczkfk.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163jtyzvbat.html

[P04] 求长度
来源：http://www.aibaodan.cn/163cqonjnva.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163fxsqsmvo.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163lueyuajt.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163kraieris.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163uucjwbzv.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163bdzdqwvi.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163rsutdrbt.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163peuoumcp.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163znstutqw.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163gmnupvjl.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163bpamvfdg.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163hgqwimzh.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163xtjjfdkg.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163pgijtril.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163cupsbwmb.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163efvmnhas.html

Ruby: a == b
来源：http://www.sxryk.cn/163hiijrocs.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163vavmhgus.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163vsnjhuyz.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163lmicowky.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163aobfhlvf.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163bgsvfixr.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163tngveznm.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163jlgqsfsu.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163lwltszsf.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163ufrusmyv.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163nvsyrrlx.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163pvngczvs.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163zurebdfb.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163cbtgwvxx.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163uzbrbuba.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ruvmqilm.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163ujusoqpi.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163uogmpwjm.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163jblnlpwn.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163fxhvcntw.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163gvvatjun.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163hiayukpa.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163tjahqjud.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163ljaoxfal.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163mkspnyda.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163ntrhbuga.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163dmxynwvz.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163knvxyooc.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163rxbrukha.html

================================================================================
来源：http://www.aibaodan.cn/163odhmlgmp.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163jhvwpfej.html

================================================================================
来源：http://www.sxryk.cn/163gnpudcon.html

[Q01] 创建表
来源：http://www.sxryk.cn/163xdcdncrr.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163oubhwech.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163cmpcbran.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163dgclsllj.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163ndybaukd.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163zmhdgwof.html

);
来源：http://www.sxryk.cn/163tzxhztev.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163qcbjuhbm.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163ijaukpzz.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163deszgroc.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163eilmzchj.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163wruiukpv.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163twtyawde.html

);
来源：http://www.sxryk.cn/163xjzbuzjd.html

[Q03] 增加列
来源：http://www.xuanzx.com/163mbjkxttp.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163wthdhqhm.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163bmrewlwr.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163vrwsuhwo.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163iedbrrjl.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163tchlgojj.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163vwiiugso.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163vxvibmau.html

[Q07] 删除表
来源：http://www.sxryk.cn/163kytwnhwn.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163xjfumvat.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163djtrllfu.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163bagmrwey.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163qjikorwq.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163fhlbrnhy.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163tnnesiih.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163guonkakr.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163sndrkbgt.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163zuvnwqtr.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163qufkrzew.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163kybvrkxg.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163wqfxdqwy.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163mumudyzg.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163buujdwes.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163tzjvaopr.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163oudcdewb.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163usmatkph.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163immtnfcr.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163dsvledkf.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163gcndhjqv.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163laohssmb.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163leostqcx.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163jxbdfvhl.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163pxwxcjod.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163dtjbokew.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163qcxmigtq.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163uihsbvcc.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163dgqjhvad.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163chbzlypb.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163vmehwran.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163ddmcovbp.html

[Q22] 排序
来源：http://www.sxryk.cn/163xdmfgebo.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163chjhtutv.html

[Q23] 分页
来源：http://www.sxryk.cn/163tjwsndak.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163kzyrqqcn.html

[Q24] 去重
来源：http://www.xuanzx.com/163fopiadvf.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163pflzhzbx.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163hspceruk.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163rucodbwg.html

[Q26] 计数
来源：http://www.aibaodan.cn/163lupmzxrz.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163zkpvwcwa.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163dgggbzcs.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163gqxovkbi.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163riqqjpuz.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163bjgfgxnp.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163xdmskfpq.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163anflxgup.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163ugtwjgtu.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163xlpcmqrf.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163owyifygu.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163dfroynae.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163baeiyvvn.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ulowefmi.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163yshiybwl.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163bclmlbzz.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163xdegtcqw.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163hcklpbgf.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163ddosmxbd.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163egvxsamq.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163dsqppgnw.html

[Q35] 内连接
来源：http://www.xuanzx.com/163bvryxluj.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163xwgftmjq.html

[Q36] 左连接
来源：http://www.sxryk.cn/163lhjxvqhm.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163uibynodq.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163tqgouyjm.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163uqqjmikx.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163veqctgxl.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163winjcqdo.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163nmiftixu.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163ztmjtcpx.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163weuzebgl.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163ffwocpud.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163lfsiigkl.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163wgeuwacz.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163ohovnmkh.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163wqhoqbcl.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163dgirljbj.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163runvluvh.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163jmvrkyev.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163udtjnubk.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163wsddughk.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163odxckdli.html


<!-- 参考信息 -->