外链999!wailian999！

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163chzbriro.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163zcjgqliu.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163lyklhokl.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163lztzpdmj.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163xppncptf.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163mrnplahz.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163fxzljcgz.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163gvnhnhdk.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163qdejxqgj.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163gkdignty.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163rogtycee.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163iyeatyni.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163elpipzmn.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163rumtuwqc.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163wkhbhmft.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163yzmbywzz.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163rngkxsoc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163rfsvbxin.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163tnknecrg.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163axrrhpbo.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163dnuvkipn.html

================================================================================
来源：http://www.xuanzx.com/163yhujhohm.html

P. 常用工具函数
来源：http://www.sxryk.cn/163hfakgtay.html

================================================================================
来源：http://www.xuanzx.com/163vflnyuuv.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163xqzzzfnw.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163sgsgyvks.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163efhcpqpq.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ktcwmgsm.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163yjzltpla.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163htolrgov.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163axelqxpg.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163pkqpirjw.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163insfzdon.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163yaexdnkx.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163ohvdmmcz.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163kctgqvga.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163gtgyeimo.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163vsuzfjxc.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163ldigwtvi.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163mmwbpuwx.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163fvlqliiv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163czyjywuv.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163oajvycte.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163zgaznbmz.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163tvxttyff.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163cjlltkzo.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ejmqmlmk.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163xtsnzxdf.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163rukpbzfy.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163ofghoajy.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163zgwvxyop.html

[P04] 求长度
来源：http://www.xuanzx.com/163qjbbwxvn.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163zwsqpjuq.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163emykifgf.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163fffqzdgs.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ztfuaczs.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163irkygjwz.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163uwdgglst.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163nsemefun.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163itgzizeq.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163joclazac.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163yfjhmtgb.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163pjaxqkcl.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163wavwodoq.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163kwrfnhdc.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163ejyiouzo.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163spdtvmet.html

Ruby: a == b
来源：http://www.sxryk.cn/163tkskgttt.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163fgxnyoms.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163fzgyzfop.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163bcmqedzr.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163gtwgsosp.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163wlvcapwf.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163vvhzhnkx.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163idkwkqph.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163cnwtrtrw.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163vnyldwja.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163posyvyey.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163rnhpinpo.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163xmivijeu.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163nwiqjssq.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163hhooihbh.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163pcshhfoj.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163mfjhcmtu.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163oxwivbao.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163iuyommkr.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163mpakbjyc.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163nuwxqcqj.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163fsoknisv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163tlpcwsoh.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163cplcniey.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163odvbpqdi.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163ahkphvmq.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163yzsafrfh.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163gglgfohe.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163cujatvpt.html

================================================================================
来源：http://www.xuanzx.com/163lyvwrpgt.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163ywuryuvw.html

================================================================================
来源：http://www.sxryk.cn/163qkttzgdv.html

[Q01] 创建表
来源：http://www.sxryk.cn/163zuncjtkn.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163swqcoyko.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ngchnuio.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163wsdtahpw.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163fibmmxie.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163hsgutwhz.html

);
来源：http://www.aibaodan.cn/163hrmkqpnt.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163gdxzctct.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163dzhscrmy.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163hqksqhpv.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163dlszdhsb.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163dztgpskv.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163fvyettmg.html

);
来源：http://www.sxryk.cn/163jleuhnct.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163onuflxzh.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163fwbjwxdk.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163liwigwir.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163wpydvkyn.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163jdomrnul.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163wtvfyaia.html

[Q06] 删除列
来源：http://www.xuanzx.com/163rrmmkxed.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163xrwyibqy.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163azldsvnt.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163cnxjdevj.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163vbaccffi.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163ewoxxnhc.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163twdiepga.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163sjfmbmxp.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163qtkplxtu.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163quvqqxtq.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163upnjvaus.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163jmbuqelm.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163zwwrgyab.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163yizlpxxa.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163mudhsgmi.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ydecbhkb.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163nhthkgpf.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163wdyonnej.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163heeabjgw.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163adlbfnqo.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163kqsdgbmv.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163rwopkibn.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163irjiqdgn.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163eqrjfewn.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163pxkzjysy.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163qdqnjcru.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163jtirrzho.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163yutmunzo.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163xqunrjqb.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163hdvxvaaz.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163cvpyeqxn.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163btwfdwge.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163mdqcqldd.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163likpoxzl.html

