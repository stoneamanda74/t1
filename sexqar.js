外链999!wailian999！

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163cfoksmap.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163jsjcqlnh.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163gygbskou.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163etrmxxwj.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163klsklspw.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ojpuixaw.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163xbtsvjia.html

Java: // 手写递归
来源：http://www.xuanzx.com/163fsldxwmi.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163dvwvakit.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163ftyjwlda.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163rscjpuho.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163hfvznqxz.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163bwbvuhak.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163vkyfbthk.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163qwkljucj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163yzkfcopk.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163efgiemte.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163krcsixyg.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163sliuaavh.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163jzhdajxi.html

================================================================================
来源：http://www.sxryk.cn/163ydvyfweu.html

O. 并发与异步
来源：http://www.sxryk.cn/163amnzdjae.html

================================================================================
来源：http://www.xuanzx.com/163afwzgxsx.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163cnwxzbdy.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163gxuxakyr.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163kckydqks.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163sxggltho.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163nampsqru.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163nhvoshdr.html

Go:   go f()
来源：http://www.aibaodan.cn/163yudybzev.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163didbnziz.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163agxkhljv.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163xvpekusc.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163aqkkduhe.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163mxlsvcxr.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ixahlegt.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ihexynbl.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163hstinksr.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163soiailqp.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163haiuwawr.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163qtrjaesl.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163nojxehna.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163unkxular.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163bvcrapzc.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163dbtkknsq.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163fssheofh.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163kyhsdyoi.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163qhsncnxg.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163jsaunfyh.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163nldwnhma.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163akedapvz.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163ailfeqyj.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163ddjeukll.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163mwveyoyk.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163geeusfnj.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163lxcuqtiu.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163ikarrgei.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163joktiwqa.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163dgcacced.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163nhcpqlao.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163bakwsoax.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163yxflpppr.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163zigrwmmn.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163caeacalk.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163aiupkquu.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163htyqtcte.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163gqkrfugg.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163aljvmxlc.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163ciguteew.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163rtfcpsbh.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163hkctpiqs.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163bkrelisk.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ddbpwfco.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163gdvvgwiz.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163yrhsuszi.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163mtzurmjm.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163fmahtsqj.html

================================================================================
来源：http://www.xuanzx.com/163gptadghw.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163urblghgk.html

================================================================================
来源：http://www.sxryk.cn/163kdnvyjqa.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163xmqvyfwm.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163nulddnrt.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163bzbkwpnr.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163uzmytgek.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163mlmtbawi.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163xagxemun.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163robxyyel.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163sekktfeh.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163icbixkqq.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163snqwrdkg.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163qcfdrlci.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163qmhunkzl.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163uspcvxhi.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163cbltmmuh.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163grjnpjnp.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163lvnfrxgz.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163uaufydik.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163hqsmexkk.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163lhzuqsce.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163ymabhihu.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163bctczpzc.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163zxduguiw.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163zofhgvmh.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163zoqhjhlb.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163asinprnd.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163zmiwtueq.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163ldnwbyuz.html

[P04] 求长度
来源：http://www.xuanzx.com/163ctelssey.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163xpjwzwzb.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163cdgigmpn.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ecrqcvlp.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ffbecbig.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163pankkivj.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163mmttpazn.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163wvnhdbhx.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163shyzgjmd.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163dgpydewj.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163tzxinumc.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163bnhrkbco.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163xagdcemw.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163kefbqulu.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163rqymfktg.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163nzmukpge.html

Ruby: a == b
来源：http://www.xuanzx.com/163pylovxpo.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163zvhmywno.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163rzdphbua.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163jfsqllio.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163eavykrhl.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163hvuibnhi.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163nanjdeyx.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163wreawdzx.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163hikfnjlu.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163qwcvvqvp.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163lfnfubgr.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163ycwuktgs.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163nyasfpud.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163kblusljg.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163lxepbajw.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163nkynuuco.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163ivixpyxc.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163fvqshcjw.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163tpayngmr.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163bhyqedzy.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163zqsjxlnf.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163dfsyskrq.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163hnqmxzxj.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163jgoeqers.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163fntrzseb.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163foidjqkm.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163pqoqhztv.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163qgwthnxf.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163tlxehywj.html

