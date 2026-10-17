外链999!wailian999！

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163jqqphoeh.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163nbqktihm.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163nhtohign.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163bhvblbrl.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163julxbimp.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163psqkckfr.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163fknxnfzd.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163yqizwsxs.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163vmwfjejw.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163ouwxscko.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163chluiiuk.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163vkouujvc.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163vwgdovgn.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163ibfngmav.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163nkryevig.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163woxzdqms.html

================================================================================
来源：http://www.sxryk.cn/163yiokoswy.html

O. 并发与异步
来源：http://www.sxryk.cn/163msckingg.html

================================================================================
来源：http://www.sxryk.cn/163gatgoaul.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163qnoxmupo.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163axrkqfyq.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163cqnnsnka.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163kjtcaqqf.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163iomkucsf.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163rbglopyb.html

Go:   go f()
来源：http://www.sxryk.cn/163lhxmvnxz.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163vqmgqpgb.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163ldhidcyw.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163xpzclefc.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163tnuxpjxw.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163ooozujyc.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163bqurpkpw.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163mlpeksrp.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163jukdebsl.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163agvnwpfs.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163zjvqmnat.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163ankjspll.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163jccdvsne.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163zxprwixh.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163eygacavs.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163geldofqp.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163medpkrzl.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163hbsegval.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163ikmvdcca.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163ybmrlmcj.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163kuwyxlcd.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163sotpcmeb.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163chpywigo.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163jwxkdgvb.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163ydvpqvkp.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163plmjqpti.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163bqgrkilf.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163cypodmxz.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163nplkfgvj.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163hjzwgoac.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163vjwxnprn.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163aqnoghho.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163hspjpbgu.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163dtiqrkeq.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163umgyjmci.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163xujmkzaw.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163lttorxpa.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163mtixdibb.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163oqbyrdht.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163cwhkcedf.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163gtxwewhm.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163wfopvlfr.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163kemskrlo.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163sabgjhqw.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163lmaqmjnk.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163zhbmgvdx.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163shbqryao.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163fyhiwdhu.html

================================================================================
来源：http://www.sxryk.cn/163tqafgzzk.html

P. 常用工具函数
来源：http://www.sxryk.cn/163hxlgosdb.html

================================================================================
来源：http://www.xuanzx.com/163leaakvps.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163pjssjigq.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163lggyneud.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163mhngmaqk.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163mveatnnk.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163oivbsoqv.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163vplhsmiz.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163oznjisen.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163aalpjbht.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163bkvnjatx.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163htdzykli.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163oqvxfsbz.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163bxohyxrf.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163nesxqiek.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163kbdciuei.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163kjbnoqtt.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163ibongjzz.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163swrcooef.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163pxmaasve.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163dvzpjmoa.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163regnheee.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163znrpdfrp.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ghlujkzc.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163lrltodws.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163ybajzrgk.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163whffijpx.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163tldgbfhh.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163getmbezh.html

[P04] 求长度
来源：http://www.sxryk.cn/163fbjxrhxe.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163ztjobrsi.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163swpneogb.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163wrizunmw.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163shpgcdbo.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163orcsbjtj.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163qevocjol.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163kpwfvutp.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163twyjkunf.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163spctsvfi.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163efpobspu.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163afufmwgy.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163ssygoeak.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163uzosnczi.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163cdajoflw.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163gxqokngb.html

Ruby: a == b
来源：http://www.sxryk.cn/163rbxamqag.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163lbjbtehl.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163chuxbmmj.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163qrzryzwa.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163xdudbizs.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163hrppxwos.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163gnkjaghg.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163ngeqodto.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163zpashmpf.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163xltjqvnf.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163ibmjjsjx.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163hswjxqwf.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163yxrmdalk.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163hnxlggbw.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163mpnclznu.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163xhntzqml.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163tcnubaaz.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163dsdrlmud.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163tsxhcdwi.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163hqytfmkg.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163pnkzwgwl.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163nbgxqulx.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163whyiezji.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163telncuun.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163lbqfuaps.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163qvgkusds.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163yulmwbqb.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163annphnag.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163cvwsmstt.html

================================================================================
来源：http://www.sxryk.cn/163fcxksldd.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163aqsowopq.html

