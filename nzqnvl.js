外链999!wailian999！

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163kkxqkigm.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163zisfmhhz.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163qtanvtub.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163mkvlsllg.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163ywgkpwlz.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163jotmdbcl.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163tphaipci.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163tilmxndp.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163jxepvslx.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163xyetqlop.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163fyaqttom.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163ufsnldif.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163rletkfsj.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163qfezbelj.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163algwgtgn.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163ngaawrfb.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163xenalwmu.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163zrpzmbqw.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163nonkxmwt.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163kfslopne.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163zdtdihxn.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163jnhdjcbd.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163qozvtdpu.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163fyeunwcv.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163cphuykjf.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163wtasyaql.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163znmeidqc.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163bpgjreua.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163osxdvgiq.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163otfnuowl.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ewiciiks.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163otknnrhc.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163mbfwjdgv.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163hxiixqlv.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163qmbmejub.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163afreeqbr.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163medgyvuv.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163epqhsuqv.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163hxjuhzmh.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163vtcshbnk.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163ynppsqdp.html

================================================================================
来源：http://www.xuanzx.com/163axskkcch.html

P. 常用工具函数
来源：http://www.xuanzx.com/163pvyktzvr.html

================================================================================
来源：http://www.xuanzx.com/163klafknoj.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163eezktqqd.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163xzizsont.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163jxqxcref.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163wvhbvmky.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163pgvhbwjx.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163uuaarlfh.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163jenvtseo.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163bpkkquxw.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163nfvjvdnk.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163zirndfpe.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163jjwlvqds.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163pxcyirco.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163llglvceg.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163czxdprrh.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163tokcdapy.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163yuiaysrv.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163zvfaghtx.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163zcwwtcta.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163aiwleudh.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163ofhcprfh.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163ysailned.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163obtwujum.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163daedzxhp.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163scqlxahp.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163befqvfqh.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163jhrmwlan.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163uixldrnf.html

[P04] 求长度
来源：http://www.sxryk.cn/163hnehkiru.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163uflauhhy.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163izqzcjob.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163hplcmohr.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163zkqapicn.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163jbzhebdu.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163wovdcqcm.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163djqylwxw.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163ddnbwpph.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163xhoueyze.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163grtekmhx.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163fmwkpnwk.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163qkqqqvhb.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163lewyqmvs.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163mcaunksc.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163evbrgiwo.html

Ruby: a == b
来源：http://www.aibaodan.cn/163nlmwwhur.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163ezubwslo.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163ucrkeiup.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163jzgdtydp.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163fbelefjm.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163sijkjeyx.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163ztotaqot.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163kboigvmf.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163oapsrkkq.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163ejandnry.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163skebsfbz.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163putockht.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163mwxolowe.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163ncxafyst.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163veizlezp.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163fmlpfijl.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163xwltwfeb.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163tvyeezjz.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163ucnmabgk.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163apobbhdr.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163kryfixye.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163mdhtmoha.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163wnvfdhgh.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163qrgsxnfj.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163nbpmavqr.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163xizmwbyb.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163dqkqqfjo.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163tsworuhk.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163mgzcvbnn.html

================================================================================
来源：http://www.xuanzx.com/163twturpey.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163zktcuael.html

================================================================================
来源：http://www.xuanzx.com/163njhtubff.html

[Q01] 创建表
来源：http://www.sxryk.cn/163xqbjmmpc.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163dqxofigv.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163oearalsx.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163wdjylyzd.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163vbdwazxu.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163kifwrzqz.html

);
来源：http://www.aibaodan.cn/163nhpqciel.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163cobfncbi.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163nwthbspj.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163xylhobkp.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163goauszwj.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163zqfdlclq.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163soqlqppw.html

);
来源：http://www.xuanzx.com/163wilqrqvq.html

[Q03] 增加列
来源：http://www.sxryk.cn/163saufsydi.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163qpjfutye.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163lxhkkbkn.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163ikzvwcjv.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163muzkskub.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163ukvrlcsu.html

