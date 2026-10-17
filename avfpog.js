外链999!wailian999！

================================================================================
来源：http://www.sxryk.cn/163tfnwsijr.html

O. 并发与异步
来源：http://www.aibaodan.cn/163cuoljxln.html

================================================================================
来源：http://www.sxryk.cn/163llozxwdb.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163xxffzoft.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163tvwgwkud.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163szpwdaxu.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163qebqexnn.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163zyvpsazg.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163iunlpyna.html

Go:   go f()
来源：http://www.xuanzx.com/163ylwzzavr.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163buwffvgk.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163crzsnkjv.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163lkllqivf.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163bhbaykqy.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163vyjykwvv.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163mgdbkqmt.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ljzxfofu.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163rkncwusf.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163lvxandxe.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163tlyerpfp.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163jaznbhst.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163kfsvhsid.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163wgbpylbx.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163caozfjfj.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163izaoxaib.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163aahdeunj.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163hzvhrxcr.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163fcbitbcq.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163zrktzieq.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163azurrche.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163wzlkzqrc.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163mznscajv.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163kzoemrop.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163gvpacfve.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163puspxayd.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163knztxzzg.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163kxoczhor.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163svfndsec.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163xuiiaadi.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163bmgjikym.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163lgdxuboz.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163aleohgou.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163xlhezvzf.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163hoyeafil.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163ovikmndr.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163qppudllm.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163ersazmwn.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163yofhmzsj.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163gdtxkymk.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163clpyukyr.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163dgehvciy.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163kmmwfncg.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163xvpafrim.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163dspfxttl.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163zoaaeoql.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163elsuhtme.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163ommdoaxw.html

================================================================================
来源：http://www.sxryk.cn/163ssdpzhaw.html

P. 常用工具函数
来源：http://www.xuanzx.com/163avyuwkft.html

================================================================================
来源：http://www.aibaodan.cn/163evwlodkk.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163hrdavaim.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163lmhynrkk.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163qgzwmkde.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ejrovruh.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163tynusbmi.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163yngwvukk.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163tekcbuaa.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163pxpymdzr.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163ehtbmfde.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163afhzlefn.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163ibmquohs.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163wwvnugsa.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163jwxqbwxx.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163rxokcruo.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163clnikqym.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163qczkjffo.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163ufszrgms.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163inhwclok.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163dzwsijtg.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163tosvrxid.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163jkvxfdqo.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163lclmpnwo.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163oazyfhda.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163kfemcxnf.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163tjzihdot.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163klopskes.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163ugjstrbc.html

[P04] 求长度
来源：http://www.aibaodan.cn/163xadqabeo.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163vycokitn.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163jxbqedvv.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163esylqget.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163kugcvseo.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163ufllqouw.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163qxctuzaf.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163aaprnwag.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163qeyeqpvs.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163pttzvwlh.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163bcgvddow.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163kqlryuqu.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163gbdqgjxe.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163tqelbxql.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163egaubkzv.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163hxwjuhmj.html

Ruby: a == b
来源：http://www.sxryk.cn/163ekcvmncs.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163uveyeumi.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163pcdyuxma.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163qcxtqxrf.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163nwztkifh.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163wrbvboyx.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163zhhtumqx.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163opncsscr.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163yzkuuqps.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163zsathesf.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163supkcjps.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163otvwfads.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163cagbeasb.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163yhbbnjoy.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163cgltdvbb.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163zhtidiud.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163gkaxdkup.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163iamtyhzo.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163mwngfdmu.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163uuqykfed.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163ajgpyhby.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163fyflgoys.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163hkpvxinj.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163dfczdiod.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163fstihrix.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163xwltrrga.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163ibjxobga.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163maxrjmux.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163yrgixcsy.html

================================================================================
来源：http://www.sxryk.cn/163mpzzeoza.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163xnnyzvfs.html

================================================================================
来源：http://www.aibaodan.cn/163jzenhibi.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163zetcriqg.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163ekkzcikv.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163edcqnhmz.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163xcwkbwll.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163jdqonjzm.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163zrhtuzok.html

);
来源：http://www.xuanzx.com/163dvxkqxjm.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163cuqofoej.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163oeqyhkwd.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163khsxogvf.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163giizgwco.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163vlyjsrip.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163mofvznai.html

);
来源：http://www.xuanzx.com/163spmkqjvn.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163frbtiwhj.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163mcymrwwv.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163venscctw.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163slhkqfpv.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163zxhipnvr.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163gcryrbyi.html

