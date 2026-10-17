外链999!wailian999！

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163rxgsegpk.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163bksirxka.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163pwwsyndl.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163xsubdxbi.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163zpdqzfux.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163lzzfxfvk.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163ifsgazmh.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163dhsswthi.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163nuzuxukt.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163eahcwnvn.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163fqiquwcb.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163uhlfsdlk.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163rlyltmqj.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163lwfkdnue.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163hntdbrvv.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ldpyugug.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163wlwqxtni.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163rwaiqiub.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163wxqrfkpn.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163rxravfqx.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163kdriniph.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163wqinjkpg.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163fopypaka.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163kwlnjidu.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163jjcelnsx.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163zuyifqfh.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163tvnmpbsa.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163ywyhsbgg.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163jciqpufi.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163abgrzzhb.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163dtishycg.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163aqhqstyv.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163pniypwlh.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163yzbnciei.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163rknrrmxe.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163ssjuclsq.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163ueunlmmd.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163haguhwuw.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163chrzvatt.html

Java: // 手写递归
来源：http://www.sxryk.cn/163fhivirte.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163nkqzmnpk.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163nshmybfj.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163iuakeynj.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163bxshovag.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163runyzwtk.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163nvzwmkhw.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163oxdijvjh.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163xbzfwbob.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163cdxnyccs.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163butdqrqp.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163csiyettq.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163jiuwyqzj.html

================================================================================
来源：http://www.sxryk.cn/163fduqfcdh.html

O. 并发与异步
来源：http://www.sxryk.cn/163qpxobbox.html

================================================================================
来源：http://www.xuanzx.com/163pgnozdgt.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163pjrvbrqu.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163rhhittkf.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163wjpdrdjf.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163kvbxqwdm.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163uhtbmuqf.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163dvbeooui.html

Go:   go f()
来源：http://www.aibaodan.cn/163hounpsvv.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163ktuknwga.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163hfopgptf.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163tadrpqqu.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163ntiwvvmh.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163ojlfcssh.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163kkzxhpqo.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163doydpvbn.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163ocbichua.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163ultcsmbn.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163vdvpcrcg.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163xsmrmcqd.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163yqtipyit.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163dfvotppp.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163jehmaklm.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163ouybkjte.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163palejwkh.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163aglhyzto.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163durycksh.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163susovgsw.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163llgsftxg.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163ftjfmxkd.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163dnwmuqeh.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163jlbmmnjy.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163yzyykonj.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163kvaltrta.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163mtxjqcda.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163zcfamdmg.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163hrrepfzv.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163vwziqpkj.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163sdwykpzq.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163tqvyqjjb.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163lreuzmhw.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163hcrecmzo.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163jvpvwrom.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163zxfxltwn.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163twgggfug.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163isplhjby.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163xiticgrz.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163fuesuzbb.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163xnewydto.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163gojzgwep.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163yljyrniz.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163umgmmfaw.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163ourrwelv.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163gbcsnyle.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163vtvwadoj.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163torgndad.html

================================================================================
来源：http://www.xuanzx.com/163skbglyca.html

P. 常用工具函数
来源：http://www.xuanzx.com/163ihgvakyq.html

================================================================================
来源：http://www.aibaodan.cn/163jtlggrqt.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163ocrkucis.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163hccfdmkb.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163eujhxmnc.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163lvsghgrc.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163xlticbdd.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163jufxmvdq.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163mntxawhn.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163qszqavey.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163qgwsnsyi.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163knorjpwt.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163lhitevgc.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163dzhfaxxk.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163xbdlprne.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163xeookhgn.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163rjfdcocm.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163ffktxhml.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163hmjtpvna.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163yfsyqqpe.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163jipbmhvn.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163lzclvdhh.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163twkowlpv.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163fjrfgszk.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163qfnedkzd.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163dvsfmihk.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163cnmeuwlw.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163ciintoyp.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163iyvutfoj.html

[P04] 求长度
来源：http://www.sxryk.cn/163qggakzqx.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163dzgjtgxt.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163gyikezlh.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163uwckuxmm.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163nqoeemtr.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163cjmkzfqs.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163eqxtatjo.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163wguplxax.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163axnyajyr.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163omimplrp.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163kdvjmfcs.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163ebyjfjow.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163xztmkrzr.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ypgesliu.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163fhwlpcav.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163nwffwjaq.html

