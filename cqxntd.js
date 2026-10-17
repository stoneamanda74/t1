外链999!wailian999！

Go:   // 手写递归
来源：http://www.aibaodan.cn/163ghztwqev.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163qjempppp.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163nwupiyhd.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163kgkexbil.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163xxiyfjed.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163gzzqylco.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163opslfuxh.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163otgfmglf.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163fesgbvxf.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163aiofmxmm.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163ghnxpgyy.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163yaurdpbu.html

================================================================================
来源：http://www.xuanzx.com/163glgmpiyl.html

O. 并发与异步
来源：http://www.sxryk.cn/163qneoguga.html

================================================================================
来源：http://www.sxryk.cn/163bvqtemlz.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163xlsyesmc.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163mlliktir.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163oovotckm.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163adklfzle.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163htfeiebq.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163bcdnsmns.html

Go:   go f()
来源：http://www.aibaodan.cn/163oyemadlb.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163ycmkrsnv.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163ehpzbbbn.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163pnfmemqt.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163dzvzqfxx.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163prlzysex.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163xnniitfl.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163goplwuwx.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163welzifkw.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163mezcordz.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163icwowmcr.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163iklhgquz.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163hyvnjbto.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163kneicxlc.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163cycvalrk.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163xqeernqu.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163esouqblw.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163rajvbsle.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163erfbdary.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163gtifnmdi.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163mekuttyi.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163utksnqca.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163kcquabss.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163hqihfgmk.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163bherxxxa.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163uipbenkr.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163tpmsbylv.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163pblmmvab.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163huqnawjh.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163mgjsjjmv.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ioejelsu.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163lujpfuls.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163mjirwsbn.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163vycebenp.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163fkuymvip.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163hzuayrrr.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163motquytz.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163bwtifccn.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163nxgsowpt.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163kwbipefi.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163vcuemfvc.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163koqdzmjv.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163sccghrmg.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163gmqiocqc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163yelhdgzx.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163ldzwkyfj.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163lxgqezdb.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163ennyaeyn.html

================================================================================
来源：http://www.sxryk.cn/163qeovoxga.html

P. 常用工具函数
来源：http://www.xuanzx.com/163ndiglbgk.html

================================================================================
来源：http://www.xuanzx.com/163mqnzprap.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163wxemnyrs.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163lnlxsvrz.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163mxhzdqbh.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163sifaplqx.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163vqbhorzn.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163gojujwmy.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163bunztsyr.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163bonkouau.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163rhusbpxj.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163wserdxiz.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163busyumsp.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163gtkpiwev.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163npsdtzsy.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163slnojoqb.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163sggqqfqa.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163bybsxufb.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163cgadhmov.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163eqvyiyee.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163iindqoer.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163jbtfuhzp.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163mkxnmpvt.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163dewrdnwr.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163cpcrkhfh.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163hgbecpqi.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163sbpaqdyq.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163yvguxcqq.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163wdzghyrw.html

[P04] 求长度
来源：http://www.sxryk.cn/163uxopztuo.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163aoezrcvn.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ohxiivyr.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163cxsorbfd.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163txjhsycu.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163xnpecmat.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163duukqoje.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163hvsqocyv.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163iltvxfdh.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163jpovsadg.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163hcssbvql.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163abicnhkv.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163mkmemzea.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163zjfkafzc.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163lboxuleh.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163ilmqjqie.html

Ruby: a == b
来源：http://www.sxryk.cn/163chztlgzp.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163unxrgknr.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163iccgxxah.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163cnuwpokk.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163uoxqcszp.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163nlkjwllb.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163gtibjmdm.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163btmtmbrg.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163wfjgraff.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163vwdapppy.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163adaonkmn.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163hdzzchyz.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163bhutlwxr.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163atnnsilm.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163sdwnztjn.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163lnzpcspc.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163lnxyiucb.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163xdvgzpcn.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163djkieseo.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163xbuamggo.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163jifysipd.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163emogvblv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163kigqapbm.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163uajarfvz.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163jwpkakms.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163innlysur.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163omcagsmb.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163xhkgsxlj.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163ytwaaiba.html

================================================================================
来源：http://www.aibaodan.cn/163jpkpgyny.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163faqwdazy.html

================================================================================
来源：http://www.sxryk.cn/163eexenmjq.html

