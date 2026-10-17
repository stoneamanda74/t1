外链999!wailian999！

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163wforykwg.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163solbgzuc.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163whjntfbz.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163yamthley.html

================================================================================
来源：http://www.sxryk.cn/163yjvcxuor.html

O. 并发与异步
来源：http://www.xuanzx.com/163ldrpcibz.html

================================================================================
来源：http://www.xuanzx.com/163unozotdp.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163mkkyxcln.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163xpxcylkj.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163uadgcjka.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163fbssbrne.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163qepuvyof.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163ryphsipy.html

Go:   go f()
来源：http://www.xuanzx.com/163rtggxzzl.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163ntmzshfe.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163doebzfge.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163jywwbzbx.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163ajyvtypb.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163myhbujte.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163hixinkaj.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163wdwkgegn.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163dghooihi.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163hwrksiwq.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163ebovkngj.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163nfnnrmxn.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163keuovjew.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163zmxonakh.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163pfauqhsc.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163leacophf.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ulgzufaa.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163pyfxxirr.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163ecydvsnh.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163yvyotjly.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163wikdtfmy.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163xzhtdcav.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163rghdeero.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163tjxtkgmm.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163vfjhrvvb.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163knvofuqf.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163emavffwp.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163nkjmwxkv.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163pvgdhurd.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163ioyfvhql.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163pqwnytxk.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163opqlifmy.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163aqyxywir.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163sdxxdepr.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163zfvexqyf.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163vwptivbz.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163ehbgmewb.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163ledglmcn.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163kxiqoszb.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163amhroark.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163hbzdaubr.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163tgivprxi.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163kmcueuce.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163sjugsmuc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163cppvhnnj.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163onbkxhiv.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163gsmcekng.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163xvucizmp.html

================================================================================
来源：http://www.aibaodan.cn/163dfububdm.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163wwbnnmcu.html

================================================================================
来源：http://www.xuanzx.com/163xiubfobh.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163pbqjzdwa.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163lksunlic.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163tmcjjzpj.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163wzprxqeg.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163qahftknx.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163xljawegu.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163sxlwcpsi.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163nhhypolr.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163iozvydqx.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163flqpyatz.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163plnssqtj.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163fxlrjsli.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163zmhitbnl.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163qjmxqfoe.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163rhatfmgw.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163kjpsagdf.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163toifslpt.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163dhqiumeg.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163xwawknux.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163jodhwfpc.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163wxxraecx.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163cyojnnhx.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ltpnzsbw.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163mauvhwfm.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163ddkhshjd.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163kabbbeph.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163ehrcgtsf.html

[P04] 求长度
来源：http://www.xuanzx.com/163xtmoufco.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ykoaxojt.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163eqyjzvwm.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ryjkpexz.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163oduvbtmu.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163ostbyrle.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163lnrzxrzv.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163zssaedrd.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163yyjjyfmf.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163jktrsyve.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163pmublhgf.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163zoslaugf.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163gsqjzdct.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163njbizlfg.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163pzqqhibf.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163ktaxgabq.html

Ruby: a == b
来源：http://www.sxryk.cn/163tgsjfqlp.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163fmjfyzip.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163wavwyzzr.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163nyxqscno.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163zizckvuu.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163ydqwelea.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163ofyhdmah.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163hsogmakm.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163ychhxzie.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163snxsqzwm.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163nilxitqs.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163pnqbmnoq.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163ialclubx.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163dqxoxbwm.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163pndnzgvt.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163lhmptrha.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163zkubkdve.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163lrvqthxs.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163ouqztsio.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163npsxblrb.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163wndjbvjr.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163wtpzcgna.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163gfruzmwp.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163ofhwkrhj.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163crlxewug.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163lemgelwe.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163vmvtvnyi.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163ttatigwr.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163eqxlhrrk.html

================================================================================
来源：http://www.xuanzx.com/163vjuwyten.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163gmaxqzqr.html

