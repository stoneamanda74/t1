外链999!wailian999！

[P01] 生成 UUID
来源：http://www.sxryk.cn/163uvvnggxa.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163kvljiwdx.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163fjpozyna.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ylzeuthw.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163oysunzyn.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163quufseop.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163mumbodgy.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163dpcikprx.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163ixmtctye.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163qcmdtrde.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163sdgdkyuv.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163tjnawwcm.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163ocwnfobf.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163ddnimgmg.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163xxgvxxep.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163nsuuzqnh.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163txdadrey.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163ponvyjdu.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163oarkyhmn.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163ayndzsgb.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163cbsmtbax.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163bczewgcl.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163yrdvcckp.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163qclifrhg.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163gnzpwizx.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163nhcpzeck.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163ektreujo.html

[P04] 求长度
来源：http://www.aibaodan.cn/163usuepobd.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163ihdhhept.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163dvprzgjf.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ygignmac.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163klyytvqg.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163snjswvuq.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163hylpkayk.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163ihgtuvyi.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163cekxjzpr.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163jrnglubo.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163kfculmyp.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163qzrbbjot.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163ulvwlsxh.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163rixnpxpg.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163npwndanv.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163iymjbyle.html

Ruby: a == b
来源：http://www.sxryk.cn/163wzwdjblo.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163vvymfbuz.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163njxoopme.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163nymjuwng.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163iuysqzxy.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163apohmogh.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163hxfnwsco.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163hpxcxkeu.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163eaaugsul.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163xaprxlix.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163gkzdxwcx.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163lqjepkke.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163lkukzxci.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163fjuiboaj.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ooeoizkt.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163iuerljjw.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163ihuevnwc.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163ajnlygze.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163sqocurbd.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163jrcilrle.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163isreybxb.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163eigboesb.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163zfbeybna.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163gyidtspj.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163dudpnfwo.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163ywfxhatg.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163uxtvglee.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163feamgfua.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163bbvczmrd.html

================================================================================
来源：http://www.xuanzx.com/163wuotcyie.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163dlushdlg.html

================================================================================
来源：http://www.xuanzx.com/163wujegyey.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163tmjwpzqe.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163rzlhvmax.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163hihpkuzc.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163vmtvctvi.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163uutmeepz.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163kajotafm.html

);
来源：http://www.sxryk.cn/163apsqhsqo.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163bucwpzum.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163wdddmzma.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163evkxycts.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163wsthxvfe.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163maogtspd.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163xevicrlx.html

);
来源：http://www.sxryk.cn/163jemrpxkf.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163mbgdwend.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163tvkpnwmn.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163epyvvzft.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163xwycalmn.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163knshhkpg.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163dgpunqzh.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163uorbyhky.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163uhqtuhgc.html

[Q07] 删除表
来源：http://www.sxryk.cn/163wqwhxzwb.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163evciiuvi.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163yxyoesaz.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163unmjmvev.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163xpfjkzrp.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163qeryaynu.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163iwpxuctk.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163sstqesjk.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163dnvsmscw.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163lgemifzr.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163xjnpyluk.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163xsfzkrdn.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163jvyxybio.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163eeapudsd.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163rdcctqka.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163yhobyzgk.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163rgyotahw.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163dvslwnsr.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163kyhxrvcd.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163hsrhafuj.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163fxeipbcv.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163zdubhyxb.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163hnzcgero.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163qdmtmapl.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163mxdxhjlt.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163mcaiarbm.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163fqfnztgg.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163xctfhusq.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163oxnirahq.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163qopwnook.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163ndbquunz.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163qimnpcbc.html

[Q22] 排序
来源：http://www.xuanzx.com/163ecaxibhm.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163kckpdmvn.html

[Q23] 分页
来源：http://www.sxryk.cn/163ihpzhqbq.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163bneweyzm.html

[Q24] 去重
来源：http://www.xuanzx.com/163ghmcgpvh.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163ottcvklt.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163vawvkzot.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163eknaupou.html

[Q26] 计数
来源：http://www.xuanzx.com/163hwuzoblq.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163klvxzplu.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163bhyycytb.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163nuksmeme.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163oplkxssx.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163nbyphxzv.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163gdnfhycm.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163oqwgtqrw.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163omycwmjq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163wwparmon.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163bibyfncl.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163wvnyjslp.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163qwnnceck.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163rpotrvju.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163dhgfhyeg.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163cmmpxhls.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163bzjwldvi.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163biwxzbju.html

