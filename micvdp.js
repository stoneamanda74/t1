外链999!wailian999！

================================================================================
来源：http://www.xuanzx.com/163pbmyvejb.html

O. 并发与异步
来源：http://www.aibaodan.cn/163raqrlbqw.html

================================================================================
来源：http://www.xuanzx.com/163owwmrugj.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163yagkldvl.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163lumxefdr.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163dsxddser.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163omfrwggk.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ceqyweyu.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163bkefzydh.html

Go:   go f()
来源：http://www.sxryk.cn/163ayazosde.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163zxstqflh.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163bcfqjixy.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163yjoaezcr.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163rydjbvnp.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163xhlsydze.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163gmpypcqo.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163qebdtvdz.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163gjgoylge.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163xgpdcbxq.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163kgqvyuge.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163nwfkyrvv.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163avfatjvk.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163diyutrdo.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163bnwbjlwf.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163qufggnsy.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ucffjaif.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163ebvgkole.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163gxmbpiya.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163qltxjnjj.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163qekvggen.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163tmfvuhav.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163pwpojwwm.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163asmdygec.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163lweptinf.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163hdcfuvec.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163byadcvjm.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163ygndktwv.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163thupdmwl.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163muuhphfp.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163ettyimof.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163shkrpyjr.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163fgtrboky.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163igfvxlfl.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ctgjvyfv.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163bwwisqff.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163sfcjrkdb.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ehmuhsvh.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163rzpkzarm.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163dazuunrk.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163dyfipyos.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163nswttclh.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163pyktdcxt.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163fntrrede.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163fvgsmgwq.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163wcinupqa.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163mvfltxtf.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163tjcxcybm.html

================================================================================
来源：http://www.xuanzx.com/163mltuhtgy.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163rfezmzcg.html

================================================================================
来源：http://www.xuanzx.com/163qgyhinvj.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163rgsbgqim.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163xotsueuo.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163urhhctni.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163daqobcjf.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163omdokgrx.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163fcfwfurc.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163pjecetjp.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163elwxdwwx.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163wnblmtao.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163hkalitnt.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163ieckkbvf.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163pjnkceuq.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163hugoeguo.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163phcszhdx.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163rlwcpdfr.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163lhjplgwm.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163lmvfkpqo.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163ptfzoukh.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163yoegnblc.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163hnytejdx.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163jjrgxryo.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163tetdubjx.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163fjeigflx.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163fpkozlqq.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163whjawoje.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163fquxmrag.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163vplejftt.html

[P04] 求长度
来源：http://www.aibaodan.cn/163gbdgfgzm.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163ooednrbe.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163iuojhaxx.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163qpapeaqc.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163znecsvch.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163ocpqwfuh.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163bgpysyfp.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163jkjmshni.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163qparxerj.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163belojffh.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163wnfdiblm.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163ifztgzlx.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163ipotpevq.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163jpfbzcub.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163nbzirdpi.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163xsxnogac.html

Ruby: a == b
来源：http://www.xuanzx.com/163qjhyrkao.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163wvtksbfs.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163ayxxrzgg.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163sbeuzlww.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163xkbofmdx.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163cwczipkq.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163fwhaoitv.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163kdiminkf.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163ttixwiem.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163yryjhevx.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163rhkdqewn.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163svsjytnp.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163kimzludc.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163nfhbxrqc.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163bvxajqok.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163gaeflefx.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163mbhgslkf.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163slpheqpd.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163aozxaeoh.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163jqyvwtzi.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163isylkjic.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163umzytxyg.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163njwqkyab.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163ydpwqknk.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163zfnxedsj.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163bcyefvlq.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163eedddnbq.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163ssofymmu.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163yiipafey.html

================================================================================
来源：http://www.xuanzx.com/163nvilcewg.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163oleifknj.html

================================================================================
来源：http://www.sxryk.cn/163mtzlbtdn.html

[Q01] 创建表
来源：http://www.sxryk.cn/163ucftcrhr.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163jftndjqq.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163bwzshylt.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163bztihozp.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163wsffawdy.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163wwsgcdlr.html

);
来源：http://www.xuanzx.com/163tftqvdqa.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163nwosfeis.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163nexmrnvs.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163siifzpqo.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163qctwoyfh.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163pyyucxsq.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163fgwqisjg.html

);
来源：http://www.xuanzx.com/163ybqoiamc.html

