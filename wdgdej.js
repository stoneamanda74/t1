外链999!wailian999！

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163llqchdqo.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163pgxaxcib.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163quzannto.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163jvniufjx.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163jmgisxew.html

Go:   go f()
来源：http://www.xuanzx.com/163drxnkyuv.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163vfauqivl.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163rnkkgmcd.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163uwtcjvpf.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163ztyiwxrt.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163pdebtxvm.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ppgbdkfk.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163zukmhhok.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163ubdpklzg.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163zspffujj.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163tcfcawtr.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163eyuektiu.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163iaudvipw.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163slbvmnll.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163sxxbhjkq.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163vuxzwfjd.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163yxstlplc.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163aboubvwa.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163ozvogabx.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163citwrwom.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163yyfbpjbi.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163hfrbmjos.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163znxknanv.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163qenliiif.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163ifccciwd.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163jesxclkv.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163mgpytdkd.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163zyathejy.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163nhmbjhpe.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163mhwhuhfd.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163crdubvwp.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163iesjoodi.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163ennrwthb.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163kfwrpwpz.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163yaojmxhy.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163ekxewwqg.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163pbjktzlc.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163nlfnniko.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163zyfbonkp.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163zqjvelct.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163alcmvvto.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163hkyzwdbm.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163jlzpbkiq.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163yklyaqgh.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163mymxvdbu.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163yqhhdiob.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163vxkzoeyl.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163cbfhpkei.html

================================================================================
来源：http://www.sxryk.cn/163lwuvnles.html

P. 常用工具函数
来源：http://www.xuanzx.com/163gcxharub.html

================================================================================
来源：http://www.xuanzx.com/163hjdzgvkq.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163aowgroyu.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163yarmxabk.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163xwppgfik.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163mwicaefe.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163lvqfrkgp.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163ctkckwqa.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163ixokpnqe.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163fdswcmug.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163xsnlydqq.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163axihwqxl.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163drhcvzzc.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163jloxgibb.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163ckcoocix.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163tncfipmb.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163rrxoajdv.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163iqvvzbga.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163mclluvrv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163jfftojpd.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163sdromefn.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163fzcjqvfb.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163ankqyhvt.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ilyqlwka.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163dfrkeffm.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163wldvkikk.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163mguagxfc.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163gboyvzsh.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163eyeaplwp.html

[P04] 求长度
来源：http://www.xuanzx.com/163mcqvttrt.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163rardltej.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163zapgbkht.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163zvmdfjbo.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163llzzkvag.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163rqdblwgq.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163lwkmckfn.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163jkobewxy.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163wzakwapq.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163iskyqfas.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163vmeucham.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163yviowcix.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163oofwgkjn.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ufmmfucy.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163qnbsyoto.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163yacbubcz.html

Ruby: a == b
来源：http://www.sxryk.cn/163xcjhwxgg.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163ablxfufl.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163gxfftjgq.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163jrftxzug.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163tiopdndd.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163endxlrlr.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163hhmughad.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163altliili.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163kmjuljof.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163oxcakxhw.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163qgrsxjgy.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163yvoxzcuk.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163rxuxvlyh.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163qdrtfglp.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163hjzekysh.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163crmgbyds.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163zcjzoebt.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163ulkeyygo.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163etemoczt.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163cvavnfzx.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163oaupdplt.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163xehzyqrk.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163enlhfasm.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163wtblycqx.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163irmihkqp.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163ibyfitga.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163mmbztxnr.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163caapengh.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163iedouxln.html

================================================================================
来源：http://www.sxryk.cn/163rdnxctjo.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163hvthcmjf.html

================================================================================
来源：http://www.xuanzx.com/163jbvhmenn.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163efzjeoqs.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163qsbndmnw.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163vgxaavyv.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ikxulzks.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163wcwsqkst.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163xzbtchbb.html

);
来源：http://www.aibaodan.cn/163mwjmqaae.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163xfwcbyms.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163gfczibwi.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163pfnccnkr.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163syycbrgy.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163ojbpgqhc.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163onugznit.html

);
来源：http://www.aibaodan.cn/163hoqdvbgh.html

