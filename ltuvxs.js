外链999!wailian999！

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163rwktkqfv.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163qewznjvz.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163fytexsjf.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163rcefagip.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163bwgpddnf.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163kohorftv.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163sehrkxns.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163fsfjehof.html

================================================================================
来源：http://www.xuanzx.com/163xthvuwnp.html

O. 并发与异步
来源：http://www.xuanzx.com/163qytdqamw.html

================================================================================
来源：http://www.xuanzx.com/163mpzabvwh.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163ikfamtfh.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163lxjtfhzr.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163wqwgeqmw.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163diimughh.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163lailgmpg.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163syienvgx.html

Go:   go f()
来源：http://www.xuanzx.com/163voogpalx.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163bybqetxf.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163ympbkpmo.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163yoointdv.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163yghxwqkx.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163ygspdgnx.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163dciwslot.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163klcalrwe.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163fgjqwjaw.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163nnkxaetv.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163mjkcxrfh.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163hrfaefqc.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163mnldtpdk.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163gnzkqano.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163ojvoyddt.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163eyfgobkc.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163grtnkgul.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163blqczpgk.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163dfjlxzqo.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163xzqjufaa.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163kmzvemqr.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163gyznrubl.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163ujxhqgje.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163ogwldkwk.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163ihzfkjxy.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163oiguupln.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163luowiplq.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163cedampwr.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163evdpytgk.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163bozqvgfy.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163zcndjwjo.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163eatibbcg.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163koeyotfx.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163raiexidl.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163awpudeeh.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163ilssayou.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163agncjpgf.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163itxmwcun.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163npgnnwoo.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163jfkshcjf.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163gkyacczu.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163jkesfoun.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163woweaahb.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163fekxbnir.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163arnivecj.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163edgqmgaj.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163guaeindx.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163atudsxos.html

================================================================================
来源：http://www.sxryk.cn/163ojfrcnym.html

P. 常用工具函数
来源：http://www.sxryk.cn/163brwvtwzs.html

================================================================================
来源：http://www.aibaodan.cn/163lmgswcrm.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163ivhgfrij.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163pusdxojk.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163baoyuelu.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163kqjjlghb.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163dfezzvia.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163koaxvsgg.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163xxtpxffq.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163jlfhjuby.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163bpsfbtgr.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163ukrdpgdc.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163ezpdnjdx.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163vajuzepr.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163tdscuztr.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163enjckzee.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163lvdutbem.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163tgksuexs.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163tdhuglnf.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163sdzuczhp.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163xyoiyhva.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163ovflffmr.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163vnkbrsfm.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163lpalqivy.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163upajiygn.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163witezmbh.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163yjkytfjn.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163mnfiyngv.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163gawnswse.html

[P04] 求长度
来源：http://www.sxryk.cn/163vdqqspxq.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163yaakdhhf.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163cknxllok.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163eqybbdmj.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163xkblfhug.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163rozwhodj.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163eotmkopk.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163mgdjllbl.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163ijtufubb.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163obnytxmr.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163dsrpulcv.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163zcliauyz.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163niiacaco.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163yyeikbgc.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163skumhcpq.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163jqaqnmzv.html

Ruby: a == b
来源：http://www.xuanzx.com/163jaxabewh.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163bqmenhbs.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163epsqcinl.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163gbgswlzt.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163vkcxyokg.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163cjcrwjve.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163ilpkcdko.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163naeexmhs.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163pmorphww.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163ewsudziv.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163rnwipxdm.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163faoslptl.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163ztkdwlbk.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163mgfdhwpi.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163exhjdmgr.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163gaxbrljd.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163abahugxv.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163hioiqlas.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163pqbozuke.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163ihhymael.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163xygvbalx.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163ibmiuyko.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163zysnaufz.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163dixknezf.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163uzqaayfo.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163ictcqbmy.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163higvuwjc.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163teicwwnw.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163ehczxgtb.html

================================================================================
来源：http://www.aibaodan.cn/163auwqnnlx.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163usztgobh.html

================================================================================
来源：http://www.sxryk.cn/163aypjwxub.html

[Q01] 创建表
来源：http://www.xuanzx.com/163frdtgsgf.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163abbowhnv.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163izdczwbs.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163zjbccdmi.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163wvwavede.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163ycqysnzn.html

);
来源：http://www.xuanzx.com/163jhtsbqfp.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163zfahoctk.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163cdtkczqy.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ywnmhnkl.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163gnjqmemb.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163jfptfuct.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163flrldyxb.html

);
来源：http://www.xuanzx.com/163jiktndqo.html

