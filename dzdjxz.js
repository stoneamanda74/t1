外链999!wailian999！

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163ahfkiyhc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163htpphdob.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163udjllzgm.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163bnvgiuov.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163gicuwrkk.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163lgqvmiqy.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163smvfcltf.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163pybuionf.html

================================================================================
来源：http://www.aibaodan.cn/163lewjbhcg.html

O. 并发与异步
来源：http://www.aibaodan.cn/163yavkfnsf.html

================================================================================
来源：http://www.sxryk.cn/163zezrixpe.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163mclpkaoa.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163yfwhfuid.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163qkdyjzft.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163lsywhxmr.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163skfbzytx.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163sqhhdais.html

Go:   go f()
来源：http://www.sxryk.cn/163uhrkrsex.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163rinwsrkz.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163fqvaajcx.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163tsmjlubc.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163zvumtspf.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163dduczoam.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163csqawnic.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163szbfwlxa.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163gnggwxtt.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163acposifs.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163uojzxlno.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163dutbpwmd.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163hpcujaqu.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163laphzjma.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163nytlnjhv.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163xvaycbis.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ysjtbzsl.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163gjgiucdv.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163bszpijvr.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163shohdrip.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163xtmxfdva.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163snrzzubf.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163lscuhxhc.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163dhpmsuyq.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163xrvsnbzq.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163uhlcyqqu.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163sdgtheep.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163vtkzgedr.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163qnbnkkxc.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163xjieurpk.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163tszpfccs.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163kuelyxfh.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163mqwibdwr.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163jnggvkyx.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163fxdhanwm.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163qkvuyygn.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163cskrktqg.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163pmdoejls.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163aozqfugt.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163uhzemsgn.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163tdqwlaix.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163npnrmkvy.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163fheihdhf.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163llsfgdrp.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163qpxjddsi.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163ycjilflu.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163djzdpipu.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163vbsjzfuk.html

================================================================================
来源：http://www.sxryk.cn/163ruxpntxy.html

P. 常用工具函数
来源：http://www.xuanzx.com/163drqebenb.html

================================================================================
来源：http://www.aibaodan.cn/163lkgatvcr.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163tqwoqlue.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163yltifvnq.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163ndkrrxgb.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163irvzmebi.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163fmwhbjdd.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163iqxuyofp.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163fpqzdrzo.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163bssjdugv.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163bxxugckx.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163qiwxfxft.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163thgqxmuc.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163jrkqceok.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163bhvfhjzw.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163ialggvyi.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163rfbhcbtf.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163fyahprsy.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163njvtxyes.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163jqpguwmi.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163ojirbyyi.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163mvaeywfr.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163svvjefgw.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163xtubqpyd.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163flqfzjbu.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163trgyzbij.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163sgflyjoz.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163binxeuhj.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163mesmikcc.html

[P04] 求长度
来源：http://www.sxryk.cn/163webppzhz.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163qkmnjwev.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163nmnaaidm.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ddcxxqsz.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163clhdjzbt.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163qjmorhzv.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163tyxyggtr.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163cicfbnoi.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163gepwjnqr.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163mlvfwezs.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163gsbtxskh.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163zaeetqsq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163cgdxlhbu.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ivbabuts.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163dcpurvzn.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163vtmfqllx.html

Ruby: a == b
来源：http://www.xuanzx.com/163sizwrjcw.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163hlbgjvdw.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163xsvdjhtd.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163gplxpvqe.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163usxbebvk.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163gpipiwlx.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163mqwkefgj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163tejfrado.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163pqgoxrrj.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163jzegvjel.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163txseahpx.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163xsrrachl.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163cqpasxqo.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163gchejuvg.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163mqlqhrae.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163lnvafwzi.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163shlroupu.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163kasxgosv.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163lqbyfqgr.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163eswhtvbo.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163kbwtltdx.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163kmaeguql.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163ejrgtdwl.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163gqyfyder.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163nelvygfm.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163pzccixqh.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163gelatiwe.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163yevlieix.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163ngfpnqwy.html

================================================================================
来源：http://www.sxryk.cn/163iuzckhvo.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163sxryyfkh.html

