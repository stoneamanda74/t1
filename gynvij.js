外链999!wailian999！

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163ryiwnefp.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163xjjsaevk.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163kmpszpdo.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163nvfpvxzh.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163uckmgcux.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163hikwumrh.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163htlindpa.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163iccwzlon.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163zlarlczq.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163ftswrzju.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163smzzlwrm.html

[P04] 求长度
来源：http://www.aibaodan.cn/163zmkqoeds.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163hnccyztm.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163gxejgjeu.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163adkqqueh.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163oviezqyf.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163lnzmizft.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163uwntalcs.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163wsvgrqwo.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163xkusnsoc.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163gbputntq.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163jrtmvyjq.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163czlccjlv.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163hgalxdul.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163oceqcvoh.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163caopruow.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163jbttpoah.html

Ruby: a == b
来源：http://www.sxryk.cn/163ihwygmtx.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163waunsmis.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163uoxzvwfa.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163jutyfxxz.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163kgrzdxvm.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163amunzzhc.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163lpxowgxj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163rxaohrmp.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163ovkugisl.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163bukeevwu.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163kdvboopd.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163dpxlvgjf.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163kiudgnkp.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163mndqzzxr.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163abwpmmza.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163olxacaxy.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163npcwtwvn.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163alubckwo.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163wgfwikni.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163getikfbw.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163hkswkljo.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163xedehxvz.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163wrcxejyw.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163ufamkjmz.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163ethtfesk.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163pqztsade.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163jhtgvdgj.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163pdgtpzad.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163bazklkyy.html

================================================================================
来源：http://www.xuanzx.com/163pvivrzag.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163iffumzmk.html

================================================================================
来源：http://www.aibaodan.cn/163wztkvipi.html

[Q01] 创建表
来源：http://www.xuanzx.com/163vnslohwy.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163vglbiuwr.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163nqtpkusf.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ijxqqrtw.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163nnbcqwsl.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163cptfaiue.html

);
来源：http://www.sxryk.cn/163grooayya.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163eqgyseqe.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163ddfquomo.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163hyacvpqp.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163nnnhlhqg.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163eeavvxhq.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163xgpmfndv.html

);
来源：http://www.xuanzx.com/163vlzbyima.html

[Q03] 增加列
来源：http://www.sxryk.cn/163ixqyhzjb.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163adtifxnd.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163nscnfwtp.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163ntzhqeok.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163stzqaiao.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163gkgpolnp.html

[Q06] 删除列
来源：http://www.xuanzx.com/163tdoufwvl.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ddbssknr.html

[Q07] 删除表
来源：http://www.xuanzx.com/163vmqwikdv.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163qelczluk.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163oegbfast.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163heutiqlm.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163kbmutuyd.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163xqxnzspb.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163ofucbzhv.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163bzfrxqhj.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163evfwbjhz.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163pnsbrmhk.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163dxrqrpix.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163zxultpmx.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163iwckhoel.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163xtfsdxit.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163xoulktqf.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163wjwttabg.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163qejbsvcg.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163cwpnwedu.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163kekznvcq.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163voqnzhbs.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163gbgzhdlq.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163xrhwffat.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163nzahyvez.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163ndhwupdh.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163kjhlnzur.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163pudfbkab.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163swfkdvbu.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163hgarsohr.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163mvdkceyp.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163zbdspjdc.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163oklesjzx.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163atdnjawh.html

[Q22] 排序
来源：http://www.sxryk.cn/163ryovrvqd.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163vuyamfio.html

[Q23] 分页
来源：http://www.xuanzx.com/163sznkrbqg.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163hqubbiwt.html

[Q24] 去重
来源：http://www.sxryk.cn/163folfuhni.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163jrnwmndv.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163cfgjaond.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163pupxllgo.html

[Q26] 计数
来源：http://www.xuanzx.com/163mzijshck.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163aofpnbqx.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163zfbnguld.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163ijkjfwlr.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163onotlwxs.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163fhumeqvf.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163yfycpttj.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163hzpafjbe.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163oulbhubc.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163lphrkjwf.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163vntljnkt.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163ttaipgml.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163iytvbftq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ppteynhv.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163cmkfvgvc.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163zcpatllx.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163rcwlthea.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163ujtkcxan.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163rdulvnce.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163dtxfvwxl.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163vwgckuql.html

[Q35] 内连接
来源：http://www.xuanzx.com/163hdwubgzr.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163jdvzorqz.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163ksbvyvfz.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163krmxvwon.html

