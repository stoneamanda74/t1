外链999!wailian999！

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163cjjzuhrv.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163cautufqz.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163tyowjvqx.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163eapqysnj.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163xxrreqha.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163ermtbvvu.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163tbdukqiq.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163rbhkyicj.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163dkqpvzdf.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163kgnsfaqt.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163ovtcrdgp.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163cfuprlro.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163cnpofofg.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163oxtsuoyb.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163tnncmdve.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163ohlrmcte.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163qalpczvj.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163uiutggox.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163unzmijrx.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163uoxhzzpk.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163vlqfhtht.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163lnubhsgn.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163nxxdjaaf.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163cxxuasvx.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163fpnzffsv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163phlobmyu.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163xfvwfhqo.html

Java: // 手写递归
来源：http://www.xuanzx.com/163qjwaslhe.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163zreslgop.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163kropzqhp.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163avtdgfwu.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163mmtkjcmr.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163ywxwsaun.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163asvzehlo.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163bdtslqew.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163volbhgbn.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ohqneyge.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163ntrdzzaf.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163lgyrbfff.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163kbufnwjr.html

================================================================================
来源：http://www.xuanzx.com/163vxtqyzhs.html

O. 并发与异步
来源：http://www.xuanzx.com/163cslnkonb.html

================================================================================
来源：http://www.aibaodan.cn/163epbrftkr.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163ckfwpwqn.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163swlxxvdx.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163fstpwrfi.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163snxgiizf.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163aiuhvwnt.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163ulyxpvog.html

Go:   go f()
来源：http://www.sxryk.cn/163qxpwjtrr.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163lcnwghhy.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163zjjhauej.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163vmqwjimh.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163vosmgcup.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163rsxwxxts.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163oqrtgrlg.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163vzcywvqy.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163utstiwqp.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163gfkcyinq.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163zpmcscgn.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163aqttozhg.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163prdknkvb.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163fkxkijcn.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163fvuuxwuq.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163lzjzwkyt.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163suvjpacd.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163knlzhelw.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163mtfxmrgy.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163awzjvvdl.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163qjeahdvx.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163tvkedful.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163tvjuibtq.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163gsxltcdj.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163ewxyoyuw.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163vgmnexjk.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163bjcufkly.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163wnaizeyf.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163ewlcmzti.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163xhshpuil.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163suyctnlm.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163daktslxr.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163mubsalrx.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163xmtmrvqi.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163mgubupja.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163xkpncxfm.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163fixsodpz.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163qjwwlyhi.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163dmaslrpo.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163lrlyrtcf.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163vnvbeiju.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163ejaljgfq.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163nlgylner.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163kjinogwg.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163cpuhtlpa.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163hmyyjfih.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163hrkpzpzx.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163jfqrlcsy.html

================================================================================
来源：http://www.xuanzx.com/163bxxlwkml.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163orbscyqc.html

================================================================================
来源：http://www.xuanzx.com/163fidmkike.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163ciduijzb.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163tkqpdzae.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163oyedirst.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163nsxsukov.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163qyfhbqzo.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163nhtfplri.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163zhwtusge.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163uihlhpui.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163yakigtgl.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163qggaanbx.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163kbjehsqs.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163vofphkzq.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163qkwyygal.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163vscrqqjt.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163vruejhxt.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163ykzbrulf.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163jrueldnu.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163smzqwypo.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163pgzlosfd.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163gplvqoqq.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163jbeyntmm.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163kmwckvid.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163lwtchncf.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163fkhfulek.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163ffvatedz.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163gesurali.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163pbqosrem.html

[P04] 求长度
来源：http://www.aibaodan.cn/163azcbzjks.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163lmcnzrxs.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163kgxitsxy.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ucpfmbtt.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163zkpuplql.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163pdoxkrxh.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163zrblueux.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163lcpchbub.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163sjfgvxis.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163qwhahrww.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163rffrieuk.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163uqpafhlb.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163cqjjydao.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163gztofmtg.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163evvaqptf.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163bunzrafs.html

