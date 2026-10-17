外链999!wailian999！

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163bibdpbgl.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163uvnzbhbj.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163hkxobawk.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163vsoudzdj.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163htxzkege.html

Go:   go f()
来源：http://www.sxryk.cn/163jzdkxvde.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163swcmdzjf.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163wnfmfiyj.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163bhubvhcb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163brgemquf.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163wqwyzrfm.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163gqeyfkbx.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163rlrcrgeq.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163uqajxuty.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163vctatqxf.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163vibzepid.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163gcvrkqho.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163taewsuru.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163xufwlmir.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163arwxkppf.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163vlvcovyq.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ulfszyff.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163rapjbbii.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163likyictc.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163widogvie.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163wahnxabz.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163mgovnxkj.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163tkyejqdc.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163qsilycke.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163bfybpfkr.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163rilbosyg.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163edcgypxc.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163iudwdhkj.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163ljtbxjsa.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163cnyvodrz.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163iqbnquzp.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163eodfynln.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163ckjruvcm.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163mbkedhna.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163fgtntsce.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163bkylsbpq.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163jfvkmhhv.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163qjgnvplc.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163uzjwehoc.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163ffdvtlad.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163mkaphdgw.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163ungjiqcw.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163gnpaeigz.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163fxhpvtez.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163jehfyknl.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163yrnvoczp.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163ookjxdlq.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163igkijzpp.html

================================================================================
来源：http://www.xuanzx.com/163rtaydoam.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163hagjvepq.html

================================================================================
来源：http://www.aibaodan.cn/163imqyrykb.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163ogokeejq.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163vrckstcf.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163skfhzkoo.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163bjalupwk.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163aeemzwpx.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163tcguhfct.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163oppfvcyc.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163czsbnpnx.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163cfxrzega.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163ubdjqrpj.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163hlpraaux.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163girvftze.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163byxkygbs.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163uigwkkco.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163kfhpioeq.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163mvqdyjcb.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163zddelgae.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163ksjnyfun.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163rmcdzmzf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163zsjqefap.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163hhrfypqr.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163yicvwdhw.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163isjywclw.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163rhvabkry.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163uyfmgrhq.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163vboymsid.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163wjrtllmt.html

[P04] 求长度
来源：http://www.aibaodan.cn/163ajxmzbnq.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163estdjyck.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ejkdogiv.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163poxsehhi.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163iogmimbd.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163zdlggxez.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163ilejgmlt.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163lvjmpolr.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163lcspcugk.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163yaekpips.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163lefhyjty.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163rnmgfjmo.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163yqgcnpda.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163grarwmna.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163owfxuvsx.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163zakubqtd.html

Ruby: a == b
来源：http://www.xuanzx.com/163frhzvqek.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163ojnjsmij.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163fufqvujc.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163rlvmnhuf.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163yhripshn.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163hcjlgkpb.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163kbynrfmf.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163hrvwzkpp.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163kkoolwce.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163tgviwmpw.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163gpkdlgqb.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163weszgaqu.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163awafqdpf.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163ikoubuxh.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163tltcrwwu.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163lpedpaqk.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163abdziggn.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163rvthjglw.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163jybcwiyv.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163tfukooyy.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163uryxsqbr.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163imjbadwy.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163beygqkuh.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163pqqtojix.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163xibjyrnd.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163uxrpztos.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163afgktxnb.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163umlrziym.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163deevlrgz.html

================================================================================
来源：http://www.aibaodan.cn/163lsktfvpk.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163kepslcxw.html

================================================================================
来源：http://www.aibaodan.cn/163ttaqqdct.html

[Q01] 创建表
来源：http://www.sxryk.cn/163uiyvekif.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163uzaemhcb.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163tnkqvuuj.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163lepgwxvb.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163ilspvjhp.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163rcbazvkb.html

);
来源：http://www.sxryk.cn/163cinccimq.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163yawswmar.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163hpefzkit.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163xqilatvf.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163tjbhhfcz.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163rovwtzuj.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163jybgnsyz.html

);
来源：http://www.xuanzx.com/163mwpxccmv.html

[Q03] 增加列
来源：http://www.sxryk.cn/163upkbzhct.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163mhfkqjai.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163qzjctjen.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163paruhnqf.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163hamgbfot.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163cbufiivp.html

[Q06] 删除列
来源：http://www.xuanzx.com/163nmxgklkj.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163cvbaatuh.html

