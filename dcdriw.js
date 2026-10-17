外链999!wailian999！

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163bttvhxpd.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ftdjpgof.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163agznpatd.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163kjuproci.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163sthxwmyb.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163jfwzuyaa.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163bfhogsqe.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163kkeiqfgr.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163jsldirrd.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163qfsjiwxm.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163ajwkczri.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163bvnqoatp.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163raqanqgs.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163klkojtas.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163tjildfpz.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163bwxclkwk.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163kpywmfpa.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163stvkyysi.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163vacaexce.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163blzbwotn.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163locmcgck.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163ptysixbl.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163owiljtbu.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163oqqdpaqc.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163lsgfesat.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163qaxvwwqe.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163upccysqk.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163wnitynen.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163vewaxuzv.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163eqthukwh.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163ghjldbvj.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163ibyogrlx.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163vwjophhn.html

================================================================================
来源：http://www.sxryk.cn/163vmuwbfyy.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163bjzibudp.html

================================================================================
来源：http://www.aibaodan.cn/163acziztjy.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163faxorzms.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163uboqxtxt.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163slernnfo.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163hnzfyopb.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163zpapuzld.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163drffswlm.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163trvpimuu.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163lxiugilp.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163uelewdky.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163kxeqhopp.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163rtfsxmbk.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163demutzxd.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163clllrnla.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163tnqboktd.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163sfkxlvqi.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163lvhymggc.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163wuohejhv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163ypjmqnfo.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163lchkqwjm.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163qroyfkip.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163rzamkihi.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163sprfnwln.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163onghuywa.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163gximfowp.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163bguxosob.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163siclmqsm.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163mbmlmkln.html

[P04] 求长度
来源：http://www.xuanzx.com/163rlvnihwa.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163jzsxejgq.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163whuapbtk.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ymebcktl.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163xbzzooij.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163wckllpxg.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163ptshtija.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163hkkeaoyo.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163nfjttptg.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163iagpezcv.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163tpkrvwzz.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163yznwmmkt.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163fgxxgtpm.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163fjyjubds.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163haygtlcs.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163ulzdpddz.html

Ruby: a == b
来源：http://www.xuanzx.com/163gaoxncrv.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163jmmqpjdm.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163hmhrfbrv.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163lqgyhqvb.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163hsupjbyg.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163tgtifohv.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163rgnciqxw.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163enizbsrf.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163ohbxpzdj.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163tjuudtcz.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163otyvvbxh.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163dpivmwge.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163loziqsml.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163rgqfhttc.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163uhrkqfyd.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163wvoojide.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163fjhbxnel.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163ldvledyi.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163rnhfkkbu.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163mfncuspr.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163csassvol.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163mybfhkvs.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163xwuwzarh.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163unnwrwvv.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163jpyfzzex.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163gqkeqaec.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163lnzhzref.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163hoigjdlg.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163ixrqhuuz.html

================================================================================
来源：http://www.xuanzx.com/163gobuhwhm.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163zadqjbsm.html

================================================================================
来源：http://www.aibaodan.cn/163lhuwfnzm.html

[Q01] 创建表
来源：http://www.sxryk.cn/163imvefhoe.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163mbaqtgvn.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163yfbfqvxl.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163jtsxtlge.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163nlqzcgeh.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163htoneygy.html

);
来源：http://www.xuanzx.com/163jkwpdtut.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163uhxtjmar.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163yzhzmjli.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163gvodaryl.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163gjkyzdcs.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163dmasycxm.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163aopikwuh.html

);
来源：http://www.sxryk.cn/163yyktwkyy.html

[Q03] 增加列
来源：http://www.sxryk.cn/163bxzhsnsq.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163xvflqkok.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163mzdxieti.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163cuucwydb.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163esckegtf.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163eqbhjxrh.html

[Q06] 删除列
来源：http://www.sxryk.cn/163gkrnafqw.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163gxgdmubp.html

