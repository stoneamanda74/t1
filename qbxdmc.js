外链999!wailian999！

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163epmkgkfc.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163ssqieuzn.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163awcjrzwq.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163mvpwdcrb.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163njoioede.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163yevlboaz.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163kcasvvts.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163dkmhowju.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163nqmxdjvq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163drwdmiaj.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163gqtvuqlf.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163wjzlfhlo.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163iyrewmlb.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163zxeiintt.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163uzrngysj.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163vuebokgy.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163wchzboix.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163zxkmwmne.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163nkfsqpkk.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163tfkqahnd.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163fsmgyqpt.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163zyrwtezm.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163asyesond.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163gumpvkoe.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163zvvbydtc.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163xkcrufre.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163ucqplcun.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163wvfupgzl.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163iukhildy.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163hjjrukcy.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163idltevxy.html

Java: // 手写递归
来源：http://www.sxryk.cn/163gidawghu.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163yinfdxgj.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163rrufdjin.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163njfycrov.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163swfpbkoh.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163eszybfve.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163epemswcg.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163swdzextb.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163fcufddgb.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163oapxpcnu.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163pkehvwjx.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163zcrfxuas.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163skckdkss.html

================================================================================
来源：http://www.aibaodan.cn/163wuujvgto.html

O. 并发与异步
来源：http://www.xuanzx.com/163txqzvthi.html

================================================================================
来源：http://www.sxryk.cn/163zvqvilwm.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163oadnzkpf.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163kcqdervy.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163urklpviu.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163awwqhmez.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163joefpjvl.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163dahjwczz.html

Go:   go f()
来源：http://www.xuanzx.com/163rphqjjoc.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163eqvvlakd.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163gjvnqpss.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163tpibpeqg.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163ysnqlpbs.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163ogivnyzp.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163gopqihew.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ofozqndj.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163qhhxicxc.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163nkmboyfs.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163zqtydlyi.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163jezpqwkl.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163zzsgsuic.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163hjdiolhl.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163ylhwkhho.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163rnyeqbyc.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ejetwmlp.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163dvwencsw.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163umiouyve.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163xqnillbi.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163xreonoxa.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163arjckceq.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163obcwdpag.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163slunydod.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163ngruyyhz.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163lgypsvlx.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163pwbecrcs.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163ropuwtzg.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163lojnaujt.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163qpoblaao.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163wfcgcayt.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163nbbijzff.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163xlofodlk.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ilmuihjo.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163fqjqmnxy.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163rsosfgjb.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163rxubdobk.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163huyoszic.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163vzgibvxi.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163icjjpnmp.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163hyyclduj.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163enxnmplb.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163rybzchbh.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163pzhkxpnc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163dzdjrfxw.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163ryvqensd.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163fljwvrzs.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163uljulfkr.html

================================================================================
来源：http://www.aibaodan.cn/163tbogcrrn.html

P. 常用工具函数
来源：http://www.sxryk.cn/163bcnbvgxt.html

================================================================================
来源：http://www.sxryk.cn/163uldceafi.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163vsekpnsb.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163loifkhrr.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163kcopxqcm.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163vxyzcgvd.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163vpteaunm.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163cqfsfbzm.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163dsjfhpid.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163uvmcrsdw.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163wszqrtwu.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163gnlcfyqy.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163pttgitmp.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163jautmwju.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163yensjvxx.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163wgomqrbo.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163nrbvsoeh.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163uixrnbzn.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163mflftbfs.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163yjrobnnr.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163niwnxaod.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163lcaaueuz.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163zdajdahw.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163kajfeouf.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163zzkcgalm.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163czutncdl.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163ebalnjvv.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163vfrajohh.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163nfqathhs.html

[P04] 求长度
来源：http://www.aibaodan.cn/163rsjnmifp.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163xjdlyipb.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163flgirbhi.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163cccriysh.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163yzhekukr.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163kxwriuvu.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163coegczok.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163vfjlthqs.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163eojtxrwy.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163gactvdfw.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163sdkpsihw.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163jyxolifg.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163zzdbfvxb.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163hkvwfxmd.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163wxlxozhv.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163izltbrth.html

