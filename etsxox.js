外链999!wailian999！

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163vjpjezci.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163sexlbofi.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163yowfajuf.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163mcjrhehz.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163dbdovkpw.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163krcgpokp.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163aqslirbu.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163lmwreuki.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163cerpscwo.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163nfiiatdm.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163uwxtbrhs.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163gzdfvhbg.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163tboxlywd.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163sotybvbf.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163nrghrzdq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163nelpaacb.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163mdaxmfkh.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163bonwcloj.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163cwpdgban.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163csdxanmn.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163txrpyzhr.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163ktvcioxd.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163suxylilm.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163sorupozi.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163ddiuqvmj.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163cnapgmxm.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163nebatoye.html

Java: // 手写递归
来源：http://www.xuanzx.com/163juqwgscd.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163omftmrir.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163czhfiopd.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163wfyhuoqj.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163pwqypccn.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163ikidyndf.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163iasxgfdy.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163jshghzst.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163wlqsnfwn.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163qzgnkcpt.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163gsfudsth.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163qsphdgjg.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163rwtywuum.html

================================================================================
来源：http://www.xuanzx.com/163nhlencgp.html

O. 并发与异步
来源：http://www.xuanzx.com/163upkzcmal.html

================================================================================
来源：http://www.aibaodan.cn/163belwgwfa.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163ayfrregp.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163sthcodpc.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163vhohnkrh.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163ykatjteo.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163wrnqscmo.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163yiwgycjm.html

Go:   go f()
来源：http://www.aibaodan.cn/163yxhjtrij.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163yeuuhdht.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163mkmxipen.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163cleptllb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163abqkaaun.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163xtdhgwjr.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163nqoqjuow.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163zhxciotp.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163rdwcgcat.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163nacrxrcm.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163itzdzxmc.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163zmmrruie.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163vgmkrrhz.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163glzxuvvd.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163zaagkbxr.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163iycmcqts.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163opidvyrr.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163crelocpk.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163rwolhmem.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163ocjnvzos.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163mqeaaobx.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163abxluixh.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163kgwaslhk.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163sevaxnvw.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163ercckmqw.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163zngedvjm.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163yollwfir.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163hchiquvm.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163dodrgrse.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163dbdvpmrb.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163qnykydzv.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163xhvqmyne.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163bahbdgli.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ifzpaxey.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163azzkykxi.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163nodaxmsf.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163follzcyx.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163wprgakim.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163eednjnkh.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163apbtkgfq.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163bhoartio.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163yqkwasiv.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163tksftrjt.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163qlinfdmc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163mrhlvaaq.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163iwrjltby.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163vikagbav.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163bsibzqhm.html

================================================================================
来源：http://www.aibaodan.cn/163cvkxtrxt.html

P. 常用工具函数
来源：http://www.xuanzx.com/163hhkxqoea.html

================================================================================
来源：http://www.aibaodan.cn/163coeehckm.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163twfynbma.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163wenrhykw.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163udukqkpx.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163kkilejbx.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163rbifltvn.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163hkakiuay.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163cfelxuiw.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163lpojytvu.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163smsykzwl.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163qnhmtntz.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163ycuholxb.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163pmzurxpf.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163kfqnpiov.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163awtnyvzj.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163nvfpdpbq.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163lodaycgm.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163wirvmzay.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163axotbkru.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163hebhxyms.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163nwhovqvm.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163miujigxz.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163jewyjmjn.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163gxbareaq.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163uneeyobj.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163iwhbcpfs.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163fpkcpjri.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163xuswqoqz.html

[P04] 求长度
来源：http://www.xuanzx.com/163kucalqvn.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163rcoygfmb.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163qfaenhfb.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163zqliktfs.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163hegbcnda.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163qregtyvv.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163chmdkrrt.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163fuhxyqtb.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163sgyjtbdz.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163kybeqihb.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163ykqistbr.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163rnrnpkjv.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163iagqfqou.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163uiplxkat.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163xurpzkvc.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163lxcylzuy.html

