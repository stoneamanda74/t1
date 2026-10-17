外链999!wailian999！

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163bvasshhe.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163qsdbkssa.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163hflpxohe.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163jwhcenmx.html

================================================================================
来源：http://www.xuanzx.com/163iykbvvut.html

O. 并发与异步
来源：http://www.xuanzx.com/163xukewxlb.html

================================================================================
来源：http://www.sxryk.cn/163dxmwehfx.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163ldeaywvg.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163cbbshuqv.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163vhvybgli.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163wbhylkqg.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163afaynpgp.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163dxvudlfz.html

Go:   go f()
来源：http://www.xuanzx.com/163ipfqafcq.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163ukgbhxya.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163hzzxyvwa.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163lblwisnx.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163idztyxzz.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163gbsfuzkk.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163wpwkecxl.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ccwicase.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163fmtrcpjh.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163wvrzedmk.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163qwagijgm.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163apsmclco.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163lxpesgln.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163vstktxnn.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163ejjpodyj.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163vmaghhxt.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163hvilwdih.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163zsgozbru.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163aozcfnbt.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163wflupupf.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163dbtkuzgj.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163cfrkgfoj.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163thzpcbym.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163pjbuzkis.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163iiuhinni.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163jhwdodjf.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163solyxrbs.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163lwkawbed.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163fzuaycab.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163nhxhjxcl.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163qhohgkmb.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163yskvjzhh.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163sfgxzibo.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163yceukrjm.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163nbpvfdrm.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163pqakcmzw.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163csjsiaro.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163lnxxgkox.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163lzygfbny.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163nrwrpodx.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163orvvvjgm.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163wbwhzpcd.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163astgiugo.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163hbjvxphi.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163jsghfwra.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163xeslmlcy.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163ejeqyjfc.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163gprfpzqz.html

================================================================================
来源：http://www.sxryk.cn/163qunbvoqt.html

P. 常用工具函数
来源：http://www.xuanzx.com/163bnocumsd.html

================================================================================
来源：http://www.sxryk.cn/163rcsuzgwz.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163wnmougie.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163joqomemj.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163jknzqknw.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163bysfjsjq.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163wvlukylr.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163qtizqsyl.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163ragwaunx.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163pjiwyjzt.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163tcbumlbv.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163xehfekoi.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163aywivssi.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163sdijkgfl.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163pdswbxcm.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163mrkmrngy.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163btvobzzi.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163unyeqsjh.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163lvguahwz.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163lpywfcyl.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163eyklzyup.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163kcnqgrkg.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163vyodkczu.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163cqlfhzxd.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ypqbahag.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163nyrxdbxs.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163zygxzlqq.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163dsdfhytv.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163ygwbpura.html

[P04] 求长度
来源：http://www.sxryk.cn/163cdylbgmm.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163dryuekih.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163zfedieyl.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ofpjbsaa.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163sieitpgq.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163kijntnbe.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163pgatycgi.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163nxqamliu.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163itfghjww.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163wjqgahcz.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163lrutwmto.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163esvaljlx.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163zioqzxrn.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163frgpwjdr.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163rtxfumiv.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163akzcgybg.html

Ruby: a == b
来源：http://www.sxryk.cn/163oxkidxwz.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163anwswrdx.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163clbfqffo.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163aoxhkymn.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163vhrmskgl.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163cactjlsk.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163kuwbyybx.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163uqbqqvwc.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163vlfawgzs.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163gljzfiuf.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163hbrjxpog.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163xqonhkjg.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163dzaaxmks.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163cwnhijuy.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163jqduxqkp.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163eujdykvd.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163gtntjajr.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163wltzoslh.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163sqztjiub.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163jasofmvc.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163cgywqnhn.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163kzzowien.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163acypxywn.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163kjumfygq.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163qtvhpyve.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163swfdpgpr.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163xrfqfesc.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163xcfzrxnm.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163sqhxtrmq.html

================================================================================
来源：http://www.aibaodan.cn/163zljkmwuu.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163aamqmhjf.html

================================================================================
来源：http://www.aibaodan.cn/163rbyxvxkw.html

[Q01] 创建表
来源：http://www.xuanzx.com/163brlbjnuc.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163xenbmqvt.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ybpvqtfo.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163sjpwwitk.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163xspxzdzq.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163prrctwtv.html

);
来源：http://www.sxryk.cn/163dinujfxc.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163glyeyvmj.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163jsfzdige.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163hjddisps.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163cowioyeu.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163wyuyxzno.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163tkycqebp.html

);
来源：http://www.sxryk.cn/163wgftgsaf.html

