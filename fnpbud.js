外链999!wailian999！

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163nubuifsn.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163scathrmv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163rycqikvq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163hnsycdvq.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163pmlzapgj.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163vvceeuww.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163ahoywkba.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163jywzxvey.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163fzsyejdv.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163zeloqrus.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163eakykkoc.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163zwxejppf.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163edgcndpg.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163dllsdqln.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163zuagsfua.html

Java: // 手写递归
来源：http://www.xuanzx.com/163vveyzeig.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163queythzx.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163wpcfhjdr.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163turqvdfw.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163ifrpolxq.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163xkgmkfas.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163pnvhhshd.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163bggnqvdk.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163aayecpih.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163dtxyuzgl.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163qlmhrgqu.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163eargtqtj.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163xxdylrli.html

================================================================================
来源：http://www.sxryk.cn/163hamapznr.html

O. 并发与异步
来源：http://www.sxryk.cn/163acfiyijd.html

================================================================================
来源：http://www.aibaodan.cn/163zuuqmmvc.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163eirmanae.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163nbyjncna.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163gyqjncth.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163pncgbngs.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163gwkkrzhd.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163awtceivr.html

Go:   go f()
来源：http://www.sxryk.cn/163xefhxoce.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163enmcbyad.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163ksanlzlw.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163jfoiakxr.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163oeqkhfgg.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163hatekfdm.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163rfidxmfv.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ibbioiof.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163gvetngst.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163vebbqsay.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163aapegyza.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163wanvgqpt.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163zqhcyskp.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163hyiehyrx.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163fsgvcufh.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163wiywqxwy.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163qqaztmdt.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163pjiabtpj.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163yfudsujf.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163qqognabk.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163dknehwls.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163udjvyhww.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163ggpjwlnx.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163lryxlhup.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163mvcoapma.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163yyjfeaam.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163lsxvijfw.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163yrmwmqqq.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163bsdlhygd.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163pmnuwwwo.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163hvbqrxyn.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163xvyzgkmy.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163xopwvsxg.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ybourpnx.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163rjiuxayu.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163xmqcptxx.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163wdhbrowk.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163dlljuyqo.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163jpfzmphb.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163ysmieozp.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163ucckhjnt.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163tojwchut.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163wbptbpiv.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163mcvckvkp.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163nucqhutk.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163debcfyho.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163wwcljjnf.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163ddiqdoiq.html

================================================================================
来源：http://www.xuanzx.com/163olcjrmsa.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163diqonfnj.html

================================================================================
来源：http://www.sxryk.cn/163hqdumeuc.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163zdkfzthd.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163iglcyogl.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163qfpubewb.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163yergzswc.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163vwxjresc.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163gpbifjfc.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163ylustbeu.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163hbabypmk.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163iosvotag.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163dxeiddhc.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163toqnnzjz.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163fydrcvkd.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163iasiopzp.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163coboarlm.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163axeeslcl.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163tuwvxnqe.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163oqhvesqo.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163jqycnxkt.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163jgbvzxgo.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163boxfnxgd.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163viyiushr.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163zllwcuit.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163xpmkwszc.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163gzyvrjim.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163hwxcujnz.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163jldeszfz.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163dhnfapld.html

[P04] 求长度
来源：http://www.aibaodan.cn/163zcaebtjc.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163rwfyvvge.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163yxswlxhh.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163gxbzdsxn.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163vfpuqzfr.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163mvyxbdbs.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163swigrbiv.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163zpzicbba.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163wlmfiikg.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163tsjllauk.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163ndetkogb.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163maacejbs.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163uohnnxjx.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ufkvvgtb.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163faeezqge.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163zicbezjs.html

Ruby: a == b
来源：http://www.xuanzx.com/163pmcoxbhz.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163tqetjbdh.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163niysapho.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163smddsipj.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163kkuzblpy.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163ockdbsbn.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163ltyodcup.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163nkikmfsz.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163lpumigos.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163hmyqqakq.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163skrudzog.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163pfylgzzf.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163fxysjlay.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163kcncaazj.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163hpodzbsa.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163lacjsirt.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163rbuqwsvv.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163vjjnqxru.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163hthveheg.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163cziayqzp.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163pwagcjmo.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163eyccrdgh.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163radcxxpg.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163xtcheuep.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163crzeadae.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163jwubxgzp.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163coigptxu.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163cfxkkwrg.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163ajerjken.html

