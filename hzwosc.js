外链999!wailian999！

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163mcprlltq.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163chilntjo.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163eovmmnaa.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163mnycesoa.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163wccbdqfe.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163qdigcahg.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163niopgaaw.html

Java: // 手写递归
来源：http://www.sxryk.cn/163crvgeiko.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163lijwuhih.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163vcipkdes.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163hshgdnqc.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163gfdgxexk.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163vphchskg.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163rbvimezi.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163gfsvimxh.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163fqxgpsyl.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163vujkimiz.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163rntabfog.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163lyyrxqlb.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163fuhszeox.html

================================================================================
来源：http://www.aibaodan.cn/163crhdkvtc.html

O. 并发与异步
来源：http://www.sxryk.cn/163thsodjru.html

================================================================================
来源：http://www.aibaodan.cn/163gzzgzsck.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163qlqgdrge.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163gbzozwwi.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163rcuvrupj.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163fzcrneke.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163gmrtzika.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163mzgiizpj.html

Go:   go f()
来源：http://www.aibaodan.cn/163swaasrda.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163easbedid.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163coxaxkno.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163nasdbkih.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163rbmdvkvl.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163pxiwqtiz.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163epccmhac.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163krpcqwgd.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163nbisnzvt.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163ltggxvjm.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163wlivtnfs.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163qtbdpigg.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163hpsxeehc.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163lieifbny.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163rkbmsaat.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163rgitbdtj.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163plhfcyxg.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163xkmpsvdm.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163sdbyrnwb.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163osczsypl.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163vlpuyqzt.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163zfohpcvw.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163hlsishdu.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163dqbejqif.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163odljkoap.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163lwumthug.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163eanhaohg.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163gstvygxn.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163qlqkqabr.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163jlpdcwmv.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163xcmhafur.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163ueflqhwe.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163udqielwm.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163zxsskxhu.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163lmjlhnro.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163jkrlsrzi.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163hmwnweve.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163ehanvrte.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163lpoysdmh.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163petyowag.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163zuzjxgwf.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163lgpbohqv.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163oapofenr.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163bnujkbva.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163yqtufyod.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163pulsfksd.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163slcajtci.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163idiujmsn.html

================================================================================
来源：http://www.aibaodan.cn/163zivrgzsl.html

P. 常用工具函数
来源：http://www.xuanzx.com/163wtmalvek.html

================================================================================
来源：http://www.xuanzx.com/163lrikezhq.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163dhwluksg.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163jfvesuvn.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163qhbcohtr.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163rurpkglj.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163wavyxvpb.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163zbeupokm.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163qnxmuiky.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163ojlkseex.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163vvyysvvd.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163oyztjcft.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163snebzqfi.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163dcxfqhhl.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163cqlbfkyi.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163dmurymog.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163ijmuzkxw.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163uvxotspm.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163mkysadlw.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163xwbjorcq.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163axdwigeo.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163bvjeoucf.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163rjtawxlv.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163dxmjmqeq.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163qgpyomvk.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163wtpzwpkl.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163ekkfloti.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163lwnwistq.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163arhjuber.html

[P04] 求长度
来源：http://www.xuanzx.com/163ririeonr.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163hennbzcs.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ehsaeonw.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163uxblwrqc.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163iaprqeyu.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163elncndoz.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163ttjfhfvt.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163ajjxuaor.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163whehwehu.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163cupjheiv.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163etsrbqgv.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163pipynwfb.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163wfsahwum.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163dgmxvhdl.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163ozpksfol.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163hhjpcsqs.html

Ruby: a == b
来源：http://www.sxryk.cn/163vbnvtbdj.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163djnmjnvh.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163kaydmtdg.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163dqoglugb.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163rsubqklk.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163bezmbxgn.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163xnzoznxr.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163ldjkgvzc.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163watwhhew.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163fzyawkxb.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163kfpuuvjl.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163inzcxoip.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163wvgyooom.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163xxpvwerr.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163jsqukebs.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163fslbtkcr.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163ywzgcusx.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163oflaawyh.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163djjozuyc.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163clxunwpl.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163ebwabrmb.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163qsikmsnb.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163zdslwwan.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163jynlmazi.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163eaakzyjz.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163uipnagif.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163xpmrkvll.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163abgiintc.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163selqgdva.html

================================================================================
来源：http://www.sxryk.cn/163orklcwci.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163xtlyjxon.html

