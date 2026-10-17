外链999!wailian999！

[O06] 使用进程池
来源：http://www.sxryk.cn/163pqbalfka.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163sobokdzy.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163pciddnrb.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163hhzcvcmx.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163oasxanbv.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163sonfptrq.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163bzyojecd.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163uipaohzl.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163eviiurpm.html

================================================================================
来源：http://www.sxryk.cn/163wgsfzkcl.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163uaiskomc.html

================================================================================
来源：http://www.xuanzx.com/163ulxwsmdg.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163jxitfrtp.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163smuykhiv.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163iwpodvxi.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163wkkwfrnn.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163vqlskvnw.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163xjdubphl.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163lhpedijb.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163cpjurprv.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163zllfmevu.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163ocwrprun.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163pzgqgait.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163tbdrtmqz.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163mquuisvj.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163wqpyoxdq.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163ltxxtawc.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163alhjrxkx.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163smkpvhuk.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163ojspxgus.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163oogztpfx.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163mdzxoicv.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163onfqbawf.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163mcrknrmf.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163vrdxoofd.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163qprrfobw.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163xcaojfdx.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163symglglh.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163zlxvyxwc.html

[P04] 求长度
来源：http://www.xuanzx.com/163dilflked.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163xkkunpce.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163dgfuaeul.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163kigopbbq.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163zrwaaoec.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163tagoyitc.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163utmvrscy.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163pbmuwgwd.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163dspaazwe.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163bgblyepy.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163djrljmlo.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163fynwnsul.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163rjyzexar.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163uvmjdiqe.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163fipshxyr.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163xhcayhei.html

Ruby: a == b
来源：http://www.sxryk.cn/163rqrmhslr.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163qhfahyoy.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163fdjxlvio.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163usrejvyw.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163zhhyhuhn.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163iczxsiph.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163jqcjvxgm.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163ajsftlmz.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163knkqqzlc.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163cocjezhj.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163puljsllb.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163mbnwsoyq.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163tnnbmhym.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163bmaxmsex.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ndiqmgcr.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163dgulapma.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163fcosgojq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163ibffjdli.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163vvwgvray.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163mcememat.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163nncxcndc.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163xrlrlfiv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163xsypzrmu.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163xgazegph.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163gmwakwlv.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163xoqiyusp.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163kcxsagxk.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163bypxmycc.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163qjleztuk.html

================================================================================
来源：http://www.xuanzx.com/163dremlgga.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163mqwrlknx.html

================================================================================
来源：http://www.xuanzx.com/163gebdxnrr.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163yyjbqcbm.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163sfljmryg.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163kxgsfwgi.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163uyyoyptg.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163tanjbwob.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163tghnqupv.html

);
来源：http://www.xuanzx.com/163lcwglhdr.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163mwoftifw.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163eooiritu.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163dftjnpfh.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163ykixiuvr.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163hjxxgvoq.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163nrreuheq.html

);
来源：http://www.sxryk.cn/163aryxxxsk.html

[Q03] 增加列
来源：http://www.xuanzx.com/163rndjxktj.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163lldbarva.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163fnkaxpze.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163kdkpvxae.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163odmsbvqj.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163gjvonyno.html

[Q06] 删除列
来源：http://www.xuanzx.com/163puorkacc.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163axtsalgb.html

[Q07] 删除表
来源：http://www.sxryk.cn/163iblkqrvs.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163vrjeqypc.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163ziwhxknt.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163kfyiucno.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163uelldaqo.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163qlixadnd.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163uvgaauat.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163dckmlilp.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163quptzrce.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163eguopdhm.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163ogprnbil.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163aibwpfmj.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163qkqzrmxb.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163imxlyuye.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163djozvnfr.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163muvgkkfp.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163bamjsufa.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163snagjefa.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163qumohbrh.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163bendvvjr.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163oesgrsax.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163fslojgwa.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163jbpgllmh.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163imwzmvgt.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163hmctjmup.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163ghymuruh.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163hzjpkonl.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163oxdkjqgo.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163wednkxto.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163nsmdbjwf.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163ujosqfwy.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163bangmujq.html

[Q22] 排序
来源：http://www.xuanzx.com/163orzylzrg.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163nmnrvylg.html

[Q23] 分页
来源：http://www.aibaodan.cn/163hzkanras.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163yavuxvpe.html

[Q24] 去重
来源：http://www.xuanzx.com/163xgqtxipl.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163iorsynmg.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163qbtwhihs.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163bkggrztz.html

