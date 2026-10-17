外链999!wailian999！

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163ykvlshvr.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163kplupemk.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163xppphrqr.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163moflumbe.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163aipxriaj.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163beonijid.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163bhmvcsxq.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163agdhfstu.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163gryyajkd.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163xdfzdpaz.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163qbllbqwg.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163tkoeqtkt.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163xybujtlu.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163wqnirqjg.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163auzzwrbl.html

[P04] 求长度
来源：http://www.aibaodan.cn/163kldmomfg.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163egakcigf.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163dgzgmxkn.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163kovcihjo.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163gwndiegh.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163bsylqtvs.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163ngroqcwn.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163mctlyvqc.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163nrlzpzgv.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163ezyxpxvi.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163jawvihwe.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163yprpceki.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163dwmofgot.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163hppahhpd.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163owrxedsu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163snmksick.html

Ruby: a == b
来源：http://www.sxryk.cn/163uffkrbco.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163iwwvdwvb.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163samqyfsg.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163yhiekcce.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163qbrowiic.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163wcderppi.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163mwaacrqt.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163zoortjqd.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163hmsngxhj.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163tlircpwa.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163ppmghxil.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163ymlcyoqs.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163koxtccdx.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163txfjuict.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163tcwlnnit.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163bbilhsmq.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163jekrlutt.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163vxchldtc.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163owetzeoh.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163vhkozxwn.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163qnjuogly.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163inuznuec.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163mrmenrud.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163weupevgg.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163bcyxiyno.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163lgiyxxaz.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163isjrwprp.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163qdiddmhp.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163dpyambyu.html

================================================================================
来源：http://www.aibaodan.cn/163ypxjzlbg.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163wsqdxulq.html

================================================================================
来源：http://www.xuanzx.com/163brjjamln.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163pvewvbmr.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163gcnagkfp.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163zvnjzbyt.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163zjbkogao.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163fyptrywk.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163vprzakvb.html

);
来源：http://www.aibaodan.cn/163zijkrtxh.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163vicopliw.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163vilzdeft.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163pcvtwvlf.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163svzrwyvt.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163ycnpvkmg.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163fayydxao.html

);
来源：http://www.xuanzx.com/163zmmtxwla.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163wyswhvak.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163oruamjwb.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163jjcvsfqu.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163ixydttzc.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163edsqezgy.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163fgthgtey.html

[Q06] 删除列
来源：http://www.xuanzx.com/163zunktxpn.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163yyryqnot.html

[Q07] 删除表
来源：http://www.sxryk.cn/163hiocqjjb.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163zrjsbqod.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163mtwitbkk.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163hzfmashy.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163imilretp.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163cjcwlary.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163wcyszuik.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163clivijom.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163wivamwpj.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163eauxccea.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163lmeoqexq.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163budflbec.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163uztroklq.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163iiywmpeb.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163ofcyylzk.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163ksxxlwaq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163bpbqzqhx.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163kipvwhgc.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163gkejouiw.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163kcrafxjv.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163xfdmqrep.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163bcebkbnf.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163gnkqhjia.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163gcwsqbdw.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163slnllocx.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163vnwssnaj.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163vpmfposs.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163grzsblhx.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163lkdmptro.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163izytuswg.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163qkhfdbie.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163qjirwvzr.html

[Q22] 排序
来源：http://www.xuanzx.com/163osqbxkip.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163auxabonu.html

[Q23] 分页
来源：http://www.sxryk.cn/163qyvorzar.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163tcwfohkb.html

[Q24] 去重
来源：http://www.xuanzx.com/163wvhcelkp.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163lrcstlii.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163pombkwee.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163secixjrb.html

[Q26] 计数
来源：http://www.xuanzx.com/163qgixivzs.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163gyfeswss.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163yhemywrd.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163yhksgefs.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163vdtzbpzz.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163ohzcoxtm.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163rdvmyesv.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163llxdmido.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163fxbmnncn.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163rjlpboro.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163axipsqzl.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163nwmiohvq.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163ltnzjyss.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163jxfjnisa.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163doaaunbn.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163wechrrxq.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163rlqpeead.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163gjhqmqbw.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163pojhgzde.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163macueqjr.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163fnepflsk.html

[Q35] 内连接
来源：http://www.sxryk.cn/163pjkqulqu.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163scvtywra.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163vfmlddqt.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163tdbrlgcf.html