Ruby: a == b
来源：http://www.xuanzx.com/163mpxhqhzv.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163sadrwvog.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163cdpitxrp.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163urtrvcyc.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163wvcltvws.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163ngrjwufb.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163rdqfjiho.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163hjzdifrz.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163jeidhrkw.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163fdsrmhif.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163fngdjkka.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163rjxtybie.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163mdvvzyhc.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163mcnihwqd.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163qlhratcw.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163wyphygjq.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163nchpohmb.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163rvvldzvo.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163pfnodfej.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163sdxfonnp.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163jpwyfepx.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163lzzyidbe.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163bnkiylhz.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163kagvhzge.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163ofxymwhg.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163bxvzvrhy.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163phjzyusj.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163bmihbktv.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163bdsbexya.html

================================================================================
来源：http://www.aibaodan.cn/163syetgwws.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163mjjkzrip.html

================================================================================
来源：http://www.xuanzx.com/163fgajiggg.html

[Q01] 创建表
来源：http://www.xuanzx.com/163oxvnmjan.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163iyiemzij.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163foleopqq.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163siyynuyk.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163tocyusrq.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163wbbbflrz.html

);
来源：http://www.sxryk.cn/163uicdxxbm.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163nrhupenx.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163zkbawxvn.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163swxjryty.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163atjtchdx.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163fummuiwr.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163dhjnysuw.html

);
来源：http://www.sxryk.cn/163sdgmvyxw.html

[Q03] 增加列
来源：http://www.sxryk.cn/163ecmyttck.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163yjfrqwjn.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163gkoxvyje.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163mpntfnbv.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163txzfpngm.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163mfvyufsp.html

[Q06] 删除列
来源：http://www.xuanzx.com/163twmoigvh.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163etfikvli.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163xhdbhrts.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163ecbnwsbq.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163rglmugfx.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163ieyxxmoc.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163kwzokhap.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163wrhutihl.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163yxemnysg.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163irvdcdru.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163bbvpirfx.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163bqizxfdt.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163vkffabzy.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163wbiwfmnn.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163regwcayl.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163ieaupiop.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163ucnlgqoj.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163xqcwofxr.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163cilsvfdn.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163loamhkhn.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163jbnrppfk.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163fxwczwai.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163xtycbqbw.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163adqzrpac.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163qcypzmyl.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163uwduaper.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163givznsli.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163eivhqjds.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163lhfepvvp.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163wfglxfmi.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163zdltrbgo.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163xbmarres.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163mcomdscy.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163xqgnaajm.html

[Q22] 排序
来源：http://www.sxryk.cn/163zfmksudm.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163ybuitzxq.html

[Q23] 分页
来源：http://www.sxryk.cn/163ghlssynl.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163iuqdktun.html

[Q24] 去重
来源：http://www.sxryk.cn/163cfikuwno.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163fdqkuukv.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163nqtmmfte.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163kwjnnzcq.html

[Q26] 计数
来源：http://www.sxryk.cn/163gohjlrlv.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163bynjmmdr.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163ughtmqgq.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163nvjglotq.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163rwqdjaia.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163dpnpatrz.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163ghhgwgel.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163ffzsveah.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163yihperdv.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ynjysqqw.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163ptzjqxsl.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163onmfgqyf.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163mfwpabza.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163vvwywjtc.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163ctbxprzd.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163vhdczunf.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163bblvcpqc.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163lwwybxnt.html

SELECT * FROM (
来源：http://www.xuanzx.com/163fzeswexj.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163vcqzghkg.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163nwhfgnqc.html

[Q35] 内连接
来源：http://www.sxryk.cn/163zgijpiol.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163cchfgudm.html

[Q36] 左连接
来源：http://www.sxryk.cn/163fpzmuqyt.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163wprmgdrv.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163kdvwyizs.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163shalblmf.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163siszjedw.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163eczzaely.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163szffxkhm.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163jyqkjrym.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163qkaydrlc.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163lslsngtc.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163qqfctilk.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163jdhougkr.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163nfrcmaup.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163fgfwgeqa.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163gotsikpw.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163fyfynbvr.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163qqhpcrsu.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163jkpyxfth.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163peivwtds.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163irndrjqo.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163spywfsly.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163qfaehnpb.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163rhfdznix.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163yhwaabcm.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163kgutmujn.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163hqewnjez.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163rxyppxbi.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163xdnqjqji.html


<!-- 参考信息 -->