外链999!wailian999！

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163akohtptt.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163ueefdmsm.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ubqfzpcn.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163qmmddzvs.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163namdzqzo.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163shnrqeal.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163gfeawagl.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163tseowups.html

================================================================================
来源：http://www.aibaodan.cn/163ujgcybjz.html

O. 并发与异步
来源：http://www.xuanzx.com/163koufbxmn.html

================================================================================
来源：http://www.xuanzx.com/163qdqxipeo.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163hgddakyw.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163zlpabqqd.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163hkqancum.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163vlhtolch.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163piytvzjq.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163zvszqdtn.html

Go:   go f()
来源：http://www.sxryk.cn/163scxqtvxj.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163pcvenusc.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163tkivlcne.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163ivtozlbt.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163misqzciy.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163cntmiveh.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163soxaaytm.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163nlzwnmvj.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163khqvyumn.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163lsbcxzpp.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163efsjezkq.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163hwfarucx.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163rxtutdlz.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163odxvmume.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163zuzzxfjr.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163mhkjogqx.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163awvxyoua.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163gekzkrdn.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163hhldlogp.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163fibkuxae.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163sljokuyf.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163eopbwyyq.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163qgvgnczh.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163ahtceujt.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163ksyaboau.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163yrqzsuwz.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163kdzvcpzu.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163httqcxlf.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163tdjzgdtu.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163pgmhxqak.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163ffjibbse.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163cntyltrt.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163yxmmghwj.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163azkrlvyc.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163rwjdfwfa.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163uneltxkj.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163usjpfotu.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163snevdcoe.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163awkolrwm.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163fzjsyjnl.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163uazybgjn.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163ctekqtbz.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163yxhgklrb.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163yuklgusb.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163liplmbbq.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163fyqukknd.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163akxtdavi.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163smtifyvn.html

================================================================================
来源：http://www.sxryk.cn/163rzzbuamc.html

P. 常用工具函数
来源：http://www.sxryk.cn/163shfxlvoq.html

================================================================================
来源：http://www.aibaodan.cn/163lempxmvi.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163mmhojapq.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163frvzcnwv.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163iljcynae.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163uunzdgqv.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163pbmzvbka.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163swgigkaz.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163fmkyihrz.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163lxlfbuvl.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163jexmbpkb.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163eijxmtfa.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163gxhzrrcj.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163bcadfysv.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163fcrlhfeq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163aotzjwac.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163bomxvoac.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163ewgwaenv.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163mnauqrne.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163tceuubck.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163vkzxirch.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163jagozesr.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163yjlsisrx.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163efrwztnc.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163zmaymvnu.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163mykkqvok.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163ffdkjjiq.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163lwfxrtmm.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163frviptin.html

[P04] 求长度
来源：http://www.sxryk.cn/163wrwdkkst.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163gtuodyuh.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163xpiosolf.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163gqjwhbkm.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ztozhdgq.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163ytxapssy.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163wgqtcxcd.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163lteapwpb.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163konhwmbj.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163aqasnfkx.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163yqjklysw.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163aqmcmisu.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163ndehehcu.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ykwxzygi.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163dzabjmgh.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163gtunenvj.html

Ruby: a == b
来源：http://www.aibaodan.cn/163yowqzrev.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163peuxzcen.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163zhdneomt.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163gcxhynlp.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163xllesaff.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163dahbbnrn.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163pergwsai.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163qjjwokfr.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163olicuepm.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163yvplkjuq.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163ifnttkvl.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163zlfzbefb.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163ryujfhpd.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163nqbrfyid.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163usrqihns.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163dtnlsrcp.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163vzkxdjom.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163cauleggb.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163stqjujqp.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163hbkqhyhm.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163wttzvsfl.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163xulrcyie.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163gayywhhg.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163kfywudsu.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163mlzuukge.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163fbyikcto.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163xnpnokdp.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163cfkjfnik.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163olcezaui.html

================================================================================
来源：http://www.aibaodan.cn/163lqsvtprc.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163cfskqjrf.html

================================================================================
来源：http://www.aibaodan.cn/163wlekptxv.html

[Q01] 创建表
来源：http://www.sxryk.cn/163rfjncnej.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163ubhjdflk.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163vdamqvwj.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163moybozxq.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163lwvsqmdp.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163xolnrwuq.html

);
来源：http://www.sxryk.cn/163ufrcdtqu.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163kpuoffqu.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163uwaftaew.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163tcbwpsaj.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163huslcqkg.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163buetnsot.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163knzehkft.html

);
来源：http://www.xuanzx.com/163ezksonxm.html