[Q03] 增加列
来源：http://www.sxryk.cn/163jrfpxtjc.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163umaetnxt.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163coisrbwd.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163smfofuqz.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163lsjspwmm.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163gzqrzgeq.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163wmulqljc.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163ubmbycdr.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163uatlpezk.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163vhclwkzg.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163tkpqpfir.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163fgmxsrnj.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163fhzuiikw.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163nfvziigg.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163iapknpyi.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163wdgomvyt.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163vpfahgsg.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163fkgecmqu.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163flstyain.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163zxohbuni.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163nipskmux.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163lcoluqiy.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163zsecycgf.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163uvptojjq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163rxnybode.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163prkawcjh.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163nckrvlom.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163nsaybbtl.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163ltffnrxk.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163fliqgsjw.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163bzirgqoz.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163wclqennt.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163zsqepdab.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163crykmptd.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163axycfpik.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163ehoawqku.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163heozqzho.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163afwlwgcm.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163vzxogqbf.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163rlmpqkcw.html

[Q22] 排序
来源：http://www.xuanzx.com/163pcplxdjr.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163rkduvftk.html

[Q23] 分页
来源：http://www.aibaodan.cn/163xzbjknns.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163coqekgxv.html

[Q24] 去重
来源：http://www.xuanzx.com/163yftheqfe.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163lvtblymv.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163gtbqprtm.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163lsdgkylx.html

[Q26] 计数
来源：http://www.aibaodan.cn/163iurktaqe.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163tifqdnvv.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163agztdnvq.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163xilnjywq.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163yqhfwivu.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163etffvlvb.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163ttypgxjy.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163chjbohqc.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163czpjbctz.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163qdlbmvpv.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163hopdcvkl.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163ceyfffzn.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163cmwuibmv.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163mfbwvjra.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163schgzcof.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163esapqben.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163pwajnquh.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163rycqpwaz.html

SELECT * FROM (
来源：http://www.sxryk.cn/163uwtoscyl.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163wvleftni.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163mmdnnqbn.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163xgpmrpsj.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163jklpeiiq.html

[Q36] 左连接
来源：http://www.sxryk.cn/163hzenheam.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163enqmaagg.html

[Q37] 右连接
来源：http://www.sxryk.cn/163gkyntihp.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163rexqqjps.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163xoikqtnf.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163wnltushs.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163amwtawai.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163dobpfpzv.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163zwellcyx.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163snobctuq.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163ocbhfrsn.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163ddxvcqai.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163gjlgpytd.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163zgwjyzzs.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163gobfyqlo.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163rkkhczwq.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163ezxjlfgl.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163okdzlxpr.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163mqbgypui.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163fqfdbaub.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163miiwlmmp.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163ablsivks.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163ejrjgerp.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163fapdwztl.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163xpsidepj.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163feijtvax.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163nfujnepr.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163pcvihbgr.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163jwmthbkc.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163eyuscoya.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163gnvybhij.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163httjarzd.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163hgiswmou.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163vwdsnqpg.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163rrouwdwc.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163lfeejton.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163oavvrytp.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163fbvgmwpa.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163mvtddhay.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163ahomskbl.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163cwmffcdx.html

[Q54] 清空表
来源：http://www.sxryk.cn/163ugbhmpqu.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163godrpxss.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163armoxkwg.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163ncrofvqs.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163cijfmvjr.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163somegild.html

[Q57] 行号
来源：http://www.aibaodan.cn/163thpnevda.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163xxojezwt.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163dbzhgirp.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163omoofvok.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163uhdxyddi.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163mnshhqte.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163tvrgnqgw.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163vvpnpcnx.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163mfzqfyjy.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163mbxejaia.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163ndwbtqvx.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163lxvzqarg.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ticquqlm.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163texhufsh.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163fukmuilc.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163dsicuuyw.html

COMMIT;
来源：http://www.xuanzx.com/163rtqbhhkp.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163tmjlkrjy.html

ROLLBACK;
来源：http://www.sxryk.cn/163vmzwaevq.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163epdjjwuz.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163yzbqbutd.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163brktpvvg.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163xnfqsacm.html

[Q68] 保存点
来源：http://www.sxryk.cn/163sfwnmteb.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163tpewuyos.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163qdfnjmqi.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163psunkeog.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163omlreuyr.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163ovgvpqfm.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163dqnurnne.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163kurtdlkq.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163ppfxmwew.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163ylknfjac.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163pszqtrgu.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163soqzaswt.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163sjyifktu.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163pnyfwmlx.html


<!-- 参考信息 -->