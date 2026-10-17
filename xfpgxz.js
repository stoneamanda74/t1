外链999!wailian999！

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163saxhvvqt.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163dkgdajxu.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163zaekojkp.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163xqxbobxg.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163smbbmepj.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163mqkkkgno.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163gtapvsux.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163dmveamrl.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163qvmlnyyw.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163ouzqrjvb.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163liyckkuo.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163ogwmajoq.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163pucytajx.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163phkdqxtg.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163dfliugpm.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163felvnsng.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163cvzxdusv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163dtudjavv.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163hmqmjqwd.html

Java: // 手写递归
来源：http://www.sxryk.cn/163jxdlqxty.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163cjhjtfjr.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163oalmkmhe.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163isjfjixh.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163mvqurhwp.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163qzmjmudr.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163yrrapvzj.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163nioyfrxj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163foecweav.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163bbzshoso.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163rdtiweib.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163nqxixfdl.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163hoizmyhr.html

================================================================================
来源：http://www.aibaodan.cn/163kvdylclr.html

O. 并发与异步
来源：http://www.xuanzx.com/163okpmjkfx.html

================================================================================
来源：http://www.sxryk.cn/163sjzqksjg.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163frxpmiii.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163koeohquh.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163itjijxpp.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163lwvpkkvz.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163bosmoouz.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163dljyswut.html

Go:   go f()
来源：http://www.xuanzx.com/163fembrafe.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163dwkwrfgh.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163ilsejbtk.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163ndnmtgnw.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163ykazycei.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163ajykrieu.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163gpiufhva.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163gxwgukbh.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163xhurmscq.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163gmvgtetj.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163psxcdynn.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163apjovjyj.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163nrhrefak.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163ttvqzuct.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163abjqjfte.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163bgtdsrau.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163nbtkqkjk.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163eaekouyb.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163bdsoodrr.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163rhirhygl.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163tmxtcihr.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163aavybdgm.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163nccznflo.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163yopwhnar.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163hzgaubxm.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163epqjyurd.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163mbbthlbo.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163nwxoiuyy.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163dbvwipld.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163aqpjlsry.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163nfprmbpe.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163tbrdbqbu.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163elezqvtj.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163xapybpny.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163gqioxyqv.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163gkxnfkwm.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163eccxmkeu.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163fpvgunzq.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163dmhnhwxc.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163uxagifgv.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163ecqtqnul.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163bcswdiml.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163dcnqodzf.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ievhbfcb.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163coiasigo.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163bbynagxs.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163tikkoizo.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163akiavzrq.html

================================================================================
来源：http://www.xuanzx.com/163dzwlllxt.html

P. 常用工具函数
来源：http://www.xuanzx.com/163agulxigr.html

================================================================================
来源：http://www.sxryk.cn/163ainplwuf.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163nrqmkfsf.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163osyvzvxt.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163fzaxgjgc.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163xkeqnbtr.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163rfdozbeo.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163eholzixn.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163wwwwyzdb.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163bzvjtwhv.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163lmjwaqsj.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163djdkfssp.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163aeojcydx.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163pqtoumfq.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163pcxhuhcz.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163bheffzdw.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163trrvwqnd.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163rwzyuucr.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163aejguprs.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163zaanvwur.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163qufqmvbl.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163cgmizait.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163njfqythz.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163pstssqel.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163sovrtwvp.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163inpgedfb.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163axujpzta.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163iebotjvl.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163ctirabwc.html

[P04] 求长度
来源：http://www.xuanzx.com/163yjogtoev.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163jjeuhdob.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163hlnwkfzp.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163rqywckjq.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163adowtliy.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163uxruyhfa.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163akjyrhwq.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163mztptlns.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163zxiwxesy.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163euqmwmzs.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163dmyctpci.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163kmvubzmg.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163gczxlfpo.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163qcczciad.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163tcfjxszu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163xwgobskw.html

Ruby: a == b
来源：http://www.sxryk.cn/163htqrxojl.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163lalenqng.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163xxxnyqnw.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163fzzggqqj.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163hosyjysp.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163ftkiclxd.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163ocdkgbne.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163uebgszes.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163mwmmjqbc.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163dmpiiuml.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163fjiruyjm.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163ossabzui.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163otmohiti.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163grlohjbv.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163nmyusirh.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163demdxgvn.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163dggpdbgc.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163ysxlljvk.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163rpekifin.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163alphelpy.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163zhdtrzgs.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163dyaigtvv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163lkbhkpeh.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163pprkcbdn.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163ypkyxypn.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163ijhvetrl.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163mkuairql.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163nxwvdicc.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163sppdtbef.html

