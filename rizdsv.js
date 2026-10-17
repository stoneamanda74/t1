外链999!wailian999！

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163whtelnlr.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163flzfzprg.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163liqabwrz.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163tmzeclex.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163xkdyiyfh.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163hcbpeijb.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163lnkgdbrs.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163dnipmcxb.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163pnzgmdez.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163qiukbiuy.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163joraygob.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163ynccnomp.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163ocgdrgba.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163aapvljlg.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163umxpdbpr.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163wevwbnbk.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163sdjfzioi.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163nmaoblpq.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163xhcuheyf.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163hwjzguuu.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163vkurmcgi.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163vvaoukeg.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163tkmyhqun.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163spxxllun.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163seuftqqn.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163wxqeuyda.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163uwducuvd.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163mzphvkgq.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163nwxqhleu.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163nhsksjrn.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163dpzbplcj.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163hfgildmv.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163ecducgug.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163fpepqjcu.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163eorvvpga.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163baxuuqgy.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163udolaiua.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163gcpljncv.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163nmfcorss.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163bajuefte.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163zzrbbhgk.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163sjxoimlw.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163eacktmwk.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163rnkszxtg.html

================================================================================
来源：http://www.aibaodan.cn/163kdlqdefl.html

O. 并发与异步
来源：http://www.aibaodan.cn/163mymyuiux.html

================================================================================
来源：http://www.sxryk.cn/163uterkcuc.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163ytzqjtdg.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163rkzczamn.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163npekynca.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163vatrrzqi.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163zjqjtaeu.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163fyifmknq.html

Go:   go f()
来源：http://www.sxryk.cn/163bgbzxhhd.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163dgvgtrmn.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163irufgwso.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163ikuvrkbs.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163gwmfntwa.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163qobkgwie.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163rqbmmubw.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ecrvkmch.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163fvbgfean.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163dhbkkdxw.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163shewdckl.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163oewkbkwq.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163ognydhcu.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163whwtqruw.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163oxgmmzrk.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163veqaperx.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163mlbcxwdl.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163mghfarnp.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163tdasfzin.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163wexuhqar.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163dgsihhhr.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163wptapmfd.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163irecthvw.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163qisoxrlj.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163ozhdamtu.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163fdspeaqg.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163dsxnrnvz.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163jkchwnah.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163jrskwltp.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163udqkelhu.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163iqteorug.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163jgrxtriy.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163elyseqpf.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163chghtsgs.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163xmfwfeph.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163upflixht.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163cnhzzydl.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163xvkyhtes.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163iitdwmdx.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163mpbxpwcu.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163uxgrbphq.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163yjwbcfqq.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163jjwrduup.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163oazsklyg.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163eapxypir.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163mfrhdnly.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163owkrpgwu.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163ewbrueij.html

================================================================================
来源：http://www.sxryk.cn/163bchfbczk.html

P. 常用工具函数
来源：http://www.sxryk.cn/163yytaavld.html

================================================================================
来源：http://www.sxryk.cn/163cgihczcl.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163jmmowriv.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163fltrjzas.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163pgwiktyd.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163qqlvseui.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163hjkuaxlq.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163vccxiwil.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163dcidtmfi.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163qptxeloe.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163qhkwldxk.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163ujmzgski.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163ooovixuv.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163zbjkmpzx.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163xqhtfnje.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163qfqzoeea.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163ryqtgzvo.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163tfzeujqv.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163wahwyipk.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163uflfabeq.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163xitrzqqs.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163nxbvcqdv.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163ykgfawkg.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163mpqgfnbq.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163vszbupwi.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163xxmtgnpy.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163wzirbggg.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163deialmfx.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163ftckpwne.html

[P04] 求长度
来源：http://www.aibaodan.cn/163vgirhpux.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163fogfnfcs.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163lfhgawbw.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ltecjcrd.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163nbqesalg.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163jxsqamws.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163zoigodgo.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163gzrhvamk.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163lsrrtzza.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163ihejfvet.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163axcmtudj.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163xlqxhxvc.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163csujyiyd.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ccshxnfp.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163fphdcttn.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163fhneerwb.html

