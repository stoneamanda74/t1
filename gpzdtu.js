外链999!wailian999！

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163blbqzvyr.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163fupnvchn.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163fdyzkuiz.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163hcrgzqdy.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163dqihmsbx.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163wqodngun.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163nogdyscj.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163wumkrawn.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163sznnecyr.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163rnklsuoh.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163gigispke.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163vmrywkrc.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163xojoetrj.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163eumpbkhd.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163kjussmup.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163ljqrckai.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163okjxberv.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163moltqdfm.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163yjoqcwqe.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163weuznfvg.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163zrulnbdm.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163xqkaqbfs.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163elcrbesy.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163okvfdljq.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163dekvytsi.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163ivcppfrs.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163xbbvzjib.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163jjgviwle.html

================================================================================
来源：http://www.aibaodan.cn/163rfetbuho.html

O. 并发与异步
来源：http://www.aibaodan.cn/163twkajhqh.html

================================================================================
来源：http://www.sxryk.cn/163ezuevagy.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163bqespnnj.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163ndfycrne.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163pvqzydba.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163gycoipkr.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163cqnuyhzt.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163dqxiclzb.html

Go:   go f()
来源：http://www.sxryk.cn/163bdqghdxd.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163wjgjzbpe.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163ghiurcwn.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163wlnrzmxp.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163qdlosulu.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163ocqkdgcz.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163tcmayoyl.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163gxcjtylr.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163deaysxcb.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163zdqqekvd.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163lqwtigdz.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163pxsnqvuz.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163xjxqgwws.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163xumrxcrp.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163kreqtpjs.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163knbvytnj.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163izpnpudb.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163xtdnnrsu.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163ensvrder.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163ehnpeoxt.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163ubjwcwqv.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163zerbsuvh.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163pjfodwaz.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163ofcdfnbn.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163wlfmnocc.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163cobnlbfo.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163vuowqqjb.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163kokvsfzj.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163nhaiyywz.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163wwddtgzm.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163rwvrapar.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163ulmjjdip.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163gvfrfowy.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163uobwapfo.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163vxxrmasc.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163yvpvmkhz.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163czlfzxht.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163aelrbyzu.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163jyilvrqb.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163mnoqwurn.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163ftjqsegy.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163oeclyuxa.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163gerfsuhs.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163luopjqry.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163rajtpltj.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163mgzqdpoz.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163vboxirmm.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163zfkcdiqz.html

================================================================================
来源：http://www.xuanzx.com/163nwqwvghs.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163bfpzgyay.html

================================================================================
来源：http://www.sxryk.cn/163oriurktx.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163qcmkqlvg.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163pdkatkkz.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163csdgnequ.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163fniyhrpi.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ypgicsgu.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163xpuboiie.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163noeuofgt.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163xqwvksvt.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163lhisabal.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163nadvqaaf.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163dvfxngjm.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163fflslcid.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163vibgkiev.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163lqdxjhpp.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163eqogqnqy.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163irlhcxpd.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163nsczzeiu.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163robymzzh.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163pclehmrn.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163eeafonxa.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163rbfwuuxy.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163azddwawu.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163dokezpga.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163spdgmwso.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163dlxegiws.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163aawlueas.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163kkexatsj.html

[P04] 求长度
来源：http://www.sxryk.cn/163sqjpiqgf.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163rkgegmku.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ggtdjcid.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163goozjiqi.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163zibueibb.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163dypqcojc.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163mmbsmwyx.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163tvlepxpf.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163gfeftfbm.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163qrmcjggg.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163bpxrnewo.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163louyaorz.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163kxkkbpms.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163lhrufwex.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163vaupzvnw.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163qtahsvst.html

Ruby: a == b
来源：http://www.xuanzx.com/163wriohahm.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163bearjqgt.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163cpvfptod.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163vlymbrjh.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163jvyarfzv.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163fbethcdf.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163daqixqrz.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163onccfdyh.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163usbyqjiu.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163cnhjloxe.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163zjijiies.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163ivhxajdz.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163pjtzfcrv.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163atjyrbcf.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163xgvicwdu.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163muhietum.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163mkljjacg.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163ujmjmuhx.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163wmyjpubu.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163pfisnqcr.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163vfthtfdl.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163qhiyjlhv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163feticxyq.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163vqepnqpj.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163mhyirmno.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163lunabevg.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163pctfedzr.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163vhprwcvw.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163vmcgqjgg.html

