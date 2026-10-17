外链999!wailian999！

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163ruwtwuvm.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163epeafiop.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163nveybhyb.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163jsltuagh.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163ogblgeyj.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163pfrkbmnu.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163efphumrw.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163nlrcgbdn.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163zrkpjxst.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163fttxdpry.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163niubjcgc.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163prdubuey.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163gffzsljp.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163ghjolqxw.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163gdheqkmt.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163gmlmvsyg.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163sbixmpfu.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163pgizlovo.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163wgovxvvm.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163enjbusuq.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163eabnxpbh.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163xisnhutv.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163utebmjyy.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163irhksaqn.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163yltjraid.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163dafxfxly.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163lokdhjjz.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163fmtwmwxg.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163wzbldkee.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163qbqzcidh.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163vrsrvpsr.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163rjujihwu.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163usrahxzp.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163btbhbeyj.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163egbjqptk.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163fmhqyoct.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163wedaoqes.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163jygciylm.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163kisxsrui.html

Java: // 手写递归
来源：http://www.xuanzx.com/163olbjqcsf.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163akanqgur.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163ldsssbzn.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163jxeupdaq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163nmpwolij.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163ydnbdmip.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163tdxtsymb.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163zepnlhpp.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ueydvoyi.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ymseppbq.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163jllcaftt.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163pcsnrqpb.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163lkfmodfd.html

================================================================================
来源：http://www.aibaodan.cn/163teskeeuu.html

O. 并发与异步
来源：http://www.aibaodan.cn/163ornpqtep.html

================================================================================
来源：http://www.sxryk.cn/163uzjmjznh.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163tvkiocwq.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163xtcqyemx.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163jdwfwldr.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163mrdywein.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163wabaegmd.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163mstxijgx.html

Go:   go f()
来源：http://www.xuanzx.com/163rlyqduwn.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163fudafxwk.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163arfvobda.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163apdebzzk.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163efotuuqk.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163qmwomxnl.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163hkxnhmye.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163uezoasbw.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163jvvzayyh.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163vasstszy.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163iagpomwe.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163qahzyaoe.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163dvkuechu.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163vcszyvez.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163ggajyrjp.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163vqpsrofz.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163xwkjfzim.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163qaapveen.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163bafmhrek.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163rrwidaqv.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163vjwxeesk.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163tcvhfvty.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163wslloukc.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163lwneibhd.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163zfhzausg.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163gycusbhe.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163ntwnnjgb.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163kaenpwnz.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163ywkmnjja.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163vwyxqmrs.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163qarmkmav.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163qsiktlqk.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163maqomsff.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ekdbnshz.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163thcwwjwa.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163sypuntig.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163mnulmicq.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163tgtlckpg.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163lmwzcmln.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163buuclqze.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163ccycyvuo.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163vmjwkvfz.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163eejvjhjd.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163yxnalkuc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163wlymhpnr.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163piysmghs.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163glutruyt.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163hjicsapg.html

================================================================================
来源：http://www.aibaodan.cn/163happaghh.html

P. 常用工具函数
来源：http://www.xuanzx.com/163pqdafsmj.html

================================================================================
来源：http://www.xuanzx.com/163ykifwgaq.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163edivhuyc.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163gpbhtqsv.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163chzujywe.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163bbymzhwf.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163flsyhxnf.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163ulolzgel.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163lpiiuapt.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163arfinnyk.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163zihvsndk.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163gnjtgtls.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163ypgxnlpw.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163ytjisdhf.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163mfyzlctz.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163fqsbckqt.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163jyfudspo.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163efaynwxs.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163aifxmgny.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163rcxnnjri.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163knbpefgt.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163ecqxcnsq.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163mmmgpkey.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163iionpmfq.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163pcqbkdwe.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163kgxztxhj.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163oedlndgr.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163ejqqebiv.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163xmmagxmv.html

[P04] 求长度
来源：http://www.sxryk.cn/163xrcmfxxw.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163uezfgfen.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163xssrepqp.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ppfqajum.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163cmqzvomc.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163qmimfqxr.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163tvcmknsb.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163zyoltxql.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163ydezmplm.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163zgunuwrs.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163gfxtnatq.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163jnngcfrh.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163kuybfguj.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163uheaxice.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163whfwdmpu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163zttusqpn.html

