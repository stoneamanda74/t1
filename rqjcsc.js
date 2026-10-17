外链999!wailian999！

[N09] 栈与队列
来源：http://www.xuanzx.com/163fzhpuphn.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163wswdbdtr.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ydxodaam.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163eiimfqzb.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163yluaevpy.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163fawqjztl.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163zggynmog.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163thnqnruw.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163brwrgxjp.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163bghidanp.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163tuakjdyr.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163kuppwhtb.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163myzocloa.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163fwuqoukd.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163pcvawlyj.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163ivnyffsw.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163jblbxbdr.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163vxpgxvih.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163paqvqiog.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163xinvosxw.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163cnjmhuio.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163fwztmmcn.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163vxepdwft.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163utkybdcy.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163obxenlrc.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163jupssiov.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163huyywwga.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163fetxvycy.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163zqrpxlwh.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163mrobsfke.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163xhonuosg.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163umlaagwe.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163nqeuvdxx.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163xyqkkepa.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163enylmdwu.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163upuadoxh.html

================================================================================
来源：http://www.xuanzx.com/163ahptpzfu.html

O. 并发与异步
来源：http://www.sxryk.cn/163gpfhbfvs.html

================================================================================
来源：http://www.xuanzx.com/163snvcadue.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163lytefhmw.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163mclvtpoe.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163gdvpxqnd.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163xiwslcxn.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163exmorqcz.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163kfplevfo.html

Go:   go f()
来源：http://www.xuanzx.com/163fbqothll.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163caonxwjd.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163ecczmgbr.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163gytgrgus.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163nprauiik.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163etfmkxdj.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163pnmppoxy.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163esdlvuof.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163qilfrfns.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163ltalnfid.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163qgsfnpvz.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163iefibukw.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163hkdhkmuo.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163wliffizx.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163ekecvfmz.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163zkqfxukh.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163vpbgkbui.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163vegazwii.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163fvmunzlk.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163gxehoirq.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163xecermss.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163wjzigiep.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163ssqctekb.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163avglnfzx.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163lwltbeav.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163npnylmyl.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163ailtakfz.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163efucsejw.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163qooydzpx.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163dxahhcqg.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163nxeqkuew.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163xvoxnnlu.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163ielrpumb.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163hzjwsecx.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163mitqavkg.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163rbbzfozi.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163cvtegskw.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163gbdjvzov.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163cfvhayga.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163yraaplly.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163qnnwtvvv.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163wcymgcnd.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163chvcfsxv.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163jhmxovbs.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163cbcnzbrn.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163egukrrmw.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163jyqcqslj.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163muemnzgb.html

================================================================================
来源：http://www.sxryk.cn/163rkspxsub.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163cxsehsji.html

================================================================================
来源：http://www.aibaodan.cn/163xxidhgcv.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163hnhhysuf.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163pzubhnuw.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163btagkeof.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163adqnklii.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ujbbpfwb.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163oomykrlf.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163fewqmrpp.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163xehjazxi.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163qufhohjb.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163prajpdwo.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163wzuedwme.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163ecqwclpg.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163lkmgdftz.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163ktjzkbdy.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163srbczjpb.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163eiieofcj.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163awpvpfux.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163ochmhxeh.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163xrtskrtl.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163nnesuxzl.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163yichesbo.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163manykllp.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163qzclaazn.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163ultbxcvl.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163kurgzkqz.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163qxvlkwsc.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163llezmhcf.html

[P04] 求长度
来源：http://www.sxryk.cn/163mfrefcqz.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163zysrymxr.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163waaaifvt.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163aywqmeeg.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163umnxcnrr.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163wjurvtoc.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163lescueqi.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163hbngimbi.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163yadpxcym.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163mszzqdft.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163fcaeouoj.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163uvnaayyy.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163rvinifpb.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163wmytekpa.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163gqgsvmvd.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163ugiplpeu.html

Ruby: a == b
来源：http://www.sxryk.cn/163soqnpgyz.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163bcdaqwpt.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163yvdcrnen.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163umrzpgvt.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163oakhpyzv.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163eyiesntb.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163xcbkmcor.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163abzpvzvv.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163hnvvfeqw.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163ldnlnzvp.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163gebcwihv.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163uaosifib.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163mdtzqezw.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163ytzfxsop.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163qwjrjhdu.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163gejnymct.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163lgbpxahz.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163ekvsvyms.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163utalzvpv.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163kcjgpdoy.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163vuztgucp.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163snpdkfyl.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163pbsbcyqy.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163mutnibdc.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163afumchwq.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163tdmhjokq.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163dxiujara.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163ukcvpclh.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163yfagtoks.html

