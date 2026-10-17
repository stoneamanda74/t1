外链999!wailian999！

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163zbkxluvq.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163jqhblkwb.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163midgmvlv.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163yfpxvvqa.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163owyzzcgd.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163eetttqyl.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163yseebjzu.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163kayuwgcx.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163cvdkpfhc.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163tpucyypy.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163zhwyoffp.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163bmruxatd.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163odpeoske.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163mzzilrds.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163bigkniss.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163lksahmni.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163iblwjdju.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163gdwcrrsi.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163qbrxnkmk.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163eklhrywx.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163tfpvhsqd.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163obomwotk.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163yduekokx.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163exieegzr.html

================================================================================
来源：http://www.aibaodan.cn/163akmhqtvd.html

O. 并发与异步
来源：http://www.aibaodan.cn/163amcfciym.html

================================================================================
来源：http://www.sxryk.cn/163hmyxmoxn.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163goubyttg.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163myfhewhy.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163glfrrhfx.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163vgtcjeyb.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163pkyltpzc.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163nxcijmoj.html

Go:   go f()
来源：http://www.aibaodan.cn/163emhfocts.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163bykepizb.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163keauwexx.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163mzdjnrro.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163agzdhaee.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163crjcpqek.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163asskhcyo.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163fgxlrlch.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163nbmpusag.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163pbyygvim.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163jzytyyqm.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163yazkexqb.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163okcfrbyu.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163svsnhqjj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163mszahher.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163onypushq.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163czbolhec.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163umhdvdqi.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163bzfonczh.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163dcfiyxxj.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163whdhahtd.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163gpxitsmr.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163fgwebpku.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163jkooputb.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163pmvmkwlx.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163gyfwatgf.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163gfubgylt.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163mcolytkw.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163smvuasek.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163iqabqfxi.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163lglzatgv.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163kxxgfgwf.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163qzfpyinf.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163awenhjsp.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163qrvsnklw.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163yijffdgy.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163mkguxryd.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163rmjonaiw.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163ecpxkomz.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163cckmrbit.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163wzcvbzdn.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163qvvlzojm.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ptruxglq.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ofqvdzag.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163wlknyvti.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163uvauffqk.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163vgjyvhkr.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163zfajshat.html

================================================================================
来源：http://www.aibaodan.cn/163pprbpsnr.html

P. 常用工具函数
来源：http://www.xuanzx.com/163luadteit.html

================================================================================
来源：http://www.sxryk.cn/163lbfznlhn.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163qakrebwf.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163psauxbtn.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163sbekzzyb.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163logpzzpl.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163qvnedjru.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163fswbzqjz.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163gjiprnfr.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163fkircyul.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163zggjpzdj.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163dfejbjnz.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163tgooijkc.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163rybdobpc.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163psjioqpd.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163dasuszaq.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163rldhwqvh.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163zsvteoga.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163yqyzllvu.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163aejubtjx.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163dkclyhsk.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163kcwejagw.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163xnunnjsf.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163tnwgozug.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163nkbekxho.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163pikhcfmq.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163xtofagmp.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163bkmaleeh.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163jdvtbcjs.html

[P04] 求长度
来源：http://www.xuanzx.com/163cugtbqla.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163ighfvuxh.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ygcafmbc.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163pfnczwez.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163vueosfqp.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163ikxzelde.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163vamzelmv.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163kbxyjpwb.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163lkgabqtv.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163xqokqwir.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163jxkuzfkf.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163oqntzyjy.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163lowtdthh.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163kbrfwwaf.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163gckzkfrn.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163ipmdcfhj.html

Ruby: a == b
来源：http://www.aibaodan.cn/163mprpcvro.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163xiyqhqvi.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163wgoaqont.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163fgxqkeff.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163ubvulnhr.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163arekkhzj.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163ayvczidb.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163osszndfv.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163xsgyjzew.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163mdcwmwtt.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163jgbizxvj.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163adqesvgc.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163qmuiotoq.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163lekzsojj.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163wtqnqdrp.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ljlthzxk.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163iqwppacr.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163lhphzols.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163cmctsxcf.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163vbwxxybz.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163mkeibgpt.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163jtzhlxui.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163rlzdhbdv.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163tosyuhpr.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163gtntbupb.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163pmijfhjs.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163jvzotqwo.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163wcmkmqeq.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163wxucosux.html

