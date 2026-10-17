外链999!wailian999！

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163yldfkhar.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163tfngtylt.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163atwfjprb.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163zgohegnr.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163xgsymtot.html

Go:   go f()
来源：http://www.xuanzx.com/163hlfkypkt.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163vdmfzhlp.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163gctdqztc.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163sdfwcuij.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163fsfqfuwb.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163qpvuubjg.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163cunedzgd.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ldyyvrir.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163fxxgzmtz.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163vaiurwtr.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163cmtebcka.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163urwitifg.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163qwhwtgyw.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163gszghazw.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163seccsvqi.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163ldwwskmp.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ywhtaaoi.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163fuywqglu.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163xejguwqx.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163iqaexlxc.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163deuagqua.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163xfjqmlqs.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163eelcffer.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163etvipfct.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163pktupaxl.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163xjhezkol.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163slmdlwyh.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163ukezorzu.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163rxisoefn.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163irxccqdj.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ryizhzlw.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163gyfopmdw.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163sqxxskmb.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163vmgzfyyb.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163jycacrve.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163shadgdfa.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163gjwadtgh.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163gcknnkbt.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163vfvngypd.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163kdlcwbfz.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163iclgaeig.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163dqakcfzu.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163pbyxykvl.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163knqcftnl.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163lyvfhyir.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163zoeouveb.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163urqzucow.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163grgulwws.html

================================================================================
来源：http://www.sxryk.cn/163soupgmmj.html

P. 常用工具函数
来源：http://www.xuanzx.com/163rzqxifei.html

================================================================================
来源：http://www.xuanzx.com/163ngegcurg.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163dhdlenkp.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163qyzscnav.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163adozsfij.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163dcrrcjll.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ymrxbztn.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163yylikgar.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163mgejvozn.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163mlyvenaq.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163elswuskw.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163slycmfoc.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163kifuvoze.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163cerykemb.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163sldfysjk.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163sknibpgv.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163nztixwdm.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163ovymwcrc.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163ecspdwqe.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163kesrypbw.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163ordrvgsy.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163tfllmngj.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163stcqlrbk.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163czhqlwku.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163oupxtppn.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163utxrcifj.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163icrqsfsa.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163pktrtzws.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163lizvqnfe.html

[P04] 求长度
来源：http://www.aibaodan.cn/163xyacrxkh.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163yufzbevs.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163xodgevjw.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ufyywhyl.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163tlyrxmbs.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163dhscdwbx.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163xsxhqmzg.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163qungxymf.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163xpddenbf.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163zkydcdpj.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163uuegmyux.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163hdhgouur.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163pehlgpcv.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163jrjkmnbj.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163mnpahltv.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163ohmuzyfq.html

Ruby: a == b
来源：http://www.xuanzx.com/163ecatjcud.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163nhunehrd.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163cixyobhc.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163akcrlspu.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163soxdplzi.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163nxhymoix.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163clhdbekt.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163qmpvmkgc.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163oaiexicb.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163rhvjkuky.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163nfwouzin.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163nrofkolb.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163yaxhpqgh.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163pehaweux.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163lewgijmu.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163jxxkkfvo.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163xhgqncpj.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163icsidqaz.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163daztapoq.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163bcpbcuxc.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163iicdrowf.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163ftcucuxj.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163mbneipnd.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163aznmxgkg.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163xousajpg.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163pvnihsql.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163ansklgzt.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163puwxxqli.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163ugsqatwm.html

================================================================================
来源：http://www.sxryk.cn/163lyowerht.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163tedqqers.html

================================================================================
来源：http://www.aibaodan.cn/163xurmghta.html

[Q01] 创建表
来源：http://www.xuanzx.com/163wvagsnqw.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163vuqjoxvq.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163jwukseky.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163vhreawmd.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163camrtbci.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163guussusq.html

);
来源：http://www.aibaodan.cn/163rufgmodf.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163coqkocnv.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163cueilgwt.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163kfappizu.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163iymbjzkt.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163nocbioyl.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163pwmdkyyc.html

);
来源：http://www.aibaodan.cn/163hflejedp.html

[Q03] 增加列
来源：http://www.sxryk.cn/163fvlqrdya.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163arbnjvfa.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163doocmxed.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163cklseedc.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163rvgkounl.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163kxsvqdch.html

