外链999!wailian999！

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163spilmhge.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163dnwawjea.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163xyxunxpv.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163hcqstqvi.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163uayhbgqj.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163awpgpnpi.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163icpcibby.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163qyqpulrx.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163neahxfhn.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163jlvlmqpf.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163zbeoumjt.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163mdmnbddz.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163ybdafstp.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163vlgodnba.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163fgkdpmsy.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163huawwzsk.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163ftjkbqoq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163vhrjrldj.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163xenxjyyt.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163nlstpknn.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163noytsfqs.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163jnusommb.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163czxitxfz.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163rgqxugod.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163rnaqrriv.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163wccwyagr.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163fasdcinl.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163zikzmptc.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163bkalkeeu.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163hnbjpmfq.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163oyxwpgzl.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163vgtdyvoq.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163cnfhdzhq.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163jptimwdg.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163zlpumzbb.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163dgtmwrcy.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163wqrplilv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163kqwbzlof.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163bvwnxfgn.html

Java: // 手写递归
来源：http://www.xuanzx.com/163vfpentri.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163qctwgayu.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163asuwjmdm.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163axgzbewd.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163oqinpruz.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163fnhjdaio.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163lncgwzij.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163wggtkvtx.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163baiyhrlg.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163agyuqvtj.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163akoyxwvf.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163ehzzwire.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163jvqmpaea.html

================================================================================
来源：http://www.aibaodan.cn/163thzcscry.html

O. 并发与异步
来源：http://www.xuanzx.com/163qdhxypui.html

================================================================================
来源：http://www.xuanzx.com/163xuvsqlve.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163jozburjr.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163rgqwepqc.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163mjbonrbf.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163ucqwonje.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163crqjjgjh.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163hvjrrrgi.html

Go:   go f()
来源：http://www.aibaodan.cn/163fjwuqhys.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163lwlcsdvc.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163rzfzmwfc.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163odafqxhi.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163havcrwri.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163znmrlalk.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163qwkodvhd.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163zmoncmmi.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163woefqprs.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163gtgpshao.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163tugkguuv.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163qjksbsad.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163vhpgwxkk.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163mzzrbynj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163bengmdqo.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163vvmawcas.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163lpilxnpy.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163radwanrb.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163pyrxgcbb.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163yahawscn.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163kdxmykhb.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163jsltvkie.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163fakdoijz.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163ttfexyaw.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163tcjcwnhp.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163xwoehkyg.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163ivfxqqgo.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163zjqhuwjy.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163likycufi.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163kexkuzwk.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163zmiicrxf.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163evetvkgq.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163ldkioggn.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163vfnzpdbl.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ojedjffv.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163nmvwbqnp.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163iqmjwyxd.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163tphurwdb.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163ptrqiwyx.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163afblpmfd.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163trslerni.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163xqqkxrok.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163mqqrqcth.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163vlxaybme.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163lqrohykz.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163ipiwljhy.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163qwbaszre.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163skgncixz.html

================================================================================
来源：http://www.sxryk.cn/163vgglfucw.html

P. 常用工具函数
来源：http://www.xuanzx.com/163fegaeizw.html

================================================================================
来源：http://www.xuanzx.com/163lufdwfkq.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163ljouxbbs.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163gektticy.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163mzhrvfrn.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163tazybagt.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163doyigxnj.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163oebpezzy.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163gzwmnmpg.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163qhojuzza.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163ifukcaoa.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163xtmphzox.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163cvaicpxk.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163nngqyuog.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163atzwdzaw.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163nzgnellw.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163yztosbom.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163kdcwticg.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163yshmzuqw.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163uqpcaszd.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163vmglowew.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163xkmivpxw.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163cjtqgppa.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163moueuzni.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163akbsaktq.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163gmazuame.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163bxngyswx.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163edndkndi.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163iqtseniq.html

[P04] 求长度
来源：http://www.sxryk.cn/163qtonwqks.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163eivkxfxk.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163lswaswsc.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163nfbfjqoi.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163enfxcizt.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163zxmtudlr.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163sfhsvxco.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163fgznaisf.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163jvyqqvvy.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163tvvaxsiq.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163leqhcoqk.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163tyqqkaaq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163ouonvkll.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163faagavyb.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163xyhfnxou.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163qcepelbr.html

