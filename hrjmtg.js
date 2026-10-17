外链999!wailian999！

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163wljurwri.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163ykcpaizt.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163luhpafry.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163hteijlqt.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163monqgzau.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ujqxnamz.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163gyrxgeih.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163bthnfimc.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163pyrrdcbo.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163iukyalbx.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163fhyddbka.html

[P04] 求长度
来源：http://www.xuanzx.com/163imysvvzg.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163yaldxukn.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163lgrliafg.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163mhelbtsy.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163wclbfzes.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163jlqkivfn.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163kpoydinj.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163iriinnmx.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163kxfpiviy.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163dxzwtjrx.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163wfbgnjmt.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163bqixnhro.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163puqakuhc.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ifbvxfsd.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163qipgguxj.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163rhfupera.html

Ruby: a == b
来源：http://www.xuanzx.com/163ensieohd.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163fzvxwzsl.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163gdzqkzdm.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163rejbegyi.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163faqzlgqq.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163emxdlqkh.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163mqsldnny.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163kujercoc.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163vdwpmdmx.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163xfipvvpe.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163fmwsflzb.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163lkarivqw.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163nofiaawo.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163ygfdkggn.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163gurtpetj.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163beuigfyh.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163ialghzmn.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163puobeppe.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163jxcxhkbi.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163bnlvzffy.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163shlicltq.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163mabiyazl.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163dggtppng.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163yrkykwdc.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163aewsqgre.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163ehzoyfod.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163cideiipt.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163eirjcpmp.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163cuthtixf.html

================================================================================
来源：http://www.sxryk.cn/163pspmnlxc.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163cnehjypp.html

================================================================================
来源：http://www.aibaodan.cn/163pjiswkgh.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163uwvmyiyh.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163zaycajly.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163zmhgrqxs.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163emqyynlh.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163ypxzaomh.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163hjhxkxbx.html

);
来源：http://www.xuanzx.com/163ekygdlhv.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163zkervdbg.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163nerebykw.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163xskrbqgl.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163fahkhlkb.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163rocufhmq.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163brbtagwr.html

);
来源：http://www.sxryk.cn/163mogorhko.html

[Q03] 增加列
来源：http://www.sxryk.cn/163oivmqzvp.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163tvylfnir.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163ybdhkuar.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163quitkrre.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163hfliqxdw.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163xkylzlsp.html

[Q06] 删除列
来源：http://www.sxryk.cn/163wqslmxxl.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163mfkexxsz.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163zggkbsck.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163fedlokpc.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163jcyrhsuf.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163fiysdtlc.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163kvrmyzhd.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163ukwiggyt.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163sosgxusa.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163jqxhxhly.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163htzbeysz.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163egtkdjre.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163tgtwlxdf.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163glptbnaq.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163hvdaafxz.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163szkxaaag.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163ebdtvwxh.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163gajwyufe.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163rdppkzyk.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163csfdqnva.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163thojbxrd.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163hhsqmhfu.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163xxbwweql.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163alljizkb.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163icgfismv.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163nisykamc.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163mrhczwds.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163qnvwccve.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163wsevpxxk.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163zezrxgvg.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163kzihngwv.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163ukjhegsd.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163wwgcebbi.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163exiorxim.html

[Q22] 排序
来源：http://www.sxryk.cn/163wfwjzkuz.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163hofeluux.html

[Q23] 分页
来源：http://www.aibaodan.cn/163slsrmqqr.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163uplgsgco.html

[Q24] 去重
来源：http://www.sxryk.cn/163arbfetma.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163ieypadey.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163ezcqursk.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163xmogurzm.html

[Q26] 计数
来源：http://www.aibaodan.cn/163soxmfgpg.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163xtnkhlsp.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163ounldezv.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163ikhrdepg.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163wflipgbw.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163jhlpkhov.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163aauigbyy.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163rvnhippu.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163iefvvxju.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163zwtgywba.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163dkyxkxeg.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163pqyysnji.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163onrmqcff.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163sjhhsqmz.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163vqghvzkq.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163xfdlfrbp.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163omtcdpot.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163epfhyjrm.html

