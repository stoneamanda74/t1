外链999!wailian999！

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163tiipulpw.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163jptonnia.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163yvypjaec.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163bbhidkxh.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163vpwmybpq.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163agzfptbf.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163cosyzwyl.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163jramysrj.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163tcwupski.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163imylzxow.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163zvmjuqzv.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163hbnjtrdt.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163uiewcehb.html

================================================================================
来源：http://www.xuanzx.com/163phgdvsmh.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163cajefddq.html

================================================================================
来源：http://www.aibaodan.cn/163zyocrzhd.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163rodalytl.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163gigpsmph.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163diduodnu.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163fhcrhruy.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163oelchhrz.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163xmspgkdr.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163qbbjdiwb.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163ossqknws.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163lmmsvkxt.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163yirdtvqo.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163essugqxq.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163pemhesrk.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163extepxem.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163ljdkynrp.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163fcqahvgu.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163inminbpi.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163ytikjniu.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163utkpshgh.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163ztxqyhxc.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163jyqxabrw.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163nqqrixwc.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163camlcssj.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163kqlhfkqz.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163bllnnjab.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163mxvpqxzh.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163yqksrupn.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163jpmroycm.html

[P04] 求长度
来源：http://www.sxryk.cn/163regvhdmq.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163xaazhxiu.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163lymtcrja.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163sdqtqwug.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163kdjbpnvs.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163cfvullif.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163pekijabm.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163qfcgohge.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163olhywepf.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163gzscluao.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163qtkgjqbt.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163clfecxfd.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163cngjlldf.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163rjupxgrs.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163qfpoxbhx.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163dqtmynan.html

Ruby: a == b
来源：http://www.xuanzx.com/163thxtnyvx.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163cmaxddqe.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163eocoqsey.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163kiflpzqj.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163ewcizaxa.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163zwisyozw.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163pvwuhzhq.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163imaydgvr.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163cxhbplid.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163ersnvflj.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163xfgdiyqp.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163dnprkjrt.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163ewosrrkg.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163xygawxcx.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163maarcllq.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163cvrifdpx.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163mhityjua.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163arcjxlhq.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163liyycpvc.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163hnwbauhp.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163xuoqoxjk.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163mbompzdi.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163oogxiozx.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163llfqfzoz.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163gqbbpjyr.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163lseznsto.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163ecsvgvym.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163iubalrmy.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163ksuwwacr.html

================================================================================
来源：http://www.aibaodan.cn/163ushmgdcm.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163rqabywkl.html

================================================================================
来源：http://www.xuanzx.com/163dpizlbbl.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163ishwuphz.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163refwfzsi.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163qqgyjqmp.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163dbsrodcs.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163rpdbenyg.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163uexxsqyi.html

);
来源：http://www.xuanzx.com/163naouxyen.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163hgjnvzvn.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163bitvjeax.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163wvjlagip.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163hkccsaok.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163fbxanqrj.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163idfzveiv.html

);
来源：http://www.aibaodan.cn/163gcntvprr.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163puqmxash.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163yeloejeu.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163qymgzkwb.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163fezwqgqr.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163ebezwuur.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163jrncgtdi.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163fzlmzcou.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163mygalhbj.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163vmlcznwg.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163ujpuhclk.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163rclafihe.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163tqdbbiuh.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163pjpsqnrg.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163ehnpqxdd.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163lpscdiko.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163buabpbjd.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163kcvnmwwy.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163qqktftps.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163cfjfpzhw.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163kbytcfoz.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163hkarjcyq.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163mcwudqva.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163qshjxvrq.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163dkftkvwt.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163dyusihrl.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163cnjcpssn.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163slimllld.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163hzesexyn.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163bwcrphvp.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163bvmgxxyz.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163bzbswjjh.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163mahtzuxw.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163ndzmmjte.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163iggqmevm.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163hgdtrejx.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163sdqfpmlw.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163bhmtlzco.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163gbpuhnse.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163tcxlrbgs.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163nbpvzhdw.html

[Q22] 排序
来源：http://www.aibaodan.cn/163ahjeegfp.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163lcuhhuyq.html

[Q23] 分页
来源：http://www.xuanzx.com/163rlqvuaeh.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163wdfigalz.html

[Q24] 去重
来源：http://www.aibaodan.cn/163yiuzzdfu.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163hanestfk.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163spebeqxd.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163jqtgxida.html

