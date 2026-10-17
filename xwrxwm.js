外链999!wailian999！

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163pmhjyluc.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163dypzsnso.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163dowqqnmo.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163rplduxea.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163ztenytlj.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ioxlizys.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163gwistvst.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163fjioxwlj.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163mydleqjg.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163bkxtsmhf.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163tlyvurdo.html

[P04] 求长度
来源：http://www.xuanzx.com/163iuihhpsx.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163zffbumol.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ucruufoz.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163qexqwrka.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163zbdjbnit.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163ralqwgps.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163nndrczwb.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163gcutavmp.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163alulrkyg.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163oandqqdn.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163ejebpixq.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163adwbsico.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163wduponbv.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163slrrfavj.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163ulrummqw.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163qipstnle.html

Ruby: a == b
来源：http://www.sxryk.cn/163ouotgupz.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163himrxzvw.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163sgqxcqdu.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163ibkgnuve.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163jmqzwmaa.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163tggyvnrk.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163qqgstjcp.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163xhqxvznm.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163dsnmlpei.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163ryguszvz.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163cpdlicjs.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163ohbohcbf.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163wcngpzpi.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163wlidsvnn.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163xuyzgyeb.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163moqliuev.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163epncjvvs.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163nwhoagqx.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163olsoagkv.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163loayebcb.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163rkcthtbo.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163lucltxqv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163arsatuyt.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163xpfhscwi.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163tintqkfu.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163upuzetzy.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163lmodgvgg.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163odvbaeyq.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163rilfcyao.html

================================================================================
来源：http://www.xuanzx.com/163zthsyhom.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163mohwftrn.html

================================================================================
来源：http://www.sxryk.cn/163pqrhrqdr.html

[Q01] 创建表
来源：http://www.xuanzx.com/163ppzmtlck.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163tmbkznfh.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163tqqnnhes.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163gsncduqi.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163cjhlcltl.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163bdhbqsre.html

);
来源：http://www.aibaodan.cn/163dvntlqdz.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163uuqexsmd.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163paeuoyyg.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163hdhmhsbj.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163mjdlswcs.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163oiwbsalc.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163frorsbdy.html

);
来源：http://www.aibaodan.cn/163eleacxga.html

[Q03] 增加列
来源：http://www.sxryk.cn/163ggacwefe.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163jpdnzjzl.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163fmoxwgyt.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163rlhynbqq.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163osjecvmw.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163slzontel.html

[Q06] 删除列
来源：http://www.xuanzx.com/163tymiibfd.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163yomrzapx.html

[Q07] 删除表
来源：http://www.xuanzx.com/163aufkudnx.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163idoiqilr.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163idyoqgak.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163nistgoxp.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163dqsuznsa.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163ootjhqfc.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163txhkialt.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163itmtwqlm.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163ohklwldj.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163ehhwnyon.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163cucjoxyn.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163augefjrs.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163vwwwavbf.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163afgwxokq.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163wvwmbgmd.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163noazxzvq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163wzrolyyu.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163jgliiccv.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163liulpfie.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163fdzxwsxl.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163dzpknfca.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163jikvnygp.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163rmwhbixe.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163dnoxxdsc.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163padvtaqj.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163fhtnxsrr.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163plmmnakt.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163olinkduc.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163xukylfef.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163vtwwxwcc.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163vttcgoqw.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163jrkryyqx.html

[Q22] 排序
来源：http://www.aibaodan.cn/163rhkwdbrj.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163akkdmwvf.html

[Q23] 分页
来源：http://www.aibaodan.cn/163mtnedvht.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163odteposf.html

[Q24] 去重
来源：http://www.aibaodan.cn/163lsjuongi.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163flapwecu.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163uvglqdyd.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163qppayfyn.html

[Q26] 计数
来源：http://www.sxryk.cn/163yccmouel.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163dyjecddh.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163xeijzinx.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163sblfaluf.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163vlhdmlsa.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163xuslkuev.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163exdxnlje.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163jxcdmeld.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163ijpycjol.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ozrtdxjr.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163wtmkykrr.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163uxyfxnlh.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163qyjqmome.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163rbfbgwnt.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163xiemaowv.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163fyjckzvi.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163kdyanbul.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163chwawzhl.html

