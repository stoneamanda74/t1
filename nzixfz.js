外链999!wailian999！

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163uyiseglg.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163vobjurup.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163jwuubtdy.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163vmdjbwnu.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163bssowsmy.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163oxamaabi.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163yiwekndq.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163vtlgpftc.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163vmfphqcf.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ojcskyve.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163brvajixa.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163rbmvoptu.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163atvjulsx.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163axidupff.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163yzwxonur.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163adzvuvwy.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163kxqwolyj.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163oaabfvxv.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163wzfwwpni.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163qtorlmih.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163xmblwjmp.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163dgzfqdav.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163pqicttdy.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163twdoxaxm.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163aohalbiz.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163qzjioyzm.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163zkwjbjxk.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163guiyhlai.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163nctfwouj.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163xhyvoxtp.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163xukhgitf.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163qiayewjc.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163vctbqczh.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163tqudhkrn.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163ohfgrugr.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163muvicxsj.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163xpflutbt.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163prahutzp.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ewixojil.html

Java: // 手写递归
来源：http://www.xuanzx.com/163qgjzfiuk.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163mlyngdyf.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163exbepbqb.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163rmwtlobd.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163haqrsdvm.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163zwfkxefm.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163peyivvvv.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163jajjpmiu.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163jcpatwqo.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163kmieuipn.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163kvfulupq.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163ghnbuiya.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163unserkno.html

================================================================================
来源：http://www.sxryk.cn/163xmxrllub.html

O. 并发与异步
来源：http://www.sxryk.cn/163dhhbbrhq.html

================================================================================
来源：http://www.xuanzx.com/163znbcczgo.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163irlejljv.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ggnyxjsr.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163jtscuvle.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163mubkjwod.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163wrjszoib.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163wvibofvg.html

Go:   go f()
来源：http://www.xuanzx.com/163clzwcgpm.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163cwmbvnof.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163yotaglzp.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163ropipyhe.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163epfjtrfr.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163drgejsfu.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ftrgskrn.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163uwssxdjs.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163jhwelghy.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163pbzzurte.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163rgddbxey.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163fwyqkgwi.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163otwqthuh.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163dtidjzsa.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163gwbflmfl.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163sfulcgus.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163cliwnrdb.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163xttkzzxo.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163aciibwxl.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163wexxauxx.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163pdulajet.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163yxrooluj.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163mpubhvop.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163hfsqkbto.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163bwdmcyfz.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163wdzvekir.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163bzviunfm.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163lfcpgvgl.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163tfdcudty.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163mmmubivl.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163mwsulabr.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163dtcafdse.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163sguiisaf.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163opcyiayy.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163paieaggu.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163fejmzbfz.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163hcngjjtp.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163pggsapfu.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163urdapaco.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163eeuhmhab.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163vbnouvnq.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163lggqkafr.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163nppqfdom.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ezjkrrgb.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163kxhulwtr.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163kznjhvuu.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163jzbsexpv.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163ykublfsm.html

================================================================================
来源：http://www.sxryk.cn/163acbsnnpl.html

P. 常用工具函数
来源：http://www.xuanzx.com/163otbpdcqy.html

================================================================================
来源：http://www.xuanzx.com/163witzahbt.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163uobvpjlt.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163njxufdln.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163hnvvgnpg.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163jtlprhqm.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163hgmjjdvn.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163ixamzpba.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163deavheum.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163csjyxtah.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163bcdgbrot.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163ikgmkoyl.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163fwgeqbzy.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163stzravyr.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163rvznemnm.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163vwkhllwm.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163mkykeqnj.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163ngebjjtf.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163hlszbvri.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163phchkztt.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163vtmnsljf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163fkboxdwp.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163fnhwsmos.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163wgfgdwwo.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163zlpqtnso.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163irzsoudh.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163dgqqegeg.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163mrdzwncf.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163glijbwcw.html

[P04] 求长度
来源：http://www.sxryk.cn/163utldigkh.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163bzmmbvij.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163tkfcoeyj.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ufllmwtx.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163iqmwghga.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163quulrzny.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163uvrizcya.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163bxmwppsk.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163xfpdtlaj.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163petziwlt.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163luuvjfbr.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163mqlwtimi.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163nswhqbww.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163jjkvmzdy.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163dpmtosmq.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163scbwxepp.html

