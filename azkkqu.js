外链999!wailian999！

[N05] 最大公约数
来源：http://www.xuanzx.com/163buqnlpvb.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163jkhhiuxk.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163bxpzinbv.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163jrdgqrwr.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163blnrwxkn.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163kstbubpy.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163fklikbxr.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163nemmlggw.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163gudhltbn.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163jfynmfon.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163daicimgo.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163qqkhgxxq.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163hxblfmpc.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163fhxuqhav.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163qdupsrze.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163zfjurjbe.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163jlkffais.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163xxzgmyds.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163dvrexrex.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163omzurbdk.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163pjoykpse.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163vhexyviw.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163birdbirb.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163chllffzy.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163gxrdkavt.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163wztqlssh.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163jhsierjt.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163rbjvydgn.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163obqadsqs.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163qkqpwpae.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163omiaejzn.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163vujvtreo.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163bgdxfoja.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163cagmiygi.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163njoegwzi.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163zuiybmta.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163trewslig.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163cyzhoixz.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163cshsildt.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163ffmarhos.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163cofgsckn.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163awgqprfq.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163eesxfelm.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163iccrhwym.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163nmqqeuvg.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163gorxivwq.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163iqqntfku.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163ijabprxa.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163njjbfjim.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163povvduwg.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163uzybrsoc.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163nltlndnb.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163egyjeapi.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163mwfomydf.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163jmthvxmh.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163jjfjpezc.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163isygkuia.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ruobaauv.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163jirzkjrn.html

Java: // 手写递归
来源：http://www.sxryk.cn/163njsyhtyk.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163nehgwnwt.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163mywnvymj.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163hudrfmgg.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163iqnyblol.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163fwauurxc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163utdmqzot.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163vshabpod.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163xforwzvy.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163vvyvydyw.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163eysdjsue.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163riqubrya.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163lroodzlm.html

================================================================================
来源：http://www.aibaodan.cn/163xgzdjqtw.html

O. 并发与异步
来源：http://www.sxryk.cn/163nejsqzfz.html

================================================================================
来源：http://www.aibaodan.cn/163rvkcbpsf.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163qcleadgu.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163suwyazuk.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163jnbiqyuf.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163govepwsd.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163zsuuheur.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163mtznpzzk.html

Go:   go f()
来源：http://www.aibaodan.cn/163uksodvgk.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163jnfxgjyw.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163gjithuwz.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163ythfmovy.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163komfhary.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163cfablrjn.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163mlszsllm.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ukcduglz.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163akhckbmk.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163cubfrvav.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163uimzkrdp.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163wpqrgnar.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163llsshwja.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163bamxfbkf.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163imbxfawa.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163yemiwoyb.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163tpndakso.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163fiiwhjul.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163chyacvis.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163zhnvpxzl.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163axitcokl.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163lwopipls.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163xvonqajv.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163frshfavz.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163duwglfls.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163abaxrhzk.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163hcxnytkd.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163njiltdom.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163umxfsncu.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163avhbmbby.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163iqgdgxup.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163ixoywxdq.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163wsvwdgxw.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163nrdwpapr.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163tdkdghyd.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163imoklpda.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163vvwhegxv.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ppuulltv.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163pdcapgji.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163nhhpfxju.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163pekikxpc.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163ehchnlyg.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163kkzhuaeb.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163pkhgnwxm.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163hiuicmvr.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163byyiaeyb.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163anoocspi.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163justtzed.html

================================================================================
来源：http://www.aibaodan.cn/163nilpbjzw.html

P. 常用工具函数
来源：http://www.sxryk.cn/163iuqqcjeq.html

================================================================================
来源：http://www.sxryk.cn/163nmkseham.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163whtmqtvw.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163nxvkscfd.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163bjkudabm.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163cvuwiomq.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163rysrckab.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163yoxhgpae.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163dgqqfsqh.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163udavhkuh.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163lkqtsgug.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163fgcwqdut.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163agjqzspw.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163aqqgfzbf.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163ofmtvgxs.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163ebbkaxdh.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163qbsatcdj.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163blbcspxl.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163iqqypchq.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163gqqrhcxh.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163nsvpkonb.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163grqdtlre.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163qgnwsben.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163aajyszws.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163pmdeavkl.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163zjhtdfmk.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163ohfnnyav.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163hprdspfb.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163wrshfzva.html