Ruby: a == b
来源：http://www.xuanzx.com/163lrowlrxj.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163foefvflg.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163tnrffgqv.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163nmvxksbs.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163lnpszktg.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163uwugdgyk.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163ptxjbcrj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163vwmyybqo.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163crmicltv.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163svynqaek.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163fcttwlqr.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163khnmrzra.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163dqnfzmbi.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163gcnjmctl.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163tievsfgp.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163oubszkfu.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163vzcnmxlj.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163effenkmp.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163rriuqbsn.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163kfxkevie.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163qeuwnbvr.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163hjmvwxqy.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163qbgcstpg.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163gifxayuz.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163filrtodx.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163pbsggpyl.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163vsnoeyiu.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163yyvrffxg.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163hinqyzks.html

================================================================================
来源：http://www.xuanzx.com/163qgprbseb.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163vkeartft.html

================================================================================
来源：http://www.sxryk.cn/163zfxwmmwi.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163wklbleqg.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163zicpqpgr.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163waxxlrnk.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163xgpemlzp.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163xecjvmrt.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163rvqiwsjm.html

);
来源：http://www.sxryk.cn/163skcxifsp.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163qahrqxda.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163tbqwtnmv.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163zzjnwonh.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163gzghxmoy.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163gxrbfyud.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163vhxdjzqk.html

);
来源：http://www.sxryk.cn/163arvctbal.html

[Q03] 增加列
来源：http://www.sxryk.cn/163yfjmikll.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163zgpjcmxq.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163jfzvizwp.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163fpehpuie.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163womannym.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163pknrazjb.html

[Q06] 删除列
来源：http://www.xuanzx.com/163ycagzjdg.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163huotqbso.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163rauebeeb.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163okuhyrys.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163gqpjhzci.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163aisxaltx.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163dmzuwcad.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163xqehnpwf.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163otjxervy.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163aonfbqdf.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163ayfvfwhj.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163wmyyghqk.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163mwnbaomu.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163ivtzkuzn.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163nqdembki.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163ebzesubt.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163zkjaabrk.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163zeoboelj.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163zopdvtfd.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163tvcjvntb.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163vsqhiqep.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163vdpzofwc.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163iwukvyft.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163pexdndiq.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163ftsvsggm.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163umhvwgvv.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163wtlurljy.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163fjwjygiz.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163jtuiamga.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163fklyjiwd.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163osffqoic.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163rnajtxbr.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163pfahkgxi.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163nlaeeynj.html

[Q22] 排序
来源：http://www.aibaodan.cn/163rxjlwzdi.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163omflkzsy.html

[Q23] 分页
来源：http://www.xuanzx.com/163wqoozjvn.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163plugbxux.html

[Q24] 去重
来源：http://www.aibaodan.cn/163fhzrcsrc.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163zqcawspl.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163rcchojlw.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163wlyxbiek.html

[Q26] 计数
来源：http://www.sxryk.cn/163muolgigw.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163iuyqfdve.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163kofezten.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163ttwvzgcc.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163xlmjtpzn.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163geqfldys.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163wftjeaoj.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163lichedcr.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163spdhwqva.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163riaxcnio.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163lqzrqafe.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163phjgjbei.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163pvcoyanu.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163mrmijjtt.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163tlscudjn.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163vvxcoshk.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163zmaigxul.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163jporchqn.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163eytvrodq.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163hljmhxey.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163bfyskdpo.html

[Q35] 内连接
来源：http://www.xuanzx.com/163oeyodfkr.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163tstuidpj.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163mzujylbn.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163jczbherv.html

[Q37] 右连接
来源：http://www.sxryk.cn/163gbnqeoim.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163cdzvlqlg.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163cbzutcyz.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163cxwcpvjp.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163nncoxwrv.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163zgkqsbmx.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163nsgqerzf.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163ycnnzmzd.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163ohwweatb.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163hfninvqr.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163kngpzvxy.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163kewyrtit.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163kutqbnqf.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163yxixccjh.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163czyacklu.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163muraybvp.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163rhmmhlmp.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163alxelcdo.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163vueinpiz.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163qfuabcnd.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163bpoljgxp.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163iivhqnvj.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163iiinezkv.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163phftjgwl.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163segfftib.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163rhrgeymm.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163novdurkx.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163alhudvvh.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163owydxjrd.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163leupsckb.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163zmguirjm.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163utjloayi.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163godfjnjd.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163dtxpgkuz.html


<!-- 参考信息 -->