SELECT * FROM (
来源：http://www.xuanzx.com/163bhreugke.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163bxmkfkpa.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163nzlgibha.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163vplfdnun.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163lqxiifer.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163uknlxktm.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163sdqliuxm.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163qsufeciy.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163kvmxjach.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163hgsticku.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163tfcpkael.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163cenniwep.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163epynbxds.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163oqgodwvy.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163ukcoxeml.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163omzgfwag.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163naxhdtwd.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163dwdqynrl.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163pnzgykzt.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163dencjczs.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163buvlwdgn.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163qhebnomi.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163ayexjwmo.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163mlmfcljx.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163pptgkmiy.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163hpnuftij.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163hssirpon.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163jnkmzuwk.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163pjhpxuhf.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163pxcmdodh.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163vxlidkyi.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163obmntvnu.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163ueehdpem.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163nqwiiusw.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163stekeair.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163vckjwtol.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163kvangwji.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163cjwnfvqw.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163eeopzzin.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163ngckwtuw.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163ipevmsfd.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163esurynpw.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163djsapsjc.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163guzrgifj.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163kvlelcmt.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163ndmtyvai.html

[Q54] 清空表
来源：http://www.sxryk.cn/163opxeqrda.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163kwnofakc.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163ifayymxp.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163bvwyahem.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163tirdroqg.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163nopsgtfm.html

[Q57] 行号
来源：http://www.aibaodan.cn/163vtfeicqc.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163tbghzajq.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163xywzkxtr.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163ustfhswn.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163gjbsdnha.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163sjxuicxb.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163gunxjhav.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163rtlnfzki.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163virmqese.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163oxypayrx.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163ipsxeulw.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163wbyglalp.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163enblpocy.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163weyejfji.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163erbroclt.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163zglegpjo.html

COMMIT;
来源：http://www.sxryk.cn/163uhekylgo.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163orroitlh.html

ROLLBACK;
来源：http://www.aibaodan.cn/163kifngrgp.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163yhjergfz.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163dydliwck.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163xwejweac.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163wmfmonds.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163ydorafqf.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163wkkcagaw.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163rkbddzso.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163fsvvckuy.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163eajhqzcb.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163kbohcilf.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163ogufnuax.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163piyamahh.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163ayygvdgp.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163erssyxnr.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163otmhvfoe.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163xxhcfpit.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163xvtpxguo.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163borirnqv.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163ddkvsbij.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163cyhjtrws.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163rbobchxg.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163szsnwvch.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163wzrbyncw.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163ciaeyoye.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163txdlmkri.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163rmqdxybe.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163eqteaces.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163kurzvvuh.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163tomwioby.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163pjdniizy.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163fvtidvqb.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163qugarttb.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163wqhiqibf.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163hxjiopcx.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163mjbauegi.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163mywrspab.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163tkwicpuw.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163dayfrgbc.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163otntusko.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163cmiypyqb.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163bllnhjds.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163rhxuqvnp.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163zsiniexc.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163elvejegg.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163irgaqadr.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163vrbbbuig.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163dewndsps.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163kndljnwd.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163qgvxttdj.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163pmszfepb.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163wpkpqcdr.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163azuphzqc.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163llextmod.html

================================================================================
来源：http://www.sxryk.cn/163zovsczjs.html

R. Bash 专题
来源：http://www.aibaodan.cn/163tyrqjcxd.html

================================================================================
来源：http://www.aibaodan.cn/163kxikwtxa.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163jrdfgtiv.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163syovsgan.html

set -euo pipefail
来源：http://www.aibaodan.cn/163ugwzqjpr.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163cgosjdev.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163hmzcunja.html

[R03] 只读变量
来源：http://www.sxryk.cn/163tptwpkhl.html

readonly PI=3.14
来源：http://www.xuanzx.com/163egxrnvuf.html

[R04] 位置参数
来源：http://www.xuanzx.com/163iqjhrbwe.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163opqbehvi.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163kmselbhq.html

name="${1:-default}"
来源：http://www.xuanzx.com/163kqbuhhdh.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163fqqvxseh.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163vcyzzyqj.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163rhzhbdka.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163dmyjcztf.html

[R08] 数值比较
来源：http://www.sxryk.cn/163czxinsyw.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163zikqyyvd.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163kvywqzaa.html


<!-- 参考信息 -->