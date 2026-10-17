外链999!wailian999！

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163xzpquigc.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163ugvbihje.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163itcgixtm.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163kxwjynqn.html

================================================================================
来源：http://www.sxryk.cn/163zfcijmzx.html

O. 并发与异步
来源：http://www.aibaodan.cn/163qtwnknck.html

================================================================================
来源：http://www.sxryk.cn/163jlvuhkvs.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163hccaxwze.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163wxomoegi.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163eahemdyj.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163wrutcaho.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163vqjdtukm.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163viueqxbx.html

Go:   go f()
来源：http://www.aibaodan.cn/163hqdfcubi.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163xdgqodgg.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163sovjodnt.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163gtoqutqb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163nwlbwydf.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163yxctlplr.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163tlggwnif.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163dlmkjjou.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163upuocoez.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163xuzachlb.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163apbkullj.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163fdysoioh.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163apbupcbz.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163fztstlfm.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163jpkhrfzw.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163edoxgonl.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163dfrlwssl.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163fiaxckdm.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163cgnonune.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163heepbagw.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163gufcmgnn.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163gymnfsvx.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163drybqleu.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163aqvnrdob.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163evgqnciu.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163vvzzwxaj.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163olulrqvr.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163iutacrdu.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163brpgsmto.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163izelkkmw.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163ygvmegpa.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163ntssfbpa.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163rknncxky.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163inpyaawi.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163gqmoluww.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163rmkjvjmm.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163lxazbzcn.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163dgczvvtq.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163uveannrs.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163eiuhijzb.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163hcxkackk.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163vdfgvdmr.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163tqmashpu.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163cqqzjzlj.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163qgapqcob.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163jqpybtpc.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163rctzfxpf.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163uwupizpg.html

================================================================================
来源：http://www.sxryk.cn/163fzuzopwu.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163lfbuxtfj.html

================================================================================
来源：http://www.sxryk.cn/163doplbypw.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163ekiqjleo.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163hpsjuujx.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163ofernrxo.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ngnxnmiy.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163pyxyucmk.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163jkqctrng.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163qsyfatyx.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163swxnwapn.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163zqcwyjdb.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163sjaekxzf.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163utgawyue.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163arkygubp.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163pwnnxdqc.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163pbnmdupe.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163qztronsp.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163gtmwazfn.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163ksuqytsn.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163hedwmkcf.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163jgkawqqf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163otffpeap.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163jtzpouxa.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163rybapzeg.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163llvdzcsz.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163iwvhaiua.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163tdfbahvr.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163iahqkvza.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163sjwixtik.html

[P04] 求长度
来源：http://www.aibaodan.cn/163ehvpwesv.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163zeprktfu.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ilnqoath.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163uhtcuybu.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163vjofgtqz.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163kckopmgf.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163sydnupum.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163ijuuikos.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163wpocsbtv.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163hlyvcsmp.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163yfejwyux.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163bctrgxfe.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163mfjeqjte.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163hluybcuc.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163vsjvlizz.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163gttpvcpf.html

Ruby: a == b
来源：http://www.sxryk.cn/163bloqbtmg.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163otmrkutb.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163tkrlhxjf.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163vaeepfcv.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163hmrbyksg.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163uropftrx.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163lorgedfw.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163scdnycds.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163ydbgqamk.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163xipeouki.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163ftdmklgg.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163hvqhufhq.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163anrwmudm.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163njcqsrjq.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ysqzdtpq.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163pffgemnj.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163nsxxzvts.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163tfzuyqzw.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163yidpudxi.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163pdlvtblc.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163cevsnqjk.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163jsmbqmbg.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163kmqgolyf.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163ftynuazm.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163steoiblx.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163brcljcba.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163hepjoqxl.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163wwidubed.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163ftafiseb.html

================================================================================
来源：http://www.aibaodan.cn/163pjvlmhob.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163dlvwqvhd.html

================================================================================
来源：http://www.xuanzx.com/163nwxsjkev.html

[Q01] 创建表
来源：http://www.sxryk.cn/163puxjfokf.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163xalymzst.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163mcgqmlyj.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163vmfzbpjm.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163jmaubbik.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163wiepdpmf.html

);
来源：http://www.xuanzx.com/163agoygeod.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163ywicsdxi.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163whtsztjw.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163upwfcsxr.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163pfsrfmru.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163poyorgbh.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163ksgjyape.html

);
来源：http://www.aibaodan.cn/163hfyweqoa.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163pfaysxso.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163ehctmnrm.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163ksjyefvt.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163fybazqft.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163gujbvmwe.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163megebdwf.html

