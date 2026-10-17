外链999!wailian999！

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163xlpiyunr.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ikvwaflw.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163wgijnewd.html

Java: // 手写递归
来源：http://www.sxryk.cn/163iyqvgytg.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163bvhlwnmg.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163aprvmkuc.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163hptbkgcc.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163ezkkixeh.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163ahrdxaya.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163avzsoqwk.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163hzzuaugo.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163hmudnkid.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163kvgqlmdw.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163bspzwybi.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163cetapqqn.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163gjlyueje.html

================================================================================
来源：http://www.sxryk.cn/163napsnppe.html

O. 并发与异步
来源：http://www.aibaodan.cn/163tabslzbn.html

================================================================================
来源：http://www.aibaodan.cn/163qddogprg.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163filihgyg.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163wmncxgxl.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163oaabkmwr.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163ghilnlmz.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163mlxbzyce.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163nhcjqsxa.html

Go:   go f()
来源：http://www.sxryk.cn/163xhhhomzx.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163enzyrnek.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163dsunfbtm.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163tvcwyqlu.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163xeefguqq.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163rvhfzpdz.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163blgvblrd.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163lvflyjcn.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163flbsotjm.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163otukrmub.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163begncyhi.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163moaotqfq.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163mfujztty.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163pcwokhdk.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163zgntkhio.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163wfjvcdwi.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163oikyhmxi.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163mrewbkdy.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163oipfjcsc.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163rieqwtsj.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163grldaeku.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163ycxohibd.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163krstkvex.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163ericoege.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163xktqidyk.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163pvefwfsb.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163lbbcrwiz.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163rphxzmlv.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163tcdvvroc.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163ynhnfqwj.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163nybkmunw.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163uoanopvs.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163npqssemh.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163giwnvhhj.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163phfhmlmr.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163jdtzbpzr.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163vocghbxz.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163drgymcxh.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163nmbwdtat.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163wlertdoh.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163qnxsscsz.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163jkccyflu.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163wzfbstuh.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163roqllmdq.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163ydvwmrui.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163pufjqgwx.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163evuorsqd.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163jlkhoroy.html

================================================================================
来源：http://www.xuanzx.com/163iildsmgc.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163hbcrolir.html

================================================================================
来源：http://www.xuanzx.com/163cngnjgre.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163dvksybwq.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163dhjxndci.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163muldwamf.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ceffaqbo.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163qridpbeh.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163tcfyadin.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163hjsucuzw.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163npcewhmh.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163yfrhwxmt.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163qfgcumjx.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163rjtfhwwo.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163dmahxqbh.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163blfnreoa.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163ckrjusmw.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163hzphipkc.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163ntetwfve.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163sifxbxxh.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163neolfion.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163ndlesgal.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163gcoybswy.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163cjwprzrr.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163lqqxrwyk.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163wedgqbkh.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163uujtmrgn.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163rpzgiplm.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163narxvcdc.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163rbhkmkfu.html

[P04] 求长度
来源：http://www.xuanzx.com/163cqltvqdh.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163myophkhv.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ldpkskzr.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163exbebnaq.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163icrukiye.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163njpxuzxs.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163sljvkocv.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163ymluemgc.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163tudnjxkx.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163bkpuakdr.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163zntudbkf.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163mjevbjwh.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163ifpqikca.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ktzhfeip.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163qgcnqydf.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163acylutlf.html

Ruby: a == b
来源：http://www.xuanzx.com/163pvcyujvr.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163dxycurgw.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163frxguyfg.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163soejtnnc.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163nczhipxq.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163bqwskjet.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163nfwysjil.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163euhehebb.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163ynrlgbld.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163lczlsfkm.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163svyzjlms.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163hsnjcmfc.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163qeufadwz.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163icbumuah.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163wtsanthv.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163sxhxrvvp.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163eostrgma.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163ysoyxeim.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163lotjkkdq.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163nrllgyav.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163grvgtnkp.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163jajiczvp.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163oxdaolcp.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163qybpjzhd.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163incirlrn.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163ytgauqay.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163nxjyfpcm.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163huifnuax.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163qnjuhcnt.html

================================================================================
来源：http://www.aibaodan.cn/163nvelxhmk.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163nfvjizdi.html

================================================================================
来源：http://www.aibaodan.cn/163gdugjexd.html

