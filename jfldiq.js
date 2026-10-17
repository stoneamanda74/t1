外链999!wailian999！

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163sbkqczxb.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163xcyzqili.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163gburvlbd.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163seubbdhf.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163yobtnfgq.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163sbxqwgic.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163ipijfrie.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163zhczaiqd.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163rxdumvcm.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163nrpipfrd.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163ouhgeswv.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163hdstkhci.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163temxcaev.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163nzblbyzw.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163zarufezf.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163tsgphqtf.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163wlgukamf.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163weqvrvuy.html

[B07] while 循环
来源：http://www.sxryk.cn/163oyixjhvk.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163wvqumnnz.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163osrvftjd.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163mjtnhopl.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ahseahpj.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163sjzihbqa.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163dizottfv.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163wnbeihhd.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163hqtwnvfo.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163iwgsiofk.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163wzdpxemo.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163dcdlwfkl.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163zxhcjyad.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163mjobvhec.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163vikvwzql.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163cyfklzlg.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163lbdjhede.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ykwzkoij.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163jjujxvun.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163apixkcud.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163qehfzsgm.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163nepdutyx.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163rydkkqwn.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163drwlcvnv.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163auuhtauk.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163khtgtzuf.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163lysxnwxy.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163yarbdpsu.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163faqoebqa.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163hommknwk.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163omufunma.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163fbnrcpmt.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163xmyyxful.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163zggivtph.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163fjhwowuk.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163aykljvrd.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163uqtqqvpt.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163zlfxjyhj.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163gaismqzb.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163gvrjycgo.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163eifigqnp.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163gvmtygmo.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163bnkznhib.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163gobrkrrz.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163asgjrbcn.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163sabuadsv.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163cpshiapy.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163nbvqwnbf.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vuxtlflx.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163wmebstyt.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163qxzafpuy.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163kzfvotzh.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163onbvcntw.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163rvyldfxz.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163cslbgsvk.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163ejxpyylz.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163nkemytzj.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163brkrpusr.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ngofgmpi.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163dwlovnml.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163aynpvsvx.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163lwqbjfqk.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163qbpazkgr.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163kjyhamle.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163vypaohwi.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163nkomxhmy.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163wdwwuriq.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163aexvzona.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163gucvwuwd.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163rycvcxrw.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163vjypmaqt.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163vhtqeahf.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163ffbtmcnj.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163auinpgjs.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163vazivldr.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163nhrilyyi.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163rdyljmhq.html

Java: a && b || !c
来源：http://www.sxryk.cn/163kcyhxdbm.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163apncrbxb.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163qyjctntr.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163dgitohij.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163simifxvl.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163sdwinrau.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163lxpqqgzn.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163nnrrzlav.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163slpgfuke.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163zmohftqx.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163mvttlolw.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163kuyuwznk.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163peziiczi.html

================================================================================
来源：http://www.sxryk.cn/163vwliiczg.html

C. 函数与作用域
来源：http://www.sxryk.cn/163uwjosqbm.html

================================================================================
来源：http://www.xuanzx.com/163hpscjddx.html

[C01] 定义函数
来源：http://www.xuanzx.com/163qamfaazi.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163aslcdiwu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163wiswtdhy.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163utuneeeg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163badjnhni.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ksnslccw.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163bqojobpo.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163iouiwtib.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163azuatboh.html

[C02] 默认参数
来源：http://www.sxryk.cn/163bznvmoyf.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163uphzspju.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163hgalgtgk.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163zahwrggi.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163bcpsnpml.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163tgeapaoo.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163ffoaiyxj.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163pcqrtugx.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163kvpuzcht.html

[C03] 可变参数
来源：http://www.xuanzx.com/163bdwuarsn.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163dfmdksng.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163adnmvgzv.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163vasaglgh.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163wgkviaqw.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163ggvvnpls.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163yeowgjzy.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163byxhzksd.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163fpkkvsyh.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163crksuikw.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163mrlfepus.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163qmqgjusa.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163hmrqqzns.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163fdvdyfwp.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163gnvbjxxl.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163oqdqppoj.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163rfkigizk.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ieiafbas.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163jcjmcerv.html

Py:   return a, b
来源：http://www.aibaodan.cn/163ozinmqtw.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163gupywvez.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163mzgmkndk.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163phooitea.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163darpmwsj.html

