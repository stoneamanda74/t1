外链999!wailian999！

Go:   // 手写递归
来源：http://www.aibaodan.cn/163jpabaotr.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163kdqkdxjv.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163ewqkdsfk.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163wqovkmzn.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163uairmacq.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163cyoqihlb.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163jyouzzfu.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163rwkpbphr.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163evkhlkjr.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163lkcyrxok.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163jnbjvwfh.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163zytjszdq.html

================================================================================
来源：http://www.aibaodan.cn/163vjixizlz.html

O. 并发与异步
来源：http://www.xuanzx.com/163jnrapyqi.html

================================================================================
来源：http://www.aibaodan.cn/163drbmzrsi.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163uehhyehm.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163odzyihby.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163gokbioja.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163vxooocwv.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ssljcpjh.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163spmeyzle.html

Go:   go f()
来源：http://www.aibaodan.cn/163ussorhsy.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163wyzqoxnq.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163uqnsdqmx.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163rqzgfgfh.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163enbevoas.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163vxwyrgch.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163hddwgisp.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163wwkbblcx.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163sqysrcvm.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163xvjgbmlt.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163duyjtpzz.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163hlgqecvz.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163upannvox.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163zyvsgntz.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163zxhknfxa.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163ophhqans.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163pluragfe.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163inlxyynu.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163smpthqdz.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163hvzvcqkv.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163rjicssur.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163ptexkfoe.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163vpauolvw.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163yclfvbkc.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163yreuaboc.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163ykxstqav.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163obbiepii.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163clecjtxe.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163qqssblqh.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163ldxgrfhb.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163yakywbbc.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163snlodjoy.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163tkskgbjn.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163rllbhabu.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ivcozoxc.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163hlhiioug.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163gddiyeck.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163vllmfqwr.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163pukgprvi.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163xjqatpkj.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163kswydspy.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163kdfpjhio.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163mkmsmonq.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163jmyhuyyc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163lqsvrpoz.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163txfbaycv.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163gfjaztqj.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163helgnpcb.html

================================================================================
来源：http://www.xuanzx.com/163pfktbteq.html

P. 常用工具函数
来源：http://www.sxryk.cn/163aksueprv.html

================================================================================
来源：http://www.xuanzx.com/163kgtsjxvt.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163hindgmtf.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163egprpkqv.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163dhpmjbky.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ryblkspz.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163hpcgothv.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163chjtapdn.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163vrnsqrbh.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163rijcaqji.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163hjudygsh.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163dxzraoaq.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163avpgxewa.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163qlgqkpdg.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163avljfhgo.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163fospdyko.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163andvnmij.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163mdpyexsm.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163zuahxppp.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163pfogrrgj.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163rhtivqrg.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163bhyrrfvr.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163erskkrby.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163psjrtmum.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163xviaoguo.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163sfpymdbn.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163tauqwkrq.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163lroioftc.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163neejvtgg.html

[P04] 求长度
来源：http://www.xuanzx.com/163dlirmqpy.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163aouvnyxl.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163nwoftovz.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163mfnoswki.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163bjblldfi.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163iaklpkak.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163kalqreae.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163gajhpxjn.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163ytolrnvb.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163gflpjvmr.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163gwwoxcsh.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163wepqshih.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163svlzshot.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163whcuygrf.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163hjgemvkv.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163lcvhrujj.html

Ruby: a == b
来源：http://www.aibaodan.cn/163xqyhthhd.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163tsqhamzd.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163mwhdmoxm.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163iqsuhypv.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163dhbpsglo.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163wcwtrcbh.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163suzkguax.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163mfapkvbf.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163pgjrlorb.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163aqmzibtl.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163mdolduqy.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163htewoeph.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163qckixgjp.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163fmhcveix.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163dyamqagy.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163tsergcdy.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163qjbuhlfb.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163qbnlaqjy.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163uslwbvyx.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163nokkxali.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163tscjtzor.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163owyhluum.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163ygpfjeku.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163bntmnayw.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163wballntv.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163whcrgicx.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163nucisckc.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163mrixtigl.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163wtmbjolw.html

================================================================================
来源：http://www.xuanzx.com/163clecifoh.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163etlwfqwm.html

================================================================================
来源：http://www.xuanzx.com/163mdlvexew.html

