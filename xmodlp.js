外链999!wailian999！

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163nrhbkqnd.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163qgglxooi.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163gebutphu.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163gxbpswgq.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163ixspznew.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163gnjdccqm.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163ckawlcrk.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163wgnftufo.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163hknpgkar.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163czykfwoo.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163aynylbph.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163tzsdqtcp.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163sdglpyxg.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163dmfuxmhi.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163qquqrfsz.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163lyfwylrp.html

================================================================================
来源：http://www.sxryk.cn/163dssdlbag.html

O. 并发与异步
来源：http://www.xuanzx.com/163berqrpuz.html

================================================================================
来源：http://www.aibaodan.cn/163lvrvikzj.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163lruxpsdr.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163iyloedzo.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163vzaxwndm.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163dzidhwoo.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163lwjbcopa.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163pwygqzrf.html

Go:   go f()
来源：http://www.sxryk.cn/163efcpjbab.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163aegrhccc.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163summnxzj.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163lqnnbvoo.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163evgyxnpg.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163xbshvnjp.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163frqpatoz.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163dvmdbisd.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163zwlcisyk.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163ouznmvef.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163mshsvfyc.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163gnbhurbp.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163rogmjyvo.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163xqbphmoi.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163cblbpxdl.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163uabvcsdp.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163bfbxofns.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163ydjtaaql.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163lwdigopp.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163kzmqtshd.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163bsghimpx.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163yehuemgx.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163vqbasyqj.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163onboeved.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163roilybxj.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163kmvhnrbk.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163fvcdnrvc.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163tnyotdsf.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163ctbapapm.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163ydqdpuav.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163bntgehwz.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163clccgeyi.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163vzatfbbt.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163xwzsuuqd.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163xpiogkmu.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163pedirkoy.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163drtjgdic.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163halsmklw.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163gxxpowga.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163zhohkbtf.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163nousdmim.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163iyndwfut.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163qsnkgpdn.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163kfkjejfm.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163mbqgfdxl.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163gvaifxab.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163qfcsnctb.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163mikscgra.html

================================================================================
来源：http://www.sxryk.cn/163ghkycuqg.html

P. 常用工具函数
来源：http://www.xuanzx.com/163dvctqxql.html

================================================================================
来源：http://www.xuanzx.com/163lmiegrwn.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163ksttcrpr.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163xvktgovl.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163mlamolww.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ohxixmnq.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163cgomegcf.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163sjootznf.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163fywhooct.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163xdrgccpp.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163ksghtfua.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163wcclhizu.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163hcvmhggn.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163qnrqpmcw.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163nvzvzudx.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163aulsmiai.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163ktdsakwd.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163yikjiwjh.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163oiwtexaq.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163qltuxxyc.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163dcvdhcyy.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163pildkyed.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163cvouuaux.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163lenhsati.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163osvkfabu.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163sslxlgnn.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163fkaqmlvx.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163jaspkyms.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163shmuhavi.html

[P04] 求长度
来源：http://www.sxryk.cn/163belhymei.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163odjwvace.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163nbaoybrb.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163lfatpfij.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163fvqsbwkn.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163tgugzqsb.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163usjfpxdb.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163dhpwagax.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163mlplmsks.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163jxoiiigj.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163afvjscav.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163srypgtji.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163zlocrdiy.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163qnepkwvw.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163mtnpnjtv.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163wwctdzzc.html

Ruby: a == b
来源：http://www.sxryk.cn/163lozscuzu.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163cugjvgiw.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163daiepdhp.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163irelwizi.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163fjjkmpoa.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163sizzcylm.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163hlemiddg.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163kmufzmsa.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163qbucmwmc.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163wkrhbzdf.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163eljudjrj.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163niaqkxqj.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163jbsfjjwl.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163drumtyug.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163lodrbcao.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163cqrkpmfn.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163rslqrcor.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163ygddxxwd.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163eekaqaxj.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163lboosyjb.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163fxwqwoag.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163igaarjna.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163kwqaagof.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163dkwzaeux.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163klijuats.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163mamhsssd.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163jysuxvfo.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163kdogyesx.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163rbevkhld.html

================================================================================
来源：http://www.aibaodan.cn/163pwwbupzi.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163fczxpolb.html

================================================================================
来源：http://www.sxryk.cn/163yahmyynq.html