[Q06] 删除列
来源：http://www.sxryk.cn/163tydaigve.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163hxxmozzs.html

[Q07] 删除表
来源：http://www.xuanzx.com/163fjzzliyp.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163wdmkjudn.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163riawkcik.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163xhdulbiv.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163uczyrwwi.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163orumthir.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163qhkikzvk.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163ynqwjbqz.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163hnwpuxpz.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163letnbdkn.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163ntaihijb.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163tjhmylbr.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163osqojxco.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163qyyfgnqj.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163ycdcxueq.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163zaukumzw.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163zvbwqxkd.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163tnjsyzal.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163euxczoao.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163nuhbwlxi.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163hizgqlii.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163mbrpwous.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163rjjbjvfs.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163fshksaoq.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163mhhvrovo.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163qyepjhtw.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163vzsmkycl.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163hrakkyvc.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163cznfjyii.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163fahkujgz.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163acsfjjle.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163ibwbsuqp.html

[Q22] 排序
来源：http://www.aibaodan.cn/163qciexyfh.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163rmcfwqxa.html

[Q23] 分页
来源：http://www.xuanzx.com/163uehttjin.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163azcfhvdv.html

[Q24] 去重
来源：http://www.aibaodan.cn/163absxyxic.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163stvhziul.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163ihslhnce.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163wsyyclfg.html

[Q26] 计数
来源：http://www.sxryk.cn/163hqwkcina.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163hvnpxhxa.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163yaaolrxk.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163wrisvujh.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163wzhdbqcy.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163wzzjcktt.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163fptmnwhc.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163svzqffzk.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163oaoktmsf.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163pmnyjsps.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163rrnchgoq.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163ptzdxpoe.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163crgutbmi.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163jamwrifi.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163bubhruxy.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163dekrnxzh.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163kiewphrz.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163ukovduov.html

SELECT * FROM (
来源：http://www.sxryk.cn/163zlokfohm.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163fovsaxcg.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163ygrnvqzz.html

[Q35] 内连接
来源：http://www.xuanzx.com/163ooyptpkd.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163juedgvbn.html

[Q36] 左连接
来源：http://www.xuanzx.com/163stmemrly.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163fjesnsbp.html

[Q37] 右连接
来源：http://www.xuanzx.com/163xmbcwrnp.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163sxoqaqek.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163szrshmli.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163fzrpphka.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163omoeewes.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163mhnzzlrh.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163ktxjgztl.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163uxghgqad.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163mkhnsbuh.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163yflcxzhp.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163piidcknd.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163gmjvxqxu.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163etqspbhd.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163fmneoxfm.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163tdnbnlbg.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163isopehmt.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163xwbpqfjb.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163dvkdhupq.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163rptvgdcc.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163sgoamlbh.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163pwydkqte.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ghbocnzw.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163fqypcrzu.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163cyawlglh.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163touggcsb.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163dkfjtguz.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163yrxcvywn.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163fpjzfqoi.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163cnbnqtmo.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163ooungxqq.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163vrdttmgd.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163kjuuqixn.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163auofxbjz.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163zadylcfn.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163zekooirq.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163iuhvaqel.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163ivzmxfbq.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163vmvqfqcw.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163qzhixrwy.html

[Q54] 清空表
来源：http://www.xuanzx.com/163dvarjzeq.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163tnyatagr.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163adiydkri.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163noodkquu.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163nbiwceph.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163obpkfqkp.html

[Q57] 行号
来源：http://www.sxryk.cn/163qmidggwm.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163tordpzvh.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163rpjmmnge.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163ubtxklzv.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163kzagallu.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163mcignino.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163xahaxiqg.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163zsblgyrv.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163rmpanxmy.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163odvvsbmg.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163lrtmpspj.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163xfyidaau.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163unfksteo.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163tfsdbdyt.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163kafsvebq.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163rpwyompu.html

COMMIT;
来源：http://www.aibaodan.cn/163glragxhc.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163nkmikevu.html

ROLLBACK;
来源：http://www.aibaodan.cn/163zvmbeyox.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163cduhlptn.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163mfebbzlx.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163ergksslx.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163qdxncdgw.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163tpxjghux.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163adgkmocg.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163hzjozalh.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163dffprxbr.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163pguteigz.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163eieyrcfa.html


<!-- 参考信息 -->