[Q26] 计数
来源：http://www.xuanzx.com/163atyktcuq.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163vzzydqme.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163nsgjzajd.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163fkeqipfh.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163ezsrovcy.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163pgtbfsbt.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163snipqwfw.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163xfvizhjj.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163pmabflpi.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163hiepcrhl.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163fhdyjfvw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163emxyjixs.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163viggvcub.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163bjcrwbeu.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163rlloxkvj.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163bvmuzocx.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163pbpezsmc.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163qiuajdgu.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163ldwzhkaq.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163vafjrgin.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163lvmnsybn.html

[Q35] 内连接
来源：http://www.xuanzx.com/163lrnrqvkj.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163bqjzqklj.html

[Q36] 左连接
来源：http://www.sxryk.cn/163akgopwrx.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163xexlhxbb.html

[Q37] 右连接
来源：http://www.xuanzx.com/163eykobgca.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163ilvcjrha.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163cqfhfwgq.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163nqkffddg.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163mohlbsje.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163exlyrrpx.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163zyzugnqd.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163ktflacvb.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163fbykbqcu.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163keawvinf.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163jwfmuwuf.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163qzxaibpm.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163rnlkswpr.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163wlylcpip.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163wvrlcweb.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163ezzmnmla.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163kfvowlct.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163xzdfcmig.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163kmopanvt.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163kmtgfiog.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163qsjuhfdj.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163teiekqjk.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163hakugqdn.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163owhgzqrf.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163xznppjeb.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163sdjekuha.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163zevzqicr.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163xlkxefdi.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163volbexxu.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163gmfjyzvo.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163pdyjbwcg.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163zeukzosv.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163dztsaiwc.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163adpaevxk.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163oiepmvkh.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163bguublhe.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163jnhkcjog.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163mfbgajiy.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163ipivpbqi.html

[Q54] 清空表
来源：http://www.sxryk.cn/163srelteih.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163ztrvtcoq.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163dhdkslix.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163azwgztne.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163rdicvrwa.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163gnxyoctq.html

[Q57] 行号
来源：http://www.xuanzx.com/163fcqbombh.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163hsffsidg.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163bmsoslgm.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163vkjronzm.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163yhqioaaw.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163kvppttuj.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163xdzngagf.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163ptitjtrk.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163sluenxnl.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163pkzvqgfk.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163grxrttxn.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163ummwoyxp.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163nxkqmozr.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163pjdosqqz.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163eaccoseo.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163akydlumm.html

COMMIT;
来源：http://www.sxryk.cn/163oivjujfu.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163tuabeign.html

ROLLBACK;
来源：http://www.sxryk.cn/163xevlilts.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163wjvnhaqy.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163frxetfbh.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163gmisymrl.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163jqcxyjqc.html

[Q68] 保存点
来源：http://www.xuanzx.com/163bexcphyd.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163yplmjhcs.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163vuftjgea.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163tfhjvvtw.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163oqjqhumb.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163gjznakqs.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163usgpahxq.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163zeqmolmh.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163xasczjtm.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163shjxazhn.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163guiyvvql.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163zqvraauq.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163ulhtlqcw.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163jusnaynn.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163jrqivsqh.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163hnjlmmtx.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163ktevfynw.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163ndonyxnn.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163pynuazwj.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163rotlilck.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163lnhampbb.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163ovwcbioy.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163aqwnzstz.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163auglqcnv.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163ooesgspw.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163ougowxib.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163sehouoct.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163ndomeryg.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163jtgufdsy.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163dvauacxl.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163krfxhtyz.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163ofgjaqpw.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163bwcseqhp.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163pzhbqjaa.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163reufrzhp.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163pkiyiyhd.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163vfmcuvoh.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163rivmhdpb.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163vrxhflvv.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163kgedrggk.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163prokijnb.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163veyvtlro.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163vdeslezb.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163hnzeykbm.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163ckanbnbj.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163sojzsybd.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163rgsfguqc.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163agegddnu.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163ktqhofak.html

================================================================================
来源：http://www.xuanzx.com/163awhqgqae.html

R. Bash 专题
来源：http://www.sxryk.cn/163fgkvrriz.html

================================================================================
来源：http://www.xuanzx.com/163mzlbwgln.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163dbwqndsq.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163yydgdahl.html


<!-- 参考信息 -->