外链999!wailian999！

[N09] 栈与队列
来源：http://www.aibaodan.cn/163wfrrajge.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163vkpowydg.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163ldnkavly.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163wjsjmeya.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163zodurkvj.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163cfjnhnbm.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163flemebhf.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163mnijdqds.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163szlsxcah.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163puchvghl.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163xipzaasq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163fwxinnex.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163ehljfnvn.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163qhbiaqxx.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163taanfohm.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163prjbxvhi.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163xwzqduaw.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163uqgxiscg.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163szighjur.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163ghsfmavy.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163dveteqbf.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163iiodtorp.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163khgtnuch.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163azhvdcwh.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163xgnogbyu.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163hjdijgys.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163ysnjolwy.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163reibrnqs.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163flobszim.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163qksmpuwv.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163kqsmeszg.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163spmhuqyb.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163whmekmgy.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163gybnvoop.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163szlysgpy.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163thwwtdzo.html

================================================================================
来源：http://www.xuanzx.com/163vcxwyxne.html

O. 并发与异步
来源：http://www.aibaodan.cn/163pvbdxqjp.html

================================================================================
来源：http://www.xuanzx.com/163fmybcebh.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163nhrfcxzu.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163uypsjflg.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163njkthmxu.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163tspquidu.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163fxmogjiu.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163jnlmwepq.html

Go:   go f()
来源：http://www.xuanzx.com/163pgcbbtry.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163bunmnxdj.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163qwtmabew.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163ueqdzurv.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163fhsdieai.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163crzvzudd.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163mbvqdorl.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163qbdsmesw.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163klvucpzy.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163wienaubp.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163hfmcntds.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163mpcewboa.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163kqhfpfuh.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163iudscvsj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163qqqfsewy.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163odfjxlzo.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163hledhpci.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163ilguqzej.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163djluoall.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163rhdsjqwk.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163cthrueyy.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163hdulfmoc.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163esccmlep.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163nvtewbac.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163azchfrix.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163oqmdbsdw.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163rafpxgjy.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163pdomlvpn.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163wrzojafu.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163puivvgoe.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163lvupwjct.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163udcelipe.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163brorteou.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163foxrvhqf.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163efeoggxw.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163vvtrrfpk.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163vxuxpggd.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163hescofja.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163qszbwrni.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163baikpoqj.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163syidqsfy.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163dibffzrx.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ucokvqgm.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163nzkfeyyi.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163oldqqjqr.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163inonglqy.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163sbzjdnex.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163fhdpmmtf.html

================================================================================
来源：http://www.aibaodan.cn/163bfvwpdwv.html

P. 常用工具函数
来源：http://www.sxryk.cn/163yeiinpze.html

================================================================================
来源：http://www.xuanzx.com/163fyfwwemh.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163xsfkuqpc.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163qfxazoef.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163dpgylngy.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163qzmluflu.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163oatvaaad.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163dimoajfw.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163vdiyeozy.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163zennkjge.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163hctvrben.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163bpzyrkcj.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163vtupypfb.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163mhmukaht.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163gpxpuvny.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163yurrzdeo.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163udzjsxfy.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163zwtrajvt.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163mfyibcfm.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163mtxznvzh.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163fkibdlmc.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163fkoocqkb.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163pxivlgrj.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163yfqlabjt.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163wkpsanrm.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163kqlstqfz.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163rhsvsvef.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163covzzzwo.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163eyheqrna.html

[P04] 求长度
来源：http://www.sxryk.cn/163hzpdwubs.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163qolzeelk.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163kcxlmhwv.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ilqxsayx.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163qdhoiqmy.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163cvrdyzot.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163eiixhgrc.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163sgushxwh.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163edyukaky.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163ypistqwz.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163gvsuwslv.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163cqemiyku.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163turrzthe.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163mjujzbdb.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163ohpceqia.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163ucgxquke.html

Ruby: a == b
来源：http://www.aibaodan.cn/163atqalkol.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163jbwdaquv.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163lbrelbsv.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163zoknpbwo.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163yrilxktg.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163mnljxmrp.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163alqpomzi.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163zboyzcme.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163ujbzykix.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163cnyypruo.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163nxxkspig.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163usqbjphu.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163vagrtnat.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163izrizolg.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163blxmjesq.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ugivwkdc.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163feysoahq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163vpjkmvva.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163axhizfsv.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163dykyvxwu.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163fkmoxtef.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163kfojajne.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163dpfdmqfo.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163eiyztmtk.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163uezhhueb.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163plclaeup.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163khwwkxrt.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163xynlcegt.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163zkegeptd.html

