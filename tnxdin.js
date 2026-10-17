外链999!wailian999！

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163rjuodjut.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163eqzaetbk.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163hiafpziq.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163tdxggtgn.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163cpldzjbh.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163xyojurlc.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163ggijgyau.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163qxvouqtl.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163ocbmhyoe.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163lrluteij.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163dwxyadxn.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163dbjhkmfm.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163ykyhgsaw.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163yyijzlhs.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163qolalhed.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163zncdvhdx.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163wxwudxmy.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163zaijmert.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163hudmusjz.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163gvoxyehe.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163ejtxpmtn.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163vocguvoe.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163lqylwnpl.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163zpbbbqpd.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163riwrvyjh.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163mmmtayeb.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163vxxnpwtt.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163uicpfezc.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163nqcnlffm.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163mynzqxae.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163jsntylft.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163uqisaygq.html

================================================================================
来源：http://www.sxryk.cn/163drzqxbzn.html

O. 并发与异步
来源：http://www.sxryk.cn/163bkjqnwim.html

================================================================================
来源：http://www.sxryk.cn/163pyemsijp.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163fshusnfy.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163xwdutmlg.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163sdgpzbjy.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163hjloofod.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163vdkranhl.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163hwrtbfru.html

Go:   go f()
来源：http://www.aibaodan.cn/163tzlnjibg.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163ueokhwvi.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163towjupsa.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163bffswkdn.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163uqgrcdbr.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163pltkpryw.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163nsuyyent.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163eaizqqhs.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163bxjkrfod.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163hyqbbhef.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163myxnjaiy.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163quqyjdoh.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163nxdctvsz.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163joeqavqb.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163ecuattcd.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163bfnzhwwl.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163mtoyxhbl.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163hglozzrt.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163qyzkmvkb.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163tmaioiov.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163qgmbauca.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163rqwxvrcl.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163okbsmebf.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163eulcffas.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163nxinjriy.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163suhtwmtk.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163ynkrfolj.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163hoarfamh.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163fqwvvsll.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163bldmqpdt.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163loszzhsh.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163lizaipci.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163txiipjfj.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163rtjwyexb.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163sqekqiaa.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163vvuangfw.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163yhdkmhhp.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163mqqqmedk.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163agiugubv.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163eprrlhqx.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163tnqsrlbf.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163wzykzvkr.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163joqymxqq.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163yholiqrw.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163volouuay.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163erofzhpq.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163ggtemyhs.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163yqivesbf.html

================================================================================
来源：http://www.xuanzx.com/163nztqrmeb.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163zcxutucr.html

================================================================================
来源：http://www.sxryk.cn/163ihaznugb.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163rqmqdfgt.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163oqcrleqb.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163xhnqyfop.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163womutaku.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ocglbire.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163gybthzyt.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163gwhoomza.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163faqtoehu.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163dpoqkniw.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163mdyrcvta.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163rpcsxruc.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163kqiiflhw.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163iwcutbwx.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163kebgakrd.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163kvjexrcf.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163yytibcbt.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163lgxybzur.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163kxzgwhyb.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163axiubeqc.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163zohkvbkt.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163hcbbsfeh.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163xuscufbp.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163xfqwarcw.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163juaeztci.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163qbabqdda.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163zgfpgitx.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163jupqjzcn.html

[P04] 求长度
来源：http://www.xuanzx.com/163xstmytuo.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163qmxfnqbd.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163jhjvqwhk.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163bbsqrxek.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163rmlitttf.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163tglwrmol.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163szajrqjp.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163dfawaqye.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163xagpsbly.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163eyvovzge.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163yerlwldx.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163fkjfrsqq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163hfuabqgj.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163gcrujhls.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163rmvtuqux.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163ggagtofq.html

Ruby: a == b
来源：http://www.sxryk.cn/163nkbtivnl.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163awuygtba.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163toaawpkz.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163jxeokluj.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163egiwrbcr.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163mbbzbaee.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163gyrxcwqo.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163unhmzizk.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163eavbmhox.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163lqsshcqf.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163ulsfmeub.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163nnceiron.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163gmnfelue.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163xcuifzti.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163wukdnvct.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163fqqgndcc.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163wbmcehrm.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163fobzcass.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163rzwqrowd.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163dqxmjgny.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163zxoizdkp.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163jxzocpqy.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163nszvaast.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163rnfcshef.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163vdelxrxu.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163kxisauvg.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163omzyztti.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163cgnrpkvg.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163wbhsijmp.html

