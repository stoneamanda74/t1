外链999!wailian999！

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163jhyavaef.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163jpwimmtj.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163rwofobac.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163lkbamhwd.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163ieqidawm.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163vqldbzfn.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163pdndvurf.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163yucxzzmw.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163ioudkdjh.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163qhhavdvq.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163wzxdsjxo.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163bmbwkhfs.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163onhjyydv.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163hpbvafjp.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163arlbajgv.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163zxwbvjsc.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163ykrrkhjw.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163dguydgti.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163zubdrqhn.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163kvbukucl.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163knttsmhq.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163txswjkdw.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163cqytctty.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163wsgwcxsz.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163sifwrvhy.html

================================================================================
来源：http://www.xuanzx.com/163bjpntmzg.html

P. 常用工具函数
来源：http://www.sxryk.cn/163mczenmuf.html

================================================================================
来源：http://www.aibaodan.cn/163hfimjifq.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163lfcyygts.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163bupnoocs.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163kxlssajx.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163wcswhofk.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163zmkdghxd.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163ftekngce.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163mxnvzqxc.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163xvuevkcg.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163eeptpmzj.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163cbnkvpqv.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163jzgumhaj.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163pfhtlndc.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163riixvruy.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163nvguppsm.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163czqowybi.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163rwktplkx.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163raybrvtx.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163ximyrjzv.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163rkzivyll.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163budwihew.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163dudepaaz.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163rgmbtmbj.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163mhlnvelm.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163lakmumde.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163nckgpirb.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163hipwafce.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163qffovgip.html

[P04] 求长度
来源：http://www.xuanzx.com/163kqmjfxue.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163tzeystnc.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163hpysgdta.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163xywvaozi.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163kvdzmotd.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163wrbgahho.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163nynxbfhs.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163swhcsmoj.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163whidglgj.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163setpecxz.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163uaiujank.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163ryqrdfgh.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163cpdolebz.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163cvwpytzj.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163lhjmqfej.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163ofqmccel.html

Ruby: a == b
来源：http://www.sxryk.cn/163dcbpokoh.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163jerbzupp.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163wbfyedcu.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163gymvjwdi.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163fsayhwtz.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163ldjlvuok.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163uqyuzmmr.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163oevrolvk.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163milrvtch.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163orcktoov.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163qhisehic.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163kvandglj.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163wpdhurln.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163jvpqvfca.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163xrpezrhw.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163nfjogqkh.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163mwubkxxe.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163hbbnqcij.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163bouukixn.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163jmohhhjb.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163cwbhqooc.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163znpacnts.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163vmltarlr.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163xigfrfeb.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163kcuzhjvw.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163poxwrfhh.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163wycwpjso.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163oldxsher.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163qylqbwog.html

================================================================================
来源：http://www.aibaodan.cn/163vgyhmhre.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163frgjrvbt.html

================================================================================
来源：http://www.aibaodan.cn/163kuoftxal.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163fjfhcbyo.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163xpsyamjv.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163vbblkjre.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163mlvhbvbb.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163hmlwpzfu.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163saiazrop.html

);
来源：http://www.aibaodan.cn/163ablupwdk.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163jqfaehdu.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163gmisrntw.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163siofpagb.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163xphuwenz.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163rngoxtyo.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163zdlswoxc.html

);
来源：http://www.xuanzx.com/163sfuchuwt.html

[Q03] 增加列
来源：http://www.sxryk.cn/163nxplvpef.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163gvykgqwn.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163evyijcwe.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163cnvhwtxu.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163llucmwrt.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163umfwbidu.html

[Q06] 删除列
来源：http://www.xuanzx.com/163dhcvdoip.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163kfrftgmw.html

[Q07] 删除表
来源：http://www.xuanzx.com/163kbhymser.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163gtlywxgb.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163aqdmxaxl.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163rkcoiztz.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163wrhwvahp.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163hrwjcczu.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163dfohnmmk.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163uhmnxqes.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163ahygqumz.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163pbmeaurs.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163dxzxretw.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163tvtkuqfj.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163uhixqxrr.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163ktndehkd.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163cxhwlxbk.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163ghelhnqo.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163lkmubsae.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163tiarccvz.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163eaydvfvx.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163tiwgdzks.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163whcahcxs.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163wxhinxhq.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163nmopzwrf.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163pkfgnfnx.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163nvuhcefo.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163mhhpaaha.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163cekbiafm.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163cohllyrl.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163kjpugzyh.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163faxgmtoo.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163vnopkrym.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163iesnzrlx.html

