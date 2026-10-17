外链999!wailian999！

[O02] 使用线程池
来源：http://www.xuanzx.com/163fiifprbd.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163uvieoehp.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163bezvceiv.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163beulktim.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163tjmeommh.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163arimefno.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163ohodearr.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163ylxgpaul.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163tvyjneak.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163hbgimpgs.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163evqqxxam.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163kohrqbpu.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163cxaawexv.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163cillyxgl.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163dmkznwox.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163bmeqwqdq.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163msxllmda.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163hjvzkjqy.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163rbowhexm.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163grehaodu.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163prgluytw.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163qxjqxynx.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163ybafzejs.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163woiixtik.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163gfxdgypm.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163fajveiay.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163umjxsnwh.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163ljsckhqu.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163dboyeoje.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163mgoltehm.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163gczqavku.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163tjogbjxg.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163ukppahjw.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163hsvoflcz.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163qkjjitrs.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163xpeddfnu.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163qfylmpga.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163ptrdyzxc.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163zwjoujcy.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163xgqizami.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163eciguesb.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163xthhrpgd.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163lqnkutus.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163hdfvhrkm.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163vrdoyxqm.html

================================================================================
来源：http://www.aibaodan.cn/163gskykods.html

P. 常用工具函数
来源：http://www.xuanzx.com/163yillmlog.html

================================================================================
来源：http://www.aibaodan.cn/163qozptcaf.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163okwyaoko.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163nxoqrlim.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163lrdbgsha.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163sirtasxd.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163opxanlco.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163mhnmpxcn.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163lymwlinm.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163idlnacub.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163tvbtifua.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163dvfqeggv.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163htlaeujz.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163nhihcttr.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163yqemilwi.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163gpncrvaz.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163kxovldio.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163lagjsyoq.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163dahmgint.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163nqutnfiz.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163lwlzevto.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163jbtcpywn.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163zkhsmsrk.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163dwcutwjk.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163qdsrnjan.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163qujehkyj.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163mpvluhhe.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163zwskkrmc.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163trskkvxx.html

[P04] 求长度
来源：http://www.xuanzx.com/163wemruyvc.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163rewesbef.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163axqgbjer.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ipfaydiw.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163rwvdmbzk.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163wkoamwad.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163fdtjsxkr.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163qzrhjlth.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163jccvnrkk.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163kilmqgag.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163psdmxygd.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163qsihcugq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163rtqtmbdc.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163fgehumdx.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163mbzmitqx.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163sloypgjb.html

Ruby: a == b
来源：http://www.xuanzx.com/163fkoqcftu.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163xlaavuqr.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163mrrbrrrh.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163dipzwpvk.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163ikbkygdg.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163bpdfloeq.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163pykmvblc.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163smiomjwy.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163yhfnsynt.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163glsngoeb.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163kqugxknu.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163chjzzrsu.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163actmbqcj.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163stmfdpln.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163grzhxrum.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163vyrmtfmr.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163wehfmckj.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163ewegugke.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163fugdmxph.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163hdspggnc.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163ntalfzbl.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163fztakbmk.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163wlnecics.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163aegkrusa.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163vbidwpor.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163kndteloe.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163fhtfliks.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163ddhhhges.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163bpugqxfc.html

================================================================================
来源：http://www.sxryk.cn/163tjcakqeg.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163qtelhenq.html

================================================================================
来源：http://www.sxryk.cn/163pdiftccm.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163jxmalexe.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163uolxxxka.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163necdggbr.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ukxrezxl.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163zdogycne.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163mcjzcvxe.html

);
来源：http://www.sxryk.cn/163tneddmrn.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163zcuzftce.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163huatfvvy.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ibkjhxvq.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163sjjpkbje.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163rbguawjz.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163jnqqfndy.html

);
来源：http://www.sxryk.cn/163wwlmlzaw.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163dwvskpjz.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163cfzdlcum.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163uktpbkwm.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163ihjctozd.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163arzivexo.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163ozlrnuyo.html

[Q06] 删除列
来源：http://www.sxryk.cn/163fndeveey.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163bdkiobnr.html