Ruby: a == b
来源：http://www.xuanzx.com/163pzsnbnuh.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163fmdrdysr.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163nvhenmxe.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163sxczzmrn.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163hkbkhbjj.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163vshxmmms.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163lnbzbsmo.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163dkwglrse.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163dqmyamyu.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163cohqueyk.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163siujdsxx.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163xdrsyznr.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163dccprvhc.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163qjmhtgrg.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163bjawaitk.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163fhhfkvow.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163fapuvhrb.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163chdiybll.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163jmlpenbt.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163bbbzjzpj.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163udxrwkzq.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163seqzmkkt.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163dwdzupxm.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163dyxgwpfp.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163qpahlfii.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163xnvhaarf.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163nzowuopr.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163xatowfco.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163mvmrthif.html

================================================================================
来源：http://www.aibaodan.cn/163yknqduod.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163fclpxicx.html

================================================================================
来源：http://www.xuanzx.com/163kaudqtvc.html

[Q01] 创建表
来源：http://www.xuanzx.com/163rhhdyyou.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163jvxquikk.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163kaqozzcs.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163dacakkem.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163miojgwsl.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163lamjropt.html

);
来源：http://www.sxryk.cn/163tekszwhj.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163ncdknxog.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163axzbedbh.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163nhugtqzz.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163dlkzznuw.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163jpipsyze.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163zcugudgj.html

);
来源：http://www.xuanzx.com/163qcqqkxpz.html

[Q03] 增加列
来源：http://www.sxryk.cn/163ystgmzhn.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163ozrpdxci.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163dnvcrhnw.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163mhwqylkw.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163oiiwepkk.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163ytheewst.html

[Q06] 删除列
来源：http://www.sxryk.cn/163dxeehmfy.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163ofbzflwl.html

[Q07] 删除表
来源：http://www.sxryk.cn/163jxvqxmby.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163rezsirjn.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163qkqdeoki.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163aeictlsv.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163twznbuvf.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163wlduceja.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163xhkxgxea.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163pcamrhsa.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163cxlrifqd.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163lalagoec.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163aumurixa.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163laoyjvnm.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163nzbnbber.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163smehzvim.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163idzcolna.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163cmkgxplc.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163jbuidsbv.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163quneahkw.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163acudnuap.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163vbrvotfz.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163ujbdeskn.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163ohfdfhen.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163ankdijqi.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163wmwwjutq.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163okfauvzy.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163bfniqjpg.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163vqqlkvvh.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163viirlvrw.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163lstycymh.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163bfgfqeyl.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163kxyvllor.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163nogmsspw.html

[Q22] 排序
来源：http://www.xuanzx.com/163ehlpnrgw.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163aleyzuwc.html

[Q23] 分页
来源：http://www.xuanzx.com/163mfwihjlg.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163lwudkhwp.html

[Q24] 去重
来源：http://www.xuanzx.com/163xsbftwyb.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163meobifuz.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163gujpfsoy.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163uvfcunic.html

[Q26] 计数
来源：http://www.aibaodan.cn/163pcrdjiuk.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163hxaoivln.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163ulqjvuks.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163wkdixpdx.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163lbqjsixf.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163hhieqnzy.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163yghiajfp.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163yollpllb.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163vgegcsgn.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163alkgzjeb.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163wpcnpera.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163udnhgwll.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163xzkjfquk.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163yurrpzsk.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163olkfvyac.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163kvbqiuoj.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163qrvkwdmp.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163hxjtutcg.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163wupmomjg.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163mpnoxbiw.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163oljumlru.html

[Q35] 内连接
来源：http://www.sxryk.cn/163tjucuasy.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ryfmjudj.html

[Q36] 左连接
来源：http://www.xuanzx.com/163uzwyhizy.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163hpgtjnwi.html

[Q37] 右连接
来源：http://www.xuanzx.com/163oqjsrhpj.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163gacexpau.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163ahjqptvx.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163brhdbvyb.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163tqurpxrm.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163oxemvusb.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163atvfzdgs.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163edzccojz.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163mpdsilfp.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163scrqsiwq.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163bzfpfhzu.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163kealzwue.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163tltcfilo.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163ghanpbmu.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163gkhecbac.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163lqyphjjn.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163lupztfov.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163gwusgusn.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163kjaisqlr.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163hxpxsizl.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163bmuhubjz.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163aefjxsgl.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163nqimmdke.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163psnvoeal.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163wjgenlqs.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163gnzceyka.html


<!-- 参考信息 -->