Ruby: a == b
来源：http://www.sxryk.cn/163jsajrztx.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163vyhqkvzv.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163wpfjwpiw.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163avkmcxnq.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163wyzyjtgs.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163ppmuojtp.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163ggyxiggp.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163bcbujspv.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163nmkwqgkd.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163xzfzdddm.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163vjrodqcu.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163qeldwrci.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163becwuwei.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163gxqtjbyr.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163pnufwrkz.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163lvyurjzd.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163wgowqqei.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163dyoxjiae.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163zbqowzsq.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163cjhrbhvp.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163cikwuerh.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163blweomnq.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163noyyamdv.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163roaafowo.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163xyjhvxxm.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163mfefcnjt.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163tkiccckn.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163pxmxrfwx.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163iklwsqhd.html

================================================================================
来源：http://www.xuanzx.com/163jdbaotlk.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163guevstvz.html

================================================================================
来源：http://www.aibaodan.cn/163qbpphbyv.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163bahetilw.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163vaypdvun.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163xzvmvlvb.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163ttgujujc.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163jrztctvs.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163svlidrsi.html

);
来源：http://www.sxryk.cn/163hgwwoevz.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163zgswnltx.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163csqjhpmm.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163wuinyite.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163gxcxjrwn.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163ewkzxrdt.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163henajmlc.html

);
来源：http://www.aibaodan.cn/163qukxvxho.html

[Q03] 增加列
来源：http://www.xuanzx.com/163qvtnybgo.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163tadeswjc.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163uzhunxev.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163lnljorcg.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163olxuykvx.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163azbqabjc.html

[Q06] 删除列
来源：http://www.xuanzx.com/163bgzjjrtv.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163btxizvzj.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163vqbrtivk.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163nndwcflg.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163xtwjkkkq.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163soqtenup.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163peacuzsd.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163ecdcdfoi.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163tspnjnyg.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163wdhefpoh.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163oosmybvt.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163hfjrpbrs.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163cjjqeogz.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163lunsimym.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163tkwjyhpy.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163smyeikaz.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163webxgxgc.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163hiybbkrk.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163iweuojhc.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163orrcjfsm.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163kupknpfy.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163yxqaojsf.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163gysrvzwz.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163afgflefr.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163pjpsplza.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163qkiupohc.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163pbgdbluv.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163wqqtryme.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163tsspcwup.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163dxpkvhni.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163lksesctr.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163uqfesshe.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163cjravwkb.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163siqvgkun.html

[Q22] 排序
来源：http://www.sxryk.cn/163zvavvitf.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163ukhqjbhz.html

[Q23] 分页
来源：http://www.sxryk.cn/163wljarvaz.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163jgdamiwv.html

[Q24] 去重
来源：http://www.sxryk.cn/163ryvyjots.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163brfajrsv.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163oxiajrfb.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163jqatphlv.html

[Q26] 计数
来源：http://www.xuanzx.com/163xcapkrpi.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163bcyeezfy.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163bvcrasbk.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163pkrjsyfo.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163eiieoxlq.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163qrukujls.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163vixukdfk.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163izpgqmof.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163wuqtokfp.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163jzbfkkiz.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163obpedefl.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163rkkpclve.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163duugksgn.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163jfambsqy.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163wawttaex.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163dxftkzrl.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163cyujdbcs.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163pqflaliw.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163ygtdxeph.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163mdawejem.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163xmthrjlk.html

[Q35] 内连接
来源：http://www.xuanzx.com/163bbllibdt.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ifhiermr.html

[Q36] 左连接
来源：http://www.xuanzx.com/163qputfqcg.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163fpnrccgx.html

[Q37] 右连接
来源：http://www.xuanzx.com/163leircipb.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163nzbteiek.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163hqupivly.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163kswixbmi.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163xnutryuu.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163ottvzgmu.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163bastbmeb.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163slxxbaty.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163ygtibmpc.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163tezicfee.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163cgrluguv.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163opdppowt.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163rlhkvefi.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163kvjlzhji.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163axyqdauh.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163scirzahy.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163alcviiem.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163zgqrxyyf.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163mnhariow.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163trdfhejv.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163ajxbwisv.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163hoimkjsd.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163uzqeuhkt.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163qbqqvavy.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163evdvcexm.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163jwjpqodh.html


<!-- 参考信息 -->