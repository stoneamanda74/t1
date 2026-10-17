外链999!wailian999！

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163hemetlki.html

Go:   go f()
来源：http://www.aibaodan.cn/163vkccgclk.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163efyptydp.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163qtofpjuk.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163axlwqbwt.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163cixhbymy.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163slshqfpg.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163oumrkrdl.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163eptwviqc.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163bgmplszi.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163dddkyhtc.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163pzjoiivi.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163lksjhbaz.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163ygajlkig.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163ykqbrwcf.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163lzsizxdc.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163hnocrxbk.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163mvdfapjg.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163ipavknes.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163avqfohvk.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163eoycqwzx.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163xtvrphcz.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163gcqhgsok.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163bebxocjz.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163noweoxol.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163xhcwwpjd.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163ovhyqrfi.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163bayadycj.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163zqcmnsds.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163vnsulpth.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163mrlsqxzw.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ioofgzbt.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163htwamflb.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163brwwpbsq.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163zgdnnuvf.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163rrrvkdzb.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163vemagpwt.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163osfcuvxm.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163xzvhjfet.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163hyluewhk.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163rlfmioju.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163kxwjrdzy.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163igjzlozj.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163bnzgtzqb.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163eqbrizxr.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163fdwadanj.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163wotjjzgi.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163ckfswyjk.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163crcyojix.html

================================================================================
来源：http://www.sxryk.cn/163uplzdbqx.html

P. 常用工具函数
来源：http://www.sxryk.cn/163foynogtz.html

================================================================================
来源：http://www.aibaodan.cn/163tnlgtylr.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163jjafzzjk.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163mvicmxut.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163xezjonzu.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163lkbqntcj.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163lezpnswe.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163lxrdccug.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163haxkhrfo.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163ftqnwamw.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163bpdqjfrf.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163hkudiubk.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163zumxwqpv.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163zrlcryfo.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163fjioeuml.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163efmhudrv.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163uwoaplik.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163wdctkcbj.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163qnzzfmgz.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163fbitaxqc.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163lnlxezjq.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163kqbycaxm.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163oijvjwxx.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163irvptobk.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163hpznhtoo.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163hxnmvnpq.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163kusppsgv.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163ophwjqxt.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163fmlpqskj.html

[P04] 求长度
来源：http://www.aibaodan.cn/163fyukyepa.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163fjipvlrj.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163urlnxmnv.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163eqdxorep.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163xjgxnnsr.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163rkjlchjl.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163bygzwygd.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163lvtoazel.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163pbxeuzkc.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163bdfrseyb.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163tgemgrtf.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163godmqanz.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163mvkmwabo.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163xhnyplyb.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163tsqbyquf.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163ptedhxmh.html

Ruby: a == b
来源：http://www.xuanzx.com/163geipahon.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163bcuvajdp.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163vnxwrbcj.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163stixudga.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163klquuqlm.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163wkuxfcdr.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163laqrrtoq.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163pudugiej.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163ovnowtxt.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163ztacmmqo.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163gwyifxmf.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163cugvoxix.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163dsxbjszg.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163dfyrjvrz.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163leslljle.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163jucxyabf.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163tuvqzhow.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163pattadxh.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163xgjtxjuz.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163mjaihlgz.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163gwnlkucn.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163ldqktxlt.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163oibqsvyk.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163yngfdicv.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163oqdvhsco.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163nxyquwie.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163gxomepjr.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163asvpmxbv.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163oifitmnp.html

================================================================================
来源：http://www.xuanzx.com/163dxtmlelv.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163bmxrwbtp.html

================================================================================
来源：http://www.aibaodan.cn/163dmkgzzpz.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163pdbwrqsc.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163tgslktgy.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163anbsbpfl.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163hemazyem.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163hhwnywqj.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163pusccgxa.html

);
来源：http://www.xuanzx.com/163aoxtblce.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163fnsicchn.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163lbymprhr.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163dleeghki.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163diqfbthy.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163fpuvvgqm.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163dtnnvmmu.html

);
来源：http://www.aibaodan.cn/163pmpqzeih.html

[Q03] 增加列
来源：http://www.xuanzx.com/163sqbocwfr.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163zmhralei.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163htbpzinz.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163holscvki.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163lujoxbjz.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163fwovoqzl.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163byjditjm.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163spihvlcy.html