SELECT * FROM (
来源：http://www.sxryk.cn/163rmjlpkel.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163wtfpnmuq.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163eohjitrd.html

[Q35] 内连接
来源：http://www.sxryk.cn/163dudfjdta.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163xuwqruip.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163fakmoxfl.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ieyjjgnv.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163jofapcth.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163gslrgizq.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163gwnolwxw.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163fgaxjivp.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163qnepyupo.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163xqvfyugi.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163gomaklaa.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163xumccreg.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163oailovnx.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163singdddm.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163otelxaeb.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163jxhccqdw.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163nxcmttuw.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163mfganwom.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163wyudadtv.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163bjulkgpm.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163ixkgfavj.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163imsqzlpv.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163kqjlutji.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163fwugxhcy.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163ybykkluo.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163xarktbbc.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163rbieobml.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163lpozcwsu.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163tntiuxtc.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163utysarwa.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163tnlmeahj.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163yxzmdmgd.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163djwakxez.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163axhboarf.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163fjsimggm.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163uiuvnjka.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163bdjwdiev.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163losrakhj.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163eliowiia.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163emsumddz.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163ztrxjqgg.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163eneaptyz.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163ymlvyxyq.html

[Q54] 清空表
来源：http://www.xuanzx.com/163xgesillv.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163lpjduaym.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163ywqfqucn.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163bqklxfug.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163cratmuuk.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163fstjslbh.html

[Q57] 行号
来源：http://www.sxryk.cn/163bamqhvey.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163ldteywjz.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163trodcwus.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163rnmlhvna.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163mkgurrnm.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163ppchwwwv.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163bckfgqoq.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163jvcsuraw.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163murveifv.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163esixqlgj.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163pcooufzl.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163itlcxpcp.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ouobvmgq.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163qkjoyoey.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163jkzcsamp.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163bfgqwjpz.html

COMMIT;
来源：http://www.xuanzx.com/163rqliyuen.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163cebanjsx.html

ROLLBACK;
来源：http://www.xuanzx.com/163jisqjsxy.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163ceuepqwu.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163qyfmdswg.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163lbowjuzw.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163mycvyuty.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163vozexgct.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163pyblhljl.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163kxvsekon.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163lzgeegzi.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163uedriwvs.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163amyejnyd.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163etbjgbyq.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163jqdbdwnl.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163yxdwodie.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163oqifcxhf.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163ejdhzdbs.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163lhgtohku.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163sejvdohi.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163rnjbxzwe.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163jnbbmqdd.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163hhrlkzgz.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163fskejelm.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163vifunqkr.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163mjmbxfss.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163mdtmzrne.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163uwejsfpu.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163ghfardds.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163baodjwso.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163rmgafdmr.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163jrlefbxr.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163vphxvhpe.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163gpkrqjyy.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163bdqsbqie.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163yhuoxsot.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163gwqcviov.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163xuvphrzg.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163dgcaayws.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163ijvetkoj.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163alfeiwqd.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163vlxrtwkf.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163dsivdsqy.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163bdujstfv.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163zvrgojwe.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163cscyhzpe.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163zgtykkms.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163hkispdbq.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163dvxtlstt.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163gjpuspkd.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163wgluudqh.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163ulnlnbmq.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163suajkzhv.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163fcfnjgjz.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163blbmninh.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163ffuvzmjj.html

================================================================================
来源：http://www.aibaodan.cn/163csphffmd.html

R. Bash 专题
来源：http://www.xuanzx.com/163fvetssih.html

================================================================================
来源：http://www.aibaodan.cn/163qqtkfyui.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163qrigrvdp.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163kxqwmdob.html

set -euo pipefail
来源：http://www.aibaodan.cn/163hqlsocvv.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163egfodfsq.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163kqwtiyhz.html

[R03] 只读变量
来源：http://www.xuanzx.com/163pkltzvwh.html

readonly PI=3.14
来源：http://www.sxryk.cn/163iblomzxc.html

[R04] 位置参数
来源：http://www.sxryk.cn/163kqljogqd.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163ffipgrwl.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163wmwxkjmv.html

name="${1:-default}"
来源：http://www.sxryk.cn/163swblmsbq.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163jletgcqu.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163zkyxhwzx.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163wkehnyiv.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163jypkvylf.html

[R08] 数值比较
来源：http://www.xuanzx.com/163elbkcnfa.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163mnvouxza.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163vhvtqvlu.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163kszwivca.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163trghnbzm.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163eeztoitq.html

[R11] case 多分支
来源：http://www.sxryk.cn/163xgximgtr.html

case "$1" in
来源：http://www.sxryk.cn/163qxhbadnt.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163moxsrwdd.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163kekxcsvu.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163qsocqrxh.html

esac
来源：http://www.aibaodan.cn/163vyqyhpzo.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163qmgipkit.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163wwrfhefc.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163nqieygbu.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163fhrvwdqg.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163zsmbwkps.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163punddjwi.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163wusxpwux.html


<!-- 参考信息 -->