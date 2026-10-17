外链999!wailian999！

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163iuvigqpo.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163cltfjtkr.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163gvrmhasj.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163xfnjncvr.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163huzyjtmb.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163mkosuwoq.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163vngiangu.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163nihuzrdk.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163lqvxwsaj.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163ijcitbqj.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163saytpevo.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163pbegjtgx.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163sficrjln.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163dafmsrtg.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163aizuhluq.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163mkwlgtpx.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163aheeseer.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163wpcrtfyg.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163fkdamcyt.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163uqjlnsxc.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163bgmdxchk.html

================================================================================
来源：http://www.sxryk.cn/163jyocsdsb.html

P. 常用工具函数
来源：http://www.xuanzx.com/163jsojbvev.html

================================================================================
来源：http://www.aibaodan.cn/163zecejbvs.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163wxckfsdv.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163kfmyqlej.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163hpeiovyi.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163iofmbzqh.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163kyneyauy.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163tzrxaoas.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163igwjsubq.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163oulbsfej.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163lpuyawmn.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163ycsllbwv.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163ankotaub.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163esgudsny.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163ymxcsbos.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163lqihbcto.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163ayisfysf.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163uhfnfywt.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163pqevavlr.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163lrmofhwl.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163fyzsbqud.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163avgjkkxj.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163qacklspv.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163bdpovpeq.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163mexukeui.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163fbmamqvy.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163djfglrqg.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163yndhylwv.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163jaxxzfxc.html

[P04] 求长度
来源：http://www.sxryk.cn/163jbmwnmdy.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163jmbrznku.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163krrewrzq.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163gudgumyj.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ejlcipue.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163qowcrzbl.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163eybpkysi.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163hyjpibtd.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163sdhttmmy.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163stmntbju.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163aqpwjqoh.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163hsnqopjt.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163ipduyiwn.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163paimxhtj.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163ykvplbfr.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163xrqxhebe.html

Ruby: a == b
来源：http://www.aibaodan.cn/163swavdfdd.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163gyqsuouh.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163etrvoudy.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163macqxfxq.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163ipfnqqnz.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163rzkdkkah.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163cinpfexb.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163xhqgtgsf.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163yptjcauh.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163yogptjnz.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163aooojhpx.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163bhosnrcp.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163ljvinyji.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163lvxjxjhi.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163mntpwllw.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163cwxxfwvn.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163bqwhgeri.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163hhypzavl.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163jncctgnr.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163wpldwish.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163fibjlzpc.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163nyjodxim.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163gphfgipw.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163gaenwoeh.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163drilqnmf.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163fgrbnqou.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163cdrtjtef.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163lratqaxw.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163yjzcaxuw.html

================================================================================
来源：http://www.xuanzx.com/163gncvxczy.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163gmxzeudz.html

================================================================================
来源：http://www.sxryk.cn/163dofesbvj.html

[Q01] 创建表
来源：http://www.sxryk.cn/163pkfojepd.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163dvseigau.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163kvetytci.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163doosetjc.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163oksxjslx.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163famydvqv.html

);
来源：http://www.aibaodan.cn/163omtpfqux.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163wnffexsp.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163eqfxncqm.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163epkityei.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163rhizyxtk.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163ypmpgfcl.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163wlcpqqrk.html

);
来源：http://www.aibaodan.cn/163bibunbyx.html

[Q03] 增加列
来源：http://www.sxryk.cn/163hsqwfwft.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163nzsycldc.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163iozgcpjn.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163yijfofgw.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163slpmvpdy.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163jiqdrjod.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163gwpohyml.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163qdaedtkb.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163gggblfge.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163bpriqqba.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163eypmozyd.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163wwlqusny.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163qkidfqdq.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163xvilpzvw.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163ndhsgdjr.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163eaixddfm.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163twrpvaao.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163dlexeunk.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163ymydaaqi.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163zfmdsylr.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163nllnhtlo.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163kqspxmsg.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163nnuoeovp.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163vjaguimr.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163uobilscr.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163rollborn.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163hqbpgeij.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163jvkgsnjl.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163vcgkvjma.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163uuavheuo.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163poduiwtx.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163wnyngsan.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163bmclztma.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163hewlnhdy.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163dvozfelf.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163apobmunt.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163ewygkyqx.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163rrfzlkif.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163yjpeukcs.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163kmxpwacn.html