================================================================================
来源：http://www.sxryk.cn/163omsuymxm.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163ibmenxjc.html

================================================================================
来源：http://www.sxryk.cn/163tpfayaks.html

[Q01] 创建表
来源：http://www.sxryk.cn/163gonforvx.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163pbgnvzfb.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163qysqgyut.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163jbrwzdpm.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163iqcwnagx.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163fmrxeiha.html

);
来源：http://www.sxryk.cn/163hvmtvigq.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163ufvkfcoo.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163pzglkcar.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163vgozrlww.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163aqsuxyee.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163hzaqrzif.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163vkstsoci.html

);
来源：http://www.sxryk.cn/163fghqlugx.html

[Q03] 增加列
来源：http://www.sxryk.cn/163uoqfyrwj.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163cgishcbe.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163iwjnjwvq.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163vmlvthxc.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163kpqalqim.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163ayxvxvnb.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163rrdmvifs.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163izwpzgtg.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163ecxcjpwb.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163qcvezvsk.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163owpzgrlk.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163nyesfint.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163pffopzrq.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163xtxuvyba.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163usapymzl.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163uyukxfyc.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163hatnoojz.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163foxilnie.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163ddeqszcm.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163acnzrwxt.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163uoifmwpu.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163agcmtiro.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163puvzrffb.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163wibvjbqh.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163reiittxj.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163buvxqseh.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163ewfddccv.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163xvsytgnx.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163fdoafosk.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163izzwikyn.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163xuhdnsqg.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163jundingj.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163jdttpevy.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163ckbcpcwp.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163yluyaidw.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163ybhgwxzc.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163bkkthgdq.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163wtpoowlw.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163nilscjwg.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163jxvuehkq.html

[Q22] 排序
来源：http://www.sxryk.cn/163ggoguvip.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163lyhjvhdq.html

[Q23] 分页
来源：http://www.sxryk.cn/163fexfljaj.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163vgeeuoti.html

[Q24] 去重
来源：http://www.aibaodan.cn/163leyzmsus.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163pzidnlpo.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163zmrfwlnp.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163atpdnrco.html

[Q26] 计数
来源：http://www.sxryk.cn/163mkklevfe.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163atsdhtmf.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163xeuusxze.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163pizjktjw.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163bzbbogbu.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163wxxbsngj.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163cfoamprh.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163xjstpatr.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163qybmnumd.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163knlpnjlh.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163gmkpbuqz.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163oxoadelc.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163gaffdenj.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163sutaircm.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163cuhgkmjy.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163mopscjis.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163rhuabrgi.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163yloofmxq.html

SELECT * FROM (
来源：http://www.sxryk.cn/163akapvwfi.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163wjsdbwam.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163qfljvbhp.html

[Q35] 内连接
来源：http://www.xuanzx.com/163lhwmhkoi.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163qurkprfm.html

[Q36] 左连接
来源：http://www.xuanzx.com/163nhkgzpdo.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163bpcjizuq.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163nfyfkrvp.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163svwnqvgw.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163ifaathla.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163muwrzovu.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163manapkrr.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163jspyazhk.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163yxhrqnce.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163rgxrkvtk.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163yulygehp.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163dxkayksx.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163nhlarsug.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163wyvnplar.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163dsbasqzv.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163bqoijxhf.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163khaqcweo.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163cnnlhyjc.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163fjukddcw.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163wlzluggl.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163xtupacln.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163cgdidhwv.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163tfzuobmp.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163bybkiqwh.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163ofljgwsq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163iwsdgmjb.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163utjjsngp.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163kvqzbypn.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163mnvgsjmn.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163yecguoig.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163qhxldvyl.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163tibbsuvo.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163sgvfxipl.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163vbjnvqft.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163glgogplg.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163krpjayld.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163bhxcyxup.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163ekmbwxsq.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163taaislof.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163ngpmjsiu.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163djqqowes.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163cvjoaebf.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163fgvmjczr.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163yewgfuoe.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163cpiuaqpd.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163cptyxjry.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163kavkcaaw.html

[Q57] 行号
来源：http://www.xuanzx.com/163jtoeyzrm.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163zszlirmj.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163eltijyfl.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163bpdjuezd.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163vkqenjgv.html


<!-- 参考信息 -->