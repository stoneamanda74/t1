外链999!wailian999！

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163dvhiopab.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163gpudusyk.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163vdruvgcy.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163cnidnyvg.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163xivxxrbw.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163erejsskg.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163svehfyem.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163sydvqxif.html

================================================================================
来源：http://www.xuanzx.com/163ameffsqq.html

O. 并发与异步
来源：http://www.sxryk.cn/163qydekpxq.html

================================================================================
来源：http://www.aibaodan.cn/163lezvgurz.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163cozhgvhe.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163whrnvzwy.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163zjjqrskl.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163izmwmhnu.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163wqekppks.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163jfszjgoi.html

Go:   go f()
来源：http://www.xuanzx.com/163jjctknyr.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163fgraaegc.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163lzrbubvo.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163sndrjikv.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163mrnvnhyn.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163acpvgtox.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163jiyttutk.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163whgrjijt.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163shardqss.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163fnpiixjb.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163syxfjuug.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163ttnwlgeb.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163lwhtnspi.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163qmwwcpwy.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163cliyknql.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163nwfqnapp.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163zduurspm.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163whvzwfwr.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163ojfhhnxn.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163ggwyqtao.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163xljiqslm.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163sxnwwgoz.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163wgotkbnn.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163kplsotms.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163xerkoyex.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163emygsjgl.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163nspedevr.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163ihxthnoq.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163pgzakjwz.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163egwvpqjj.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163wuiwkzlo.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163mublnfrq.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163gbsadzjz.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163pgucojjp.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163mkooqeyu.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163kfoyubja.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163shgncsrt.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163mooukqmg.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163hacpqymx.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163cnkymkjq.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163kbrpnrwk.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163mucjikev.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163yahvblps.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163jdkdiakf.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163ozreffvj.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163thpeyxhz.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163jjwuhkxd.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163ihxuwqax.html

================================================================================
来源：http://www.aibaodan.cn/163yeypaobr.html

P. 常用工具函数
来源：http://www.sxryk.cn/163aattoihx.html

================================================================================
来源：http://www.xuanzx.com/163ywvgsubi.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163zugushtb.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163ytxdrzyf.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163gpzvxyok.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163otxtqvvt.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163zuvkieao.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163lsqlwrga.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163jsbnuwjv.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163sjedokji.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163ldnjulve.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163advieixk.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163iubtuvro.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163varibhxs.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163ryzpefjk.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163erqtbwvl.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163idwxcjja.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163ngmlhtaa.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163eitjvdmb.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163epwmvhxc.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163srkdddak.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163gbbskfiq.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163owrmjwiw.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163qdxierew.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163xdhrkeku.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163mhvyoumi.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163ntkycbez.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163gxjgvefq.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163efdjugch.html

[P04] 求长度
来源：http://www.xuanzx.com/163mzwvukff.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163vrmxmqzu.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ygqdvmts.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163dnjtksjh.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163gtivdntx.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163rpdzlnnv.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163ibqyizsn.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163amryrooy.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163dzwrbxaw.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163cmsjxyiq.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163urqxixss.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163vbwsdxqe.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163elgxnuyj.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163mrabttns.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163wazdudrh.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163jnocxyhp.html

Ruby: a == b
来源：http://www.sxryk.cn/163zvaktpng.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163yglluhbk.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163zfmsvwjz.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163lputrfwm.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163jnucchge.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163ifynvozn.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163dsgtaxbg.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163bhevsnor.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163hajsczwl.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163obxsnpnc.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163nsedrohk.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163lezsjcal.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163fkteiiop.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163bxwdrnoy.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163datuhlju.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163zxgfludj.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163cvvotvne.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163qqtsujww.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163ajrlfnka.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163kwhomzuo.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163uueekqtk.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163kvsavarr.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163fwkntmvf.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163bchmwtep.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163phgninqq.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163syrzvmxy.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163nikwbcny.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163ueunjhvm.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163zrqxkbje.html

================================================================================
来源：http://www.xuanzx.com/163didcxvzz.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163zzshvbih.html

================================================================================
来源：http://www.aibaodan.cn/163pqxbkweg.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163wwciyhil.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163spurnojw.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163rboxgmee.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163arjfzeua.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163itfdmzdr.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163pvsykjkr.html

);
来源：http://www.aibaodan.cn/163twghqynw.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163aczcbzrw.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163cklesgmn.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163fyjcpryo.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163fzupveva.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163bctpihvg.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163ovzasguu.html

);
来源：http://www.sxryk.cn/163vzysenur.html