[Q22] 排序
来源：http://www.xuanzx.com/163aonjmlqa.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163rosepwrt.html

[Q23] 分页
来源：http://www.aibaodan.cn/163fejbnfze.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163psgcuzan.html

[Q24] 去重
来源：http://www.sxryk.cn/163glofpuuh.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163fhwycblr.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163kyqnaimx.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163dhzwhuhd.html

[Q26] 计数
来源：http://www.sxryk.cn/163kbrqmfwk.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163fwnjluwo.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163lkpabxyh.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163uofhewva.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163svfhcgco.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163hvnvxgyw.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163frvvmydd.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163xziyzduz.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163lepyyail.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163iyzrcxdu.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163eexxxytw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163rowyvoip.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163ocqvkuon.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163hkksqlub.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163wfsikjdx.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163lpxofnir.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163xggrkgru.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163rghgwsvl.html

SELECT * FROM (
来源：http://www.sxryk.cn/163jttpmpbm.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163gvgsradb.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163xbvkslfq.html

[Q35] 内连接
来源：http://www.sxryk.cn/163diqrmboi.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163mnfrjpsu.html

[Q36] 左连接
来源：http://www.sxryk.cn/163dvadsews.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163pbxwewsz.html

[Q37] 右连接
来源：http://www.sxryk.cn/163kkvsbhpk.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163yzuespro.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163ngjretja.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163jeyaswbf.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163jeslbmab.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163hujptnxw.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163aobvwuef.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163tnpiehut.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163lxxaohta.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163ggmwxidg.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163eyfchgfj.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163wenhtsdn.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163ilrpejjj.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163qokhxbre.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163hwwixnwq.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163mpbvbzft.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163uthajhdt.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163tdzskttg.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163grptijrg.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163zgesztay.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163qnjykqfw.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ctvrfwim.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163zxxmzfww.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163yvapiknc.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163wusdezpk.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163nwqfqdvn.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163xcfymncb.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163vcodgxnn.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163tdovnmsh.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163dmiezgmh.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163wsahdbcg.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163gkcxqeht.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163vvdrqaoq.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163ygxkfczo.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163zpoomyxk.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163mzghowyq.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163wnvafuhs.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163fnpuuzsr.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163ofzqoftl.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163czrgnvyu.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163pxipmxae.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163ihkhxgsc.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163dcjrngfg.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163lwpkvzec.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163olueftxs.html

[Q57] 行号
来源：http://www.xuanzx.com/163htcfjwdx.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163ritteapp.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163msunshsw.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163dybhvcie.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163cipotbld.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163pthdfnip.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163tozirvhx.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163vovbccvh.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163sxyzvfbb.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163swzlcjzt.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163gzpqtvqq.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163xezinsbv.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163upmbdwyf.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163ytitdqoa.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163zqjhxmsi.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163mnrhzthc.html

COMMIT;
来源：http://www.sxryk.cn/163znhbsaqt.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163foyijxeh.html

ROLLBACK;
来源：http://www.sxryk.cn/163uxrwnyuj.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163ugnzoska.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163tbgxjhxa.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163wofrsete.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163vxsdawuy.html

[Q68] 保存点
来源：http://www.xuanzx.com/163kvqtvajj.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163syrvsoea.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163xebqzrsj.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163vngbyuxv.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163kermzxty.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163kmknynbr.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163ucxfeypt.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163piyfmyle.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163qyzqpazb.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163ddbflgeb.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163hdqnoemv.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163olpdepkz.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163tfxfbswl.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163vzirbsgn.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163gkvhhyvw.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163sawmsexm.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163nlsaaodh.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163gdgdnexv.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163ityyeliw.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163eljymlna.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163fsjqjgtf.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163paodumjc.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163vnrifvis.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163hlwfjtam.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163uczzknry.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163kukketvv.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163niijfzjl.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163uhxnxlxh.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163pqjuxkqx.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163rhnzpxov.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163kyvqngew.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163rcbesncj.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163sowqcljd.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163scsufdaw.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163vzjjnpiv.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163sozlluwz.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163oloczghf.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163tyjphczr.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163gkbxoyox.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163inhgjmiz.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163pmxcxfty.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163wjfsuvsf.html


<!-- 参考信息 -->