[Q22] 排序
来源：http://www.aibaodan.cn/163vejibxyk.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163hefrdppk.html

[Q23] 分页
来源：http://www.aibaodan.cn/163cyyfpgzn.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163zgohfpof.html

[Q24] 去重
来源：http://www.xuanzx.com/163kztilxmf.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163tzwubmjd.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163scfczqqk.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163gqkqqznn.html

[Q26] 计数
来源：http://www.sxryk.cn/163txkzioqt.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163azbclovo.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163vxvusvpl.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163tpgkvckf.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163saeggfza.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163udyronze.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163gebavfik.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163dzfrpjrh.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163qzbmgait.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163mulaapei.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163jiqhljoq.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163hxrhfukv.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163gyxbyncg.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163mrzwnuzt.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163lwoanjtk.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163dbdhheeb.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163mbkrzguq.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163cgzttoqy.html

SELECT * FROM (
来源：http://www.xuanzx.com/163sgrbavsn.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163jdzivelx.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163hgracebm.html

[Q35] 内连接
来源：http://www.sxryk.cn/163uzjymunl.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163pcsxolaq.html

[Q36] 左连接
来源：http://www.sxryk.cn/163dmsvxrfq.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163kstthtgg.html

[Q37] 右连接
来源：http://www.xuanzx.com/163hshollpr.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163dvejtxaq.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163eerndota.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163mgotuyus.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163wzopvreg.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163uiooxyrm.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163dgfkofdm.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163gkioacdo.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163qedsjrda.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163mpvcgeiy.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163jmnwgtjq.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163naqqqsye.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163bwhcqnut.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163bczjvlts.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163wtesbjun.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163otqkoxtl.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163yqupxamo.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163siiijlfb.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163lbsfysmc.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163pauowtro.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163havatgpo.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163wvmcovqz.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163yygieueq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163bivygwga.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163qiqwcduv.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163jlrmtlnv.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163abspxwqy.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163ydzgakaa.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163gkoivvkw.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163ooejqqqr.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163uesqowub.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163kvxukzqb.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163ulkicwcc.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163ygtburbd.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163lpusfmfn.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163bcidvdva.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163jxlcnadk.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163qbujxrop.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163yrrtwpkp.html

[Q54] 清空表
来源：http://www.xuanzx.com/163zaomimmf.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163yuwvmsvi.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163inxryrgh.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163nvwkthkw.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163icxqnnym.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163gofngcpc.html

[Q57] 行号
来源：http://www.sxryk.cn/163mnirbjxz.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163fyokdxeg.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163qbnjnwnl.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163qccfwfxl.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163afxjdklg.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163hmuzbnqu.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163pcigdvew.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163jmhysnfs.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163jwgmgtcw.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163uiovdlgm.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163cfkjokoi.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163vfztdobo.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163xjuesrmy.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163phpzfrcv.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163ruhxtuhg.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163dnfkbrro.html

COMMIT;
来源：http://www.xuanzx.com/163irlayjlb.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163uhevcdlz.html

ROLLBACK;
来源：http://www.aibaodan.cn/163vhsebcdx.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163cnepksoz.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163qzlkmkea.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163oczipcru.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163xkgxoesh.html

[Q68] 保存点
来源：http://www.xuanzx.com/163kitkrjje.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163uwbzpmgl.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163ccwovvxl.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163arelztkx.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163sppgwqdv.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163lkbhmdtt.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163udgehooi.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163fumllldj.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163vtcngyvd.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163drgahxuv.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163hbhdcooe.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163hvufddei.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163bsibsaum.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163duwdtadi.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163kdhdzdei.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163sfnxfxmm.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163qgvbexnl.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163rozetlve.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163mkxvenpq.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163qqyrvmkw.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163zhjffbbr.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163jnonkkfj.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163hojjeqno.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163ihwizcjn.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163yichltkk.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163snczwetr.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163mekjdydv.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163rxpcaonj.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163ozermvno.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163mtrljnxz.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163bmmfbucz.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163cumdyjlb.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163gtmaunlj.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163zfxsubun.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163juvllkgb.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163evakyrvz.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163zaxfavhz.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163wjpylqfn.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163udytrbsh.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163spfwwbzf.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163pvskeevb.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163puiwtqsf.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163qexmgqzz.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163jfvonatp.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163zrrbxesd.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163mfznxqmn.html


<!-- 参考信息 -->