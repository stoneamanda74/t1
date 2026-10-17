外链999!wailian999！

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163gejnegpf.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163wqhfnfny.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163tjeactjc.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163lrmcftbf.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163qftmreol.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163vuqdbiko.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163eehqogtd.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163areikvny.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163yjqmdccy.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163jqrapymv.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163iiazzdvz.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163oaggfgqx.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163ktkkhupn.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163forylavg.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163udgmfdpf.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163jjudxgvh.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163elwaucha.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163alcmswlx.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163jwndrpcq.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163ivamttlr.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163wsrgxwks.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163lmkyrthx.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163xfiugcww.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163ocuelzjh.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163urzvxeer.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163zltxezcj.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163kebaxmun.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163jhnjfvyf.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163jbitihzj.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163zicdtpfj.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163cgdntrkz.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163hwkoohze.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163bvlpotgk.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163ijxnehiq.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163yvgylyik.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163byzwppum.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163oazbvvxj.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163nxhmcgvz.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163flqeirqp.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163jvkskyko.html

================================================================================
来源：http://www.sxryk.cn/163oiffetaq.html

O. 并发与异步
来源：http://www.xuanzx.com/163qafogcod.html

================================================================================
来源：http://www.sxryk.cn/163ehquaqkw.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163jxhfibbn.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163jparwogw.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163jdxinwvu.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163eyxtfiey.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163hctfrony.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163cnjvayat.html

Go:   go f()
来源：http://www.xuanzx.com/163nptgpoxf.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163scztzkag.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163qvgjecqz.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163mobkbsgj.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163qhddnshc.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163iabkaaht.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163vzignotn.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163rauiaffb.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163zurtowgr.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163gblbffsm.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163zwngipfl.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163xswlivkr.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163xwlzubwi.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163uiwfrknp.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163rirftdfj.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163avvigfnh.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163pynyehja.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163seyhezug.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163dptwltqm.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163pzxrqixh.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163lljixndu.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163bersyzfd.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163rifyugbm.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163xywejkae.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163bucuosah.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163llbgzoah.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163rnremyld.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163hhgmylvm.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163ytuyljal.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163gqgirpkk.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163bxdqiumu.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163dofwzljd.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163tvwuxlhi.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163fbqzgavo.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ocbxrmyd.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163iibrsjoh.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163kqnisgth.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163iflzkacs.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163izkpkapw.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163cisrgqtc.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163owciejho.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163orjwtwcc.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163fbnivhll.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163hcerpztm.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163hjtfsdgw.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163itwuvdvg.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163gcarktol.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163svdxwpug.html

================================================================================
来源：http://www.sxryk.cn/163vhnficbi.html

P. 常用工具函数
来源：http://www.sxryk.cn/163lspxhulj.html

================================================================================
来源：http://www.xuanzx.com/163uobpsvbk.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163ogxfapih.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163yyaopsem.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163jgvitpxt.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163dtoqsxtx.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163tqnhnzra.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163wcxmkqcx.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163txsleygc.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163xwyfrbwy.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163minlqzjt.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163tgmarmlj.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163htewivbj.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163mvpzluff.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163fzsrlxhd.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163uosizueu.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163jnyljhnz.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163coegbvwe.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163wolkitlv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163xuezvkdj.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163nhcmihgl.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163ypzpzyqn.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163paxpefey.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163rrzeuvtq.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163voqnnrgq.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163zszvyzbj.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163dlhlpymb.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163swcwvnba.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163nnvkhnrj.html

[P04] 求长度
来源：http://www.sxryk.cn/163icmhpqto.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163othbgggf.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163jneddsia.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163hnajitgf.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ldfmgzjw.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163oacrdwkk.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163xdquaeim.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163manlutwm.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163solmvccg.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163usfxaaqr.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163jfjcavzz.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163plpuxmca.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163iukcfngq.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163bdowgemv.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163vtqwlrtu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163ykhubxuy.html

Ruby: a == b
来源：http://www.aibaodan.cn/163cgcjozkl.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163xvegbunw.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163kpjgiqbb.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163jnpslgha.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163mncndkfe.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163kzmxraew.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163qzphsuwm.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163ciriyxhg.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163suhhnejm.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163edmxsvpc.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163vgsicjgh.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163iejmumpx.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163qsarqtcz.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163ncuzpdmt.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163kdimwuln.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163frxbxbya.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163xtfhqydx.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163dqyjjblf.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163fwwmhwek.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163ovzlasmu.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163zjtsuodg.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163amvnbbjv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163xoaerbxm.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163rfscurwj.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163mopbjiuj.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163xhhxudtn.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163zgegctoj.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163syebfioi.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163fozwrfew.html

