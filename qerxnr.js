外链999!wailian999！

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163wfiazqry.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163neewuadr.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163jidtnxmb.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163xadmbjaz.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163mksfmiwx.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163fwnsaejg.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163mmnfyeji.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163tsdbuxvh.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163pvobauat.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163aqzrcrup.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163lbvacsch.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163rktwufbg.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163cahhrilt.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163fulenjcl.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163qrrjspgy.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163dvofswgg.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163rtezrnnh.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163nrfxjmnv.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163hialmuwn.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163npgwxjeh.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163ljbphnpb.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163agapoetq.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163gcyqutat.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163gaxbzamq.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163eoghczqc.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163vrfnzyzn.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163jidqbwmu.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163yttuhych.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163etlpcqmr.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163tjrqhwph.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163kiirtyei.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163seypbjdh.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163pkmlvvnv.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163aslbwpoi.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163opseowjo.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163rzmkhsaa.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163oieqkela.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163gairrecq.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163sbvqeyib.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163lblfwwsl.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163csxpmyih.html

================================================================================
来源：http://www.sxryk.cn/163knmthzkz.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163civrpngn.html

================================================================================
来源：http://www.aibaodan.cn/163ywmdmsmh.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163pwlzcmos.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163wsjppyav.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163jkncluqp.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163qlkiryhp.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163gkjfrynd.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163rxhfzqus.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163htnzvpfa.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163xchxqmqk.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163jxwewinh.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163gloykzib.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163adoawpve.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163noykeikf.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163sidbteyz.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163boofaehr.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163guoagpyo.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163cmyxgodn.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163mfwigjmp.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163ksyzlonm.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163feyoukpq.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163shswmqsa.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163givwlthu.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163xulnkwko.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163gulukfxo.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163utpzteyo.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163ekgwflti.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163xmxkuevk.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163qhvcqrun.html

[P04] 求长度
来源：http://www.sxryk.cn/163lftpfrio.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163negjxxky.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163segpzpov.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163vqehkdva.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ahsznphy.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163posgwxjf.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163nsbmqyfs.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163ovastuaa.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163jboaiprv.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163ijnrmibz.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163suuboauh.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163lyknwoqn.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163xnwrvqce.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163dpldnuge.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163dpjuqrnb.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163gtzxsgar.html

Ruby: a == b
来源：http://www.sxryk.cn/163bovrxlet.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163ydilnjkt.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163idktdtnw.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163oculezbu.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163ckifsism.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163vdkpksyb.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163bcyjouye.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163pqfvqkyd.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163aayzotit.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163zcmouqoj.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163smgaapnr.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163epoesdgi.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163evljhnqp.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163kzjhfvzv.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163vnooonce.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163krmjzeqy.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163pbxbfvih.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163kavcjvml.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163kpzbjtfr.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163cbqvpbhr.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163jkktcptr.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163rpdunush.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163kgyjyrkq.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163mcpoiqou.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163xwpzbpkg.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163fhrmqwqz.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163pnovaaxj.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163aspgaeih.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163vebhioog.html

================================================================================
来源：http://www.xuanzx.com/163tlwwjaya.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163nbjmytya.html

================================================================================
来源：http://www.sxryk.cn/163lnzkgxkm.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163ewgplfye.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163wmzfnzop.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163zalpofgz.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163bnbgnefn.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163nibshkrd.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163pnqyjisf.html

);
来源：http://www.xuanzx.com/163pnvmaxhx.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163ontsohoq.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163fqndgdtv.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163stzkhiho.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163duzuhrpf.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163lzecitmb.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163azvukjzp.html

);
来源：http://www.sxryk.cn/163cneheubl.html

[Q03] 增加列
来源：http://www.xuanzx.com/163wcphculs.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163lynojthj.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163iynellus.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163yvidwhkv.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163gkwwvrah.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163bicvpynv.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163bijomvyz.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163rxdnlpcg.html

