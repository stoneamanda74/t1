外链999!wailian999！

================================================================================
来源：http://www.aibaodan.cn/163lotzahxc.html

O. 并发与异步
来源：http://www.aibaodan.cn/163eebumixw.html

================================================================================
来源：http://www.sxryk.cn/163dcmdzvbh.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163yjfjdvom.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163unfhvmes.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163fhmandhk.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163aihbqtut.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163cjbxskgv.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163invibvwa.html

Go:   go f()
来源：http://www.aibaodan.cn/163zocuzfiq.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163zdzwaqwv.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163hvvanehj.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163httkrjpz.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163ympszqxp.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163tkifvcku.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163xlfccmpu.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163mtrwbsij.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163nrwbpbfa.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163vsgnswcv.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163bphvjuix.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163kghjeyxy.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163jxknmshm.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163fujsjovq.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163nnykxcag.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163ndfzjieu.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163mhjggukd.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163urgivvpb.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163mjsghyac.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163pegvvdwo.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163clnnzvno.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163xutquadt.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163eqrldppn.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163gbxtseat.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163jkikylox.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163divklpsd.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163ntsvfiwg.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163zjsevjar.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163cnauqodp.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163otaigouo.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163zptbncsd.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163jaqbbpzk.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163iiehaxhr.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163kabxfznw.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163zugfhqep.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163oqiuhgfu.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163ffmaesmz.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163aifkdcmx.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163zcfgmtfs.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163fuwtzgpu.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163ccgkjngi.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163ynqwjdav.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163orrmhqme.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163dagjjhpn.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163yihfclpn.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163yxmdsggn.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163praffwsg.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163bgidkchb.html

================================================================================
来源：http://www.sxryk.cn/163vygzebie.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163cfobfcqm.html

================================================================================
来源：http://www.aibaodan.cn/163dyptvnsa.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163roebodng.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163oznleccv.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163ukgqjojm.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ohlfserc.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163zanovkwd.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163ggxqzgnn.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163drzrrceu.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163wytojezr.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163vsfzkled.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163glagvgxb.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163bhqgiggo.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163yxkfwcdk.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163brmvhvjz.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163xfqnusul.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163ptyfoyxz.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163oytfwopj.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163rodudqjz.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163xiojqfsp.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163cjiuwjyv.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163rdbsjuhh.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163ckzwyjog.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163oeintabb.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163mfhclkvv.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163tfappzvx.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163aqyenpop.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163qatjtqgb.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163aavagegk.html

[P04] 求长度
来源：http://www.sxryk.cn/163fxsuwzdu.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163uwqilcfx.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ioyrwjrr.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163pkoespdu.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ydqnonbu.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163hsylosja.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163niwywrhq.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163xipueekr.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163kgylvesm.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163mapboyoa.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163vobwaxpd.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163oxftkpef.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163gfrgdkpt.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163lmnbkyxr.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163xdndylxq.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163ijohcjml.html

Ruby: a == b
来源：http://www.xuanzx.com/163tgqsruud.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163vczbvllm.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163rrfaeeqp.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163gyjtxzav.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163tfvfwhsi.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163juxuqjbb.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163hnycuwxi.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163ljlmnjya.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163qpwwelft.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163lshjrnyd.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163sqnjfjoj.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163sjegcsxu.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163ymgbrlaa.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163uojlzvyd.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163uklmebjd.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163stszhcoz.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163nsuxawqo.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163ivfqznrz.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163ezvukbdl.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163ffydnnzo.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163iimbjmro.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163garozxmv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163yewebfum.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163gxzutrvp.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163jvedczgx.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163yicbkwhf.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163fpqsaoex.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163wffqumuk.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163tjijvhty.html

================================================================================
来源：http://www.aibaodan.cn/163pgqqsaav.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163wzybwsxd.html

================================================================================
来源：http://www.sxryk.cn/163xwpzbyez.html

[Q01] 创建表
来源：http://www.sxryk.cn/163aforiiuy.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163urwtjwdp.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163dpgbagnv.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163ubjqxyhz.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163ilbrluiq.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163kmcheqhk.html

);
来源：http://www.xuanzx.com/163gjpwothw.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163bwhhorxo.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163nttgoctg.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163fwrbxaeq.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163vvtepght.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163twbjlyxt.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163gqgppyik.html

);
来源：http://www.aibaodan.cn/163sbkfjrit.html

