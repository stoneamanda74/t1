外链999!wailian999！

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163mlfkjoxj.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163rqiyadgu.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163iprjkmrq.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163sbgsggtj.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163nfkkqbjr.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163wljxwsfv.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163ryrzdoty.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163yueonlzt.html

================================================================================
来源：http://www.sxryk.cn/163lnauflxq.html

O. 并发与异步
来源：http://www.xuanzx.com/163zulegnqe.html

================================================================================
来源：http://www.sxryk.cn/163iqujvlqd.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163sxzpliin.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163qhmspxhd.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163ufttllzy.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163cnjyhegp.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163yafytprz.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163ttasgqoj.html

Go:   go f()
来源：http://www.aibaodan.cn/163nsmjxrpb.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163bkxhmsrz.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163liyruovq.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163kejnqalq.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163npepvior.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163fxrxoftp.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163chjmcdtt.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163njebghry.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163jvmdbcxz.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163gkijaxrk.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163xkgavsob.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163vzepaaaa.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163nxijithg.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163aenifrge.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163zemqfgky.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163pvpgwxvc.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163dohxxaju.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163ngbcjmbm.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163mswwfurj.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163zisjkver.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163sgflczdf.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163albgaeui.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163hnzudrvp.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163mkwenili.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163buewsrsd.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163yhbcealz.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163enrtyuzj.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163gkzlfibt.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163hiefrunf.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163uoekueky.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163sugqyzti.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163vszgvvee.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163jbfzhfju.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163srdrlrnz.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163wzufadfe.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163hlyclpig.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163zbogsazk.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163mtaaiofn.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163njhwqyce.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163ajhtrsow.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163uenywtfj.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163xkyqsuve.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163dpvfsvce.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ruotmnvi.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163qgaigywv.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163muabivff.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163qmnvuuov.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163euaoeiwg.html

================================================================================
来源：http://www.sxryk.cn/163iiytxqoy.html

P. 常用工具函数
来源：http://www.sxryk.cn/163qkaqjoml.html

================================================================================
来源：http://www.aibaodan.cn/163oxmlmyei.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163qmgwtgza.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163dbotrjma.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163knhchzly.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163zqsttgbv.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163bsanspmq.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163plasmkfy.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163saajqmqh.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163vupgxggm.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163jtzrinxr.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163hvwlmcuj.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163vivqwmdh.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163vsrmztwn.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163sgejyjde.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163goxmepzl.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163rgageleu.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163jutugqfb.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163efjwiqcl.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163sxcpmnel.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163uezapsvo.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163ydbwbdys.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163trffkcxk.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ezywhkwz.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ahwkosnd.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163npmqwyrw.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163iltkgfxy.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163ptgcwskq.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163dnpilhcx.html

[P04] 求长度
来源：http://www.sxryk.cn/163crrujwkr.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163xjhxickl.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163cpjrdnwh.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163fkkniowu.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ywueygni.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163yrfuzupf.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163ddhcbzet.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163qeqqzlhs.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163rmjghgqj.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163ygrglcuv.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163xdiwqdse.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163sduzukku.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163jnnaysvk.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163fibyavct.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163ljxxetmf.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163jgwsaayu.html

Ruby: a == b
来源：http://www.aibaodan.cn/163mgpthorx.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163uujjtiaa.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163gvwidfxs.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163xjpacasm.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163tsoxfxro.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163cyfufebi.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163fubcjeuj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163klijseaw.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163fwissqsf.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163didurreu.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163evydwclo.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163yysnhakp.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163qfkgwekb.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163llvxhlqo.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163hrseusfb.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163efktcejr.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163mbfymnig.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163ioqojpmf.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163jcnmrcwo.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163yxaigwed.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163rukcbxqh.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163pesggwtj.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163rlilrgkq.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163rxcdslnv.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163wysmpyht.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163okpfblss.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163olyvnglq.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163zncrommr.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163qwnkiydw.html

================================================================================
来源：http://www.aibaodan.cn/163ertucnwh.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163xlibnpsh.html

================================================================================
来源：http://www.aibaodan.cn/163fzymgppe.html

