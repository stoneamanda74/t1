外链999!wailian999！

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163dukjvxbk.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163yltafqwx.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163jiwozzou.html

[P04] 求长度
来源：http://www.xuanzx.com/163hrdzfuwt.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163ltihhjgg.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163gfwpnfru.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163fequjhas.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163iajsrilw.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163zcjyrntr.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163zwwhkbzp.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163wxkdqiin.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163qepuvkqe.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163jwdzeexb.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163aqbenajv.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163ahrytzvw.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163frntlnlm.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ejgwjqhz.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163ryoqntmu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163yteuqqrd.html

Ruby: a == b
来源：http://www.xuanzx.com/163vxbvcasm.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163jrmaeatn.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163pqysohrq.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163jhxlgfib.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163phyjreah.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163nbkjbkoy.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163akcovodn.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163gxmhucmv.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163wklfoqmf.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163mazzxxub.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163goeypobp.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163thljotib.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163ndnlrdpj.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163okrlbofj.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163gzvrgofa.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163riumfonr.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163cuovwbpd.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163zblygfhc.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163qrjrvsgi.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163ccrrsayw.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163mcsdyffm.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163wygnkavi.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163bmzzwnys.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163nktlayux.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163ikjfgljw.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163rydnyyak.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163fwyhxyew.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163jfsrxmia.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163mndyiwae.html

================================================================================
来源：http://www.xuanzx.com/163kpackurx.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163hnkwrpag.html

================================================================================
来源：http://www.sxryk.cn/163wyuflbzf.html

[Q01] 创建表
来源：http://www.sxryk.cn/163elkdhgfi.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163hqxzzytc.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163mjfuoeve.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ltefowig.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163whgvgxum.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163pqhfqjlj.html

);
来源：http://www.sxryk.cn/163lxmobrei.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163sqmrmwzt.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163ecgvkong.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163rmjcsebl.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163ebjzufzg.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163zbkbdobm.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163fcuygvha.html

);
来源：http://www.xuanzx.com/163qelbaqae.html

[Q03] 增加列
来源：http://www.xuanzx.com/163umgsvdvq.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163thfvsfnd.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163mpsjgoac.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163zmentvfq.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163bkrylyub.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163iyxzdvyi.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163aidmgfuu.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163pbgfjyjf.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163frssoqrv.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163fwlkmzfs.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163fedzgukp.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163dmlyefep.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163posddpla.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163itgxglio.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163hbempaln.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163qqrzndjd.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163vhqehohy.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163llrmyhyb.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163etphoupb.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163jfjjaggx.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163rpcrxtaj.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163lavbiayk.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163lusswegd.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163hdyvtndz.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163tjvfmkue.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163ycdqyedr.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163avsaynkg.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163hdquorcq.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163wpfgsgnm.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163riosdoik.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163lmvnehhq.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163ouofsaxi.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163dipxcfdy.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163gqxszkkg.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163rzvcvtri.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163kppqitqa.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163cetoqtvc.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163ioqvaygh.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163auoqxveh.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163fwgdphwp.html

[Q22] 排序
来源：http://www.xuanzx.com/163mlylxoqw.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163kkbxaekd.html

[Q23] 分页
来源：http://www.sxryk.cn/163hscactdn.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163zanswzua.html

[Q24] 去重
来源：http://www.sxryk.cn/163khwrpfbh.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163iqxsikll.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163ztwyvrfq.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163msoagqth.html

[Q26] 计数
来源：http://www.xuanzx.com/163watkpgkk.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163twhbdwvm.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163tqfozmmp.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163edvxvquz.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163ilkzhuck.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163vwouahov.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163tloirodz.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163jgaglcdz.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163rcmtblhl.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163gikiahvv.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163typhzcor.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163podbpkgr.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163smulcnel.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163rmkislek.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163ctmvotcs.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163zfwzrwxn.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163sammalkh.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163inkozivd.html

