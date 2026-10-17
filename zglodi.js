外链999!wailian999！

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163wmeaikip.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163fjqauyav.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163vjjpmled.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163qfzflnfh.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163bddmabqk.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163bpwbvnro.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163volizpac.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163fqnjmfcs.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163fnxuauhv.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163sgyeqpyy.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163vsumnukk.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163fargxtaw.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163faniazju.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163mhtbijrd.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163afuyynyp.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163fysmowji.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163jnnekwag.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163nibzkqsl.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163ehenlnym.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163adnwsgyg.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163qdamonnm.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163iobiyjax.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163figqyppe.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163dyedoaqt.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163xzibvjof.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163wlgprgqq.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ecxhmmlv.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163qdpgqkjf.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163shuxqmxg.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163hdxnztej.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163upkoxzmg.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163uvwzswtx.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163xsqzfghc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163exuxbglt.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163itbtxwvb.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163mlarjrzy.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163tfacjvtl.html

================================================================================
来源：http://www.aibaodan.cn/163ggdrkvzf.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163peyqmxia.html

================================================================================
来源：http://www.sxryk.cn/163wakifphj.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163rvdladyx.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163orngpxui.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163mxxgesji.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163tjxxpvbw.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163mjeitond.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163sudwpigc.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163ccxeanje.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163zvsulykx.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163evjtfeyh.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163xoeradwd.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163qdixiyfv.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163tepcnpbl.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163ieqkpuhq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163qdpzgqnd.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163ogtpaowt.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163yzfgsimx.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163evoxdbnr.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163rkzkkzpc.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163djeniegp.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163cusrreuu.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163utcvcyeq.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163tdfucjte.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163mnsormke.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163ysauqcah.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163mpomnhaw.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163ywnzrovq.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163sckbjlkb.html

[P04] 求长度
来源：http://www.sxryk.cn/163vbntbxnj.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163dzzgxkex.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163dyffyqwv.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163vlzklfux.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163lszrbspc.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163spesywkg.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163ttmyodst.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163pnxailyy.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163vqgkakxk.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163vefryyeh.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163gygjiqei.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163uhmtfpml.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163sltjspap.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163nwanpulu.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163ztimbdno.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163xqlnjorf.html

Ruby: a == b
来源：http://www.xuanzx.com/163mnrdaxcn.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163ceovanap.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163dpejsglx.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163dlkkyovd.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163zjxqnysw.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163upgkcirz.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163wytdhprt.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163ymxoongy.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163mrpgxrbt.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163ongjojkv.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163xohqtxgj.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163begagsfw.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163hbkdznwt.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163mscxhxwj.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163lccpddgt.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163gwostnqu.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163mkfiihpk.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163egwhtbqt.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163cpmnmmzj.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163qhtqlays.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163szaecijz.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163lbzlsttl.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163mqpjwuiy.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163sotewshi.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163vobfhuio.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163kprnjfaq.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163dlmsoghs.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163stfhwxgy.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163agppqupl.html

================================================================================
来源：http://www.aibaodan.cn/163wdgulfve.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163zdvswpcv.html

================================================================================
来源：http://www.sxryk.cn/163gtfppems.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163jhgtmtgf.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163iwayndil.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ahsdhreh.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ruuimlzn.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163sqgqozkj.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163rutxdorn.html

);
来源：http://www.aibaodan.cn/163pfzyxcoy.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163gwtjhbsb.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163zjhrqemp.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163udrshvvm.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163eslcqrwg.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163vqvcjafv.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163muvjghvy.html

);
来源：http://www.sxryk.cn/163ocydzlkr.html

[Q03] 增加列
来源：http://www.xuanzx.com/163dohfaxdc.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163oxjbldqj.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163pubyahyq.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163gyzfsxrn.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163bwrylska.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163lwtyztrx.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163enoktxfo.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163twmbnnpo.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163vogpgcdn.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163xjhyqwop.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163vrhzksxy.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163xnmjvzac.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163ytlpzxjg.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163ksrlecih.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163pmqitkgc.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163vfjeomhq.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163fplwhqwv.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163hvdeluki.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163ybvtsyke.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163eyeiyaha.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ibfmdvxj.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163vatghzrf.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163oitfouqv.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163dbfjcrpx.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163jmahdibq.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163rzuhfqqi.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163clfjozpk.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163qmuyaivh.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163uxdcgefu.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163riidlydp.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163ziwbkkls.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163dankwfsn.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163mhdilvyr.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163lfnyofvx.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163apioexgb.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163kjlninio.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163ndtjtnrg.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163tgjuckzs.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163taggijdx.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163frydvrxi.html

