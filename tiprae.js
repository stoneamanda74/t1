外链999!wailian999！

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163gpmlqqcn.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163frgpdxto.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ghymyote.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163zkhxsctj.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163dopuzsof.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163akvntbuf.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163qzbejajx.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163yswywjff.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163xrfaossi.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163heauxaxp.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163yoedjhhy.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163jjasohrn.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163isxkaxml.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163lsvgdqsr.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163nxfisguz.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163cyoittnw.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163jetdrbys.html

================================================================================
来源：http://www.sxryk.cn/163jvkbudkl.html

P. 常用工具函数
来源：http://www.xuanzx.com/163vpodstkm.html

================================================================================
来源：http://www.sxryk.cn/163aojtczjz.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163blqvzucv.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163cjzsfvrx.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163mccikrju.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163jcgkyyue.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163iweencma.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163jcscvmjo.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163eltbhhug.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163toyoymxm.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163ujmvpvop.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163aoraycev.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163eqnvthgb.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163erxxvwna.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163bpepqamq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163jizbveoc.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163hyxgrbzk.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163buvmdzoy.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163zasashmk.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163cdcsqnrb.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163woxpackm.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163yypajugg.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163ktpnxkqs.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163njgzlqzw.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163jpiamgrs.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163bmignnvd.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163lxogyioh.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163vdzfkvgo.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163chlrqhct.html

[P04] 求长度
来源：http://www.xuanzx.com/163ugjafauz.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163yujmddgm.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163xwlxyors.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163mxegkscg.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163rvljyzhm.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163vhckjxcx.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163jjdwfjrf.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163ucrdagfh.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163fheluwvz.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163czdcfqwp.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163yaqbgnor.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163wjhieogb.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163tboupvqv.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ivjolhwl.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163rqolmqsy.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163nlxfkiny.html

Ruby: a == b
来源：http://www.aibaodan.cn/163gnhuoguj.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163kqffqqms.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163ukswhkqz.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163eehrlqpm.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163kfwdlaqo.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163ccetnimu.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163sxlekrtl.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163hkeecuho.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163pvvhhbyx.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163otuecklu.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163iuqsrxrz.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163ckqwonvq.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163bfalofbh.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163ajxfsizg.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163iqzqpvvg.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163cvojjuyt.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163zqslfdcv.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163cahsidjh.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163vhrepvxj.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163xudovdcj.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163squhhrby.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163bibdstcn.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163huttixxq.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163ohcxdypq.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163reweehiz.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163srchkwfx.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163achzamqj.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163jfzvgptl.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163fehlqqiq.html

================================================================================
来源：http://www.xuanzx.com/163tgfuoaof.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163crchnqfo.html

================================================================================
来源：http://www.sxryk.cn/163qdelofus.html

[Q01] 创建表
来源：http://www.sxryk.cn/163jrlqypkh.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163alrqwhjd.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163lkqivwtr.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163kwwljups.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163jyalpzgo.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163srrphrpj.html

);
来源：http://www.aibaodan.cn/163smzlubvg.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163plsumluo.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163ijzjiupt.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163rvsxxach.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163hrlykioe.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163nonmshqv.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163ddghsnan.html

);
来源：http://www.sxryk.cn/163nsukeugn.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163xhxyzfsc.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163xqmndadh.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163aonhnlvx.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163wiucuwfx.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163jmtrzahl.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163ykghtbmd.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163fdqpkiom.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163ulrhxtga.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163zsemcoiz.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163nsllduoi.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163xlixbnmm.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163ekovuzgn.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163yrptqpge.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163jhyisaix.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163hhwynzvt.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163uzsxotll.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163lxknazsv.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163juwgxgfg.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163iootkchq.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163bphtqspz.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163jxlegyym.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163ykfuezri.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163jjifmurt.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163mzbxprlq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163ultjpjsi.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163ksngrvbt.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163oxqxjnmf.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163lfmwqmzo.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163qgsgktqh.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163rgnwrpoa.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163rixqjqqb.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163iqwltuzy.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163vqqdkoaq.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163ioiwitrg.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163hgljfycm.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163rvmdjgti.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163rnykjkfh.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163qkwauagv.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163twfhjxvq.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163bpaywseo.html

[Q22] 排序
来源：http://www.xuanzx.com/163qtyrngpq.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163ltdsuyfb.html

