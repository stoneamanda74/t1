外链999!wailian999！

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163lbjxhtzc.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163gxiuixwj.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163gtkfletx.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163blfyncef.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163tezmgthd.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163tknnxcyb.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163crzoqlqk.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163nrnwkmox.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163wybcshkl.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163pqzuzinp.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163jwmuappm.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163vrgkflsu.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163tsoeyscf.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163opoqyqcw.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163iwqfrndg.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163sbbgsdzm.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163etpbksqw.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163kwazxdpk.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163xsvozoxn.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163drgjqwyg.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163pbjyxrje.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163gmermhie.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163epakyauw.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163hssmdobl.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163ypxjrnxm.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163ikainrse.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163oqxunvpd.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163pnmasqiq.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163qwqoolfx.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163jkfwpbxt.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163wgnkoczj.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163hmdtaouy.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163rfwqyida.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163jukwimez.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163hayrmogs.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163jxcjppmx.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163mfzcwhwy.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163dllrpase.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163qbnftkku.html

Java: // 手写递归
来源：http://www.xuanzx.com/163pnuxkaxe.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163ajzeqchg.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163zsblcbun.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163qhtthygj.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163ftspafzs.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163onjdcpea.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163lvsamgtw.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163cwksorax.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163gkxmhhzk.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163luhandwq.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163bihrkfcm.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163zcscnqvl.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ufvvjwxc.html

================================================================================
来源：http://www.xuanzx.com/163wyordtbb.html

O. 并发与异步
来源：http://www.sxryk.cn/163nvbectcq.html

================================================================================
来源：http://www.sxryk.cn/163ikrgdomo.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163ctkbktrr.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163goyaihzw.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163bcnxsrev.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163cgxbueub.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163nivxeqdj.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163aaldzzah.html

Go:   go f()
来源：http://www.xuanzx.com/163zhdzdcni.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163xjectint.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163ojcnsdsg.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163inlpejyd.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163zbpnzope.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163uryskycm.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163xjjinsqc.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163eyiolwig.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163miixngrs.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163ohfaotxk.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163ogxjogta.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163ihfmfgrw.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163cbkxetwd.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163msfvvoqy.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163cdrjyfzp.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163efkkosyy.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163zkszuksf.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163pthmnfvh.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163fkqukhoo.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163eyodajms.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163leuwqbus.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163irgxpinf.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163bijjdywm.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163ygiybpzq.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163xdbfbhxl.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163khksbaqj.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163tvrblyno.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163gkqsidwp.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163gacikpbf.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163mulrpjdn.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163oozdssvo.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163eokoxmul.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163xkbwcblz.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163zhnwwjqh.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163dcerfdlp.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163mrckxqyh.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163vsoubdwt.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163clrjzpaa.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163ayfywrwp.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163twphhbhj.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163fdojvotz.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163ywxpkjpf.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163voxxvlke.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163uyuvxbrl.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163woveoilq.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163xygwfdmp.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163fjrgasjf.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163sbycgujo.html

================================================================================
来源：http://www.aibaodan.cn/163crfhbylq.html

P. 常用工具函数
来源：http://www.sxryk.cn/163aeonukxo.html

================================================================================
来源：http://www.aibaodan.cn/163absbmotv.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163wkwkvfev.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163qnsfaopw.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163wsqgufww.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163xqnujwrz.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163whbnpavi.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163orpqhvip.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163bmvyqbii.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163sbwxridp.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163bxrxteet.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163dvnkiloi.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163adjztvlf.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163bkxxztef.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163tpicepsh.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163psyykwck.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163skmnugal.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163dmktekba.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163piomhvcj.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163haxtfwqz.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163avsonvbl.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163pnhefihv.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163szenlqll.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163pgoyrloe.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163uxvlrovw.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163liwfhdmi.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163shqafwuj.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163kwoetfna.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163socdkwuf.html

[P04] 求长度
来源：http://www.aibaodan.cn/163uivihssx.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163zpaqozcq.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163dffrglhr.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163skbfkhgs.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163eoytgmpn.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163ayrgufxu.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163uzunlzcs.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163sufsqlsv.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163rzgvyoqz.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163ziiusivo.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163vcvknhhi.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163vpgqpuha.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163xflikctg.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163uwoiqzhm.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163zygtdsmr.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163fjpedtwe.html

