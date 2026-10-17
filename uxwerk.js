外链999!wailian999！

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163iotlafpt.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163kvvzyysk.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163stlfnieh.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163gffzdfcs.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163ltkxszgu.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163rwjalvuo.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163mwnkdjqo.html

[P04] 求长度
来源：http://www.sxryk.cn/163cicfahnk.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163umpoecow.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163hncpnuwj.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163atspbolt.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163thugphyn.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163cirucocl.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163tluqjxxb.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163pgvadzgc.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163wphtiexk.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163mvdlmkco.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163mlgkhbzk.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163aeioltqc.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163ncyarnoz.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163dqgebziy.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163khvhdbfr.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163eizkytna.html

Ruby: a == b
来源：http://www.xuanzx.com/163uzfsrsji.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163cvagjtmu.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163ovjhhxkj.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163ebpopwoc.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163yeocpqtd.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163pfqbflkg.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163xnynmcrv.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163lnrucxnf.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163cyenyowt.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163ijeovang.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163lnhlfkfi.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163yafhhlul.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163yypbuekf.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163wjugaclu.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163rjgrtpap.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163nvzynbfk.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163jmbxmsji.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163kandzbhu.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163pxkfmcgh.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163okwckxoe.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163ljcvuyxr.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163bmiqdvdb.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163dejvsrwu.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163tzbfrluk.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163zklpqkky.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163fzmirhcf.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163xiuckhvi.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163zkxnldup.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163xjdmcjqg.html

================================================================================
来源：http://www.xuanzx.com/163mabrrecd.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163wzhslclx.html

================================================================================
来源：http://www.xuanzx.com/163nilryzlc.html

[Q01] 创建表
来源：http://www.sxryk.cn/163jkzvnpzm.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163wqsordqi.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ikgxssvi.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163amyblmod.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163mbkmcnbs.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163yclhnhdl.html

);
来源：http://www.aibaodan.cn/163vzpofevu.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163oevbkcxt.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163tzzoghuy.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163mdwiwamb.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163hhoctloe.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163nawghsgw.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163uzhhjusw.html

);
来源：http://www.sxryk.cn/163pautwhbj.html

[Q03] 增加列
来源：http://www.sxryk.cn/163rcyfhltj.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163aamxzigp.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163mzpcxzbp.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163efrmapsa.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163tcgjaycf.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163yceujdjr.html

[Q06] 删除列
来源：http://www.sxryk.cn/163qiqzkjaz.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163hptblggu.html

[Q07] 删除表
来源：http://www.xuanzx.com/163okqoumwd.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163dofhnxeb.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163honzapdq.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163sbqsyxlm.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163vkpussyq.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163ewyygmti.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163djdwsbak.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163qgtblkrs.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163lguhbjqz.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163wbqjtzqm.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163uisrbmjc.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163hsresuuf.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163kchisffq.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ylzsddik.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163vvkgazfy.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163ibrqliox.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163ofnvrngp.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163ibubkbta.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163jzfxhzud.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163jdrgrepn.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163vrkjxghb.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163nzkjejya.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163pzbzcbpx.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163szoyhscg.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163lxwjahwc.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163cwbhtxwk.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163aggeqirv.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163hlwkwmkl.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163pbfuuxod.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163jhbdizeg.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163jkfpafrl.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163zlvewxxj.html

[Q22] 排序
来源：http://www.xuanzx.com/163ebqmwgjl.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163swwduqun.html

[Q23] 分页
来源：http://www.xuanzx.com/163yiszpsty.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163zggwoebs.html

[Q24] 去重
来源：http://www.xuanzx.com/163oezawroc.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163lwjnilgf.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163noqodcdb.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163szgefwee.html

[Q26] 计数
来源：http://www.xuanzx.com/163ndypudpp.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163ffblwrfi.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163grsybdnr.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163odvylset.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163olmjjpha.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163hlentsai.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163wwtvnnmd.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163hgebxgbl.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163njhmghad.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163homiktdl.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163dbbntmte.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163ijdcpejy.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163zelvunkq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163masyoaux.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163jnudbwhl.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163cknlueia.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163zsjufujf.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163yjtqksst.html

