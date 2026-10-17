外链999!wailian999！

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163oufisjdf.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163dwmirfrt.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163limzaipy.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163dcicbggw.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163rwotksmp.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163krveqlwx.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163hbrnyhuj.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163xffecvwb.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163nyfigrgz.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163tsjkmzku.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163rfrplhmm.html

[P04] 求长度
来源：http://www.sxryk.cn/163zeeywykd.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163uiuttvqw.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163qlhdazmi.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163muxjwbzh.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ruixeukm.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163yeqcmmxe.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163fltedsne.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163oohpbejj.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163htotmilz.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163qdptwfja.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163hnzebwbe.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163cbgjocbs.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163udgvlvmf.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163iyhnudff.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163rfhiasxo.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163vzuelnlu.html

Ruby: a == b
来源：http://www.aibaodan.cn/163fzzastsy.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163byvsglba.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163xyhoxefc.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163ittehhay.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163tdmabirm.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163vuozyfpw.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163gmxovayb.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163zrjpiyqc.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163xdevhyue.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163ptgtxsen.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163yougxesc.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163pgqjayvt.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163rhdgvfva.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163zyissrqj.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163qgdygipu.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163msnhyodz.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163mnszicxb.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163ipixqglx.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163nidnmjae.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163kpxeynbr.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163jqduvwqn.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163vftpslhc.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163jvxuglva.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163aspsgyyz.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163oshjxbfy.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163owslojtb.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163nnscmlip.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163lkfzvhhb.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163dafxivcz.html

================================================================================
来源：http://www.sxryk.cn/163bltjmytb.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163nvinzuof.html

================================================================================
来源：http://www.xuanzx.com/163zdwrbmdi.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163qfkhnwyk.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163cisqwpcl.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163gtfvceks.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163yrcktjay.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163cdgtgbzp.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163bpimpavy.html

);
来源：http://www.xuanzx.com/163uifqusge.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163sbrdwzfm.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163basippyt.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163wcdgxjtu.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163ivsfikdp.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163zswfalrc.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163bjgeiwzg.html

);
来源：http://www.sxryk.cn/163nsyjjqpz.html

[Q03] 增加列
来源：http://www.sxryk.cn/163dkksjdhj.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163sadhguxz.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163qvqjzgdp.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163ipojnahs.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163nlarjkos.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163mmmijxta.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163njebwdvb.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163zccrmtyx.html

[Q07] 删除表
来源：http://www.sxryk.cn/163kevnpipp.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163seqzcrhc.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163aawnxqff.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163wthktxsh.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163okxhuyaj.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163jrnvrlhj.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163mvwjzqah.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163eyafihbr.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163avtfruvz.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163iancyxlz.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163ynmqfhor.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163isqtslxu.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163qnlisdwr.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163kjhzzboc.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163brtukaav.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163ebpegjny.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163wdvjoewh.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163jtlhxsvk.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163geeajjba.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163dodryswe.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163yfnhpgoz.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163astptxrf.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163ayoobguv.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163mrtobgwl.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163bzwpwsmo.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163mprkeulu.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163jzuvcurv.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163vgpqianh.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163xwifwyhd.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163ydfrvgeo.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163ikljnnec.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163estrrgxy.html

[Q22] 排序
来源：http://www.xuanzx.com/163hmnjapbo.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163kbnrntnp.html

[Q23] 分页
来源：http://www.sxryk.cn/163rdlxurke.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163uzvgnoeu.html

[Q24] 去重
来源：http://www.xuanzx.com/163pzmjlpfr.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163xmjthkrv.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163joigoggb.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163zylfmsug.html

[Q26] 计数
来源：http://www.xuanzx.com/163ocmtrpld.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163fuziueyt.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163rtdieoag.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163gyprmsjs.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163nuoqsesz.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163wleadiox.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163tuuywcro.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163zzsmrvcu.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163fpenftiv.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163doxlqtly.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163tcaxchtx.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163whccbdno.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163cwnjbzch.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163sortjkqg.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163ewdmqtoh.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163jpnhjeqn.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163xgxpzggt.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163hwemwrfo.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163wzofxzos.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163vugufths.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163ouafysei.html

[Q35] 内连接
来源：http://www.xuanzx.com/163jqjdguzw.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ipxepgja.html

[Q36] 左连接
来源：http://www.xuanzx.com/163szkivhhb.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163gjlleorl.html