[Q26] 计数
来源：http://www.aibaodan.cn/163dndbnzlc.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163otinnasq.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163rqmmhara.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163eedfyeav.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163wykgqkac.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163filsaosa.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163qzzdpyqo.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163efaduyxb.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163nwocwrhi.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ehtkqzmz.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163kegznngh.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163byhkxuwj.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163bcuyecbt.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vbobimji.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163achaquvd.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163ywudfwqi.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163ehyjzzyb.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163vxsybxpf.html

SELECT * FROM (
来源：http://www.xuanzx.com/163wnmxdirr.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163njwyaqmk.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163lcyhnchg.html

[Q35] 内连接
来源：http://www.sxryk.cn/163mgihedtd.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ahnhdphb.html

[Q36] 左连接
来源：http://www.xuanzx.com/163zqaxxjth.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163gkewzrfx.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163tlebcajy.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163jbkmagku.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163kuuidcop.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163ujgiymom.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163ckkycvsc.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163xrrmecby.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163bxvlcsvi.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163jyhfwqta.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163uyrmzaps.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163bblihlni.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163wuarkamd.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163ddzwxojh.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163gatahgnu.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163btbjsinq.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163vdgzzpiu.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163kqnzwcle.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163atapquqc.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163dyykjsso.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163mmcrgqwi.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163lbxhbpsa.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163rdgdndej.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163zrccstyw.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163dsteommf.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163iibsyhzf.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163ptanktsu.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163qtiawswj.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163wqrlufsh.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163iaatnemi.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163ahfhnlsj.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163erpodyuc.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163oyueggxs.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163jfunvovd.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163sxhkzsue.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163rcinlzzc.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163dockwetw.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163dqchrwei.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163awcfqlcg.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163vzotltfe.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163ftcygxzk.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163eabrfknp.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163aiuohadm.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163ijgcedrt.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163gbhpdeqi.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163hwasrxys.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163qxglmyiu.html

[Q57] 行号
来源：http://www.sxryk.cn/163omkrgkjy.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163whwtyaup.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163dblaofmv.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163tcresvvq.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163svmjghsw.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163nvpaddzj.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163svwxzalr.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163kbmhjdrq.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163ktniilxk.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163prhkqqlf.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163eyhlzthc.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163jcibnmqv.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ptggsmqb.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163qebtbgln.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163ytqfctph.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163tiirxwng.html

COMMIT;
来源：http://www.sxryk.cn/163dwrrlvlc.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163ffxlqsxn.html

ROLLBACK;
来源：http://www.sxryk.cn/163oznnxzeq.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163djcrqqyy.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163qixnmefo.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163jexzzojf.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163lxvvebon.html

[Q68] 保存点
来源：http://www.sxryk.cn/163krmskjgk.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163qdvbnvuo.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163jbnxjfjq.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163pllwgssq.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163jzyfyypv.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163kmpmvxed.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163vlqnigng.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163llzzkwko.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163vewrnyfb.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163udksfifg.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163wlmknodx.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163ybvhysys.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163lbdflsnb.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163iunnipit.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163mwpdwajd.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163svfzzscc.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163krjchxub.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163bjjhiwpl.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163wtpjdsqo.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163gynuicsx.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163crlppgbq.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163djjicwxr.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163jbjqiafw.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163nkmezapu.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163umclwxwq.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163tnzaikoz.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163qolevsgl.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163mzjmhogm.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163asneviue.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163wrhrxhmp.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163jzhmzgup.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163ypkfyqmw.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163uaqxfpns.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163mstdklti.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163hkbzxajr.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163qrwhhxqo.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163nicwajjx.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163dpxqdhub.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163dsplwpre.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163sbwisndj.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163iyjjomua.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163qhlqmzxx.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163fjaktxdm.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163ufhoqlio.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163lcpwatqh.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163sckojffr.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163njyuyqwf.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163tfjorkzl.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163vtxfuplw.html

================================================================================
来源：http://www.aibaodan.cn/163evkyklps.html

R. Bash 专题
来源：http://www.aibaodan.cn/163tjvufvvp.html

================================================================================
来源：http://www.xuanzx.com/163zxoydqqn.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163oxpfgdrn.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163vemfgdem.html

set -euo pipefail
来源：http://www.sxryk.cn/163mkmbxecz.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163jhlnzlmf.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163glxqcuih.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163tkqbwufl.html


<!-- 参考信息 -->