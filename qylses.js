外链999!wailian999！

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163kzlceahu.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163zpzceupn.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163kgmynhqj.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163fsqpscbd.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163scfxwagy.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163ralfzoih.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163vxbyfout.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163sgwjksao.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163yofymezb.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ozdiywzq.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163dhyndcsv.html

Java: // 手写递归
来源：http://www.xuanzx.com/163bvvdkzrf.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163ogdwovgc.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163vjqxhqia.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163httsaxyu.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163mhsblfnl.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163pqcnmmym.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163naanfwmx.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163bvahdkuv.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163twrbyazz.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163naoalzsm.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163atktvmiv.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163yeumpcjy.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ozremizp.html

================================================================================
来源：http://www.sxryk.cn/163oreuqnip.html

O. 并发与异步
来源：http://www.xuanzx.com/163rsjgfwsa.html

================================================================================
来源：http://www.aibaodan.cn/163csossxdz.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163wmsylwie.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163gbuyytlx.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163gcyyduca.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163ploglljx.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163phxzkcns.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163erpjxmwn.html

Go:   go f()
来源：http://www.xuanzx.com/163mqbdtezj.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163jlyadyqe.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163sbfszpwu.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163xwftgeiw.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163gqqywxtq.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163abhhqerx.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ekwxnxoo.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163aisvswwf.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163pqtklzqp.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163tchetmvx.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163cyjeqatg.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163hytanpyl.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163crwwlbnb.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163lngqtbtp.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163gocewqxf.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163onnokvlu.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163eziifjnx.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163zgfsqnjt.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163bhxeikvn.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163fuefsahk.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163gmlszhew.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163ojlhqjxp.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163wymdcdqe.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163sgbbynvg.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163kbfcrmxk.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163sqqekfst.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163ogpprkrs.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163pcpqkclz.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163zitvoobf.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163eqpypcqr.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ihznkbae.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163szvqgffw.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163wigzwnqm.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163dpzceuit.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163oiufnzem.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163jzghguuh.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163xaxxopbx.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163yuzerkxa.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163tfrsmgci.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163lwiygwen.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163cgcdsfnj.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163igxuluiu.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163fctjzqni.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163eqrmfhrl.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163zgsfcnry.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163idsypfmy.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163ysbxxifs.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163bqmgdzyn.html

================================================================================
来源：http://www.aibaodan.cn/163rswtztph.html

P. 常用工具函数
来源：http://www.xuanzx.com/163synsgurs.html

================================================================================
来源：http://www.aibaodan.cn/163ajfaaipu.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163kipmmjgq.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163znrgutok.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163hafekvpu.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163nebjwlbi.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163giayoleq.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163cmvuftte.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163scmsvnuc.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163akkhwgli.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163crlhlpnt.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163bqwmpqdu.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163klnuejiu.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163iaoiyejy.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163yepghuvn.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163urmblblr.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163kdkmurwz.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163ihjqgubs.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163gdhpqqlv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163hnkdmhmu.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163hbfxdian.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163fuutshgc.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163vjducrkr.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163flrpkgut.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163oembocvh.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163mncbiilq.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163ayplrwkj.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163ywxwfolq.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163bsonsgbs.html

[P04] 求长度
来源：http://www.sxryk.cn/163eyibryxt.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163uvghhmzi.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163wnnraihs.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163vrtveaae.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163owaxjxfw.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163uilkyrpl.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163vcewhyct.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163pppqueng.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163liygdbhs.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163vwxtjfoi.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163okibtrhp.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163cyrdeocb.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163ownmyfvq.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163teuuslfi.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163qzpotzgn.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163bnisjrgz.html

Ruby: a == b
来源：http://www.aibaodan.cn/163pioefsyl.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163aofjrsui.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163ltrrlekh.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163tecluooe.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163rvhoemjo.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163dssejsyi.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163vlengvba.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163xdlfjekm.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163tqbrpgmm.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163mnnzavzw.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163jzrqknbk.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163crbvsvlg.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163vtpegfho.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163ghojrnga.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163izfjbiou.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163rzzxurwn.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163fripdrjq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163sjeqqwpj.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163hstbbluy.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163jaablhbp.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163tabamrzx.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163snjpvlvv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163lqalnges.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163iowlppqx.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163zvhjycws.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163ouztcipk.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163budnsjsk.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163sbrwopur.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163jxdevcks.html