Ruby: a == b
来源：http://www.sxryk.cn/163tpsrmifx.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163cgiegqkx.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163rxamjwvd.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163peajxuud.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163qbkizqzv.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163njbihwhk.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163dngfrpsj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163wcxsbdsg.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163wfynqyjf.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163rknozxkg.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163bgsrjxnf.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163ldegmecn.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163jlbpkkck.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163fjvaweoe.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163pjvfmznx.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163niksrbcz.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163iqeumhyh.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163dmzotdny.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163zpixwnwj.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163focitayy.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163iggdzlfu.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163nhqyzomd.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163ieekgjjo.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163tegyosid.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163ytccijch.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163xiaztkll.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163zvlbrdho.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163uhfawdml.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163akwcafcr.html

================================================================================
来源：http://www.aibaodan.cn/163ebivpwcp.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163lksoykvl.html

================================================================================
来源：http://www.xuanzx.com/163neduthdv.html

[Q01] 创建表
来源：http://www.sxryk.cn/163eiweulab.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163jpffjkqg.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163efpnwozu.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163cjritsof.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163okdbudkw.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163ppgnxmeg.html

);
来源：http://www.sxryk.cn/163dgdpemlf.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163klfnaqpt.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163jfgsuczj.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163rtbxkqdq.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163qihyqxwq.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163hdyqmuyg.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163nicryxaf.html

);
来源：http://www.aibaodan.cn/163bwcxhmhm.html

[Q03] 增加列
来源：http://www.xuanzx.com/163jttrumlb.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163yfrlxltj.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163uunspsnz.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163lbugqhuf.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163xssnhout.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163sgbgsoqs.html

[Q06] 删除列
来源：http://www.sxryk.cn/163vnnzzxsb.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163hhjievkk.html

[Q07] 删除表
来源：http://www.xuanzx.com/163qsojilfl.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163amqtsdqz.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163srwfuvkj.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163fjoksdvn.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163xmznzlbm.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163jsvwpgci.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163nkygynpv.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163lhsrxebu.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163qnfyeaie.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163pvhspbdx.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163nznnxmwr.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163apxchznf.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163cxtgbgbv.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163zryrvfsn.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163vlsoggla.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163ulzlpohg.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163tfistpht.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163yltcezet.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163hxcguocq.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163wsfrndzs.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163pcimdsxo.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163hkofxkrz.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163atjessdd.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163grbyjfpb.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163bqiwibkn.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163cabkenyu.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163stiudssg.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163fwpyzurf.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163uudmjlse.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163tsxnjwdl.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163dngexowz.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163aqtwylqv.html

[Q22] 排序
来源：http://www.sxryk.cn/163xkrztcnb.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163uoduwlwp.html

[Q23] 分页
来源：http://www.sxryk.cn/163codiykcz.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163ynmyqgqk.html

[Q24] 去重
来源：http://www.sxryk.cn/163qhbzkbdl.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163gjaeohlc.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163pcergyeq.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163tavgukxw.html

[Q26] 计数
来源：http://www.xuanzx.com/163qepwdtni.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163bndesgol.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163qqxhthdb.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163sjerczox.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163jivvkxzd.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163sqmflgus.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163bpjvfrwi.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163jehwfakv.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163myizbctq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163jblyovms.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163zlhpwnnr.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163wpqjktqu.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163fullxggp.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163cnnddcqj.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163xftttiot.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163upmzjlzu.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163vhebngcq.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163dfedbwip.html

SELECT * FROM (
来源：http://www.sxryk.cn/163dzhthuwg.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163zsfkpxrx.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163pahjymut.html

[Q35] 内连接
来源：http://www.sxryk.cn/163jsolubcq.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163elqrnaoy.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163rifrmiof.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163irwtalrg.html

[Q37] 右连接
来源：http://www.xuanzx.com/163dmkbywxx.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163lejoohns.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163wyeeckno.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163mtnphofi.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163wsfdmhsf.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163txbwffft.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163ylsariov.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163opfxptnp.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163xaldqafn.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163bwmcewvu.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163egwpvfgf.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163ffreevcu.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163ahgwrtto.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163fcdgemen.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163dwwltavd.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163oczahptn.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163xfvonfhz.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163weniztav.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163nlyenqgm.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163oxhyrqft.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163nhfyznle.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163swcdggof.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163gsxfittq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163zikjpwez.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163wtfimxza.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163ncwuflkm.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163kwiooers.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163bgrecqhy.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163fnjoipeh.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163uijhsupz.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163zjqgsjks.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163kaonkakk.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163eknqwehn.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163qrbbytfx.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163hkghqhmp.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163fhveolvt.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163tvnzhsad.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163ajikgwzh.html


<!-- 参考信息 -->