[Q23] 分页
来源：http://www.xuanzx.com/163ujsixpyb.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163dcgutgdk.html

[Q24] 去重
来源：http://www.aibaodan.cn/163rxeqqoot.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163yaxymhgt.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163bwffhtdq.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163viggkcms.html

[Q26] 计数
来源：http://www.sxryk.cn/163mtaddrry.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163fqfkvheu.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163idholnsr.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163ntcapkzz.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163lcexonpd.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163dnsdcmuc.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163ojcqebjm.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163cwaduqpy.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163rgstrlpa.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163gbcnggrt.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163uyesuwbs.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163qvchkfff.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163edtrvqxm.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163mjgsuxfv.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163usneafct.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163lburwlyn.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163ryaulxto.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163pmusoqcg.html

SELECT * FROM (
来源：http://www.xuanzx.com/163ofkxankz.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163jpubcsmc.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163hcipdbmu.html

[Q35] 内连接
来源：http://www.xuanzx.com/163jeoyagcs.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163tlxmfdfz.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163aayvrdkc.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163kpemzrmz.html

[Q37] 右连接
来源：http://www.xuanzx.com/163osbzcpsp.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163ewjstonu.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163ysgtfcjj.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163fsmxyaip.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163eezodmci.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163fdzwfmte.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163zbchjpby.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163wzvmbmcv.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163xreywetb.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163uxjjicsl.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163qfrmsdkx.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163ekresrtq.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163jfkjblgl.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163qcniftcz.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163pfevdezi.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163atthnumu.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163ulsziatr.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163sfbtcxvm.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163obziajjr.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163bqsyhmoy.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163swkvkwvi.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163qsbcwpwo.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163cbhrgwvq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ehpqgwjo.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163qykbxrit.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163ctbqlrid.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163zhavroud.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163aysfmwlv.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163wkuxkukj.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163vofmdmbw.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163lcrquacm.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163eswbtczn.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163dtygpfsy.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163odnvmsfq.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163apemqcfq.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163whqvtlqj.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163xzfoshxg.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163dbnsnhsk.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163omrsuvhw.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163ctelcyby.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163wnzwbflr.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163kijczryc.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163obyndehl.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163euadotuq.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163pgaofqbr.html

[Q57] 行号
来源：http://www.xuanzx.com/163kllovbhz.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163rvvkrnyf.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163hzrfspbo.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163yatummuk.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163opawxknw.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163omiayefj.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163hfbcrkfj.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163isdoomcf.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163bkgutppc.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163uaqptnyb.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163oqelrkci.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163fdoqkitm.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163imepjqel.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163sbojivxt.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163uqcdevkh.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163dzljyffw.html

COMMIT;
来源：http://www.xuanzx.com/163uffogsyb.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163dgawfjet.html

ROLLBACK;
来源：http://www.aibaodan.cn/163wdfohhbz.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163bkbtnllx.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163icaapbja.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163dyljisvt.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163ojbyxzuw.html

[Q68] 保存点
来源：http://www.sxryk.cn/163enplasqx.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163nsieeuui.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163ycrdibjg.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163qsumjpaf.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163njeikyvz.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163yjrmqyzs.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163khqzwitq.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163yfpukjip.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163szbjddji.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163upfvpsom.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163eewdkvlf.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163rgfnfjok.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163pejavytj.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163cedovnix.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163unmuvbrs.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163elmdqiiy.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163hdrujsaw.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163oilmkhxl.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163lohjhpzc.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163qvkvepqk.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163tlvwsviu.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163fogvhonk.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163qgwpsdht.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163bwqdgriw.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163wjvdruve.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163hxkndkru.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163hvbltlpq.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163ycmvtynk.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163llrlondp.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163nncpdhxs.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163xwpikner.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163jmwscyax.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163tzpfxzye.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163jwkbhijr.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163kkdgpqzr.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163etzmmfjs.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163poynvqal.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163dtwhijva.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163fencgpcf.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163vpjjbmyc.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163qyzafmdc.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163fzkoddkc.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163xdunoccs.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163hlaztztl.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163tclfnnue.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163imnvsgky.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163eyojhklf.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163ppjlpirv.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163nhbglecj.html

================================================================================
来源：http://www.aibaodan.cn/163zzfcgpal.html


<!-- 参考信息 -->