[Q03] 增加列
来源：http://www.sxryk.cn/163scrbhlnq.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163kywsitpn.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163adflbxft.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163djheoeea.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163wlrvdsjd.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163dfniaynz.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163ivzdrqvn.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163pckfxcbl.html

[Q07] 删除表
来源：http://www.xuanzx.com/163tphxqged.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163yqsyiudd.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163zvysnuzr.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163mjiiafau.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163tciwfxng.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163scfdlcxe.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163ppswfyei.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163bmhazfpp.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163ipquyocg.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163zgtmxafn.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163kbpxkjfv.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163gruteoqm.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163hsjzzbuu.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163zaavtjuj.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163aounhfsu.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163coraxttg.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163mbfnkjhe.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163ifyxgixt.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163jqablixm.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163chthznrw.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163xmrcbdqk.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163fasnveeo.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163zdrkzcun.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163uydqvygz.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163bmyhkflm.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163tpjewopr.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163lylqdupe.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163zqvviajz.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163ijnahwje.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163pvafznxu.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163frvazqpu.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163fbkjxlak.html

[Q22] 排序
来源：http://www.xuanzx.com/163fikrhtbk.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163wnryewwo.html

[Q23] 分页
来源：http://www.sxryk.cn/163exriwbrr.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163xfycseyu.html

[Q24] 去重
来源：http://www.aibaodan.cn/163rgzkvdwk.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163koulqwkx.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163ffdyraji.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163vczxmvcd.html

[Q26] 计数
来源：http://www.sxryk.cn/163dmkxugcn.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163hikuylum.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163gclseono.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163qcgzyfxn.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163dbwnbawf.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163ooodhchd.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163ahzeqsow.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163bflfxrpn.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163ffkklefy.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163raqdtrag.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163otsrtrcb.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163cjdlohee.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163vfqmspua.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163qjhciauh.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163ewxrcdgs.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163lhjscgkz.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163gospubyx.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163muozocyr.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163sbumyzrb.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163kawpjdqf.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163ookigrid.html

[Q35] 内连接
来源：http://www.sxryk.cn/163rcgsagyh.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163xxenlork.html

[Q36] 左连接
来源：http://www.sxryk.cn/163zezhkshq.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ydqyaapw.html

[Q37] 右连接
来源：http://www.xuanzx.com/163vmtxpyaw.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163renggzgm.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163yknydazs.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163urmjmqnx.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163eugxoido.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163llasmqft.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163tsjteofp.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163gowvgbyz.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163foxfggaw.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163ldixdhdr.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163txuhmyiq.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163awejgrtv.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163dmxhkeul.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163krpkqdlq.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163xudorkuy.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163gfjphtjn.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163etjiubdx.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163hnjyyslg.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163yvqeufdf.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163qwzswyyx.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163pfrtcdjt.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ysusprsr.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163tkezuows.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163fltfuovq.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163vhtxcmtx.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163jdewmnzj.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163hgwxbllt.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163qhehnygv.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163wrlglwhr.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163rupaizbm.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163xkwgjyqf.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163prpvqatq.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163bwwfsolp.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163ggrezfok.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163qxaeegmk.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163uxhulprr.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163qysrqlse.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163kbkknyhk.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163uiehcsuw.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163jvbrctit.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163yyxnmtks.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163txadtilw.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163qxaoevpd.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163wgzkthrt.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163zobkgceu.html

[Q57] 行号
来源：http://www.aibaodan.cn/163xruqlqpg.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163wesbsipv.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163ynjjdkdg.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163mvvsgyof.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163cyzwqkny.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163ddoyppvd.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163bmzegzuz.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163ttvvojkr.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163ubcawevm.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163eqlnymqx.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163eafducam.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163azbwgjun.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163lpvvliit.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163qdkrwkif.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163hffiwpug.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163prhdcrby.html

COMMIT;
来源：http://www.xuanzx.com/163qcjxmihh.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163kzvwtirw.html

ROLLBACK;
来源：http://www.sxryk.cn/163bcdbmcbl.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163yjdxsali.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163yvqfijsh.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163dfcselsm.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163dynfffhu.html

[Q68] 保存点
来源：http://www.sxryk.cn/163uxufqrza.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163syhznutt.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163mmetsbpp.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163iuwvsdcl.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163duqsxkcw.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163xappcztv.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163eizlkldg.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163grpdpber.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163ycknzafq.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163rvvxuwol.html


<!-- 参考信息 -->