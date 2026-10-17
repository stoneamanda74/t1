外链999!wailian999！

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163cemxubfq.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163hajlidou.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163hurppicu.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163syjvxfct.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163ykeinskw.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163hgcpjlqx.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163czqzomhq.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163gaepvccj.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163xbttivpk.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163sgxyiwec.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163otmbutib.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163uffbsuij.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163agkynayv.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163whznqmvo.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163ymeebqjv.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163tbxwasnb.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163lhqarqct.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163hxzpfsjr.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163tjxtaqlf.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163zoeajpkh.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163cisebtwc.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163eabbralw.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163dbggsaws.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163mnxuiqls.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163itgpvvdf.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163lxjymhnn.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163deowejca.html

Java: // 手写递归
来源：http://www.sxryk.cn/163dlxwnage.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163mjnhmjxt.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163chekdtmm.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163cdtaquot.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163ydtrobjb.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163jkdrmumb.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163jipfigai.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163sczdnvzl.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163dpdivtkp.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163nkppelka.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163lqbakvxx.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163cnfqpise.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163lnhtfvqo.html

================================================================================
来源：http://www.aibaodan.cn/163jthqtjtn.html

O. 并发与异步
来源：http://www.xuanzx.com/163mkchrfay.html

================================================================================
来源：http://www.xuanzx.com/163kpsahfgk.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163czuopkjw.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163xytsiclw.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163kowfnqcu.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163xmjeqhbr.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163jvshtnch.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163flrlvisk.html

Go:   go f()
来源：http://www.xuanzx.com/163mfoiatqs.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163sujkcbsf.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163jcfxurhk.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163kzxojqea.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163vffmrlmp.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163rvhmacga.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163gdqndpgo.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ykthycof.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163nzdmwhlx.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163ngqsrymx.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163vluqagbh.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163gwuthajl.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163fghaujqj.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163nlhndadv.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163bgpwnoki.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163gfsutbwp.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163sttcjyxm.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163hauckitl.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163mmxnvwhv.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163yezgrvlu.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163knkejlnp.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163omptdicr.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163ntwxozvr.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163jiotvvgk.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163nlpqxwdb.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163djakeeqg.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163gzefjejv.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163qmtdjmpm.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163atqcssst.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163gdviqqhr.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ohymzzmt.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163rotixsrg.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163yeatrfxo.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163twqbflix.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163wrdadoic.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163zgevwzku.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163wmabldax.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163chswcocj.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163ftejismf.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163sxvfgfup.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163mtfjixdh.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163yugzerwb.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163kqycezmw.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ydsaniyc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163wyuycjwk.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163zoyzomwm.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163mjlnnhfe.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163dnjjxlpk.html

================================================================================
来源：http://www.aibaodan.cn/163kkpljzps.html

P. 常用工具函数
来源：http://www.sxryk.cn/163emtlcolt.html

================================================================================
来源：http://www.aibaodan.cn/163tnagmwxa.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163lzbqsrgl.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163xutfsxog.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163zajnbpez.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163jdqidwur.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163bhqyvikl.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163bliyakjf.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163anunjojb.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163gaqjqmod.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163ftynwsnb.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163xgqemeqk.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163azxyenpr.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163zqccrlyf.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163rivsectl.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163tmecwgaz.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163ubcmihgw.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163glxnohkh.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163pvjqvxtc.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163mfwnwewb.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163mrlsrqkm.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163bdvqfpsq.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163mwphcirf.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163njjypxgw.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163zkjhzbdk.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163omwleoop.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163mtfzlfzq.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163ziptrkys.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163jyljflep.html

[P04] 求长度
来源：http://www.aibaodan.cn/163uzswlmmu.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163ylptmwok.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163jpaqiisw.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163shvnchss.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163txzdgaei.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163tvjzqmci.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163etyagkqc.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163dsbouedi.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163grtwzrup.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163hrezhskh.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163ovooawcm.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163lwuxqomc.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163spopvgix.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163hwkszmuq.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163isemqbdt.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163kkuazskk.html

Ruby: a == b
来源：http://www.aibaodan.cn/163jdqqzyau.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163ljvtohar.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163uhzphsek.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163zdhbzgsu.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163rfbecipj.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163vxssluoa.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163xaacwvgt.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163gtpjwmcu.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163sxahbgjf.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163iilimofq.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163pfzzilzr.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163znsgkmzo.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163dahrtmaq.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163kaaholik.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163xbdorkad.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163yxtsyzxh.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163idmxagce.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163fwwnovzp.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163whtythmz.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163tlzhcsoa.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163navtoriz.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163byeisqux.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163qqwiwjai.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163wthuizwi.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163vrmmubxl.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163cqhtkmzn.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163vvoqhixw.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163oposlhgs.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163itolaidp.html

