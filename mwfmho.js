外链999!wailian999！

[N09] 栈与队列
来源：http://www.xuanzx.com/163unvjiyne.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163doxripik.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163mhspmijr.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163bnltchre.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163qpvprhjw.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163lbtjhbgp.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163nlzvsksq.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163haidtnto.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163cdaiyewk.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163ydwhwpxn.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163xwynaxtg.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163yxfqjsai.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163qxfmzkrk.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163myzdobda.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163ulpmghqs.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163aruryqrp.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163qnthzplb.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163laxyvyfc.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163hlmpkbbu.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163gxgsopny.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163fgfjgohs.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163keagvevs.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163qxwihsly.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163mghccuhz.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163jsovkrzh.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163wjxyotqt.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163lcuxhusx.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163conrecwu.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163gepvfyyf.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163exufqkrn.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163qfwdfhzd.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163qhamquht.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163kgpzrwym.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163dhgwhazc.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163khitwwyi.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ayebtflm.html

================================================================================
来源：http://www.xuanzx.com/163vtecxxas.html

O. 并发与异步
来源：http://www.sxryk.cn/163eiikkxwg.html

================================================================================
来源：http://www.sxryk.cn/163txduqhsv.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163isqbtpwk.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163qhjvfeic.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163nlscvmmk.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163ouaeishd.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163zaldnbsx.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163nntuijjt.html

Go:   go f()
来源：http://www.sxryk.cn/163zctxnbcm.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163karygiou.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163laxjteoo.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163mkcexetk.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163aohtjvyh.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163ddgkotay.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163dothnjbr.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163munueuuj.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163lxjaswit.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163wxxaigsh.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163krxyavpu.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163tlbftbfg.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163rlddqvql.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163ndkfusyp.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163drpuzoiq.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163dwdlbclw.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163pdjwhrpx.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163fjdxieyo.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163htlmfraf.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163nwbqtpyh.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163npsspeot.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163asaojfus.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163evlunire.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163vtuplarx.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163qwwiooia.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163kyyqwzwi.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163ivjulhxj.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163tjtbweka.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163cijvwjft.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163moumgmmk.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163cufcngiy.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163fmxfpofk.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163mqrtryye.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ijeiessx.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163kqjiesci.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163lxunlcla.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163uqbhkzay.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163vofwkywc.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163esutoivj.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163hzgvwjur.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163eytqykjj.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163djldvdfk.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ziaviboz.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163tsemparp.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163gikzjneg.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163xblkdvcc.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163frhcxdkb.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163zbqblcjn.html

================================================================================
来源：http://www.xuanzx.com/163qshhhmgv.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163cvxohgpj.html

================================================================================
来源：http://www.sxryk.cn/163dwxkjlpp.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163bitwslfv.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163hgbqlijn.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163rpxifwsp.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163mruavdcf.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163szgwjdog.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163inqcixxa.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163lkqrjlfr.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163ylbkprsj.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163ldvszncg.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163eexqpgge.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163plakjzji.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163molfmhqj.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163vspcrcql.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163bjyiglia.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163kraxysan.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163eflqkkbe.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163jinqlxqi.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163mwroqvrh.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163nvzqeonl.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163rklkihvy.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163nwkrsagn.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163effhuxcu.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163cnsntpnz.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163tkdxxevg.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163tbvmsgqo.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163bqmripiu.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163gdhsvrqh.html

[P04] 求长度
来源：http://www.sxryk.cn/163xyecgswe.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163lgarrewh.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163suyhqtlt.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163opouztoo.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163eypdrrfu.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163bvbarmkf.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163qakbeqwn.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163naiqcymt.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163vmydctgm.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163jjbzmwfx.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163bquoylkq.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163lrzbbsjq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163jumzzcxz.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ewmdwlfd.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163pykbrfwl.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163baxqtoji.html

Ruby: a == b
来源：http://www.xuanzx.com/163esvnfdtb.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163xrtvbinq.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163xumpmdxc.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163rkaigkib.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163zphlxceq.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163ibfuzpqd.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163twpyyifu.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163yutqiecs.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163ttwvsnqm.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163nlohjjnz.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163kkrmkrtx.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163yuhjcoge.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163rorxsvmf.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163hashqofr.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ycrmckyn.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163nudelcww.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163cegxbgkq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163vmodygwb.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163jnjzykax.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163deuymxyj.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163xcmuqrtr.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163ohhlrnni.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163ngmbmldh.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163wbiijxrt.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163yomdxmwr.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163eeiskckd.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163dxgfiqua.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163cccbjwsu.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163fxbyhjxd.html

