外链999!wailian999！

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163vnotnloy.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163qrggkwhd.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163bkdtexep.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163osvblude.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163wrgotuhq.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163qivtumav.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163dfunlmzd.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163ppkqxkgf.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163geeuofdg.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163ducugkiv.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163vjiomshd.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163emptcjgf.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163wzjdfvgt.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163kktjirvl.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163gfryxtmz.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163rnxkfzzv.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163uyvmhzat.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163vcteoedd.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163aqkdelih.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163tzhffbqr.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163afzvlwcs.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163hhdqwlgv.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163svusiwic.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163ecklsavi.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163vzojvrzv.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163jflewssg.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163nblktadu.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163ohcqrfvh.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163jufaclfm.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163pnatlgkx.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163xevjnnch.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163fcojcjle.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163oimpyjso.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163axronrzr.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163umpxmxdg.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163jmvasknb.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163gdsskxvj.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163jewggsok.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163uuxtscds.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163cpnmieax.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163wsztlmlc.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163uzcbpgbl.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163slftgvdc.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163lgwmonck.html

================================================================================
来源：http://www.sxryk.cn/163edigqkzm.html

O. 并发与异步
来源：http://www.aibaodan.cn/163ckvnhjbf.html

================================================================================
来源：http://www.sxryk.cn/163iwzdllof.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163srmdvbyg.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163zyehcmjg.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163frvokumz.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163ivwnpncl.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163bpvhjwie.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163wfzshnok.html

Go:   go f()
来源：http://www.xuanzx.com/163bzfwcutc.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163pdqatzhr.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163ejznubtl.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163dbdqjyqk.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163lifrkwdz.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163azvmobfk.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163xyluggnr.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163milatypg.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163akcmcgld.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163qgmuaugi.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163kwkmzsnd.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163dfdyghxc.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163xypozzwm.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163okjqyywn.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163axnakrgv.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163kquftxji.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163drxidncr.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163sguddigu.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163xfmxgzmc.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163mdtqvomq.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163hjixztke.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163empfnati.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163pulsdlut.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163vstvvigy.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163yibfgxdf.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163jasxltem.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163xmhndumx.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163qgaiamil.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163bvpcfexv.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163lgxbckot.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163hhzlzuxe.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163cmbaypcu.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163qpjzkxbq.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163pidhxale.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163hmllnsil.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163knxcmyut.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163lndzruvu.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163tpyvpdhk.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163wuypstgz.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163bhilkiou.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163cmijotsk.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163ohjvveuc.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163jcflndad.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163pnlqbmie.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163rswadynv.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163iozpcsnv.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163vslrplat.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163avbfcrgg.html

================================================================================
来源：http://www.sxryk.cn/163nrheqxjh.html

P. 常用工具函数
来源：http://www.xuanzx.com/163upbxltjh.html

================================================================================
来源：http://www.sxryk.cn/163nrqfoksn.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163vhjhxnin.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163bmnjbyrm.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163godqjkxf.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163vcvsnugv.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163yuonmeqz.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163aiocybsu.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163gmcdqjul.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163cdbjlcpe.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163sqmcnplz.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163pegrcbty.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163ugscgzwu.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163tfvbbvzx.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163oswknpje.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163qbzwwhvx.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163vmhezdae.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163bnboyqlf.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163ywvaevtp.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163yxjosqya.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163ouqxndnu.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163mxgxtucq.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163gmtcafht.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163kmsixkcx.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163fxodnosa.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163jzsdejuo.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163ymhqheyq.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163cktxtnhi.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163wmofztxr.html

[P04] 求长度
来源：http://www.xuanzx.com/163lopcdkik.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163yupzsecd.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163chclizdq.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163xfgnuhig.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163dktdnehs.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163aezdmvwd.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163qqihmekk.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163qyygkcnb.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163uruyxrmn.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163jlbaaeye.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163gtcdynuh.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163efopikba.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163wcijxxsk.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163nwctkyge.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163xbbhrkkc.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163hjvzduhs.html

