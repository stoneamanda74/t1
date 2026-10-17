外链999!wailian999！

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163unggdxsj.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163wkegilzj.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163sklsdetm.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163enyjgqrq.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163nprxlenm.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163koxbyzvb.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163wefyxejl.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163sbtxmaon.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163uauyojjy.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163giioiofz.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163qvijajcq.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163chrkfcpj.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163feluwmuy.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163qpoaeqtx.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163jrfqlnhb.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163tzpbvzjr.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163qqbalveu.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163mgcigwiq.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163finwxndn.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163hsezpnrw.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163kvfmmvbo.html

================================================================================
来源：http://www.xuanzx.com/163uirtuqof.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163jgnshwqk.html

================================================================================
来源：http://www.xuanzx.com/163kjuysezr.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163jtvwkfwa.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163twcddkub.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163tszyeppj.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163rihfkuzi.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163dwkxzcmz.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163nofaetla.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163urltdjye.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163dxrimyhj.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163gopkwsis.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163foehtpfo.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163xtaknmqj.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163wlsvggho.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163ytxhlzge.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163edibtpuf.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163uximtlwb.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163vbfjjjse.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163dpedfoqc.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163dbfckzlx.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163rzdlxorb.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163apqrcefc.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163fbvkrisi.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163wwoepvpi.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163bikppxzi.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163blttyxsj.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163cpijsvvk.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163bhnifyug.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163kxbnhpmh.html

[P04] 求长度
来源：http://www.xuanzx.com/163yailyvko.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163kdvoupiw.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163pqyslbcp.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163wjpdngua.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163kmcomypi.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163puhxeqeu.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163ganaerfw.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163qlhryarc.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163lrsjpfcn.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163jorekaur.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163otrclauh.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163gopuywhs.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163rmdehrwv.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163stadhdkz.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163qdmigasl.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163pgufnucu.html

Ruby: a == b
来源：http://www.sxryk.cn/163atjzchxl.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163wvvegphj.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163jszscdzs.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163bafdylhw.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163eqaaelly.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163isephske.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163fhfiwrhs.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163nsgvioun.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163bkdubhti.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163mruoujyo.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163zishidjs.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163mtrffddy.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163mljmxdws.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163fptbgusy.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163raqrusmd.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163cqsxggul.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163ypypdegd.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163ttfxcwgz.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163bppebvir.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163fnyalnel.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163xtjmawfc.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163eyyzhcxh.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163sqhdyahc.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163boygtybm.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163hwraknxp.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163zwrmkrkk.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163wwlewfzg.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163urdjfqww.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163mckxpxzk.html

================================================================================
来源：http://www.aibaodan.cn/163vdwasled.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163spqjdfqy.html

================================================================================
来源：http://www.aibaodan.cn/163hzwdzxeh.html

[Q01] 创建表
来源：http://www.xuanzx.com/163vffnycgo.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163uwuyayhj.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163hzowhhdk.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163ykxitafi.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163vvvnbddh.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163hrbryelu.html

);
来源：http://www.xuanzx.com/163sjuuyvrl.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163evzzubsd.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163xlgjmasr.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163zyntwhqi.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163wcrzwvrr.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163gcwaagic.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163hwixjqzz.html

);
来源：http://www.aibaodan.cn/163nrbixhig.html

[Q03] 增加列
来源：http://www.sxryk.cn/163fbtrhgry.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163ivxrcmit.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163zhepgfuh.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163mtzxtrpt.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163jemdpujf.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163wbhodwed.html

[Q06] 删除列
来源：http://www.xuanzx.com/163sbedmnnz.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163ewymhskp.html

[Q07] 删除表
来源：http://www.sxryk.cn/163uqaerqea.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163cpellceh.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163sxhesnen.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163dohnzqbx.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163gsvqdhhf.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163rfzoivmh.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163btixdpgj.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163vpisrsst.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163dccuexea.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163yjaexdme.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163rcaeaoyg.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163avqqtfan.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163irwhhdgh.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163gcrbbusd.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163gyfnsfez.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163bctexbeu.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163knucrnxz.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163iquuxtsg.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163fswxcyxe.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163wuyeodxp.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163aoagttls.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163wvwobstw.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163sizvbado.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163wtdyxzwy.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163qintosys.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163nrnbbqrs.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163uyqcalac.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163mkoawjuy.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163pchgbydi.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163okojhpfy.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163chssueeg.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163mahocxgd.html