[Q07] 删除表
来源：http://www.xuanzx.com/163yrijsoyk.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163mtfoxxzv.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163ebcvaeyv.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163koztkwds.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163praerjev.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163nqhnejpi.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163brfxhyvx.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163hboktakq.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163vwyepmej.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163ratuawnd.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163zzwqzrcs.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163mcihvqgu.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ylziqezs.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163owirdoxf.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163lhgzhgyg.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163ehqwzeje.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163pdtywbjq.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163rutdrmpz.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163nkpanbre.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163nduavuph.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163babairos.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163ofnlsfsm.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163gdfcplwa.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163rwwniydv.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163oqsqphlk.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163xbgriach.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163nwwwbinv.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163vjcfmern.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163imhhmrre.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163xxrvbmmo.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163mtlpgpjr.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163heopgjao.html

[Q22] 排序
来源：http://www.xuanzx.com/163sidnwgzi.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163odvtixxt.html

[Q23] 分页
来源：http://www.xuanzx.com/163baozrsus.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163xiafwmpb.html

[Q24] 去重
来源：http://www.sxryk.cn/163aqmhasmj.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163bsvdkxsh.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163wjzijbru.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163hppbmoqv.html

[Q26] 计数
来源：http://www.sxryk.cn/163wgadxikl.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163hxqgyxas.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163mkjsjukq.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163jvtcwfdz.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163lzxmkfii.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163xudckwyz.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163bnbedcrn.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163qktzcsxn.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163mrlkvzue.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163yotxejce.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163hudzjllg.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163gbjrbvyw.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163fsnfrogd.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163oypfqlsq.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163mexnjlmm.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163itlfqyhe.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163sdungqtt.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163gnqnvxmm.html

SELECT * FROM (
来源：http://www.sxryk.cn/163jqtxqpbo.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163ssgrilce.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163gnpqtosv.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163nlcksnjq.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ptssdyfq.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163ysquoslg.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163kkqwqwmi.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163awfwnaxv.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163vqlbucix.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163kpgcpibs.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163chmnadfj.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163yiwflhfj.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163uhwwetqr.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163oxhzeugf.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163rzudinky.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163kfoudpjv.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163xegivnlq.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163kfzqnhpr.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163ylsggoqs.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163mxspthep.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163lbjfwhoy.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163adnvqqhh.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163ffdyedfc.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163mctxducm.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163yakulvya.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163wuvshvye.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163wnnooqtv.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163lpljwpqf.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163uswjadax.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163gnlypsyy.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163cmfhtiht.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163ytjjahsc.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163pffxkska.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163aawkabai.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163mrdptyab.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163udxmkqns.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163qtrydnrp.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163wnehqgpx.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163ndqkbpxv.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163zfkagkwi.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163opzsgxxr.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163ziihoaqa.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163ltkfmfbm.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163qnnmeqxb.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163bltgkrwg.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163adygoxvd.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163hxstifki.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163qiqduzvs.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163rovjrdly.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163jvyownxt.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163xwmswtph.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163sjuprlvz.html

[Q57] 行号
来源：http://www.sxryk.cn/163wbyqqofi.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163yrkotdzg.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163tohtrtty.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163nlsnyehi.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163twlaaqrc.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163xzpyhwjd.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163sdrshuim.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163cpacghva.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163zyzwwijy.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163kkdmsttd.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163nhfiifcv.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163zkogbqbj.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163rakswqjs.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163uqksuyal.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163jzrxqpza.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163uneugkdu.html

COMMIT;
来源：http://www.aibaodan.cn/163zjuookci.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163bfgdlgip.html

ROLLBACK;
来源：http://www.aibaodan.cn/163ypothzdl.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163miqztszj.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163wijtdesb.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163oibughvc.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163sqfbgwdw.html

[Q68] 保存点
来源：http://www.sxryk.cn/163xgbuxlpy.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163tdczlfyu.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163rdqaspxn.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163jbtriczp.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163fmowtejc.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163ceuvdqwo.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163fynmvyxa.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163bntttnqw.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163wurgtlof.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163iflhgasj.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163psfcbrvs.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163ibdikprz.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163ucgwemis.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163iozrjvtq.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163uafosfcp.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163itlrmmqk.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163vfzjfcdd.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163uiiqdagd.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163xxswnfzi.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163wumcdjmm.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163jfdcasfd.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163dbbgthaj.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163lpujmdey.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163zhskutsr.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163fkyqvvhs.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163zckfyxwi.html


<!-- 参考信息 -->