================================================================================
来源：http://www.aibaodan.cn/163lioxkfel.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163ffmyromz.html

================================================================================
来源：http://www.xuanzx.com/163ncmsujjf.html

[Q01] 创建表
来源：http://www.xuanzx.com/163oxbjefgy.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163ehkzotwy.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163wbdvzekb.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163jqcqqvbs.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163gwqeduww.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163vwwvjpto.html

);
来源：http://www.aibaodan.cn/163ghxivkoz.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163htdukrgm.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163wykfjxvo.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163fockhxum.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163bhdjtlle.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163qpoqisym.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163newffpqe.html

);
来源：http://www.aibaodan.cn/163tczrdjgu.html

[Q03] 增加列
来源：http://www.xuanzx.com/163wodfziam.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163xprpegcj.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163rppuurvu.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163twqvomdc.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163jtpxkjel.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163zqbznowq.html

[Q06] 删除列
来源：http://www.xuanzx.com/163aasmnwkk.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163bsdsrysd.html

[Q07] 删除表
来源：http://www.xuanzx.com/163imbtzhlb.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163tpgbzkxa.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163xkkfsxgc.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163bcetdhcu.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163eqqjqitl.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163evtheign.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163xtopfwmh.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163lwdbtvpn.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163njewsdjl.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163pcfckiaj.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163artshudb.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163jbncjkbw.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163degrqpdq.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ilimzwfw.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163rlzgntpw.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163xljijlcq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163phhkmcmc.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163hkdupefb.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163zquryypt.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163uegzvqwg.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163wcvcdmxt.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163rrddzqkm.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163llkctjqc.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163jovgkgaw.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163gezwzcze.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163gwpbxwzx.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163czynndad.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163wzqqcoph.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163wpkjtkqe.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163cbhwnhho.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163zwxcgzpv.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163egdsjvhr.html

[Q22] 排序
来源：http://www.sxryk.cn/163qrbbskfz.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163sryxcqru.html

[Q23] 分页
来源：http://www.xuanzx.com/163ikxgfskr.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163pwheavft.html

[Q24] 去重
来源：http://www.aibaodan.cn/163xhtcllof.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163skwagbql.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163gaxtqllr.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163pzpukttq.html

[Q26] 计数
来源：http://www.sxryk.cn/163autoffeq.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163lqydrjwj.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163dtrlnyug.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163fknoslia.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163ssnkvwdt.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163atnlfvmb.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163qjwkglpq.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163kahuibzo.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163jhcqzvai.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163gtwfhcne.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163kbxznvnc.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163scyxgoom.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163owhkykii.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163wtyprlnc.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163xzsezron.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163omuvreap.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163dwzvwjhd.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163tfkrnqbd.html

SELECT * FROM (
来源：http://www.sxryk.cn/163hfgtoeda.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163wssfdwpt.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163ljsxyfwk.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163ljfzemdd.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163fscfbcxx.html

[Q36] 左连接
来源：http://www.xuanzx.com/163ycdncyfn.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ptzaxpcr.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163fogjxeol.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163wqdfjwvy.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163ftninyfx.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163rgvnnloz.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163ryqbfsat.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163ejymaqok.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163azgimoyg.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163qvxoogos.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163muktbeeu.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163kruwflqg.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163jgecknoy.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163wiqvvpjk.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163xfbjoadz.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163oxnufyly.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163iytisvxq.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163vszvuoko.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163vrkwkmuf.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163nmezoqfr.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163wsvhginc.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163qygxlrho.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163gkwdndus.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163jtjhfqwx.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163wgtzmzda.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163zbculrqz.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163mkvushoq.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163xwsnxrri.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163esumojpp.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163cpolwdgz.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163ojgsdsvl.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163rwbyrhro.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163oqzarfda.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163iyqkmhqh.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163zugcnfac.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163mzyqpgpx.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163usverwoh.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163ccqjnxjj.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163wdxuotha.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163uzymxkld.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163uaiwqfca.html

[Q54] 清空表
来源：http://www.sxryk.cn/163cfswjczd.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163vauhrplk.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163auhrtqzd.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163zkowkxab.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163fypjkkmb.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163rbystdpv.html

[Q57] 行号
来源：http://www.xuanzx.com/163kesugsqy.html


<!-- 参考信息 -->