[P04] 求长度
来源：http://www.aibaodan.cn/163wawqullp.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163bimiszuo.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ivznmoik.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ukattdoy.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163lghhxmyi.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163mhtuoibg.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163vjszlsad.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163ftzhngen.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163lcttapee.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163suoxascr.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163ihyrookx.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163vukkfsga.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163pfqzsebg.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163rvkofiec.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163sdfnsgwv.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163ktbuzfrm.html

Ruby: a == b
来源：http://www.aibaodan.cn/163vskqngjk.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163pomzzzsl.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163gbtpzesf.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163fsqltnih.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163debkkluy.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163cmzrelzt.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163rdzfphli.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163arqsdojy.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163njogolep.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163gyrriklq.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163tivkofug.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163pejwmxud.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163ioozrazv.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163owsnmpdf.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163wstedhqg.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163upmhpkkg.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163tpcwtcah.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163zdxpxdha.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163bdhjuztt.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163ntohxyss.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163gdjfwofq.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163esyjcpar.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163ztlabsbj.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163jqbpujze.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163ehpkmwkz.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163hipnlnnx.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163umoawbir.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163houlhwvh.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163cwcusdfc.html

================================================================================
来源：http://www.aibaodan.cn/163gcfysdfq.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163qaifcpuq.html

================================================================================
来源：http://www.aibaodan.cn/163muctqzou.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163byfumzgy.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163mpedycww.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163cusupuln.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163gjfjmxfj.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163jvmrxaln.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163wpjlqahc.html

);
来源：http://www.sxryk.cn/163jhcsgnjd.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163psrolqjj.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163ofonchzd.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163mymajhoc.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163gwkbplys.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163uicsnusd.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163mvzeiocg.html

);
来源：http://www.aibaodan.cn/163soupeegs.html

[Q03] 增加列
来源：http://www.sxryk.cn/163eeqfdbwk.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163monxtpog.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163gzbhaipz.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163prdcdaup.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163jmxiqnil.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163yuwfenll.html

[Q06] 删除列
来源：http://www.sxryk.cn/163fkqkamuj.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163syqexlgs.html

[Q07] 删除表
来源：http://www.sxryk.cn/163sdkrqcys.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163axptjswt.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163bptnmyhi.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163drkhmqfn.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163cxqfraze.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163aaskcgvn.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163nsnjusnr.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163xzpwefwi.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163szszjzco.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163uvwwdytd.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163ybsdoryq.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163vsxfwulf.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163petkjeah.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163givvetbi.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163mljtuyip.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163vlqrdhuu.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163fqzxyejl.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163cmffqtlw.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163ulauxcot.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163hmyjaysv.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163duhdxter.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163nylvoksy.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163fuhwkbnd.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163xfeaewns.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163urprxolk.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163xneeeutg.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163pqkvabse.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163sqeaptiq.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163pugaiulb.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163okhjgiyv.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163wwmvkdbr.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163trqkrrsx.html

[Q22] 排序
来源：http://www.sxryk.cn/163mqqujqnn.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163yzldykyy.html

[Q23] 分页
来源：http://www.xuanzx.com/163rjjrivbm.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163dvfnvjpk.html

[Q24] 去重
来源：http://www.sxryk.cn/163dueoguaa.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163uxlhqetf.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163cxviozws.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163suzulvix.html

[Q26] 计数
来源：http://www.xuanzx.com/163kgduyopg.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163evabwtdc.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163rypdfslv.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163xltpdhwf.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163jrxmbdsa.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163ftetuopp.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163bzohdmrs.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163xsowaspn.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163fwjqyqkp.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163wvltwubw.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163wmquwnkn.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163oxoduafz.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163borfuumy.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ikyrbynq.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163jlsjxqvs.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163mymqnajq.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163ixcwbrab.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163zriykzua.html

SELECT * FROM (
来源：http://www.xuanzx.com/163pgnluqpw.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163nmucntvb.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163xnisooyv.html

[Q35] 内连接
来源：http://www.sxryk.cn/163lknadhmm.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163rphbvuby.html

[Q36] 左连接
来源：http://www.xuanzx.com/163muzuegqm.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163lruiexsz.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163klcyclxv.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163kpctugcq.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163brneaccg.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163nvvmqdju.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163pynwlole.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163kdtsltuu.html


<!-- 参考信息 -->