Go:   return a, b
来源：http://www.sxryk.cn/163cxvbwcrm.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163curevwtr.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163tigyxxda.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163twnhtgbi.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163mrigdymx.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163ijarfkah.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163qrwxijps.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163cpnyfizf.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163pltteuaj.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163ujynhpud.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163ezaukgyi.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163nkglrmpi.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163yjldryuy.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163ntfyjvsx.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163lrspgkha.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163rrxnfzhs.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163stkvhvoe.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163ikjcynjc.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163jzpeejvo.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163mirkfhic.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163xvlprcce.html

[C08] 闭包
来源：http://www.aibaodan.cn/163bbwwurww.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163ymrynmhw.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163djartfya.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163wmehvxer.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163sdjcpkqv.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163sfselxka.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163egdmptso.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163aavmryne.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163sabzfybd.html

[C09] 递归
来源：http://www.xuanzx.com/163yqijkiwm.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163ywlwtpsp.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163ygtehosb.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163pgrsjxrv.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163wiapmmzq.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163oegdhaok.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163hedppqyv.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163ytuzinml.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163zlwuuqil.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163jelunjru.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163iaxjmznc.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163mlsrgnrn.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163doxanqen.html

TS:   同 JS
来源：http://www.aibaodan.cn/163iewvjhfg.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163bwzxdwsf.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163bqhzqfee.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163awnxpuaw.html

C#:   块级作用域
来源：http://www.xuanzx.com/163egvyjdzd.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163gbnyxkus.html

Py:   from module import func
来源：http://www.aibaodan.cn/163olfeltfd.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163hgcyywjv.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163jdpmxoym.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163dsqcshpb.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163ivyofrsg.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163sjkntich.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163rvpqffcf.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ipvrtcdx.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163zqaiomgm.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163tpjvctni.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163gayggssd.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163xhzozmgr.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163qanzyrpx.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163yknhyden.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163cvicjuhe.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163vhsdncpv.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163qjeczvnj.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163azopzqdk.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163mniyapev.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163aqehkdqm.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163ygyzbrwu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163migvqdmr.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163jzyrorkg.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163jtcwjjwj.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163lyrokaef.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163ulcrgjyo.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163ojlpqwdc.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163hpdhtgni.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163zlmttedk.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ipxxejpz.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163zzudgqsa.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163durqnacw.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163socigkqm.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163wqimjuoy.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163anzitbkj.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163mympjvbg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163wqienwas.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163zlamfitl.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163zayyffek.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163uiylffrf.html

Java: // 无解构
来源：http://www.xuanzx.com/163jotptktq.html

Go:   // 无解构
来源：http://www.xuanzx.com/163pvfhbugl.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163cjlvolyp.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163mgqaricc.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163rlavners.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163jfdmdyjy.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163zdyjnlao.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163yemiyjlh.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163oolkmllo.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163qwdrugpn.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163txhebocr.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163viskiemc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163gukvvfhi.html

================================================================================
来源：http://www.sxryk.cn/163pijozydx.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163vznwjlmo.html

================================================================================
来源：http://www.aibaodan.cn/163crnwfjwz.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163mpuvvlrl.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163qwqpcymq.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163orsjaovo.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163pfyffrdh.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163yxhljgro.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163olngayno.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163smghlkko.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163asmrxppe.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163kwhdbgaa.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163ubhxqyht.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163yiammdlb.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163smkfqvqt.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163leqhotgv.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163kbesbbuj.html

Java: list.add(4);
来源：http://www.sxryk.cn/163jbmwwcye.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163ahxjyybi.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163suvgndbd.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163sqcocbbb.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163hnxefweq.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163owqfyvix.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163tltwkovr.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163njtmmjvt.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163nujfttsm.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163mssmleqd.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163uplperqa.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163zqiegtzo.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163ythoycvw.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163xomdfmej.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163fvdxsnog.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163byasoqva.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163mfwxecno.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163glrbloij.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163bcnfxsej.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163azjtzpvq.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163turtzsan.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163kxpjwufx.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163lhetbvny.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163czmccoix.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163reqlggrs.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163csznfzkr.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163pavbqmny.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163qnzzpzny.html


<!-- 参考信息 -->