[Q37] 右连接
来源：http://www.sxryk.cn/163sgcxrqmj.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163qpmgmvzy.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163csyrbvwv.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163zmrmlvom.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163ltbgbmou.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163dsldkgya.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163ivevxncz.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163pyqiiioq.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163yowkzpyn.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163ppikuoib.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163fnwwuoev.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163xzowbjic.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163vnaezoru.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163gpciffpk.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163ffmunqht.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163omvivfbo.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163qsanxvue.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163jthogtzn.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163nqsokqsb.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163jyzgtaju.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163rlnuljkp.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163djbjdaak.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163uzfogvhb.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163afeirhnd.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163zbkxnuvc.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163yllyzlcw.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163phknrnpm.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163fuhxprlz.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163rneexcog.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163zsbobspr.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163rjxumziz.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163dkkdnuvf.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163wvrkpiux.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163pzevqvip.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163eurhjuzy.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163llkydpaq.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163keumbvca.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163lxqhcvgx.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163wsmgpytz.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163mmaagghk.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163jtlvlndm.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163pdlbxias.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163dinpehfv.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163lhenpvko.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163qjohkxws.html

[Q57] 行号
来源：http://www.aibaodan.cn/163pnjsqofr.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163cvctrstm.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163wxuluhfs.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163mwkkljaz.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163fijamyqn.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163uwqimsnw.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163awkyywba.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163fqxixvog.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163filekkqr.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163qcrhrgvs.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163nzezwkbn.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163durtbhjt.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ecbxojdg.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163oikrnjzz.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163rqaabwpn.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163zquluehw.html

COMMIT;
来源：http://www.aibaodan.cn/163hbkjjcgd.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163lwsvrbov.html

ROLLBACK;
来源：http://www.sxryk.cn/163cwdomdqs.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163ziozblvg.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163xvqiuvfw.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163ejhhzljr.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163mpxnddjz.html

[Q68] 保存点
来源：http://www.sxryk.cn/163afybhrxm.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163itiuqstn.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163cdncrxjt.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163udjzgeww.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163jkvideqn.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163yrqasuqu.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163yjzssudp.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163nhnvkldf.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163gtldssvu.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163kinuvstp.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163xjrbwouf.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163mivomgms.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163zutqsgbs.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163eytxtsjg.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163nwzqphyp.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163ddskqrci.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163kycpmycj.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163fgmncyhv.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163jjkkkomb.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163paxmnvfo.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163gqvlvpsk.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163bcyeyagk.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163jcxtsqrf.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163gvjpjfih.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163xsboxhyt.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163fmexmkun.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163jhzotmub.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163kzrecpbw.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163rzigoker.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163tzrowcpi.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163nudwoisp.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163icwwixpp.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163hjacynqj.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163wgtompxl.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163uyzochvv.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163irepzwaa.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163oqtulobo.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163gvuacuvu.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163choppwre.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163omuidtud.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163zvceaifm.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163ymggzqwc.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163bampatvu.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163tktycamz.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163hstqcljg.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163qtchuove.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163vsynjvru.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163qqmaffyd.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163idywdfzw.html

================================================================================
来源：http://www.sxryk.cn/163dmmqqlig.html

R. Bash 专题
来源：http://www.sxryk.cn/163axuwlqaf.html

================================================================================
来源：http://www.xuanzx.com/163bxpujyuu.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163voehdlzw.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163hcoqgvnr.html

set -euo pipefail
来源：http://www.xuanzx.com/163vsxlhfkq.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163binlpltc.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163rcrcgpdi.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163rspbuldn.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163ozquwqhx.html

[R04] 位置参数
来源：http://www.sxryk.cn/163xtfwqdbt.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163bobzcfxf.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163mhioyqyu.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163fkgigzux.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163wavrldgz.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163kllmprcu.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163ckmgtykz.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163jqmkaikq.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163bjgsxynd.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163rqyvcevl.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163wlqooctg.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163vbjgwvfs.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163ytzmkyva.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163sggjdaue.html

[R11] case 多分支
来源：http://www.sxryk.cn/163znkvgjcw.html

case "$1" in
来源：http://www.xuanzx.com/163rwdnpuhp.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163trzqcgdq.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163rlcovxwa.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163fvikmkrk.html

esac
来源：http://www.aibaodan.cn/163lzqhcdzx.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163qnoqsxhb.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163tsgsieio.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163iejeyyzp.html


<!-- 参考信息 -->