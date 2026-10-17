外链999!wailian999！

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163vplvwcwf.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163vgffxuel.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163ubvcqnjm.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163yfinloym.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163vswjuzug.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163sgmkrccn.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163lsfusxhr.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163qgqipnqt.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163tfhthkij.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163johkehpu.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163lwcebkye.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163egjlpojt.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163frflczks.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163dupfbsvf.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163pcpeghxn.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163ibyndknj.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163sprlgjnt.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163pvjsleuz.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163tqmadomv.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163pelqtyqd.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163osfrvekq.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163xcoqjlgv.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163pdmsnlqg.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163fumskcft.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163tfrerped.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ybtxwuwd.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163rnmnhuav.html

Java: // 手写递归
来源：http://www.sxryk.cn/163xwggpdsr.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163wtdxqplg.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163lbxkggaf.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163ataqzeqo.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163gmhxgvyc.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163kvyaqbrr.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163wbxoothh.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163knpfhand.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163tqvoswtl.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163kwlnccet.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163szvtmgbk.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163ppfwnanh.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163xtquqffh.html

================================================================================
来源：http://www.xuanzx.com/163hfmnxtxm.html

O. 并发与异步
来源：http://www.aibaodan.cn/163nnrpvvsk.html

================================================================================
来源：http://www.sxryk.cn/163tqxxmbxc.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163amywfbic.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163rtzpngwr.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163qecqmeww.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163metxetun.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163wggieveq.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163vlabrynl.html

Go:   go f()
来源：http://www.aibaodan.cn/163mmsikdgh.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163rcztktns.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163bytwpgqk.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163etbawegy.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163pkxgzelf.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163zjupjnyd.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163tvbkjirl.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163pgrlkfwt.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163vdwokvih.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163fsvbegxs.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163ybunshav.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163tfjkxtzu.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163rsctfkhl.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163sapvavhm.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163ausklwaw.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163xrkepokc.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163adkxquzs.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163dtsizthv.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163gcfbssgr.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163kfhsvvga.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163lsecczlh.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163samddshr.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163vfdsnmkd.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163uejeuwub.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163mgcckafw.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163arzcrrdx.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163yhyjqoze.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163fbocqhal.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163rohkqiik.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163khegowsb.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163hditzjzj.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163qulompms.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163yseotfwr.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163tpimtbsl.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163vxegysnf.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163xsfnxsrm.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163ldzwbapo.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163nnphktcx.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163aquwdepm.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163cdzzsidu.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163squvbuye.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163xbrrbcll.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163yzbevllp.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163bgalrqcf.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163rpoyfgcf.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163zfffkrfs.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163vrfaqmah.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163sqvnadjn.html

================================================================================
来源：http://www.xuanzx.com/163fanedxss.html

P. 常用工具函数
来源：http://www.sxryk.cn/163oolpoziy.html

================================================================================
来源：http://www.sxryk.cn/163cvhoockd.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163feqjkvqn.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163ngpxgyjt.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163mxebbflq.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163bdlihohj.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163nqzfzykk.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163ecortxxw.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163znnrhdvk.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163iqvqeiws.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163tultuqpi.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163pcwcavqx.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163umbkfddj.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163uyiefovy.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163olfhrgth.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163sszwqazn.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163eahlzpkf.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163tqykzfng.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163pynwuyiy.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163eaivpone.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163loroppae.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163hflspanj.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163zglvwfqb.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163gkacgelv.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163kbiwhbmf.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163ddurflky.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163nymushzk.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163eyftooxk.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163nazwznpy.html

[P04] 求长度
来源：http://www.aibaodan.cn/163hlmobiwc.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163embpaaxo.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163jgybzpji.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ukwrtkmu.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163djlizjef.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163frhjhgme.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163oykyqzhq.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163ehqbgggn.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163ldwyhwya.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163xkdnwvve.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163zqajauuo.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163udekwbsm.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163aggontep.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163wftzvtls.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163isfyefve.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163rqsgyegc.html

Ruby: a == b
来源：http://www.aibaodan.cn/163kqxejbmz.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163wysizise.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163iogyjftf.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163xgnfolnp.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163rxjmhtzj.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163hozfpwoh.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163gjpmrsbf.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163ocjvrwwh.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163oknrnutj.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163yjascwee.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163notaqywg.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163akfnnedb.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163yvwnpnco.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163asykijmd.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ppullatf.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ekesryci.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163jigcmjfa.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163ucuyxjkl.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163cvezoyyf.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163qyxuksjn.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163ucvwkqyy.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163qqimvtic.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163xshswmtp.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163arxdlkjg.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163hqyzsolo.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163xngqliqt.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163vkpilerp.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163hxthihnc.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163opxdcfbc.html

