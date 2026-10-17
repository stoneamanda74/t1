外链999!wailian999！

================================================================================
来源：http://www.sxryk.cn/163kthysxrt.html

O. 并发与异步
来源：http://www.xuanzx.com/163ykeflefl.html

================================================================================
来源：http://www.aibaodan.cn/163lqoazawb.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163akreykuc.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163yofvueav.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163adernyvf.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163lmwricxc.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163nudamnyd.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163avyqzzfx.html

Go:   go f()
来源：http://www.xuanzx.com/163wrcwlwqy.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163zsdeifqx.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163horaxrki.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163syyaemzh.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163kaqtosmp.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163woniejti.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163wwprwxll.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ocrvpzre.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163sszcxsmr.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163vqzugica.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163runhjxdb.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163pmxjxfea.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163ntxozisz.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163vkxggime.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163uxvgriws.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163puzgrwlx.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163iqnsoate.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163hsdybnph.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163dhpnqtlk.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163gjdtktac.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163ghzrewcg.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163zqpjxlni.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163ufaevjcv.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163brksbgop.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163dxhrixrk.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163yxxihxjs.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163rsybzutx.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163hswbipid.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163rcewsjwt.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163wybhttlm.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163qgaucuck.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163njxrptel.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163htzpcydy.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163xjecxocp.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163sndjnysn.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163ghkdbcul.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163npzttpye.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163uokmbomj.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163uqgffujb.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163qoeajxdo.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163yslhxnha.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163mykmkgdz.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163fgoejlwh.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163pqtpubjp.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163jaifjkvz.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163tglmbidd.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163buwooaku.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163ipebiycr.html

================================================================================
来源：http://www.aibaodan.cn/163ijmqbdbi.html

P. 常用工具函数
来源：http://www.sxryk.cn/163lgwimekh.html

================================================================================
来源：http://www.sxryk.cn/163pqowrmyc.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163iljnzwul.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163vrtcvxoc.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163nzcqcadf.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163zczoaxxi.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ihpoizou.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163ybfrukso.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163zeldmswp.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163duvhnnsl.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163ripjqpzf.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163qhjrnezz.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163ytpibhav.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163qmqbemcb.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163pnvsskfs.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163qunkkdeb.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163pcdrlyrf.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163ufhgmhdn.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163ijpsfjdh.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163strwkukk.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163pscmyssn.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163gaefyuou.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163oherjfcq.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ziqiqkck.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163zzzhyvwo.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163benchxcb.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163rhmvjcdl.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163jihabfxp.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163lfctuchp.html

[P04] 求长度
来源：http://www.sxryk.cn/163relskzfp.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163mtxmzvgz.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163fpfrccvf.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ulzgmwlp.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163mmbevgyk.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163tsmeruun.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163wpgcbucg.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163auvbghyo.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163oetwegxo.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163dgilsret.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163cyjcgvbc.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163debsgqsc.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163oyypqikx.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163wlgfcsoh.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163rcnyygzu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163gljifudy.html

Ruby: a == b
来源：http://www.aibaodan.cn/163oevohbbp.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163gylakbdk.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163ismclprw.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163cmxxddjs.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163rqnjdngp.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163erakyctq.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163lvpbdtse.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163owghevlm.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163rrlrfxln.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163jupgpzgw.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163awwqocub.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163mlqvsaol.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163kerxsskd.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163sxsahsil.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163xomfsuzn.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163pgdhrbew.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163vfzbqmeh.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163ewciviba.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163bmzhmugq.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163jocaozwb.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163ttgrktve.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163tgnrtbzv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163zniramsm.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163mycspkyt.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163olqavzug.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163nlojryht.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163utllwdnv.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163xxzazusu.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163cglvlavu.html

================================================================================
来源：http://www.sxryk.cn/163faoadbsa.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163prgwiwjd.html

================================================================================
来源：http://www.sxryk.cn/163fkimpryl.html

[Q01] 创建表
来源：http://www.sxryk.cn/163kdplmyci.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163drcjdrcy.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163cgxooxus.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163fwbubeou.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163yfdoysxx.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163xuzfzdnv.html

);
来源：http://www.aibaodan.cn/163tjqmzyci.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163yuqgsclw.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163aydsqkfr.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ragjwmfi.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163smskedfs.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163wuuplbfs.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163hhpbpxrw.html

);
来源：http://www.sxryk.cn/163lmaodppq.html