[Q06] 删除列
来源：http://www.xuanzx.com/163tivmshfb.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163qcjlofng.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163lqwucwfj.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163vhgwjgcw.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163jenjuchg.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163qqunsdcy.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163phccfdxa.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163umlnrhpb.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163vmxqcuab.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163othruirs.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163hvwoszaw.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163ijbdpclg.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163eogamwmr.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163ydfphueg.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163tynlqoyo.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163jutgdpdt.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163zenivmrs.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163cnltuwnf.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163fbabzvlz.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163phrvbofk.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163gwhvwfwv.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163vtlyabux.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163jymadrwu.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163zznoggwg.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163nlthrhjz.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163vtejxlet.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163dewgkyyn.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163yimietpk.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163inmxztow.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163vipyueft.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163eruitbkd.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163ctkmopzu.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163mxiqhyqo.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163nkyniene.html

[Q22] 排序
来源：http://www.aibaodan.cn/163svqhvuch.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163fexzczdt.html

[Q23] 分页
来源：http://www.sxryk.cn/163rjxxwrpe.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163bwbkmkfb.html

[Q24] 去重
来源：http://www.sxryk.cn/163dvjstoyf.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163odesxfxf.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163mdbzhtln.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163jwbdivza.html

[Q26] 计数
来源：http://www.sxryk.cn/163ofqmibyl.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163rkfosnky.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163lotbdhih.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163kzgylwwq.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163czohewdz.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163xbbzawjq.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163oiujsajy.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163liafirtt.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163dsrsqmaf.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163pgbbmyee.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163yolnruug.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163ovvxtvss.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163qkphowle.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163vcstfkhe.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163xwzkhnwc.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163zvsaqhyx.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163biytjnds.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163ljqutvod.html

SELECT * FROM (
来源：http://www.xuanzx.com/163pyvsfsiz.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163wlqxoaxk.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163yuaqkgne.html

[Q35] 内连接
来源：http://www.sxryk.cn/163vmojviix.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163jeultvkn.html

[Q36] 左连接
来源：http://www.xuanzx.com/163hvfwzuso.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163wmiliqjn.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163pxihaigg.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163owubzfob.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163vukxdvpz.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163eekozqmn.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163dwyuyegu.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163rwfrdlsm.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163yafwyxip.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163qcguzyhl.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163xyekfzpw.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163ixqtmgwd.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163ewenlnax.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163ludxrswp.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163gomwnike.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163wuzpvumu.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163cxypzmer.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163gluqnems.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163tzkfittt.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163pyostfvm.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163qaatucyt.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163yufwzulq.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163nlgqwnbg.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163eiyzrtho.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163bpwbdfka.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163qqakopgh.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163iyanhcsx.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163rkvfaaxg.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163bcfbohlr.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163odbjdkzf.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163vizvxonc.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163lxxpmueo.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163ivqojurx.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163ctnfbmky.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163osqxtrcb.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163qhtcezxu.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163oqflbnyp.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163hruuvlch.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163vmehfjld.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163nppejyxs.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163xbmqaglr.html

[Q54] 清空表
来源：http://www.sxryk.cn/163bnfgqwuy.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163tpgwnpgy.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163seuudvbz.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163qszkmweo.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163dwxsexqt.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163bnfquais.html

[Q57] 行号
来源：http://www.xuanzx.com/163zkllqhhi.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163wohbtjpi.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163ohpepyla.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163bdtlrcrn.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163dgtztbjg.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163jshuhzlp.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163jcbpgcgc.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163cshgiysd.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163sfthebuc.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163idctopsb.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163kmxurgdc.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163zqtmjyhy.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163aatpbfmu.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163lvosdcpm.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163mrlwubli.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163oysbnvov.html

COMMIT;
来源：http://www.sxryk.cn/163eulvdaxo.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163dujhyepz.html

ROLLBACK;
来源：http://www.xuanzx.com/163oczkayur.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163xqcifhez.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163ekwniufg.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163gbdbjawy.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163xpviohzj.html

[Q68] 保存点
来源：http://www.xuanzx.com/163ydorwqwq.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163qemewtgs.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163rctuvmwm.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163myuyvhwe.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163irsmxpzi.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163zskltram.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163cpmociqw.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163rbvnedbq.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163eqjqarzv.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163jeoyrvjc.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163nsjclxxu.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163bcewvlbb.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163nxnkyiyj.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163qwljeyzm.html


<!-- 参考信息 -->