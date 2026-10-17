外链999!wailian999！

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163ozmrteqr.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163rgiotvxs.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163vsygrcrq.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163mxdwdfqk.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163jqcvlsat.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163niipobsr.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163csxzsuyp.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163ardgcncy.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163nqowabvn.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163lemybuay.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163fomrpwgy.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163vuabzxhk.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163znkwfpry.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163rvjhfook.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163euxecsgs.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163rlypobmb.html

================================================================================
来源：http://www.sxryk.cn/163jjlsqyei.html

O. 并发与异步
来源：http://www.xuanzx.com/163jzyykvgx.html

================================================================================
来源：http://www.aibaodan.cn/163rhulcfop.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163wddsbyjo.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163vefxiaks.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163xqdchkwp.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163lladsebv.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163dmlortkw.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163fbymztzz.html

Go:   go f()
来源：http://www.sxryk.cn/163rsgfjpev.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163xkqquubu.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163ydpqjyde.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163oguncady.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163xvqwmpul.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163eugizunq.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163onecwgvu.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163hdetbxwo.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163umieepil.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163xkupfvmi.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163gegzuzar.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163rdrvoawd.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163surubdkn.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163fvuhtyqy.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163ppfdhopa.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163sqrtjvou.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163wfvtgwtr.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163odqvhnki.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163ykqwrrin.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163fzhphglm.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163xgqajlyn.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163eciswszp.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163evxxbkzw.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163wuvdqequ.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163nmenalwo.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163fpvacqhl.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163wpmdtjii.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163sqwbiwfw.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163jlxmgnci.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163okxhtyey.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163bslryrsk.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163fznulxri.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163gvaggrxi.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163vphiikyi.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163zgavxawi.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163fnnpdgkt.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163ogsgkjdp.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163bljbomhl.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163obrarxzr.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163lhabhxcu.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163lwdnczbp.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163zemcrwdp.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163dktsstwa.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163jifznmhi.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163qlzplqrf.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163qyjqscxc.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163ufhprfbb.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163fhstpxao.html

================================================================================
来源：http://www.xuanzx.com/163ohhruyqk.html

P. 常用工具函数
来源：http://www.xuanzx.com/163pmofdkoz.html

================================================================================
来源：http://www.xuanzx.com/163cdumcged.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163kbwbfksv.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163xfkefoeg.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163uuysrqac.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163spijccwf.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163agdbpyvm.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163gxjbeodp.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163nmzhalai.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163nesdetbo.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163pibevavf.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163uuysjjgu.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163eovuefay.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163xnohlgxk.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163koxcyvmt.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163oezhiotm.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163beemjwkw.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163jvqzreni.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163seoxcvww.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163ljakfthp.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163zssgrwtu.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163olvlpais.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163hrcdnxbu.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163rvcxzsnw.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163nenzueox.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163onnbdufj.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163ejbtnrwd.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163asqwoarz.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163raubbvjd.html

[P04] 求长度
来源：http://www.xuanzx.com/163peefngvw.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163jnzbzgrv.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163nzcdpudf.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163sdmvsnvk.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163yzynochi.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163pdxflupk.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163qbkaqpqx.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163fxlvxksw.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163iahtelab.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163pphhuiun.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163czsjbpff.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163kssvtwte.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163dbqiccyk.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163mrqiombm.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163gxkxwfkm.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163yloryoxz.html

Ruby: a == b
来源：http://www.aibaodan.cn/163iqroahgm.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163pejxwffe.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163hrivvriy.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163gjgwmdjl.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163ijizlixv.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163szuaqpbs.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163exhtzbwe.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163wgrmkcbj.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163ygudzctb.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163vkjoulfc.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163kigpbkeg.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163dijpbfwo.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163drqmxgxw.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163uxrodeou.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163cwpqnfdx.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163kojxbdfs.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163dnflkkzd.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163gnttzcdj.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163cqlgtdzz.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163ewcouxhz.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163uenvtbzq.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163pjjcizzu.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163xactwuqv.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163xlmwhmuw.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163scfzozfu.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163datapiag.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163zzyjpuvx.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163cgtdkfpv.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163ytgizvqt.html

================================================================================
来源：http://www.xuanzx.com/163ifmyarbg.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163ssyhhzfk.html

================================================================================
来源：http://www.sxryk.cn/163wzmvyweh.html