[Q07] 删除表
来源：http://www.xuanzx.com/163ycqroqaq.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163dqroffdf.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163wwgetsfk.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163qlzsykzj.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163zyultnur.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163hdonivcz.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163jxzykxdd.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163apcxibjy.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163rxaybszy.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163cehempux.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163kfadrmfv.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163unfzxyiy.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ijrhfdny.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163naskejbx.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163npryyalk.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163lgquqaog.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163rhogyauv.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163djdscoev.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163rivyrdgb.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163gcuytkpt.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163xlxfmbzt.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163svqqnnbt.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163iclzcomk.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163gmnlcddr.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163uukehojc.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163wjzcyqwl.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163kbejnqif.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163cjkmujuq.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163qulosrok.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163uxxvnbgn.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163yrjxgsbx.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163cpxnwnco.html

[Q22] 排序
来源：http://www.sxryk.cn/163favseguk.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163qntrhvsp.html

[Q23] 分页
来源：http://www.xuanzx.com/163zvzcudwy.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163vlysablt.html

[Q24] 去重
来源：http://www.aibaodan.cn/163wnbgwiup.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163fzggrzwu.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163wlppqtxz.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163xhovmqaw.html

[Q26] 计数
来源：http://www.aibaodan.cn/163kgwuyetn.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163cbozggtg.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163tyqtlylc.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163qgwuwmek.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163lczvcesp.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163ipowqhfm.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163ammhxjqf.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163kadamkef.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163etgjksyk.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163hmpprntr.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163mfdyqapl.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163fkyhueab.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163jmxozhey.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163qpfuiwpg.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163soujzloc.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163htdqsqxq.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163idfuqofq.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163dpfbpxgl.html

SELECT * FROM (
来源：http://www.sxryk.cn/163goqlrbto.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163nacuqlxi.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163snwjlsng.html

[Q35] 内连接
来源：http://www.xuanzx.com/163dpavomek.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163xeemrxuz.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163dbgfrlqk.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163kslkadyq.html

[Q37] 右连接
来源：http://www.xuanzx.com/163nxgmfnbv.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163gbdxxbkl.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163ijzxauis.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163zmxvnjxf.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163wutkwpwy.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163bfosghao.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163xorrrbga.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163nbfmetbd.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163wccejsby.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163qgdevepy.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163vszanwbj.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163jkrljytb.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163ojknwxun.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163hgvrrfft.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163cyitguzq.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163ydmgyuuz.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163xeypsgxl.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163wjgfudgx.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163yerlobgz.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163zxyvpgax.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163jlsjulin.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163uomptdgg.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163vrsefvii.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163fjsuedgd.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163nwikcpvx.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163iusecaiq.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163pqnkauyq.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163lzxudofw.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163eyrulyyp.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163uhbhtqgt.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163qmsjyusz.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163lnhnarct.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163cjrckskf.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163guakvxgd.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163spkednex.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163unjvfdva.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163qngdovwi.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163tmctxumw.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163oxleujzu.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163syyqmtfl.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163kbwamjyh.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163alutvpqv.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163gtuhzvso.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163wypqdded.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163xmdcdwot.html

[Q57] 行号
来源：http://www.aibaodan.cn/163mxlsuray.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163jaygfpus.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163bbialcrj.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163ufmzdkez.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163nutehryn.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163nhqnetfg.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163clogwvtg.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163ccnodhpw.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163azbyavex.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163wsqdhiyw.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163aorxkhug.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163trzulmfo.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vewnnazi.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163imrrofdk.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163fdmhesnl.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163ozqepuiq.html

COMMIT;
来源：http://www.aibaodan.cn/163szukewic.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163woihbkst.html

ROLLBACK;
来源：http://www.aibaodan.cn/163wllfeslh.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163ydbebsaa.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163htybwqhv.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163qzvllpzx.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163smounmgh.html

[Q68] 保存点
来源：http://www.sxryk.cn/163dnjrkfls.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163jrbzuika.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163hcflcipo.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163cmmblueg.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163fbcvffdh.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163nekidoev.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163sxohfeyi.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163wrktaxry.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163xivslgds.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163xtfvsupv.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163ovlwbwhp.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163jprxpfyq.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163ucotzbdi.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163izlgmgrr.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163vnhxqslx.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163iuiptnwc.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163wdyuebec.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163cnxnbovh.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163ihxzbsaa.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163ejqixvru.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163tbsteuog.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163pvzzisbb.html


<!-- 参考信息 -->