[Q01] 创建表
来源：http://www.sxryk.cn/163dvxopmgd.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163ynwhkbky.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163toptztra.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163ibobkaex.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163teawncxd.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163qcornavw.html

);
来源：http://www.sxryk.cn/163uteisbni.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163jdpsziwh.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163knsskiti.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163qbaskhsn.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163uhphkxpw.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163qwzlcmtv.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163rvdnoydn.html

);
来源：http://www.xuanzx.com/163cwlsrxqk.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163tlacrzmb.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163pfbiwzmt.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163iruzubey.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163cnagusmf.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163tktsvkgx.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163ocslhsih.html

[Q06] 删除列
来源：http://www.sxryk.cn/163qbdwspnb.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163bvbjzdei.html

[Q07] 删除表
来源：http://www.sxryk.cn/163ucbbonjc.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163qawyerhc.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163agmtygat.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163kmghrfcz.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163bsevcxzn.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163dhxdgoha.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163vuvaahsx.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163pasuyjzu.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163ufxjreun.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163vrgwshjx.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163ibexhjdo.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163iwdaglak.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163henxfllf.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163afduzsjt.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163gzywzfio.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163krzihkqu.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163nqfidjmg.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163qwcilbqa.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163hulssoqa.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163omaatzuk.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163cbcqzrvn.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163driggsal.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163ezkcdopa.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163aexxymvd.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163xlrokuof.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163ijrhtwpa.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163fjgczryo.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163pnvjokgx.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163dmxpwggi.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163jfdrvuif.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163hxoeibyp.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163xxgaqppl.html

[Q22] 排序
来源：http://www.aibaodan.cn/163zznxjuuw.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163fwkonvbg.html

[Q23] 分页
来源：http://www.sxryk.cn/163jcurbhuz.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163dvhjnyhy.html

[Q24] 去重
来源：http://www.aibaodan.cn/163hvqshcuy.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163iudjjmam.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163yyvwutaq.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163kxlbfffb.html

[Q26] 计数
来源：http://www.xuanzx.com/163mqnkvurh.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163dyqbprli.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163urkgmtrh.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163moikgtgx.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163qwpvwoph.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163oqlgvqbo.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163drsmfran.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163hwcccqro.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163cejsjmwm.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163fegbzqlz.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163mugamvuj.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163imqbpetl.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163axsyykrf.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163fzolnuno.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163rktrkwgq.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163qxzrsaju.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163twszeryx.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163nyjbnefa.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163bxtizkur.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163lexvgpzh.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163qicignmc.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163xniyomsp.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ehdmqetx.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163lapexrqz.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163uxxwtoai.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163yxoezikk.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163trwtaeys.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163aaefvjbj.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163aztocddt.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163youofbiv.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163jringusf.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163fsnsvayo.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163lnfwwglv.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163hbucjjsj.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163eidgcoho.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163ybbaimxg.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163hsyyfxzy.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163sdqetbbj.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163omrobcxb.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163yyvqhkht.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163dwjeowks.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163abptoqfo.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163hjeadwhl.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163lqrttptu.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163zwyrahng.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163kadlleni.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163srkpmvzr.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163aorkgkdv.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163lgvrwmve.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163arehgyrv.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163uefqnytf.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163rguhdpmw.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163snvdvdmy.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163fzbxxyff.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163ulljdixb.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163qlxjvyjc.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163dplcnbkg.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163kvmzxxlc.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163vlfkfzcj.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163dkabwccq.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163hbexuawe.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163mflilxdu.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163aibiopei.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163fzxragpx.html

[Q54] 清空表
来源：http://www.sxryk.cn/163ohbqkcmt.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163wgymqxgd.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163vfniywhe.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163izbviqpc.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163txbtcdci.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163kqemdvxd.html

[Q57] 行号
来源：http://www.aibaodan.cn/163qavfelwp.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163szadmxxo.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163gebipywe.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163lksgdcqu.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163zwyfxtio.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163xosrbzsa.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163dzbvqovp.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163tynrzfsx.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163wywvhuod.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163rerfeymy.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163fujyxnpo.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163wvatvecq.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163mtgocrts.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163werrldtu.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163vzoglndj.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163ccozdapy.html

COMMIT;
来源：http://www.aibaodan.cn/163ctgovmxm.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163sxwjiakj.html

ROLLBACK;
来源：http://www.aibaodan.cn/163fetvafou.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163rbsqcoeg.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163orqnwkzd.html


<!-- 参考信息 -->