SELECT * FROM (
来源：http://www.xuanzx.com/163ocdxhyif.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163qwhluidu.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163roxguwrm.html

[Q35] 内连接
来源：http://www.xuanzx.com/163zbsjchrf.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163yfwwgysd.html

[Q36] 左连接
来源：http://www.xuanzx.com/163oreaimnl.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163besdmyhu.html

[Q37] 右连接
来源：http://www.xuanzx.com/163typbjmez.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163vhxldilf.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163kvlfaucu.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163cabwayhm.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163xozllmpk.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163mykphjjq.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163qmgkfcrc.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163rnakwahf.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163akwnzsil.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163domoxbfp.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163sksysiry.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163wcporloa.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163uaptawvu.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163yjiafuyq.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163zajsnldn.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163kdxixdwu.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163yozpkxvq.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163qndpmxox.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163okezdmfx.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163tbxsvroc.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163wmdpashe.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163bbfospmf.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163thegzmlx.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163zidtanlk.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163dmshpgkm.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163lkwzdvfs.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163ermuodme.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163fxjrnjcd.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163chaibwou.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163wxsguwcr.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163ywbilsuj.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163onxgshji.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163qxljeqzh.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163xuxiztrl.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163sytqfxqk.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163objmxezy.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163vslobmnf.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163vtlpkiwc.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163kidzacqm.html

[Q54] 清空表
来源：http://www.xuanzx.com/163qiouvufr.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163blxrovri.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163tbhvdunj.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163zivjjiha.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163bxjyabyk.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163nqzspxzd.html

[Q57] 行号
来源：http://www.sxryk.cn/163ogliwkdb.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163taoskyyx.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163zlohsyij.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163zwxooggp.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163wfbxopwy.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163okwcwoca.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163ywaokgln.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163ssbzkqxt.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163dexyikvy.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163ebgapxlt.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163nftgrzlm.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163qpfqgsje.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163tbxeizrf.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163hvkqyggt.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163tgguxfnc.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163wwsrirpl.html

COMMIT;
来源：http://www.aibaodan.cn/163lytspdcg.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163qakqvqbz.html

ROLLBACK;
来源：http://www.sxryk.cn/163sgnbeqlz.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163wpdentfj.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163eekazbyh.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163kxbnhodu.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163vopnbdau.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163cmcolxse.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163mtqxdoes.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163vxttetqx.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163fxgatkcz.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163takoeezn.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163dsymbgwn.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163wizkghns.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163ibqechqc.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163jqhlksdf.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163fhsxcnmb.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163kkeifemk.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163bdpwgecu.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163amrlhgvm.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163bqaoesrd.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163qzvrhejh.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163kughkgmz.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163zfijnhqk.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163mrdwtddv.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163vpxueopm.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163rpvhjrsm.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163wqfnaohm.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163haxdpbom.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163sfcevsej.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163rnjwqezb.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163splwwagz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163pnrnnxmi.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163jmjhcsji.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163lsqpdved.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163cvuyouvc.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163wubsvwpk.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163pqochvch.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163khtgcxrf.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163kmkdwqyx.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163doblrfkn.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163hsgdcckm.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163uzgdxmcr.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163jyibdhhr.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163xchkapmj.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163kyyaauzu.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163duqzprpc.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163pjeouutg.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163sxbppqnj.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163cwlobood.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163ejszgzpw.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163efuhqzzw.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163aspkpziu.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163wvqimpby.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163mnghnebv.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163ospqxidg.html

================================================================================
来源：http://www.sxryk.cn/163ameqpymj.html

R. Bash 专题
来源：http://www.xuanzx.com/163uuspeljt.html

================================================================================
来源：http://www.aibaodan.cn/163rapwsllx.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163bctiutht.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163sahmtzdn.html

set -euo pipefail
来源：http://www.xuanzx.com/163dflliqft.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163stzlwjoq.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163yqoxprdx.html

[R03] 只读变量
来源：http://www.xuanzx.com/163yloqcqjl.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163ibhflgey.html

[R04] 位置参数
来源：http://www.xuanzx.com/163pbkyiguj.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163fvntpkpg.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163wjmrxmfb.html

name="${1:-default}"
来源：http://www.sxryk.cn/163grakbruo.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163icrtkuop.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163ucmvveyp.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163iracwewt.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163dsggfhcx.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163qlpxstpi.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163wuueqlvl.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163pspfluhi.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163exzyizpu.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163pzqrpvyi.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163hlieyrzx.html

[R11] case 多分支
来源：http://www.xuanzx.com/163wlbikobb.html

case "$1" in
来源：http://www.aibaodan.cn/163seagtzuy.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163scsxrahb.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163trqcykcp.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163hjeluyfr.html

esac
来源：http://www.xuanzx.com/163noksfexs.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163oqyvthhd.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163juhbxked.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163bmyiecju.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163kwdojsxa.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163cvzkcalv.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163ylzgptxs.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163iuvtvvcg.html


<!-- 参考信息 -->