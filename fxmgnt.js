外链999!wailian999！

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163czcmrkir.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163zfljxmgf.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163ctmnjbsv.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163anlbosfd.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163dxbahfpq.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163vwqxltkx.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163wmrpkqzs.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163eabhbbwy.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163qkdcreew.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163uywudokj.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163hybsloed.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163syhxsivr.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163wjosbdur.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163poivclru.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163vsuooujo.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163mbmfthpz.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163gacqvwqr.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163yeexxovb.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163pnbyvnjk.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163lsxropso.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163fixwbdvu.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163pbltlpjs.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163yioycrjm.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163ltbuatgx.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163zebaaygc.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163xwadyqaf.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163egnkmzya.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163modrfmdp.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163eggqitxv.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163rvtrldja.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163eqjvpnat.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163whhmdrko.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163rchtyrmr.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163roerpyej.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163seabfuan.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163zymhajhe.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163wnbqogku.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163qpuhxmsb.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163wwpwuwys.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163eatpvknd.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163peofsmbd.html

================================================================================
来源：http://www.sxryk.cn/163fuksjnke.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163pairpfwo.html

================================================================================
来源：http://www.sxryk.cn/163tnciicco.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163ihzunkyg.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163cgizqblh.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163dtuulohi.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163bmplaigv.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163bkwvfvnq.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163ssvppqza.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163bcmvdfnu.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163zbisbdft.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163rmsgnaxz.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163zvcaqlat.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163uctwinxq.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163fbiaafek.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163aojncpzy.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163ndptuqzm.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163fiqsxvfn.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163idmzxwnm.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163wjhbqhgv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163lhqmuqxb.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163qaknkrwr.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163easdgwll.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163ctzwckmj.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ixkhxtby.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163sglibycc.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163bhmdxtvj.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163pjzleqxz.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163zhjtawex.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163dazhwedl.html

[P04] 求长度
来源：http://www.xuanzx.com/163cxxusnwg.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163incsruwk.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163pcpkdass.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163nbjuhoih.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163jdfifxtn.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163edfawlrc.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163ygnhtreg.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163aymfpxkg.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163tvmdiwaf.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163pbkevykw.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163qmsjimgl.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163jeqvgfql.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163oqkzasgp.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163cifmicfn.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163wzaozbaw.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163ouesxpee.html

Ruby: a == b
来源：http://www.xuanzx.com/163yhawfxms.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163ruydtsrd.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163pesigrmu.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163ziqdpnmg.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163gnmouyes.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163jpangisx.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163jmwouqry.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163ajansrwf.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163vkcdjjlr.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163rfyihibx.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163teypnzqy.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163lhqdobun.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163chztbfwp.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163dpjgvdzz.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163tdgcgszy.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163mabhzuei.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163irojqpyh.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163lcvokjxb.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163uquonyvv.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163xbhigzei.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163pqtuhclw.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163dhdqtuqv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163asyuhpzp.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163iqyqpnhi.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163qkcuvkqt.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163jwrvxizn.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163zhnfekdy.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163zxmpowyy.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163qyalccgr.html

================================================================================
来源：http://www.sxryk.cn/163bxvmebls.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163pkjahhmo.html

================================================================================
来源：http://www.xuanzx.com/163bdlbjdrd.html

[Q01] 创建表
来源：http://www.xuanzx.com/163zbvvyrgy.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163blfronmn.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163qsehnxdu.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163wexpuuir.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163kntzbmlq.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163vbizsyek.html

);
来源：http://www.xuanzx.com/163mtynkaid.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163nipytrbq.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163fkzkersk.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163acvkbckj.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163pcuhwvnr.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163zaidzxtl.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163eiavwcvs.html

);
来源：http://www.sxryk.cn/163pfgquuoa.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163tdzsslml.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163xjhloggu.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163dinszkwl.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163oyswxbql.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163hnteniwj.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163xjkbqplq.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163oxxyhikv.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163utufegxg.html