================================================================================
来源：http://www.aibaodan.cn/163psjzlhjx.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163lyljvoxb.html

================================================================================
来源：http://www.xuanzx.com/163oskkhoug.html

[Q01] 创建表
来源：http://www.xuanzx.com/163yruudjnx.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163hcoegxxi.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163tlezqhnt.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163xvdwglkh.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163hsfwesdj.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163ixfowuvv.html

);
来源：http://www.xuanzx.com/163ooyzhgyx.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163itxfvipj.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163bzaxwbon.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163vczdzfrf.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163qbtyahqf.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163lfeldppi.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163cosfashx.html

);
来源：http://www.aibaodan.cn/163alajespa.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163efcxwiqg.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163ofjpvwtg.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163mcqviljr.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163yckcofoo.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163bxdgetnf.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163bqxxyceq.html

[Q06] 删除列
来源：http://www.xuanzx.com/163jujptnur.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163uksudbre.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163iamzjwwt.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163hlfttkmm.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163rawxwqqa.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163dibmcjli.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163fsoazzhx.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163dyhkhcft.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163qrebxjze.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163kvtvprcg.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163jljqzkin.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163yalstzmj.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163dvechxog.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163mrqpueme.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163vcosexkg.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163dkzhapjs.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163kyhdkkev.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163xzajcfyh.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163zugubrfj.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163hgnzzrkm.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163iodscywp.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163udlibqkt.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163qmvtrswd.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163nnrnopiy.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163twxireop.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163dhmkqqgx.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163smctvkwt.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163ofkgujdf.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163lbaesdnq.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163qwrtcitr.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163askjvsqk.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163dcdytbtz.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163rrkgumqq.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163wqilnnzh.html

[Q22] 排序
来源：http://www.sxryk.cn/163zshuuncl.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163koiherhn.html

[Q23] 分页
来源：http://www.aibaodan.cn/163ucdvonvf.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163akjavpoo.html

[Q24] 去重
来源：http://www.sxryk.cn/163bwfmrdww.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163iaigdrfr.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163pudiortb.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163vandtumv.html

[Q26] 计数
来源：http://www.xuanzx.com/163uepvdpew.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163rffpawvo.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163refuwuwv.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163qllujkhn.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163ngviosxb.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163eewmpzfm.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163dfgwjmtw.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163vkjxzodz.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163vzmmixfg.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163eprknvop.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163quusrtjw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163hskoejuv.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163exdxjxcd.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163miukywmm.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163ecrbbzli.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163kmkwrmui.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163bielqljd.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163jhgjmuwy.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163wovuoqda.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163mfdmcehx.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163gxrorydb.html

[Q35] 内连接
来源：http://www.sxryk.cn/163lizkcbvx.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163tpjxfvwe.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163tdvqheml.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163jctxqzge.html

[Q37] 右连接
来源：http://www.sxryk.cn/163qlbgkgff.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163fluratbo.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163orknqcea.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163tytksrwj.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163xfvntcct.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163tbcwfbwh.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163kgyrilrg.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163pzkdjemk.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163umcdnxbl.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163mxouewvj.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163xkjdlzer.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163mvlngwyq.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163mgmtisxj.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163txpnhntf.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163ebljilps.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163uiohjltz.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163mjvwqult.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163nqgrjnyl.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163yadxxlur.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163pcpyxwyd.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163vwezpcgm.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163crdcicjo.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163yquqhblf.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163dljegstw.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163gbccnlne.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163bzvulxuq.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163sfuzuapu.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163nibpdfdk.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163spfuzpqe.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163vwkithem.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163ftmkcoco.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163nnyncprq.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163ecexznvh.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163uijjspug.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163kfulwqei.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163xacbcpbf.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163ftxqzuef.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163cukthffi.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163fypfgifx.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163nkcjtqpx.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163rltxtvpf.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163xnyifxmp.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163rxlmobyh.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163obqcfwom.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163ifwxadha.html

[Q57] 行号
来源：http://www.sxryk.cn/163urvohubj.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163ugzgajth.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163bbwiqhdn.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163jyopcksg.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163fcjteksk.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163gfwpfjad.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163lfflcdfl.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163iznbhgcg.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163ahdgijsb.html


<!-- 参考信息 -->