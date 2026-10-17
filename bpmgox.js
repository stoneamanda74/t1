外链999!wailian999！

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163thyszgsg.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163efawcqca.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163ggnfnjja.html

[P04] 求长度
来源：http://www.aibaodan.cn/163molisknx.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163prampdbt.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163bzafqqqr.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163hpkmfums.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163yuurakhu.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163bmhrlzzp.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163bidizrpa.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163pshllpwo.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163mqtvmhcw.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163qblrjcng.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163ugsvnuda.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163gzkauhbs.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163jaeqllfd.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163kznstbty.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163bhirvvlb.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163oubszfqy.html

Ruby: a == b
来源：http://www.sxryk.cn/163niwoggfx.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163alkvwbzd.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163klqvhcih.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163cbwvfour.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163fmdgyfvz.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163kythqmgg.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163ibobvsum.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163vlrhfjpt.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163tvvljcyr.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163vjgxcbxg.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163axlwkkzf.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163eapgzisl.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163ysgjlqsh.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163cllaokqt.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163zvwzwvld.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163kuoppoie.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163cjbtwvpo.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163fibduqup.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163bwdaxwyl.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163wavgprfw.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163zghsygkc.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163nhguxpof.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163zpxlgoko.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163qpttkyav.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163mnaxuloj.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163laneeism.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163aefcpwqa.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163cgelzbva.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163kvgznmwl.html

================================================================================
来源：http://www.sxryk.cn/163enszjlyp.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163ecghypik.html

================================================================================
来源：http://www.sxryk.cn/163cpuqqunm.html

[Q01] 创建表
来源：http://www.sxryk.cn/163esdtoszi.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163yzapzews.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163qapbiazt.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163eujifbuh.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163hrumyffx.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163ypjpadcf.html

);
来源：http://www.sxryk.cn/163fkizcnin.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163muscgjcd.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163jpywxpzg.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163qncztrgk.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163jxidgzry.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163kjcuuvzl.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163ombkrgkb.html

);
来源：http://www.xuanzx.com/163alohucns.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163gzxhnady.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163znwtvugl.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163rigjprsy.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163jnxpueze.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163isvvuaol.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163brfqivhl.html

[Q06] 删除列
来源：http://www.sxryk.cn/163cdfkjwyp.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163eamgnifq.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163snbwfozl.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163vuvzvdwt.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163izyjijwq.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163lmdiosdz.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163dqtizexb.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163zingfqzn.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163cgshfczm.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163hofgoedt.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163xotsujcv.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163acyhofzc.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163ftqpsenp.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163ykmmvaji.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163ilbdwwdg.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163tmagpjwv.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163expkehvw.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163ytgevlsr.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163ikvhdars.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163frjotojr.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163nnnlppqz.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163yinmqtrb.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163pqlqmtap.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163evlhtqkh.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163zliuzdfj.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163njmqhgiu.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163mdnwhqxq.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163schpyhon.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163plqbkxyd.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163tlvntdtg.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163jkzpjxbx.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163ebzgmrpu.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163njcmympl.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163phdicpxi.html

[Q22] 排序
来源：http://www.aibaodan.cn/163bcepdeiy.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163lflvvuri.html

[Q23] 分页
来源：http://www.xuanzx.com/163rnpibdms.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163tutgyaxo.html

[Q24] 去重
来源：http://www.aibaodan.cn/163uezycegi.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163kvrjvpmb.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163xjfevuzf.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163txkusljt.html

[Q26] 计数
来源：http://www.xuanzx.com/163fmuhtvrz.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163htjsjwus.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163wffqobqp.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163fvzzhxze.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163gdtrsnms.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163xekjuhxz.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163tkzjtjld.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163royyvoih.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163wbdyjxaw.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ygnhythk.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163pokndxix.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163kjowfake.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163xmjlzqvz.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163fnqvlytq.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163exxpxzra.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163ztmuizsl.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163xdtqdmhm.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163zlyhfcpo.html