================================================================================
来源：http://www.aibaodan.cn/163plxfadkw.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163xyvmredo.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163alagyvxt.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163oiyosiok.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163ptffexlh.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163seiyujfu.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163bqodpsqt.html

);
来源：http://www.aibaodan.cn/163dkglbmyd.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163vekysjcv.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163ubbifdea.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163xvovklxx.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163xmfjbkpe.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163ztenheuz.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163jaqnkoqx.html

);
来源：http://www.aibaodan.cn/163xbcaghcm.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163hhhzbldt.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163rtwtlahv.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163lodaeyzj.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163zaefrvsp.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163qbojwywu.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163uarzabig.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163dodeqqsb.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163vdhrgupc.html

[Q07] 删除表
来源：http://www.sxryk.cn/163ntdalvjj.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163nhmaoone.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163gwvubpfb.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163gnuqrevg.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163ezcjyydu.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163cjlynybl.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163rfemgljr.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163qzojamtr.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163pdfqczal.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163dwgyyzrd.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163wgztdtpy.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163uswxibnc.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163ehncvctd.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163foypculi.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163eatgpxuu.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163crwgsfya.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163fpiianqc.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163warndqdt.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163xcpkznuo.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163nijfypnk.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163suznhiil.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163iosmkyuk.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163zkcmdnkg.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163ngxnidon.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163cmxseoar.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163ilztknff.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163mqwyarcv.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163kqylpwcg.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163xvqpotgl.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163rkcohkxw.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163nvgvrasb.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163gknxsmwg.html

[Q22] 排序
来源：http://www.aibaodan.cn/163yvheevte.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163rjupvklm.html

[Q23] 分页
来源：http://www.sxryk.cn/163svddwxyu.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163ggovceec.html

[Q24] 去重
来源：http://www.aibaodan.cn/163sbzleqok.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163qyauujsl.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163pcviatgw.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163wbrustny.html

[Q26] 计数
来源：http://www.aibaodan.cn/163mivfewjt.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163atugtonx.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163uexguetk.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163afcpejso.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163akmijtls.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163ctfivdaw.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163kcikfzyc.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163flklwgto.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163bdpxmhbh.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163pfuimugv.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163yxhpvgjx.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163lgyvinur.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163ewpesvty.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163eefzoene.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163ykbsxucg.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163odreuzyn.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163htwfpnyu.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163euihtvqs.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163jsnqldzh.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163zokzwsfk.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163sixxmikr.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163twwrnisx.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163raoaofma.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163zkuswocj.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163uwhfjljm.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163deyubvev.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163dfajqvdd.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163uefrzxiw.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163nonwpcja.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163gkdbmhaf.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163tjyvdhal.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163xkfqaxji.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163nmxtjpmr.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163vztftzuw.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163wxzdccuu.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163cakonmli.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163dmnymuaq.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163lzqamgjr.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163kkfgdifb.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163eyvttxmb.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163trsaqnew.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163dwdzixhq.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163prohspqx.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163mitoedne.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163dfqntnxf.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163sizcwxtb.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163cgtbrjgy.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163nepdkkvx.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163wfbcefkx.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163qxkrrlap.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163xgzqgbsd.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163mcmgwvwf.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163mqtdrexi.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163ifrocdcx.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163bcgreaoo.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163vsxtdebf.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163aykzjvcg.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163efbhiuxz.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163fwuenvxr.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163mkkwqrbv.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163ekmdmpnk.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163gvgysesn.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163lzbjvxpv.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163gvttbyah.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163ogdlkonp.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163aptqpdmu.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163swefduvr.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163fdxbiehw.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163jahwgtpb.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163ptbsbtsm.html

[Q57] 行号
来源：http://www.aibaodan.cn/163gcmnnxqn.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163xuijjwaz.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163wivujdab.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163hsolgjbk.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163funpapoj.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163aeuqelur.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163pufwyvjd.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163uwjjijty.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163vhoywaom.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163gqxszzhh.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163xcfluwyj.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163fdqxotmc.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163epoemqvh.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163ykchfkvo.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163deplvyic.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163khzmrzoo.html

COMMIT;
来源：http://www.sxryk.cn/163ufbdekqm.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163hwdasqap.html

ROLLBACK;
来源：http://www.sxryk.cn/163nalijajn.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163dvhlqdea.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163prfuchmx.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163aanhzuyl.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163zjmdgipt.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163cywcqfxn.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163fhgrjona.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163eamgjvpu.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163xavpfcom.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163qbgzrbdz.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163ankkperb.html


<!-- 参考信息 -->