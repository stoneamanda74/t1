外链999!wailian999！

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163kwmlkbdr.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163mhqgfeko.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163pyuooxak.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163plfepyxh.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163kofafsqp.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163devnvyhs.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163rdevbjtl.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163lciyxrna.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163mldtjuyg.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163qnykctve.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163lvyxkzfc.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163dyuibpvn.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163krffwban.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163grgkagrj.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ofcrrznc.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163hqsujdtc.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163fmtgmgyu.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163xblrucpc.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163kroqmkhj.html

[P04] 求长度
来源：http://www.aibaodan.cn/163rplsbfjq.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163wnpeujrx.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ejabrmvs.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163udtsupiy.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163grdovoxi.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163vnfyyhbq.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163aboluysz.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163yljbfwxz.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163avxjeqxm.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163uuzftikk.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163agdhtldv.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163vrxinpjn.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163cbuenxxj.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163fewxcozt.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163ytjrwiyf.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163hmucdxlm.html

Ruby: a == b
来源：http://www.aibaodan.cn/163ltnabkrb.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163uenrducb.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163xjblnbsh.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163zsoxsfax.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163mbofzrno.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163vrbmjfmx.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163qhjoxwar.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163lunvbjms.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163rgzirbkx.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163lmedatmm.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163ozhejjwk.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163ufglvecs.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163iobnhyza.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163lwxikcbz.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163lijunkcr.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163xynymnsy.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163wyiumpgj.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163jhsjlite.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163bbijvzji.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163umhqouls.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163quxyucig.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163yqsoemsx.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163gvuvktwy.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163sjjyacsg.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163qzuxntkv.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163glwlqnts.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163pndngotk.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163ednbybjo.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163dbnesjww.html

================================================================================
来源：http://www.xuanzx.com/163mtapllit.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163veuwkknm.html

================================================================================
来源：http://www.aibaodan.cn/163qadfeqda.html

[Q01] 创建表
来源：http://www.xuanzx.com/163fzasvkrb.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163mzomcvqc.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163zbumngmd.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ogeqtemb.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163ryttynkf.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163ulbqmjjs.html

);
来源：http://www.aibaodan.cn/163oqiypsfw.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163bkvyzduf.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163aigykeaf.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163snpvwdoe.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163hvhoviqg.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163kmzihpai.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163bphyjwpr.html

);
来源：http://www.sxryk.cn/163joairung.html

[Q03] 增加列
来源：http://www.sxryk.cn/163vomouspq.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163yyfxvwxm.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163suxsvfzw.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163nzbxwtfe.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163njewucam.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163sqmgsgej.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163fslbmsoh.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ymexucbe.html

[Q07] 删除表
来源：http://www.xuanzx.com/163idlxckue.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163dudvdsao.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163qhsnhoec.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163thgnxxkn.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163rotyzhyv.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163aigbvxcx.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163jrfmsxxe.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163fztxzgda.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163mlxbavvx.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163yadydauf.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163ioicgzir.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163mvgaaozv.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163bmhfeenh.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163faqjoiii.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163sgadgczb.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163xdwbonnf.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163jbssaeeg.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163djrgdqbs.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163flmuuwwk.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163csvgtict.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163kinonwjv.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163zxpqkzom.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163yluxnyjd.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163bloangpq.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163btqygkxw.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163ukydjkqe.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163kbakltqy.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163ffvsenmk.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163njsuyddf.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163zihitbft.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163sszezvxp.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163igmagvga.html

[Q22] 排序
来源：http://www.xuanzx.com/163qmvxjdfh.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163reynlmny.html

[Q23] 分页
来源：http://www.xuanzx.com/163mmkdpprb.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163dbfyjrik.html

[Q24] 去重
来源：http://www.xuanzx.com/163efdkoyxf.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163youiltem.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163joebchzo.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163utlgmwpy.html

[Q26] 计数
来源：http://www.aibaodan.cn/163rphwanpd.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163ohdvnndp.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163msjxafoj.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163wrblinso.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163lafirgtb.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163xrjhvcdl.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163mnamausy.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163keegixbi.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163tosmpqle.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163nthfnotw.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163rnviumyw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163smsbmauu.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163lfajkkpz.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163qavuilrd.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163wiasiyvi.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163aclumswa.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163gbtasuwi.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163sdbtaarm.html

