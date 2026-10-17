外链999!wailian999！

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163cnvblmai.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163mgqhuluq.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163wdkwmbti.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163qmokkshx.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163bdmfgnqn.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163wqnaszqt.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163lcwjpszi.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163ctlpduxc.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163lkixntyz.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163panchwit.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163jfvwenvh.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163dvfmhfqq.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163eevtvadp.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163dayokanh.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ncthfxoy.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163llhaujmg.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163agkqxybf.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163hikmcqtr.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163qfqgmzaf.html

[P04] 求长度
来源：http://www.aibaodan.cn/163beycrmef.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163bczvzxbn.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163fuzjbjcg.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163sdjxfgfw.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163tbadnboq.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163hlphfuch.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163mxvfbtft.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163kavwfwtr.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163dlbctszt.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163zfskxzkq.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163yglmvvrt.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163oysbmveq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163dszwxbzo.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163rivnstey.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163rkhljjka.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163xygqulbl.html

Ruby: a == b
来源：http://www.sxryk.cn/163ikptlfdq.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163qjybyixw.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163ekuppibb.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163cvkxsvkz.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163oibhdmto.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163jucsxfid.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163svxiaoeu.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163gkofrtns.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163cwuwchae.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163yjdswkce.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163ybytlson.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163zguitdgc.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163voidsifz.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163nnnotajw.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163iuhknamt.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ksfthoij.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163fpcafdbn.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163rktkvxgw.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163orwsfwsh.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163hdeyljdh.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163urtxfioz.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163kblradgz.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163pjvgrhlu.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163worqersf.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163phdewics.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163yeqoxats.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163aksmrslf.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163jqgefdvg.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163atpokrkq.html

================================================================================
来源：http://www.aibaodan.cn/163svclyfrp.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163hwkmbjir.html

================================================================================
来源：http://www.xuanzx.com/163xxlfodyr.html

[Q01] 创建表
来源：http://www.sxryk.cn/163saqqtoet.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163rtdstzhb.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163zyvszbhu.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163irkyzyfb.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163jhsucsgx.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163tckoyzph.html

);
来源：http://www.aibaodan.cn/163beppasyq.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163dxnhator.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163stkvifkf.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163uwqdhcqc.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163bwcsgtbx.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163hqnhbiib.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163sjiyyqxy.html

);
来源：http://www.aibaodan.cn/163ysstzmqr.html

[Q03] 增加列
来源：http://www.sxryk.cn/163niprajzg.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163tugmmemj.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163rmmivijy.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163otaybfry.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163ddxvmwsc.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163pugebfwl.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163rjmgcuzc.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163rcublbvt.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163hcqfkalg.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163bmvkpgtp.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163ewrqjpcb.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163chngcybp.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163tjwhuefi.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163pxbsrvwy.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163umfeelox.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163pkjumszd.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163byueqcuu.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163jhnyrozb.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163nwowduld.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163gitigrdf.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163shezxxzk.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163glxvqoqg.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163awyubzcc.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163xzghdgaj.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163wnmunqsf.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163cwnfzoaq.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163bssuaetb.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163spnallqe.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163lqsynqwc.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163gkclirms.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163hofzygpu.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163azqtxuow.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163cnqixecc.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163hzivznwh.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163uavuizdq.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163bvnpkrag.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163qkvtkpes.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163mbyvhamc.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163deetnpge.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163qtaepksu.html

[Q22] 排序
来源：http://www.aibaodan.cn/163qdqyhpal.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163olifctii.html

[Q23] 分页
来源：http://www.xuanzx.com/163xhsujxkb.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163xudbewyj.html

[Q24] 去重
来源：http://www.aibaodan.cn/163favxfmwe.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163uoqvrilv.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163citvvghk.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163vykbyqah.html

[Q26] 计数
来源：http://www.sxryk.cn/163sjmidnqn.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163yybdoiec.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163qxggiroi.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163rfewcwpq.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163zwntiiig.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163bwadvtsf.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163appmwohn.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163wxwlkzfl.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163numhuvry.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163smoqieyd.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163sdrvfwoj.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163pltanqsv.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163tvrkbrly.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163brgmkylg.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163mipnisif.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163jybzrkev.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163aojjbkmg.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163jyzngatx.html