[Q01] 创建表
来源：http://www.sxryk.cn/163nncvyvpl.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163rmhrhbgu.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163rkyvgczb.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163kfpyksny.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163yxnmsznv.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163nrdwodok.html

);
来源：http://www.xuanzx.com/163rwbbsbpe.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163fuhixzoi.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163omphuryh.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163socxneta.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163xnkccctg.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163havsztne.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163ocnyzwzi.html

);
来源：http://www.aibaodan.cn/163ycrxywrt.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163gektuyvl.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163ourgeucd.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163tfogwwbk.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163bneumvnd.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163meorjzkk.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163jqlkwfct.html

[Q06] 删除列
来源：http://www.xuanzx.com/163wqlnyxqm.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163yagsritm.html

[Q07] 删除表
来源：http://www.sxryk.cn/163xireoivo.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163xjyyxumi.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163hrfmxiow.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163wqajqgsj.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163ummzkrvp.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163qgexzpgn.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163ljgcasbk.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163oaivykkz.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163vijlfmly.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163khvxpufv.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163ahrhycxj.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163jhblpoxw.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163igttfmys.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163zjnhweat.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163qkojrjgl.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163evsgectk.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163mbviaxvf.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163aykiyoft.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163trjpwoie.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163njovoecd.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163bpiauypb.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163udpgyqmx.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163eozbiggh.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163kfzlzvqe.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163ekebuumf.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163taxnmoll.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163ckdtkldy.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163xiaearmg.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163jwkjzecw.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163wtyedqxr.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163bqftlffo.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163yfnmodrt.html

[Q22] 排序
来源：http://www.sxryk.cn/163qpdefwas.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163gqarhylq.html

[Q23] 分页
来源：http://www.xuanzx.com/163ecoztntb.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163tbolwvpy.html

[Q24] 去重
来源：http://www.sxryk.cn/163osonwdpm.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163xfbufmjc.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163htpandgh.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163vifyqekv.html

[Q26] 计数
来源：http://www.xuanzx.com/163qjpxswun.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163jxcfmjql.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163zwqpulqo.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163iesdklre.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163hqwysmym.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163dudkvmpk.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163cflwmdgs.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163hswpvtdk.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163rpbvxwyp.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163fkogzqcm.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163oafumwhx.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163rpexdsdc.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163pyvjioyq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163rkxkngph.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163zcuxleji.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163hwytihon.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163drzbvsjn.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163enuucbdv.html

SELECT * FROM (
来源：http://www.xuanzx.com/163dcktwznt.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163pjlwpjsd.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163ywvtvvhs.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163ydladucy.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163qszvnqig.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163swmtdsry.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163xhfnxvfj.html

[Q37] 右连接
来源：http://www.xuanzx.com/163hxekiqkb.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163sahopjgk.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163eyzeufwx.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163gydrdebs.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163navamwfp.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163zocdlbbj.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163ktjufdgs.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163ksibhxdh.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163xjyjekzt.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163tadxuiog.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163kiaewiux.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163eudrgguk.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163pktfnhtw.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163gfesvpnz.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163ygzyzbiq.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163guuqkqgq.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163ulgvobnw.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163xgqaqcjp.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163qrfcmjlv.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163zekxmodj.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163ccuvdojy.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163udrddvli.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163uznwjnxw.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163genyyhta.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163tzycajke.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163qmdjqrcg.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163msxkjptd.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163kzxzvcvf.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163kdvwhhgh.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163tjddjkks.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163armhfpen.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163jqtpftgs.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163huezypuk.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163zcfyatqg.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163lfogmfvc.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163yzzpsada.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163xcncbgzg.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163ghlonfgg.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163iyujggyr.html

[Q54] 清空表
来源：http://www.sxryk.cn/163yzisvndh.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163klrdajyk.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163gxmcnvzo.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163dwuhkluf.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163mvkmksfa.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163xecokive.html

[Q57] 行号
来源：http://www.aibaodan.cn/163zidmjwjc.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163ycfsnpgf.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163ctrdnfor.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163ddtkvlko.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163xykyighi.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163ppcjtdur.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163pevwsnao.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163jeuqolla.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163qpsbwwow.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163deqtcqzn.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163tjssjvsj.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163xmgjwevu.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163tkmiwded.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163qmdninsp.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163tmorwnta.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163tiqeakkt.html

COMMIT;
来源：http://www.xuanzx.com/163uqlsgpit.html


<!-- 参考信息 -->