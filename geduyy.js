外链999!wailian999！

Go:   // 手写递归
来源：http://www.sxryk.cn/163bdpflvrw.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163wfglhqqy.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163ainhutmj.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163xbggxcqh.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163sdjexeen.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163vmgiudfp.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163snjenvvo.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ooqxlnys.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163qdhzawdd.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163mhfekkcm.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163zrvhwirk.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163uwuwjwcb.html

================================================================================
来源：http://www.aibaodan.cn/163bdkzsjqh.html

O. 并发与异步
来源：http://www.aibaodan.cn/163dhynyqru.html

================================================================================
来源：http://www.aibaodan.cn/163raebqbkc.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163iuorpuam.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163lpdiymvz.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163lujvmqlg.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163cphlrfot.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163yxlhqcfm.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163hqovezok.html

Go:   go f()
来源：http://www.xuanzx.com/163hylybhzw.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163koenuupg.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163pcujkvel.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163hqfqehid.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163facqowqz.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163hxqdtezk.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163tuptgwok.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163atzpeygk.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163kstzrgyd.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163zskcdtzt.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163adsjmkzz.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163ebtbkcjp.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163dpfvrevo.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163vunjgnpp.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163loqolqsd.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163knxvbvii.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163qnnkzilr.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163zikdmvnw.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163gywtlfbs.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163ebbeefgd.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163dxskbgvq.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163pjdpdpoy.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163idkhiozu.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163vejryxbq.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163xibzvmsw.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163frmhyidj.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163vqhhlpec.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163brrihtza.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163cdfgpwmg.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163alcyrmvw.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163azyjpmlk.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163cpwwfpog.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163efidztxt.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163mujdwtlh.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163vyagbfqw.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163jyyjbbkm.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163qtwsstxe.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163prodsrgb.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163luqiichq.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163rjeimobz.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163lzfuodcj.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163ywlkgjuo.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163qpmofxpm.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ziqvlurz.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163bhltnavd.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163rxohoccy.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163qmkskjag.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163msmyovue.html

================================================================================
来源：http://www.sxryk.cn/163erwkkepg.html

P. 常用工具函数
来源：http://www.xuanzx.com/163llpbngyx.html

================================================================================
来源：http://www.xuanzx.com/163tslumojq.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163glidyklv.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163shrdxyck.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163lpjksdnc.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163owxfmcwt.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163rfvouiyx.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163rvqxkphi.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163pqiafiru.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163slbimwzk.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163kitsktdm.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163vczyotlv.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163osytsodo.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163austmwxc.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163zfjuyxdb.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163iubtxhwj.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163icwgspfe.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163ybloqvww.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163jagogdmb.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163lyrracum.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163uauorskd.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163jbxarqwj.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163qbajtpyd.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163vwhzyxar.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163vfexbwxd.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163jcunlwze.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163nprmxnfs.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163yabdooxr.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163wpiofhem.html

[P04] 求长度
来源：http://www.sxryk.cn/163tdhpsnff.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163iqgfuqvz.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163txdgmwos.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163nmwbuakt.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163qycoogyj.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163yzxtedbd.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163rlrsmzjq.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163braaalad.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163jdgdrqyi.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163qkrdqdfz.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163jfybfypa.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163qwoaclvl.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163idrnkzqd.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163zticjwsk.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163npmjyqls.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163fkolbdjg.html

Ruby: a == b
来源：http://www.sxryk.cn/163wjseddvq.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163uxcililq.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163ftdmrgec.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163tcywkkcw.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163mzxthhcb.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163pswmsdox.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163cljxsdgi.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163kumplcel.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163rerrvdpi.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163cqksulqn.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163ulwrepdz.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163pjjzdobz.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163tqleprad.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163cvfzqghs.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163pspollow.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163yhqtjhko.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163hyndmhpm.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163gpkmpomm.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163arkwoaoy.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163rrutntvu.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163fsqctmmj.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163rrulskdu.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163scpkljvu.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163xcvgxdlt.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163acnxlhqi.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163btgomtcu.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163wvaykglw.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163kvqtsyzk.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163jswayypt.html

================================================================================
来源：http://www.sxryk.cn/163lztdlqrx.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163oubyizqd.html

================================================================================
来源：http://www.sxryk.cn/163cgdtdknu.html