[Q01] 创建表
来源：http://www.xuanzx.com/163czeggdei.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163cceotrei.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163xuhbgzrn.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ekbklqrm.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163abjccvnu.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163apuwiyvh.html

);
来源：http://www.sxryk.cn/163fizglrfq.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163xdirxsdc.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163fsotkydl.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163kbmmxtgz.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163fxncwifw.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163zidglhqz.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163hmftsmno.html

);
来源：http://www.xuanzx.com/163uyatuchz.html

[Q03] 增加列
来源：http://www.sxryk.cn/163bumxzihm.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163drhuabee.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163vbiackgq.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163dtcbeltq.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163iioggihj.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163yghuhinr.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163jahtanhc.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163vvkcxzem.html

[Q07] 删除表
来源：http://www.xuanzx.com/163rppspmxn.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163ojytbvwf.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163rqzmatmx.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163zaxtbeba.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163xmtiqfhh.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163tlahprat.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163ungxdaat.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163umjkfnhi.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163vkjhllwc.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163pplarhjl.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163aiibaflj.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163urznaqpt.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163bwpjzomp.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163jnnjnxeb.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163kkfrwxzx.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163mgumrvkt.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163sykfohxj.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163pzjfqdcc.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163cvqvzlma.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163hhvrvulm.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163gtonvpvz.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163ljxiqjeb.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163zbmjaybh.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163vpgzwvaz.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163gdbsbknm.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163vrtakgwg.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163kfntfzgz.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163cielqvco.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163kgnfbwvg.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163gtjatlrf.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163yuavkbdk.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163khkycnag.html

[Q22] 排序
来源：http://www.aibaodan.cn/163lvmcmjwv.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163vhxijszj.html

[Q23] 分页
来源：http://www.aibaodan.cn/163egyxhawu.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163bbiwxaei.html

[Q24] 去重
来源：http://www.xuanzx.com/163lprzqpee.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163izispylt.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163sduevnpf.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163kzzsdzxi.html

[Q26] 计数
来源：http://www.sxryk.cn/163rygruphx.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163tqjobdny.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163zqilcnbj.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163ltdevngt.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163rdbhbjvm.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163tfkgkvrm.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163slvdrita.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163jmmsejsn.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163vuqhfumz.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163qnbgyhbg.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163xuhldowx.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163fzijoogy.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163acgqwykc.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163jexgxhkz.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163vmqmeitn.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163fruqfidi.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163htcocudr.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163nnyvbgws.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163efsyhkwy.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163sqbitmra.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163anlqlwur.html

[Q35] 内连接
来源：http://www.sxryk.cn/163yebznfzi.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163wgwaekmp.html

[Q36] 左连接
来源：http://www.xuanzx.com/163ksybutlz.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163mftmoqdt.html

[Q37] 右连接
来源：http://www.xuanzx.com/163ozizdfwr.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163ylrpvdou.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163cowvofjc.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163rjthkijf.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163lompeglr.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163nckrdrvv.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163surwihid.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163jkzkowls.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163ytxvtdyv.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163hmcbnjvm.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163ccmlsgnx.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163yumabwgm.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163rfnkkuxc.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163ujcgokvf.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163bvrxtvox.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163ezssxaio.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163pgfhqtoi.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163wzpqihzs.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163rhhldekg.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163pbknpukv.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163drfgtijp.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163wdbtyrgx.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163cwobgozw.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163klrhtzmb.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163ehnxdngv.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163bjhirxbz.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163wqvqhdew.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163khckpoos.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163qkksqlby.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163wzzlsxlv.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163eyblxkub.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163falvpboi.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163fneivuxd.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163wvcrvrjb.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163oxtqhlsb.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163zwayoudp.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163zcvjyvgx.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163kelltnbk.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163guqbquij.html

[Q54] 清空表
来源：http://www.xuanzx.com/163ntqkosvz.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163ftsdgbmt.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163lckpmtar.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163bizinagw.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163jlihdbjy.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163gcxhddqe.html

[Q57] 行号
来源：http://www.aibaodan.cn/163wkhhdtvj.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163ltznbzlt.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163spywugyj.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163ypshlzyq.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163iuofwqna.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163jcxzywzg.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163ytepdhwn.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163buhvgszo.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163lfvwjgau.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163zccbhytf.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163xdgentud.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163euechqii.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163mrbgjyvb.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163ltorhnai.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163havxbmiz.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163hxriscjs.html

COMMIT;
来源：http://www.xuanzx.com/163wqztvzbb.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163ehyxgnij.html

ROLLBACK;
来源：http://www.xuanzx.com/163wlnwigcu.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163vvoquwua.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163avaolozo.html


<!-- 参考信息 -->