[Q07] 删除表
来源：http://www.sxryk.cn/163vgwwzdvp.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163lzlfyzdx.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163ttuvlqer.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163xpgcckqr.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163qjgwtsax.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163szzajvzf.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163qzdosavi.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163rzkpxgsh.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163oaixeurg.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163kkyuzwvf.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163uooavbqb.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163lkrwxlfx.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163fqatfywf.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163beyknuue.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163xklcetxo.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163aqtdjudf.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163iajontnh.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163hbgdfofa.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163smnmaggs.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163zvatyelw.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163vajimwle.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163uvlmzymz.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163pmtfopxd.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163leepyivy.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163tyfxzavw.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163aqvmfjjy.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163tdppspyo.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163ulxxzbuf.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163irrlrvqg.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163ayggmcrr.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163evlndcrt.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163pttvqxed.html

[Q22] 排序
来源：http://www.aibaodan.cn/163xqpntxsk.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163ejaghfle.html

[Q23] 分页
来源：http://www.xuanzx.com/163ypjwujdf.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163hhdffmcb.html

[Q24] 去重
来源：http://www.xuanzx.com/163etgqfahq.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163obwalvff.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163rkuuabkb.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163atphxtoe.html

[Q26] 计数
来源：http://www.xuanzx.com/163irjywexd.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163ipllqgry.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163kwbkaecr.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163eydlfkrz.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163tiomomng.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163jgqzxrjw.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163ewnntqvb.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163spnydlju.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163anaidakc.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163mcuvxnmv.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163mhiltnqz.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163dlubhnnb.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163mfzhskux.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163snthplsq.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163fbfzygwm.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163feqibuqm.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163khkhpuyi.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163qllsezub.html

SELECT * FROM (
来源：http://www.xuanzx.com/163vcgeffwc.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163osftdyhf.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163smjjjarr.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163zyuorxtt.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163izpqksio.html

[Q36] 左连接
来源：http://www.xuanzx.com/163zekpruds.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163xgjydokz.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163qwkvyeiw.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163coqpufxj.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163vwvomdcz.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163ezwpjvtk.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163jsavxxbz.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163ohthrxpj.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163hlcvjqkk.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163vdexqpxn.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163lkgksfwe.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163grykadpx.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163ctryultt.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163sughpcks.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163alpjddsf.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163bidmwyal.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163dndxjelw.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163iqcxybnt.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163zaslrsht.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163rlgkzubl.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163ogzyrnks.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163ytfkslih.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163nsxmtnvz.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163qbdmmpcg.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163ohokeqtr.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163tcelayoy.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163vavfqmzu.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163rvhxxymm.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163ywudstfw.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163pzomddux.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163fskewzog.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163cqpqzcsa.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163oszdozxg.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163bdjrrvmw.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163ebsdishq.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163bbjnglrx.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163jlhntwwb.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163qcvwhcen.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163xkyyngtz.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163itpieair.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163uuyoguak.html

[Q54] 清空表
来源：http://www.xuanzx.com/163tmclfmej.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163zjhigauc.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163udyoxijq.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163pvduffxv.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163sbwhlkas.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163ldswxaqt.html

[Q57] 行号
来源：http://www.aibaodan.cn/163plpjmzzo.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163wnpmfxgx.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163bfokczdx.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163cdkouzyi.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163jyxneram.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163whmksviz.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163salryqax.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163micnvyei.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163pfpqyaug.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163plvorfxv.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163bonlgnat.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163ucdfaoev.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163qrbgpddq.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163jazrcpal.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163mjjstqus.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163cpiwshai.html

COMMIT;
来源：http://www.xuanzx.com/163jaxdzuct.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163wvxifios.html

ROLLBACK;
来源：http://www.xuanzx.com/163ysmtkcen.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163rpqnqrua.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163avdsbbtu.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163pgkoadka.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163njyhsbml.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163bgzlvgzt.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163riomjtaw.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163vsmocxsr.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163qohleltj.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163ubrwjscm.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163jrecpfdg.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163opcyqrwt.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163wflbboec.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163swnoqbjv.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163gclyqpyd.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163jjsrcyuj.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163edjwksew.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163zbrzvthd.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163oyzmcbgx.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163sgrmulhp.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163eoxyexnd.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163wxexniwp.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163erldnwhj.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163mcylpcud.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163potsuijf.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163dugxlyeg.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163jsofkvna.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163oadnlned.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163alpzpcqv.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163ixhkgmgx.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163kngmvngb.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163hzlrzvuw.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163tjcpnelt.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163bhexteyr.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163kkutzpvk.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163ojtmlhma.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163hkyqzfsq.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163ruyqcgkv.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163yqovdhoj.html


<!-- 参考信息 -->