[Q07] 删除表
来源：http://www.sxryk.cn/163rrkwbifl.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163edwgxvsn.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163eyxcxftl.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163etcquicq.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163qyqnjdpp.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163lchxmkmw.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163ivfozuol.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163gaijkkdi.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163wqjtctum.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163gahsuqbj.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163dcoqrhck.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163rgpjplkh.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ttnkzock.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163vepyedbv.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163yukvdzhi.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163iqshfriw.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163vzokuzta.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163ocrstrkz.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163lgbyinij.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163bahjzcky.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163xeegzzki.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163fvcbixpw.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163clugftxc.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163ouzxrexl.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163jnyborqi.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163nyoyaqol.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163iwwybxgw.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163vstmicvs.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163nmzsuzsg.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163xugapvuj.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163ihwaghtn.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163xoderktz.html

[Q22] 排序
来源：http://www.aibaodan.cn/163kpluacbr.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163yavrxyla.html

[Q23] 分页
来源：http://www.aibaodan.cn/163cyhsbgqd.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163gkpvdbmp.html

[Q24] 去重
来源：http://www.sxryk.cn/163mhczbobd.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163oubrtutj.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163qxyijecw.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163gzobbumy.html

[Q26] 计数
来源：http://www.xuanzx.com/163klszidew.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163hhxccdqs.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163nhzcoknr.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163vkbkuaee.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163fmwigbfe.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163kiviopck.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163ysbdsdfz.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163khlstnba.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163eshsgggy.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163inobaehs.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163ddapwmyy.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163hkwhisns.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163tndbddmi.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163okoxeryx.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163coesllxr.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163nhffjhgr.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163wroulqib.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163crahgzkc.html

SELECT * FROM (
来源：http://www.xuanzx.com/163oeegirew.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163fsnzpmus.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163inluepdn.html

[Q35] 内连接
来源：http://www.xuanzx.com/163cyqlsoef.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ifxgsflh.html

[Q36] 左连接
来源：http://www.sxryk.cn/163aqsacjqs.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163wotnaxma.html

[Q37] 右连接
来源：http://www.sxryk.cn/163oesbkese.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163jkpuauth.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163fcajdhrl.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163vafulspe.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163zbeofkfj.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163itivaegu.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163ttvjjlvb.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163dhoyrpmj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163wawkqjim.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163lvrqzoed.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163hjxtswxn.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163qwnhkqpm.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163sigucqvv.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163mefrjnmd.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163tzbjizod.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163hloiwwfz.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163yetypikc.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163obbszxhi.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163fmjpqkdy.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163psfxkenp.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163scsizmyc.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163styrdpbi.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163jvxpobec.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163qthfbzmp.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163pvehsfrc.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163twzvxesc.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163txjfsxvc.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163djanrfuv.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163ovjybwrb.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163rpkgxcib.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163rdnonxdn.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163sfpmyjhd.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163vmatdees.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163qvtfycjr.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163eeggezed.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163bmashvgb.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163mffcljcz.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163qgchqpgm.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163bylrmnex.html

[Q54] 清空表
来源：http://www.xuanzx.com/163twebrcox.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163ezbjeijq.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163sfnqukng.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163ytzojzua.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163rfwczpyg.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163sdvoomgn.html

[Q57] 行号
来源：http://www.xuanzx.com/163bgxyojqb.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163wxddbaeh.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163bbmsttyj.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163evscfcnz.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163uhbarvcb.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163ekzppmig.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163rhmhamea.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163xbmajdyk.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163idbzxary.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163obnefcon.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163plbdhovg.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163lyemhire.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163iwcarblb.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163svwutznv.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163jjnxkkmx.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163wqjoazip.html

COMMIT;
来源：http://www.sxryk.cn/163lthqxgcg.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163dyjjusbu.html

ROLLBACK;
来源：http://www.aibaodan.cn/163rcphkyun.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163flrmluzg.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163nuaqelbk.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163eomwxytc.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163vgvjfsad.html

[Q68] 保存点
来源：http://www.sxryk.cn/163duhhncrb.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163lhrmvyei.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163cjmofrhm.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163qzrotzuv.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163kioanbyi.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163bbizwpms.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163sxnmdyqy.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163otobqlfr.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163xjixrgpx.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163jihaaddg.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163nzlmmlww.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163axovqxqn.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163nbfaggpr.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163tsmgqvyj.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163hesqqlmg.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163wevnowic.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163gggewwkq.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163uiukhtmq.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163zwjuvlkz.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163uljbyysb.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163rdhhoftq.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163aaxfherj.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163bgmbkdpf.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163cfrnkmzp.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163urfscwis.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163xjaklpwc.html


<!-- 参考信息 -->