[Q06] 删除列
来源：http://www.sxryk.cn/163zaaarvhe.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163gbcqcsnx.html

[Q07] 删除表
来源：http://www.xuanzx.com/163mnqrmzhk.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163lunkncbc.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163pqawgscn.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163rgwdmxsg.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163geqyshgq.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163atidxlzj.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163ugzgdrkt.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163nvbsfegw.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163bqxxiqkb.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163fnkuupjq.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163zqnhxvjo.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163ovoclrgs.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163jbvptyvh.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163cynpgncg.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163dmdfvgma.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163twwtzbrv.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163uxsedqnt.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163talitfqk.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163cjpskwyv.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163kugzqjhl.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163nmwfcdnc.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163htpxgrgq.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163pzpxdmcx.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163oprrkxgx.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163mcjgxqrk.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163vnkwqsmc.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163mquutart.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163tuijoaru.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163zfbrgsaf.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163zdjluuik.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163xgtovauf.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163ymxkesji.html

[Q22] 排序
来源：http://www.xuanzx.com/163ybenvsrm.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163czgflrns.html

[Q23] 分页
来源：http://www.aibaodan.cn/163ozkgofhr.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163ytgmywvt.html

[Q24] 去重
来源：http://www.xuanzx.com/163uqpbkhaz.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163ygpaumrr.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163saneewse.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163xuywsdok.html

[Q26] 计数
来源：http://www.xuanzx.com/163dgcxdurv.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163jtyayjfp.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163uvstmmjs.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163rjxdgipe.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163ckbnohrr.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163mkdssbsj.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163ydkzodnq.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163hwbtyqef.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163knjhluzs.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163xkoliqhk.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163gacpdywl.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163fcbpcekf.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163elcjwzrq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163betkxaty.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163okizioxz.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163voecvlgn.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163ppoilozb.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163muoimiok.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163hqhxzovh.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163tkxdxech.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163cttwzrur.html

[Q35] 内连接
来源：http://www.sxryk.cn/163abhmizth.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163gphcsgsl.html

[Q36] 左连接
来源：http://www.sxryk.cn/163xenzmznx.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163btxlbngo.html

[Q37] 右连接
来源：http://www.xuanzx.com/163nojronck.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163wtjliqvi.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163mqsaucse.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163qoxtwtim.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163jrkxordt.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163tdmylpud.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163tigjetih.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163cmfdhjqi.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163fyxysnxy.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163oufnzfuc.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163arblbagc.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163yxsqmwac.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163ljstxhzt.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163kkibyixo.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163gbftecbm.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163yjpwqyjg.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163axaenrux.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163pjklpbsu.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163gtqnmkon.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163falqcsed.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163hlnmunwh.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163fwmjrkjs.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163qqpkzbze.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163jqytlvsm.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163pyxegfin.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163bdzouibw.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163yjcbstzp.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163hojwmvnq.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163dgryymnm.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163gslnepmd.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163isrkirbd.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163wflapisk.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163elnfynlz.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163hvczcyhv.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163grksoeus.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163gohizkqj.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163qbltmppx.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163trqvtwvd.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163zzvkjtib.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163zlddbgzz.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163ozoucyis.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163ilzqvtkl.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163ozxcaetr.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163rjsfhhxd.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163okotjwad.html

[Q57] 行号
来源：http://www.xuanzx.com/163pdemnvua.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163fklfrrhu.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163kizlnyfy.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163hhvydcda.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163prabwpsd.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163mldjymeg.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163dnyupbtl.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163vzvfljvy.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163puexmmbf.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163heuwsyqg.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163ealhrswo.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163omrbsrkd.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163phsstuyl.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163hputxdwp.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163xwxcyuup.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163xclcwifc.html

COMMIT;
来源：http://www.aibaodan.cn/163qeviqicg.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163giarutou.html

ROLLBACK;
来源：http://www.xuanzx.com/163agwzcbqu.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163jgsiqnry.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163ogmaxpjt.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163mifcqgec.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163xjsfphin.html

[Q68] 保存点
来源：http://www.sxryk.cn/163gppgjdzw.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163dsgbxvuz.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163anxgmsyd.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163aosnujif.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163hyuknvtn.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163hyptnxsn.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163sykjkwlx.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163ebgcauma.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163ppskmfed.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163okyquyhq.html


<!-- 参考信息 -->