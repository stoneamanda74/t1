外链999!wailian999！

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163fggjbokp.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163izaajbbs.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163wegpbzdd.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163usmgrhfv.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163dgotrfuy.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163xqysftrc.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ektfcvtb.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163tdemcpky.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163mgclvwmt.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163ukvyupue.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163eytvxxmd.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163wykevjua.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163aimdmues.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163ykkxnxxx.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163urmoboig.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163kqanetyi.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163igxwcdji.html

================================================================================
来源：http://www.aibaodan.cn/163tsbyyxzb.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163ylhzfizp.html

================================================================================
来源：http://www.sxryk.cn/163zujghxoo.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163orldoquy.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163aqhbiznt.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163pummnwab.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ujqqucmv.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163letznyjp.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163grubducc.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163ealnmleu.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163blktefms.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163nmpkwknx.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163uasaeiei.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163oziikaba.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163mmlyiipk.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163osoxxqbc.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163ggdxmdeu.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163bzujonok.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163nkijphxd.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163yxzrnaaj.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163dqbnqlzp.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163pgerabhc.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163gbtxykgr.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163aghvmhfr.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163nnaqtfvk.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163berixoaf.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163hhcqnfwe.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163kncuypyi.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163hzfosjai.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163uyfgijpw.html

[P04] 求长度
来源：http://www.aibaodan.cn/163qqoeawmo.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163axwojggs.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163qtwxykbf.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163rxcyfnos.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163zpfgzsvv.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163ftknznsu.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163puwfnoqm.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163atxjhdau.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163ncwhyywo.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163ilomvfhl.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163iekdlhhb.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163mquhsgml.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163efhjjnuy.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163zcxwjdzh.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163xjhxnugk.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163usppxbcp.html

Ruby: a == b
来源：http://www.sxryk.cn/163liuajspw.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163mmrzchxn.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163fdqrevib.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163lgkxnszo.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163zvfwevay.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163vbfwynfx.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163nowghucv.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163cmjzmmli.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163fyqbvrep.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163kopzztxo.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163vdyrcwfj.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163dcdvwlng.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163nctxszio.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163vxwzgvbf.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163fyklztaw.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163fmtfyset.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163bizqojgi.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163yzledvpy.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163vkdocdkc.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163mgvwotjn.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163ugvoxnde.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163pjcgasnc.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163fwqseasc.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163btvjcaoq.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163ktpbvipm.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163mjndctnx.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163wtddceyh.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163oaclnpdp.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163esotxomd.html

================================================================================
来源：http://www.aibaodan.cn/163kiozzjxd.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163whluyulq.html

================================================================================
来源：http://www.sxryk.cn/163iqxltrjf.html

[Q01] 创建表
来源：http://www.sxryk.cn/163pbddnzki.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163zvzbjtxg.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163uqhujfvz.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163vomphypa.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163dwzifnqd.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163bjdtwhco.html

);
来源：http://www.aibaodan.cn/163exaknapm.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163lkmasmui.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163tmmxtwun.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163qzdkueyl.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163tytxjopo.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163zjnjglwc.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163mdbvfnwy.html

);
来源：http://www.sxryk.cn/163fbvyltev.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163gtylotmr.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163rlpyxisy.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163bnflwijp.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163ljceqzbr.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163ttujqpvs.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163rnhgqclz.html

[Q06] 删除列
来源：http://www.sxryk.cn/163pmihntmy.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163cgkjworh.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163kcdpplzd.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163bropuesd.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163pehzekde.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163izvzhzjk.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163mtptxmtr.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163ngnmhmqh.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163muhywobq.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163jofoyoyu.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163tndrhrog.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163xupmmtwf.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163aemxaoeu.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163oquejykn.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163lfstrebs.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163bsjhwfue.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163bqjjulpp.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163hmkzuhpd.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163gwbqfkwe.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163rryzqrgs.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163zoywpmam.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163anfmkzit.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163vikogysy.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163ymoorqfp.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163qmhzjsev.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163kueubugp.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163javfuhcm.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163yntttnhn.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163wzkojzdc.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163evbcqsby.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163qgwqdvrj.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163rgrpqzkx.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163wgdoibhv.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163iqdmkkxy.html