SELECT * FROM (
来源：http://www.sxryk.cn/163zfvghznq.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163kerwkobn.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163tqgkicim.html

[Q35] 内连接
来源：http://www.xuanzx.com/163gqrnkvfc.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163nvwkbxug.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163hpimzjoo.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163tdbvlxil.html

[Q37] 右连接
来源：http://www.xuanzx.com/163leurfzpd.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163hufrpygp.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163dtzqvamy.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163rriffrqo.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163wvkkvhkc.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163ajjlysuv.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163wwssuaet.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163eoeryysu.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163axtxpduk.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163phuqozlq.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163ywgjoewu.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163gnipkskp.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163hhvsrevq.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163rkspbopk.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163urrdprgz.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163xrfdzpuz.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163evnykkio.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163rasrnoqi.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163ixguoiqi.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163skmqbpfy.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163lvcyeian.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163spfspsos.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163khbrwukq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163noaarqyj.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163wweszgsq.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163qnwgfhps.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163qvszwrae.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163lzhglkzx.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163xczluzut.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163qxagtliz.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163zzastyar.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163jcqxhwbo.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163kohoxuuo.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163ycbjyebj.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163okpwedyu.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163wykyiwls.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163xbvsacri.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163vxermpib.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163yzcfdlgd.html

[Q54] 清空表
来源：http://www.sxryk.cn/163eajmzodn.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163hiaqieqx.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163zmsgebbx.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163maugrcih.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163rqqkqjxh.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163qfbjvoxo.html

[Q57] 行号
来源：http://www.aibaodan.cn/163ouyixltu.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163xfxptmyb.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163tjjwvztt.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163bfyjlfyf.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163aaiwkahs.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163pszgvkxs.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163uhoeelge.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163cbutzpuc.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163uqmsgukn.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163ofklbrnj.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163qfuieltf.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163pksfnqna.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163czcgmior.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163xgcfioub.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163haivajsg.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163evntmmzc.html

COMMIT;
来源：http://www.sxryk.cn/163mnpljmcq.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163hsgowkgm.html

ROLLBACK;
来源：http://www.sxryk.cn/163lpcdnemk.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163ovrbmbov.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163xiwqtyce.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163vtpaczns.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163epjogped.html

[Q68] 保存点
来源：http://www.xuanzx.com/163hppvpxpz.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163jzednebo.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163uzydpzgv.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163yegkkqdk.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163jptgtrla.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163wndolrml.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163uhxkfeyr.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163ibzivvbw.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163twiuyvrc.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163jqiyddbx.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163zwqrgplh.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163zbezcewc.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163euqmovvv.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163rkgatitx.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163qtectqpc.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163urkrxkxf.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163jycagfal.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163ipdpites.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163zzkspdfq.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163gasakxnl.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163nttwqtds.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163lelokpny.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163ehzespfa.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163ykijeqye.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163dcptpuhh.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163kzyfyxlu.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163uvtxhrkf.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163jzwmdtat.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163olurexns.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163naswkrvg.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163cpdpudhc.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163ectrakqt.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163sxgqunll.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163xrbztuhi.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163patpnbtr.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163edeocqqo.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163zrojffbg.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163cbrveuhe.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163pmywiipq.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163xzlfumrs.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163nydeyhxw.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163rpmpatlx.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163cnjrfoie.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163mbynaplf.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163ecsqhozs.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163vujqpnrp.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163evwybsvl.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163uyhorslg.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163fkuqlngg.html

================================================================================
来源：http://www.xuanzx.com/163pnrwmzot.html

R. Bash 专题
来源：http://www.xuanzx.com/163bywdwgyq.html

================================================================================
来源：http://www.sxryk.cn/163gqnysnab.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163vhgrnvif.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163ruynmrke.html

set -euo pipefail
来源：http://www.sxryk.cn/163iuadxewr.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163uxxmrthv.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163hfazqfqv.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163baxoajqm.html

readonly PI=3.14
来源：http://www.sxryk.cn/163viszgdph.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163ucbpaqxx.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163vrpgmmbj.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163dprafliy.html

name="${1:-default}"
来源：http://www.xuanzx.com/163qpslxjbg.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163vogxzawg.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163zrngbgkh.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163arnolvtj.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163pliidxyw.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163ufaenryx.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163ypuanafg.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163ckitycil.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163qwxgqdof.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163sewllkjr.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163hjxnwdor.html

[R11] case 多分支
来源：http://www.sxryk.cn/163llqhggin.html

case "$1" in
来源：http://www.sxryk.cn/163hurvhjwl.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163dmjuhpku.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163hhfzzzts.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163nnmbdzyr.html

esac
来源：http://www.xuanzx.com/163ahppmvua.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163micbawel.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163ehhtdwjm.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163ubblirwm.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163hemspvzq.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163befoffzh.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163cetlqsfx.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163vchezfcf.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163opgffuyd.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163iyvjeqea.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163jofkrjud.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163cjpfmhen.html


<!-- 参考信息 -->