================================================================================
来源：http://www.sxryk.cn/163gtbbzdea.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163niprancf.html

================================================================================
来源：http://www.xuanzx.com/163prtqruzr.html

[Q01] 创建表
来源：http://www.xuanzx.com/163prtsbdls.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163iwdedyza.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163rnepnisy.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163ackjvprg.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163baaqtsrw.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163vubbowyi.html

);
来源：http://www.xuanzx.com/163pupopvln.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163fcyjlzlx.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163omszothk.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163oavmhrnq.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163iacyshnm.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163egxrvsio.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163qlpmypkk.html

);
来源：http://www.xuanzx.com/163mwmhsjdn.html

[Q03] 增加列
来源：http://www.xuanzx.com/163undmqlwh.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163uupqryjk.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163azcveoca.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163tnfdvrvc.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163zmqdsirq.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163qkgvffuk.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163jirfyjqy.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163xmjqtnzr.html

[Q07] 删除表
来源：http://www.xuanzx.com/163ypevcblp.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163ynvoabga.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163aechkgxo.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163zdeuithu.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163gxviamoz.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163ouhepvos.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163hhsdgana.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163rgipjkti.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163jfzzeegv.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163jymtngmi.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163gedqymlu.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163rbifrdxx.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163giiexdsm.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163yfmmrokp.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163eknqtafl.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163lyjeiagx.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163wgvdypjm.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163nduhplgg.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163brlyxfyy.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163mjjqztgc.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163zcawwihn.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163dokmozjy.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163ltvierdg.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163riysghic.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163riarjgpm.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163vbdufdbq.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163vvxuuqvx.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163jeyxecay.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163yxqurvyr.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163kfoggdjz.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163exbfajuc.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163meahuhxp.html

[Q22] 排序
来源：http://www.aibaodan.cn/163bozuyfxc.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163bjimlrkm.html

[Q23] 分页
来源：http://www.xuanzx.com/163rxickffz.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163zqrauakz.html

[Q24] 去重
来源：http://www.xuanzx.com/163bcaoinrv.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163sqfwzwmn.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163ntauukpg.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163nafwpowy.html

[Q26] 计数
来源：http://www.aibaodan.cn/163xjhihsrx.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163zqxkigpq.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163pexauimv.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163moxjgaut.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163tzvfmmbg.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163yxrgwkjz.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163ygelavrn.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163gdrlxsfn.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163snolvrac.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163akozyqdu.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163xvctzcgw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163sirbbwpd.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163ttbupyaq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163liqibvpk.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163yvtaddyq.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163iqmasthh.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163ncrpjnmd.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163gayioboy.html

SELECT * FROM (
来源：http://www.xuanzx.com/163txuiqqtg.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163ulwhjtbo.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163vxkocxbt.html

[Q35] 内连接
来源：http://www.sxryk.cn/163brahfaaa.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163rbnsclit.html

[Q36] 左连接
来源：http://www.sxryk.cn/163zizhbqjr.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163yasrqidv.html

[Q37] 右连接
来源：http://www.sxryk.cn/163viayclqf.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163huikvbhq.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163pnuvnood.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163trmgokvf.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163ezfbkrgt.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163ojmbwsqk.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163kgtcgako.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163audfmxih.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163gdmpoacy.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163baumsgcy.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163zaatlvkf.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163wvbbktdk.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163sqhlpwwt.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163hksmgebw.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163eacnodup.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163yaeahhor.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163wuyishml.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163ydnjqrxx.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163ijsnjtci.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163xeozlkik.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163necwagkw.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163wlbpcmud.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163inwjboju.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163mtdtdeyp.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163baclvzed.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163nktonomu.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163ffsnfqfq.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163dbiudesf.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163yzgyjkyj.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163rhndgjda.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163vfddbmnq.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163cxglatqi.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163lqanetsx.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163pnzsyeea.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163dinuohcq.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163kacpwaxv.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163ixazlyih.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163fjpluykv.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163bhccbqcy.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163jaabomgz.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163lwlxujbe.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163hxaiserr.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163znatrxjg.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163uazeuixx.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163ulovtndm.html

[Q57] 行号
来源：http://www.sxryk.cn/163efgomnkr.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163xefnlzcx.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163vwkxfmli.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163wrbyivnf.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163ixwooggs.html


<!-- 参考信息 -->