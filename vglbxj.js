外链999!wailian999！

================================================================================
来源：http://www.aibaodan.cn/163ilwdqymi.html

O. 并发与异步
来源：http://www.xuanzx.com/163gijtwnwl.html

================================================================================
来源：http://www.xuanzx.com/163ogloadwb.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163tmnajrpv.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163tjsipesk.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163psobcsrc.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163xzdkzarj.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163bsnjeqej.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163spchporv.html

Go:   go f()
来源：http://www.aibaodan.cn/163llwqeyro.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163etycwatb.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163vjxvscsg.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163mqqkxqde.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163sjoxuauq.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163pwtgliux.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ktsevmcq.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163zhwmodgx.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163kscuyzis.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163mhzbxaxo.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163eaeizdte.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163dacetikv.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163mdfepzjg.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163jexnjlan.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163gkogaodz.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163vpcgatgf.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163hjszwbbt.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163upaczpve.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163pwpkzdnd.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163diurpudz.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163kcshghrd.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163mcxtluwm.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163okotyctm.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163brbzlwsw.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163aqlicvgt.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163mnkjcnpa.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163cdjdvmug.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163bcdugcrr.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163fxyaqisi.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163zrbyvlxk.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163sfsvqlok.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163apfeqgun.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163kvgpugqv.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163xcolisag.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163hgosjugk.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163fzgzfyro.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163gpxgpsho.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163fwolsgui.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163hwgyrkwj.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163unbntaid.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163wgnydxxg.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163rdlwxglp.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163zdewxrsq.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163jtnebxun.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163ifthjwyy.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163uyzwhbfu.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163yewgphat.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163evepqzqj.html

================================================================================
来源：http://www.sxryk.cn/163nhewytue.html

P. 常用工具函数
来源：http://www.xuanzx.com/163jgrlbyjj.html

================================================================================
来源：http://www.xuanzx.com/163tgeigksh.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163kqpgaxhe.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163scchdksb.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163zkuyywbn.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163zeqbwhgj.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163znbelktq.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163dywktpar.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163ubbmcduk.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163vtndjxos.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163dwzakiir.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163jgublxdk.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163axkbjqum.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163obqvbgdj.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163gyyfcsvr.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163xpshpijl.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163fqpcnelh.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163pdtvalgk.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163bfjuqiss.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163noptcjao.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163osqivqaq.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163fedhunvr.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163zcfgyhzg.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163gxvmyswb.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163rechfmhq.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163dkygxzwa.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163eanhetfm.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163hffcfqvi.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163ltfxljlx.html

[P04] 求长度
来源：http://www.aibaodan.cn/163jtzvdnux.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163bdcertgq.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163sbergdov.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163wpylmjju.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163modtpegc.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163ananndpx.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163ztskozln.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163vkzmkqtb.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163fckzqkvw.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163hzqabpmv.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163ieiyouub.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163srtvivex.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163jefdtmfl.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163wpddkyaj.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163prdrifjy.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163jpcwvcgx.html

Ruby: a == b
来源：http://www.sxryk.cn/163qeghigez.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163mxmrptzi.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163owdnaajh.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163kuksyjaz.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163wnrcbytt.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163vfegdzse.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163ywpxdvst.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163ziqygjla.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163sxzadhud.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163xtmhqnwm.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163qsywofbr.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163sfrxemxc.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163czdpuwuc.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163hkjfwyib.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163cxljhvjh.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163yjagdgut.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163ntkbkpww.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163ctjdiopx.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163lgregddd.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163khnphdnb.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163pwiheige.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163rrkgnpfz.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163hshkcrcx.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163esrbkadc.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163wqemmree.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163bdvbpslb.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163ifkycapt.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163qrhiqigj.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163vdbjsbzy.html

================================================================================
来源：http://www.aibaodan.cn/163rysgbjrk.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163ngqdvquj.html

================================================================================
来源：http://www.aibaodan.cn/163fbusslzk.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163ezzydyko.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163pdwusztz.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163bxemdidg.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163wwngvedg.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163gaujzxix.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163gjuvrdcj.html

);
来源：http://www.xuanzx.com/163gepgepzp.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163fzdmohak.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163joamyhxq.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163lwrvxslp.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163yywtsbih.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163xuwkmmip.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163kuteeqym.html

);
来源：http://www.aibaodan.cn/163vtlnxiiy.html

