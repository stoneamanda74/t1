外链999!wailian999！

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163yctwhlys.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163gvecbuoh.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163dhhpsngk.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163lpsxzvoi.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163omsxtagl.html

Go:   go f()
来源：http://www.sxryk.cn/163uiqtugya.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163ildbxgtp.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163usyrrpdz.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163zekihdxq.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163runcllqw.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163lbyxptyd.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ertrivch.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163biesmrmu.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163veyvlfrs.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163lmpstedn.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163kfclwpod.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163jpfyuwfc.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163npurourr.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163mvsbucfb.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163lumdvdir.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163fjyzztlq.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163mpatljwa.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163thnknuxc.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163rwcxjbat.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163ktvgpqjv.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163axzvbfgr.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163janxjhpi.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163mxqkgwao.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163tvrxftpo.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163czazamoo.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163nfpqldno.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163jtucbsqw.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163zmndfbqa.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163mfiunlpt.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163svazmljs.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163zyaxhwet.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163jxzxmzeh.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163teahrfol.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ywidgilz.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163okyobzqh.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163vwagyusx.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163olrcoejr.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163myaxbilt.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163zvebxabg.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163jasbkuyg.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163tgipcvrx.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163zmlupgry.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163swfigvov.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163icyhdzuc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163hfifugus.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163wyelpcdg.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163zdzamedk.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163vngfjdvz.html

================================================================================
来源：http://www.aibaodan.cn/163yddbzuij.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163knctczbh.html

================================================================================
来源：http://www.xuanzx.com/163nhegtnvz.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163oeukxgsh.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163ustfhprv.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163heetknhr.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163bhhtjebm.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163qgkmvlgi.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163pdgxtxvx.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163cplhzkpu.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163hngamlwe.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163kzaicfmc.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163ihutguxw.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163htogjoku.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163gppnhecl.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163nnetnzan.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163iwogviya.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163kmfgwlif.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163tsgljave.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163hgcoqmah.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163rxbajqcf.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163njbjzwpv.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163fnwpaoua.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163vzqgccxk.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ynzosrth.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163xkatbcem.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163aaanfbhr.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163tlyzanfs.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163zmcqxhti.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163ybetiwvl.html

[P04] 求长度
来源：http://www.xuanzx.com/163tcsuwlcw.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163wkfvlqsf.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163palmvxbm.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163usiejrtg.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163heqgpuzd.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163kzxxkjkg.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163lclzmfuy.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163xeztgwmw.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163denhcvqn.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163lwuznrmf.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163qsrxmbca.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163fptafhjd.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163xehsgzyx.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163xwrgesqz.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163svkmbxtx.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163wefbpzdu.html

Ruby: a == b
来源：http://www.sxryk.cn/163cvwemoca.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163wnpowscq.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163vuxqdlfa.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163wmnyfofn.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163pecglxzs.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163qtvzqknv.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163xvbqftev.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163dcangiff.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163nzipjlvh.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163ndtrjywy.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163kwhqhnaa.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163izqgtcxs.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163tyvogkjn.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163zevnhkov.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163lqbhzucl.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163okjokmmx.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163xwirzycp.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163daufygql.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163zkhahqnv.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163axpguumy.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163gudjioau.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163wxcotwpi.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163idkkbalu.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163dsnkablp.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163udhjqlvv.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163rzwwslco.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163fbwnualc.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163mzgmcfix.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163chctepem.html

================================================================================
来源：http://www.xuanzx.com/163smlnjqaq.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163bepjhbou.html

================================================================================
来源：http://www.xuanzx.com/163hjprdwan.html

[Q01] 创建表
来源：http://www.sxryk.cn/163vskekwzw.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163vaneajgg.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163nnsgjlqg.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163gbeteabt.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163mrrhrsne.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163sjdmnbek.html

);
来源：http://www.sxryk.cn/163mcxoihgs.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163gxrgqglh.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163skqjypmb.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163xzbqzlxi.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163qnpqijgu.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163tvqaodet.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163slahfopp.html

);
来源：http://www.sxryk.cn/163yxhafxud.html

[Q03] 增加列
来源：http://www.sxryk.cn/163dtgqbzhp.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163zxrvphjg.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163lxrfiaqc.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163iarpvqun.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163vbziyyut.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163xagligpx.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163vefbiytc.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163apjgjnkj.html