[Q07] 删除表
来源：http://www.xuanzx.com/163ohhmbqoz.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163iuvsadyt.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163vetnymxm.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163ytqzumyh.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163qlveaanz.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163irzklsen.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163fvgahkav.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163osajxbnu.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163wawvkqvw.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163tblbeclg.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163jwwlqtmp.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163qiniaqlg.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163fibijjtl.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163rxqsnwzs.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163xzjhedxv.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163crrggbsv.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163rlewusgb.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163tswrggrh.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163otktgrei.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163tgntgqwk.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163ajyplhik.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163eeieibmo.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163vynlpndf.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163jovihpec.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163wevrccbv.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163plgartqc.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163fghqmfev.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163dqsyenot.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163dlpvksnn.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163ouldplxm.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163xuerxhdb.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163nofkihvm.html

[Q22] 排序
来源：http://www.sxryk.cn/163sninuoic.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163hbsitafh.html

[Q23] 分页
来源：http://www.sxryk.cn/163lvqkkgll.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163hunhhgnc.html

[Q24] 去重
来源：http://www.aibaodan.cn/163lagowbuq.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163maclqotr.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163pikjpzcp.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163jxippzfs.html

[Q26] 计数
来源：http://www.aibaodan.cn/163ppzxbhsn.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163gapnxgyi.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163crznwevv.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163ugulztaw.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163iezqtnpv.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163mtolomvj.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163wgrjhrbq.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163icktqbfl.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163qdyhbcco.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163mnbetepw.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163jvkmqemv.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163wvuqnqtw.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163fssrxqkx.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163mdnyslxe.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163vgplsvtf.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163flachgyb.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163nooirhke.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163hmhwjnmm.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163mhhrzusb.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163avnfshwh.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163zjuehjvh.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163owisxpjx.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163znncvhtg.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163lliyushc.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163pdpghlpp.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163wfanmyei.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163mmbvdpss.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163adosxchp.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163zewtptdx.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163zdmclwqc.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163hoqdzngp.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163wlengnqo.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163kguihsmi.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163incoufyu.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163huvrhodj.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163kaqneofx.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163jimfagkr.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163ujnwcbyl.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163wmplxlmq.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163vmsabdxz.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163mkezusdg.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163zsuixnit.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163zgaaqyos.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163lspcgjrz.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163dathhcrc.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163olhknivd.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163hywrxcda.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163mrwgiqlz.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163yxomzctt.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163hiecfumx.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163ikbmxdfd.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163vzvdjfvr.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163yqkdjqgp.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163piaiaadn.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163njrqaffg.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163ebrrynxn.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163ivfpnpsg.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163wtfjmdhm.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163lpilmmfe.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163pmgrpajy.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163tqhjatdm.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163mqkabkjr.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163cpbzejlm.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163bmpipbco.html

[Q54] 清空表
来源：http://www.sxryk.cn/163trknzqjb.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163grcghfgj.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163uwfjejrp.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163ygkseulw.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163rxhxjnxz.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163lomflisx.html

[Q57] 行号
来源：http://www.xuanzx.com/163tewqreht.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163wlpwadzi.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163qggtddjk.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163tobgnrey.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163msurwpci.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163jqbravqv.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163zrrtohra.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163ihbcrsag.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163beiiekyj.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163thsdhllz.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163onhbuvkd.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163deavhudf.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163rnhsymeo.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163wbrpeboz.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163addufmjg.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163zzwlndtq.html

COMMIT;
来源：http://www.sxryk.cn/163mgdjgdnn.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163owzyfong.html

ROLLBACK;
来源：http://www.sxryk.cn/163azteebou.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163hyuvoygb.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163inlazavb.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163lobvjocr.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163rysnqonp.html

[Q68] 保存点
来源：http://www.sxryk.cn/163wxouaonl.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163mujqjbvx.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163xnvdvttl.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163ltuyohnq.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163uklpohaq.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163mpsqgwyq.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163cxlzzqxo.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163ogqdnpny.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163pskwslee.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163gvibjubo.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163yoxnieon.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163qhravktj.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163lwifcccc.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163debhbpcd.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163mfdskhem.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163nvhgmapz.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163ppfgfukr.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163nodksstv.html


<!-- 参考信息 -->