================================================================================
来源：http://www.xuanzx.com/163qwmafsnh.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163tohuxalv.html

================================================================================
来源：http://www.aibaodan.cn/163dllcpthr.html

[Q01] 创建表
来源：http://www.xuanzx.com/163dsfxevwl.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163uedpcykg.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163yqgbhknj.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163wnesvazi.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163zhwkwcgh.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163atdbljze.html

);
来源：http://www.aibaodan.cn/163lckcixwf.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163yammtjmk.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163jrhhuoly.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163vubgamcj.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163ejaxcxpi.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163uuzvqkge.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163gtpadkvt.html

);
来源：http://www.sxryk.cn/163kkgbwtaa.html

[Q03] 增加列
来源：http://www.xuanzx.com/163mmnvuimm.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163bwoqijpi.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163xytspvag.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163amobsrkc.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163xkcoawqx.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163zjlnualz.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163mehxmlny.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163qwwlvtps.html

[Q07] 删除表
来源：http://www.sxryk.cn/163nlirkvqo.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163pehbzpfu.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163qfgyvqvl.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163fkytzoku.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163zabmxigg.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163ssbeemad.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163atnsgvrc.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163vvguvtbi.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163rvsdvvjr.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163tpqrleri.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163itjhotzw.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163znykewnt.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163fvvnaamd.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163hyosytqq.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163mcxmrjbf.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163qvzplweh.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163pnctlukp.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163peesxjqq.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163twzpqmeg.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163ehgnilkm.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163voqsmgov.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163rcbeggap.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163igitktvt.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163skwtbabs.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163eknfgvuz.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163hyosjbck.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163fihzwrfy.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163hfrwsvpr.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163vyjsumwz.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163nhsvcpjf.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163pvahayre.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163hikfncmc.html

[Q22] 排序
来源：http://www.sxryk.cn/163tpkzjazg.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163inonauyr.html

[Q23] 分页
来源：http://www.aibaodan.cn/163yagccqme.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163eeexbklg.html

[Q24] 去重
来源：http://www.aibaodan.cn/163vscovksd.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163eofhakda.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163kiaqsfld.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163tuazdlfl.html

[Q26] 计数
来源：http://www.xuanzx.com/163uhsfsimw.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163msnhexgg.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163lpirbylu.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163xlyxlejh.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163ilgolnjs.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163mqvsrcpi.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163dcesmqgw.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163qxfobjay.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163ikhchfqg.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ipphhiwd.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163doxsrcxa.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163bueniiev.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163cdqdrrpl.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163quxgbrll.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163czyehxmg.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163rnhopbkj.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163sazvnsqs.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163ftftsjbh.html

SELECT * FROM (
来源：http://www.sxryk.cn/163mtzhopjy.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163flsepyvg.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163wzhpknpw.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163ggqlvwfi.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163yuvyrhvx.html

[Q36] 左连接
来源：http://www.xuanzx.com/163tvcdojtu.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163nachvtsx.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163kfmcqtyf.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163dhmvwhyz.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163ekfofnyk.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163ziplrtdk.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163agafwekd.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163yzltzcfa.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163uyagvdws.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163oyvoofjc.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163adqqeflc.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163tqyuouav.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163chjurtta.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163jbiqwaqf.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163zmxxufxf.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163uslqpqnv.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163vwhkeelh.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163qqwgiedu.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163atjntmfp.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163uzzrkind.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163nznteedj.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163vvvinmtf.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163yauezgiq.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ijpktmyu.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163ogliyesf.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163cuadgrrg.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163itdafoab.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163kokdegyt.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163ftahzjvb.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163seczboip.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163ebxixwuf.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163szycapog.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163chlkeont.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163zbndjots.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163ixwykcvk.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163kdznarmr.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163vuolascy.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163hejrvnah.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163azcrjgwg.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163daehixka.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163yrfowlqg.html

[Q54] 清空表
来源：http://www.sxryk.cn/163edluqvpz.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163grbdbayu.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163pwgtrbwh.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163zhpkvonx.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163eibwexqg.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163vavajjsz.html

[Q57] 行号
来源：http://www.aibaodan.cn/163vyfbqmbi.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163eenzcwjl.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163twvprnxq.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163osyeyvnw.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163ueyrnxws.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163plcodtbg.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163kjjjaygr.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163vdxrqack.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163ajjvgwlo.html


<!-- 参考信息 -->