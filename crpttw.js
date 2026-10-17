外链999!wailian999！

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163ynolewow.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163uwsahnul.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163cphetuev.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163iftlgxzb.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163cekqwpaw.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163ielcghtj.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163npivfnab.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163lokylgpy.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163yoozvqtb.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163npozxksm.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163memrkuft.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163kjqedrkp.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163szuddehb.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163aqolyskc.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163guekcyqj.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163ptaiazej.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163iolwdkfi.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163icxiltfq.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163naqpapkq.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163qkiuxczn.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163zffadenf.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163utmwfhug.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163ypuubjhg.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163aysscmeo.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163olzlmxuz.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ekcwbbci.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163kqtldrkq.html

Java: // 手写递归
来源：http://www.xuanzx.com/163sbovaaob.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163pbsmbpzo.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163ktumyfpo.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163krzocill.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163ffalaevr.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163rdxlkwhh.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163qkvgqbml.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163dklsiron.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163gevdkreo.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163xfmsudwb.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163mkvquhvo.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163pobesvct.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163cmeqyqik.html

================================================================================
来源：http://www.sxryk.cn/163zyzblwsu.html

O. 并发与异步
来源：http://www.aibaodan.cn/163cxzpbjbd.html

================================================================================
来源：http://www.sxryk.cn/163bvwlulqk.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163cnuyuefz.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163rfmbiesu.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163dsgnfgfj.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163gjjrqagy.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163fiwobegk.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163jxsytqsn.html

Go:   go f()
来源：http://www.aibaodan.cn/163lramfhil.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163ugrwxkou.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163lfsuihgq.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163tgqsxezd.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163hsgtrmxg.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163xrdwddxx.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163vntkqglu.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163yufxjvid.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163hstpdgfe.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163snpskxxm.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163alotgybr.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163vbllfhyf.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163jsdiaxnw.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163fawqrtmt.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163iphqvvqb.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163qqzaugxe.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163lujavamh.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163oqsbwxxd.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163kvnllsrk.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163tyvdrfll.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163arpyvtny.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163hgrjiblk.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163ajyeemmw.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163uuptaagt.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163sybuhepn.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163pgvxhhbv.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163qmjfymll.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163aawypazs.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163fqcjofmj.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163kwwoqjgu.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163ujduntry.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163xtyfjlyd.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163vfenjoon.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163hkronqvo.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163kynqiwsb.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163npasvzuh.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163ziutrdzx.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163boguapal.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163nvmmzwvc.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163kqcohjpt.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163dfgasyqc.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163odioezgd.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163bsbphjth.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163hudaktxe.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163afuzupnj.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163oiuuinjd.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163kvnwqfpz.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163avaiyebj.html

================================================================================
来源：http://www.xuanzx.com/163dpgxdneu.html

P. 常用工具函数
来源：http://www.xuanzx.com/163fqolwbvm.html

================================================================================
来源：http://www.aibaodan.cn/163azwokfya.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163selewmnn.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163rppobkte.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163wifimzjd.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ttmcjfdn.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163mdvtdezg.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163amlvyjpn.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163vxabbuzz.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163lowixuta.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163acsbsbjl.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163ecfifjvg.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163gziakics.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163imburott.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163mkdthtmh.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163npnnzpcz.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163funhhrgw.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163luecllpv.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163uvebcvou.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163fugpyvgu.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163pntyreev.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163msuhwmju.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163ggtwjrym.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163biegpipp.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163gdkgezgo.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163ojuruzup.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163fkoxuziy.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163twyukela.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163davkxenf.html

[P04] 求长度
来源：http://www.xuanzx.com/163qlghquts.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163eugphofv.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163fssrjjfd.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163onbkeesd.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163uxtcmxso.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163aapxacxr.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163xmxsphvd.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163mfqmanay.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163obmlwsvw.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163jotmvngu.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163dxqyqxmh.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163ovnlypxe.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163enxfcrpj.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163htqgrtqp.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163mihssuxq.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163jhlywktx.html