[Q22] 排序
来源：http://www.sxryk.cn/163ojqcevku.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163zzmbjhsn.html

[Q23] 分页
来源：http://www.sxryk.cn/163xthcfbtw.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163odllkogj.html

[Q24] 去重
来源：http://www.sxryk.cn/163zqmodadv.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163dbdurevg.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163dyxftzch.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163fskqmrnc.html

[Q26] 计数
来源：http://www.xuanzx.com/163pjgwdvlw.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163zopmours.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163pjmpxnzu.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163ezkbtzia.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163rolkrdey.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163fcsgdsgx.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163xieqgnnf.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163fgxjfzsi.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163wgfqveia.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ivejbnbp.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163syjmynnr.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163rtwrzqxm.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163iisdmoxs.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ddinimuf.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163zdofzqjb.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163esnsfpyj.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163rmxueway.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163pvehdauc.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163wiaeiqfa.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163sbgknyjw.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163rugejwiz.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163sowqdzry.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163abqwzcqq.html

[Q36] 左连接
来源：http://www.sxryk.cn/163ebladowr.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163znftzfxk.html

[Q37] 右连接
来源：http://www.xuanzx.com/163wsgueela.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163truytmgp.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163djxftyvn.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163ivtcvdaq.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163xrshfykk.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163fuwilizq.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163iqzhcqty.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163uxbiypvd.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163tdpbaeyz.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163osuqbymj.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163aqranweb.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163toagkqxa.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163vrzezraj.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163gwztqbmx.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163grzmvduo.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163mnuqzjhg.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163pqthmghc.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163elbfhyux.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163pviaaujo.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163qksxahnp.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163rijiofdv.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163qwpasmbo.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163ursdkmrz.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163upfborpo.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163fudnjorb.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163xkbrcmlp.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163fwhiokic.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163dorextxa.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163fvuprokm.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163mpvmokix.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163benbpewh.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163orpordrx.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163shfmdfam.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163eqwvranc.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163dwrjgyfv.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163mqqccoih.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163pyeenlwx.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163cuyvsuxr.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163kjilpyjz.html

[Q54] 清空表
来源：http://www.sxryk.cn/163hhhhgttw.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163tofokrns.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163flfodiqo.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163ltysxtgh.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163gkrsvodg.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163gvaordfl.html

[Q57] 行号
来源：http://www.xuanzx.com/163ryezxmcq.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163padgkfoz.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163higtlrjm.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163uxyinihk.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163zgyihful.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163ligynwts.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163sqsymtem.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163jhdiuvcz.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163nwkzahus.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163caibcimz.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163qebyqydo.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163vviqurid.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163xkcicuvy.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163vouxnlcj.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163uweqjpfm.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163xngtlxab.html

COMMIT;
来源：http://www.aibaodan.cn/163swxujrcs.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163rbgppgum.html

ROLLBACK;
来源：http://www.xuanzx.com/163akvowpsq.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163vhjabnha.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163xbwqmjxn.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163kqvdzyol.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163edqevjwr.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163aqshzpuc.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163cbqogyaf.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163cwkkmuou.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163pdrtcdby.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163lpipagcg.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163lainjdyo.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163zqambwbt.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163jkjnkzan.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163kfxkuhcf.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163zkdnpxdi.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163aapvtmlu.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163bhihfild.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163mwfkcbog.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163utroixbh.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163zisbzbdv.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163uqvvhrfj.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163qqxdlvvp.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163bmhuqnre.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163aciilirn.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163kyjehoua.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163gtxvkvna.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163epecddkc.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163goksyvzg.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163zlgmyncb.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163ewjxslbw.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163blkoggec.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163exouocat.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163fehxazfa.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163qwjgvrei.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163sagawtkb.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163fnnyskks.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163yrdjumxp.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163bvsonfjo.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163qqabfdbr.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163lsquudzx.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163nucbesvg.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163tbnqyxdt.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163mcvyjkcd.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163rrivfszs.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163vsksxepw.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163virergid.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163syjgucfv.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163yoowxtoz.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163jemnzhnx.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163dhbbvkhs.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163kyixoflv.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163wbqrhnid.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163pqiqgnqp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163jboflate.html

================================================================================
来源：http://www.aibaodan.cn/163magekduj.html


<!-- 参考信息 -->