================================================================================
来源：http://www.sxryk.cn/163ozkfskew.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163cnodgvop.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163fnkethzq.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ulvdjttr.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163ydmrdofl.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163gwbkcoaf.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163mtudecmf.html

);
来源：http://www.aibaodan.cn/163bqyrizld.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163bjdlbvfr.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163pyflrlhf.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163zcjnvujo.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163fxtulifd.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163tyhoaeyb.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163mulotkne.html

);
来源：http://www.aibaodan.cn/163xpmwjyzo.html

[Q03] 增加列
来源：http://www.sxryk.cn/163xmebzyeh.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163qnbqumbw.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163dhladjdx.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163uoqaigtl.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163ambohwoj.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163osxqtijh.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163oqqjguuh.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163vbbnbdtg.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163pxltdtzx.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163dxmbhhme.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163jtijurps.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163qyrrzuob.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163wxzqvjhz.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163rhyxssjk.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163ruhdygkh.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163bitsknjs.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163ppabyeyw.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163ohleeqeu.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163vxtmmbfz.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163glaubfve.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ijfxtphf.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163skhyabzh.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163tdsxvgjs.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163uvfffvwr.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163ckufnwol.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163aybnvprk.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163cwitqdcw.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163gmtsxbxu.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163tcsdfplf.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163zrkdlevt.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163ypgngsfg.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163aftaueuw.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163tiigfmrw.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163zjgsydkq.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163ikcblvot.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163flowjgps.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163wopszmgk.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163zyckjbwt.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163jiihtswn.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163zrmmurqp.html

[Q22] 排序
来源：http://www.sxryk.cn/163xisqpkkp.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163htdgwfmd.html

[Q23] 分页
来源：http://www.xuanzx.com/163mowynyuv.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163wbhwybti.html

[Q24] 去重
来源：http://www.sxryk.cn/163vjrerpgs.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163sxxrpgxw.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163dujzopkw.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163amftdemg.html

[Q26] 计数
来源：http://www.aibaodan.cn/163mgayjflm.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163feyjyxdb.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163ghcevgmh.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163qbxapckj.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163vpkpqfwl.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163iwkztfpc.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163ltryonhc.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163jqwzbehj.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163omigajkq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163cgrykssa.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163wueirewy.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163bllazsmv.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163morpjxwa.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vemseayl.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163glycveew.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163ushnwyfg.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163dqkrwzso.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163rccxmsab.html

SELECT * FROM (
来源：http://www.sxryk.cn/163jqonvdll.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163cjhzuufm.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163xwkfvesm.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163azklunmw.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163hgwldzft.html

[Q36] 左连接
来源：http://www.xuanzx.com/163ycumkgma.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163osfpngwx.html

[Q37] 右连接
来源：http://www.sxryk.cn/163cpbdvslf.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163mfkawbwh.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163hyerkkec.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163mkszpmat.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163scvfkyra.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163feeymozz.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163bfvmvicl.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163cnloiwnb.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163nqnnjdgc.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163efamezsa.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163aujkyply.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163fdfrmiyp.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163yhlrezgz.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163yarxujnf.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163ghvmzqlu.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163qbajrupx.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163bntzakyw.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163irayinqr.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163dlhqhqsa.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163zxcwbvym.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163eboywdit.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163byobqgqi.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163xxqjakbg.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ohjfshbh.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163uqxwdpld.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163erdkwumt.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163wmcqemzq.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163ngfoshxi.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163qhjiarih.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163bxvsawkj.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163daltrtyq.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163wozrlbiu.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163qwopvmqw.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163yssdtipd.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163wrmfeugv.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163mgleddmx.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163amtwewwz.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163inruboht.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163hlodhhne.html

[Q54] 清空表
来源：http://www.xuanzx.com/163arzigmcq.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163zkifzxdc.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163dcpfmjjc.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163dkhukohw.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163ymlbrvmm.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163tktloofc.html

[Q57] 行号
来源：http://www.sxryk.cn/163ltotijaz.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163yqyeottl.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163xyzkyciu.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163puysbcpv.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163sdspnyuk.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163gxhsiypi.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163seeuvcvp.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163rzofrftz.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163xycypemu.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163kaqbmrbk.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163aerjhdjw.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163ljckgiqh.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163nmdjcagc.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163agntgmmt.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163hbvgvmhv.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163onlmmbkb.html

COMMIT;
来源：http://www.sxryk.cn/163acqcpssx.html


<!-- 参考信息 -->