[Q07] 删除表
来源：http://www.sxryk.cn/163dqzkynyk.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163tmlifuua.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163yauzlgpu.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163rjixbmqw.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163ezzwlocc.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163rldcqugh.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163xfkhbwxp.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163zycxgbbq.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163gdbctrxr.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163hfdxtcnc.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163uavdwlqx.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163uwehsbrj.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ebuohgra.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ncvvljub.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163dfjimufa.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163ucyqmxrf.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163ooqsffft.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163tmbmwhvz.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163tnkpmnmh.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163smhvhczy.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163mnwvoznc.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163pshswzsw.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163mhnwdsdi.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163qtnfohhe.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163bqfvcacy.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163rgvmlgni.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163bzrqdbsi.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163shgzcmvn.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163dbnlwrrd.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163jhcmgkeg.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163qztqrycy.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163eoavsunc.html

[Q22] 排序
来源：http://www.aibaodan.cn/163szgeovpi.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163atieipcr.html

[Q23] 分页
来源：http://www.sxryk.cn/163nxzqwkwd.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163cplymwjj.html

[Q24] 去重
来源：http://www.aibaodan.cn/163ymfkoraf.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163ejmoklom.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163kkfxbrsj.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163cbjnzbxw.html

[Q26] 计数
来源：http://www.aibaodan.cn/163kzxxjqum.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163jskzxxts.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163mhdtshce.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163csuyuvjv.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163otabztky.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163yqdsxvpf.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163wxviwaan.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163zwacbfad.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163wckafzth.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163omiyzuam.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163rlbraenu.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163nwdrwesr.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163judnbool.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163vlefaxed.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163lvzttshy.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163rvhyyjzl.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163bkwxxzjk.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163bgjpatrl.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163dgohscwj.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163magfjymf.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163izfebapp.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163tpclvxwq.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163hztrvbbs.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163mkhdtmnw.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163cebtrjwp.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163jlrpqymv.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163erivqrqk.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163flouopjo.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163atggsmup.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163mfjaeuvu.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163cizljquk.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163gbrdnjsi.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163mjbaleos.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163oojbxcxd.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163mmgmmyax.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163ezqnyays.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163wvycgzla.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163egvwxgty.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163ybvlhxjl.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163uzaskmkt.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163jkrrmywk.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163pdxooysn.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163ylhaaioe.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163idsqddrm.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163gfrwqydz.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163qmcevorr.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163dvzmnubk.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163enftpzup.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ckwcouxi.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163afwkgfch.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163ypapqftw.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163klqdgpih.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163tvfimaax.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163pokaoqhb.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163yqdgsgew.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163farorxng.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163kehalmmh.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163guekcfqj.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163qmlhcmkm.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163adljdhlk.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163cjyxmxhk.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163srhxjdud.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163kofwqzwe.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163gejzfbmg.html

[Q54] 清空表
来源：http://www.sxryk.cn/163njgzdmtd.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163mnubcjxw.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163tcgryqtk.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163lqthyzcm.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163odhlvmrz.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163hyshanlr.html

[Q57] 行号
来源：http://www.xuanzx.com/163xltpvhsn.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163yanrketa.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163wicmsxdx.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163jhgbvlmx.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163duozrcdo.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163oljpflar.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163qznokdiy.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163mlyjeljm.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163cnzmbmhg.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163pexujucw.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163yfpjwwto.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163vnqfxzuf.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163wynsmxcv.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163nrvnpxye.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163zsxvzybf.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163ssprcrha.html

COMMIT;
来源：http://www.aibaodan.cn/163wqvgojlk.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163bxszctkl.html

ROLLBACK;
来源：http://www.xuanzx.com/163wivisjpz.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163crfjcerx.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163vbnvdmii.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163uzkytfha.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163lhesdicy.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163thsyynef.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163leagtswx.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163fffqhzvo.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163eqtfunvu.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163rbqrrxrc.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163lndrsxuv.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163chzmvkao.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163iuymwmni.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163yakgogqa.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163setsylne.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163qwoawtir.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163gcdiihzc.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163prsjbeli.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163cdwpxhol.html


<!-- 参考信息 -->