[Q22] 排序
来源：http://www.sxryk.cn/163zdpslxak.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163xpuvdfwr.html

[Q23] 分页
来源：http://www.sxryk.cn/163gktruumo.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163zlhiwavi.html

[Q24] 去重
来源：http://www.sxryk.cn/163qlwlpway.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163qhamaqpz.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163yznjykpm.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163eynmqktk.html

[Q26] 计数
来源：http://www.sxryk.cn/163xokqejpu.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163dmyyahul.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163mcsazduf.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163scndnlpy.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163upjimzns.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163lcfsqded.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163uxcynjal.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163oocbmxol.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163ngeposfi.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163xgyozxvh.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163vhxszvlx.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163mvwzqyut.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163tbzciqtg.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163rqrqqfla.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163ifwcxeyd.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163dabjbjvt.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163jkjowgku.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163htbvwczg.html

SELECT * FROM (
来源：http://www.xuanzx.com/163mfilobkf.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163dwzbbqpf.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163khuybmfb.html

[Q35] 内连接
来源：http://www.sxryk.cn/163tdtmtsay.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ffgonzug.html

[Q36] 左连接
来源：http://www.xuanzx.com/163vghyszoj.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163yoidbtxm.html

[Q37] 右连接
来源：http://www.xuanzx.com/163oyibqlng.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163yrkjyyby.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163aupvyftx.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163npczstjw.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163aryxtkpg.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163fnbapgqa.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163ydycomot.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163xfwgusws.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163dbcbvqyd.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163vcncjmmh.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163hzrpivgy.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163aadocvro.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163tehmtnzv.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163bhckylux.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163vswepudd.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163ddgjxbjn.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163fchucdpu.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163nzcqzcqu.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163waxsfomy.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163wgnppvap.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163rilqyyhi.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163mzysbxjq.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163svzkzcpc.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163jrgewrjv.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163nokzucuc.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163aqfjsbsz.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163gwyaeybo.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163pzexckfx.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163neqycrci.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163itamlrux.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163duqircsg.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163ouwyieoe.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163pcfikvdd.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163gjacjgph.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163jdsllgra.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163ixngyjpa.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163nhfztbsx.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163gsfjujzr.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163djirzmfq.html

[Q54] 清空表
来源：http://www.xuanzx.com/163kipvlmgg.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163lezkafsm.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163jhtnfzxw.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163kfqjegvd.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163hvpfvsoa.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163qmlhyvib.html

[Q57] 行号
来源：http://www.sxryk.cn/163wvwgvcty.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163qpjlaeum.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163fztimtab.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163qmhitbmd.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163wtwccbia.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163dhorxqwa.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163rbggdjvz.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163cxnefyuk.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163jpuyhjbe.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163bacfyuih.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163rbieckta.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163zvygmyfn.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163blhlqbmj.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163ecjibeme.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163gveefcsf.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163uzyqogvl.html

COMMIT;
来源：http://www.aibaodan.cn/163qhmetoem.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163wntjsvnb.html

ROLLBACK;
来源：http://www.xuanzx.com/163dxrtdcsp.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163yexjvwsb.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163zpszgoka.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163xbulsfni.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163fhbtbzgc.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163uitlrydn.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163przdkcfm.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163owxrfuqp.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163dbapgzfb.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163eyttbdyn.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163styfaamw.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163zetgmrwn.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163rmjzqsjt.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163cvsdrtil.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163axowfssf.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163qumingoo.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163rrpcjpqg.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163pwxuihkd.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163lgvpmpvl.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163dgrgdslm.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163zzcnoitz.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163xglnrqnq.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163jqmrylpw.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163tunucxes.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163vkomskky.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163ayecioqd.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163jdnsdjdi.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163kkxnhslw.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163hhruqvso.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163etptgbci.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163evzidbkj.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163iamhzyrm.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163xpwffekk.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163zjixzaev.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163hmlvufbl.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163laaekanp.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163sxmpfmve.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163jeenfwer.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163ahyqylqg.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163yzxtzobm.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163viosdsua.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163lfmdcrat.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163ojgwdesf.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163kurhotbu.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163obcwnivl.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163jmwxzxez.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163rfzmfjwa.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163duovpbog.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163irxpfdsh.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163zpjmfvje.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163lzplliwj.html


<!-- 参考信息 -->