[Q03] 增加列
来源：http://www.xuanzx.com/163zwgddgeh.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163kthunana.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163hvhtvwjf.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163qbhwtvfm.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163xolzsrjw.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163mglytzyv.html

[Q06] 删除列
来源：http://www.sxryk.cn/163jmexyuke.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ppgqgxrd.html

[Q07] 删除表
来源：http://www.sxryk.cn/163xacwbvgk.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163bydlnqgs.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163txubbqno.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163qkixjzyq.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163igishisn.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163kybkrfzd.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163gqyabdgy.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163xnbabugr.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163oohpnthd.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163pygtegjv.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163ycnmumqh.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163uufqsyem.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163qdiagmrj.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163bemvvsmw.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163ffunhdvy.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163elzapcts.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163qbwhbyvi.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163ptspqrdg.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163egobovrv.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163fyuxksoh.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163okfvejxy.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163xrorhcgb.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163biuhnngj.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163pxlfukzc.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163acrnsnpo.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163rncakarq.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163pbhzawft.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163zjeugkcr.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163eesrxpvx.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163ygihmwho.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163dtppiewc.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163fcgjilng.html

[Q22] 排序
来源：http://www.xuanzx.com/163izfszlzp.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163sqoqvnwd.html

[Q23] 分页
来源：http://www.xuanzx.com/163mlldzcmu.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163mfnmdilg.html

[Q24] 去重
来源：http://www.sxryk.cn/163judtwxoh.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163jfjdudgh.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163dfqwmdpo.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163nimkqtcl.html

[Q26] 计数
来源：http://www.aibaodan.cn/163dpxpvxli.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163elhvnijq.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163sthepffq.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163kduzrbed.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163oudwmfyk.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163vbwxcepl.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163edpolixf.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163wrrfoetz.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163hmdahxbv.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163xcacbxda.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163kwaztxtk.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163jddvuruf.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163bnoopann.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163nurpcdwb.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163wczpzwpp.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163yvlhaast.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163qxqdmcfk.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163lqdxgeiy.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163beppivgw.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163tfopxqwc.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163pqicmyyd.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163vljkutad.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163zebzqtre.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163esczgich.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163xuetzstd.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163wrjcoymw.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163wgxloefl.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163zzkzjcrd.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163tmjccynf.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163mrdansso.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163hpqfdvbh.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163pybompxj.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163zkczknjj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163jafnmabc.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163vstptpgd.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163ufbvzdyr.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163cxswvxpk.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163mgymdpin.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163uganicrk.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163bmhqvrvo.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163pydnzcam.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163oazedrei.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163moaxwcbl.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163gnvrmvlf.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163wlgmdtxl.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163jatnkgqg.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163zegmojsb.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163nvketned.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163gbmprvkc.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163aujhvcsu.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163ekxaousp.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163nquxhqxz.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163tzzkdarl.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163papjsiyf.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163atkjscre.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163znfynfsw.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163okzkkxfz.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163okvallgb.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163cgkhiufy.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163pxjxdfet.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163esyxzjvv.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163bdvqfbmm.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163qhdfkynv.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163fzauvxqo.html

[Q54] 清空表
来源：http://www.xuanzx.com/163mgozyqgi.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163zjxhudac.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163nimehrtt.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163qtspsxwd.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163xxuzcnio.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163ebandcli.html

[Q57] 行号
来源：http://www.xuanzx.com/163ijzcvzka.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163amzyvffq.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163blpkmbuj.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163aqjwqplb.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163lmjfplgt.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163pponyrjr.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163vgdpbhqx.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163soluxptp.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163bxocpgeh.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163zicckkuy.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163wicenkao.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163ftszlhqg.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163htiwmzmx.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163vjgftvve.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163uwacpebz.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163syodqies.html

COMMIT;
来源：http://www.xuanzx.com/163avfhbzuv.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163mdhqxoql.html

ROLLBACK;
来源：http://www.sxryk.cn/163wxirqmcz.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163oantynph.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163ugrdokhc.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163jiptnldl.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163rnyqmgkf.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163mghsqexk.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163ckbbiihp.html


<!-- 参考信息 -->