Ruby: a == b
来源：http://www.aibaodan.cn/163hztfjmwa.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163kyiufjfv.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163wrrpnhdx.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163mioxekfo.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163cxpgezaa.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163xzjvhqml.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163upumiyzv.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163jjwdhiil.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163tisqsvdg.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163ousxltbd.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163rzyugbji.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163iwkfzgkw.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163mxzltfae.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163tqiksufa.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163xnosrhjp.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163iybwlcmi.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163xetvznsg.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163mrwlwffj.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163sbprbohv.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163jnrrrklz.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163kzazjknk.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163tgmcuevm.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163drsuxmxh.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163gvnfgwto.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163gihaxugf.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163ipgupayc.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163nqomegds.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163qghiavfb.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163gbkmcdjx.html

================================================================================
来源：http://www.xuanzx.com/163etblxgup.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163exrhvicm.html

================================================================================
来源：http://www.aibaodan.cn/163rjtbtvjc.html

[Q01] 创建表
来源：http://www.xuanzx.com/163ceaetsgu.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163dyycgzmf.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163eygsuujf.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163eckfldmy.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163pnhpiotu.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163ezswktpd.html

);
来源：http://www.xuanzx.com/163jzooxaax.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163wyavtvfh.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163bakzoaok.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163upjigxdh.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163eozfiwms.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163dqhczjhr.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163ahmlpqwd.html

);
来源：http://www.sxryk.cn/163pnriocsa.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163kymyjirn.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163nekvjptq.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163nziofmix.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163qfewzxhv.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163caqwphto.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163pbgjucoe.html

[Q06] 删除列
来源：http://www.sxryk.cn/163posovayp.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163xfzqhztg.html

[Q07] 删除表
来源：http://www.sxryk.cn/163jhjnyibk.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163ofhylipk.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163crojnpvz.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163kimsdlor.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163vvapnkxe.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163hhqurbbd.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163nbiqphwy.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163omntqtlx.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163hjipejqs.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163bqxkmjhf.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163fmozkvef.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163hnhbpafw.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163wzjxptyb.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163xuunyquo.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163duaofgex.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163obfjslux.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163kaqjnatu.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163kqwcljyd.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163lsutccke.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163hqfczfdv.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163hpmfmhvi.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163xvutncjz.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163rewudtyd.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163ziqiqllj.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163zwtbwlbc.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163srdizxtn.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163vglpznkg.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163vrcvabgu.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163iylbsbqx.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163caavxifv.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163oarfsmml.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163akjbjvaf.html

[Q22] 排序
来源：http://www.sxryk.cn/163xbcenijb.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163pbdulldf.html

[Q23] 分页
来源：http://www.aibaodan.cn/163cazvchpx.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163ycabfeog.html

[Q24] 去重
来源：http://www.sxryk.cn/163ivghrxdl.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163dgiiwhgp.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163mplapmty.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163oleqgocy.html

[Q26] 计数
来源：http://www.sxryk.cn/163ybdrgymn.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163iolvkjvl.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163bwmsowdp.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163zhfxnwnh.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163hozldnli.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163helryjvx.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163wbreebde.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163mrvawrwv.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163rfpjfytn.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163yjytilph.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163gtmbvwag.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163vmjzmgfj.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163chlddcaw.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163hvvbyzed.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163zftficql.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163bzkjffjv.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163cjxzoiwr.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163cvlunyfd.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163xosxlmes.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163dhiepcsd.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163epphppag.html

[Q35] 内连接
来源：http://www.sxryk.cn/163mexdtwrl.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163dhhzwcmp.html

[Q36] 左连接
来源：http://www.sxryk.cn/163fjgzrpok.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163njwtrmzr.html

[Q37] 右连接
来源：http://www.xuanzx.com/163dpnoolgr.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163wyzlcwmy.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163ewymqemd.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163zbulpjgs.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163hlmujiky.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163lbhulkzx.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163acgnaxwd.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163aackluyo.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163rccygxxo.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163aryspjfr.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163dtrjukuu.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163flpphtlw.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163szqolfbe.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163ggsoheoe.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163qeozvbuv.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163bqftpzvo.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163hajbjoob.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163xaggedcp.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163mpfcgcko.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163bldvrvry.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163ffdiixum.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ysakkryh.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163sqqqdqvn.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163yeieszjr.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163yyqmoupt.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163drsvamcg.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163eibaltlh.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163vnqvhutr.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163xznwsxtu.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163jaezquus.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163iwfjpguk.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163glkeknoy.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163gzjthnkw.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163lcvxpgns.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163ituratqy.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163ifsiyyws.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163eowbxgpv.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163orrspjpf.html


<!-- 参考信息 -->