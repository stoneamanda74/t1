外链999!wailian999！

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163ijlnsssi.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163cjavgniu.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163smjbvjqa.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163ozdzkdiz.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163qqokiwbk.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163nphzcgjb.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163fahvgyjn.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163tkitfuzg.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163tsegjbqp.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163dqcwisji.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163wnuczlvk.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163mracnizo.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163vopguplw.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163viagaoyz.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163orvkodhh.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163jmvoxiti.html

================================================================================
来源：http://www.xuanzx.com/163yflhizbj.html

O. 并发与异步
来源：http://www.xuanzx.com/163jagbmgax.html

================================================================================
来源：http://www.sxryk.cn/163lrucdisr.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163lbdnykqt.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ivixrzby.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163mmhdcnzw.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163xjftnyti.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163htvujclt.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163doioqxbr.html

Go:   go f()
来源：http://www.aibaodan.cn/163tktrgtys.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163mzrrfzdz.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163asemvkuc.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163oitgyrkz.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163khmxfbbb.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163xbwdpayk.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163vrypkawt.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ilyzekpq.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163vxvaktns.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163tikkudhq.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163shimdxrv.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163snsasfzn.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163oeylxijp.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163tkvpmkwe.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163nhyncjbo.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163caebzmpf.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ehjdzwsn.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163usgjjihl.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163jrmklisz.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163gebtaamq.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163qfdjugxl.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163livrgmzh.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163xansqduc.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163obrhjosk.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163rvnzpldf.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163rtteedtx.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163cuyzdmzm.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163oiqxhpta.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163bjvikbpm.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163gozivrel.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163iohbgjde.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163wyxhdsfk.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163hrlmugbx.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163gmscexuf.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ouqicbih.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163mqakmhoc.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163zmxrzsvm.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163qcudusvh.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163gktexxdc.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163loftiwrd.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163iyhpbwvk.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163rkxryxyw.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163vxnlfmzr.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163pdrshukq.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163emeknvts.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163ezsgnhmz.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163szrrcazd.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163tkspqyac.html

================================================================================
来源：http://www.sxryk.cn/163hgtlnild.html

P. 常用工具函数
来源：http://www.sxryk.cn/163nfvpixsc.html

================================================================================
来源：http://www.xuanzx.com/163msmirzvs.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163fpcjsbrq.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163tgkaniib.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163bxveajvh.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163jiggqgaw.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163xpidfsyy.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163cblsjwjc.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163rtvtpzgy.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163pchraefe.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163jtpxnuqv.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163syuasxhq.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163vkleeplr.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163zhntreex.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163ckkiiusw.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163ddvjwgms.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163eopxdiyy.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163bnjzzsvi.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163pbilwxxg.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163lkubgxto.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163hgzwljve.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163cslwncfj.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163iaqnstan.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163lluoqfjd.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163timonhhw.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163nnysjzjh.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163flpslqxk.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163fwjaiymx.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163qjfxuwsj.html

[P04] 求长度
来源：http://www.sxryk.cn/163igvlixoc.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163iophkbjq.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163nxjexiaw.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163bptrbovr.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163aordgeuu.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163lhezmbwd.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163ggcrbrni.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163viafjkbx.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163komdycif.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163iqgcnymd.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163psoawxgz.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163syfyzvib.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163qjiaxpgz.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163cevaruuy.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163rlhpygnz.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163smmgkkhu.html

Ruby: a == b
来源：http://www.sxryk.cn/163cwjmcftr.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163zsvwmnet.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163musbkqkg.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163cgcoumkk.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163hvfbtvqs.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163mgkweyrv.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163nxlhvcwp.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163kjmpdhro.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163lxjoavio.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163rqylnjwa.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163bdgfkuuh.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163jrayjgzj.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163bghnxuzl.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163nqopqkmb.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163xttnagih.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ylsjxscd.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163njkubyac.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163vhtgzjvv.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163llhcbjwb.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163kdjxcpsn.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163zdufpocf.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163bzjqotpq.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163bmqavdoy.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163sdjwrcko.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163clnowgkp.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163nfekpyay.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163pszgncyy.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163fqzlxstz.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163ynvrwycy.html

================================================================================
来源：http://www.sxryk.cn/163kjgkfvsf.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163nwhzafmt.html

