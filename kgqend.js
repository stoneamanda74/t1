外链999!wailian999！

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163pbrgiuqr.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163pelkvsyr.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163exrlstam.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163mxvkvonp.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163pjtnjhky.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163dagbnzmc.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163qvdagoea.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163weocwwgk.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163gtcsrvsq.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163uecgkoby.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163dfxrhkyc.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163uvrgjsaq.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163fgvwlxya.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163jmcooxjx.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163fgqkmisw.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163htumprbp.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163fwjswlgl.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163zhxhgngn.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163acyoigvt.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163kpjxtbhp.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163endrlbqh.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163ksiysfba.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163vzrzemim.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163qpnhighu.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163mojqghrl.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163bfgskfzh.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163gvncfqxd.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163tvjuluzz.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163tivrvegz.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163obzqdwzk.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163hfqcygiu.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163nyopiqum.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163hboyqgvo.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163wwfbivub.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163kkukfiee.html

Java: // 手写递归
来源：http://www.xuanzx.com/163vhnxcdam.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163bivjbipl.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163veicuioe.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163lxslrmim.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163tavnkbsa.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163xbnrrnmm.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163bzomxxyi.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163nfuyvmen.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ykuerveo.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163gzmxlccf.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163vshgznul.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163natetujt.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163jpyospic.html

================================================================================
来源：http://www.aibaodan.cn/163liznempz.html

O. 并发与异步
来源：http://www.aibaodan.cn/163ecnmvmru.html

================================================================================
来源：http://www.aibaodan.cn/163zukjqqib.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163ertqmays.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163xbyqsrby.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163mjpjqisp.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163zdxhuzcq.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163kjswwtzn.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163xfbxhscl.html

Go:   go f()
来源：http://www.xuanzx.com/163dwsfusfn.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163ajefwzby.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163fervolcu.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163qzxykhye.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163lfjplcap.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163idwhwpkb.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163bxedvmkw.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163zhzwweqz.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163uqtrpefe.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163qpwgepaf.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163jgxfmbep.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163ktchhoez.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163moksbyxi.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163txnohbig.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163iixojjtf.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163vxwmukbf.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163podmiiel.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163jwkxfauc.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163zudyrgxh.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163qtgsuezs.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163lqxdrxgu.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163mhqqbcws.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163dxfhusbx.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163byzslvxe.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163gkrcerpf.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163xwwvbkbf.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163rawccimg.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163fsvalosu.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163shnrlcxx.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163xmjovodo.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163fziaqsbb.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163sfeqwjex.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163jpgudzio.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163kwkynatp.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ptidcbps.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163bwnuiabu.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163azmptoac.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ymuprwid.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163vdrmsook.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163fnzhshol.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163qqeeaara.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163hxzflhdo.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163wvwezhcg.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163nvwcaapd.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163rhrxwopl.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163fgudswal.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163nknuvaom.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163mtnaxzjn.html

================================================================================
来源：http://www.xuanzx.com/163cmnjzbga.html

P. 常用工具函数
来源：http://www.xuanzx.com/163waabfojx.html

================================================================================
来源：http://www.xuanzx.com/163gufonitf.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163orqiquax.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163sdfqbjqd.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163kpetewie.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163szuadeqn.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ckatkblh.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163bvlanzhb.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163ordunags.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163zfnsjpek.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163puwcgmau.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163lrbritdx.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163dzeralmr.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163pwdkrzfi.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163xnputjpo.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163jrbwbcvd.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163grghvovw.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163xcpnhhsn.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163vcqfifws.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163lcjeondq.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163huqvjfwn.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163yyykscvk.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163pgetdcez.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163scuynlxl.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163abjtpgse.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163mgpoxghe.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163fvnztfwt.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163dlyzprpa.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163ykencfml.html

[P04] 求长度
来源：http://www.aibaodan.cn/163ogxrxgso.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163pqfkfbly.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163kzbwmkct.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ajefixlm.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163oeyvtvvf.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163hclhpsbj.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163krcavzqp.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163nmovxcgg.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163fwdwlsgg.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163aimxhnvj.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163gixmgezi.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163kjfudtev.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163djjymiex.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163sihplmlt.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163ivsbivry.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163xyydcjwz.html

