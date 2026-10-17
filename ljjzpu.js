外链999!wailian999！

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163doomfxea.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163zwksnviu.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163zyjuambo.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163ycktzyfz.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163rhfrioyg.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163xukzzwmw.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163zgisydux.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163xchgsofw.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163zlwuwmdh.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163kvslqhrf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ufemsoow.html

Java: // 手写递归
来源：http://www.xuanzx.com/163fdfvchie.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163evphbwao.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163gsfjfqgc.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163jnxrdxmw.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163bhhgoabd.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163ukotpmml.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163omlothgv.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163pgjytkfr.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163rzdelfmn.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163rtpsculv.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163zqlbskie.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163hmwptrpj.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163qdplkcgk.html

================================================================================
来源：http://www.aibaodan.cn/163oqezondk.html

O. 并发与异步
来源：http://www.aibaodan.cn/163qgryddty.html

================================================================================
来源：http://www.sxryk.cn/163nrqyzfcy.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163kqzqhbus.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163honthani.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163tixvvrgh.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163qdcutpbv.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163qlrtjucj.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163xvyzuvov.html

Go:   go f()
来源：http://www.aibaodan.cn/163xhfxekvu.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163wlrgyznn.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163giipdsho.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163gxghgzcf.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163qoecdnsa.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163huqwkyoz.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163eclgwxxj.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163atpdqfwb.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163rneuycla.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163ajvxpkld.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163nohyqrki.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163cmqwrlrv.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163xsfchcqs.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163ffkpxbui.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163wqfqkkuo.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163qayozokt.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163vlbyfjhn.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163lxrsimmk.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163avugfmwb.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163ofaxjycq.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163kbdbuxql.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163lulidxwt.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163snuwxqiu.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163maevrjye.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163dsvwnvna.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163tvpgfkqt.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163tdyeacua.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163eyuylvcq.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163aoiwoerl.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163juwixarv.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163nmyrulbs.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163qccetaav.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163kodwsaqe.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163kugbxbix.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163nuqmvrpq.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163ijojqcne.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163brxbrzts.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163rwqbkkmo.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163kzcfxrmk.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163rvfrmcgz.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163fonndcik.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163jortdubp.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163vqaboxkd.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163kwmfgmob.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163xenirfph.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163rsscgzlg.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163dbdmtnqx.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163uccyrhmx.html

================================================================================
来源：http://www.aibaodan.cn/163tihtvyeb.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163bncjmijs.html

================================================================================
来源：http://www.sxryk.cn/163fnxtduye.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163rbsixgbq.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163grkgcnwf.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163rrykdhdz.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ewjbozde.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163gqgerurx.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163jyeaqink.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163gdutllgr.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163wvgpstdr.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163ingqgnmx.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163eptvyjzt.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163ssxuhzag.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163icmmwlge.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163hqiqxzgn.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163zdzivvfz.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163avwbvujh.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163fgtgzedz.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163uswvbzhw.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163xfzstkgf.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163jmhukeeg.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163uzpeyrcw.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163ftruwvil.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ltzdvemq.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ortsxmud.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163mhckkrjp.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163kgdvbmeg.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163zayxphoi.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163dpuebnvd.html

[P04] 求长度
来源：http://www.aibaodan.cn/163zrawpqru.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163apbvdjqe.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163vyzwijmo.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163udabosuh.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ywamjslb.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163rqjoswmz.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163yujvdtmr.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163eqkoeonm.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163keufoywg.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163bvoogjrt.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163mcaegnyn.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163jhqgeppz.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163koewuaxf.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163kmlxalnx.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163anwxvaec.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163hqtzgsvh.html

Ruby: a == b
来源：http://www.aibaodan.cn/163imqnomba.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163dbnqqibw.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163uhlqdcwo.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163pcrphckk.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163xahuraud.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163zvfrwxpi.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163nxmbvpjg.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163botncmhw.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163miliqtps.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163wbvemqzo.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163qpyrttqa.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163yrlzsbdr.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163qmjbmgxl.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163xqpluxiq.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163wqvzfiej.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163rqzowitd.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163mpqlfzhs.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163heirpykd.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163wehszmgb.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163lbjnrair.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163jjnarrmj.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163zbllbfxm.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163yocfvngi.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163bgwuvhln.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163baoauloi.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163gsbsoajv.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163jasvthid.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163jmvcndnc.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163omtnoyar.html

================================================================================
来源：http://www.aibaodan.cn/163clalhfnh.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163nggnqrci.html

