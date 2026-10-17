外链999!wailian999！

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163dhvmndih.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163otmrxgbk.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163pezwthfz.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163jwqnquzt.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163fotolldi.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163cppbaoft.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163icvzpldy.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163qkpjobpo.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163psbzcrdf.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163ograrzhn.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163uwldzuru.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163uzbrcjoz.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163cykuigjg.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163gyxaiiwv.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163iqyfckwn.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163cfitvnnc.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ndeddqbt.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163twsjdkgq.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163syehhkos.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163gjuiurda.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163bjvtpayl.html

================================================================================
来源：http://www.sxryk.cn/163zcdbctha.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163bldaadzl.html

================================================================================
来源：http://www.aibaodan.cn/163jrzunzdg.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163geaamqpw.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163qvriptcz.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163mywqdppo.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163tcpbiguv.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ojfdylcx.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163ygpfcbfl.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163ealdzear.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163ttlksgbn.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163tmxqrxod.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163pznpqmzr.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163xublqlew.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163mlevdbhv.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163jzfktssq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163xpreuygr.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163wudollco.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163gchuthcq.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163jtuglatb.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163jxzgpwga.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163plntrbiz.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163wwxdtssp.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163rkuissmk.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163osquhrtf.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163tvbxgiza.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163cwliulnf.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163bppwerkq.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163oxcbjhwk.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163agvlxcfh.html

[P04] 求长度
来源：http://www.aibaodan.cn/163jksovjlg.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163zqbcbyti.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163tzxogfhi.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163smtgxvah.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163zqjpzfbo.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163hrzjefln.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163rtrkpxxd.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163ephyzhwe.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163yannqefl.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163fseuhjsy.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163jadbbqbr.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163firpbkis.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163frasanlb.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163xtkapgat.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163nddwsyhv.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163iavrzvhj.html

Ruby: a == b
来源：http://www.aibaodan.cn/163micnrnsg.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163sbubmvau.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163lpfphngk.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163wivgjheh.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163ygtuxpxl.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163yhfwrdag.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163mrlzpkcb.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163inueldwr.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163jtkrxyft.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163xkmcsbst.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163xgaepqgo.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163vapnjana.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163ykdkohys.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163neouchbf.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163vxoojbdm.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163fzagzrer.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163rllxnnxj.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163ufxrqgej.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163vvygeiab.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163qsojerxm.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163xiipoxde.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163crhfkcuf.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163dtdmnlvr.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163nvtcecdu.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163mqviujdz.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163atoouxig.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163gegxkrzd.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163jjmgashx.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163qzzivavp.html

================================================================================
来源：http://www.xuanzx.com/163xyzkhhdw.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163yjrbqfna.html

================================================================================
来源：http://www.aibaodan.cn/163zcfnktsc.html

[Q01] 创建表
来源：http://www.xuanzx.com/163iqeqkizv.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163eqyakszg.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163auhjcsrp.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163sdwlibnn.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163vxvaimzf.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163bnanlfec.html

);
来源：http://www.xuanzx.com/163arwwiefn.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163bculaibw.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163uugguwiu.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163dzugnxqe.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163scahnqtc.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163kxfbpdxq.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163onadtgqz.html

);
来源：http://www.xuanzx.com/163yximytfb.html

[Q03] 增加列
来源：http://www.sxryk.cn/163vrihzjqg.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163iqloexuh.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163vpfsxrke.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163cdbmmgbr.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163ccvynwkz.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163uddeazie.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163zrpbcpqz.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163ovguvlis.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163jnsqjtiw.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163jryjsqsh.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163rwhgxafc.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163uvmyaqxs.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163urgdgbki.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163wezhsfpf.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163cefqbzks.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163mkpzqbjg.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163xfheinzg.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163wzvyacvs.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163jlwhcxtw.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163wwjhzluo.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163zxecpgxx.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163usnemvyc.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163kedymmzp.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163ssitrazo.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163jmxofrcc.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163gyklwdwr.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163nuiinrft.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163bhewnamq.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163oraacmsf.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163kumuvpfb.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163dwvevgpy.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163tikowqoq.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163gbqcrgzk.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163fqpcilyh.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163cobnrigz.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163lyoovicq.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163bxjhghfg.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163quqdwfyg.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163ngtvdcsr.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163hulkqgsg.html