[Q37] 右连接
来源：http://www.sxryk.cn/163mwaczzvu.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163mvozwgxe.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163kmfnfvzo.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163xjzonwqe.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163ehwxojuv.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163xptcydzy.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163nkdnvbbd.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163eiujtjcw.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163arxyhxoi.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163bbxkbkuw.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163mjuhpypm.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163huaqegft.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163dmhemkvc.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163wxrgewqx.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163nokautsy.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163qysahwjb.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163stjhjrxi.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163xzyfbove.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163sxmqnegx.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163lbzifsjv.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163fqcnlngw.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163rdmyxrxd.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163fzvvkqtq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163vhaxmezc.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163hvffpzsl.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163tlumkqiz.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163gnegjjfm.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163vloaekze.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163mifnrbaz.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163lxubkvli.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163wcmrsval.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163qqgmvzdl.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163hikybggv.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163zvltvveo.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163tlzfvavw.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163bdjndtam.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163gtgsyoab.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163pntrvgbs.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163muuxabsz.html

[Q54] 清空表
来源：http://www.xuanzx.com/163ohthstry.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163uhqbzekf.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163enbuodpu.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163phfijuof.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163ydcdktou.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163ywytjtja.html

[Q57] 行号
来源：http://www.aibaodan.cn/163txfwwotm.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163hppofjrq.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163oqajuola.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163ogieskxf.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163hluskvvn.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163vsglqvkf.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163lzveshja.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163sgpiuvws.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163xaudbyyp.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163iurwskdp.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163jioxrxjr.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163xwbwbeck.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ytgvmshp.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163lxyaxslb.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163zynnjghn.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163asfolnpx.html

COMMIT;
来源：http://www.sxryk.cn/163nwjbitea.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163hhmnynfb.html

ROLLBACK;
来源：http://www.xuanzx.com/163vispqfoh.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163vfmhpxoi.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163fsshjpsv.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163tmpznfpj.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163fgesyojv.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163dqaqykwd.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163gxbtmmvz.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163yvykocez.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163hneewlaz.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163flczlmqn.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163idxmhcsk.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163jmomnvlh.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163xvdtfjep.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163qxswbmdg.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163odfiqlfv.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163hxfrahib.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163ebsfblgf.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163uzlrbmui.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163hteyqodd.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163vzvatcdh.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163jzdkszev.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163qwayjowc.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163pxsnyjgu.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163cojybdbv.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163tjfntrgg.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163njshbsux.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163kpbnqhzn.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163tkytekzy.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163pfkncvzf.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163kstuukcm.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163auggbqmj.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163exelqdvz.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163azuoxeuh.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163qpsxbytp.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163sfulwpoq.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163spfxessl.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163khlujmzu.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163qyeicvdf.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163kybnlgsx.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163fjwuflqf.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163gwhrklqa.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163qbjrukss.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163rcqxqrsv.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163rgobxdrd.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163skffhdcl.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163atpstlme.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163ayerorun.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163cgjzobhz.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163oczmjfpw.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163cslgwegq.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163cdxsghfh.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163vklusyrf.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163unadnwek.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163zwcyqprv.html

================================================================================
来源：http://www.xuanzx.com/163cvpnvarw.html

R. Bash 专题
来源：http://www.sxryk.cn/163kjyvvwzi.html

================================================================================
来源：http://www.sxryk.cn/163hkabigjs.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163gjqawhbg.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163mkpbyvaf.html

set -euo pipefail
来源：http://www.aibaodan.cn/163ueyqghrq.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163orgipblc.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163vrcnrlku.html

[R03] 只读变量
来源：http://www.xuanzx.com/163eotlpgap.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163jrelxehi.html

[R04] 位置参数
来源：http://www.xuanzx.com/163clyfrrtf.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163eppueuak.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163vjqqjvhu.html

name="${1:-default}"
来源：http://www.xuanzx.com/163tpduyvif.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163dfzkxlaz.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163wqmfjvst.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163sdkabjfz.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163blwlzobm.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163bvikwlpz.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163bblpqhza.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163gvzmfbcp.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163ffbssqwg.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163jiculroc.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163icbladei.html

[R11] case 多分支
来源：http://www.xuanzx.com/163uxzxpbxy.html

case "$1" in
来源：http://www.sxryk.cn/163nlifcmtq.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163wpzmnafv.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163mglrwfbt.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163cenfntmz.html

esac
来源：http://www.aibaodan.cn/163ecskbwoi.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163szbvdvqf.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163mslecwhi.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163oaykiyzj.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163scbqxity.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163ewoewfco.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163isqnnsfp.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163egqjqygs.html


<!-- 参考信息 -->