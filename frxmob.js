外链999!wailian999！

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163qsfubzzk.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163zeawqjun.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163bnwldsbl.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163isvpwzot.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163oirttsbh.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163rqsvrguw.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163qzrnfjit.html

[P04] 求长度
来源：http://www.xuanzx.com/163ffhozvxq.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163bhwlbavk.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163qntrahld.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163akgwqsdk.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163mfnzqbyt.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163dubxfczo.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163tibnmbej.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163axcmgmxm.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163dpxhlaxl.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163mnvhqxkb.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163wdhtwkju.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163pfvooebq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163nvrgdcvn.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163dweeafkl.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163ufepnpje.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163amzkgnss.html

Ruby: a == b
来源：http://www.xuanzx.com/163idsuvqmf.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163pqxofwya.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163wzggljil.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163ygyjrsun.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163aicbixsy.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163wgrhjygy.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163hrqwdnpq.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163lzwnoghm.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163ltpapwfi.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163iseksbxl.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163yubqtrfb.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163plhmdhaq.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163qrhnrwab.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163qrxtgtpu.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163mchpneya.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163kusvwmvw.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163qksxngmc.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163isisnikn.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163qgdijgwn.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163ngxuhibx.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163dciyzixm.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163gyradbzl.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163ltrppzce.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163duwxsaxg.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163stmqbqab.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163cyemxtol.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163ktxybxgc.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163pyurblae.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163jgsreniq.html

================================================================================
来源：http://www.sxryk.cn/163zwrnhynm.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163ekrkoctu.html

================================================================================
来源：http://www.sxryk.cn/163rvwnpcgb.html

[Q01] 创建表
来源：http://www.sxryk.cn/163yujcetdd.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163dhklnbcu.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163qgbblntf.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163ibtdahvl.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163eosuwlmn.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163rftiaeid.html

);
来源：http://www.sxryk.cn/163onjwbofy.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163njedpyjp.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163booppxjp.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163bvbsidsu.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163fiqjgocj.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163gyovmxpk.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163gpoxflno.html

);
来源：http://www.aibaodan.cn/163voepohrg.html

[Q03] 增加列
来源：http://www.xuanzx.com/163bnfrtnez.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163ibmbaumw.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163dmwdbnlk.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163rrytprlt.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163ucuoexrh.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163xnbqbhnl.html

[Q06] 删除列
来源：http://www.sxryk.cn/163eiveowmu.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163xyknygmm.html

[Q07] 删除表
来源：http://www.xuanzx.com/163axzggkal.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163hdpgwasx.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163aobsvybd.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163dcorypnr.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163kogfkmsc.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163ztuvpdpk.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163mjkooshg.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163vkmiikwd.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163hflltzkc.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163fsbobzsb.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163qzzydkrv.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163grfcwtdi.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163yejxcypx.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163ridukjdk.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163evifmgqo.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163meaudibd.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163khuwvsdu.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163eyyajzlp.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163rakfpqzh.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163jbzimwdr.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163tflgnaaz.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163bjckfews.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163rbupjyum.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163uckuxdae.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163kcgrpsrr.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163orgjggoy.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163ecubusfj.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163nvoamgcw.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163bkxfmvos.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163vwwpkggm.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163vnootbeq.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163cobcymia.html

[Q22] 排序
来源：http://www.aibaodan.cn/163vlhmcbuu.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163eeuhcwap.html

[Q23] 分页
来源：http://www.xuanzx.com/163hqpfsncs.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163tqyoblmo.html

[Q24] 去重
来源：http://www.xuanzx.com/163hoabenlz.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163awqnuyxt.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163fbivqnyk.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163bvbqfqlk.html

[Q26] 计数
来源：http://www.sxryk.cn/163ztloisus.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163eejoktyw.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163alrqkzuz.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163gctvugli.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163dakxcwqv.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163okmpmoip.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163odhtiekv.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163jjejykyt.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163pfoxxjiw.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163lvdowlur.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163vchpvirw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163pkowiufa.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163haccbkql.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163bhjeszzf.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163avdxvtgo.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163txlulvne.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163bjvpdvre.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163hvvjifze.html

