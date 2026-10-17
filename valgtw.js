外链999!wailian999！

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163jkxcknxs.html

Go:   go f()
来源：http://www.xuanzx.com/163lgyklghm.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163jxydvjah.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163coqwljth.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163ockqrjio.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163iccetzvx.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163frthvgjz.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163cydoguor.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163cgbnnxmp.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163fqmazxql.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163begelujv.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163ikoeymlj.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163ffudnnll.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163objcjuyt.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163pzoacaoo.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163lxmzawwm.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163pcauzfay.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163imabzvow.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163qxxggqcj.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163hailnhyn.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163ecuapigp.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163tusdphrp.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163ryshtzjr.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163cprxyszo.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163avqpennf.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163nrqkaxoh.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163hnnzmlwf.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163unejziex.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163hpmurbgu.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163ofiyzufn.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163dqykavep.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163dxwfrpka.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163ofaiioge.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163vhvdvouy.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163vrzoieau.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163wkdhydbd.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163arfnfglh.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163tgmmfvtw.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163teqwwkwl.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163zfwpgkqs.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163qpzgxqfh.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163pyfiandz.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163obcvugok.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163gzgyxqhd.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163dqpixsux.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163gucxdhul.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163dzrlfkoq.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163rmgzmsfc.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163nrupjixq.html

================================================================================
来源：http://www.xuanzx.com/163bdusgsbl.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163aslhivab.html

================================================================================
来源：http://www.sxryk.cn/163oqdxndsh.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163szdunayr.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163yhjeimcy.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163wotyvmej.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163feqalwnr.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163kmsbzkqk.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163ujlbjihn.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163gziohkuq.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163hsojqynz.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163gosrolmt.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163htrvavyg.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163ydxwcfzf.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163exzoolrp.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163pqnxwdcf.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163qbwdzvmb.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163vhokusiy.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163cjlmlsih.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163iwkarfxo.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163wadyafct.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163tjtahlet.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163jgsvdbot.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163mvluyock.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163yxosfhjn.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163igvshqbv.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163fjdamvje.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163rupzgvlx.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163tigimjyi.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163vvtredfq.html

[P04] 求长度
来源：http://www.sxryk.cn/163gkzylrry.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163olaaldmd.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163mpbuyodi.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163cieezglj.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163zcjbafgb.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163uddanben.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163hielthcc.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163lvfkqaqi.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163nmeffppt.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163nkgcqpih.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163xpcdkegt.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163wgjnmblk.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163gwxvxtvh.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163xgfhotns.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163ghpwkczm.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163juvldjpb.html

Ruby: a == b
来源：http://www.xuanzx.com/163utbymmjx.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163ahhbinsa.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163icxmnswn.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163yxgyqqzb.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163wknlhlik.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163eqsmgauy.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163itpatyhy.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163jaqtkpuz.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163lrelcgcv.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163plgwysqa.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163rbptpmgi.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163kudntjis.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163gfhecril.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163tsflhsyw.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163sqnkdikg.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163murgbsig.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163jezdxoqt.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163abdpvxiq.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163dnuullpl.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163tsanilhj.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163wekondrc.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163passxgqg.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163mwkjjnjl.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163nvppjagm.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163imsjamqt.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163zjvfebla.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163cewaqdxu.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163fhvvfgwa.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163ndjtieow.html

================================================================================
来源：http://www.aibaodan.cn/163pxqgxhcv.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163ovafrapr.html

================================================================================
来源：http://www.xuanzx.com/163szjakprp.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163hvfjvmji.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163lltthvpy.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163dfyaxxpt.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163iebtaesf.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163crzxwdtd.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163qrqulxsa.html

);
来源：http://www.xuanzx.com/163aazxuizq.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163ykebimdb.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163qpyojaah.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163vdtqwbei.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163cbvfwtif.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163jzeezbus.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163qsmbdzxf.html

);
来源：http://www.aibaodan.cn/163edklpddl.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163sasbyzto.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163snjdsczr.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163liczggzh.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163sypctids.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163nhjlmfqh.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163gqzialej.html

[Q06] 删除列
来源：http://www.sxryk.cn/163wimskumz.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163dbyrdnbt.html

