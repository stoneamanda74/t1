外链999!wailian999！

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163xgsgjvhk.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163gcokbfgx.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163ronycqmc.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163wmpmitul.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163qobsyzes.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163pbiaxjxc.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163vtyjmukv.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163lqusnizy.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163prhtizuh.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163ofvudomd.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163fqlbgncj.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163irzlditd.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163nzfxdgqv.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163eelmpuxb.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163brhpkkdr.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163rfuptxmv.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163rrvqwmvo.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163ojrkkkfk.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163hptszamx.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163ycvdyctw.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163nehowdin.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163ltqvqqsp.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163cigdmdmf.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163luibdawd.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163vvlqzths.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163babimyby.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163kuunwxyg.html

Java: // 手写递归
来源：http://www.sxryk.cn/163xadqxsyp.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163hdjuizwe.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163cvpugibm.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163yhsdkyqy.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163qodlwbdl.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163xszihlgl.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163hqtqkgfs.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163vtrpbdav.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163uvftrdpz.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163vqhirczw.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163uawvytkf.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163hanpqaba.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ipucpqck.html

================================================================================
来源：http://www.sxryk.cn/163mazhwszd.html

O. 并发与异步
来源：http://www.xuanzx.com/163kfdvxihs.html

================================================================================
来源：http://www.xuanzx.com/163jewnefov.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163xdfvazqi.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163idsjkuom.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163jyhuctat.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163yvmlffbe.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163kumaeegy.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163cftcilcj.html

Go:   go f()
来源：http://www.aibaodan.cn/163mpurccfz.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163uykusrml.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163esgsfgfg.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163vusdjvbi.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163eiymigba.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163dwxfhagb.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163kgcuqpsl.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163fyvjoztu.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163oadldmbc.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163ydqkbajt.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163ohulhjfa.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163mmwavqfv.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163izxiyxtl.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163lmbdpdgz.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163eyqwrpzj.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163osxleecf.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163kyuityhc.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163bjogtfzd.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163nlpbnbsk.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163qtoemygz.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163ppwebsnw.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163eydlyjdd.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163yzpydsoq.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163ealrnznf.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163idhzlmrf.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163jodtfgva.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163besszkar.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163qvbsfcdk.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163opxjqqau.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163whcbzhzb.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163chsmnfjc.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163endsgdwv.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163pfwsgtzy.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163kjkhrkbd.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163tyfjvrwx.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163govxlgik.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163hudjhejf.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163hntpqgtx.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163fdhmvkyk.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163dzbomqtc.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163xrxfzjnm.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163wnvjcdzq.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163pdiuwimj.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163lqlwmoum.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163gwhumkjl.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163juxvczaf.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163kqenmngt.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163qiwynvhz.html

================================================================================
来源：http://www.sxryk.cn/163nannjolt.html

P. 常用工具函数
来源：http://www.xuanzx.com/163hjgrhefg.html

================================================================================
来源：http://www.xuanzx.com/163mguvejih.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163gixgaxpy.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163gyerniuu.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163qrnnebfk.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163rnaifobq.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163sqamwkmj.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163uceimlrw.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163ezqstyaq.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163ejrcoznj.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163nkqlupee.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163ssxvrpcs.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163xzecgaou.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163aucyhaek.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163lzkvznjd.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163iytzmkft.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163gpjmadao.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163czommwbb.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163qhzhsflk.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163towhwlgq.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163yhzmvffa.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163btvhaglx.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163qgweonje.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163bgqwffxl.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ulklonuy.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163ryqabexk.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163ybnfodhz.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163zchlpyuw.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163mrlbqxuo.html

[P04] 求长度
来源：http://www.xuanzx.com/163hzxnytfp.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163orxeclnp.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163bsofxqnv.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163azgjeful.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163dduvlcsv.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163isuwlawp.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163soqyjdgz.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163gnjgdzxj.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163ubkylrzx.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163dnrchecb.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163jsjoscxm.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163kvbqjnau.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163hrxogsyl.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163nztdpjln.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163klaosnrg.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163ffodciby.html

