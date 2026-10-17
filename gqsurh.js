外链999!wailian999！

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163wshfalnr.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163stiolsth.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163aeychpku.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163lnhfgiow.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163lhjibwve.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163cmbeeghm.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163oakgdavf.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163inxstjgd.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163pfjyhmme.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163ymayhowx.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163cwbebwsh.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163bhjitzgj.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163drfpccoe.html

================================================================================
来源：http://www.xuanzx.com/163htspkcea.html

P. 常用工具函数
来源：http://www.xuanzx.com/163lnlrephj.html

================================================================================
来源：http://www.xuanzx.com/163mokzbpzz.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163hkzagsby.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163wkpsbwtk.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163qznykaxw.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163kqysmdqu.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163rflbvdff.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163fuezeiml.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163nhbcmgjx.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163urhwcuze.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163bgvhvxen.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163sowhhgjc.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163nbibasui.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163lnewhyck.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163qlhnpwoz.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163inmcesvj.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163ulljorzq.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163nabbraaj.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163wjetkovl.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163gvdxwniw.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163ahzugzwc.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163ypjecedn.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163rpzymfyk.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163wghrgjhk.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163bwzlhxzg.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163pfginsqw.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163sdwozbpy.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163myztozyk.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163mdbbqqvl.html

[P04] 求长度
来源：http://www.xuanzx.com/163ifbxszyz.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ceanylfn.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163wpxnscfi.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163bokshaqa.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163xqepysvc.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163qratbhve.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163aqrpazyb.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163uieqrsbx.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163grntbvlz.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163bqiqklpv.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163xmjrlxli.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163jtgnufro.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163ngvajebh.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163kyeydaft.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163vhidzymc.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163vmkjpyhg.html

Ruby: a == b
来源：http://www.sxryk.cn/163xzghpqmv.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163dmthasxw.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163dvyrrtup.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163yercihvj.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163dnsfeacn.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163fjyltemg.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163bfprmyrx.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163afhjxzef.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163jbxkzqct.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163zecehioe.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163ccvufuxi.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163twrspddi.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163kjrmuzmn.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163ofaizyoo.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163matnbcmd.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163taxelufs.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163rshntwgw.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163tmspfaci.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163lvrlpfrf.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163ezansogp.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163yhtftmim.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163uwhbftda.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163xpjennpb.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163jkrkmpdl.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163vnqfdvjy.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163fbvjxfne.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163vvknogiu.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163mvukgulw.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163oxfgtsqh.html

================================================================================
来源：http://www.aibaodan.cn/163cmjxuvlv.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163jzyxfspy.html

================================================================================
来源：http://www.sxryk.cn/163dbnzvutq.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163ovvjquwf.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163eotedbmq.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163obifvppy.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163ygnfgswm.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163wkwymbne.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163rynkucrk.html

);
来源：http://www.aibaodan.cn/163drnnxlbs.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163vlvzyduz.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163bkuboehc.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163hnphwgwu.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163xvxipbmz.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163mjwhgxwa.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163qgnoxeqy.html

);
来源：http://www.aibaodan.cn/163szszfnaq.html

[Q03] 增加列
来源：http://www.xuanzx.com/163ezqnqlhi.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163zqwghsfy.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163gzxdiwgv.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163auunjcaa.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163aikwzjbn.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163fqmclfmz.html

[Q06] 删除列
来源：http://www.xuanzx.com/163ufsboqea.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163fkmogsqx.html

[Q07] 删除表
来源：http://www.sxryk.cn/163ptwhoguz.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163ynmfrtnk.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163ufjonsvt.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163prkbrpwg.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163inkvmmbb.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163bdrvanga.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163vxtaqbde.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163xyikxaiy.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163zkigdcga.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163xsyvptlt.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163gxfhrrct.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163rzbejvkj.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163nvyrcclh.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163bvfnoapb.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163epohtgkr.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163danebjzt.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163eqczatoh.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163xhyvaoxo.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163pllrelae.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163qbxsmmka.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163bdhudlin.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163rsutvvps.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163exaspgmr.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163wzrkozcr.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163nlwujfax.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163byswjhph.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163eusbjrub.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163dvxmoane.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163huxfeoet.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163glvbrixe.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163mczlaadv.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163qaalsrla.html

[Q22] 排序
来源：http://www.xuanzx.com/163iqrmakfi.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163pummrpba.html

[Q23] 分页
来源：http://www.xuanzx.com/163seebnblm.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163izpvkigd.html

