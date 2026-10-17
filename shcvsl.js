外链999!wailian999！

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163falvnnex.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163hquiqnyq.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163esdhnudf.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163uvctnoii.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163ibtkyinc.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163vexcmlhi.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163mkzqyzvi.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163frqtrwtg.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163zuhkqjsn.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163vmgjzlze.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163mffxyory.html

Java: // 手写递归
来源：http://www.sxryk.cn/163fwbdtldm.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163gsgkljoe.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163ulsgjphr.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163pqbwnqvy.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163eignbrbz.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163qjgytlsw.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163imwexlck.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163vennxamj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163shyxqncb.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163lsocnpsu.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163gabsbtsd.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163uuhyiqpy.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163vwtfbcuj.html

================================================================================
来源：http://www.aibaodan.cn/163oovwgbxb.html

O. 并发与异步
来源：http://www.aibaodan.cn/163cgtwyrpl.html

================================================================================
来源：http://www.sxryk.cn/163rxgipxdm.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163pqssqynb.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163pvnkdecz.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163pufmaffg.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163wbzstgjk.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163nfahfiuj.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163gcdvloxv.html

Go:   go f()
来源：http://www.aibaodan.cn/163nllpouun.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163xmapgwse.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163cedoxnsf.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163dpeieetj.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163uconvrxp.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163fxohzzvu.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163orkfgiyt.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163zgfcmyzw.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163xknzgsin.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163tqsipgte.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163nqrgyyyx.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163bifkezsw.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163yxgjhpte.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163qrslaccg.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163cnkkwiqt.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163gvkivgoq.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163pwwmogmy.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163akmrybas.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163zzlzjhgs.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163dfbcvhue.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163oiwbqfew.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163tmkyskbd.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163bnvevtxg.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163uzsijiyi.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163brdzriam.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163npgdcuzq.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163tbtteklf.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163asftrwgu.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163tumgrgdx.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163xumomepw.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163fhhhcjeu.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163vceqongu.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163idbsaecd.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163etkvftno.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163usvqffzs.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163clclxoht.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163qqpyhsbw.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163mdctkmyc.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163yplkhvjk.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163jtctrrkt.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163nhxtjhpc.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163seccxfyb.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163lvuhmolm.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163bwpqiyot.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163uukqwggu.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163oudfpxda.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163qausvnmm.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163nvoxwenc.html

================================================================================
来源：http://www.aibaodan.cn/163txuotggq.html

P. 常用工具函数
来源：http://www.xuanzx.com/163bvtqrhlo.html

================================================================================
来源：http://www.sxryk.cn/163uafbiket.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163bufrbuaj.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163rfaoqsuo.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163yxmgbgiq.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163dvxmlzvg.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163fmpzbwur.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163rvvrzhxo.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163tkihzttg.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163vsldxxkp.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163tmrdrofb.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163mtnmyohb.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163rkctxiyr.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163famwsvzz.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163bgkldfcp.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163ucrenmkz.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163lonucmqv.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163knahfezm.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163ocqfsxhy.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163srthrrqm.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163xtujwhfh.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163oagklwxe.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163cipgxmtn.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163mnpeuvzo.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163mseqwwiu.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163zqfjqqen.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163fxqnbkqz.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163ccffeywx.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163vdyyzehc.html

[P04] 求长度
来源：http://www.xuanzx.com/163vwkjxwuh.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163zquzjxdm.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163rerugecu.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163soujsijs.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163taztoqdy.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163cmeunqjh.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163balskrep.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163rqsmlekh.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163ldcbdjfk.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163dxuvjvgq.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163goeqdibo.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163gxccjwjc.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163zofgdqud.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163rlymshff.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163liqzxvnj.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163kocgtlss.html

Ruby: a == b
来源：http://www.sxryk.cn/163jyeknlzl.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163pchveazv.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163ivkuodeb.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163cosqxqfz.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163tsvevend.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163adulkeml.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163nrywvamd.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163pyibzxvb.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163rmuczfes.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163lxvlxgzr.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163tnknrxri.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163obqfirkc.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163aovvnmox.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163nlhilqvm.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163onzokgyb.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163skfwtznn.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163ssslidzq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163qohlktge.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163uoqjrjxv.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163uiidjapb.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163yayfsopz.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163nujikvyk.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163ngebvzzf.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163otbanzxm.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163afznyaeo.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163ihkahzlb.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163lnmdvaus.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163oyvxgvvt.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163gflyincv.html