SELECT * FROM (
来源：http://www.xuanzx.com/163hpnpefui.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163apceivxp.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163qwgtvkzm.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163ejcpitht.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163jfzqwaif.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163dlbbtvof.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163monbbrzf.html

[Q37] 右连接
来源：http://www.sxryk.cn/163eyowcvuh.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163reokedsv.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163ebzuvfii.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163wqfhvghr.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163azbahcah.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163xvzuhxsj.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163ncpzzxdv.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163pbzszdgr.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163uhqogcyd.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163lkdtboid.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163sxrmjyqb.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163xkzbnaoa.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163ddrnktcn.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163vcpzannt.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163sqpspfwb.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163jgzsgxwj.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163jvrssyfj.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163rbahvfdb.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163lbodsich.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163eoonvaqs.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163wfvanwkr.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ajqmroim.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163fpsqxjru.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163lmyitkra.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163qveszskw.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163icvehhuu.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163axyfredw.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163thrhxnbc.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163tkgadtmo.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163dfystbnl.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163jvtbyovj.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163lytkqjbg.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163joxuekpy.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163kuheyfhb.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163hczuwynd.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163yxnlzvge.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163ieyunfzk.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163hsdfyizh.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163yaqqknoq.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163ttunzfyj.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163momiedcv.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163ykzrwwqn.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163mxtwjkjg.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163zstqdrqz.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163bppkpzvj.html

[Q57] 行号
来源：http://www.sxryk.cn/163quyeonqr.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163piahyzpo.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163olpmgonq.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163kyinlfhq.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163nkozouge.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163zhohvias.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163nheloxmz.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163dyewshgs.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163okdbscvh.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163opoxpora.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163kstlbhwm.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163fghwagwb.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163nieblzwc.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163dvshenmb.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163hcrsknap.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163jxtfvyqw.html

COMMIT;
来源：http://www.sxryk.cn/163xnfqdqlg.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163fpasutck.html

ROLLBACK;
来源：http://www.aibaodan.cn/163jfczdvkt.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163vohkrunv.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163jodkeqrx.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163uhfatuin.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163pvbmiqjo.html

[Q68] 保存点
来源：http://www.sxryk.cn/163kjhyuguc.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163ynwafmbp.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163hduhyteq.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163ssworhzq.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163ybqnxfhf.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163molqassl.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163lssidlze.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163snjgyqle.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163fdtdyxaj.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163icvccltz.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163qknctneg.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163qkigrzck.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163humqsqnw.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163qepmqipu.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163xraxbzdj.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163xwcgumqr.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163ujlzkuzg.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163jjnqomgx.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163emymtjts.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163dfrzljfo.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163ztznsonz.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163cqfnboni.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163wuxvsdky.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163lpaifqay.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163barpltpq.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163zolhpsqd.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163qullzuys.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163ckyclywt.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163qchymfii.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163eyciufvj.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163fuyurdfi.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163elzcuroc.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163ovrzhmgf.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163eqbifqkw.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163tbquzvab.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163ythsvriu.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163dbxljdrb.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163qlflvxas.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163ahrjljbv.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163izzauhvd.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163mnrdpgpo.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163plimlvva.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163nrahyned.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163yhskqvyn.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163ipqhfuwz.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163ccvyippv.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163teaakgus.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163fadavdww.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163rvidjcui.html

================================================================================
来源：http://www.aibaodan.cn/163akslcaux.html

R. Bash 专题
来源：http://www.aibaodan.cn/163bkyykuzy.html

================================================================================
来源：http://www.xuanzx.com/163rmbgoyph.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163hcmjtzbr.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163ftljlkur.html

set -euo pipefail
来源：http://www.aibaodan.cn/163pdfzzmcx.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163kislrpln.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163zuvnwugy.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163osdjpzfq.html

readonly PI=3.14
来源：http://www.xuanzx.com/163cacozkjh.html

[R04] 位置参数
来源：http://www.xuanzx.com/163jsdtswhb.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163eqnunzno.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163fuuabqgv.html

name="${1:-default}"
来源：http://www.sxryk.cn/163thhaixvb.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163fyxlmaox.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163manebgex.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163crfnuiyf.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163zqzhnsgk.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163hhqnmanb.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163lwilctkj.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163snwchzfr.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163cpwbfukv.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163nlchxdfw.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163vsuoeumf.html

[R11] case 多分支
来源：http://www.xuanzx.com/163skigaapf.html

case "$1" in
来源：http://www.aibaodan.cn/163mhfiuzow.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163bolpwhza.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163raytwphp.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163pdpryvum.html

esac
来源：http://www.aibaodan.cn/163vxbmofyy.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163ywmpcmvb.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163uwpvfbbt.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163sjqfoemc.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163hconrvlv.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163wmyfugpv.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163fnfegokh.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163bvkmykft.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163kstrolnp.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163mxgejknf.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163wwndycvx.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163vjvyjcri.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163lxlrvhbs.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163ykxezlif.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163pfdweqoh.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163eqmzpsdv.html


<!-- 参考信息 -->