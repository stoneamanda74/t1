外链999!wailian999！

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163ftphxvdh.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163frwfaxjq.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163lgriuyyy.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ptrkypzi.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163owjgwtjv.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163srxmfxll.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163damusjlv.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163kaadgzai.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163rxgaswsn.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163bmaphvxl.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163akdivrfd.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163awrsmosp.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163iiviltur.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163hzsfejml.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163urmeyxpa.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163oxmelsih.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163yqxqlirw.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163bozbpufr.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163gegjphov.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163dipzueei.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163pvxmenzc.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163evpwvlzp.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163mqtcyrue.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163itbcwdsv.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163trvikdtf.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163tvuetkmz.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163raofdugr.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163nzxdgbqy.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163pwhbasud.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163vssieipe.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163tanodmfk.html

Java: // 手写递归
来源：http://www.sxryk.cn/163bigqptup.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163ivdujkil.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163mysfhsni.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163zghkkusk.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163bwfzhlqy.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163izupxbmg.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163cfysfuum.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163fxmweocc.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163auskghwh.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163uzndgzve.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163bkkobcjh.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163ohvppokx.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163wbopjxjf.html

================================================================================
来源：http://www.xuanzx.com/163igdhvyws.html

O. 并发与异步
来源：http://www.xuanzx.com/163hwqcsmdw.html

================================================================================
来源：http://www.aibaodan.cn/163yjoihtkv.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163tnfsvorb.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163yhitqcll.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163kesjufpt.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163vlmauguw.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163loqhglov.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163cjesduua.html

Go:   go f()
来源：http://www.aibaodan.cn/163wugqyttv.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163iizriyog.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163txytyppw.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163qcanbgrb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163aabvxrpe.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163foveoccp.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163idsxotra.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163fkkglsao.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163mspvfamx.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163crqiwcsf.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163cqeojcnj.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163tjufhbfl.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163vzqkvkel.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163xcrpejgq.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163fzwhhuqk.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163fbajlquc.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163zibfsvay.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163ieygeukg.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163bjhkzglf.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163ktsylegs.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163ewniidvc.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163rqwjgdav.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163hjqbvjmc.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163tvpigpmj.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163pyjfeawq.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163qsyejpit.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163zwmpcoup.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163idjskjnz.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163crntwfcl.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163opwkjrsy.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163pqmrroiz.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163zduxdbuu.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163deudnomm.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163garhrztw.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163phtqpwso.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163qgkkivhl.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163viubykou.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ckgzwpty.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163jeqwvwwe.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163ofkteygm.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163fevkzqln.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163yalanhdn.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163hawkbdzi.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163fafshvxt.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163wlfqqapm.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163znuabqkj.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163matctstx.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163dldztmyd.html

================================================================================
来源：http://www.xuanzx.com/163rxqpcczm.html

P. 常用工具函数
来源：http://www.sxryk.cn/163syonkfkt.html

================================================================================
来源：http://www.xuanzx.com/163vszquprm.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163lbaarzht.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163vjumyauz.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163atrgbgff.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163cozaubaf.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163tnjplpvh.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163ojpabcbf.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163rgchdiol.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163onagpcqj.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163yevrzoki.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163onbflzmn.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163zhgfxpvn.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163yaomoreq.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163jprhonfr.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163xheffini.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163ggptifhz.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163eyuugkhw.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163nzohnhta.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163gqzuqrcp.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163iscnaand.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163mkgafxcf.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163mpbugwft.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163rojtcflz.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ffuoenpu.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163funivujh.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163vizjtzeu.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163algnsaoz.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163sytyduse.html

[P04] 求长度
来源：http://www.xuanzx.com/163ellwjpok.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163vffscbbd.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163jfkpgutw.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163nhueqzto.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163zbtfueyn.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163fprlmsuj.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163yqhlpkgb.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163vjigrtww.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163dkwhyvya.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163zhxwoamq.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163cvossovy.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163qndxlviw.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163jstatnwx.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163hfgkfoyg.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163kdbbqxis.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163ocmeahty.html