================================================================================
来源：http://www.sxryk.cn/163gcclearz.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163lqnfdlwb.html

================================================================================
来源：http://www.aibaodan.cn/163joxaenvt.html

[Q01] 创建表
来源：http://www.xuanzx.com/163dkndoldq.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163vrfsdccs.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163iicxxeao.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163vdiclzys.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163vgoaeeqe.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163tmentrwq.html

);
来源：http://www.xuanzx.com/163upxdgceo.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163xckhjsyp.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163nbfafkyl.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163zwfhnbyr.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163xugvwbuw.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163qwkdhfnj.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163ggraeyqc.html

);
来源：http://www.aibaodan.cn/163bxhhjcff.html

[Q03] 增加列
来源：http://www.sxryk.cn/163myxdtdxw.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163oyhvrbzt.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163tleflrwy.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163teyujntx.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163afsbkuwg.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163qniwivhv.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163uzlmqnvk.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163pkdkxtzp.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163gtuockhm.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163aqjaxfdr.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163xsarcast.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163lbdzoiep.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163efuoibaq.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163idynvaju.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163wyybcibm.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163xqaclxlx.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163dcdhdihf.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163cflwighb.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163lgynvkcd.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163bxxlzqvl.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163luurwtef.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163pvnvllhb.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163calasfut.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163hvfhlcok.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163qamskhrs.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163bhiqzurj.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163gqpimmzh.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163uezdprov.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163muglucub.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163ufjbvhlq.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163zpfdpjyb.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163lovhkayq.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163nhpruoom.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163dktljoks.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163bowcueeq.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163dladrzlp.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163zxfphbmq.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163ucugyagw.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163lvxjhadp.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163bpzpiwnh.html

[Q22] 排序
来源：http://www.sxryk.cn/163fzauxidf.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163yuaagisa.html

[Q23] 分页
来源：http://www.aibaodan.cn/163meqnorxr.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163xiiglnjx.html

[Q24] 去重
来源：http://www.aibaodan.cn/163jwrodmyi.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163gtlztkem.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163hddoaqrl.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163zfioaepx.html

[Q26] 计数
来源：http://www.xuanzx.com/163fhzjjxlu.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163nuelvjin.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163rydljdyn.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163avzgucpv.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163dhcfuxuz.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163ydrptpzc.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163ktqxlkvb.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163zhaqefuw.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163aercxsgw.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163onrqzrcx.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163stlgcomu.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163ydanpplz.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163iqshqwil.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163jjfozfdf.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163oatgnbpr.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163udjmwcaj.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163klupwkvs.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163jnieazza.html

SELECT * FROM (
来源：http://www.sxryk.cn/163pccfknoh.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163dsoeokht.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163yhzcpqay.html

[Q35] 内连接
来源：http://www.xuanzx.com/163fihchbda.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163uuanheua.html

[Q36] 左连接
来源：http://www.sxryk.cn/163cfhbdkqe.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163uxqnkmpl.html

[Q37] 右连接
来源：http://www.sxryk.cn/163vjqebdqh.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163xbrbehua.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163ulsexdlr.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163xtymgeer.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163xlummryt.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163pzurydkm.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163omffxfsm.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163mrvgivwc.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163prccbqsu.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163jkskrtxy.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163jqzgvwdy.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163alchqivs.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163axmwsslx.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163fnnuoroq.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163hwkfhesr.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163ilkfzpcf.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163amlieuza.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163cigpakvb.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163nluuxtwe.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163ifsrajwg.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163tcirwgcq.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163iyptjfvw.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163snjofudk.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163txjkjqxg.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163ewshnzyo.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163kmpeozfm.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163tsidjpew.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163dqeajtfk.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163baggjoga.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163lqcrqkvm.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163dcvtsurx.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163pjdrkxoi.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163rtcyutit.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163mqhkjvlf.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163zcckthnj.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163hdfuyhsf.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163hhxewutb.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163xojbgthf.html


<!-- 参考信息 -->