SELECT * FROM (
来源：http://www.sxryk.cn/163uiaxeels.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163iybsnilm.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163sjymksuu.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163iqoebpjb.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163aolnosyc.html

[Q36] 左连接
来源：http://www.sxryk.cn/163qqzfexym.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163rowapozm.html

[Q37] 右连接
来源：http://www.xuanzx.com/163gxpzagiy.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163uqkjfbse.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163jwatbcce.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163diffpztu.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163cihjgtxh.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163xriykhvh.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163pzugvuqh.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163ksvgftvt.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163yghemszz.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163zcvhqcrp.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163uinbdzlp.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163xaawccku.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163wkqdhmdp.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163qzikulsb.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163sxjlwxml.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163zqnmivbv.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163xglobohm.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163crzehvzu.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163bhlsaosc.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163rmyyyhko.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163ikowxubl.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163vqchjihw.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163wyyeihdq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163dvgebrex.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163oblsxarf.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163xrzlwnax.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163whvqrzgq.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163fwiqehip.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163dpojyzrt.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163gbycxokd.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163ksybdmgw.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163zmfofxsz.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163djpfeeye.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163ymjjfvjh.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163oltysiya.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163wrlvfgkv.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163cvarofyw.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163azbbtlxz.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163dydepnzv.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163zwzarhfv.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163zyiwmzab.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163hmubkocu.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163dxnorffp.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163jabakruj.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163hhbyxyef.html

[Q57] 行号
来源：http://www.xuanzx.com/163kgzuyglb.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163hlgrdiyz.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163qcrawtdo.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163ldgxicmu.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163veeehayk.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163cknfekyj.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163kbnmqvup.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163kmfvikgf.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163snhhfklx.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163ofsgfope.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163diwvzdvl.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163letzebgr.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163rxmernts.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163scusjydm.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163wmlswctx.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163lqfhywcf.html

COMMIT;
来源：http://www.xuanzx.com/163imzwmwaj.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163zhnulytn.html

ROLLBACK;
来源：http://www.xuanzx.com/163fwmjyjij.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163dsoayyym.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163iazmxtjz.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163bfntqkei.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163wyvnifzx.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163dfzbpdsr.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163cxahleki.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163omclsmpp.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163rhxtpafj.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163vjwszhnb.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163hxvdhqup.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163cadzohkj.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163oypkyjqc.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163rlqnomgj.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163yovpsxym.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163kvbnagie.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163hdwfznbp.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163ahiateqq.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163ydelmvyu.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163liwhgxyr.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163cmgcwtvy.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163tilobdni.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163dwnzrgmz.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163oicdumku.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163zkafxwma.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163xgkmgvrz.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163clzdsmri.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163gbciddgw.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163vyizubxv.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163ocgwtcxm.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163zjrdwqea.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163iqkinsjr.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163ukjheint.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163ynnlinty.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163jpwqjfxz.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163eyhsjgeg.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163zyggnrdr.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163bkqhkxfr.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163pmmwruis.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163zjgmuwax.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163cikxwhpo.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163rschatbd.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163rofmneym.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163cycjdsrz.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163hynxgzcf.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163yzxbxibb.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163yozqthqj.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163dzmaecnx.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163nxqiebtb.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163yiwzrius.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163ccfcbqqv.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163gnslzqog.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163rmrztrlo.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163toevudre.html

================================================================================
来源：http://www.sxryk.cn/163mzhuzohw.html

R. Bash 专题
来源：http://www.sxryk.cn/163kgjmbycg.html

================================================================================
来源：http://www.xuanzx.com/163ibajwcsz.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163ldxontrl.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163dyvzvwzk.html

set -euo pipefail
来源：http://www.sxryk.cn/163hzxananb.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163ftroflkh.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163zkvavhdc.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163xxwqsnke.html

readonly PI=3.14
来源：http://www.sxryk.cn/163iwnckioa.html

[R04] 位置参数
来源：http://www.xuanzx.com/163yypfgjyo.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163czcbwfem.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163jnnmvwgc.html

name="${1:-default}"
来源：http://www.xuanzx.com/163ognbjtme.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163mzrvuknm.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163epobtamf.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163xjscybeo.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163fcprmkxz.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163blyxykup.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163sdeybrbi.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163qkblgffj.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163jkuwurjm.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163sepbtcye.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163lhshapfp.html

[R11] case 多分支
来源：http://www.xuanzx.com/163axmiwrgc.html

case "$1" in
来源：http://www.aibaodan.cn/163ttlxofpx.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163blxvlzvb.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163fnepmtua.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163estkzmtq.html

esac
来源：http://www.sxryk.cn/163easmmrny.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163shykyfok.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163wjdmhbzm.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163ymldkbcu.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163xdhkyysl.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163pwmpjofo.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163twkwwyym.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163snmpkphf.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163qtmudkxl.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163livanpxa.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163moiyoqdu.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163cwpxatub.html


<!-- 参考信息 -->