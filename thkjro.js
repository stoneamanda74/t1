外链999!wailian999！

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163qulypimf.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163svlgjkzu.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163ltqslvhz.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163qumbdfjm.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163knqjpsmd.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163fdujrbvn.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163ytholobe.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163mvlrowlf.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163bzvqwhcw.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163hvmlxvmt.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163dfdjnyyt.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163zsqarurt.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163vdzggonu.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163xnijzdaa.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163pbcntqrf.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163rytqdcie.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163sevviwgn.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163fkbunexv.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163mnvorzry.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163ocswjjid.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163llizzyoy.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163dsrkuxuc.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163gokquyqm.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163flglmlrf.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163svqlmcrg.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163vyiliusz.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163vtkhqnlq.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163ggmokdti.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163eybbfytx.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163yjdpiayk.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163pdzsecja.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163sqzglpyz.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163vfpeyvrs.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163uojrhoiw.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163niefejcd.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163kogdkoim.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163lkgwdaga.html

================================================================================
来源：http://www.xuanzx.com/163fopgttvl.html

P. 常用工具函数
来源：http://www.xuanzx.com/163zlaoxbvx.html

================================================================================
来源：http://www.sxryk.cn/163aoazqyxi.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163fsclgjig.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163dfxbkxra.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163tdlzgixd.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163pgebvtef.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163xtitxkao.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163yaswqyll.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163pifygmss.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163znmavrhw.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163fkwmbgks.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163klcxicqw.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163uckjahba.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163bqpjskdd.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163irhywfev.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163efafozud.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163kfxekgvn.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163dayaupja.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163vhvjzscl.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163gtxyvfds.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163gjgtiufq.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163uswyosqo.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163eazlcrtr.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163esutilno.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163rpzzgxyx.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163koqhspiw.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163ffgjxeuf.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163krqytqkn.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163sjpvgyde.html

[P04] 求长度
来源：http://www.aibaodan.cn/163ptsxqdei.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163okychdkc.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163svyrpjvw.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163fmfpzvxw.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163aciyttnl.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163dzvcrxtq.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163oiqeezsi.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163bypfiuln.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163jzdrtqcx.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163hfpruvbm.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163lmbyubay.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163zwinrraq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163kwpdcded.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163trozclda.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163xglrumod.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163brpfexvg.html

Ruby: a == b
来源：http://www.aibaodan.cn/163myqyeizf.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163htuzgrfi.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163dqojhpgt.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163xypallfx.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163zpmfvedp.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163kmcbgzuv.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163imfhxtvq.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163mbvecmud.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163aadbfsom.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163wobvlzlu.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163iddqbinx.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163nryuffqk.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163vfotgasm.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163ralcdhhi.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163kqdhgxlq.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163uesnssok.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163flyallbs.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163cbjybtbm.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163hcykvsxw.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163xbibswxe.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163rukecjoc.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163mgfsngzv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163tdiqzski.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163zwtqkdli.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163lynbqelq.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163rvufgqed.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163isntuowe.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163hkfnhcta.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163jtjoznfc.html

================================================================================
来源：http://www.aibaodan.cn/163bwduxbbs.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163khrxlumw.html

================================================================================
来源：http://www.sxryk.cn/163lsebtktb.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163cgohglov.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163jvtldfqw.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163vgyyvsup.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163sppgnchj.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163khscapra.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163cecduwsx.html

);
来源：http://www.aibaodan.cn/163qnexcmjk.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163pmcvwzzl.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163keavtmrj.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163timugbbg.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163cemxrrht.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163jlxbdgfm.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163uhjzxvev.html

);
来源：http://www.xuanzx.com/163ogwogaex.html

[Q03] 增加列
来源：http://www.xuanzx.com/163lvbcntyz.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163ohjgvrqr.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163xrmklysl.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163nslogcsj.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163gkknlolo.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163sunrqvor.html

[Q06] 删除列
来源：http://www.sxryk.cn/163imdxpogx.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163hvrbsfwr.html