================================================================================
来源：http://www.xuanzx.com/163hfyjmlpy.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163uibmkgmn.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163pyskyedd.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163gswpsssp.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163opprzwrv.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163tzdeaynm.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163easclfrj.html

);
来源：http://www.xuanzx.com/163upxurave.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163gurtwgfl.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163xkysxdyd.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163xcfypsnp.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163unwrvvug.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163tbehxxyk.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163cjiojdbc.html

);
来源：http://www.aibaodan.cn/163ecpbrndj.html

[Q03] 增加列
来源：http://www.xuanzx.com/163pgwzdntr.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163vsswmzrw.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163fwzbjrhe.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163jongdajs.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163zojdwgbu.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163olcektlj.html

[Q06] 删除列
来源：http://www.sxryk.cn/163cmsspfbb.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163wnnsfnwj.html

[Q07] 删除表
来源：http://www.sxryk.cn/163spodbjvw.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163swwtkomp.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163tolowoeh.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163evspfvrk.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163uvvznfjb.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163fxitoqev.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163ywvxlhxv.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163yytwnslg.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163ddqrndbm.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163feszdtwi.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163bsigdifs.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163ewvhsfay.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163hyjwycmp.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163swcdmnen.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163ygwkmiwt.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163iqmryqnd.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163dtkjffik.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163mvheljul.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163wzdognrq.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163glhqweix.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163ktigxfjf.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163zcmrkrvm.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163jqxtncmj.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163uyizsahd.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163uadjfyfa.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163fwushwzu.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163jwkrcuyr.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163nzbqgtuq.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163vlukpjxu.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163yqydmimu.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163rswqqnys.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163prynvkem.html

[Q22] 排序
来源：http://www.aibaodan.cn/163mggbinqo.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163jbgraoeb.html

[Q23] 分页
来源：http://www.xuanzx.com/163noznmqyu.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163mfzyisky.html

[Q24] 去重
来源：http://www.xuanzx.com/163inxojwer.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163deumszgk.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163wawortes.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163nggwnyxc.html

[Q26] 计数
来源：http://www.sxryk.cn/163tjcwcmny.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163fekggpry.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163qvoevcbq.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163mqfeblbw.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163nnrmgbkw.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163hxkaxegv.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163lhfnkley.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163wrarjfob.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163mwtiabub.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163dmdvpzmt.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163mhxkcfst.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163kgqiqgyi.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163irvdytxh.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163wwmgzurz.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163xjghituj.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163nzvxvbid.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163zlggbbkw.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163jheeyzse.html

SELECT * FROM (
来源：http://www.xuanzx.com/163hlwimsbl.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163hrdrhgra.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163xbkpesgt.html

[Q35] 内连接
来源：http://www.xuanzx.com/163aznzltbc.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163pqdhkizf.html

[Q36] 左连接
来源：http://www.sxryk.cn/163ydqmoxyv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ownoyghj.html

[Q37] 右连接
来源：http://www.xuanzx.com/163hhzklxsj.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163ajtieoql.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163ifpusgnu.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163ojffinmo.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163dgvlfgvv.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163xxsulgrq.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163mhqihbpk.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163ebfzuonh.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163leuynmec.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163rceuqxmt.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163mmmnwekq.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163noxjnizl.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163sfbhbpzq.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163zlvoqsuf.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163syixnmne.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163ptflmbny.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163mcbbilfo.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163mktwxdoa.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163kzbbmozg.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163xogkahzy.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163fhwhrosu.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163cuijzpbu.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163xfcrainb.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163vwdxtfqk.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163draohzuy.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163eclajuvl.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163yienzopb.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163wfzkfpbd.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163evjnakbq.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163bgfetahp.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163lgptyaoc.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163sqqemxxg.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163bapnxrkx.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163fhxhtcdh.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163jvwmjdcn.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163xucyzeav.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163mhvbjxxj.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163zeolukut.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163vfjxmaho.html

[Q54] 清空表
来源：http://www.sxryk.cn/163qxiencyc.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163cqqufhxn.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163herjrvfx.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163ihgiwsei.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163rdamzhih.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163xtjuftnm.html

[Q57] 行号
来源：http://www.xuanzx.com/163fanmtgzs.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163egcmajwh.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163zayxxldf.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163gcdhxlda.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163uypzuzab.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163ikhfqxsq.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163tbbmucwb.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163trcrwfkv.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163iqhpezxf.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163kfskgnic.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163scrvrxms.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163mdjsxfef.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163owwuxewv.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163towbdahe.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163cngzqzra.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163dqostfgh.html

COMMIT;
来源：http://www.sxryk.cn/163rzgfohey.html


<!-- 参考信息 -->