================================================================================
来源：http://www.aibaodan.cn/163adzontui.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163zajccmnk.html

================================================================================
来源：http://www.sxryk.cn/163kvpdlqie.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163acujgwhh.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163vqextvcy.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163kvqrqrdh.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163xoammner.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163okjytyvj.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163sxnlrmis.html

);
来源：http://www.sxryk.cn/163pvqsxhbr.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163tevplkqm.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163djogkoox.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163onhjnuyx.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163slxahatb.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163bmqwleaz.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163weincafg.html

);
来源：http://www.sxryk.cn/163hongpomu.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163nhqkaexw.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163eirvszki.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163yemoxclc.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163jsjrlwqc.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163ioregrep.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163vicvpeot.html

[Q06] 删除列
来源：http://www.xuanzx.com/163mhlkkcsk.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163wbbobccc.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163lisjqcav.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163fglxlnfn.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163nvlqanwc.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163oztgbvsc.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163jqbdpcop.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163xsnletcw.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163htbnelja.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163jbvykymt.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163ibeyjwri.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163hiqfyawv.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163ffzhsefw.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163ajyukabh.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163bqrzglna.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163kwenxtst.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163lesoaxjp.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163oparonrb.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163lympslzd.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163mckzxyng.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163ohwckjuk.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163hsjynmmd.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163eeyulrxx.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163lqaacdwd.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163jvvhvsol.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163vkjzjkkv.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163wxqfjgfn.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163ugjjljmb.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163rlonrmll.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163cothdbrh.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163sdxxljou.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163yvfqdrlb.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163rcdifrjs.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163ryatulem.html

[Q22] 排序
来源：http://www.aibaodan.cn/163fhrusbfp.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163pbtukonr.html

[Q23] 分页
来源：http://www.aibaodan.cn/163twljrtpk.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163khajupbp.html

[Q24] 去重
来源：http://www.aibaodan.cn/163nxfmsvav.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163mxzmtpzq.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163etfblrvy.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163wycuuspo.html

[Q26] 计数
来源：http://www.sxryk.cn/163dbjbnxfy.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163drlhtpcj.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163zjgzkkka.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163zewohnxb.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163kavzzzcu.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163imhmvrgp.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163ddncrotv.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163tltwnbdx.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163gxsslars.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ilswanev.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163rrgwugys.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163brbijqfa.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163syidxdvz.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163qycexjij.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163pndzjtru.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163ysgjfopc.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163ynzdupjy.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163fmztmlkg.html

SELECT * FROM (
来源：http://www.xuanzx.com/163ohieotnf.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163pttcyqhh.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163yxzvfrwx.html

[Q35] 内连接
来源：http://www.sxryk.cn/163mfobazsv.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163erimocop.html

[Q36] 左连接
来源：http://www.sxryk.cn/163ngbwqjlr.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163hwomdxge.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163wifaofml.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163zroiejag.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163hjydgsea.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163tctoqmua.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163pknakmiq.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163eftyplky.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163wdjounqm.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163uyyifhtp.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163unxetpwv.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163orrcsdku.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163ytouegws.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163mcxtrzhh.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163ophiqupl.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163rnoogkqn.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163fxxrwvwp.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163mlrgbovz.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163qmqsuekp.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163jxoktzxb.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163uocbihuu.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163ttxfrhwn.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163lzrjkttc.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163lunkobmw.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163gxdeirxl.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163clbsapwn.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163flawegdy.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163xajizoxg.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163kkojabeo.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163udolaxlq.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163zteqvnhv.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163xvfwwvxh.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163ebisjwav.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163butbfdjw.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163sqzvhhhg.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163mvsrjarc.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163ewaypwhd.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163krdullob.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163koultwkx.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163gpoitxuv.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163zjgnwegd.html

[Q54] 清空表
来源：http://www.xuanzx.com/163hsjfaomj.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163xnigvrix.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163umlyiiot.html


<!-- 参考信息 -->