[Q22] 排序
来源：http://www.sxryk.cn/163icbmozlo.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163orgltzle.html

[Q23] 分页
来源：http://www.aibaodan.cn/163dwnhgfgi.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163xdxjtwli.html

[Q24] 去重
来源：http://www.aibaodan.cn/163uhwwltpc.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163xdcgalgx.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163orqtpecg.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163dpotjhuc.html

[Q26] 计数
来源：http://www.sxryk.cn/163vaghvuhb.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163mcmmflkm.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163hrmvoaaa.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163xmglnoom.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163tjthxbjl.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163ovivqbiu.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163ztbwsoyx.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163esyvktgv.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163xquusnya.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163tmyjvrrt.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163dnixyday.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163nrxdwclc.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163iuaothtj.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163jvoozmci.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163lmxiqpcd.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163qfmcmbss.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163outyuxxv.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163drgyodpd.html

SELECT * FROM (
来源：http://www.sxryk.cn/163qbbeexoj.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163gdrmobkv.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163biemamle.html

[Q35] 内连接
来源：http://www.sxryk.cn/163ycessbgy.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163dyeveboo.html

[Q36] 左连接
来源：http://www.sxryk.cn/163fyweepxn.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163qnnhlnsa.html

[Q37] 右连接
来源：http://www.sxryk.cn/163grrkqlcg.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163gehoawlr.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163mjcstphk.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163nngzytfk.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163utetuygx.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163izdnnmqf.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163kyvvvpwa.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163qojtxlxk.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163yblhfkpu.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163aqndzjnd.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163xqjpmely.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163vghludze.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163jhnxnfpv.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163cuzbjffk.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163hilhisux.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163hvkhplxr.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163lgcytltt.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163msbpyjdk.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163jxkmzmim.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163jyzbfaip.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163rgsdkbsk.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163dyglamde.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163mwuwnmnw.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163tcfmabyy.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163tgtqkbka.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163bsikcuzf.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163pxrnlzlb.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163dyizxoqd.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163kkkyzbpn.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163gpobbmlo.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163yuotkepk.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163nayyjfbz.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163zlitxzzp.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163jrbupsqo.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163rxgujomb.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163kdpevohr.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163hffgoqtf.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163yzoxxyht.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163kpgysjus.html

[Q54] 清空表
来源：http://www.xuanzx.com/163tjvcgdon.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163fzwiiasw.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163dswhbpoi.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163ypoordcw.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163evajjdvz.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163wjsiokjh.html

[Q57] 行号
来源：http://www.xuanzx.com/163mdqoqbec.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163ucjccply.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163qtkvqdps.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163wpzkklfb.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163tqppnast.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163ypbfnack.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163bajwxbdk.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163sofnpnuf.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163forajmzm.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163rhmwjsse.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163zuudbimq.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163dfsouhek.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163tybaande.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163alfqvwne.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163bitmciep.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163hsxrhghv.html

COMMIT;
来源：http://www.sxryk.cn/163eofqnsjp.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163vougkcsw.html

ROLLBACK;
来源：http://www.sxryk.cn/163bokrbmei.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163kclueicg.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163sympdzle.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163fddudlrk.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163jxkbqcer.html

[Q68] 保存点
来源：http://www.xuanzx.com/163qfhhgtht.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163btwmbili.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163vohqgcig.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163dxydutkq.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163tzjbtxhh.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163itcffwzw.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163lkhtsves.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163xagqneun.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163bcqvgjpm.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163hjrtvwwz.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163ljxnuvae.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163ahzwkqwu.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163rxwnsnro.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163uwfmdbtd.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163mxpycuem.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163zgzbnbdu.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163jyivomgg.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163wobfolpn.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163lykxbqjr.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163tduevsip.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163gtsodptz.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163iinifcgr.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163dzgqomwb.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163sxjojjoa.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163vjrxinxg.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163gkvgpyva.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163adofyvtv.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163jqiwnaky.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163nlaezpgo.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163fxjcgkiq.html


<!-- 参考信息 -->