================================================================================
来源：http://www.xuanzx.com/163dvxajjwn.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163tmvxjnem.html

================================================================================
来源：http://www.sxryk.cn/163ijnjpdpw.html

[Q01] 创建表
来源：http://www.sxryk.cn/163epuigknd.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163wwkjzvtt.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ertsitij.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163kwfiiamz.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163cxkxcrwf.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163ahiuqklp.html

);
来源：http://www.aibaodan.cn/163ihhndcqw.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163ghopzypa.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163kvlflidf.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163djejhkpe.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163gssanxbf.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163fhcssngi.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163npstkgwf.html

);
来源：http://www.aibaodan.cn/163vccutbbs.html

[Q03] 增加列
来源：http://www.sxryk.cn/163zbftudmk.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163ylaupgkr.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163vwuxxgyw.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163skiamgfn.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163mqkocdmh.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163ktedvqwe.html

[Q06] 删除列
来源：http://www.sxryk.cn/163gabedwya.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163rkzycrxl.html

[Q07] 删除表
来源：http://www.xuanzx.com/163dplxhovg.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163ihotqtus.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163geeafbxu.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163aojsachd.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163rftxwhia.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163ueqtpqkm.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163onxutwpp.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163qkkesukb.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163jpvasxwy.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163iduxocwq.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163stlgigsm.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163ttkqdydd.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163fhxpomzn.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163ayfpcckz.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163qrjripsz.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163jtdqvmhw.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163lkttbxrv.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163eemqgmac.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163xldacfmq.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163ktdqpost.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163pbkpehrg.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163urjxtodg.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163hsjqktap.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163qddmbtmx.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163yjtmpvlj.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163llfuxmmu.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163ftztjrli.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163ejpuahxn.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163ykfpougg.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163vpvqmcfl.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163owcwfecf.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163iqyqedyn.html

[Q22] 排序
来源：http://www.xuanzx.com/163fpvmccmd.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163lwxhvspl.html

[Q23] 分页
来源：http://www.xuanzx.com/163yqbezkun.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163hrjpubvj.html

[Q24] 去重
来源：http://www.xuanzx.com/163kvryqxwu.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163fqiqhpsw.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163ijczuwxj.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163fgjevdea.html

[Q26] 计数
来源：http://www.xuanzx.com/163ryjmvcjh.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163nztjhnna.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163niytmteq.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163jzyulbqb.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163exejhfzb.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163xusbxzyi.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163pvlnnyop.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163mbdgenxb.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163ofqqmgaa.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163fdomkveu.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163sinibtxk.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163sztcgwxc.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163njuuapqu.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163hdmxhonm.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163quywuaec.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163jfwxieqm.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163alvvrnnr.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163inluiqgk.html

SELECT * FROM (
来源：http://www.sxryk.cn/163yxaaqcvr.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163zgdzcuuu.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163xygskpsd.html

[Q35] 内连接
来源：http://www.xuanzx.com/163akoqloyy.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163gzcfbsmv.html

[Q36] 左连接
来源：http://www.xuanzx.com/163tifdbahu.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163rkydfisw.html

[Q37] 右连接
来源：http://www.xuanzx.com/163ebllvcme.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163xclhmaem.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163cgkqbxjp.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163vaexdgjy.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163trzfmclc.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163slamjxhk.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163cssudoez.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163aafjoujk.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163pepcnvld.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163kjoorlio.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163ghpdlczu.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163pvycspnm.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163grfsbhtd.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163enwfxwoy.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163asahxdxs.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163gpzomlnm.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163unjwzeyb.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163ifccxzts.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163ckkaybuu.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163wodsyzpd.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163xafyreyz.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163kibotopi.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163fybvlwmv.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163tzffumbo.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163yymautnn.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163ljxwcfmz.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163pdwdhenz.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163hhgpgsaj.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163hqmhpghc.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163cyzkreqj.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163udwznxri.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163yabjeivz.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163qhewqhcm.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163vuxoekhh.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163wzowghud.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163szigsofm.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163krhmnlev.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163arbgybfv.html


<!-- 参考信息 -->