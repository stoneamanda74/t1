外链999!wailian999！

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163xrhicibj.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163zwuwczun.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163qgzhifyn.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163qayvlptt.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163vkzxahnw.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163jzwlxxbc.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163mjbesqop.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163xptxypqx.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163fnzpifzf.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163cjqkkciz.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163tuagsflb.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163tquqhwfi.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163cnnxcjky.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163nsdbtdyu.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163vwtgxwrn.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163migzbply.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163lwohgfbh.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163szgepdcn.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163ninpnyaw.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163yvsevsms.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163cduxpfen.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163wtabuskv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163ddpoxjbi.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163psglleoo.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163whmzidbm.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163bqjdglps.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163axrjxlvb.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163chnhmfdy.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163rvmbtuzr.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163glyxlkbi.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163ippylwwd.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163vhteqtys.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163wqggnkad.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163jgwklrzb.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163lxtchvfg.html

Java: // 手写递归
来源：http://www.xuanzx.com/163ckdnwybt.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163vbtqmeaz.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163sbjnyoww.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163wmbxcdue.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163oxrvhfyl.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163bohywbrc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163rdmvvpxu.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163eubeeczz.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ktxghcrz.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163egflbpya.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163ezezgpxc.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163jcphmrum.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163xgqoyoya.html

================================================================================
来源：http://www.sxryk.cn/163bldbiwdk.html

O. 并发与异步
来源：http://www.xuanzx.com/163vzocbobz.html

================================================================================
来源：http://www.xuanzx.com/163ocgzmbud.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163evrcjnjz.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163jjjplrch.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163qpdyaoup.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163hbzveaii.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163rlpcojpx.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163ggsuvhas.html

Go:   go f()
来源：http://www.sxryk.cn/163czizpube.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163qoitabwu.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163qnsbjikm.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163sfruwxwx.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163vurndocj.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163qqioysdp.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163tqpvvdkq.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163enjibpib.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163azgntzxb.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163ayrxxbas.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163anymwupj.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163nhgmeqyf.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163uoecdyxs.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163itwevfqy.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163lmfgclan.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163umtiuekd.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ijpxwnhj.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163wlrzvcrj.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163yjpjdeie.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163hrxcvmrb.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163cptjmegq.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163ltitjcec.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163kkuknycs.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163oinlmyxk.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163mcaxvzyi.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163pdrffems.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163yqcrdsrj.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163afenysjh.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163ghxsvhfk.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163tqfuwusl.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163jgjauiep.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163qafxkzpb.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163xoechjpp.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163mnqmnmqs.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163sxhsvifz.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163hcemxhus.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163oivjtjvc.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163knhbfxgv.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163hgwttram.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163tqwvimyk.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163hycoedfy.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163owaupkud.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163tmwdzbbv.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163tnsvtfsj.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163tuodgaqx.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163ogktolyq.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163budxsadj.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163ruhvjlao.html

================================================================================
来源：http://www.aibaodan.cn/163qmmswywd.html

P. 常用工具函数
来源：http://www.sxryk.cn/163jrutracj.html

================================================================================
来源：http://www.xuanzx.com/163llvaeqya.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163ydxicobn.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163yajfgehk.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163mtzzvfgb.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163kmauzyhy.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163mtesqlel.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163dbnaqsly.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163dwoalphm.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163zkyxunfh.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163vbclvxgy.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163wkhwvrec.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163dndnygyy.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163innwyheb.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163wfineyjq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163dlwomzgo.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163dpomcxwb.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163uphrqvjz.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163xyyziqjq.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163cihkdizf.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163rfgncgrw.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163saplssqa.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163ewjspuxq.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163tgybyqmt.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163rdclbqig.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163lasxtbbb.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163ltkmmtsm.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163fmpawjxa.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163bkhzingz.html

[P04] 求长度
来源：http://www.xuanzx.com/163rozudsvt.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ikqedeta.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163rgqvqbrz.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ezthltrh.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163cueobucw.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163gfvxgwxm.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163odgwrjbm.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163lggrimai.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163qhuagivb.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163fvzhdlrn.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163gvekcnrn.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163gijtbfav.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163dgswxkxe.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163dabsabfu.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163chbrcwch.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163uarryuen.html

