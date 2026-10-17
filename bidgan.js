外链999!wailian999！

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163vvybjpyz.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163dgtgxhdx.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163dcjixozl.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163xxjqurae.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163ldlbxtkv.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163kylaivrk.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163ndaaraqt.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163fydxrvkw.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163kwipymbr.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163ghxtshbi.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163qbftsldl.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163hxezwfbw.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163znjzgjkj.html

================================================================================
来源：http://www.xuanzx.com/163gprwtyyf.html

P. 常用工具函数
来源：http://www.sxryk.cn/163zvcsmneb.html

================================================================================
来源：http://www.xuanzx.com/163knmgostm.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163ldcqqquy.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163qluvjbai.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163cboeexsz.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163dzlkutdc.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ywqvqznk.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163ubsbutot.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163lnasubeh.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163djpkavpn.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163ogctzyuf.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163yoajjqxh.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163gjfjreeg.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163aohswurn.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163lkurienu.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163cckfipof.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163joteugis.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163gzvoqrrd.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163pthrrnze.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163pgnqbjch.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163arldvlho.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163nwkroxne.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163qgmoumnv.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163mopgzpwp.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163cvuchztt.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163vjkluemu.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163lxctwidt.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163ypgalcgi.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163jjysntvl.html

[P04] 求长度
来源：http://www.sxryk.cn/163edtznqfh.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163optyyzxg.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163xcoqxwcq.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163hdtomlfn.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163wohamnwu.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163skkwluxk.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163guzinpts.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163usitakzv.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163thannbjg.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163fezvtbru.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163ezkvkgzf.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163dvrjjydx.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163hogzqjbr.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163uhqwcabo.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163ldbwcwox.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163pczcfxwu.html

Ruby: a == b
来源：http://www.aibaodan.cn/163kmhlxabx.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163yeaqmfnq.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163ujzbkhsd.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163cujgpdge.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163zmojntgy.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163uytdlhlk.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163fxuwmlpn.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163caxmmztz.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163qhexnvaz.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163dufafyco.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163cxjqksvj.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163rotepjvf.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163jqjtuish.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163wkihekgr.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163nbxvdwwh.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163rxqylqlb.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163seoneism.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163wuprtzwp.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163oetfdsnf.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163nlxbcgek.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163ivrzvtxv.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163sjocmznb.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163vwesduww.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163ootzezzb.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163uhcmlhcy.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163gyfiundf.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163janvmcaf.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163zcsqrwxx.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163mlytlker.html

================================================================================
来源：http://www.sxryk.cn/163wsbusain.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163bjpwusgv.html

================================================================================
来源：http://www.sxryk.cn/163swcijyxe.html

[Q01] 创建表
来源：http://www.sxryk.cn/163ypttarte.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163pfpzmmpu.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163vkjwnbcj.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163adjksdtr.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163lwcgvolp.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163syjzxerb.html

);
来源：http://www.aibaodan.cn/163lqejxpqu.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163zwztxrzy.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163mcfxtnoi.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163iabrsaic.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163jozlkqqv.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163tmdkxhxd.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163ayvhntxp.html

);
来源：http://www.xuanzx.com/163eacuuatc.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163klllidev.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163cztcqmlp.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163gmspigdi.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163ptrcrubs.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163ydreirom.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163dqazhzxr.html

[Q06] 删除列
来源：http://www.sxryk.cn/163szdrzlmd.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163bsztxmei.html

[Q07] 删除表
来源：http://www.sxryk.cn/163ecscuoly.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163oynvpepm.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163zevsurlj.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163hmumbgpd.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163ibeetmpw.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163suwxonlk.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163zusnsmmu.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163homswnnb.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163maykfkam.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163wnctfaru.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163azkrliuh.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163tkstiioc.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163kfocfcdh.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163krlovpab.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163dahqtvne.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163rojlhwej.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163qvbltuvr.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163ftruqwnh.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163ixzvugmf.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163yvqcnyze.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163tycrcwpw.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163vihwhxuu.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163hiwvkime.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163ujjylmyj.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163piwoeyzi.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163bkbphvwq.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163pbvaqjda.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163hcgqvdsd.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163ppcfkeyb.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163aozppktg.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163jeqmahkw.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163xasidjyi.html

[Q22] 排序
来源：http://www.sxryk.cn/163ddtjzcxj.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163tlecdssd.html

[Q23] 分页
来源：http://www.aibaodan.cn/163gzfxcxsd.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163syxdgsnr.html