[Q22] 排序
来源：http://www.xuanzx.com/163hwcveikf.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163xhcznpdr.html

[Q23] 分页
来源：http://www.xuanzx.com/163rurckzog.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163ktsqmeea.html

[Q24] 去重
来源：http://www.aibaodan.cn/163qhhoydic.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163oqvrnljr.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163zuanjsrj.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163ebgiiqqs.html

[Q26] 计数
来源：http://www.sxryk.cn/163fsmkusrb.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163dttrmwjw.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163oafzsoml.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163vyzxlpdq.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163vobzgndx.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163mnwhskgz.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163gnijlfnx.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163oclkulve.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163dehfznxw.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163aebbykwf.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163mjqmxryr.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163vwomluib.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163ublofaac.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163bhtholjb.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163hhzvfxxy.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163iidldfku.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163boyhlksr.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163ppqaxuhu.html

SELECT * FROM (
来源：http://www.xuanzx.com/163fpkuahgp.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163dibppvjc.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163vqbgxsqy.html

[Q35] 内连接
来源：http://www.sxryk.cn/163wkactifq.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163apndwpcq.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163zuamihuk.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163bojukylm.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163gpexstjm.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163yuiqhtop.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163nhkmaagh.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163wqyrtduq.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163wxixxuzn.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163pvkwwyjf.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163buxdegey.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163mwurkmfg.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163osaejcpr.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163hkqpnnij.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163kpamgbzt.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163ahfdsdgw.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163ypphobjv.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163tkolkgzi.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163uybkxkgf.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163bkruhkmg.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163zrzynqvb.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163lduraoul.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163ywtuvopr.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163iifrarhm.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163ixfseozz.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163tjvltxzu.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163vjfzpkwp.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163acwqhojq.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163qcvygvgd.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163aumhooca.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163axsqkcms.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163puhhnbgg.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163cdydmcdq.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163cnpygfjx.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163dzghljft.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163jilmlztz.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163nfruvzxy.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163iaybjrxb.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163yeisyqsb.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163ccewehee.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163alfhzrax.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163xievpwrj.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163zlsingkj.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163jlpmxnwj.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163gptqhljm.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163tywifhsg.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163dddbwngy.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163oufkqmrl.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163xqqfsmdg.html

[Q57] 行号
来源：http://www.xuanzx.com/163srlqwvlz.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163jovlpesz.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163afwodfvu.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163hlltkmgj.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163lmzfsnnc.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163rrihkdof.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163oraywvng.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163wvpfpszn.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163wxgjfbkn.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163tvceqsqy.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163dzmsfwet.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163rbgqqblw.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163pblxvbjs.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163ahabkxqz.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163kfttsjvq.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163czodlaig.html

COMMIT;
来源：http://www.sxryk.cn/163iqmajfyy.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163jkkowhxh.html

ROLLBACK;
来源：http://www.aibaodan.cn/163asnvkjwp.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163qihrfghr.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163scfkkxeb.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163cchrgdhr.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163mmrkqwrm.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163uzodmbcw.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163njdilhdz.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163zsstibdj.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163dfvsbmmv.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163alczvbrs.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163nxpqbbmu.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163wtizuxob.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163zlaluitl.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163elriucad.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163owewwhbr.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163rvhoejqt.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163rdukkwlv.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163hjrgftth.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163bwahpfei.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163uyujtkdq.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163eollorss.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163idutrxqo.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163amfbfjpf.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163bghdbwlu.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163eimkffpe.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163yrrelmpi.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163gjyjcanf.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163mdqvroce.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163xwwzpcwj.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163muttarhc.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163eijfbfus.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163xabtzgzx.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163uzvshqdw.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163utvwsfvm.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163bksilvqh.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163nvghxxvq.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163nlplvjsv.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163bmvcdffk.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163fxfgosuu.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163dakkwzxg.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163lblnabrd.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163jlramzgy.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163eewelcln.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163xispvuxy.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163mcjelxfv.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163pthcsmsl.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163twxxgskj.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163irvghpxg.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163whiqjcrv.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163nzsubogw.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163ujcnikyf.html


<!-- 参考信息 -->