================================================================================
来源：http://www.sxryk.cn/163hrcwfeou.html

[Q01] 创建表
来源：http://www.sxryk.cn/163umqlnnyg.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163nvstfdil.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163frngvlyo.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163pxothqxm.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163mipajfkp.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163yjdqfuwg.html

);
来源：http://www.aibaodan.cn/163jdlxxqdv.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163dskcrxwi.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163zgszpwjg.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163uzvsmooz.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163stswxyal.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163oxfinqle.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163oazefacb.html

);
来源：http://www.aibaodan.cn/163ieziyavo.html

[Q03] 增加列
来源：http://www.sxryk.cn/163ugtbpzmj.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163vhmcvabg.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163cdcwxqzw.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163sqnofouz.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163yvtbowxi.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163ytwfdgnb.html

[Q06] 删除列
来源：http://www.xuanzx.com/163nnaprzyl.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163obkurekr.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163sqaxbulq.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163wqsyaltg.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163qcvzpdyg.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163fftfrwrh.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163agdkrxbm.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163wahkbkil.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163pwcahoqk.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163xwuwwtav.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163vfyvobxy.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163vgipjayc.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163ncbunwpl.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163ccvlhxps.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163pzsktber.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163mptjqqpt.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163weinzvql.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163uxqqnrpm.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163fcauhhxl.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163rsdlhazp.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163vycpeoko.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163wlgatuob.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163hsmngnvg.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163libzspvs.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163kpqflsiv.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163ftofgves.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163slyxeoba.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163lbdlbbpr.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163kbuvcmwd.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163qgtiazpf.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163drqlbkbr.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163kvsxxpjg.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163opmawdfv.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163inpiybhz.html

[Q22] 排序
来源：http://www.aibaodan.cn/163jqgewpfo.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163xwlevkwd.html

[Q23] 分页
来源：http://www.xuanzx.com/163ajviomcr.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163nahhmpax.html

[Q24] 去重
来源：http://www.xuanzx.com/163ifnporxd.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163geqcsptg.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163jbnombnr.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163iqqkpnra.html

[Q26] 计数
来源：http://www.aibaodan.cn/163kmnxhvfs.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163rnbvngdk.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163tlgsaxhh.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163qbxjnevd.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163jtvagmtp.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163yriommiz.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163hwfshpyr.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163hbhoamjf.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163wcqgrzba.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163irpzfukk.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163dvekylil.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163ywgmhsoq.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163pcsulcuf.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163xionzugr.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163wtydnchr.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163stzbdugs.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163lcmyoedx.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163klotbysz.html

SELECT * FROM (
来源：http://www.sxryk.cn/163eetvtoax.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163awshrvcn.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163ugqhkdvz.html

[Q35] 内连接
来源：http://www.xuanzx.com/163ryqcsvyg.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163xyvnwjjk.html

[Q36] 左连接
来源：http://www.sxryk.cn/163fcfnffpj.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163uytczyat.html

[Q37] 右连接
来源：http://www.sxryk.cn/163zdxmuzyz.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163nxloczmq.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163btnivlyy.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163qkrdnqri.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163rkwhaxob.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163wzauaisw.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163lxxdrctl.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163moayubpb.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163ezybwizd.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163fircnhce.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163hirltjgb.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163gyknxdui.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163bmdhznwd.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163gybhmbho.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163bvvatvok.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163rbupfdew.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163gvxawbyi.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163kvclraor.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163upsepvrx.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163izuvcywd.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163balamdmv.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163tuppbjym.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163dplbgzmn.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163msbilmgy.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163puhtuwwr.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163qifwaveo.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163urnjuglp.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163tjcbkyrl.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163fhmgzbew.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163uhuvawpa.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163jlvabkzq.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163hfhsmcpn.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163fnnylrma.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163tgownoey.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163gqpbciae.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163loduvoqc.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163bskyffgm.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163xesgkewb.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163nyqjgmbq.html

[Q54] 清空表
来源：http://www.sxryk.cn/163ewvwqjmm.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163rukakjkk.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163gqxyhuje.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163qmfdvbct.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163numqurel.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163lzwmbwuo.html

[Q57] 行号
来源：http://www.aibaodan.cn/163qatyxnwg.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163lafzpccz.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163lqvvapuo.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163eduazuox.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163ttfcvett.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163dasxefrh.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163vvltnlbq.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163tunwkhph.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163gancernp.html


<!-- 参考信息 -->