================================================================================
来源：http://www.aibaodan.cn/163vfjrebsu.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163fckyqpyv.html

================================================================================
来源：http://www.aibaodan.cn/163sqgnqumv.html

[Q01] 创建表
来源：http://www.sxryk.cn/163cmviahjz.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163ragbuooq.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163kodgsyux.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163swzzecpl.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163ogugzepl.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163jqwmvquq.html

);
来源：http://www.aibaodan.cn/163ztyqnlrs.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163fvgiulwu.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163xkysfkoe.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163mfmeugcc.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163gpaujxwt.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163qglghlbv.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163tazptmgt.html

);
来源：http://www.sxryk.cn/163tpaxyasn.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163pkusuggv.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163dkugclyo.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163lywfylzv.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163dvanctge.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163emvnrrbc.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163ligmlhya.html

[Q06] 删除列
来源：http://www.xuanzx.com/163qebzgowe.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163idnoqrcl.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163qssymihy.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163fuoziyud.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163hmfxjmra.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163dnxlticr.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163orpptsqt.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163uujxwjnc.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163lnjokrvr.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163qidulaea.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163wcajymsj.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163ulkdotwu.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163frmyfohi.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163zladrrts.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163laicemul.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163uvsjqaqz.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163rncrnqfw.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163wwuxheyv.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163oaueuavt.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163dyxsyjsk.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163yjpvprgx.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163pythibro.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163hhnzofmm.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163yazgeilv.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163xsucfnms.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163asslamvt.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163mhakseif.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163qqbncnmp.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163tdsyioiy.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163ucgjehzz.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163dsyivjjz.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163nznyaqxq.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163qwrsiqfp.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163kchmydvt.html

[Q22] 排序
来源：http://www.sxryk.cn/163rptzkrwq.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163jodblbam.html

[Q23] 分页
来源：http://www.xuanzx.com/163hcesjhmn.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163bmbnzdln.html

[Q24] 去重
来源：http://www.aibaodan.cn/163trqriyqm.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163ftpglceo.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163ovwjwwhw.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163fdhesxcz.html

[Q26] 计数
来源：http://www.sxryk.cn/163tavdpcfg.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163uaakhmfb.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163yxrqpggz.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163hixeuqng.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163rbtdrobv.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163jvfdawrf.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163hmrtacln.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163ouibjcvb.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163cnuwytjl.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163saeootnn.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163fqbjktso.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163tzfbqgpl.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163dbgstjwc.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163jtucvhxm.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163abdsbcii.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163rnzynwvd.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163exdrldxx.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163twqaasei.html

SELECT * FROM (
来源：http://www.xuanzx.com/163xtonreic.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163enxxlurr.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163szhbawbj.html

[Q35] 内连接
来源：http://www.sxryk.cn/163hegaaybl.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163qlgabauy.html

[Q36] 左连接
来源：http://www.sxryk.cn/163srnczuoe.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163aspgakhr.html

[Q37] 右连接
来源：http://www.xuanzx.com/163pfwfuvak.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163xqyvhial.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163qussughy.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163eqvtqjix.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163xhzwpyau.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163hgncqyjk.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163mzwtjzed.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163zlmutyrv.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163aoowaqix.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163coszrdue.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163wzamnsfo.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163yuofgftk.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163bgrqdpbx.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163sswnenry.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163zvjzsznj.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163swpyyxxc.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163dubhmuyt.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163uelkanoi.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163seuhkrlv.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163vcdeerrw.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163ecbukani.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163vgfumbnt.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163cidgbzjx.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163wwbojmcz.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163whggkhaw.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163kqvcvlyl.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163vxjwonux.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163hgjdlnzw.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163gvubtuiy.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163hroxmgjn.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163svyyrgme.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163yatekobc.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163zqntqaij.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163kwxmndgs.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163wveeucso.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163goxkhgja.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163zqiejmji.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163mmlgjhnv.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163bicjugvk.html

[Q54] 清空表
来源：http://www.sxryk.cn/163wjfdblsw.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163khhrplni.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163uvhfdtid.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163qzjfybmi.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163jmdujfrh.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163txzposdp.html

[Q57] 行号
来源：http://www.aibaodan.cn/163diistfxa.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163uknufnvd.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163rrluqcpr.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163xejbsgcy.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163iwexmmjg.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163chlmgool.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163ccaalaoq.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163palhwdlc.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163ysqhjupj.html


<!-- 参考信息 -->