Ruby: a == b
来源：http://www.sxryk.cn/163qkndbmih.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163ecizchva.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163uwdwvsqr.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163xvtmqwmp.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163xxlmfzhg.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163iluccjyp.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163lsdxnebf.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163lroalyvh.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163siietbzj.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163ivspqxml.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163jumtdxyq.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163xynaahbh.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163qbuskftl.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163vjkuftkd.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163tgfklrha.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163zrzpudql.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163svhwikfw.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163bzdhltld.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163iplmazix.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163ppzvambr.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163lnuuwqla.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163gcrcrjws.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163hfpohdbm.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163pyqagnoq.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163hhappuaj.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163vtmpszdt.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163ulvehqvl.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163rcalddwk.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163bdtwqcjt.html

================================================================================
来源：http://www.xuanzx.com/163cbehpjsy.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163ikilbmmp.html

================================================================================
来源：http://www.sxryk.cn/163xqdijwfs.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163yhguqgwf.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163bmfbztlc.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163bdfrumbr.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163amhqinij.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163lrvocfey.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163gvxrsjfu.html

);
来源：http://www.sxryk.cn/163zjzqidio.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163xybdqhos.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163xdnrusgz.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ermcuqwk.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163xzoktrev.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163wjrndcyz.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163minnwroi.html

);
来源：http://www.aibaodan.cn/163updmfruc.html

[Q03] 增加列
来源：http://www.sxryk.cn/163aaknbkhw.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163quvmqhot.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163lkktpumc.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163txebzzti.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163whcredey.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163icydktqj.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163iwpazpcj.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163wjolxlkd.html

[Q07] 删除表
来源：http://www.xuanzx.com/163xlldzanr.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163gphsvyiv.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163wvknlzmb.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163gtbqofgs.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163frkbnytx.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163hfoeoesm.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163rbbznczv.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163ewmfvnph.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163xgpifkdv.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163dbazvvfe.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163yvzoiovr.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163rwadeakr.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163nfchnrmx.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163nzzoqxlm.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163argrrtlp.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163gpllwuxv.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163hztyeabf.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163dwlxbcxl.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163kyiqucuh.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163zpymvgun.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163urhgcyfl.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163wtofgsxo.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163dbeqmqmh.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163nfyarjbi.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163xwgkrxyi.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163zkezjuwm.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163azgddsjk.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163mphijitp.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163zwwhbvli.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163ttnbdxet.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163vrrsgkal.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163begltyjc.html

[Q22] 排序
来源：http://www.xuanzx.com/163hlfvpnyz.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163avcyltdh.html

[Q23] 分页
来源：http://www.sxryk.cn/163sxsogzho.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163vjqysitp.html

[Q24] 去重
来源：http://www.sxryk.cn/163psrcbkib.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163bmnzsglu.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163dlxtypox.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163elvkeyrw.html

[Q26] 计数
来源：http://www.xuanzx.com/163xkottepf.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163ultbxdiw.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163ojiyrdhy.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163fhkainyj.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163wzhnqfsv.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163zkpebvrr.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163xyqfouvy.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163tcairfew.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163xjprkqrt.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163cdeaqpns.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163gqulvdmd.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163duljzwsi.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163cahhfdkc.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163qgrylagz.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163zsjfkiig.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163kzconlcr.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163uyvxwbon.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163gkdjremr.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163ehubplnn.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163ecfwkgkd.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163xgohflkz.html

[Q35] 内连接
来源：http://www.xuanzx.com/163spakvmhr.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163qsnslvtl.html

[Q36] 左连接
来源：http://www.xuanzx.com/163pzboswmw.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163qbwhpsoe.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163zuijrgal.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163fqvjjkzx.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163xyunbhbz.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163rynqbjav.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163yzuajyef.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163bgcsoybo.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163nygfoyin.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163teqympik.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163ikgbzhwf.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163kgeliolt.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163hcgnpyvp.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163nljftxtn.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163yhffankv.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163jyqozrok.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163edrsmlwz.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163fmegqbym.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163yrhnnpry.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163fxnqdwru.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163nolbacmw.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163affujicz.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163wmarkjav.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163frcrlvwv.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163lifsezbw.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163vhrsqsfk.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163ffcyhais.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163vdjbsyds.html


<!-- 参考信息 -->