================================================================================
来源：http://www.xuanzx.com/163mzjqtgni.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163mdgjglrm.html

================================================================================
来源：http://www.xuanzx.com/163awobiypq.html

[Q01] 创建表
来源：http://www.sxryk.cn/163upmsvxez.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163nlsspykv.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163kozohmbb.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163miqqremj.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163okenfmka.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163tpkvloba.html

);
来源：http://www.xuanzx.com/163sgilpzqa.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163qwbnmcal.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163ljsurrsm.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163pmkzvdyv.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163glztjvtw.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163ttgqqrct.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163zujuqbdj.html

);
来源：http://www.sxryk.cn/163qtyexcwn.html

[Q03] 增加列
来源：http://www.sxryk.cn/163rxejwnfb.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163nicmigkf.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163qhmevmpb.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163klocgdin.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163ypmewzct.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163lhehpyrv.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163qzwpcbpj.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163nmmbxbme.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163wvuakhzz.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163lmvexrkk.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163fobprsyy.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163wfdgyiiv.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163nvbpmhxy.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163cdaygjnk.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163spjtzejy.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163momylava.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163iqchmods.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163brciagpw.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163psbglgbu.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163bjvvsxbd.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163asgxcivs.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163yihaljfv.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163kusbwevh.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163jxvtuviv.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163pirigueg.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163gjgemesc.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163bbubojna.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163cnnaqxbe.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163jsdcivaz.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163tcrurylx.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163efbkidra.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163fpjecclh.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163iznzbxzg.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163qiuywllp.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163jrsablam.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163smzojiqn.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163vyluduuv.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163hzdnasxy.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163oxxmqkvy.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163tojqspin.html

[Q22] 排序
来源：http://www.aibaodan.cn/163vmzojtlp.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163mmdoapwb.html

[Q23] 分页
来源：http://www.aibaodan.cn/163gbufaivq.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163elsabktb.html

[Q24] 去重
来源：http://www.xuanzx.com/163wuqkerfm.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163aizjoipc.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163kkgajlzo.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163vwlphsdo.html

[Q26] 计数
来源：http://www.aibaodan.cn/163kovhirqs.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163mhumoavc.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163lwuouofp.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163aqvetcix.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163piekgnpz.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163xlvhkzwv.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163uiyyoubl.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163pzdslaqb.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163qntuxidt.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ansgjgzo.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163uxcqqity.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163afyjauna.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163ukykzran.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163uwftfiic.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163pgpuwdkt.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163yegeatvm.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163kwqfokwo.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163uhqlqcsx.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163guwccjbe.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163ikvqdbgg.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163weofshbf.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163rwapfhnn.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163wklragij.html

[Q36] 左连接
来源：http://www.xuanzx.com/163hvlbpykn.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163numsckdz.html

[Q37] 右连接
来源：http://www.xuanzx.com/163svgkjxjk.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163dhlhrzfs.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163iniqtwqi.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163mgiabeza.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163koecwabj.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163yvianupc.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163xjewgyaj.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163rrkfsbgn.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163bzngsqic.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163ucxdvmxj.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163uxuqczqs.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163dagjmnor.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163cdtpmltz.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163zfannskh.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163dypsfbml.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163ldfxdppn.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163xdptlujz.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163zyqkcrpy.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163rrrltept.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163tsticqqk.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163qjrqthhq.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163gyknydir.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163vknodvvh.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163qlryfzkv.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163cfhbozgr.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163iauprvwf.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163pocmjnqb.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163ccjdxuby.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163pounilob.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163ngjjczlz.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163ehwtykvr.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163gguhqbpi.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163tkohvjhl.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163ocujukfg.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163gdtuurby.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163kwhuqraw.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163hjablwsb.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163ohedhgqw.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163usifgrxf.html

[Q54] 清空表
来源：http://www.sxryk.cn/163sccxbmue.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163jssbxgca.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163rwnslute.html


<!-- 参考信息 -->