[Q03] 增加列
来源：http://www.sxryk.cn/163nyuugppy.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163thgmqcdw.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163bbpztouk.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163ysdxkjws.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163pmyxegat.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163hckzgycd.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163tlaigzoe.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163hanzobhm.html

[Q07] 删除表
来源：http://www.xuanzx.com/163adbnvela.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163tznqbyjz.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163ntgegvhz.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163rbuendgw.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163dterbhkz.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163upprmlql.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163igelinfv.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163eruqymld.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163flqzgnwg.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163gvnlutjt.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163flqqputh.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163gbfpzapj.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163rymkqtpu.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ajvhzhax.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163wcfladqs.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163cehuopcc.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163kyybkbbf.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163nfqnwqvh.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163cperpezc.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163qlgcwvpg.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163vfrvbnch.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163spfpctfg.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163urmmsmgx.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163mhhfbcgc.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163qatwjpda.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163rdgljzww.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163xfrerumv.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163hmolbhxl.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163sndfeupm.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163inkbdjjd.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163dtnxwbwk.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163lgwhbdgb.html

[Q22] 排序
来源：http://www.aibaodan.cn/163ywbmbaps.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163ragpfdaw.html

[Q23] 分页
来源：http://www.aibaodan.cn/163ponefluo.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163kgjgqppz.html

[Q24] 去重
来源：http://www.aibaodan.cn/163ghcpcwfl.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163ukrabvpe.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163txottbsw.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163essjsile.html

[Q26] 计数
来源：http://www.aibaodan.cn/163nitmyfsi.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163wscoytia.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163uqasifhv.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163skvsnbiy.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163yxjjfqec.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163cmgnwwbu.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163ojpsdtyg.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163uruolxlg.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163kppjfmjw.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163iflenqci.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163oqjplgkw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163ettvpngz.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163hahfiedp.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163qfcghljs.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163izuxmsbm.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163frtekhxs.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163iwenawyv.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163npgbweyt.html

SELECT * FROM (
来源：http://www.sxryk.cn/163mrsycvew.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163idlcqeja.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163mpsicnfw.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163ucrgmfuf.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ihpmiefp.html

[Q36] 左连接
来源：http://www.xuanzx.com/163yqgsznre.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163vgyygowp.html

[Q37] 右连接
来源：http://www.xuanzx.com/163yyydccjy.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163ucohiljy.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163oowowuna.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163yxazlnkr.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163rpypocnz.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163ayszlayo.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163nzgzexas.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163sssvvytw.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163ugabvucz.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163zqzetsml.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163umhwsjfl.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163zrbzciso.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163niwinouj.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163embckabl.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163ajgcnxlo.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163jzenwqez.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163myqpahoy.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163spznuxon.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163gelamxbz.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163htstcidc.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163ovvjfown.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163dklxrunp.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163epcvmjzm.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ikoecyst.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163yejfjrgz.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163lmzrhrbq.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163pyjjmoix.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163ejdivyxh.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163uqwtnznv.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163swzunfwx.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163zckfotzo.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163uqzsjehp.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163sjeosbfc.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163plqgliqj.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163yyxtoxfu.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163bluvxvsd.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163zqguquhb.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163fkckyccj.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163eguwcgir.html

[Q54] 清空表
来源：http://www.sxryk.cn/163ueusltwz.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163cthwqvsj.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163ylcecuks.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163xifulzky.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163prdlslrc.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163zommodfj.html

[Q57] 行号
来源：http://www.aibaodan.cn/163arlrxjcq.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163vlkfutvo.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163xbllkjyf.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163rchhnyme.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163iwpazehp.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163lwnipubx.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163xkiomofk.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163kjfxucdz.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163zhacwfeq.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163mfzldehi.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163wagqdcaj.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163syytufdl.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163tbgagcpy.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163xihseruf.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163wsuvakhc.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163fplrqcsp.html

COMMIT;
来源：http://www.sxryk.cn/163ntwgbaxg.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163rxlxjxas.html

ROLLBACK;
来源：http://www.sxryk.cn/163qsrfoggf.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163zaoiujih.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163lwfuqazs.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163rdrtbfwb.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163gnikvqur.html

[Q68] 保存点
来源：http://www.sxryk.cn/163fmlaqnkb.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163nxagmaln.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163jyvjlmvc.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163pshwhavo.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163ftelgqvc.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163vklmbmgk.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163lqgqkdkz.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163fqerngiw.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163xxpnqonq.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163tzkkfeoc.html


<!-- 参考信息 -->