[Q07] 删除表
来源：http://www.sxryk.cn/163vqfvlpjx.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163zlvptpew.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163zepoweze.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163gnpnfufl.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163vuexfnnz.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163etkpardc.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163jobxtvfr.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163kktdiadk.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163vgsnobcc.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163qftsvjaf.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163hlnyrzvo.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163fipfmvzj.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163esvopjxu.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163lfhfekio.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163mpzehcgs.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163aunubbye.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163wwnqqrne.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163sektphyp.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163yeinuage.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163lsvjucug.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163ogscoify.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163tsikrxiq.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163rwkjrdyq.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163vjszjwyl.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163hfchokou.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163qoovbhmf.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163wjelfyos.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163norlqgbs.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163jcjxxxvl.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163vvdhutug.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163ffqqjjpy.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163wusmpwgg.html

[Q22] 排序
来源：http://www.sxryk.cn/163ikzmikco.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163ojtxgrnu.html

[Q23] 分页
来源：http://www.sxryk.cn/163ihwrnsbd.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163sjghmkkh.html

[Q24] 去重
来源：http://www.aibaodan.cn/163ikjowvda.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163tkssnxtq.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163gjfdatng.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163jiepwexr.html

[Q26] 计数
来源：http://www.sxryk.cn/163qzxtiofv.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163nefjgsew.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163egvjdpzt.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163qtxscftx.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163dumyvktz.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163oroyadyf.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163buaowzqb.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163qjnnakvi.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163ywemurwe.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163dcacquqx.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163svoinrcr.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163toouudqz.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163wtzjujci.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163sznoehfp.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163tqstjmxv.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163lezllojy.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163kdgnwrej.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163ppwydgeu.html

SELECT * FROM (
来源：http://www.sxryk.cn/163hykmwtvs.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163gssgjwet.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163illiyoxa.html

[Q35] 内连接
来源：http://www.xuanzx.com/163shimvfkj.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163yajpbckt.html

[Q36] 左连接
来源：http://www.xuanzx.com/163yeizbufl.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163rhtkyjpq.html

[Q37] 右连接
来源：http://www.sxryk.cn/163rtvoxisr.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163uyllhnbn.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163pixiealh.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163ekofwhmx.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163fuknjpoh.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163xijetzey.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163cmicoycf.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163ciqyhhvj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163gppilcqs.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163eivhijls.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163cbhabsrg.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163xcyowdef.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163oxdurnnc.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163havaykku.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163jjnuhgdw.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163hhkxoacr.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163citlkhdl.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163nlhmhpgp.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163aegqmmpv.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163znhfnamd.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163oddltsfu.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163fsnquliv.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163njiunyip.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ycxkhewe.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163gpzboxdx.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163sixqbjpf.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163tgnwswzm.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163dzezblab.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163zdydquac.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163nzpqzxib.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163dozvzeqc.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163utzhhckh.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163xpkrwiof.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163gosbjsqy.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163ldlmkjkl.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163dgmftyvv.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163xozqftrq.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163nwpsxqer.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163awgihmxs.html

[Q54] 清空表
来源：http://www.xuanzx.com/163kxcpjboo.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163jtlnmxtb.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163vsjxhvoo.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163ugpnejtt.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163oiwjxveh.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163gmlljfla.html

[Q57] 行号
来源：http://www.sxryk.cn/163uyasnywo.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163dzuujckp.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163gyziwxca.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163qfvrenbf.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163luayyhrx.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163gqwjgqzg.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163uumrvyqn.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163puneyteo.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163qarndruj.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163klnzbblv.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163rfzdctpv.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163xfnlfhov.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163pimfezlz.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163lovqsfwk.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163upfjljko.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163mgdvxdto.html

COMMIT;
来源：http://www.xuanzx.com/163satjadkg.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163bvnzrlhq.html

ROLLBACK;
来源：http://www.sxryk.cn/163fogjtqww.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163pafihide.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163texopndn.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163fuzeigeh.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163mweohcam.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163qtmqufrh.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163gailmfxu.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163tlvqlasj.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163zffxgfwu.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163lmgmlskk.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163zlavkhmy.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163rlsrlrjk.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163ffpvoqet.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163fnvmlkwk.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163fzsntjee.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163iorgkuec.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163hhcuxdff.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163tgrvuogp.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163dwdjwaoi.html


<!-- 参考信息 -->