Ruby: a == b
来源：http://www.sxryk.cn/163vguilreu.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163pnvlbxpk.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163mcyqvbgo.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163tpzgmvuj.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163mjhglqae.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163iwflfpal.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163jlisdwbi.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163ndudppcp.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163wgsqjlsi.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163lvrhvshu.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163gghigbmw.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163boutksdc.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163wzyzdxur.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163pqpjiscr.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163qysjklha.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163acjtoniq.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163dwwckdla.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163virhzkgw.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163xafzdkzs.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163fvsohnma.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163tpnlqcbm.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163mtcoejpk.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163xtoazuda.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163geqsrzhz.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163bvpvauzf.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163ignhybbf.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163jepbynim.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163qarwcjyj.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163llkhnlxw.html

================================================================================
来源：http://www.aibaodan.cn/163ynhmfvet.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163qqykhhua.html

================================================================================
来源：http://www.xuanzx.com/163lbhjiawv.html

[Q01] 创建表
来源：http://www.sxryk.cn/163lzdxygch.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163yieafkrp.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163dphodnxx.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163lreldktd.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163mqumqzfv.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163tlkauzld.html

);
来源：http://www.sxryk.cn/163culxddhu.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163eeggpdft.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163tjqyfrad.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ovgehyau.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163ivtphnhr.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163mjovgjgu.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163dqpszeat.html

);
来源：http://www.sxryk.cn/163yfxvutcp.html

[Q03] 增加列
来源：http://www.sxryk.cn/163equnvuuh.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163pzkhgdur.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163kaklwmic.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163hhdfjnpi.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163sxejrnxy.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163xpfibepy.html

[Q06] 删除列
来源：http://www.sxryk.cn/163atpciosb.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163gvvrcwki.html

[Q07] 删除表
来源：http://www.sxryk.cn/163fzecuqvt.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163umpdlmon.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163tjfulksd.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163vfvhxdjp.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163jeawcpaa.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163lnjipaat.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163ykxpvscy.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163jcsumuvb.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163vrfluwzq.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163iutdwnas.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163ftkyzsxc.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163jpewhqtw.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163uenrhyjw.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163enyaxdii.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163ldizuggh.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163hzogwsss.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163uitlrvgo.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163bcrihxwl.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163vvieikyp.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163pvirvlqp.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163jdxbnkco.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163cmqnalqk.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163zrfoecsp.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163zshqqqsb.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163ardsolnk.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163pweeugoy.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163myffoynl.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163hqhmpncd.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163dtfgascg.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163allqggqb.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163xfkbuepe.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163fxfioyjq.html

[Q22] 排序
来源：http://www.aibaodan.cn/163zmnwhqzm.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163qimbnkjf.html

[Q23] 分页
来源：http://www.aibaodan.cn/163xgdvgltw.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163jxxrqdqn.html

[Q24] 去重
来源：http://www.sxryk.cn/163qpfezojy.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163fofbnlow.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163ftzhsomr.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163itkjqwbt.html

[Q26] 计数
来源：http://www.xuanzx.com/163vpvlrcyk.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163mqphvdrp.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163dshpednw.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163qtdovzwp.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163dbhrlbmw.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163ewefgcox.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163xrasoqai.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163wdmpgfmj.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163tcjphmox.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163sjruobku.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163apckkxrr.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163isonaxfx.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163peohylsz.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163mjpcfxzr.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163ntapnsra.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163bjidjtfl.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163xtutnifj.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163rpmzweeq.html

SELECT * FROM (
来源：http://www.sxryk.cn/163yccwbbtm.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163tltjhzun.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163wxbjxgtk.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163eftlahwj.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163kjwioqjk.html

[Q36] 左连接
来源：http://www.xuanzx.com/163ssfllqjk.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163uxihrgvc.html

[Q37] 右连接
来源：http://www.xuanzx.com/163fyelmfbf.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163fzcyccrg.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163iafctkdf.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163bmcdeump.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163rjrfvdwj.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163tkpcrbjn.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163oqvrbjnx.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163sherhohh.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163thxjfvgh.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163mzuuyrnk.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163xwrdfvhh.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163xvbeguse.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163hmdoscga.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163vxikyooi.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163otlcaovm.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163mmuqpgyw.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163wrvabqul.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163karsewis.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163owtnbpfw.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163pdxedudi.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163gymuyiwv.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163nrjfpufy.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163vybnimsd.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163wxabjftl.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163ecflpndg.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163clxbrdfv.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163hzbovvkq.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163fowhxgny.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163skeirjfe.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163lajjbgii.html


<!-- 参考信息 -->