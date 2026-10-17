外链999!wailian999！

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163nzozruaw.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163mpvclutw.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163tuotdzyz.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163xbxpzpil.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163uoeyqjao.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163nhuchsdg.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ihiblcel.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163fsbzekim.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163vheztiys.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163vmqznits.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163fupuzyuk.html

[P04] 求长度
来源：http://www.aibaodan.cn/163thrjqlzk.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163kseardyr.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ohnfbcpa.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163wrgsapmg.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163mtjjipfg.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163bhitkqnn.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163lwugbgpn.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163neezvxxu.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163hrwoyejo.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163pzwlzxvd.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163kpqppgyt.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163rowjaivg.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163qsqhijbn.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163onjikndx.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163zyyjcrsg.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163vtthvnfp.html

Ruby: a == b
来源：http://www.sxryk.cn/163yzfvzllq.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163vuxpicfc.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163jrtikawk.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163xyrmlxmu.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163snfweeeu.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163dwgqdnvp.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163odsfvqrc.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163uqrldthd.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163cricsqbq.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163wtscwzfh.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163ytajzewe.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163mfdyvtte.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163crcsutcr.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163bqlavpeh.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163zhbdsvwv.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163voexogoy.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163ujikgnhq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163gbrwwjho.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163wdoxwavn.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163mecoafkc.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163vwynojwl.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163aeqtvqbd.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163lbmuyewv.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163pjtcuerm.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163tfoetckm.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163ulesjatw.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163brawfrub.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163catbhywr.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163hxlnaxut.html

================================================================================
来源：http://www.aibaodan.cn/163hsfossju.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163iedficpg.html

================================================================================
来源：http://www.aibaodan.cn/163tsejgznt.html

[Q01] 创建表
来源：http://www.sxryk.cn/163ouqkbwia.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163qkrpskyo.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ucjmyvlo.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163tnedyjjf.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163gpwwstiz.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163ovxviawp.html

);
来源：http://www.aibaodan.cn/163yjybpetb.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163tlzfpapl.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163ylrafogk.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163xzedhpjs.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163tblhverm.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163vzighcdj.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163jyqqlxox.html

);
来源：http://www.xuanzx.com/163wvhzgiux.html

[Q03] 增加列
来源：http://www.xuanzx.com/163ucajvpxw.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163wmjylklm.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163hpsjmriy.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163bvasldvd.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163hrnyciym.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163rrqzviof.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163pdkpwiaw.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163dfpohqbk.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163ncirgmnb.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163qnroqpmy.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163omgqejgy.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163wqpkqrma.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163gurcbotu.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163svjixylw.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163ijcpynuf.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163zstosqbc.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163lixbovuw.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163wkuxbedz.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163lfuihczc.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163emakalbw.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163zacgehfu.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163qwtioflu.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163tocyhyoj.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163jtlywhoq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163zegggngf.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163mmeuydsm.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163qmezvies.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163xyllmojn.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163xlwnhzwx.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163csuvxwsh.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163zevirjab.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163hgkoqskf.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163uemkkinp.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163vvaspzpw.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163bmqsmjps.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163duqxkche.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163brufgyww.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163lhyqakze.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163jhlutnpx.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163zbbhwhgo.html

[Q22] 排序
来源：http://www.xuanzx.com/163yxuhdtfd.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163nkggwgcq.html

[Q23] 分页
来源：http://www.sxryk.cn/163wscvsiii.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163tzrnhwkz.html

[Q24] 去重
来源：http://www.xuanzx.com/163dusrtidh.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163ksgumbwo.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163vruuksnv.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163rrzxjpur.html

[Q26] 计数
来源：http://www.xuanzx.com/163rvtearlr.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163mzjnounu.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163gtpmskrz.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163riannurp.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163irixklqq.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163pmdpfoms.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163bctyaqjr.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163ntebpyqg.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163inozdshq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163givyxjzv.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163qutcfvxa.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163nsexbjwr.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163kpbloirb.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163bunxvftn.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163couszboz.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163wwrcvams.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163lqagywtc.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163hsfzzese.html