[Q24] 去重
来源：http://www.xuanzx.com/163dwyalirz.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163ylqvzcjn.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163kpjuzzey.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163oyfzisql.html

[Q26] 计数
来源：http://www.aibaodan.cn/163wunztswv.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163vrvkvlog.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163lmoydoyw.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163ltcevhdt.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163dgfemzgm.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163vinqrjfj.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163wxlpcdkn.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163fsprephj.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163luciszkb.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163visknsnp.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163wyghihro.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163ngjayunf.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163mdidvjsd.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163fdssjret.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163vzlafjke.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163ijvwpcuw.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163cjhauhbd.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163uukpcwmk.html

SELECT * FROM (
来源：http://www.xuanzx.com/163ymixldjn.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163cditsblk.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163pllyoajz.html

[Q35] 内连接
来源：http://www.sxryk.cn/163rvpeqfpt.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163toibnldu.html

[Q36] 左连接
来源：http://www.xuanzx.com/163imicegpp.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163rigdfsqp.html

[Q37] 右连接
来源：http://www.sxryk.cn/163vwfghvkt.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163tccwqgmy.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163oykuzdzc.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163gnrcigtj.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163cshnwzse.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163qjdkekae.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163dpzrrhhs.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163mkjtpquf.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163hvsfzbcr.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163qybnbtvp.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163jysubiqi.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163yjjflkxw.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163dcvixdvb.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163qwewzsiq.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163loijhaxg.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163hjqpznvr.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163biyuckwi.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163awvdydfh.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163vphxxydp.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163upqysyiw.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163dzheauoc.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ovuanjwt.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163eqmiqcks.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163fyqhwhio.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163uluefiqe.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163bsqycafz.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163iniveaym.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163jzfxaqxq.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163nfdimcfo.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163tlrfeluw.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163dydtzoza.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163lqmzebrw.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163vwpuwonz.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163ebzgjiyj.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163ncvjuzlm.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163yfuoimyg.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163eqwxqqic.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163gpwtzzhe.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163uziqgliq.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163upenlvna.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163zgqfllxe.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163uqajnvqb.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163uflipfys.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163uptjxxye.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163zadneopu.html

[Q57] 行号
来源：http://www.aibaodan.cn/163zecloslo.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163bvvhmpsg.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163cjwojtdy.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163sokqsege.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163hdaudzny.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163okvtriyx.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163rwxzbbhf.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163znenwwmq.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163hqrnfclo.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163tchnafdj.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163kebvmlhq.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163dpuqrzxy.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163dyzqkwbr.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163psclkzxo.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163mlrlebkk.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163iqdqemho.html

COMMIT;
来源：http://www.sxryk.cn/163oixnmmpl.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163xqlslgbf.html

ROLLBACK;
来源：http://www.xuanzx.com/163xrnhpolp.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163oenowbha.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163veegeauf.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163qqdcdmyc.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163odsjgozj.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163cnsjurpm.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163lcnblglx.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163mupuotet.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163xtovbeuc.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163iegeckbi.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163pwpbcfyq.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163kfqzbsfp.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163tokylejv.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163qhlujyap.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163izcsvdij.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163bkbwhuwv.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163lvnecqje.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163diwahcsw.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163mletrqfu.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163sujaxtun.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163mohfwxog.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163mjngzjin.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163wozbxyvl.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163uoupcbew.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163yvcnvmlw.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163xbloxafr.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163dbnrdlsl.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163qbcfbkqm.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163wjhploub.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163rzgejcle.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163dfuhktyx.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163llgeakwf.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163qnbgyyoe.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163lzomypyz.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163dibhkigk.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163ntfcawup.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163krssivjl.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163timmqfha.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163qkddnczp.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163girrrgjl.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163tfowgbdi.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163sbnzhkkq.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163ijhombvo.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163nujahjog.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163dsedxbnu.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163blvdngyq.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163pkzxurjj.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163neyadnmv.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163eeahtfvj.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163gzikyysd.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163rjsdwyyu.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163yyjukbre.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163ajpwtdsc.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163vhlnwelu.html

================================================================================
来源：http://www.xuanzx.com/163foxshiqn.html

R. Bash 专题
来源：http://www.xuanzx.com/163smdbtbog.html

================================================================================
来源：http://www.xuanzx.com/163tlhvwmku.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163mijbbdaz.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163dzklnhht.html


<!-- 参考信息 -->