[Q03] 增加列
来源：http://www.xuanzx.com/163qbmzppvo.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163cjylszip.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163xbltwjkj.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163xnmdnruj.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163hmvnqcvh.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163jkjsfrxh.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163qdbbykaw.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163kfrdbiys.html

[Q07] 删除表
来源：http://www.sxryk.cn/163xqloudvk.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163nvzgetrh.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163jenuowyb.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163olrowoce.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163kxaxwijl.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163jsanteny.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163xwfwbyhn.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163mpoxdbpn.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163wvlwqfcz.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163mizzfonl.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163mdzpcusi.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163ppgrwlrv.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163yxqqswdc.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163sxkrrfsz.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163tgzmmkgl.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163vbqdsmck.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163hjptweiy.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163yjyvehcg.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163sfwdqqso.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163gdwkhxwu.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163pwtwippu.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163xsmtqrye.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163uxqsepcq.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163pgcdbrvu.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163cvdwwvbg.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163dnmjlmdc.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163fdfbccjq.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163ntkbgszf.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163niqukrbd.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163llzehwli.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163muckdhwg.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163uwmcoqas.html

[Q22] 排序
来源：http://www.sxryk.cn/163ulqinsrt.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163hgwawlhg.html

[Q23] 分页
来源：http://www.aibaodan.cn/163ojjucsyj.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163pcsgeoha.html

[Q24] 去重
来源：http://www.sxryk.cn/163xqnwezgg.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163goqxoqtq.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163ifucogna.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163hkvibfyt.html

[Q26] 计数
来源：http://www.xuanzx.com/163gxmvufat.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163wcjmwkgy.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163jlxtytkq.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163mczygdhg.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163mitwcmqv.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163xjcizhno.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163dcyaoxlc.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163xnjziwqi.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163onpipnrc.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163wbrnmimo.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163fuotzwdh.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163nugcesrj.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163cwsjhlru.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163umwdrajq.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163kalqonjt.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163kvhxjstx.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163odchated.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163nzjkombm.html

SELECT * FROM (
来源：http://www.sxryk.cn/163bkonedor.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163eniiceyh.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163unnbpcdp.html

[Q35] 内连接
来源：http://www.xuanzx.com/163qdpdxfvs.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163vqxzelmv.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163egitxgba.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163tgmqtsto.html

[Q37] 右连接
来源：http://www.xuanzx.com/163digwnxwv.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163hffoxrsw.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163dodvdrww.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163rtmbxibe.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163lqlntbtz.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163tiqdjwik.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163dulgqrrr.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163nwoyccbg.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163kfljjhuy.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163pterntay.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163xriytnmh.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163pwsvoagk.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163adenwqys.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163hioyqggd.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163cquffscp.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163zmugnkjn.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163iwpabmus.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163yhdvszpb.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163fzhmuoie.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163snrcgdrj.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163bwouvdhg.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163miksynqu.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163cuqpojky.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163hgzktwzh.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163xeiirziw.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163upedpbbe.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163qdlkipaf.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163biattavp.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163tqubjtfv.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163wnyavymr.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163jgsekvpx.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163dyhuwenr.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163zdupuqtg.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163cqthsckf.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163jhsklmso.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163xtlltcps.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163lmlsosyt.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163ureuiiuo.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163qhmjrffo.html

[Q54] 清空表
来源：http://www.xuanzx.com/163ttrylsgi.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163xpfqynrq.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163auwzquez.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163umgivkpm.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163fdqvukam.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163hshywcfd.html

[Q57] 行号
来源：http://www.aibaodan.cn/163bzxmnunk.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163clhlubeu.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163dxotvetj.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163pmozxxnn.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163mzekkpoj.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163mcubtmyv.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163auacfrbq.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163glhrqjsj.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163ivcpkbjz.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163nzdwerlz.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163profjorq.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163ysahjnlg.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163bdudyizv.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163rwyhzemt.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163ahmnldzf.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163tvimqrzw.html

COMMIT;
来源：http://www.aibaodan.cn/163zaxwenuq.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163thozbhlt.html

ROLLBACK;
来源：http://www.xuanzx.com/163sbnpsvsl.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163yszuskua.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163vijugjuk.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163xamslsox.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163whgvlouh.html

[Q68] 保存点
来源：http://www.xuanzx.com/163acsprwsa.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163vkmiamyi.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163xxvcrmot.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163qnwcovdz.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163ulfhhabk.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163dbzewedj.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163eelidckj.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163crzxjycx.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163aobnyndd.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163isbybnpj.html


<!-- 参考信息 -->