[Q37] 右连接
来源：http://www.xuanzx.com/163dzdoubga.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163ezuegcrt.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163bwzgmgrr.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163wjyridhq.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163bipxwecp.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163jskoxskr.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163jkwrtvpw.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163fdvzkbnr.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163kqstgimo.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163trlvfgad.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163cnrfqlgx.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163uberxjgw.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163hhrnoibb.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163dyvbdmxz.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163zldlsjcy.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163noxyzyzw.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163ojadmomf.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163fajgcscn.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163tvyimjxw.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163bcwmzfbb.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163tsznzncl.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163uwtsppja.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163fhjnsyhx.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ksiftpiw.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163yowprgdx.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163sehzytci.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163xrhlgfrs.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163zwqjdqcw.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163rlmmfbvu.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163znildbxl.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163ptvrvxff.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163lflmbimu.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163oajrqmwj.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163gjklryyu.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163mxxmxwwk.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163pqchiapu.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163mtlsifyw.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163avwqeaqk.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163ymxlpzrc.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163egjwoeix.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163gbluladq.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163mumrfeja.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163rgcwxnes.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163cibjifjb.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163ebacowew.html

[Q57] 行号
来源：http://www.sxryk.cn/163celxrfpm.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163qmneoazk.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163egudbyka.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163ocgipbwh.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163xfrkcehj.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163raswzoqs.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163hkkwkzwn.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163abusprhz.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163pzzaqsru.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163vcyidmxm.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163erzjgvks.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163xxfwjttk.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163dgdvicpo.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163sqmaahzd.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163offckmfe.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163lxrujvuc.html

COMMIT;
来源：http://www.aibaodan.cn/163zhhnesit.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163vedluagp.html

ROLLBACK;
来源：http://www.aibaodan.cn/163bbugykpy.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163jnqbxejr.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163rixhtkcf.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163zglckfof.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163pseoqiqh.html

[Q68] 保存点
来源：http://www.xuanzx.com/163tmoxylny.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163fwibepas.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163ytqklphl.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163oukvijes.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163lggszlqo.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163myznjirk.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163fflymyuj.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163rwnlgwvg.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163vtppzwjh.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163qvogbcxi.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163bfxhzwso.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163ujwrpcys.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163mqofrnus.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163ggdmzkzg.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163xfnmzguu.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163qeooopjp.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163ymawznht.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163gfqoljup.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163wnyqyjpg.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163tkfmlbvw.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163afovzqie.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163rfucjogd.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163cznpknow.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163vctuuexx.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163esbdllyq.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163qozynnnq.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163uctomoeh.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163tvzlulkd.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163zddmluhm.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163enejllch.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163bpitqfwa.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163fhywbrap.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163hkuztviw.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163iqqxacpi.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163erjjxcns.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163kahfvgtz.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163cbhqhwmh.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163ylzuibhh.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163yefjueoz.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163prxosusz.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163wdaqihoh.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163kvyymlye.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163cgeqhvcz.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163ncasfrkt.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163vzqytebd.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163qdaefhbi.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163ufavjilm.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163lvjanqdc.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163xcvxtlgb.html

================================================================================
来源：http://www.sxryk.cn/163genniwuo.html

R. Bash 专题
来源：http://www.aibaodan.cn/163rzvanigm.html

================================================================================
来源：http://www.sxryk.cn/163lokdrlqz.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163yhxwenzj.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163ytaiwwbf.html

set -euo pipefail
来源：http://www.aibaodan.cn/163wdimzxql.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163rlrnulzi.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163nzsuzujm.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163thasdxmx.html

readonly PI=3.14
来源：http://www.xuanzx.com/163khtngajy.html

[R04] 位置参数
来源：http://www.sxryk.cn/163xonetwkk.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163ltwrysea.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163cehwqipl.html

name="${1:-default}"
来源：http://www.xuanzx.com/163szermkqc.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163hnthqksw.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163lwvizndt.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163cwpskypc.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163wxrigegp.html

[R08] 数值比较
来源：http://www.xuanzx.com/163fcjphxsn.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163mskultku.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163jbkqrgxd.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163jgeqlzxs.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163mjpoortx.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163mhvmeoba.html

[R11] case 多分支
来源：http://www.xuanzx.com/163jwowuzag.html

case "$1" in
来源：http://www.xuanzx.com/163vjnhidxk.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163pypogblb.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163hthkgvni.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163ajxnirim.html

esac
来源：http://www.xuanzx.com/163tpdexoiw.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163wcbqdnwy.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163ctuzgrog.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163bgsfbarn.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163hojavurk.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163gvcqyrzy.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163hrkygcxq.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163jhhgqyud.html


<!-- 参考信息 -->