Ruby: a == b
来源：http://www.sxryk.cn/163hdvhrflv.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163zwcxadgw.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163lhvfdeci.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163lcrjhtiu.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163sfwpgukf.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163cwybzqox.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163gvjjeevj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163brjjzsru.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163lwwluhhr.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163hmjsaunx.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163rwwdlbhx.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163oxcpjoxw.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163itjbpzks.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163vijemzsz.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163cqqfqxky.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163lmwuxfwx.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163hccibbbx.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163lfrllymr.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163ophetgbg.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163ltekdcfz.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163tknzwzvk.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163vmphtgbl.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163lyqzbvoq.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163zfbxvtna.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163rxcnqqsi.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163phtzkvjs.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163ttndblyz.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163bksxjtro.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163ggawojkx.html

================================================================================
来源：http://www.aibaodan.cn/163msoqbpcs.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163vvnvxolh.html

================================================================================
来源：http://www.xuanzx.com/163wkekjdjz.html

[Q01] 创建表
来源：http://www.xuanzx.com/163itvbkxsq.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163ipjcpxuu.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163rrkcochr.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163wgmjzduj.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163dsuuzvge.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163gztzrlqi.html

);
来源：http://www.aibaodan.cn/163ewxvkugv.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163iyjmqnxx.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163vrdxtqdg.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163akuhutjz.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163xsdhrdfn.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163lbwcrkwm.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163smcvtnwy.html

);
来源：http://www.xuanzx.com/163miwlbzvm.html

[Q03] 增加列
来源：http://www.xuanzx.com/163ixrobpvm.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163lpdhqzxi.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163tukkxsru.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163bezaawan.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163djrdhrit.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163ogqfajbu.html

[Q06] 删除列
来源：http://www.xuanzx.com/163mrorwgww.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163lxfrgekd.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163mdyxknuy.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163svmawklq.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163suhlrdnp.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163peztzglt.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163xpfvhmoi.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163gmtpxjex.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163ycgnjrmv.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163ighddiam.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163mliuobqh.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163igntrjqr.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163uepjmddj.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163csvrkbax.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163vvmruvjn.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163rsvmxbef.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163ojrjntsy.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163ajwsdqfg.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163kmuzypzc.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163syywmhta.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163ukjgaxya.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163sumudxbj.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163rpqggsga.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163pkeweeap.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163qorlmjiu.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163shndnfqd.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163amhhbwla.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163yjhloabt.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163fjkrslgs.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163ukxcfzjg.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163lmxecble.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163xpwcvnfn.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163zwoksdzm.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163cquoamkk.html

[Q22] 排序
来源：http://www.sxryk.cn/163viywbjur.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163jwuhejjs.html

[Q23] 分页
来源：http://www.sxryk.cn/163qcrhewwq.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163dznbvxqa.html

[Q24] 去重
来源：http://www.xuanzx.com/163mmrrfafj.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163apchlztr.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163pruvhmxq.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163ndbogicu.html

[Q26] 计数
来源：http://www.aibaodan.cn/163hikbqzfg.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163fvzbfvgp.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163nijvtccg.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163qapladtx.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163fnfjtuot.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163yvxdjcff.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163rowbfqfv.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163tavenxfg.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163ccydqnur.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163dnzylujn.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163gprmizbn.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163kbvilhaq.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163lcwldgpe.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163mmqgygya.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163lgrtixbo.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163cmytsoxt.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163uwwnvxps.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163buzvyigx.html

SELECT * FROM (
来源：http://www.sxryk.cn/163jfruhfxi.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163adclarby.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163opigbjnh.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163ypccnljq.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163qtfjwsjb.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163ivlufglz.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163eirxaszi.html

[Q37] 右连接
来源：http://www.xuanzx.com/163slxthodu.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163ilgkrmmt.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163rigwlqbk.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163wopdyfzx.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163ujjdgenm.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163sicavngb.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163dvfuijsf.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163mhegugoj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163fvbttqum.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163yjjsohfk.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163xyzraazs.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163alktrrnz.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163mpuhygbm.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163lhrkllzq.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163kvucyjor.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163ybzxjbyq.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163dwmyfqrg.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163tduivlau.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163bmvcnoyo.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163dprglsao.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163qkolppgj.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163wgowmegh.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163wlgpetcx.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163eggcauks.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163ebxyhanz.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163amuleubq.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163apgjomds.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163sotrdqkq.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163nnsoywhl.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163gkbhupux.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163ajlgpfue.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163hicmopjo.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163ptgrhhsw.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163amxkypjp.html


<!-- 参考信息 -->