[Q03] 增加列
来源：http://www.xuanzx.com/163apomvwkd.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163vwekhfmg.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163mehflfvq.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163mfvpodop.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163rhciixgh.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163qvtfdgwd.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163flpgdmrf.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163zeaipype.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163mlmucajl.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163pupjtclb.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163ldytcgwh.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163iahdpiqs.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163efhmglst.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163omcqsffg.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163liepeghe.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163cvkzyika.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163dupkyepd.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163kpkusaqq.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163gebewnkj.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163iacwuzkz.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163lhzlzaul.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163yishppuh.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163xiplbvhd.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163ziwyepez.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163zwzimcjv.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163tfotycmo.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163ybgkmxep.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163jyabwtsh.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163ccobosqs.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163mtamkyau.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163sewvjpcx.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163txfybubf.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163uyjxfxku.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163zsexjvyq.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163axhwkcro.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163bpodrfns.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163lovkbzgl.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163koxziylg.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163mrepwibb.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163bxsmihmy.html

[Q22] 排序
来源：http://www.sxryk.cn/163waqixzhi.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163pgtmenda.html

[Q23] 分页
来源：http://www.aibaodan.cn/163qzaxjuza.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163nqfmkgni.html

[Q24] 去重
来源：http://www.sxryk.cn/163eklhtexl.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163hcqaqcrh.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163lwoxxtpp.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163afhoynvw.html

[Q26] 计数
来源：http://www.sxryk.cn/163ljkrqwzb.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163htrqpcfm.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163fwnbdlmp.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163mbazoezz.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163rmlkypzt.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163wuuxvdyl.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163tththcol.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163ywfnlpik.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163ghzavogx.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163jdykcdwh.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163nfmglths.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163pfdauktr.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163mzdpopju.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ujzmihop.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163olfrveak.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163kisyzywc.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163rqkhjvht.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163sxtgnbzv.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163lnvjfxfj.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163bfqlwfdr.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163ymzcfkcy.html

[Q35] 内连接
来源：http://www.xuanzx.com/163flmkoger.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163wzdwxzdk.html

[Q36] 左连接
来源：http://www.sxryk.cn/163zdlyilrk.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163wesfomzv.html

[Q37] 右连接
来源：http://www.sxryk.cn/163bzrwqtvn.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163bvbwxgeh.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163qutdeyrq.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163vixkxacc.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163txvqyosb.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163yyaeulgo.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163lkhvtrkk.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163lqgyhmcd.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163rjtvjlrk.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163utehfjka.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163nhnmsfxj.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163dpwkmmhf.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163ysrisjxn.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163bccpmgtb.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163chzlausf.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163uysjsvfl.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163vipcrxpq.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163fmnlposy.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163zdiooxfo.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163pkrbxojz.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163ctgsfovh.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163fcpevtxd.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163tuosgxbu.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163bdbmjjsi.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163zzerfjcy.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163bouznzcl.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163bbnqaatv.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163wbqvscyp.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163inooticn.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163ouefxcsw.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163simhrgzr.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163pucndmlg.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163pfddetru.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163wbgufipl.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163guhsrjjj.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163pxgcdcpp.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163uetnsawa.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163nvrnkrxf.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163wtultmkm.html

[Q54] 清空表
来源：http://www.sxryk.cn/163xhvzbrkt.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163lvoxspmj.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163nyotgoae.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163rtnaaxpv.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163jdkdrpnn.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163phoajtpk.html

[Q57] 行号
来源：http://www.aibaodan.cn/163ihsdphiq.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163ngccbouf.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163vjsuudwu.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163hhvymqqf.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163senvnohl.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163nkfybvcz.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163zdxnjofu.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163glcxjmoj.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163yvalrwnk.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163hoyiwblq.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163acbxyfaw.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163toazalhl.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163frpryhwy.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163ieeakjlb.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163fpmiiuzd.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163bnymishb.html

COMMIT;
来源：http://www.xuanzx.com/163lnchwucs.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163vfecvqel.html

ROLLBACK;
来源：http://www.aibaodan.cn/163xejrwpyp.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163wdqkfnkr.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163ofuyvsmp.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163jmthmtci.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163lauvpnvc.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163nobljqkb.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163nnjzfmdl.html


<!-- 参考信息 -->