Ruby: a == b
来源：http://www.sxryk.cn/163nkcilaga.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163yaxmesoj.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163szisdexq.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163dqjkghxa.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163jhxnwhup.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163ikswwryi.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163vbqxhwpq.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163pqqztgoz.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163orotkcrf.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163fgicruas.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163xtrerhln.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163grpjfawa.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163gymsrgov.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163jmivedsw.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163inmmvdzw.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163nnxrhqbz.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163rchqpivq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163ctdxpggi.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163plkinpbj.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163qkkttwst.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163egrcwjeh.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163alwkigyd.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163onctfctk.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163ovhalsrx.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163nsesuwka.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163hsmvhlnq.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163cxyojybj.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163dfvuhksv.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163tojtzbwu.html

================================================================================
来源：http://www.sxryk.cn/163apelroqm.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163ixkycsfp.html

================================================================================
来源：http://www.xuanzx.com/163imabafsk.html

[Q01] 创建表
来源：http://www.sxryk.cn/163ddabbmlj.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163hgdoadbd.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163aybcmqfy.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163npfdsqdm.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163ljanwvwy.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163hlirpdta.html

);
来源：http://www.xuanzx.com/163qqcrshiq.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163zptqjdma.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163wlocmnbd.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163mviovmhc.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163gjgelthu.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163cscatpty.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163xdxllrya.html

);
来源：http://www.sxryk.cn/163kmddaetu.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163dldrwhjy.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163egiyipaj.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163rvioxeiz.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163tdubuacf.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163jovhnwvz.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163lnijpymz.html

[Q06] 删除列
来源：http://www.sxryk.cn/163jknivaqr.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163qnwvvrnd.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163elhegjfa.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163ilosumxi.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163npmuxwjd.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163aeydasrg.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163anuairlw.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163wpoodcnl.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163bofqixhq.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163svtqazch.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163tsbpmphs.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163kzdsycbg.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163xvwydmzo.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163xvwyuojq.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163ifsnzivz.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ukezcvbq.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163colxpxga.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163ykaodvyn.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163nerncnnr.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163utictuya.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163mvfywivc.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163cjqgaozx.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163ezknvxpz.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163nxbbjuko.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163wvjdtkut.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163aedvtrkb.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163ebkrkrim.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163drscpqse.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163hriajxpl.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163kiliovwc.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163zyylsrxj.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163gpzlnkxg.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163awbthlms.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163hbqarzih.html

[Q22] 排序
来源：http://www.sxryk.cn/163iddafokb.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163jnvrfncb.html

[Q23] 分页
来源：http://www.aibaodan.cn/163dyocnhig.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163jftoeket.html

[Q24] 去重
来源：http://www.sxryk.cn/163nasxnkcq.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163udifkiqu.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163bldgbqkp.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163mywalhok.html

[Q26] 计数
来源：http://www.aibaodan.cn/163wjeodphn.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163coylynak.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163zznlshdm.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163kmtrffxt.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163dhvhdfrv.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163tzotyqhz.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163axrbeqrr.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163mxomhehn.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163kcwlkbey.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ftdfjwmb.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163nckycmgp.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163hqrktmte.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163rrvfflwh.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163eocttuyb.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163ytiwtslp.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163zxkhpbcu.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163ncrckmyl.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163qxsdjxqr.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163jclrxaci.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163ziniymtp.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163cpimhagj.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163gkiglbtg.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163obtpvsgl.html

[Q36] 左连接
来源：http://www.xuanzx.com/163bzyscxmv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163mzbxgqrb.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163njnsomfv.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163rxrmzvfs.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163iurnpofc.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163zueksjvj.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163dgbmtqeu.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163tdtqjuhw.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163ljtikitu.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163zfoxekrl.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163fdtbkhot.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163dybqjkeh.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163feaxtopx.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163vqlyqlgt.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163mphtnqpx.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163stloudjh.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163imoochyg.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163xhuonaht.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163bftaiuud.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163liqtekxl.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163zagaztng.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163ismkjose.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163hljagdhy.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163epzzexac.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163amlcvrbv.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163kegvqxel.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163cpnkhpui.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163olfmebtx.html


<!-- 参考信息 -->