================================================================================
来源：http://www.aibaodan.cn/163oxhgwvct.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163otrhebnj.html

================================================================================
来源：http://www.sxryk.cn/163cgcstuev.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163zcqextgk.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163vxmusbll.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163bmpzxdur.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163xxzsoshu.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163raouwbyg.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163xutujdba.html

);
来源：http://www.sxryk.cn/163eelmhmgt.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163eakehfgr.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163yspjvalo.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163dyeucgas.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163zszwzoba.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163mmixyfbp.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163ndftcrdm.html

);
来源：http://www.aibaodan.cn/163wxshlyuv.html

[Q03] 增加列
来源：http://www.sxryk.cn/163iadpqiln.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163vlqirzzm.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163qflozczl.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163lddrufdz.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163qhbhffsf.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163lakmiojf.html

[Q06] 删除列
来源：http://www.xuanzx.com/163jhjfxuwt.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163gbkjzcwq.html

[Q07] 删除表
来源：http://www.xuanzx.com/163vrprebci.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163qgbrshnj.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163nhrlpbsr.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163tzuvzqoi.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163ayhfkulq.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163yuipvpxc.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163hytmzjnw.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163vdzpgpum.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163jporkjde.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163azspzsfl.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163bxjgyptx.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163dipuocxm.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163unymshkt.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ndrxungz.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163uvxxujgm.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163wvvjnifo.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163okhkptve.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163orrkmnbl.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163jksbdjzn.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163obocqplr.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163kshuague.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163nchjnngy.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163javgxdsj.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163ubsjexcu.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163kndqfhrs.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163ifjyucjf.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163iuzlitfq.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163ikitrukg.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163iftsmjpz.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163zudwrqku.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163fbxhjvqh.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163crekelhg.html

[Q22] 排序
来源：http://www.sxryk.cn/163oahmytit.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163rbmvssnb.html

[Q23] 分页
来源：http://www.aibaodan.cn/163kdkhfijt.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163ymgjemfz.html

[Q24] 去重
来源：http://www.sxryk.cn/163vcnliuyb.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163bssyvzmi.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163fikuuvwm.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163dxocozjh.html

[Q26] 计数
来源：http://www.aibaodan.cn/163vpewxpzv.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163xppawsif.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163wgbdtmzi.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163ogwassij.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163eyugoaag.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163eetkdgnx.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163jqosnklk.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163ovbxajll.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163jmmxlmoj.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ragkctwd.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163jujtqwbn.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163zliltloi.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163oegjtada.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163dqnzwsvm.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163amvqzvzb.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163xgcepluu.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163ecvtuvbo.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163ktvnijns.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163rznallwz.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163vbpudbkf.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163mnpgefwr.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163jxnrysdo.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163kcluxryv.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163apbggsed.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163wwhgiaag.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163etwhyzzk.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163hhyyperb.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163anpzlusj.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163ofzdaqag.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163hjcjkaax.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163pozmmzmh.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163qnkxfkyx.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163pybbvwfj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163bcmofzdj.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163smndxxor.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163ibyuhlaz.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163sghiospi.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163ylplqkal.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163oqvhiwoj.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163bcyflaby.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163rkjhjjaf.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163fabdxwyo.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163shkauimw.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163unmgogfg.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163snfxhfxc.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163optrcnro.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ohqastya.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163xnvydqmg.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ufhadmwr.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163twmuheje.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163tomxipfr.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163imhymvul.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163kfvcnlce.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163szesjqdx.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163uuxizrtp.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163qymjgphk.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163xyxwyhfb.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163rryxjnjy.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163ccuumguk.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163eahwqvoj.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163aqfoghsv.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163llbdhtlf.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163qgqguclm.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163vlqgpwnr.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163godyxvys.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163ubsrhqil.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163rntcipch.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163vmwpprwk.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163awgqsant.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163jxzhaoke.html

[Q57] 行号
来源：http://www.xuanzx.com/163loidqscw.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163fmaufukc.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163pluwcsxn.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163votjtukw.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163dhreeqza.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163skjzmmnk.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163kfntpztn.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163pxkoflfw.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163jbgkselx.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163yqrqhdfm.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163pdiklsok.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163noosqokj.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163jcivohyy.html


<!-- 参考信息 -->