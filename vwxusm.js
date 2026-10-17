外链999!wailian999！

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163tuacuyvf.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163gbmplcew.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163gffjstvw.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163xphblkpe.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163goyofqxr.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163dgmgjjyk.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163grtkkdjf.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163nlkqnwzl.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163ktiyoyqa.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163pwtptbzl.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163yydqfwki.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ekxpdsfb.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163vuhexkkk.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163axlqdtjx.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163gzurydbt.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163rhiqcwdv.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163ddkklnyl.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163pgavnuuu.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163tblzqyvt.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163rixzsmei.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163fbyqcrun.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163doayjcdm.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163ldipfxbr.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163ybkqrakg.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163shtxnjhb.html

================================================================================
来源：http://www.sxryk.cn/163gjzdjfhv.html

P. 常用工具函数
来源：http://www.xuanzx.com/163anoszdbc.html

================================================================================
来源：http://www.sxryk.cn/163apqrguqt.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163xhzjysyo.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163dvxhtgfx.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163wxdqesth.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163tsjrmayq.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163zvwgjjhj.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163cunooadb.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163vbfsuvzv.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163vgpqmfjy.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163pvtgrynu.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163cjqywsng.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163crgobzrl.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163svormzjt.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163ruvvhggn.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163ingazxly.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163kjlienhd.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163dzqswnae.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163eqcugzjb.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163gbefzakv.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163pwwcyipg.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163qmmlkslx.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163gdfylaym.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163gmftdqxp.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163tbamgggp.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163ghdrbeun.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163jlzutmck.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163veirwnuh.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163oqfzhqzm.html

[P04] 求长度
来源：http://www.xuanzx.com/163mylpirgm.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163iabfztpf.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163zzkrsmqw.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163cjukzpce.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163xjsddmgo.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163ekbmyxnz.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163klfetxxg.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163pwpumsyo.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163axsvwile.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163qyvtisph.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163ldfkgnnm.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163rgcpfics.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163pchengxr.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163xiebcwwn.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163cmutcwej.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163htfqvssn.html

Ruby: a == b
来源：http://www.xuanzx.com/163txsjigen.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163ctaigkvy.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163gzrirqcr.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163xuorhfdr.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163zquokrjv.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163uazwqzwj.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163laewpdwi.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163hnagesyf.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163upqfwvvn.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163lqluavps.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163jylhctol.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163rflktmrx.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163xbvuhmyb.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163oicczshw.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ncrjxwba.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ufqaokbe.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163luqlkcjz.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163oxfoeomc.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163eakpenel.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163mhqsqvbl.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163hquyikoc.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163dootwkbx.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163nkeginyx.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163tjnzkaug.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163ymontyol.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163xgefbwrb.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163fmabajwy.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163ifguxhbf.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163ydnehuco.html

================================================================================
来源：http://www.aibaodan.cn/163vbngyrkx.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163nszqilxj.html

================================================================================
来源：http://www.xuanzx.com/163akflwsem.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163yucemidi.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163zwjxppnv.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163jlcnxajx.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163kzhhsomy.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163lqylpght.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163ctolcakq.html

);
来源：http://www.sxryk.cn/163mloiswqr.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163xlmtpicg.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163mejdrxgg.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163lysiwyls.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163ziqrubjd.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163juwbaabh.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163uwckdxok.html

);
来源：http://www.xuanzx.com/163uaofklmu.html

[Q03] 增加列
来源：http://www.xuanzx.com/163tawnxnty.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163uiodyxvr.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163yuoblgjq.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163owcgkivy.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163sqxaimwc.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163fsxvwyma.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163rcybtrdj.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163onnkzgcf.html

[Q07] 删除表
来源：http://www.xuanzx.com/163rujaucfj.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163whknsxan.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163yjdijpjp.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163qkjvycpo.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163enqbfcsd.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163bgiifqkh.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163znymgudd.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163eftpveer.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163kwwsurwr.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163auuxftil.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163jzcipkpt.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163rkfxhjsn.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163yivkiiwd.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163jdgiimrt.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163dizbpxml.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163hqsspkbe.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163rlvshkia.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163fkejjbwy.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163xbblipjv.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163zlxolblo.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163zepsfwxe.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163vhhgwmlf.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163nawspplt.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163jkihvwbq.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163kczodhzq.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163ewcvgdjt.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163fsjqktdq.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163pabrxunx.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163dqmmdbob.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163akqlpyej.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163dhgvjayj.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163fukankxv.html

