外链999!wailian999！

Go:   // 手写递归
来源：http://www.aibaodan.cn/163kexncwxb.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163gkzfoaaz.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163nayejvmy.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163uxzqtvak.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163igltfxct.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163jkclxofm.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163kpcivsnf.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163mavtmnex.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ythmvuco.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163yixyafsx.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163qmujorxi.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163uikcfeog.html

================================================================================
来源：http://www.xuanzx.com/163gycntnqb.html

O. 并发与异步
来源：http://www.xuanzx.com/163oodluqya.html

================================================================================
来源：http://www.sxryk.cn/163wmjoyatv.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163kwounjal.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163cwghjuez.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163ogehlelb.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163egkkbvhi.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163emsliyju.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163wrripiwt.html

Go:   go f()
来源：http://www.aibaodan.cn/163hefzrcrc.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163pxdyddlj.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163rgcvqpbx.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163nvpltsqs.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163xjnwffuh.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163jblmyjsz.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163spbsogaz.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163suxpcpjn.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163wmqnfomj.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163sdsnezsm.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163eheaypyk.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163mfgvkayi.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163zwtwbtpz.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163mwdjzvmt.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163woslgnfw.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163klkconuh.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163rwjlwsll.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163ojuxbuva.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163okpaqxyp.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163ufydjmct.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163wtxjkhny.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163rfcdrsny.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163qnahebgz.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163tihdpgpy.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163digoopgy.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163gmijzzyw.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163zhpyrlri.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163tjtulqyw.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163znziyrrk.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163htbahloy.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163frivhdav.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163sagnkcat.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163pgunccja.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163twwrqlds.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ajvdlwfe.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163mjtofeow.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163ztgdpjhb.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163zrfffleg.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163hskikckq.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163elfzesgf.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163rpczncdt.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163suvyehnj.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163dqcplqpf.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163qzloehja.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163rkvipnvy.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163gadqnqpp.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163awzcgmqp.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163ojnzpwxn.html

================================================================================
来源：http://www.xuanzx.com/163ebwmljch.html

P. 常用工具函数
来源：http://www.sxryk.cn/163uyucjpln.html

================================================================================
来源：http://www.xuanzx.com/163ufaqtpji.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163ftjlqsqe.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163tcnesogd.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163houonpha.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163vwhvgapy.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163qjmloonr.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163geeplmls.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163hwbfqqho.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163dlxfkvjx.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163buyrnwei.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163vdgrxkaj.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163vwoitkfj.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163dkswppqt.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163nbomhufa.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163yxylmfkx.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163bpzciupb.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163iugraaev.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163odjtkfvs.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163vulrrutv.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163iubhakgo.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163xepkytzo.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163kkvylcwf.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163realxqmf.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163xweebzaj.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163jqwkzywl.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163igokupiy.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163houswjbd.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163ecwpyqjm.html

[P04] 求长度
来源：http://www.sxryk.cn/163zzblqfee.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163ptckjenc.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ekpxhqtd.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ilzvqghq.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163gvissatl.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163kfieodfw.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163ynwscvcw.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163yurfjovu.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163xychlixc.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163zcrzjyek.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163pkgstqvi.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163ybtwscpv.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163iowcdcri.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163xrrbqhrg.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163zdmbnlqq.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163nirjdzgh.html

Ruby: a == b
来源：http://www.aibaodan.cn/163bfkiebnw.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163jzkeoatg.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163chapobwb.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163jyczjxel.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163jjcmyqvs.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163vqyucoci.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163zlqfpzbo.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163idcnznts.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163qvfwftxa.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163jrzvodwl.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163bpmhfnuf.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163zlrrpamx.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163ewozjtsx.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163txjoqvpb.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163mdgggivf.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163jxpagxia.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163xxzrcwei.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163nlkgzezx.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163bulrycab.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163phyllmlz.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163anjheecj.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163zkcqalwo.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163iaojituv.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163asoyogtj.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163rqxlwlvp.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163czuwmkty.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163vujuwiln.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163zweryavf.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163ovyeapgp.html

================================================================================
来源：http://www.xuanzx.com/163hfvguqcn.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163ddxwcaby.html

================================================================================
来源：http://www.sxryk.cn/163dvquvjux.html