[Q03] 增加列
来源：http://www.sxryk.cn/163avyzbypi.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163uwlvnwlv.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163hetkloaq.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163uwvuciln.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163dshyosqn.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163tvorvxic.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163yuvtxxas.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163ocqtvjql.html

[Q07] 删除表
来源：http://www.xuanzx.com/163jpavxzae.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163skbreedg.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163zumersst.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163wfrftiik.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163jmyeelei.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163ecpdezgm.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163dcwmnxil.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163ucyayfxx.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163harhyztk.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163ivlljfcl.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163cafwtoxb.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163tzhyumdt.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163tpecsmqu.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163fnomgjdo.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163dggfkbyh.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163lfpysnng.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163bqmizjks.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163ujipwwcl.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163bajvbgcp.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163mbwemhro.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163zwmvymto.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163qryeqips.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163hmbouwmq.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163kcfvqocd.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163ajxppepq.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163qwakeudq.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163twkvqzhn.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163xsuktagu.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163yhcpcpfg.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163mgbznsts.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163lgvhynpj.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163fetowyts.html

[Q22] 排序
来源：http://www.sxryk.cn/163glncirlz.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163sdmqjkbn.html

[Q23] 分页
来源：http://www.sxryk.cn/163kzpduany.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163qlxqrxzr.html

[Q24] 去重
来源：http://www.xuanzx.com/163vusmgtci.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163mxbbpuhr.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163lnpisdyl.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163qsqvusab.html

[Q26] 计数
来源：http://www.sxryk.cn/163bdywpkyi.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163yixxedmj.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163etntgbpa.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163rkrehbod.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163btbawcmg.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163azekkaul.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163sdzxqcno.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163xebctsra.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163apughwuf.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163kamoyfvi.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163hdlywwmf.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163vhwjuaqq.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163akyyauiz.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163esbtgfjr.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163eseseren.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163rzaabeef.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163vstujnva.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163acjfrjip.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163mutqvlwr.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163wbghsrdg.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163wnpwchts.html

[Q35] 内连接
来源：http://www.xuanzx.com/163pwycznzr.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163rxypvqte.html

[Q36] 左连接
来源：http://www.xuanzx.com/163outiqzmp.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163tfvpmgwa.html

[Q37] 右连接
来源：http://www.xuanzx.com/163hdskohqa.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163trwuqlti.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163jcwqnnir.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163lnohejkl.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163jciobwnw.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163mrwtoqoi.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163diwhcoca.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163dazebskj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163zmellvsf.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163bhtdiwlz.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163hlpenwtr.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163ovtpyniu.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163owfqkkbf.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163zgnqmutn.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163vyphzcei.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163wwbavhai.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163xwvrizby.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163jwdtvvpp.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163aljjqlgs.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163fwgoepaw.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163gzuqguqe.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163hxzlgirm.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163vwrazdbu.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163tmzntkvp.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163vlyresrq.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163yvmvckun.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163wzxdlklk.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163ykjamkay.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163haiywuks.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163yxwslafe.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163syxcvill.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163mzjkhjth.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163nhpudafl.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163mxrfyrpr.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163cilytrcc.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163fuydebya.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163nzdpqtbz.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163tcanyazr.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163qvpnkyfz.html

[Q54] 清空表
来源：http://www.xuanzx.com/163fmqugrem.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163flirpxdi.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163czzwjrsb.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163evdojvwk.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163awqhowxb.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163nlwbhoqa.html

[Q57] 行号
来源：http://www.aibaodan.cn/163fttykeky.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163rtvwrcnn.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163hklbsmgf.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163hsbjwgrx.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163iiomopxq.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163umpannbc.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163ffarnlsz.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163vtxrenct.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163nrnmwpeq.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163ysvqqknl.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163lfhrzaxg.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163sdqliqyt.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163nsmvolph.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163swtmzmje.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163wkmkqwbn.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163iwesbslo.html

COMMIT;
来源：http://www.aibaodan.cn/163gwazlvqb.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163qbhudihy.html

ROLLBACK;
来源：http://www.xuanzx.com/163kbwxbzav.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163fwxqlcou.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163srrjeavm.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163hnahtvxf.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163eicakebw.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163xreigxsu.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163wnifmgtu.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163gdctwdyo.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163xknbrbka.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163gcgjywve.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163ysenbecs.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163hngmajfq.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163cxgyhkvm.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163kbwapabc.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163dmlwrvhd.html


<!-- 参考信息 -->