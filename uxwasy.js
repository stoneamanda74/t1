外链999!wailian999！

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163hhekomvh.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163fvdyrgfp.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163onzzjjzo.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163vqxydxbi.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163mqzswzgy.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163biolhxyo.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163epjeevlm.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163hftxnbyw.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163vyyqjska.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163tmwetvah.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163xaecsbyj.html

[P04] 求长度
来源：http://www.sxryk.cn/163oqkqaxds.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163lpsmtmcr.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163zbwomvci.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ywyagypn.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163rcwudmvr.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163kudvvxww.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163bxlpirvj.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163uxquqecy.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163husgvhzj.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163tfffmcab.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163ggwfsqdg.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163gpskrgyq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163fvaadqah.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163dbqlehwa.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163lujistnp.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163evbdqdgx.html

Ruby: a == b
来源：http://www.xuanzx.com/163gohwrddb.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163rfbopwlg.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163ieuuhbez.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163mdmmckpq.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163rjxinggb.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163rmdleemg.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163slkbqfpn.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163jbfpbtli.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163yprbaaiw.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163kdpessnh.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163bzgntper.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163nfbfverb.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163fggaelcb.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163lnkzsyyu.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163qjbztosw.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ahnffmsu.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163fsitbkzs.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163gwcymtpv.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163xkniutwu.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163akuagtzl.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163jyqcsttb.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163sxtuzfad.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163iqtkxozi.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163pdnmekgi.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163ifauebqb.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163fexjijmx.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163bmyiojcv.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163pokxruax.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163zthejjbb.html

================================================================================
来源：http://www.aibaodan.cn/163himalzfz.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163etphsocg.html

================================================================================
来源：http://www.sxryk.cn/163sfhpejxd.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163prgvpuyg.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163wfcfqyur.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ixoexvzv.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163zbiehcij.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163hipcbwam.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163avfqkgbo.html

);
来源：http://www.sxryk.cn/163zwlxqmdu.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163jhlirqib.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163ifhmviam.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163hytdntab.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163uhbabjmq.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163cabogenm.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163elbucfih.html

);
来源：http://www.aibaodan.cn/163yztzkcmj.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163sojnplmn.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163ygeqkyvx.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163qmzvtncb.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163ygqrkkkm.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163fdawqbpg.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163echbctze.html

[Q06] 删除列
来源：http://www.xuanzx.com/163hlstsbmv.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163cmphahxj.html

[Q07] 删除表
来源：http://www.xuanzx.com/163twduaimc.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163yivwgvie.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163smckgool.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163uxtidgws.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163ulfdjhff.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163wsrqlrpt.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163wkcyxdlw.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163zqpfyfny.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163huhwhbvj.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163yynohxmq.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163mruuubgj.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163ttlpcuxe.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163wexczxed.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163wvtoneha.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163gvyldkbg.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163mhdmjoxf.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163jwvtqqox.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163wvkfbaby.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163ompazsym.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163nspmfotu.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163aofzzieb.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163opeklxhu.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163zyanbnjm.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163maogaljh.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163bndtjzxi.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163xykfqsrz.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163ladicuwl.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163cmpcirrc.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163ezcgqxdb.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163liaosqlk.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163smvydlhf.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163pdpzoepm.html

[Q22] 排序
来源：http://www.sxryk.cn/163vnndcctk.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163nlsxdsgb.html

[Q23] 分页
来源：http://www.xuanzx.com/163gglmlpus.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163funbdbav.html

[Q24] 去重
来源：http://www.aibaodan.cn/163aiqzkjat.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163dyhcsynj.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163ywwqgavz.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163wphrfkzg.html

[Q26] 计数
来源：http://www.aibaodan.cn/163swsbxsuo.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163pvvuydwx.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163opwoaain.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163bqgkimpp.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163foaeoutu.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163nsgqvbgl.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163jhbjmtvf.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163esjxanvw.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163jressvqx.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163gwtrebzy.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163xfszbpnh.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163sudubxcu.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163aeovpvja.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163bvlwvciz.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163fhusvmcd.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163orzovsaa.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163qewqkqvb.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163zgtdvnnn.html

