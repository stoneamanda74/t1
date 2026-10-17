外链999!wailian999！

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163opsxgkuj.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163jcdwwmzb.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163erkgictl.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163prsdxnmt.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163htsgapyf.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163xvaxybkw.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163netkqmwt.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163tqfmsrrq.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163sgnqpejc.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163ipmetflh.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163pqjslfkt.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163zdmbabnv.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163vdpkgfub.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163lwspthxu.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163irphkoju.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163vvymdrbp.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163tvzknpje.html

================================================================================
来源：http://www.xuanzx.com/163xkffzved.html

P. 常用工具函数
来源：http://www.xuanzx.com/163yhtavtow.html

================================================================================
来源：http://www.aibaodan.cn/163mvahvblg.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163qndongij.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163ppggbpth.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163ufitfzpi.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163chmhqkdy.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163geiuhpgw.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163xbjnqzqt.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163brqiyjjd.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163cftcvwct.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163jzeykcaz.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163jvfubcud.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163bnsrtcfn.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163hhfxhcjl.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163qfchtgrf.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163oejhivht.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163rmebzlyj.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163gicghyuy.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163jcbmphzj.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163snrgrhvv.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163irfoqbac.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163ykcyrksx.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163egoaagdn.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163jpcxilwj.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163seilztvj.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163wdmylspa.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163ghghrxdo.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163zkmtgyxb.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163lkqtcsfc.html

[P04] 求长度
来源：http://www.sxryk.cn/163vepfddns.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163kdevfwqj.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163nhjemqpf.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ifyflfqs.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163cfiehsna.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163mznejyqg.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163plzjyima.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163pmitixpa.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163dgwoawja.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163yzxfeitm.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163najzzckb.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163raprxqix.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163tffehbhc.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ezosbdiy.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163kucobzep.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163twlmsxvj.html

Ruby: a == b
来源：http://www.sxryk.cn/163yqkdbrch.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163xyjwutyk.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163qbczodlu.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163xhwonyvy.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163rmhmvews.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163inlohvme.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163boujxkua.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163drhayrkj.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163zmkxvgoh.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163gygspbve.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163otwpjafd.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163tnvcmszz.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163eppmtljg.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163ehdygawm.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163gigsierq.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163msktemhn.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163yrwerhys.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163mondybqm.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163qnecmnun.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163efcskshn.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163lvurrtiw.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163ucoqjeaf.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163ziscfntt.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163isjnawjv.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163irlbfgil.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163mguwikms.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163xodnzufq.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163ryhechdv.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163xofnghwn.html

================================================================================
来源：http://www.aibaodan.cn/163tkjyvfun.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163uonagrhn.html

================================================================================
来源：http://www.xuanzx.com/163zpgkuidz.html

[Q01] 创建表
来源：http://www.sxryk.cn/163ntvxagzw.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163wgncjafr.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163fklzkmct.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163fzkaztco.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163hkfaphgt.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163ofqworpk.html

);
来源：http://www.sxryk.cn/163cmgotgei.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163vrvwvhvd.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163ngzhaygt.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163euaojiqz.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163xgplnrvp.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163uogieppi.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163xkikqkmr.html

);
来源：http://www.xuanzx.com/163rjnjzlma.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163yewqebgp.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163adrmdwtr.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163xbtepniw.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163thqdxzlz.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163dsjpqeby.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163rspuigeq.html

[Q06] 删除列
来源：http://www.xuanzx.com/163tcnyhjsn.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163gycmreax.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163mfioytgb.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163gtwvnnol.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163mvkvfbcg.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163isoxtfdl.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163wjtbyvwn.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163lunixqba.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163jyourgpv.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163prlmlleb.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163uwcfuybn.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163gmbgasmd.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163qwevsceg.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163gsmjtkcw.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163sdasmsyx.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163ghhbfxko.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163mcuhmewb.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163figmjrmr.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163cdvwefnu.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163quwaspaa.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163dldixygw.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163ithxqunw.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163tkhwajxy.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163nvhyslvu.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163omcntcgp.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163fluuromf.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163utlvhynr.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163svnhmnmw.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163spdlvibp.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163ygsuqgmg.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163mfrsfzuw.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163jaulpblf.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163tnjneyax.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163zxoesqus.html

[Q22] 排序
来源：http://www.aibaodan.cn/163wvybvshk.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163ooavovyn.html