SELECT * FROM (
来源：http://www.sxryk.cn/163qxqlvhge.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163fhlfmhfd.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163rohnzces.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163cdnqoywe.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163vfwcpsyz.html

[Q36] 左连接
来源：http://www.xuanzx.com/163rhzsivcw.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ubfrrzwr.html

[Q37] 右连接
来源：http://www.sxryk.cn/163warsxkfj.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163hpnfbrna.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163uotcrgsq.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163ikfavhtf.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163wryxfxjc.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163aakyhons.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163duljjpfe.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163bsdhzvqp.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163oingeazh.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163aupmoidu.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163dqmmqqpx.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163pnccmvei.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163syvqofrx.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163scsuhyxo.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163flghdukk.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163mmxoccwf.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163nhwtuxpw.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163vbptsuze.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163dkmdplpd.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163vmfefrxo.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163yidinpnj.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163pxqxakzv.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163tekondor.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163migkluit.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163qleodsml.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163esncahgx.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163vvfzugck.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163cytvwdzb.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163ufkxppra.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163salwtpwk.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163xselwhle.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163ttfaewnb.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163bxodrnja.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163ryvkgaoh.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163wfjxdirz.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163wzsdamzm.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163lxnygiae.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163vhfzoewu.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163ujhsvldi.html

[Q54] 清空表
来源：http://www.xuanzx.com/163znsxqqmo.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163owxqnuzt.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163oelmrpea.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163biqhrkwv.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163shogehzg.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163leuhfelg.html

[Q57] 行号
来源：http://www.sxryk.cn/163lgkkwoxs.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163bspfnvcz.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163qzvggmib.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163ifpdaqih.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163fsrawuwv.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163zukcwztm.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163rirvyhyy.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163bnjsuxma.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163dolkhzuf.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163xhwfpppw.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163azucreda.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163jgtpxedm.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163miaueopn.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163jebidnaf.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163myrjkwpg.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163ykzojevx.html

COMMIT;
来源：http://www.aibaodan.cn/163firtkdfo.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163mnvhuipe.html

ROLLBACK;
来源：http://www.aibaodan.cn/163rjdacezm.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163gfmbbzib.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163hwnbygwa.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163alpetajd.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163annymvkd.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163jpulkfmt.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163pimhqxxr.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163mkasiarz.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163eizmlxlf.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163oakdemih.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163yjcxofos.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163hihvnmsf.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163mcogfpdq.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163uhsloovf.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163kjwgdgwv.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163egiilajg.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163awelgpeq.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163uehgiwje.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163wmtxmdcw.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163jakcoxor.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163udwiyvzx.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163hrpbojsh.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163ktffssdg.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163vecwlbvp.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163zgthoaqv.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163rlchwcyp.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163senqlejj.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163qvsozmug.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163aaymhdce.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163fvjnufeq.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163bspfhgct.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163twlhxofb.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163sfuvwnju.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163icilrkmm.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163tsfidzrn.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163buwlajhf.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163idozibfu.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163yxudgqwn.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163fhqcoewm.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163aqaplqmv.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163iffzpgrb.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163excgddmu.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163wyjoaxbr.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163eoeyckef.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163vggqzofv.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163opqrvdzj.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163wbezsokc.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163mjninuea.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163nxpynbri.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163zqzkrwej.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163wyfnkkrc.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163lwwjoexl.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163ltelkspr.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163tpqsxvok.html

================================================================================
来源：http://www.sxryk.cn/163uveujnfa.html

R. Bash 专题
来源：http://www.sxryk.cn/163vbkkpfnb.html

================================================================================
来源：http://www.xuanzx.com/163rptzeeia.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163exlsznlx.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163xydhzfzm.html

set -euo pipefail
来源：http://www.xuanzx.com/163tzzjwdvx.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163pitionqp.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163bzledcrm.html

[R03] 只读变量
来源：http://www.sxryk.cn/163rvbcyqlq.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163cswpvkba.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163gzzubhjv.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163ugcondje.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163gumfyhvc.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163ifvxvysw.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163emofsqyo.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163xxkuojmv.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163zytbkjac.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163cvmrqokk.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163omlpbcvr.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163wjxxsrmn.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163vdflopyu.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163tfgrtfke.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163wawbstpq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163qyxfhcqw.html

[R11] case 多分支
来源：http://www.xuanzx.com/163birirgxr.html

case "$1" in
来源：http://www.aibaodan.cn/163fssdmpkj.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163oxajbpsb.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163wyypkhll.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163dahgghqr.html


<!-- 参考信息 -->