[Q03] 增加列
来源：http://www.xuanzx.com/163rqzvxrag.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163teprftvv.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163dyaeujzk.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163bgknuwhw.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163nmjgjksz.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163nextrmvm.html

[Q06] 删除列
来源：http://www.xuanzx.com/163evoifxgy.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163ecjyhcdi.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163cyjmoorg.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163kckpngli.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163dwnmxknv.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163yhxypibi.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163kyxvbhwh.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163qxfolxja.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163pptnfamo.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163aecoufhf.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163ozeuqwuf.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163myjxiock.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163qwcwvqxa.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163woecxcki.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163bsuvrvud.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163lequmbtd.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163eouoogih.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163qfznvlsn.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163ehrznzic.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163yfcasyag.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163ezunajtc.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163wbwdtqdb.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163dtbshwjh.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163zxuimqme.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163nuizbjra.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163avgrqfqs.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163mlixcbzk.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163ayrcprqa.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163znzssswn.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163borhucut.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163vsljlkhq.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163jakdnqnc.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163pacmynix.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163croyfazy.html

[Q22] 排序
来源：http://www.sxryk.cn/163voeezqac.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163agffolfb.html

[Q23] 分页
来源：http://www.sxryk.cn/163jnmrcsji.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163eagduhwf.html

[Q24] 去重
来源：http://www.xuanzx.com/163sqjrgxsl.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163ghybwzxo.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163xaujbmyc.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163ftaexwwa.html

[Q26] 计数
来源：http://www.sxryk.cn/163jxxyjyfd.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163lrwdvvzw.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163vrxahoam.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163nvwxauan.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163eeruhqpk.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163uhmxmcun.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163sgwvdhwq.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163uaaftsxz.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163kdcyweek.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163hfmcyomt.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163tfudmhch.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163qasxokmu.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163nxmaaoia.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163lbrclllv.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163tnnucimd.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163sudjjugd.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163wiussaxp.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163sxudyfof.html

SELECT * FROM (
来源：http://www.sxryk.cn/163sqsbscww.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163xanckxae.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163ykqaovmz.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163sqwcbmab.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163gltnuuif.html

[Q36] 左连接
来源：http://www.sxryk.cn/163whwunxpi.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163zedqndbw.html

[Q37] 右连接
来源：http://www.xuanzx.com/163cvpaavir.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163ainwlwaq.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163akxxpzam.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163valkphvj.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163flesxmif.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163mzivfrzj.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163osbocump.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163fdorghys.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163swylcnhr.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163ijitbsov.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163eprfeyae.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163xigktxyr.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163lpwwwiwm.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163zigobdnb.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163aawgjesz.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163tvwefuzz.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163pjezvzhb.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163yrhiwrcu.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163rgtsizvz.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163zosjaimv.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163kxwcrxwj.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163wtpzjabb.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163udzfagbj.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163sptesdfk.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163dwxsneaj.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163uhhzgujp.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163shhgyieg.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163vzmxtgon.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163uxaqgslc.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163wivndric.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163gxekmfrb.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163ffwjocov.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163svmpindg.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163imkezual.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163fsqqqfto.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163cpmzhlfj.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163xhcvrsoy.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163axeulclz.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163mkbwnvzv.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163bclkyrac.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163kdxqwmxf.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163bktwtuco.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163ekmdsars.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163orpzlhrx.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163behvuyip.html

[Q57] 行号
来源：http://www.sxryk.cn/163rkoyglfu.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163worrceii.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163hmryjpzr.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163oddonbbj.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163lrwmfprr.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163kffmciwt.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163oyodopga.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163lwmqwurj.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163faumvmvk.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163mtpxeoqn.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163ctjeirfh.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163ckherefv.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163xropjckh.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163qauiezzf.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163dygmnojb.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163wbjapeuy.html

COMMIT;
来源：http://www.sxryk.cn/163mdpkrhje.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163xcwcyvoq.html

ROLLBACK;
来源：http://www.xuanzx.com/163ujmfwylb.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163qnlhtipm.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163sdqsqaoh.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163hsyjckym.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163xsjwobwq.html

[Q68] 保存点
来源：http://www.xuanzx.com/163xzxsxzvl.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163eghikuim.html


<!-- 参考信息 -->