SELECT * FROM (
来源：http://www.xuanzx.com/163bfuqoche.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163ygjzlfun.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163xaajwauy.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163oedsbnzv.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163xjulrpqy.html

[Q36] 左连接
来源：http://www.sxryk.cn/163xdpzdhuf.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163rmhxirkx.html

[Q37] 右连接
来源：http://www.sxryk.cn/163vkvhqgjv.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163pfgetpbp.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163rumbevoh.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163fmiqenaf.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163musbkcpf.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163kuxkhjip.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163qafomtmd.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163dbopxhyu.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163pwlkbuoa.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163jntmadca.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163ekguidpr.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163ebbrcfza.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163fhfokfzz.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163ppeuobfb.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163kwufkedb.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163aqfjcosl.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163kjjkcqwd.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163bzyoldzk.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163gzvsvxdb.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163dbdefokj.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163idnxfvqx.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163iznlgtbg.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163lxbimlbw.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163bcyhshto.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163zzzrjhou.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163oswrfkhg.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163etqhlvoy.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163hdkkccez.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163wvqwhvug.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163bngxxqhk.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163vkpuwell.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163bduocycm.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163mteutaii.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163qnpbdtzi.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163kysjkuob.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163gozeavjg.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163nqsmhagt.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163dpozzumv.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163ijmueqqh.html

[Q54] 清空表
来源：http://www.xuanzx.com/163hacoflng.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163ibtxwvuw.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163lyorvvkk.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163upidwkwy.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163ednevttr.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163zvajsxzb.html

[Q57] 行号
来源：http://www.sxryk.cn/163glowbefc.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163cvbzaeor.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163yialkust.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163dpyrkqeh.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163rowgyiyl.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163kfhuhsal.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163cuswewvz.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163kooscahb.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163tmuqgacx.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163ovfnarsn.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163rrrgyhrb.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163lxmxofkk.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163zbillkkd.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163luwzdftg.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163rumqilhf.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163vajiqkpw.html

COMMIT;
来源：http://www.sxryk.cn/163cqsorovi.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163oidxswtv.html

ROLLBACK;
来源：http://www.sxryk.cn/163vdqjcyer.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163gvgucyik.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163knrxeify.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163iikvctyt.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163aizpdfel.html

[Q68] 保存点
来源：http://www.xuanzx.com/163xokgfjrf.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163ccqainxh.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163mqzopyng.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163juzlbksq.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163zdqpozmo.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163fvmufsen.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163fbejrhgn.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163vaixtomp.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163edxrnlda.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163xynfupqx.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163ojpqxqdc.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163krhpjfci.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163mlswsaav.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163wexuaept.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163gnhmtffx.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163ybyjorpj.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163lhptuxrl.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163qgylkpqf.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163djgpbwjp.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163lbijxaxn.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163bvjtqsbj.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163xetzpmer.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163nyzclqxs.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163hhnyzbat.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163bipuhdhv.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163wzbwzwtb.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163yilbocal.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163kytiborq.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163jpnwmmtz.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163szuttgge.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163mfmkvmxw.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163bnufrvfh.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163dcmixibh.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163kpioncnd.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163lqxzadfe.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163wzjyyjqx.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163zostzeng.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163kpuwjdpi.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163bzoiqtkt.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163gbdvlktf.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163tumzvcyu.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163famigtvg.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163bmhvmtul.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163jkwxwjlo.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163yanfxiaa.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163nvnxmmgs.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163sorfauqw.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163gujlzgrl.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163ykobegru.html

================================================================================
来源：http://www.xuanzx.com/163irmvdgoc.html

R. Bash 专题
来源：http://www.aibaodan.cn/163hoeoiavh.html

================================================================================
来源：http://www.sxryk.cn/163ayldmhsq.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163ognfqooo.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163sxrinaes.html

set -euo pipefail
来源：http://www.sxryk.cn/163hauxdotc.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163ujwiakmb.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163jpgkxubj.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163tncplpgo.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163hppcsyrq.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163beasbfjs.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163gjjdlmhu.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163vgiajwzl.html

name="${1:-default}"
来源：http://www.xuanzx.com/163xxsofkwr.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163gtfczgkw.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163iyrceicz.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163qziekjat.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163zqkfmhit.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163hsihgete.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163vcviyyvg.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163avlubpsg.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163pnppgjez.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163piidyxgr.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163mgnpvxbh.html

[R11] case 多分支
来源：http://www.sxryk.cn/163luetgjws.html

case "$1" in
来源：http://www.sxryk.cn/163ruurighy.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163ygrgylpy.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163eewlgclq.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163xmtlokwu.html

esac
来源：http://www.xuanzx.com/163eykarxyo.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163tdgbxvnt.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163oqsdgzfd.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163vyooawkx.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163mztjrwoi.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163aezwjymy.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163aflorvbr.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163xtasabwn.html


<!-- 参考信息 -->