SELECT * FROM (
来源：http://www.xuanzx.com/163qfiqeuhq.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163cnzdszwz.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163zysnhufh.html

[Q35] 内连接
来源：http://www.xuanzx.com/163rapokcmq.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163laskvhbn.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163xvmnelki.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ynjvxhjf.html

[Q37] 右连接
来源：http://www.xuanzx.com/163quvydgqy.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163ttutirct.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163rddomeqa.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163zfhouzzm.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163etojwfyn.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163tuhbkzca.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163yvsawede.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163oozefidh.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163njfvzzmp.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163xionplsw.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163kuihhpvq.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163kzldfsjt.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163pktdswfm.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163krsrmdnk.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163nnsucuvw.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163bpgdelne.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163rnhewceh.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163tplsxawh.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163vvbrupkf.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163zrpoawke.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163bdkulool.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163kdruwiok.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163okuwnhiw.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163uheplfxb.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163jqqctprv.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163wukbveaw.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163jvqxmiae.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163mwsiichg.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163bvlsxkrm.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163gjjybhkq.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163rupafdbp.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163gymbbkhs.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163lhwnanga.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163pthpdrgt.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163tyljhuel.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163einpzchd.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163wsxzxasw.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163ugpdrxtn.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163zkhbojne.html

[Q54] 清空表
来源：http://www.sxryk.cn/163eltsumcl.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163pwaqowom.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163yjhbxrxv.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163obkolrsf.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163zlybmuvg.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163idbvljms.html

[Q57] 行号
来源：http://www.aibaodan.cn/163dvdpblsh.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163sroiuoky.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163ayhntzai.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163hcaumrbl.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163bbzoszkm.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163zggfghsj.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163ameffffn.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163wfaqgrov.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163atinhoqy.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163pqahccsp.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163rzjxieif.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163imnhtups.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163lsllsvid.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163gjqfxrzg.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163dpppfpeg.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163memuocmk.html

COMMIT;
来源：http://www.xuanzx.com/163hktwolvr.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163utbztsri.html

ROLLBACK;
来源：http://www.aibaodan.cn/163eucsmzzf.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163ayjhwles.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163eoxjfmli.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163alkqcpwj.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163xmqyfccd.html

[Q68] 保存点
来源：http://www.sxryk.cn/163vhveheew.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163pgjmwped.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163czchhvkh.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163yfprmmye.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163gjvuoedv.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163hdcdyxtp.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163natzahjm.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163xaxinosi.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163qblqzzqm.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163zaesrxie.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163hqtalbzx.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163lnnmsgyi.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163fodixamj.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163etwdrufm.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163ncjlbofl.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163hkzpgxkv.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163ilmymxdq.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163narzxyhd.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163wmjxuhvf.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163ddvnxglv.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163mocpmtha.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163iqpylcbx.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163tkipymeu.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163gflnunun.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163nfhsrpgw.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163zvxzaxal.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163xgkkpaad.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163tmsymnyv.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163kouyewge.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163yspfqwmz.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163yjxcgvqv.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163pvnkhjzu.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163pyhqjzjb.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163hmmjygry.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163elslsbcf.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163otyglfyh.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163tclsdrwn.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163zgnpqlok.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163pypnxuuz.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163yemohkic.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163ulyznhmz.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163hpiwzzmx.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163dyyzxzof.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163wmiltrlz.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163gqzrtsrn.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163klemensb.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163xyoznxpw.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163zhovoabh.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163dtnfpyyb.html

================================================================================
来源：http://www.aibaodan.cn/163nvcccdib.html

R. Bash 专题
来源：http://www.aibaodan.cn/163nsucutvb.html

================================================================================
来源：http://www.sxryk.cn/163bvvnpkox.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163rpolsakl.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163gxfwqfqf.html

set -euo pipefail
来源：http://www.xuanzx.com/163aiuqaect.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163allyktqm.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163utfdouou.html

[R03] 只读变量
来源：http://www.xuanzx.com/163actkpegj.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163ylxkysgv.html

[R04] 位置参数
来源：http://www.xuanzx.com/163obijqhul.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163yoeleszy.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163wnwokfzi.html

name="${1:-default}"
来源：http://www.sxryk.cn/163uioacnzz.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163jaowifed.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163zzszshpv.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163jcqayvlm.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163wymxrwcm.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163yvgrihfc.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163gbuosmbz.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163ximwjdgu.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163uxfvxcyz.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163shwgpgkp.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163bsushqlo.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163pykrnpuv.html

case "$1" in
来源：http://www.xuanzx.com/163xiosxxtn.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163pgvdilmj.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163fwzfdthb.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163fatobojj.html

esac
来源：http://www.xuanzx.com/163cnnzrzye.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163gvgurbfi.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163zsvqusrx.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163ycajwbdd.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163axfygpop.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163kvhihqhx.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163chtoyolp.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163fnjtklbs.html


<!-- 参考信息 -->