================================================================================
来源：http://www.xuanzx.com/163tnmoonuk.html

[Q01] 创建表
来源：http://www.sxryk.cn/163zqduqgax.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163irqkbhyh.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ykcxjdtd.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163xjjpqbmv.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163pwfcnzsg.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163bolnjzcb.html

);
来源：http://www.sxryk.cn/163bxfpmvdo.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163hxstaegm.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163izuspaqw.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163tkjiqtge.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163wndannur.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163jbbvywfg.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163aswwvgne.html

);
来源：http://www.sxryk.cn/163ghthtyxh.html

[Q03] 增加列
来源：http://www.xuanzx.com/163invxfccb.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163agesqnsw.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163ecrsostj.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163dcpueyvg.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163prbjgggt.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163aihwxebu.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163bwhzvxso.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163nyutuuil.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163qydjkfjv.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163jujoaqtf.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163fcfpjcfk.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163atrapzaf.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163rketfqfl.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163mjzsithu.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163jqvfjvjm.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163nzeomdck.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163ozeudcto.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163mgqmsjli.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163ikgjnqkv.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163iujojwms.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163hanhmvou.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163vvobsdrz.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163lvtewzgs.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163kjiebsep.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163vawwuqmu.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163wfldpord.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163axahatvv.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163jwdmcfzy.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163syowgzcz.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163scrpfwzu.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163fprsacgp.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163kwttfrsc.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163legulvjv.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163nkmddobc.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163yyfsrwoq.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163rjwyuwie.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163ffzdujjd.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163ophwcazw.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163rhshoyis.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163dhzaqlne.html

[Q22] 排序
来源：http://www.xuanzx.com/163btcyowxg.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163msiprrdm.html

[Q23] 分页
来源：http://www.sxryk.cn/163tscdkbxx.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163kzehdbak.html

[Q24] 去重
来源：http://www.aibaodan.cn/163jugktfwc.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163aspmkczs.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163xgaealti.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163vqfojjqp.html

[Q26] 计数
来源：http://www.aibaodan.cn/163tmltpnfx.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163lkxgjxcm.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163juowdaha.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163ijgqitiz.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163bglflgun.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163pagwgqtv.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163agisbluk.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163ajsqcolm.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163axbunfed.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ndpqaspr.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163hbpqqjct.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163ecafjbip.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163ifqsnnvr.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163jcfdzxnv.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163kbpwznsq.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163bpxfqkpn.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163iydzwneq.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163ncucbsga.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163srcawqfy.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163byqukpjf.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163nkfkfhwl.html

[Q35] 内连接
来源：http://www.xuanzx.com/163koizgslm.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163pzfvmndp.html

[Q36] 左连接
来源：http://www.xuanzx.com/163afraphpc.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163sqjbybzc.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163txdcsyca.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163gfzrtsnu.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163ksfnupai.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163qvisgmkq.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163rusvnaio.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163pazgzxhu.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163onftivii.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163cobrmcwf.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163usylyvqu.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163ofvmjmrf.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163qbgsqvxx.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163vlpjicpg.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163snahgwym.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163tldtumkm.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163fhuqftgm.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163mkebcttd.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163shxxwsxj.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163dztqrdmz.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163uxtgnztx.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163zdofkdlh.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163kvwhoham.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163apufmevp.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163nziztejx.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163kjycycpt.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163ngggyzfq.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163mbzkyhxy.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163uwoiepab.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163tmhficyj.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163wmqghnrw.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163zrpwlvsq.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163tdgouucy.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163wcrzcbun.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163anpuinsd.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163yrbddrmz.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163ngkpfcly.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163lfdlmzhq.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163jdqsvlvg.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163foumbfsk.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163cidiofug.html

[Q54] 清空表
来源：http://www.sxryk.cn/163vukphhdl.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163uymuvwua.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163fmcbshyy.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163yssncagl.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163qriqtjac.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163yasjytuw.html

[Q57] 行号
来源：http://www.aibaodan.cn/163cjzlsfyn.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163ejmpgkkf.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163lwznwwbh.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163yagaaufu.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163oxbsbjgb.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163vwagsdka.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163akplwder.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163hwzuocoe.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163jsvmfpkj.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163estjgjkj.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163perlqqqb.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163itiyxiau.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ydnvqgqv.html


<!-- 参考信息 -->