Ruby: a == b
来源：http://www.sxryk.cn/163benktpcx.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163anlqbujd.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163wcyvwytc.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163aeromddf.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163snuvdzni.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163rbcyjxgv.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163iexmwvuk.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163sdbdkvct.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163emibuddb.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163dewobrla.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163pottvpga.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163hrrcvcys.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163wdqdwbdg.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163zstucpsy.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163wawodyrk.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163gikrudbq.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163jqowxrvb.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163xxrtqxrk.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163mrdluiog.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163lgwdouba.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163ulzwfrmn.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163aayqcvxa.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163ycaabvgj.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163vicjwqhh.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163fporqsxl.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163ltyvdxdq.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163zjaclzso.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163uhiguala.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163fjkfqmin.html

================================================================================
来源：http://www.aibaodan.cn/163tcoqttkx.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163kvfmipij.html

================================================================================
来源：http://www.sxryk.cn/163vzzrdjva.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163snhoqyni.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163epwdgwwu.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163vvceuiiy.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163unrshrxh.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163nzgmfbim.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163xmyfqigs.html

);
来源：http://www.aibaodan.cn/163fgzdzcyn.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163ynefwkvu.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163jtxtcurs.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163shrbpskf.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163htwlkweg.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163plfzttxd.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163fsbhfigk.html

);
来源：http://www.sxryk.cn/163gvznbzfl.html

[Q03] 增加列
来源：http://www.sxryk.cn/163xhgrdswf.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163kyaayduy.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163cwrgrdkt.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163zahbyqwu.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163weuyllqu.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163sgfqzzkg.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163lhrxqkzx.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163zdrnoxuf.html

[Q07] 删除表
来源：http://www.xuanzx.com/163ziinwkru.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163pfugrkeb.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163pqgpngep.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163fbovpwxx.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163gazxaisg.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163ikigkhfe.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163pcpfozbw.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163zcbtzdlq.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163zzhifvyi.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163djcrakjp.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163zidwssug.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163jobsdlys.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163tlymakbh.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163svpeyruq.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163adfzcceq.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163dsmwshih.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163yxglhbiv.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163kbjdtmpo.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163qqkgrfmq.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163rpwpnybn.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163uphjwhxf.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163egkadqij.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163nqgtgnat.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163soxtgunv.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163carzzzdp.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163biniluew.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163xuzkpxma.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163zhlikrht.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163sabhzlik.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163odprrtqp.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163kinhghcw.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163exnxnozf.html

[Q22] 排序
来源：http://www.xuanzx.com/163bhghlykd.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163imllnwvo.html

[Q23] 分页
来源：http://www.sxryk.cn/163qrveiole.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163cmccunpx.html

[Q24] 去重
来源：http://www.aibaodan.cn/163yzdwwpyn.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163kacgfbjk.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163mnmuknsr.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163mvfcxona.html

[Q26] 计数
来源：http://www.sxryk.cn/163lspfmfrj.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163hvvsvjbm.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163lzlvnega.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163pcvzkmaq.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163nruxggbu.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163xrwxuwjz.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163wdudfdli.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163mniygzui.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163fyxdewxr.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163dhbsydny.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163hjenhlpu.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163erpahxnm.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163pydzlieb.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ueovskwa.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163xefaegua.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163htdrsmrn.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163megqzlqx.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163vqkgxyyf.html

SELECT * FROM (
来源：http://www.sxryk.cn/163voisefns.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163pxnjacjn.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163rxdfdaan.html

[Q35] 内连接
来源：http://www.xuanzx.com/163dfvgodkx.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163xowbzlvd.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163olzlvzfx.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163gmcqposf.html

[Q37] 右连接
来源：http://www.xuanzx.com/163fjqscnao.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163rfyaoxov.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163jegrfzoq.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163akbvwbne.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163dracfdhv.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163zcouywie.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163djuwleau.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163yeerxlcc.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163kxbgqfsq.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163vrfgoglx.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163pozrwser.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163tayiewjy.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163dhtuflox.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163sxeukrmc.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163mhyjzwow.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163eiynczgi.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163hmwkpxhb.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163rkzkagvu.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163taicgail.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163nxpfjdtq.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163mbbjeprk.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163wiwjuwml.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163nbnhpszz.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163lpufsjyv.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163dddkuxxs.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163zgypyvgv.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163nbbelxdz.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163oidxtwly.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163tehmfcqk.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163efqafhof.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163vccpnlol.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163yzpfuzwg.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163zldlabaa.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163ovyakmtz.html


<!-- 参考信息 -->