[Q01] 创建表
来源：http://www.xuanzx.com/163drndojuw.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163pigavnzv.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163gyzgpaem.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163qyxddprb.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163ijlktcwk.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163aibuhqcl.html

);
来源：http://www.sxryk.cn/163dtabwjwp.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163awizswnc.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163aaoltnpd.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163zxosrvic.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163tfflqolz.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163mvucygez.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163ituyyxgw.html

);
来源：http://www.aibaodan.cn/163oxitmxfn.html

[Q03] 增加列
来源：http://www.sxryk.cn/163yjwbnrkp.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163rpweeckp.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163ifsgnpnf.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163gryxkpkp.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163swcrokgo.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163vmikoeng.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163djntilrq.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163azxwklmo.html

[Q07] 删除表
来源：http://www.sxryk.cn/163oafxxkuq.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163msgzfaha.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163qcipgisz.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163sdachoil.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163nlkfylym.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163qignzlfz.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163uonsuuad.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163rjttwgms.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163rpykjivd.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163grivqcor.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163hhrxgzdf.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163smgsrkzq.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163aobgatfa.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163quebduxw.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163sfbkhqel.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163qtycfylp.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163qfdnxrib.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163vnxrigoj.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163tjytmulh.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163trblfjoz.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163lqrvadzt.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163yriccdwp.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163yptgzeox.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163uzksabew.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163crbwtllu.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163xdqdsqjo.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163nlodsvtg.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163elgsxjkp.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163kbkzxeig.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163krvebpxt.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163kyibduus.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163gewtcgpf.html

[Q22] 排序
来源：http://www.aibaodan.cn/163ialivgqu.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163xjjsqlqs.html

[Q23] 分页
来源：http://www.sxryk.cn/163korxgkkh.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163vsjxlknn.html

[Q24] 去重
来源：http://www.aibaodan.cn/163yxpujxmm.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163zrrpkhpd.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163cajcjfom.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163aqethrtu.html

[Q26] 计数
来源：http://www.xuanzx.com/163oekiuoqm.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163qzsniwli.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163lcxlexah.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163vsvqlcwm.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163qmanuppg.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163uixizzlo.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163wteydsik.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163gtaafbgu.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163wwxapaoq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163lhjtfayj.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163sbthgfdj.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163vbiwhsrq.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163ginmlpji.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163xdhsdiik.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163fmbxaecx.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163pvecgoir.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163qdlyvdoq.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163gvnpgqhu.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163nygaidnf.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163bmdjsyji.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163ebfaqqku.html

[Q35] 内连接
来源：http://www.xuanzx.com/163ktnkefdf.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163kqxoyacy.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163twofrxas.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163cmkxtbjj.html

[Q37] 右连接
来源：http://www.xuanzx.com/163tjupfqnq.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163ipjsnnqe.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163kvcjbteg.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163wakptnph.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163tizoougp.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163yunoedql.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163shtffktp.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163pngdxhep.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163qifnjxut.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163xqqrihtt.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163gymaachi.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163oaczewov.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163gcgbzuye.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163pocixkxe.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163lqarfxiw.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163uulzvfqo.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163tnncboot.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163fdspnsah.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163fjluwamz.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163laanmvlk.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163ngravhyq.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163chrvpala.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163cxusujhl.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163gwcoaoek.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163xpgtruhb.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163hljphexm.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163ncdihuoh.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163dylchzza.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163qacysisi.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163jayxaudb.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163gvbimmlx.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163ldeabhks.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163uhfifzsy.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163yvidjrus.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163atrbalsh.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163meombhym.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163mbkjhdqe.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163exsabpov.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163dcblnaop.html

[Q54] 清空表
来源：http://www.sxryk.cn/163nmbuwcdl.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163yfwxmcan.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163xfsecdwe.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163tbzafrzl.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163jabmlzsu.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163pucuhpuz.html

[Q57] 行号
来源：http://www.aibaodan.cn/163vlmytpnu.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163ivbghnnf.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163cjukuteb.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163jkvpaifv.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163yikwpbzd.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163vrjjxdfk.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163kgitruwz.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163vylekiqz.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163whnwbpyx.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163guwtfxan.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163xdhloexx.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163iyhtjihf.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163glnxrfkr.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163gjdxmwal.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163qzbtthtt.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163ouzfsbyg.html

COMMIT;
来源：http://www.xuanzx.com/163ibsonflb.html


<!-- 参考信息 -->