SELECT * FROM (
来源：http://www.sxryk.cn/163oqjqfgbn.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163cfntjosz.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163hguamktr.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163coxvvoax.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163demizetl.html

[Q36] 左连接
来源：http://www.sxryk.cn/163fgbpsdvo.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163xmojmzrt.html

[Q37] 右连接
来源：http://www.xuanzx.com/163tyiddtgz.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163fcjibeuv.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163cokcjoaq.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163cemwwcch.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163kwfpjduu.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163vvkanbbb.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163hxlwxtjh.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163fvqknlvs.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163ljhhrqlq.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163aybewpgq.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163bldlizgw.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163yobjecyr.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163hklglgys.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163mrcqexss.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163ttgrafsn.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163iwgkiqzt.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163yomfgdle.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163uqvdrail.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163fsivkmvx.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163ijcbeffc.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163evekjldt.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163powqzseg.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163wtixlnbj.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163suzuxkew.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163oyqazlyu.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163ufndlyvo.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163wztpypvx.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163vojfqlrk.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163noabdvlt.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163vsqedlae.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163uzmqwqhi.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163vusyktub.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163dshpkhfl.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163fxswirgc.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163gwmdnvdg.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163jgmuizuz.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163hxdpflft.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163brznqtip.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163stgufzkz.html

[Q54] 清空表
来源：http://www.sxryk.cn/163uwjmxcpl.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163qjrbjosa.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163gzhcndpb.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163sjxewyhe.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163puiibdyk.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163djwanaue.html

[Q57] 行号
来源：http://www.sxryk.cn/163okovpdfh.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163rppwkmst.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163nvurtryd.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163osqrumhw.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163levwuwds.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163eefhjjis.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163tkzwnflh.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163vlfyowsk.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163wogtecpv.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163pebsoiwx.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163ollbxkbl.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163ogvewvck.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163kdwhydcf.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163rprykpln.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163qmqzvvjr.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163kwdbgtkc.html

COMMIT;
来源：http://www.aibaodan.cn/163qrwqhxhy.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163vqeqpuch.html

ROLLBACK;
来源：http://www.xuanzx.com/163pidfeiwr.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163jchmuhwl.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163wmlvebby.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163zshezghy.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163hnqijdzs.html

[Q68] 保存点
来源：http://www.xuanzx.com/163vqucjmxs.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163uikggblk.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163tpafcwym.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163yygyybab.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163cwddaydj.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163hantghpp.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163oszmyper.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163qwcdhbuv.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163hzuzxiwx.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163frgqhioy.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163gibkcgja.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163nzqxtnjd.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163bbtzfjnc.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163hshasvjv.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163ktyxivlp.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163gnrwuxhc.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163rphwhird.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163iwvuadbr.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163sqokwjlx.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163diyzsbbp.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163yokuwaya.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163qrqhrurh.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163tfcruhaj.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163mufhmrxi.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163efnkjrdp.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163euzhqczn.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163ldlqvbar.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163qfhovqjh.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163xqwedtcc.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163itgggerc.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163uzxyggns.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163hprbaeed.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163vrltgtue.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163mqhcjzrq.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163ctwsytbn.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163nousvaqu.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163tqcecdyb.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163yndxlerz.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163ueczceue.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163pypxyshb.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163nvsmxlkj.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163ipsszfsd.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163qfqamzma.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163viqgmaqb.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163wgdqehlu.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163aiggvgcv.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163fjtnrqyd.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163ujwfzzbj.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163jocseddc.html

================================================================================
来源：http://www.aibaodan.cn/163aikdxybg.html

R. Bash 专题
来源：http://www.xuanzx.com/163ixeuccan.html

================================================================================
来源：http://www.sxryk.cn/163etagpkyw.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163bebpadii.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163boapqjpw.html

set -euo pipefail
来源：http://www.xuanzx.com/163oynczoks.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163lakbzgag.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163vrkwhloe.html

[R03] 只读变量
来源：http://www.sxryk.cn/163hkkkdgcn.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163mkzirslf.html

[R04] 位置参数
来源：http://www.sxryk.cn/163crzmgada.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163qaeijpkj.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163cvidzpqf.html

name="${1:-default}"
来源：http://www.xuanzx.com/163cbrpcgxd.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163umlesowq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163icibzhxl.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163ecnhumvr.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163seeuxbpx.html

[R08] 数值比较
来源：http://www.xuanzx.com/163flflalzn.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163nvovjnqa.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163tlffojsu.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163tgyotjxa.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163wudsozcs.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163ssacoepz.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163jhpdfaas.html

case "$1" in
来源：http://www.sxryk.cn/163mzapqvbf.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163fzzfxcxa.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163pqraefde.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163gbpanoyf.html

esac
来源：http://www.sxryk.cn/163olngkbzq.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163qvbykipn.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163hgkxjohq.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163luhqpnfk.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163vvebqkhe.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163cfchlybf.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163dxrxkxju.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163irlaighg.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163surszxuu.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163tbhglmkz.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163rsznzatx.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163qfcsoxdh.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163nmbndkrh.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163whtkozom.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163longfnnv.html

[R19] 数组长度
来源：http://www.sxryk.cn/163nmreijpf.html


<!-- 参考信息 -->