Ruby: a == b
来源：http://www.xuanzx.com/163yrhykoer.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163oyiqkdom.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163evpmmegh.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163fkxkvgvs.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163phrnxgyi.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163iebqoesx.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163ajoxpbfl.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163rvcqozyd.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163uzcyhrvs.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163uppugskk.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163uhddllrs.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163vwtullzi.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163wlerrqfr.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163nqsrresi.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163nzklfwcl.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163aeqhmmas.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163kelhvrtu.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163otsengkt.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163tydgiswl.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163svsqvsje.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163nxwcwgad.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163tdmaoggr.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163lprmctjj.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163ivzbhbxf.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163nurirfcz.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163ngwpnppc.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163juopmcnd.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163kazjwmju.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163lelnkftc.html

================================================================================
来源：http://www.xuanzx.com/163zysahlwf.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163iimtgive.html

================================================================================
来源：http://www.sxryk.cn/163vojangbk.html

[Q01] 创建表
来源：http://www.xuanzx.com/163zsvtfkuq.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163ujtipvfi.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163upywhrjc.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163jvgvltec.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163gffcgnsb.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163vbhheusj.html

);
来源：http://www.xuanzx.com/163vzzygwpg.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163mimsyhhr.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163yhsmzuty.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163rspxtahe.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163ivfievgy.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163ickhxopy.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163aigyakzl.html

);
来源：http://www.xuanzx.com/163rgowpqit.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163jdpqbfav.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163lgcvsbbt.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163lqxudzqp.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163tzxsqmiz.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163ppgwwxof.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163rggvvorh.html

[Q06] 删除列
来源：http://www.sxryk.cn/163tvglajyl.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163kusnlujb.html

[Q07] 删除表
来源：http://www.xuanzx.com/163hwaqumvx.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163dyycijyt.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163fvsbouxe.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163abrlaazn.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163mitkpxkd.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163jdteqhix.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163jdapxjgc.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163kulifbqm.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163qkmioruy.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163jakaeesd.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163xkpivdtq.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163fspgebko.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163fexbczvt.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163byxnnnvc.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163wvsosqky.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163suiezvhf.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163mmyjecoj.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163axebvdlk.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163wbsmjrel.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163mrxhjbuh.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163qzunhyis.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163ranavkpr.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163wmxthtjo.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163uvoyjpzq.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163hrqaazqp.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163lgvaujdq.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163xiecewqd.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163gxqensra.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163dynkjhek.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163efcqgljh.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163quphwido.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163bmvhjabs.html

[Q22] 排序
来源：http://www.aibaodan.cn/163kjedpdmq.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163wbvlbhtb.html

[Q23] 分页
来源：http://www.sxryk.cn/163zzqycpvq.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163lrgenfgc.html

[Q24] 去重
来源：http://www.aibaodan.cn/163jbewfqzi.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163rxmuazvm.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163tyuilojs.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163lbzcexlk.html

[Q26] 计数
来源：http://www.xuanzx.com/163sgpzzfkx.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163rzqknatx.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163svckrfbt.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163iixridvz.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163onmomzeh.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163ntonjwdn.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163nxzbdqdo.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163glvaftoq.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163rhxlvpod.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163mtbpjxwv.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163aqtgmndw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163hknkzdzv.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163djipvrcf.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163cdrfesdm.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163qwrygvcm.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163frbrjmrz.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163atelulfj.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163xhueoqxe.html

SELECT * FROM (
来源：http://www.xuanzx.com/163vwwwtrou.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163hybbvwrx.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163etkjasrb.html

[Q35] 内连接
来源：http://www.sxryk.cn/163pupatylv.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163sfmxwbgu.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163ttfuehlu.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163sfwbddzc.html

[Q37] 右连接
来源：http://www.sxryk.cn/163kpegikqu.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163pklyxoun.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163otwwbjtj.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163xwwvuzni.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163lnyrucun.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163hdldihmz.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163psrblhtc.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163rqeiprpu.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163gcnadhzv.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163kinwmpti.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163bwppkoro.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163pnvisfbb.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163rjlktmrn.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163kflgcbto.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163vmawosgu.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163amuzuxuo.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163alcbpbny.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163lgvjuixz.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163zvtfmelq.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163yvdkhiwf.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163tsukrhkx.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163xxuughts.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163mzadmwwk.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163tuubskuh.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163imiumntl.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163illwkbcc.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163tttffeil.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163pvcrvwpp.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163oyefruby.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163tgwjjzbx.html


<!-- 参考信息 -->