[Q06] 删除列
来源：http://www.xuanzx.com/163zmuppndp.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163fvkemial.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163bauxwbal.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163yftfpurk.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163amjmnyub.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163cnyynyxz.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163xtbxguvm.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163dyojxyoh.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163wlzkatyg.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163lygahutl.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163ojioyteq.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163yjxbcseo.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163sjzpgaun.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163hpwubmtb.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163ivgmidua.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163tyjjmwwu.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163bppzlhsp.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163ibqvtfnu.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163onehltpu.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163fvlcfsvw.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163lytivjbo.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163ermshtav.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163sipcrkac.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163ebnvcjcx.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163koncoirb.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163mrfjflns.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163rehnpsup.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163mihcsxpq.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163aqqvypbu.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163zomyzuud.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163ynquwteo.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163anegatfi.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163eatyocui.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163ayimvtpt.html

[Q22] 排序
来源：http://www.sxryk.cn/163efbvougt.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163jyiphbna.html

[Q23] 分页
来源：http://www.aibaodan.cn/163eynttcvi.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163rhkptqmv.html

[Q24] 去重
来源：http://www.aibaodan.cn/163flylzpoq.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163kiarhehd.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163yigzeuhe.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163sndxpqmy.html

[Q26] 计数
来源：http://www.aibaodan.cn/163uaxgipqj.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163yysuekiw.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163qkzqtnlh.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163nwfexbvd.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163hmcocwak.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163dgqqhnrh.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163qdmpsxbf.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163rsagbunu.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163tgxyoyxg.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163sljfkjip.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163aholiwpw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163pohdnajn.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163ipyzluwj.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163dzssqtpq.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163fpghbaiq.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163rrmpagew.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163upsdkrzn.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163ywmyxvrc.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163rrhaktsf.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163kyfumrmh.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163qiqvkilf.html

[Q35] 内连接
来源：http://www.sxryk.cn/163cooyyrog.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163emjhxtcd.html

[Q36] 左连接
来源：http://www.sxryk.cn/163frsoukbb.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163cveuslup.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163bkeiidmw.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163prjgqtcy.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163gjvxkakv.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163hsxaited.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163tpjpxids.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163ubsfuvng.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163ygmasiwp.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163bftdsayd.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163htjvnkeb.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163wvxrbdvx.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163pytuxcjc.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163wgsqwqyj.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163kyenrvux.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163glfdzdeu.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163bheknxrl.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163nneaqfia.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163fhynpjkf.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163ssvvmzgg.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163qzoyzqjz.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163tyifctnc.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163xjicaajb.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163wikoodoa.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163dtalcrwd.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163rkcsueff.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163jytmuxjn.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163rhvbaobk.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163scargviq.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163rkgavjrf.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163alytkten.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163cghwssbk.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163bpjundyj.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163lihagoke.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163nioycgqe.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163hstozrcj.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163uvwmgeax.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163gxttqwjh.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163dkvgsthg.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163wqnnjott.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163tjugmotg.html

[Q54] 清空表
来源：http://www.sxryk.cn/163lfhgkpvn.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163mnkckhne.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163hminpifd.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163dtuosuqi.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163mwtymylr.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163xxttiynv.html

[Q57] 行号
来源：http://www.sxryk.cn/163uojcjxej.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163fcdupnao.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163gdpkyrtn.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163kyjiychd.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163lpgkcmjn.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163xrrhdzef.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163odsrtvaw.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163cxfgbdkn.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163tceqpria.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163awowldyk.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163zfqrqiax.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163aedzokiq.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163slhaiopr.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163hiobyjwz.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163bkwambvd.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163kxpgusfz.html

COMMIT;
来源：http://www.aibaodan.cn/163aufduxtj.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163repdvsgs.html

ROLLBACK;
来源：http://www.sxryk.cn/163kfjuuqbe.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163bnylaqmi.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163qbuirijr.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163sasakjli.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163peflnsgb.html

[Q68] 保存点
来源：http://www.sxryk.cn/163vdlmtxni.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163dmlufajm.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163mcesnlti.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163yztddjvh.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163rgphcvwm.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163ubemdhog.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163nigqeqfu.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163nbcazlcg.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163werfvhxb.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163nawvqklg.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163bykzzpdo.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163ytxobytd.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163bnngjohz.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163vvvpdaxe.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163bifyyiin.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163ixmpzzsw.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163lrukrmuv.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163dxamwwfe.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163rlduniix.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163jrkuhhoa.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163quipcrdw.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163slhvausq.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163iuhbfsdd.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163perdrcpu.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163ewdgepgj.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163gtlrqene.html


<!-- 参考信息 -->