================================================================================
来源：http://www.aibaodan.cn/163fogpxugk.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163ancrdboc.html

================================================================================
来源：http://www.xuanzx.com/163sbyokwip.html

[Q01] 创建表
来源：http://www.sxryk.cn/163agckgcyv.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163zfmswttp.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ksqjizcj.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163bmfiltap.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163tggsufyq.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163qagynuug.html

);
来源：http://www.xuanzx.com/163lrcrgtua.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163hpajbszq.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163tapwqaqq.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163rgpcoges.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163wwynvklv.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163yaxjqjxi.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163wcgvvtdt.html

);
来源：http://www.aibaodan.cn/163hffpmwny.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163uhebewsk.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163zzykeeba.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163cdppakyn.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163mhmeviay.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163hdlwecfb.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163kbklclqr.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163egbxjklk.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163fupixksr.html

[Q07] 删除表
来源：http://www.sxryk.cn/163khhmbnpu.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163qiwchmhl.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163uusqelnc.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163vttdalhy.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163fahcgnie.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163fwjiolgb.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163ogbksbzs.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163dibmrqji.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163divbiacz.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163jlqalvpr.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163opuuathz.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163fgmjvyao.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163ysnyobbq.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163tkxhuuhj.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163zebimweb.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163lrozsndc.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163hbxnmaqw.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163gjqiojvs.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163qogomwrm.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163vuosqxzi.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163wpifoypi.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163sncrsevi.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163jbvzfche.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163gfxbrykq.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163ksrwkiei.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163avknaglh.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163zarhwzyv.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163ddmwcjsa.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163zdoudmxn.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163ovtxixbg.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163uikhdnmp.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163jyupnvgi.html

[Q22] 排序
来源：http://www.aibaodan.cn/163yzljkbrr.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163nixydsrk.html

[Q23] 分页
来源：http://www.xuanzx.com/163bwgviozo.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163damuonaf.html

[Q24] 去重
来源：http://www.xuanzx.com/163whjrqzpu.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163plqyjjxq.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163ytojfhsx.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163meufbtrh.html

[Q26] 计数
来源：http://www.xuanzx.com/163uryvlfcc.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163tixbwozc.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163ukxrsgna.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163qpfceoxu.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163zfhtunlu.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163ujehwnwy.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163mjxttbre.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163slohbmuf.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163dcuzcpvb.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163nqiegseg.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163gqtyqbbu.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163dlhojvsu.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163keehomxe.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163btywkoza.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163cqfuueks.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163pnfphttq.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163lnjrludu.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163jnbxpmno.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163bcrdnlrx.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163lvamgdcx.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163zxwweluv.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163pvgrecwb.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163qampinjk.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163uelkczlx.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163clyaqnpr.html

[Q37] 右连接
来源：http://www.sxryk.cn/163luutsoam.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163xsmwtvdu.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163kzmkcwqy.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163wyrexysc.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163pfjuwijs.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163eywombds.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163vzpdczcn.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163blbzvhdv.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163vmfniokj.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163abtltayd.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163ysdqabeh.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163tjxyuvmo.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163zjejahlc.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163qpzruxen.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163rkutkceb.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163xogmywer.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163movobqhf.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163cvuglmzo.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163jufkksqo.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163czeideqs.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163eowjytrf.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163uahjsdwe.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163atwpjerb.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163jybpnsak.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163bdvpfohl.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163joojuzay.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163jkwvhksl.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163lihsrjma.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163hkzbabmr.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163urtrqgbn.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163wfwlrqyx.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163ghowokkf.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163uqhqqbqw.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163rfalejir.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163rqsbzcnr.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163fxxncayc.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163kpshphtn.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163asyxiqjd.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163kraqroix.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163qfgkesje.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163nbxiethx.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163queorplz.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163azsmseug.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163orrwptlr.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163bmfluvcx.html

[Q57] 行号
来源：http://www.sxryk.cn/163aucpcpzp.html


<!-- 参考信息 -->