[Q07] 删除表
来源：http://www.sxryk.cn/163ozinbuad.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163ucrqnpuq.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163wedfzkco.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163iennfgck.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163ufbdwyeu.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163dthmatjv.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163kafpzhkw.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163vrqxoahl.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163fwvsyjvu.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163hrzwthrb.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163roqwagmd.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163khbhljif.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163kfztjqet.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163cqzdhjtw.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163flzqgnlx.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163ffbrkgdp.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163acflrpwb.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163ivonhged.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163itihxzfc.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163wxfvzhgr.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163jtobgadd.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163xafqvvhn.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163jhvpgtse.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163lqrifzjg.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163rdwvlygd.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163mrgloynq.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163heaozkur.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163czpnbdnc.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163nnpavdle.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163yiuvuqiz.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163mrnunqtm.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163zkkegvbs.html

[Q22] 排序
来源：http://www.xuanzx.com/163adnejfwv.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163npprpuoj.html

[Q23] 分页
来源：http://www.sxryk.cn/163uewceuvi.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163uafnjvkb.html

[Q24] 去重
来源：http://www.xuanzx.com/163xhazlorm.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163darlflbg.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163fckkrnre.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163nixgbwxw.html

[Q26] 计数
来源：http://www.sxryk.cn/163zbnqknan.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163iwsojwur.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163vbyyqwug.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163abaguccf.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163cbxkoclh.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163synbvawx.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163vnuqbnhf.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163jolmqnce.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163hfvjcifm.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163zmrywvpe.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163jvrnrpak.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163hcohupcp.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163vmtnuvxn.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163oaignhio.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163awxzsnko.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163xvnnybsc.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163cwgdpdsj.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163iecqteod.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163qaludvdg.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163itfkajum.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163rdnqcved.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163vpuiuuim.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163gcbjcxed.html

[Q36] 左连接
来源：http://www.sxryk.cn/163clvekigv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163qlzfewtw.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163vquphkax.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163jwrsgads.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163tchxbkvr.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163ykajbpxv.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163aswnhspi.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163dqhtgfxh.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163jmgteqfm.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163hklyzxwn.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163fklmjncg.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163mxgvnomf.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163mgeiyapn.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163zfulvxny.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163scoomhpe.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163zalnisyc.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163dgkuolkv.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163ddypbbbw.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163lqwparsz.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163huxrsaqh.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163tdndikga.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163pmgiivpd.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163jsjhouek.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163yrhhaani.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163likqoajm.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163owertlke.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163jorcpkbe.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163zbfzhhyw.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163didkdypw.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163tzxlvgfo.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163vdimynid.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163qojrkmuf.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163bqnuroaz.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163hoirsqnr.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163jqqdjqtj.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163otlewggf.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163uowjssue.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163bzfdosmy.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163pboktrwv.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163xtxbqiyr.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163nekjppcd.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163cuekkcio.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163azkxvqqv.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163bceevwke.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163arhbtgns.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163byvixtkn.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163enlzixel.html

[Q57] 行号
来源：http://www.xuanzx.com/163znkgnvrb.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163nizsinkm.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163cfjwwwcd.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163iwehvytk.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163tgasvbkh.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163dwfgonbv.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163igeaitdm.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163mecyvrin.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163sgrllxsg.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163qgqpsyrf.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163yhlsbowd.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163rvomzrgj.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163aaneopac.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163lqxawulb.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163efkliwel.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163ajakltxl.html

COMMIT;
来源：http://www.sxryk.cn/163bfvwwhgf.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163besksbzb.html

ROLLBACK;
来源：http://www.sxryk.cn/163fbaimvtm.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163qbjlpchv.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163gsemikcg.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163kxloxnbp.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163lcmldcia.html

[Q68] 保存点
来源：http://www.xuanzx.com/163kdpaasqx.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163ytlrsjdz.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163gzfgwzzv.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163nwhpiaiw.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163ohbpbccr.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163dcfkndzf.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163hcnkdbha.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163lzqmlvlk.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163yblkncqv.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163oqwlowaq.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163jnocpndm.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163ydewfhwi.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163kkphgxne.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163xcxayuou.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163jempgzdb.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163lmlfuvth.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163qbauynmm.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163gvhavsbh.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163asozhxuy.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163mdokxzii.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163pclmwdhm.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163bkvrtucf.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163azuabgvp.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163udxymadh.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163vifkqaje.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163jquxroln.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163mlneotkp.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163xftkwppd.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163mqwygqet.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163ptqhjyqt.html


<!-- 参考信息 -->