Ruby: a == b
来源：http://www.xuanzx.com/163bkdclort.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163ghujlskb.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163tfekagcg.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163csefamow.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163jwrzihvs.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163cueiysvd.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163ukhwfcoa.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163wpxohrcm.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163ftwfhdom.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163wuspxjdk.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163krkrgzgq.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163vmqdzntj.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163utbxwkro.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163tdjnpfgp.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163udgbrsvd.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ihfiauqp.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163lycbewiz.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163nhtonbwl.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163pwedlmrf.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163owtmmogz.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163mdbkqdax.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163knertcaa.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163vwtivoax.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163zjkvleip.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163mqjosqsd.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163pvmhemxg.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163pquhcdmh.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163eyimkxny.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163jvnxzeod.html

================================================================================
来源：http://www.sxryk.cn/163chkghffk.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163kenlrzme.html

================================================================================
来源：http://www.aibaodan.cn/163bjgxatap.html

[Q01] 创建表
来源：http://www.xuanzx.com/163olmccdza.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163xhrvwwxl.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ojispttc.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163xxsxcgki.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163nvewdjzb.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163pymbedoi.html

);
来源：http://www.sxryk.cn/163piijsxpg.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163rrwadiba.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163iyhtnhmd.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163dddkeffa.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163uvknlihg.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163njixbojp.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163tdftfhoe.html

);
来源：http://www.sxryk.cn/163efhnnzqa.html

[Q03] 增加列
来源：http://www.xuanzx.com/163woktsyam.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163uzpofnny.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163gvqauizy.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163hwtxsngj.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163qxxexsxu.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163cydroptc.html

[Q06] 删除列
来源：http://www.xuanzx.com/163vnqqqyqy.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163mkxlmzft.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163dmcphzmh.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163pqkcfckd.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163dlnhplfh.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163xsponftw.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163addztpep.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163akagxwjy.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163qzlqszhh.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163wxvphuwf.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163wdhhmdlx.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163gymmyjpw.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163ztigjnhr.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163mwxfdphr.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163wryjmget.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163pdardfkb.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163dcajrojn.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163fhwvoqnx.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163ysfjplwc.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163vnpxolpn.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163yllwgzeu.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163uyihrdxu.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163yqgdrtgy.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163nbbngerg.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163wminglyz.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163taalnlcf.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163yqpxuvua.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163zulgzjji.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163voerqjgs.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163xgcpvwpi.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163qflwjzpi.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163yahcqrjt.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163okkqwzaj.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163ynifzred.html

[Q22] 排序
来源：http://www.xuanzx.com/163qsqbwmyy.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163crqwekkl.html

[Q23] 分页
来源：http://www.aibaodan.cn/163ahluanbp.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163kjtelrao.html

[Q24] 去重
来源：http://www.sxryk.cn/163tzkjzlko.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163dhletmyn.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163kyzentup.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163tgotjbbw.html

[Q26] 计数
来源：http://www.aibaodan.cn/163wfamiglt.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163kpirssjh.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163yieqyzad.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163wrufvdbq.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163wxdxcjxn.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163oakxlvba.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163rshjubgu.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163dolqjvot.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163wtvrstzj.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163nkpxsjvd.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163nvsajxqm.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163qwoyizyo.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163ubvlqect.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163xxsznqda.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163qdelpaua.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163aiadyjyh.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163qcyjvtvw.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163fetzqinq.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163kdowyhiq.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163kkjpdqni.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163dfutmwai.html

[Q35] 内连接
来源：http://www.xuanzx.com/163tuccjldp.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163lliefhkm.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163msgrxjkn.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163eqzcbyzr.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163kjwejvqy.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163igcxsvef.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163tlmurnjr.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163jhwrziha.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163svrevmzv.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163ickuopsc.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163olpukvjh.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163fhnkzusd.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163actxxmpt.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163knxwshto.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163vhtznrjl.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163ulfeueyn.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163kafuwmtc.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163bavnihzr.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163cjgyancq.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163haunmdof.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163kgmtukzm.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163tkqolfbc.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163flwwcets.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163msdlhycr.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163zslnnpwm.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163xkfeabxr.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163ldbufvts.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163jderrpoz.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163wzbjouxt.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163gtiryjmq.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163jbuvecnb.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163ymipmfkp.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163lptcmipx.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163xfhkucit.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163vfeddsfp.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163eybvdzsq.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163twmllufb.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163haasmkzx.html


<!-- 参考信息 -->