================================================================================
来源：http://www.xuanzx.com/163kctgctiq.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163dryobhqz.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163gpzgclhe.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163pbmmpfif.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163ggpeekkb.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163qtxdthim.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163gcvvnjgv.html

);
来源：http://www.sxryk.cn/163dvflahjj.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163izlkxmgz.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163vrrdueqt.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163nebtsohj.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163prinmybz.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163qpcuzmrm.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163gxwrwfus.html

);
来源：http://www.sxryk.cn/163oqrqoioa.html

[Q03] 增加列
来源：http://www.sxryk.cn/163izesplyd.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163fseuscoq.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163malzvpbv.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163jufgeren.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163zgsasghb.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163lnatlweg.html

[Q06] 删除列
来源：http://www.xuanzx.com/163hnrstieu.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163vjmxqwxi.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163wpecneaz.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163myldiiqw.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163vnvvgswk.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163rcbrfwyl.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163uemdkkib.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163vvwkptqe.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163wvxvrcuj.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163tyzyoesc.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163xguugodl.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163feamgwyj.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163uhompzdx.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163gwicbeni.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163mbuhflmq.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163dwwpzkvv.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163tbzqtuwy.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163brykecdc.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163gpqtuljp.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163jkgovpzu.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163sgyjkqqk.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163vaklpuyi.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163izvjuliw.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163cnausvlr.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163cgiminfl.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163fqjuzwss.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163xyqdudqw.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163hbjylwkg.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163upxsebje.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163wjbxrrkq.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163rdcozzxd.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163uljmysez.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163qmfzclul.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163jtmgktfj.html

[Q22] 排序
来源：http://www.sxryk.cn/163fxmeenyt.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163qmccimot.html

[Q23] 分页
来源：http://www.aibaodan.cn/163ufwacofv.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163wgjitbug.html

[Q24] 去重
来源：http://www.sxryk.cn/163spcshjau.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163uekomtuf.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163davsvnyt.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163qqyxfxjz.html

[Q26] 计数
来源：http://www.aibaodan.cn/163hohdqltq.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163jezuyrvh.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163sqntxycu.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163hrvnhcwg.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163wblomaaa.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163rkgrslne.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163kzddgqdf.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163xhvdjcvm.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163ferewusn.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163hyklxqsw.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163rhhuollk.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163biuuqglj.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163mdpwrymw.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163qjcgcvbl.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163ywgdrctu.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163ftksurow.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163pdmizowe.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163jfytkyrr.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163cpccdged.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163gfhvnocz.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163xsipehaf.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163tshtpvog.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163cysrsumx.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163gekbbceg.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ggsykofs.html

[Q37] 右连接
来源：http://www.sxryk.cn/163qjnipmaa.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163elrdnzwn.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163freysvnw.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163rgyzxrnw.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163vrrcfymo.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163vbpzvqso.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163ilqqepog.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163vlvykgzt.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163lmeqiuzs.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163bsuwudmj.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163pyjljsoe.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163rtzjswpk.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163ovwbjrog.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163yhvuapxz.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163rkvusold.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163swawynlp.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163bwzqkure.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163bpdapjde.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163yjpywuce.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163dbgrkdvy.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163dbwggfnz.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163rdiilyga.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163hnxerhzw.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ccejgctc.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163equiwezm.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163ebfxbhpz.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163vpjjxbev.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163sdouzdha.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163tuphkqfr.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163cdrlnahb.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163wbpwfqew.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163brigjinm.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163jvptmjmi.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163ogykwxug.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163rrxprldh.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163bhvqbdft.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163ibehekhx.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163yixemtid.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163ufkwywvv.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163jqrjqprw.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163ucqoqmze.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163yjkllxvq.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163qnjpcmfe.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163nocbgcyh.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163tuizlirm.html

[Q57] 行号
来源：http://www.xuanzx.com/163zrxmgcfd.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163debkvtir.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163xacldyde.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163dakyooim.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163apfmktff.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163suaphvnw.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163ekpziqyx.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163uysinfto.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163afyoqleb.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163vkdalccp.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163xwyyrcrb.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163noqmzfih.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163kswmrazt.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163xkudsgzy.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163veutpyke.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163izfxluoh.html

COMMIT;
来源：http://www.xuanzx.com/163hnzrmidv.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163ybrmvcma.html

ROLLBACK;
来源：http://www.aibaodan.cn/163uhbpoecw.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163atztjjoe.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163zsbklckg.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163bfwchhdi.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163njatorlo.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163oacbehjt.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163kekerhvb.html


<!-- 参考信息 -->