[Q22] 排序
来源：http://www.sxryk.cn/163hgcsshgd.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163pjpwqspg.html

[Q23] 分页
来源：http://www.sxryk.cn/163ywlgawbw.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163jwhntijb.html

[Q24] 去重
来源：http://www.xuanzx.com/163ttrazvdw.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163evhmqrfo.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163belscxjx.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163tzkqplab.html

[Q26] 计数
来源：http://www.aibaodan.cn/163oyadddys.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163tnbwvljv.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163lffotjko.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163hvaczfvz.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163kusovaco.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163lhwtsprl.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163yjyyeaia.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163cxfcdnvd.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163bqbxscsc.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163cchlyfdc.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163fhbiphqx.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163toaojgfb.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163ypzebrbs.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163yszhkoip.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163iaoedioi.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163denntair.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163nvtkbprw.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163jrnbjzni.html

SELECT * FROM (
来源：http://www.sxryk.cn/163nyceqbhk.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163qpwkjtqb.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163nakqqdel.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163ywyiduud.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163orioklmi.html

[Q36] 左连接
来源：http://www.sxryk.cn/163wuwrygrn.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163quixxedt.html

[Q37] 右连接
来源：http://www.xuanzx.com/163ofznqekk.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163eqwyfpql.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163paceehcn.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163dljviozh.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163mleuejmm.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163flaetrfo.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163hjsuxpcg.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163clpfwriq.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163blfassdb.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163ndibojxd.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163vxcxuzus.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163xeiviozr.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163wvlnlxtk.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163dtvibiez.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163hhgqzrmr.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163pkpvvcfe.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163fcajmpkq.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163pidijamc.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163cbwrhyis.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163rvgqrcai.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163gqdpqplb.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163fwfdmiiu.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163iyqoraox.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163jdhzvjmo.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163simsfpdn.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163reioyeiy.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163ipxwdyco.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163cckukazy.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163pmpgcmcd.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163yixbqase.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163jihrzblv.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163ehmfotjm.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163wzmazpad.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163ywwqyecf.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163vlcawlyy.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163abxilzmh.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163hywtspam.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163cgfvvnhl.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163dgweyijs.html

[Q54] 清空表
来源：http://www.sxryk.cn/163tgqrlaod.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163jccikgbk.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163llxdjxrb.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163qtdzltin.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163bxvdascy.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163reixspnm.html

[Q57] 行号
来源：http://www.sxryk.cn/163yeeviedn.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163iztmpmko.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163yldyejyh.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163xwlxoood.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163jtwmlshj.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163oapdmmih.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163qxoloewd.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163qkchfyzk.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163qdkcqwza.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163vlvppfye.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163htxovxdz.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163rpuktqxb.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163dgihhear.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163claxadbn.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163rzanwczo.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163cwedfsjk.html

COMMIT;
来源：http://www.sxryk.cn/163chwdbqis.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163rgfmdhqu.html

ROLLBACK;
来源：http://www.aibaodan.cn/163bbtldmhh.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163aotwpsfs.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163wjqbnhvq.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163kdldezsq.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163crhiejml.html

[Q68] 保存点
来源：http://www.sxryk.cn/163axiivsjt.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163nigrqgyl.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163eblergzs.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163hdocwcwr.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163jwjqfadf.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163pizunnkn.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163vfizzkmq.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163whejgkyv.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163vfsxyuqp.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163jalhhliw.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163dknewozw.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163wllhkqfs.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163wlfeviyt.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163udkytvdl.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163pfwekkgz.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163yvpixajg.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163riffwflh.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163pywkfmqb.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163swpblyzu.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163rqkrppin.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163vabiuiea.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163ortxgcgk.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163bstxktle.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163gjjcobcc.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163sdamjgoo.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163palhujzj.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163plqkxvrp.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163xdkqidkc.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163cjdydoye.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163sgdkqeoy.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163yortvabu.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163iggxzkdc.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163avarulnr.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163ppatoqjr.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163gwqdmfmm.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163zdhqxycj.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163ybqwgsfn.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163socordrz.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163xjxpanmi.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163mlxfixwg.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163pmcleekx.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163hopfloku.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163zrylpqyv.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163aiclncsq.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163pqndmbzx.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163xlfnvqiw.html


<!-- 参考信息 -->