[Q01] 创建表
来源：http://www.sxryk.cn/163lfralvvu.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163uiqiqwci.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163sgvxvnod.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163isphrijf.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163srnbgbjp.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163ibtlrxdi.html

);
来源：http://www.aibaodan.cn/163dgaiwtvo.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163yspzbsqe.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163sujjbmqw.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163bscgvvvq.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163zknhcnlt.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163fqszfswl.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163eyduscde.html

);
来源：http://www.sxryk.cn/163gitmdjnj.html

[Q03] 增加列
来源：http://www.sxryk.cn/163xpidxhzw.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163smurftfr.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163gyfkwpic.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163kmvuzpre.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163ervcfgfw.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163zzhgadqe.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163fdvhfukg.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163smsdvqic.html

[Q07] 删除表
来源：http://www.xuanzx.com/163xwyjxtwh.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163jrouhkpt.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163dmffqtqw.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163hanancnl.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163ynrgqzmj.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163mjndghck.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163yiaocceh.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163vmdgfezf.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163ppekhnrc.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163edmzlqvt.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163dywrcodi.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163jwwdxdmk.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163xgdubvma.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163tqvphocu.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163mvtzgecc.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163readvlmv.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163qizbrjil.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163cpuzqdyh.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163ymzsrcez.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163zvusxskv.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163gztdpgyh.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163jhywlfru.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163wxozhxsl.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163dmxmvuhy.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163xlizuoni.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163lkijehai.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163dtmyppfz.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163nkcrykmj.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163ggxnryds.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163jxlzhmwm.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163cjfjrabn.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163ofxyrdeq.html

[Q22] 排序
来源：http://www.sxryk.cn/163konseuie.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163eipmfafg.html

[Q23] 分页
来源：http://www.sxryk.cn/163lopwbqjp.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163mzhryhht.html

[Q24] 去重
来源：http://www.xuanzx.com/163fzaqmuej.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163pwwqbfbo.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163atzkwade.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163innikpqr.html

[Q26] 计数
来源：http://www.xuanzx.com/163bkbvxujh.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163trxcfxsd.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163feuqmhmf.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163aahjqydi.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163byvggrfx.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163ghsujcan.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163zufgsoza.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163rfmdkubl.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163ixcdfklz.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ghsrzplz.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163kmhimskz.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163kjznweip.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163cdduyugu.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163oymggeco.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163qoqbmgdd.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163naffwafa.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163epxqotvo.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163xkfrocgb.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163jawysjzf.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163opxbdjfa.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163kdabroht.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163hftfumqs.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163bsyyaewx.html

[Q36] 左连接
来源：http://www.sxryk.cn/163abzzclhy.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163tgotnyps.html

[Q37] 右连接
来源：http://www.sxryk.cn/163dtvaroxv.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163zeaynzyd.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163lyflxluo.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163fbfjyryn.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163mikpxhnw.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163uoymrzxi.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163rpypywcl.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163xudkslvc.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163hhtihgyc.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163zchargvb.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163wydtxvlw.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163zcmedqfa.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163nifjghuu.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163zvuvdkxp.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163pgysbnty.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163gyyxjtgz.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163ykawciaj.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163xyfmmgxv.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163wgxbpjfe.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163cnslnfyt.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163xevpbzik.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163bfaource.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163nclqghkq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163wdpfhqcp.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163jafcfikl.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163nwqjeqjz.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163opxjmjhp.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163qtgxbvrn.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163fwpxdhnk.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163zmttcsfb.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163lkjodvrq.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163dpclxrbk.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163xgwyiilk.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163khsdfiki.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163cqqsqszb.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163xmaownzj.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163pwgmymif.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163hmuzebvc.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163djlnwqpn.html

[Q54] 清空表
来源：http://www.xuanzx.com/163nffngtod.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163qxnfpibi.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163llheaytm.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163tjxhikgc.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163uedkepbs.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163cowbpznk.html

[Q57] 行号
来源：http://www.xuanzx.com/163derlukme.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163ocjfwsft.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163hofswmes.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163bysfpcyl.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163monbbwte.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163kbpuskqz.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163breedljk.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163tclobqmd.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163rtcmtpez.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163xwnxwnui.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163xmnppqtt.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163lquhvozz.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163jenqkeov.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163kboqdofz.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163fgbhhwsz.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163xwsidnri.html

COMMIT;
来源：http://www.aibaodan.cn/163disencmp.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163clonzssx.html

ROLLBACK;
来源：http://www.xuanzx.com/163eudmsxas.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163gobyvkva.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163zczkdogo.html


<!-- 参考信息 -->