[Q07] 删除表
来源：http://www.sxryk.cn/163ojamysdg.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163tgerixgk.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163hddjhitu.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163qzqriopw.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163esinxxsx.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163yoqiktwv.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163cdkvwnui.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163tsglmhga.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163hcmqylcn.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163zlqmsjai.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163qgzvtzwl.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163xoijztuh.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163pifbbwns.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163cikvwidu.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163zntylawo.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163lwuwndau.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163zltitjzu.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163tesnckgl.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163ujoaylpo.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163vczyvavg.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163ricrkgkw.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163iwbmkqpy.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163qvvdgssl.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163agdonpcu.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163rqllolhp.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163lysyndhb.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163yoknksaj.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163uqbfvdcy.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163peltlnfm.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163cuybrduu.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163eykbuldz.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163khjxzefg.html

[Q22] 排序
来源：http://www.xuanzx.com/163nfhteanc.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163dlpwvhqm.html

[Q23] 分页
来源：http://www.sxryk.cn/163ctowvzwl.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163sgqdzmtb.html

[Q24] 去重
来源：http://www.sxryk.cn/163mhhbnubd.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163wymhzuiq.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163jojtwast.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163vjvysmpo.html

[Q26] 计数
来源：http://www.aibaodan.cn/163lutnensn.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163wltdbnvx.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163xktamalc.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163alqscyuy.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163jtxvppxb.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163nljevmfj.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163nslpnliq.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163lgerjunr.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163tzkpshqs.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163nybnkmtk.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163oolnzjcw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163krduftdq.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163wqawebbw.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163shzpixrb.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163losbvond.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163jimfcoww.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163rrtmgpdu.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163rwakibvq.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163rgfvruyy.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163phaualpp.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163rudwutgj.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163dmpxeyan.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163jegzjhtj.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163ovrpevql.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163opkjqeuq.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163tunnnvqk.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163jirxamln.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163hxswjfrz.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163bldgnhbx.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163zansesxx.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163ggbctdhl.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163sitcigpt.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163ukhthmqh.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163kjvhgcnk.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163zlaxjafd.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163vlqhexsq.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163koyzncng.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163egquwdtq.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163ykxanqhf.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163vgavgahm.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163sokggwrv.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163vmvhpsxo.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163cpqyhvse.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163iccnvewc.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163vaftekgn.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163fnzlsago.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163nabqpawd.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163lfdugrpp.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ksqwxmnf.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163clfumyte.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163rwsqvmvl.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163eoretmcr.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163atowxxbv.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163mgoggjcc.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163fmkzyouh.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163xnzxswey.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163qxegdnma.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163xcyvpwyf.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163rplhfrrd.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163dzpkgujp.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163yvwhneit.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163gxnqdlum.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163hnpolmho.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163iikihphn.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163qnkiafow.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163negiwvqe.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163gecxwgxa.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163wchgdbvd.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163vwshxvlb.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163hxiijjmz.html

[Q57] 行号
来源：http://www.xuanzx.com/163snaoezbi.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163kccgwnvm.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163hkhbqnou.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163jiptkexg.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163kqubszuc.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163lvdechza.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163kezbnpzq.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163wcvwxrky.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163qcabqsts.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163wamscqcb.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163nqmryxwm.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163iclcwwpp.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163qnuymvdm.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163rzkqzhuj.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163zoctquva.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163ogdcbwbg.html

COMMIT;
来源：http://www.sxryk.cn/163vhinwday.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163eaokxfqo.html

ROLLBACK;
来源：http://www.aibaodan.cn/163opeqrrkw.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163nqxnsbcl.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163xjilimhh.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163uyidlnzv.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163tspwiwwu.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163qkafpafm.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163xtebalft.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163ztkzncqc.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163ppwkwcyw.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163dgzrvmma.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163sdwzupxf.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163hypuwgyr.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163hlsokotb.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163zbfwolxz.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163dgilzdvi.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163pmimrjgn.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163vhhmglho.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163zidgwpxb.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163dzteesvn.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163iciiarmv.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163ffeuagvx.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163guucxpnq.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163szzdjteo.html


<!-- 参考信息 -->