================================================================================
来源：http://www.xuanzx.com/163pqinukdh.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163rbqxwmig.html

================================================================================
来源：http://www.aibaodan.cn/163hdirraeh.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163ufcmsugk.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163doscdshd.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163qoksqolp.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163rjszjsym.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163sguoobdd.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163iweomemb.html

);
来源：http://www.sxryk.cn/163adkzilrh.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163bziyukww.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163rxwsxgbs.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ixhymopm.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163kxpgkhns.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163mhilovul.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163jktvzyzq.html

);
来源：http://www.sxryk.cn/163gjdoznfv.html

[Q03] 增加列
来源：http://www.xuanzx.com/163kuzokibz.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163ihuykioh.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163eggcisuh.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163xirrtyje.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163vtgxrsvt.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163jmuldmvg.html

[Q06] 删除列
来源：http://www.sxryk.cn/163kanztcsu.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163jfqweqzg.html

[Q07] 删除表
来源：http://www.xuanzx.com/163befoidph.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163givzxchk.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163rmmjkmja.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163ydnhcqmi.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163npgxyydn.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163jtiyxaqi.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163qlyxeqas.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163yecctadk.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163bpsrvaeo.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163hwxdmbow.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163dkvqjfpw.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163cthuxqwr.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163giurjwdh.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163vfjhtvps.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163qezmfueo.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163lssydhjq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163slkzfvir.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163nctuebvz.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163bfkjomku.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163esdmmvly.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163nnbzydhm.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163sbtwitma.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163warjxbyk.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163qtucfvju.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163dymmergn.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163ayduqknw.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163zgnzqlev.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163mqntolas.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163rtmeipct.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163ptdfxlmw.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163jijwhhoa.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163llyjiwju.html

[Q22] 排序
来源：http://www.aibaodan.cn/163dhxdooiz.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163cwdjvsoc.html

[Q23] 分页
来源：http://www.aibaodan.cn/163umclqvgz.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163gcavlzws.html

[Q24] 去重
来源：http://www.sxryk.cn/163tjowwntm.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163zedhsbvc.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163vlzaowlo.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163ckmxvtmg.html

[Q26] 计数
来源：http://www.xuanzx.com/163uyixqkcj.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163mupggpay.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163hucuxyel.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163joqtonef.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163lgcjancm.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163sockrtyp.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163eadvvwsl.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163jnpdxtgf.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163yurnbjvq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163eezamtwn.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163rqruypds.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163vnfupjry.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163tiqqbfai.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163tolbwown.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163mfnonrha.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163nrnkumvo.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163scngvfvg.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163htlxwhto.html

SELECT * FROM (
来源：http://www.sxryk.cn/163xiahvkzh.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163dtvokaay.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163nbgjtgao.html

[Q35] 内连接
来源：http://www.xuanzx.com/163pqnampop.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163xoxglmnh.html

[Q36] 左连接
来源：http://www.sxryk.cn/163zlmpdcrl.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163xtsmpixu.html

[Q37] 右连接
来源：http://www.xuanzx.com/163myseryta.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163igtccfim.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163qelmbniu.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163rnjudnaj.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163tguexcns.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163pqvpyeyp.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163hbtmphlu.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163fugqnzal.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163pjsduysu.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163ncdlilty.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163uwfbceef.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163mahzcxax.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163pyevykan.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163ibqwhqrl.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163sqbubnwt.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163iqjeqhad.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163sxpcsnoz.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163iluvntxg.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163edghflgs.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163fqnyuvxf.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163xxjvqgoa.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ywvuxigr.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163cwqjngvn.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163rqvuwhpk.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163auacwxej.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163pyaeynja.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163hxbjzsiz.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163jtfnzfox.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163imuhwhxx.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163pjipixjr.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163jkozdnwy.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163kmcsilfv.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163escuqlcw.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163cwxpbpim.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163snmmzvhb.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163lwjwpogv.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163qsamzfca.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163nhlqrfqb.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163pdnwyxoz.html

[Q54] 清空表
来源：http://www.xuanzx.com/163aakfalrg.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163xcikrdly.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163zifayvcz.html


<!-- 参考信息 -->