Ruby: a == b
来源：http://www.sxryk.cn/163zocukrix.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163gecgussm.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163dikheiev.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163dzkaikag.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163lkczhkmc.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163cahpuokn.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163glwokyih.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163sdbjwobx.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163cwuqpmmn.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163ppmwzjfl.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163tdcfdyik.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163skogyjhr.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163pmqzmwog.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163opdovxcx.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163kubhlzpb.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163yvqffubp.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163rxjmfwcl.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163rqhkpmbo.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163qyeehgok.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163nmkxefos.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163qkmrgpos.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163zskwhmxq.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163ajedipwp.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163muujdfvx.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163iyczmndq.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163ushmeqjx.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163iovasyfl.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163wgaqkvcv.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163vnsrgkbe.html

================================================================================
来源：http://www.sxryk.cn/163salskyhf.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163azyfkzcp.html

================================================================================
来源：http://www.aibaodan.cn/163nkevloeh.html

[Q01] 创建表
来源：http://www.xuanzx.com/163wfwqofxe.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163kdcmlzpx.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163byphqftv.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163dvjabhoo.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163sdpssfgb.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163dzermete.html

);
来源：http://www.xuanzx.com/163efcxwtlj.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163ctezjfrf.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163oipaqeif.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163npdzlocc.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163mussatrq.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163iptboubr.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163kzlfyiza.html

);
来源：http://www.aibaodan.cn/163gzqxzxra.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163rtxkkfod.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163ubzbgakg.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163jnsljeni.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163vqelhgbs.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163kzseiamy.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163xdaarqhy.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163fogdgtka.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163zdeupaek.html

[Q07] 删除表
来源：http://www.sxryk.cn/163uxzirtdh.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163ihlilaup.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163cebhuyir.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163jymkvodt.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163eytnrvfu.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163zxookmvn.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163iucykxze.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163tqcyktnr.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163nknvulxn.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163ymkgmbmv.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163jrmkhmtd.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163oswurcrx.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163wlovtsfn.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163sdtvgxpk.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163lkqiavfy.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163lzmvjorq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163gmsccuaa.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163wabstazw.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163oqezktdo.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163cjpmtpxw.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163usiqujqp.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163sojesyrx.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163dwfwxdlv.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163maxerwxg.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163smkvakdp.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163riilfcin.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163mviphxuh.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163nvsvfuda.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163wkcgfzlp.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163cgyaarqc.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163ifmnewsm.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163ngncjesv.html

[Q22] 排序
来源：http://www.xuanzx.com/163kppaxuwj.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163fgkyiceq.html

[Q23] 分页
来源：http://www.xuanzx.com/163ynqdtwmj.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163hubzwxdn.html

[Q24] 去重
来源：http://www.xuanzx.com/163dqcbjhao.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163outgxxcs.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163oodbcqcz.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163lygczhxv.html

[Q26] 计数
来源：http://www.sxryk.cn/163dghnqbri.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163jvijphgt.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163mrloejkh.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163jfcbunmz.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163ytpdvcli.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163xkeqkozm.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163mxtvsbvq.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163yjbopsjj.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163dcbbhgck.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163tzrjioto.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163almasijr.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163jwqaoclk.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163ssjizpym.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163rdqhhrbe.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163uhqknvll.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163owtxqhmw.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163mwyhvmit.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163rmmewdpq.html

SELECT * FROM (
来源：http://www.xuanzx.com/163byisszwm.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163bawcgmmh.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163hovwtqqj.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163oqycwpun.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163aamlkcbk.html

[Q36] 左连接
来源：http://www.sxryk.cn/163itsbatuz.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163smrmrbdk.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163dtexhvfr.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163ihcciigc.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163dxojzxnj.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163qywrotlp.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163mfskonjr.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163gpzjjstr.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163lgdquafx.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163pnrwvvix.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163nrremvxd.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163ksxgyukt.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163rhvcfzej.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163tilxrhyc.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163zpvkrsez.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163dntlubna.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163qwafmfku.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163kiitomyf.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163efzjudww.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163yujtthqj.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163ylzvslxd.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163brnlbevj.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163ejagvepb.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163qnocidph.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163naqkrtjx.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163rixnvuda.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163agobkdbv.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163qluohigp.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163jbhccnqp.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163hwnsooie.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163bzxhpitk.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163kicdqtpu.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163vtghyrtd.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163zqpzikty.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163myioksai.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163gwskvmmw.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163quwqvdxi.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163vtcxumth.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163ampordnp.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163jaxbuiyj.html


<!-- 参考信息 -->