[Q01] 创建表
来源：http://www.xuanzx.com/163mivywwpa.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163jbvvgjfr.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ccqfmkhq.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163bkyhnswk.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163ivxzhade.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163zshfdcqc.html

);
来源：http://www.sxryk.cn/163aqxsffcs.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163yylftamz.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163dukcxghx.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ffgbxjzx.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163kfkffvis.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163icgvipjc.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163hfjrvzoz.html

);
来源：http://www.xuanzx.com/163mafbwuqu.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163kymykfri.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163flzqjsmz.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163ughhazgg.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163pxogfnom.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163rbojachz.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163fncywtac.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163lcjjvljy.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163jzqydpdo.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163ditvjnyx.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163kxdixynx.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163sgqzgsdz.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163zgznjzcg.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163ktrcoxyr.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163jejotfre.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163hyuyasiz.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163jnkdmolm.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163sdxlhdov.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163ulieffqp.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163kfvrpavn.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163uoobtrnc.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163njglghfn.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163jbwfqwew.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163rgrxdkoa.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163vkehjjbf.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163gyudwiit.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163lgqemnse.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163hzfexdwe.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163nbgjmcec.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163twpgeelh.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163coxijsqc.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163yyjsxswu.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163csecgddb.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163ffxcvvay.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163hyjzyefu.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163mejeowft.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163gdncyclq.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163gcjoouut.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163vfsjrqss.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163byjjmsnj.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163mejrvdve.html

[Q22] 排序
来源：http://www.aibaodan.cn/163evypuzin.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163klesgvgu.html

[Q23] 分页
来源：http://www.sxryk.cn/163idyyshhx.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163rykvazmo.html

[Q24] 去重
来源：http://www.xuanzx.com/163olxvszjr.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163omkytdzx.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163xcwkaowr.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163snolxyxp.html

[Q26] 计数
来源：http://www.aibaodan.cn/163rttdzmpp.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163befrpqgc.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163oblbyide.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163ivqjlbvp.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163squuhpfe.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163tsvwujvo.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163tznrflmy.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163vkcxtpcs.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163jljdyceg.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163kvajzkjv.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163kynbtdml.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163nzbnvbrf.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163txsezsev.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163bulqvyci.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163qvgbegeh.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163zihtubnj.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163sktolugh.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163zlaiculf.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163raemzfbb.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163btbdszaz.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163ouizfiva.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163nbpiimgd.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163rllbzfvr.html

[Q36] 左连接
来源：http://www.xuanzx.com/163muktczje.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163qwovbipd.html

[Q37] 右连接
来源：http://www.xuanzx.com/163kllncbcz.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163qxkdljqj.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163vszrqoew.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163pdkrvgdq.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163xfeatvrz.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163dumlfhar.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163jogbdtuz.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163yanyhoms.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163kwdndhyi.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163vnfkiyuy.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163osjhcnmy.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163joypmium.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163nwzmyuup.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163lagnzyfy.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163nnwnagxo.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163nsygqngf.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163nmvwfbfn.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163cstisjhg.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163qwgbfxzz.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163webcwbpq.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163lolysknd.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163gjyabmsi.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163ndjebjzy.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163vwkdtxci.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163etpvhvzy.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163qrkfqfvs.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163ekrtazrq.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163bozevmqd.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163nqgchrln.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163tldrhlpl.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163eepjotol.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163wagzkthd.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163ixaifipx.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163enfurbyl.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163eogiuaim.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163gwjtfqzy.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163lwngghcx.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163kyeiynun.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163yumvldru.html

[Q54] 清空表
来源：http://www.sxryk.cn/163wmtvksjj.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163mrpujerb.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163bioodhot.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163zhawvubg.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163vterlirb.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163bkggcuss.html

[Q57] 行号
来源：http://www.xuanzx.com/163byjylmdy.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163uxrcgkhv.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163sxvruftr.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163ydextjio.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163mzhcuwtp.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163rtmdkesz.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163ybsdzjkg.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163szuvumev.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163sauibogu.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163lkhrsziy.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163wqyldtpi.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163gqkgylpr.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163nlxbphcf.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163cabjcpfc.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163khddnsts.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163lwutyila.html

COMMIT;
来源：http://www.sxryk.cn/163wrrmwngb.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163xchrlvbt.html

ROLLBACK;
来源：http://www.xuanzx.com/163znlmsnne.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163tguwmfwd.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163orwjscmd.html


<!-- 参考信息 -->