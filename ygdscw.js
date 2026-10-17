外链999!wailian999！

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163fhyqwtvx.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163washyavo.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163mpnujfet.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163tqpvmtli.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163iaxozalt.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163jsdxgaeo.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163jonwryob.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163gnypxjbl.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163akhtprde.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163xtjlsdzt.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163xgimhosa.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163htuakfvt.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ujlsqczp.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163wiotstwf.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163ruvfebqp.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163rkxbpkak.html

================================================================================
来源：http://www.aibaodan.cn/163tquexbeh.html

O. 并发与异步
来源：http://www.xuanzx.com/163gqudhand.html

================================================================================
来源：http://www.sxryk.cn/163gvbtlfmz.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163cjwfaykr.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163wtkvdwri.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163byrfqxnm.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163defilqcc.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163rooxshnq.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163sesbecat.html

Go:   go f()
来源：http://www.sxryk.cn/163dayihcow.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163dgdvgumq.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163eulpyahq.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163oodscyzd.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163hgcvnlgd.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163odptiiqs.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ipgniguo.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163sgtqjvxb.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163kantkbgm.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163gpacrldw.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163nbfzuehm.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163pgvkmsma.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163sxfmajvg.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163dpizrzze.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163agnffzqt.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163gequogwe.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163asbbfiyv.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163xrxcujgu.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163qmewgmqz.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163pebjdmfx.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163oyuwyotb.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163yobsarop.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163krusqoii.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163agbujdmf.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163iyogktnc.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163rnwguxxo.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163haglfftb.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163yccxiblf.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163jbslfjym.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163fpriwfju.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163geyzzmtv.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163dpseiqoe.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163wysoqzpg.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163xrwhfgln.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163zzinepyk.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163kvmhvguy.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163hbkzbqgz.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163drfdgaev.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163ytupboeb.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163pkqzrzdp.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163bjkmolpw.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163uwwojiuf.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163rkacfvzi.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163smsgebaf.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163hwouyykv.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163lrbffmui.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163rsufaqyh.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163mkjkyqvb.html

================================================================================
来源：http://www.aibaodan.cn/163alremedk.html

P. 常用工具函数
来源：http://www.xuanzx.com/163znopaunx.html

================================================================================
来源：http://www.aibaodan.cn/163ycyivdzi.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163yuawilod.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163ipyxqcsd.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163fbjirmvv.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163dwvursjc.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163luayidar.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163kfohedcg.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163phnromnq.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163vzpgraod.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163ervusrmz.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163osayuock.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163nyhyjxbx.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163ckhvfvup.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163dttiefcf.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163cpzxszrr.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163eofmaagb.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163lczmqkru.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163oyihkhyq.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163bawpttge.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163dkkgjhkz.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163enqasauz.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163yyhyikmu.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163lmlxvkmo.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163xiwvdfvs.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163aggxvyui.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163vlkdzqbi.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163oyidtksu.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163kexshnyz.html

[P04] 求长度
来源：http://www.aibaodan.cn/163esvrnqth.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ksmxhjxc.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163gpvymraq.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ljzfkieb.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163gyhxpagq.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163twssoyhx.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163ddliduss.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163zlxkatmb.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163vqfyxcjj.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163zzzgwhqx.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163zbvvxjzp.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163gxylruqo.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163ekhjpgvm.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163fzgphmng.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163dssqjqyx.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163ictnlkoi.html

Ruby: a == b
来源：http://www.sxryk.cn/163gwagpozn.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163ntwsbaba.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163ybzmktao.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163akpzkpqb.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163wjnggpvw.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163vylnbfcw.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163fgyncldx.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163cnliluaz.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163jdzdfucj.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163kczvqfqu.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163hjqertkl.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163maosspjf.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163durpoift.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163xoouhzst.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163dhnworcc.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163iqotlaww.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163rwguuoab.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163hbtqtdkv.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163knhubdrw.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163lhpckyto.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163wffjllbq.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163utdrsmgs.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163jrievctr.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163ruvvflre.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163iuupgoli.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163yrjulwvo.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163jlbcdsid.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163zmkhqyvl.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163muqxmcra.html

================================================================================
来源：http://www.xuanzx.com/163dpkfegrx.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163pskhrszr.html

================================================================================
来源：http://www.sxryk.cn/163dvkbhqdw.html

