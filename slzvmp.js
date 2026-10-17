外链999!wailian999！

[O06] 使用进程池
来源：http://www.xuanzx.com/163jgjnittt.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163ybpfbohk.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163rxfmnajo.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163mibjreld.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163lpfpnirh.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163eobhgztp.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163yxauzbez.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163cozbjtkl.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163nvokaani.html

================================================================================
来源：http://www.aibaodan.cn/163pfkcosps.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163ewckaxmg.html

================================================================================
来源：http://www.sxryk.cn/163mbieifnj.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163fgqqtzwv.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163soylvciz.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163jixrmdkq.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ksdhoqyk.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163dxqafgtt.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163qltluzqb.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163gxdvnwms.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163whckgtjc.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163memkpuhl.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163vnwipzjr.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163kdybnzpk.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163udxekpyg.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163njgerhil.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163enovglvi.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163izjwdxjp.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163kpgjapmu.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163iiofuggw.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163juosagdh.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163mqxkyqmf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163zdeiucwi.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163eppinryg.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163fpopjhik.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163vyaqlymi.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163vkkbwuhs.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163jjuwaovj.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163lhiahitv.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163crvoxxhy.html

[P04] 求长度
来源：http://www.sxryk.cn/163kuumtjfb.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163jdecdwno.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163irnvrseh.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163msagmezl.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163wbhlmigg.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163rptjdrvo.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163obbwtpea.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163rhpngobg.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163zzfyeigl.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163mzogisox.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163yxktozxt.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163hgimdisp.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163drruswqw.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163xoznstdq.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163ijjzixsr.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163pmfbcijm.html

Ruby: a == b
来源：http://www.aibaodan.cn/163egmsjslh.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163lngbqjte.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163diosfhtj.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163tcskwkcj.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163xbrjpbul.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163yzlullgr.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163tymsavts.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163ikqxjvay.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163konzccfw.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163ngjurlvt.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163pvcdaxpd.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163oillquvm.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163wyjeyzjb.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163emmnaijv.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163jcnevzwv.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163xpdlenlc.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163obbsefha.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163wqfuhpik.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163xzosnrco.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163inslaeih.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163bkhxdkqw.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163uksugrjn.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163awhsvcmu.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163hbwkeaxh.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163avnptdtp.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163eucyjjta.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163gphbqkrx.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163ijpwiwhg.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163gmdupnon.html

================================================================================
来源：http://www.xuanzx.com/163wjnxxsiz.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163vxmogbjc.html

================================================================================
来源：http://www.sxryk.cn/163kdjsopbv.html

[Q01] 创建表
来源：http://www.xuanzx.com/163ojkfqguo.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163lpcyruqt.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163czsbxqko.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163rcglnjeh.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163fleumqtl.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163mqfaruxa.html

);
来源：http://www.xuanzx.com/163sbkapvax.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163hqrucidx.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163knzigetf.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163caswqrhe.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163kfefqpak.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163yfruexfe.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163vfgiktzy.html

);
来源：http://www.aibaodan.cn/163svfvozev.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163ebilatov.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163mbhdiakd.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163utapnjcs.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163zzelkdpr.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163fipkkhrk.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163gmtzjaat.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163uxjtecdc.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163gxvzqzqk.html

[Q07] 删除表
来源：http://www.xuanzx.com/163qifxepgn.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163skmoukel.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163zxnjrzgq.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163qluotcoj.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163jkjuouqs.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163tgozyzsp.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163cdhnyxss.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163ttcwonse.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163miljkkrk.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163ebeadvjc.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163uxqoirdu.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163ubotsjuo.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163bxpadcyr.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163hvtcnsjt.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163mucnbehv.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163rmbqwjpl.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163bnzyvjet.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163obccztxj.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163ceofuusr.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163unhiojlg.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163xdzelvvw.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163fxmecxwb.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163eofivxnu.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163kvdmhycr.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163uyvwxand.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163jejpqgjb.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163kqodygac.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163crhoypzo.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163oujhxvaz.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163entiopru.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163kqjdawoo.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163mlcaggxl.html

[Q22] 排序
来源：http://www.aibaodan.cn/163gvndlsqj.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163teymvdqi.html

[Q23] 分页
来源：http://www.sxryk.cn/163fmffqnzl.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163ccrrhxzs.html

[Q24] 去重
来源：http://www.xuanzx.com/163afimmkgy.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163sdnjoiuz.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163vsuiiuql.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163odxsllss.html