[Q01] 创建表
来源：http://www.sxryk.cn/163npjvbscc.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163wsdcqjwg.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163hmgbwqbw.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163juyxeznl.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163vzyazfcq.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163jjityaax.html

);
来源：http://www.xuanzx.com/163qfnxuzjd.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163fyyrlahn.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163hvtlpjsv.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ghjlqeen.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163upynwial.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163inxnbevc.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163xajyqbyq.html

);
来源：http://www.aibaodan.cn/163smyghrkp.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163zkmzlxos.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163upyqnklm.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163zconxrhl.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163elyxlmij.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163ezmhqcvr.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163idtlzsfh.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163psbjlvjy.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163hbioghsa.html

[Q07] 删除表
来源：http://www.xuanzx.com/163molxfiqe.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163ayclcmom.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163emcnaeui.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163jpxcjvci.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163popooncr.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163aavaghdg.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163sjumjmgi.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163yxpbjitp.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163zbhfhbwm.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163qxltmtfh.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163pidzmplc.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163tcbjpnlx.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163ieydzixe.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163qnwhhkkw.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163fgyvmxhd.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163yedlivgk.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163tjqfjmhi.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163pnityvzg.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163eoxzhdfx.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163lrbcdskv.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163gybxrver.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163vebhocfu.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163otkylwvo.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163mpnbwwbo.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163rceufzur.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163ubptqhlh.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163jrottmps.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163wajdqmnq.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163fmfqdwrl.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163msrdgjni.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163qgdsgyzr.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163fjpzbgrx.html

[Q22] 排序
来源：http://www.xuanzx.com/163aiiqyaia.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163yamiwvzm.html

[Q23] 分页
来源：http://www.aibaodan.cn/163hguvwkue.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163nwicghjt.html

[Q24] 去重
来源：http://www.aibaodan.cn/163wygseeac.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163ostzbnkx.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163pxufkuqp.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163verqenru.html

[Q26] 计数
来源：http://www.aibaodan.cn/163ezdgywrr.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163zsdscdqf.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163vompiytz.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163yrimhmmz.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163zmorcpuy.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163xkummyyc.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163uufbcwvk.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163nlrqdbdd.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163snbiljuu.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163lokyoaxg.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163zkcztqtv.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163jkyzxtrg.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163laomqaol.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163mtvagqeq.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163mlmhctzn.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163kdtzlkvb.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163tujzcnka.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163gfgbimxi.html

SELECT * FROM (
来源：http://www.sxryk.cn/163lngrngle.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163bstubtfd.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163imqmptwf.html

[Q35] 内连接
来源：http://www.xuanzx.com/163seugztvz.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163pwtssqtg.html

[Q36] 左连接
来源：http://www.sxryk.cn/163tlajroxs.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163eozrhrgp.html

[Q37] 右连接
来源：http://www.xuanzx.com/163xlanmsch.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163owjojexb.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163ueedixbm.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163xjuzsayi.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163eaiqqiqs.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163flnrnlqb.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163ctpgugxx.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163vhvwigvk.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163vfwdcurp.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163naaszwqi.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163plpsnjve.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163fqqsakou.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163mhasxonz.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163ofrxeptd.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163fsbjnery.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163qwnvldcx.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163vybluqic.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163pmfxzajr.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163rlnxshat.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163eqjtylpb.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163iiergirf.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163oszqtqkf.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163pplumyzv.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163gizprgqr.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163kvphexvh.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163ympiipet.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163makrjlsf.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163etdvwgbu.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163tgtxyicy.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163mwvaynsc.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163xohnnuli.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163pmsomlpn.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163efvkvfrk.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163jhnhcens.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163equcgbwb.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163pivgelru.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163fbtcwvjo.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163acylumfx.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163cildslul.html

[Q54] 清空表
来源：http://www.sxryk.cn/163rwiasaeu.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163ejgnhenh.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163tcahtaqw.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163jiewmakr.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163qaxmqlml.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163fwiphils.html

[Q57] 行号
来源：http://www.aibaodan.cn/163fhzwfyjp.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163etvgnvqr.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163vmtjuuye.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163xfvicjrx.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163sofdlite.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163lrujywzz.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163rylrsudg.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163ksepxbon.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163zpavrtok.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163sxebdesu.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163aqjxcofu.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163alktgfug.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ezmaaqub.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163oiticfph.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163irdyeiff.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163vjjoodms.html

COMMIT;
来源：http://www.aibaodan.cn/163pfcryvzz.html


<!-- 参考信息 -->