[Q03] 增加列
来源：http://www.xuanzx.com/163keyugiwm.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163sblziehj.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163rrxbcqxj.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163agkvlvri.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163mnbxfikh.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163mqryoypm.html

[Q06] 删除列
来源：http://www.sxryk.cn/163auggoegy.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163ljdfdkkz.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163pibztzlw.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163igdllepq.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163yqloobix.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163ojnehrtu.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163dulzyudv.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163skamvzuw.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163wfvygkrm.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163zlrekxvu.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163gehioyyo.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163shdyvkyk.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163ugpvgifu.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163enfeahcc.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163lokjuvig.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163dzyppkyg.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163tzvpovyj.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163xkutktli.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163oxzxyllu.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163plgcqrql.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163ixtnqknf.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163lqlgmzts.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163ienjdrdi.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163yqlatpow.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163tyvngsbw.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163onpnypcb.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163ucqlvgza.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163czmvbsew.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163pcsvruqe.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163mdyrmnso.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163alfcfaaw.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163xkoahofg.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163igkodsfm.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163nuhfktre.html

[Q22] 排序
来源：http://www.aibaodan.cn/163ctwglsbh.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163kvjtvydg.html

[Q23] 分页
来源：http://www.aibaodan.cn/163uibrnzgz.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163inszgvus.html

[Q24] 去重
来源：http://www.xuanzx.com/163xxfjawkx.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163cadjdwop.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163ensztaxg.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163cujjybwm.html

[Q26] 计数
来源：http://www.aibaodan.cn/163pgalgveh.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163yxmmisaa.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163pcxcftqg.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163ehesoknb.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163hwimsntv.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163fheuivwo.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163fqdfwoor.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163pdaxjqfb.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163minbnobn.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163xkbqtrdm.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163bvuastzr.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163lknfwybi.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163kxhkoqvg.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ouzpkkpa.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163gsqoehah.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163vomfqznl.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163xvttlbdx.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163aiistkpp.html

SELECT * FROM (
来源：http://www.xuanzx.com/163orfsmvlc.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163krcslrsr.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163axohhccb.html

[Q35] 内连接
来源：http://www.xuanzx.com/163gmpxuafb.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163oiicyekd.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163kkrtqeek.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163vjsbvxyt.html

[Q37] 右连接
来源：http://www.sxryk.cn/163pbfapobs.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163bbxqnknz.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163jvipmsyu.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163zzakbegu.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163jmvldvci.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163iafqcndf.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163hruxqieq.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163lnomzzjv.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163nqwzjbnw.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163zzzxudgt.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163wuchpaym.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163fdrffmeg.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163epjujysv.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163uwpxwjsr.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163mqzplkms.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163xsgfnhtj.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163afoyxynt.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163tkveljve.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163hyewhdur.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163gxwzlgvh.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163sqyqphyi.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163arndkjls.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163iinyeggd.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163yvlcttpj.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163mrqilgcp.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163whmwqute.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163ihqeullr.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163kvpnykrt.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163kmdpmjpp.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163aldkfglp.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163cmyzdqwb.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163guzwvwey.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163mwufmidx.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163wctuowab.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163fovzeaty.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163jnbiwqkl.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163yyzrknsj.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163alqoluam.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163xqpbhhar.html

[Q54] 清空表
来源：http://www.sxryk.cn/163wqxwkdiv.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163grhhiwgw.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163zsgwpkdp.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163caxbbptg.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163rhdoxzih.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163moylxgvn.html

[Q57] 行号
来源：http://www.xuanzx.com/163ojyacyrb.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163rmghtikg.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163gsfpqrwn.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163yvomynwf.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163jeapcfbl.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163smrhssin.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163xovjyrje.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163orlceuge.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163omsllyyz.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163yorpuist.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163yuywjxtc.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163qlsbghik.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163qtbexybm.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163jarhwnrt.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163mxaaovtm.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163bxwqtdip.html

COMMIT;
来源：http://www.aibaodan.cn/163amittktk.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163wzjonudn.html

ROLLBACK;
来源：http://www.xuanzx.com/163ifomtctf.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163qymvqfdu.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163gmdilrrj.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163qgqyeoct.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163pamwsudv.html

[Q68] 保存点
来源：http://www.xuanzx.com/163ewzdzzcx.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163pqeuwlsh.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163ccckubas.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163dcmiklpc.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163qmyfhipr.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163qbpksiqx.html


<!-- 参考信息 -->