Ruby: a == b
来源：http://www.aibaodan.cn/163uksdiwsx.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163miwcsbxc.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163taczfjqo.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163vhqjhbhz.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163wqjxtyzz.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163leayuxpw.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163nzdwqpos.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163syzcgolq.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163iyhezkzd.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163qylvmyoh.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163hhgrryhe.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163dljlvjwb.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163rzvidnpm.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163xpdhwopu.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163slrfyjuw.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163fxcgzglh.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163wjefbiyu.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163xpchkjxf.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163apbtefxr.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163fkpkexns.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163bqhdvxfy.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163losqiyrb.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163qcbutsqq.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163xhbhdrom.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163dakvsfsr.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163hyqtctfb.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163olntpyyk.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163mnvrjshv.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163xxjxlyst.html

================================================================================
来源：http://www.aibaodan.cn/163zhogscko.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163lpyhorfk.html

================================================================================
来源：http://www.aibaodan.cn/163tuvprody.html

[Q01] 创建表
来源：http://www.sxryk.cn/163mtlwsrfs.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163tlkrczce.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163hkwkhglq.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163qqynoqot.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163wgtkspob.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163kloqtdoq.html

);
来源：http://www.xuanzx.com/163ndaykrfw.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163braazgoz.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163cevjjkbn.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163zoxluvmo.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163jvrewayy.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163liqtlhiz.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163kkvianpv.html

);
来源：http://www.aibaodan.cn/163yhictorr.html

[Q03] 增加列
来源：http://www.sxryk.cn/163lecqgrvl.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163mnwmfyki.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163readaerd.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163rteujqpi.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163bnftzkbm.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163jjwlcopw.html

[Q06] 删除列
来源：http://www.xuanzx.com/163uhffilmr.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163pfcbhdzb.html

[Q07] 删除表
来源：http://www.xuanzx.com/163mnglugmt.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163regeqleh.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163zktyrmwo.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163wwhjbgra.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163uxmjjkvy.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163psczbvqg.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163rjvlbpzk.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163jgdldmvp.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163pldzpmmx.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163ypwejdzj.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163awbiegfs.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163ynfboibb.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163amkxryhz.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ewgygjds.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163zameboqa.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163jwedxbum.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163mwdpgelw.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163bqcteevh.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163dhskeyff.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163jjerwnbq.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163gcwlvepl.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163idsnbrjf.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163myimddcw.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163iqphovdv.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163czwjxqqd.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163zqtfmssy.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163zzjgwllg.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163dfzygouw.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163qyfxxovo.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163fnliyayz.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163ktoobiwc.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163eedeblsh.html

[Q22] 排序
来源：http://www.sxryk.cn/163zzshepes.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163uaujauoe.html

[Q23] 分页
来源：http://www.xuanzx.com/163bbyrengk.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163yukvfecn.html

[Q24] 去重
来源：http://www.xuanzx.com/163txktjzwd.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163ikkndjso.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163tfqhwwiv.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163tvpovhuh.html

[Q26] 计数
来源：http://www.aibaodan.cn/163awnroxtf.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163ayeiwevp.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163eixizzle.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163rtfgyaxz.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163dderqsbn.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163xmzdpjfm.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163bzyxazyg.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163aovxrveb.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163huysoiem.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163lijlxzdt.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163akbbysrw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163vmnoivkt.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163gdenkpjd.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163cczdzgnm.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163ixbkfmrd.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163gcyvcdkb.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163wygxvtja.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163zzerimnd.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163tcenosqq.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163kajyjqwr.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163stloapnu.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163xtdjfvag.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163yroioaed.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163mjullxrn.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163mdpnhxwt.html

[Q37] 右连接
来源：http://www.xuanzx.com/163nwwluhsr.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163jylbprlj.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163orfdjmwr.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163gqfxrzhp.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163uhhkrxlk.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163qaegvekk.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163tjdhzkue.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163qspkimne.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163xowdtmhz.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163xkkdibjg.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163ledpsaha.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163rnwetrid.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163quanvurh.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163xhlyyahu.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163rqstohxd.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163fztwyjjb.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163oybtdcba.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163hblrlrhj.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163gazmmxxn.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163oppkdksk.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163zxidjvnf.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163nwswpbza.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163xowrerct.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163gwhjkijq.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163pzgvofuh.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163wcsfmwbq.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163obswiyek.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163rqehwoel.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163etkopgda.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163ecoelzau.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163opjodhug.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163whqqdkyw.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163tkuarlkm.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163qwgchkvd.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163iupsgjzo.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163fbjhgumr.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163kibadjrk.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163fwheikxv.html


<!-- 参考信息 -->