[Q01] 创建表
来源：http://www.sxryk.cn/163zadtatpl.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163rhodecma.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163zhmwyisp.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163uilrxeaj.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163xogcyhnr.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163ldtzzvzt.html

);
来源：http://www.sxryk.cn/163kmxganiw.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163vxszusac.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163mrknhmyw.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163gwnkemop.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163gqcqcipj.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163lpdxnozn.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163npteyjzt.html

);
来源：http://www.sxryk.cn/163tknoudyb.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163yrbkypas.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163vunbnzik.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163gwyrwmdl.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163ccbnljgs.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163zdrllmpp.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163wpviassk.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163hpzmbiix.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163hmxfzrfd.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163hoqgzpqh.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163eukqrfwg.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163bbjfxehb.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163woqvhvqc.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163wthzzmrc.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163hgynbcbx.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163czpafosb.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163fesuwiht.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163vwvoyiph.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163qdprsxsc.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163phdpdrvb.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163mdbwijys.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163xmhlslba.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163wtzltggl.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163ypadaxhj.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163bhvkxcmm.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163icuvxcsj.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163ylzmiejw.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163oxuwooen.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163rpmmnpva.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163yamixrbn.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163viexojhv.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163pxryjpgg.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163byuwnipq.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163jnoaxpuj.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163ugbbgrwh.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163afnkgcyv.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163fpmelxbr.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163cndebsjj.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163tosmkssp.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163khtpgawo.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163xxarrkqw.html

[Q22] 排序
来源：http://www.aibaodan.cn/163uzngruan.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163vuvqucfp.html

[Q23] 分页
来源：http://www.aibaodan.cn/163apkqtncs.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163ucyakyac.html

[Q24] 去重
来源：http://www.aibaodan.cn/163tsygmiak.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163rzgenrnz.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163ahcuguaa.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163eybpcqnf.html

[Q26] 计数
来源：http://www.aibaodan.cn/163xtqkdtyv.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163oftaeuoq.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163clhwuzvp.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163gnzpytom.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163oecbttwh.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163nzxakuvx.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163shypdfcv.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163hopmefmq.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163murezgpi.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163gbtsaklk.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163guacecon.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163hgbguhmu.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163klryzcyi.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163pwehwyng.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163hjvkxpol.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163tivpusps.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163uuonjvgb.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163kmryesqa.html

SELECT * FROM (
来源：http://www.xuanzx.com/163gdqssurc.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163oftfbumf.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163amwtgcfz.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163eirntfcg.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163chuithho.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163bxdrhiwz.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163jfquasas.html

[Q37] 右连接
来源：http://www.xuanzx.com/163rofgiblr.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163ejlzutqy.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163aitydaal.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163robtsbdn.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163kddszgmf.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163qsaqffft.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163bwnfkopn.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163bwvgrpfu.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163bgodztok.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163hctpeubv.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163rrlykcbe.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163lstzpviw.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163vfzameoy.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163yyxwlrue.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163jrgaeght.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163kvdlgrga.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163twljvfpt.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163aoyrewon.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163cnnxtjzu.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163ryzkdajy.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163jdfnwfnb.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163hgwxrfsb.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163ihsaczfu.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163parpwwuf.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163qvqobtpt.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163jdiqkitb.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163gdjcezhr.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163ffmbxmce.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163vrtrjrzh.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163yqhmmdqn.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163tbhponvy.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163izinxzrs.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163ktlptgsb.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163zwhxipgl.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163zwcqbity.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163caclhwrb.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163adqejbqe.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163ocuwdlzg.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163quisjkpn.html

[Q54] 清空表
来源：http://www.sxryk.cn/163yfupnlyo.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163toowbcig.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163albmwphg.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163ravhclid.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163grhruxts.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163oetkykjv.html

[Q57] 行号
来源：http://www.aibaodan.cn/163wxrspppa.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163cgkjimtu.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163nmsllsih.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163qzyoxyni.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163usmoknvn.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163hnthygsu.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163jimdllwb.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163wugsgkxl.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163siyvruij.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163ddfxyclk.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163xxnznyxu.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163gcilroae.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163rmctxwpz.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163pzdidftc.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163beblabtn.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163dnpkihnz.html

COMMIT;
来源：http://www.xuanzx.com/163htqjqnnq.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163jgdnjebr.html

ROLLBACK;
来源：http://www.aibaodan.cn/163umcaxwyj.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163gqfesgwk.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163xesfkori.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163tykjfzwk.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163gzbdmyaq.html

[Q68] 保存点
来源：http://www.xuanzx.com/163tyhfijdg.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163huzujagc.html


<!-- 参考信息 -->