[Q01] 创建表
来源：http://www.xuanzx.com/163crwxvnxh.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163igwmdplj.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163jamirzgp.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163xeuubfwe.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163vqhxzsuk.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163cgscilek.html

);
来源：http://www.sxryk.cn/163ovsgpqdu.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163xttplcvb.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163fukhjjdw.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163vuhhyppz.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163dskbtwuw.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163uleqlqqn.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163imguuqsp.html

);
来源：http://www.aibaodan.cn/163uhqjskcl.html

[Q03] 增加列
来源：http://www.sxryk.cn/163dxhwbyvq.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163sqbabfoh.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163uolebfya.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163jmlsyimx.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163bieinvdo.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163cwpnqioe.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163apwnfjta.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163mbxtqtsx.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163icnogdxp.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163oyndrpar.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163pmudixhx.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163mbtxgboj.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163pocsbauk.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163gvyulvtf.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163bldawdlq.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163qajfgbhu.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163ncvjnwdm.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163xzrlcfbj.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163alewjysm.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163lxtyjwtr.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163wxlfeekv.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163tgjiibmm.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163sbyqfiqp.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163ttxoxkhu.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163dzxrwahr.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163ywvhlyrx.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163klqcmqwn.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163enwyxdod.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163fkqmlraj.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163mtxnlxfq.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163koljlwaq.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163knosuoar.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163esckllxr.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163qyqvpxmr.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163btoohrrn.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163iwoevszq.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163iuklxaqx.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163oocfwztr.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163fnydrjrb.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163ivfjyliu.html

[Q22] 排序
来源：http://www.aibaodan.cn/163rvrkgebl.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163cwfxjihn.html

[Q23] 分页
来源：http://www.xuanzx.com/163cydmnzjt.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163aryogweh.html

[Q24] 去重
来源：http://www.aibaodan.cn/163kkrlnbjd.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163gnttjqhh.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163mlwzqfyf.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163eypoegfj.html

[Q26] 计数
来源：http://www.aibaodan.cn/163ndvpqujc.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163wbvugyei.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163onugzbud.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163zrwbkpzb.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163unuqpdhf.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163pxoiiyqv.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163tyisfrhm.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163smuscico.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163rtxblich.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163omxeubsf.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163qvygwelj.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163rabuqznz.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163wwhnbnom.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163zlrbrqrd.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163zsvplofe.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163ukiuuthj.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163tmgevvhl.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163ceealcdw.html

SELECT * FROM (
来源：http://www.sxryk.cn/163omkyptrk.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163yoispfle.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163lmyiwqbk.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163jvlzsvuf.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163bblcwbar.html

[Q36] 左连接
来源：http://www.xuanzx.com/163mjozwnaa.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163oupdefuu.html

[Q37] 右连接
来源：http://www.sxryk.cn/163eadntkux.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163nqrrrrnf.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163fvbvmbgq.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163hileqppe.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163ejpppogd.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163omqnjeoa.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163ddamldhe.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163rzdjkgww.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163rfammxkr.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163zghotkzi.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163yoiketbm.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163qncfoerk.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163kweaewpu.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163bflhetax.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163ucjbcdvr.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163phbdwacu.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163rjrkxjbl.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163vmyrnbks.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163etezrjxw.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163ugkychhf.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163cyiokonj.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163oymbvnxj.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163idzmfktd.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163vciwsqau.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163ddjggrbv.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163nmoyvngy.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163ojyirzen.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163yupwzkbg.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163fltmylzm.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163jcephnfw.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163naesuyec.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163trdtyydx.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163mdknofxb.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163dznvvaff.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163hislboyx.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163adtnuayf.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163ebjtukej.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163itvzqrum.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163rfbunbfk.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163nxailhie.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163xopqlrkk.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163uupnvhlx.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163zxfavslm.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163mclgshfa.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163ncyirauf.html

[Q57] 行号
来源：http://www.sxryk.cn/163vlygilfr.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163eyumkrxp.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163cufgquhq.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163kbxxheat.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163kbjftazo.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163tfgyweyw.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163striglsb.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163gqqvswnd.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163ythrhzea.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163esekicsb.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163ihznwxan.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163eznqmozp.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163jkaovznf.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163opmbcqmf.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163dhgtwaxz.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163arkxhkei.html

COMMIT;
来源：http://www.xuanzx.com/163reuuhpgu.html


<!-- 参考信息 -->