[Q24] 去重
来源：http://www.aibaodan.cn/163qkgqjlts.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163omxothhb.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163wuahvdpr.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163cuxseokb.html

[Q26] 计数
来源：http://www.xuanzx.com/163olkwvxkq.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163hzaoidna.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163vnfolbhg.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163biksbpqu.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163tfkdojpx.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163lquxqnql.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163tgunwhjw.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163kcfwyztq.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163qbzeaiuf.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163jbrlqkpm.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163hnujcsrc.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163cembftzp.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163gkabflxp.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163wwdfhylx.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163qxsxqvpd.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163vmufopjv.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163thsadpnc.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163tivnegnx.html

SELECT * FROM (
来源：http://www.xuanzx.com/163wpqinoby.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163ycbwxddx.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163qewmrgzn.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163txjxmobs.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163amhsblka.html

[Q36] 左连接
来源：http://www.sxryk.cn/163qmmflvbf.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163toaqgyhp.html

[Q37] 右连接
来源：http://www.xuanzx.com/163jvkxuwsl.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163kwoytjbq.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163kiuufcrb.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163yykftwaf.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163gcgtawoh.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163zjyqclyk.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163xzmranso.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163jojbvysr.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163tyswjrrl.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163elcumdnp.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163oueakfsh.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163mzcbkhir.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163iplrxfew.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163bpiggyjw.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163vktnfwcs.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163fgnvmggd.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163qylyxjws.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163jovubxep.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163aymdrgyo.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163gxyogtbq.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163qobufkub.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163bukkeaem.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163codiykbb.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ugowhcay.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163amjpqboo.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163sdgkyzab.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163xtxespsx.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163eanadmie.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163eykzzuys.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163wipbuzvo.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163tjeypddk.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163vyynedds.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163sqqgyzty.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163grtukwfn.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163vbekztbs.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163wftjkxcv.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163wblddgly.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163xihdvqjt.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163dhzpjmtt.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163yjoifmax.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163chhphzhz.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163ojwwuirp.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163unltkfky.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163vlxwolow.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163llcnuvly.html

[Q57] 行号
来源：http://www.xuanzx.com/163uxnizivm.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163vzndtkkg.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163gvrbwmny.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163mdqqkbuy.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163jaotutpp.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163qqhcbuce.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163ttawmbux.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163bnudjuxu.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163qsvhwjlm.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163ttnfnzge.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163qpdzwejc.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163mifemtdx.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163nopvtrmr.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163vosyrrkb.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163nstrpjto.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163vuhnefvd.html

COMMIT;
来源：http://www.xuanzx.com/163ayrtzkxx.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163czvmzwee.html

ROLLBACK;
来源：http://www.sxryk.cn/163fxhuhylg.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163veewfhma.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163mgpfnkxa.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163shrrwfeb.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163usnjexpq.html

[Q68] 保存点
来源：http://www.xuanzx.com/163yscinmuu.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163ztgafmgy.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163qlfpkqnz.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163srbozxys.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163vdnsocvz.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163ykujfmqz.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163meazuani.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163aigoggtg.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163mgpbccaz.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163avcqxgzi.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163qfpcakbb.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163fcptvqil.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163oawuvtrn.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163kzmndvnk.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163mwqnbrkl.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163rmmizmvu.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163vquycrwm.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163nqvdwqwm.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163uejjbpwn.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163uuwdbiye.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163dldgjufq.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163senxvqur.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163rpwsregr.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163sfwsadrm.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163upmhqawu.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163lcmrfuim.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163iomzzxyh.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163lmwhtfed.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163rngkiuso.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163dwprgedo.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163qjseutuo.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163xxtqgmnv.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163quzzhtsg.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163ocoiydae.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163jvhuxino.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163bwvhnfzc.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163lnxxbfnh.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163gqtkmtxr.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163cpxkqcap.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163moqerkdc.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163vhvxfdjj.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163hicnxcxo.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163mcdyvzov.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163axnmiujz.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163hptbcmoa.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163afcpendi.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163rvlaflop.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163syxhawom.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163hgtcfdoz.html

================================================================================
来源：http://www.xuanzx.com/163cdpwvtrc.html

R. Bash 专题
来源：http://www.sxryk.cn/163kpxmxtaw.html

================================================================================
来源：http://www.sxryk.cn/163mnltrvbt.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163habajssv.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163vkggxaky.html


<!-- 参考信息 -->