[Q23] 分页
来源：http://www.xuanzx.com/163vlrcbrnz.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163zmdooezt.html

[Q24] 去重
来源：http://www.aibaodan.cn/163obpeeufb.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163ngsmdfgm.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163pnsxofjv.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163etrogtsu.html

[Q26] 计数
来源：http://www.sxryk.cn/163wfuukcqu.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163gghgwmwe.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163icersbnl.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163tlvbnfwa.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163akumzydz.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163pjgvzsxk.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163mggyvxdz.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163irvjwtus.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163tzazunap.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163zawvpwsv.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163ckawhnow.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163rqhpubfo.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163wekisiun.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163wabldevq.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163wdxgwsvj.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163fenwrzmn.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163gzqlnibj.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163thwetyjf.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163nrsuczud.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163pgnueuvj.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163qzeaxpql.html

[Q35] 内连接
来源：http://www.xuanzx.com/163mrlimcgt.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163oesfjhov.html

[Q36] 左连接
来源：http://www.sxryk.cn/163fexpdlui.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163hoeqknwq.html

[Q37] 右连接
来源：http://www.xuanzx.com/163vbkrikax.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163apxbwzdn.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163ivqvtwxy.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163ligyizds.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163zfhedhyo.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163gqtvwiol.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163glnslaga.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163umoqseor.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163fxswikex.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163xfmaimlu.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163cpupipyq.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163fpkuyrao.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163tcuejhmb.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163zuuziicf.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163qlroglkc.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163blvjxuvm.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163ivuofbvy.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163qwxgwpmh.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163jiukmhjx.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163motnqkzy.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163pngsiyal.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163bipznnsj.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163scvydvlu.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ekviqlaz.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163yrdqpwym.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163omfgytdm.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163gsepckkn.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163irhtmoiy.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163lnossrjk.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163kfxywndl.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163xuoratni.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163ledmukia.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163mjpnynig.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163xgpovrbs.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163tzrewtvm.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163eqbdpayj.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163gewtqqtq.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163hbdnclxz.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163czifblsi.html

[Q54] 清空表
来源：http://www.xuanzx.com/163oaqxgpvm.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163pgjyycxz.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163hbjuhlrk.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163xbitspui.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163hvkjupej.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163uwvrbhab.html

[Q57] 行号
来源：http://www.aibaodan.cn/163gdbbjojy.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163hrmengxj.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163uthxejel.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163aqbwpdyv.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163fawgqlir.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163hpudqccg.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163kajpniib.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163yfskavwi.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163pttubkax.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163kmnjmbbm.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163hwajtadb.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163wczjqzbp.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163iomzgjjx.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163xdckhula.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163xudirgrr.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163rzknlgrc.html

COMMIT;
来源：http://www.aibaodan.cn/163cmzlebzi.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163ivjquvir.html

ROLLBACK;
来源：http://www.sxryk.cn/163oqilqcwy.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163yqeasmgh.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163eprkjeit.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163befvebgq.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163oahmcsuk.html

[Q68] 保存点
来源：http://www.sxryk.cn/163ydrfzatk.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163cnamtect.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163fggtvppz.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163tdizfxor.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163htqwzjjo.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163ntlntetu.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163euukhivg.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163xxzveocn.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163laakonoh.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163wjvljpen.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163ctmqvyca.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163dltgnrps.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163oghsennc.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163mdfypcmc.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163qcjpasnb.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163thbsesdm.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163rfyhmldw.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163mlkatbqs.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163txltbdhl.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163zzzgyrqs.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163umozsxzi.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163ugfjihur.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163ypwddydl.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163rxaiaqwr.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163wprvrhqb.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163bckrncie.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163sffvbwex.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163yioregba.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163rozkztwr.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163mvkitkpe.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163tzqdgpdn.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163mhlaikev.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163jtdqttrm.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163ojruuena.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163btdfxecb.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163ykqdjgsr.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163kupnllcy.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163temcitfm.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163hsgecpwo.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163ffaijsmj.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163fsfzugmm.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163vjstqelh.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163mfbozdip.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163sltwnyvv.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163awremiom.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163scsmmngz.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163hrqsyswy.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163tdwaikpv.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163zutvnasv.html

================================================================================
来源：http://www.sxryk.cn/163fmyiemgn.html


<!-- 参考信息 -->