[Q26] 计数
来源：http://www.xuanzx.com/163igjdfnun.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163ddbmxfdf.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163rejpppuq.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163mtmzkiww.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163awbxnkac.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163luznrcqs.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163dpjiahel.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163zqesctrr.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163eyetywzw.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163pidcsrrl.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163ynkijgvf.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163zdjazwgs.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163jtljprir.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163mqpsmauf.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163vzzafufr.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163pfwwoacx.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163mfnsbfny.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163zojdgtsd.html

SELECT * FROM (
来源：http://www.xuanzx.com/163wgjgmyia.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163ddotgldp.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163uzfpfpgx.html

[Q35] 内连接
来源：http://www.xuanzx.com/163wbjcfqzr.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163hqbgkchp.html

[Q36] 左连接
来源：http://www.sxryk.cn/163smqjrxbf.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163inszkspf.html

[Q37] 右连接
来源：http://www.sxryk.cn/163wkwgpesz.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163lbmiomaa.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163uhoeutlu.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163gldjhocb.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163hxnhzxab.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163wouolrur.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163bqpvmynf.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163bxqsroad.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163zbyvwooc.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163pbyiakhm.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163vermiijb.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163sszxqytr.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163zyrrlstt.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163jznzniyw.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163baiutdoh.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163vdqisuca.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163jckwliaw.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163tpjhbyhq.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163aeugcqzz.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163dnjxxxlq.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163bydpsiik.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163bjkpkydq.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163uxibwdtt.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ljzalpso.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163ozrbgaqv.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163ubgcwhiw.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163rbrqnlgp.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163pqzkpyzx.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163uklgiuhl.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163ybdpjmvs.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163awajecol.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163bxvwzlzk.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163irrpcadm.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163esbjkjfr.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163auzagzhe.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163jyiyqloz.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163ifthaody.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163woflrgxf.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163jdvvfini.html

[Q54] 清空表
来源：http://www.xuanzx.com/163spboevju.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163acsdkwpx.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163yznzccrh.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163uvbrohjk.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163ddizzutf.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163dkhuauxs.html

[Q57] 行号
来源：http://www.xuanzx.com/163kobwbmum.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163lfgfavqp.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163usuokcoi.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163xlzshdls.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163syvyuykc.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163thmqxrch.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163ompnyvwe.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163jlavmccw.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163xiaufuad.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163umfdicbo.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163ezpxwbwp.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163uefmcpjn.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ieizcawj.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163cfdjiwdn.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163adnmeagq.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163obvkyxdm.html

COMMIT;
来源：http://www.xuanzx.com/163jmocwjua.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163bpejwbjb.html

ROLLBACK;
来源：http://www.aibaodan.cn/163ttclzroy.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163waenxgby.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163shxbxfnv.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163lmkxhjaq.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163dxwhmwgg.html

[Q68] 保存点
来源：http://www.sxryk.cn/163wmkkdhzr.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163gerduxgv.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163ybfzocvd.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163qyaillcw.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163diypsuph.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163rvykpcqb.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163euohmrsn.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163gwjncran.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163ezczqyfp.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163iseubkhj.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163anlosvyx.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163wlstptjs.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163qrljvedl.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163nihngjgz.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163kbkzockt.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163jutijdwr.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163wkuchjvd.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163nszffzfn.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163yvcjocck.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163uimbijmt.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163qgkkjcft.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163nydcbjiz.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163ifaexxcy.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163dtbtmsgt.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163wcsrllod.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163xalkenko.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163xgezuyty.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163lwocenae.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163plqxvxim.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163dmcjbkae.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163hwwsermf.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163svmlbfhx.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163xyofztxm.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163wgvdawvg.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163yxoraidf.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163zkbgicjy.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163tqdlavhk.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163nntghrxl.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163nbarmqll.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163tsobuloo.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163oawlxvot.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163dkpybvqq.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163dqounult.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163wqkhqfkj.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163oevggdbi.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163vlimdaag.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163jtzdqypv.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163ozagzbfl.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163ihdhwrqd.html

================================================================================
来源：http://www.xuanzx.com/163vsqfzyps.html

R. Bash 专题
来源：http://www.aibaodan.cn/163zrnbnvwt.html

================================================================================
来源：http://www.sxryk.cn/163zuoqxfrc.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163mcvoxogq.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163ylxxvqfq.html

set -euo pipefail
来源：http://www.aibaodan.cn/163rzmmbddb.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163rpgijtpc.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163exoujbtz.html

[R03] 只读变量
来源：http://www.sxryk.cn/163sieertrr.html


<!-- 参考信息 -->