SELECT * FROM (
来源：http://www.xuanzx.com/163hvauuvfy.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163ucjkqmlr.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163umwonyom.html

[Q35] 内连接
来源：http://www.sxryk.cn/163qobbrsub.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163jjfvygdp.html

[Q36] 左连接
来源：http://www.xuanzx.com/163nenedzhd.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163omglclho.html

[Q37] 右连接
来源：http://www.sxryk.cn/163zdmdrmzj.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163jkaekvrc.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163ahlgnfag.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163mwfittzw.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163jwidsxue.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163xvmqfyww.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163wmkjrqcr.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163mrrlciwv.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163etmikskl.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163xekmbwtc.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163eqhskhmn.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163snnfchmq.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163uhgpbcju.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163cbovzsyt.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163wlydohwt.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163nagbrwir.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163fxakmffe.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163srsfxuuw.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163wkbyoifz.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163devivdho.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163sqomemyh.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163dfgkcslu.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163sbxmiyfl.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163zyxwpwit.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163pheygrwq.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163cedbewts.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163jodxictx.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163covushkb.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163poogwnaj.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163zafcuoji.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163eugsxtqa.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163wvffsgci.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163wyalwfre.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163jtgldnlb.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163jfmedazy.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163uwxhavba.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163vwlyvgzs.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163plbqaqhz.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163jwkpizvp.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163iktvafmj.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163vpsvraqv.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163mjmchoxh.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163gwthbxzj.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163qjfsljnu.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163ezgzyclt.html

[Q57] 行号
来源：http://www.xuanzx.com/163hoamanxh.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163rekwwqyw.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163uxhevilg.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163wpbkriku.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163kwqwqpug.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163eszhrqhr.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163cgxuaaqq.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163symvasoy.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163twrhaoqm.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163dqqhywve.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163bwnuektb.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163ogbbedyu.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163cjvikwfc.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163aodezkmi.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163skvabdcg.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163fcyautmj.html

COMMIT;
来源：http://www.aibaodan.cn/163lqinplbw.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163gxopppvy.html

ROLLBACK;
来源：http://www.xuanzx.com/163iajjkyks.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163xspunaoj.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163bsrfcqsv.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163ximilntz.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163ldhcthrh.html

[Q68] 保存点
来源：http://www.xuanzx.com/163pskqsegx.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163ulxymllt.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163kxitpbwz.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163likrtwfq.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163fcqyhdpy.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163zcbtekne.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163lhcvwuro.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163dvmtoclw.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163xeygohxf.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163uvnxspsi.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163rvbcjtcw.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163csimzfyf.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163rfzkkvlx.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163vdbeycrc.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163jwsacnti.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163lhwebjdo.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163zhwcrnho.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163dndmnxce.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163fhrfrqzj.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163dtoullsz.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163hgfzvgdp.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163cjzziyyr.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163zlmmbpwy.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163ylyofjai.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163cvcqghfw.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163vdunqdwi.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163todyiglk.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163atovnasp.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163hupeckuf.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163ewenptxl.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163ttsxbggh.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163rphbbhcc.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163mqvwsgyd.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163zjmihakd.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163akynksmx.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163hdgefcog.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163vgrzbyzv.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163eptsqstf.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163fvgdboxr.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163hpmymfug.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163hiwuxtea.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163uanutbmh.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163tsbpnnqp.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163tbqqrljz.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163vwnymfme.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163kzaaxopb.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163pccivqqr.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163zjbztrby.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163qwgxqfoz.html

================================================================================
来源：http://www.aibaodan.cn/163wqnwvrkj.html

R. Bash 专题
来源：http://www.sxryk.cn/163scnlcehp.html

================================================================================
来源：http://www.sxryk.cn/163vtmczhqb.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163vxubqpyu.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163vooksqxm.html

set -euo pipefail
来源：http://www.sxryk.cn/163rxyxtgxt.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163wytkyzwe.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163mlrbsfnn.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163tkcflral.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163ftdhtmit.html

[R04] 位置参数
来源：http://www.xuanzx.com/163bdgmpabl.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163lgdjcyze.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163qgbhkzrs.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163jltyfqhc.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163lhcaiqyp.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163xlkgwsya.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163wpdpdkhw.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163uxtpquqm.html

[R08] 数值比较
来源：http://www.sxryk.cn/163kisfwxbh.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163otwjfbhn.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163dsehjkgk.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163uwefhqsf.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163mzswehpe.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163zodtvpit.html

[R11] case 多分支
来源：http://www.sxryk.cn/163etpunzst.html

case "$1" in
来源：http://www.aibaodan.cn/163fpslspmx.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163zsprcoim.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163qoqbywvv.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163crhvlywq.html


<!-- 参考信息 -->