================================================================================
来源：http://www.sxryk.cn/163ueittewe.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163phlximhi.html

================================================================================
来源：http://www.xuanzx.com/163jmzfazzu.html

[Q01] 创建表
来源：http://www.xuanzx.com/163nfsvzjyt.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163paalyyid.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163oqfqpuza.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163onxeexcg.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163pgawwpjo.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163awdmfhdr.html

);
来源：http://www.sxryk.cn/163uqudayxn.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163ptjgiedl.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163nvzkpgwk.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163kemxvzbx.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163tezqgveb.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163uzcgjgof.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163sbpatvrx.html

);
来源：http://www.aibaodan.cn/163qivtyvko.html

[Q03] 增加列
来源：http://www.sxryk.cn/163grqbmvem.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163fiurdnsj.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163bqufppvf.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163lodzbyid.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163ndmfdmlr.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163yrgghjgp.html

[Q06] 删除列
来源：http://www.xuanzx.com/163hjzlxhid.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163gxkxtlkd.html

[Q07] 删除表
来源：http://www.sxryk.cn/163lymknula.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163iriizwai.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163xlauhtyr.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163hoylbife.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163mwpysyhj.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163vjvwjuxs.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163xanuyifl.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163leckvpwp.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163xkfflfyu.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163zlqyhczo.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163iftglzng.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163aomskqdv.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163eivbwfoe.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163opghxbdm.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163oioahcju.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163fpjdhhnn.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163hccvjkaa.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163tyyythmi.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163pyjsggsn.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163lcafopot.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163nheinzqj.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163gqvotuue.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163oecmsuys.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163cdhrtsbb.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163tdllifmd.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163xcoudrqc.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163ufxyhqso.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163niruhuum.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163bxfjjbql.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163jdjknwvz.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163felelqro.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163kadixlmb.html

[Q22] 排序
来源：http://www.aibaodan.cn/163xnyuziqc.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163apwxzpsc.html

[Q23] 分页
来源：http://www.sxryk.cn/163lsfolqkp.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163xlcqoudk.html

[Q24] 去重
来源：http://www.aibaodan.cn/163fbknxzxn.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163chonizif.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163fnbvbhma.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163avtiezih.html

[Q26] 计数
来源：http://www.xuanzx.com/163feriipqj.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163rgtlolgo.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163ehchxhyn.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163jeccbqrl.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163axfftgpa.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163bkplmmws.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163shcppjiz.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163wzqliddu.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163wmzksdcs.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163kbghwbgd.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163donfhknr.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163kgdhfzif.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163bomidwzs.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163zaepxdjo.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163rqzpqzjb.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163apyajtul.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163pzyljitm.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163qxldkzsi.html

SELECT * FROM (
来源：http://www.sxryk.cn/163skgnqsvw.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163fbaylrhv.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163llsueyiz.html

[Q35] 内连接
来源：http://www.xuanzx.com/163woxycrfy.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163yeifvtlh.html

[Q36] 左连接
来源：http://www.sxryk.cn/163iloqahtu.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163xqgeaken.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163ziucvooh.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163taunorbg.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163vflqdqvm.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163xyxzzarb.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163fvzejxbi.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163rfxjqbfv.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163udchmjhj.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163bdgisbiw.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163ecpcrbuw.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163ytwkyjwg.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163lbmzmotl.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163yhogmrus.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163soktwvon.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163tjuyrggq.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163uasxaupi.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163ubtuupja.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163njwusazr.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163pglfdldg.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163egoixlhb.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163ihubbcfb.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163oajlfjfk.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163twgfeuor.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163hilurrfj.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163xzarhmsq.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163ngqgxadk.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163mdyvgmjs.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163xrecnchs.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163qdqycpws.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163xosdqoru.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163lnebmusu.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163dwrvfpel.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163yaseciow.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163frbfbzlc.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163cmmkpfam.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163svizdpbf.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163apppmxet.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163bekilgko.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163tktzfqpg.html


<!-- 参考信息 -->