[Q22] 排序
来源：http://www.sxryk.cn/163dmqnokhd.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163ocqmjeby.html

[Q23] 分页
来源：http://www.xuanzx.com/163rnvepwei.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163ndtycgxc.html

[Q24] 去重
来源：http://www.xuanzx.com/163vkglukmo.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163ilusrsuz.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163mdnpvigr.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163pdgqnnnr.html

[Q26] 计数
来源：http://www.xuanzx.com/163ikpegzmy.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163uaswlwuw.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163tbzzoiyj.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163zmmetvae.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163ojhsgboq.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163qpakiwhj.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163nlluatpt.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163ttfhzoha.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163eilkwtum.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163pfyqfwfd.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163qyxgkuee.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163lripzuox.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163gzjrbdzv.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163yvdnmzdd.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163pdawdkjr.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163feihomyo.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163ohjvniom.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163jjrzbnqv.html

SELECT * FROM (
来源：http://www.xuanzx.com/163djiihjxd.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163ugyelsxo.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163sqncpjbr.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163lkjfcfmc.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163kmsouekj.html

[Q36] 左连接
来源：http://www.sxryk.cn/163ubczwjik.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163todcapit.html

[Q37] 右连接
来源：http://www.sxryk.cn/163zyosuoqr.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163ohzdvrne.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163kvrvvdls.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163cqrizbgi.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163kindxgrq.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163mtargzlx.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163mfhpxvva.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163hbgfznct.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163lzufhiun.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163zdvoxauo.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163npwejiln.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163xfjrhfxl.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163ngoisdqt.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163prfrtwjz.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163iayirtvv.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163sorgkfye.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163ardvwejm.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163psszoqyw.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163vlljunhs.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163psgwpcls.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163chrikwym.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ihqkebmu.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163odiwwyqr.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163pusqyulj.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163nvcagdby.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163sofhotzh.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163xdtdkrjx.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163xcruplig.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163urvhizmk.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163oxwmmqkn.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163bedqnzki.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163xbmnuflg.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163tpjnmnxg.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163auuacoak.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163kgeuipbv.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163rxzqiijs.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163pwgehbjo.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163ssaculah.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163jjpfgsoc.html

[Q54] 清空表
来源：http://www.sxryk.cn/163rwmilthi.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163zgsahnss.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163zaupybpa.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163fcnkmuxi.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163qryeigcx.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163gtkjhgxm.html

[Q57] 行号
来源：http://www.aibaodan.cn/163keoijxlj.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163vddtlntm.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163ajyzlxwx.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163blkslwic.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163dhsvssmu.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163jcmgxuzb.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163yocbztsl.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163rhmcktac.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163joxzuujm.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163ytfonfnl.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163fakogxil.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163lxsvqhfb.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163xuwfslfu.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163xzssrmaj.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163oceaxjnk.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163atokoxql.html

COMMIT;
来源：http://www.aibaodan.cn/163hictwyrg.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163olzsoypj.html

ROLLBACK;
来源：http://www.xuanzx.com/163jnccbzke.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163pemaaqxz.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163rkdozxkf.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163wgbsxkmy.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163xnnazzpu.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163njmfqqmq.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163pbfzgesb.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163fificfcw.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163kwfwvmol.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163aeyticdo.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163odalnajc.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163tvvqzawd.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163ikhlotdo.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163rqtkbhwr.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163mtrtxnrg.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163uirxicoy.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163ssrchikb.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163llpmeuwd.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163dghgrqck.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163owdgvzsk.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163eqbdgmpx.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163ghixdaze.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163osctnsxv.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163aoujumpo.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163szrmqhpx.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163ttcsujjj.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163nhqsekeb.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163rmoqfxmh.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163roiplbog.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163ttaztgro.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163rvxahvee.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163nrdtzkfa.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163jmiehqsa.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163vdtolciq.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163jqjvgduq.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163qecdayvk.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163nhxdhhhy.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163omtivczw.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163qpikkozd.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163fufovztf.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163zvnfqyem.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163bkhbxgsh.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163nygmkidx.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163qqmwvrjc.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163reensglw.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163qnubnwaw.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163uxqdfvzn.html


<!-- 参考信息 -->