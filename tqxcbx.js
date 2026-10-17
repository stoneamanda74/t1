外链999!wailian999！

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163fcwlwjzw.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163eslttryv.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163soxktamr.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163evmbilmj.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163wiabpuda.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163pjicmrps.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163ygfmipik.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163eifymktj.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163fqmnphws.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163nxokxefq.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163rqfmkizj.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163oqkkzlgc.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163kxuencap.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163rlaosust.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163meqjsekg.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163ltzpduav.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163xajzlxtr.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163cwcfuebk.html

[B07] while 循环
来源：http://www.aibaodan.cn/163reygodkn.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163aeyoqrgl.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163gynyrdgu.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163kbzgkfeh.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163losyvbrd.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163tojngnfb.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163ppmykpkl.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163tdktjvlh.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163twxmipgb.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163qgxejmxy.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163wvqvnlfn.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163tpfmvasu.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163mmqzbpwb.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163snbtgecb.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ewduuttl.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163dxqispxn.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163efjzvuxj.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163dsjztvmr.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163ecquzzcv.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163eukxtlhk.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163aolabtff.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qpobvaai.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xsrjjfjm.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163iitvrnkk.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163oztjmprr.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163uuczrhlw.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163lwzjrvco.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163ckpvrrfk.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163wyjomtac.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163gxxrbtic.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163pnvrfshj.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163suzsgwdk.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163ehblpqre.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163nwxpexbw.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163oreaslyc.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163grrwizuj.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163dttardea.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163uvcaylxj.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163jqoknsrv.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163wasldtsq.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163uiwmqwnk.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163hibvvadn.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163jyrzqpnl.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163frrbovet.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163shvgmqqp.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163umwftvvd.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163kvignazr.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163msgvbcok.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ecojeuqq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163fidpgkny.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163hvharbhc.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163miidilyq.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163wnsjmprm.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163tcibjceh.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163rgprwmyo.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163xaqhqrtq.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163engwdkbn.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ptsyveyk.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163mzkujlre.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163mpdzqfpe.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163qwugjvlr.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163hhtqxmsf.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163kvvdxarc.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163luppqmnr.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163wuqtfoid.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163hmscowaf.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163psmpifux.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163elnesaqo.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163dliqswpf.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163kriclsas.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163nnakothi.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163rvbgeohr.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163xpucbijt.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163gibwzcrr.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163vjqapwzh.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163gtprowdf.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163tviygfrt.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163peviierd.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163ykelqwty.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163fynznpso.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163naotzfcv.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163rzsglpfl.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163oyqcriju.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163ahfphqab.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163vusuqvkg.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163bwlpdxdf.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163tscxbuzz.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163ketefnio.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163wbsmboaw.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163uwtkrcjk.html

================================================================================
来源：http://www.xuanzx.com/163vkwdbqxc.html

C. 函数与作用域
来源：http://www.sxryk.cn/163naaasvei.html

================================================================================
来源：http://www.sxryk.cn/163qychelaq.html

[C01] 定义函数
来源：http://www.xuanzx.com/163jmdtqyeu.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163qnjbjlev.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163opeuxobk.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163iuxtjzfz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163sluiuyex.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163gykpjpfu.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ntxduljk.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163xqgsbcrq.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163smjpczvr.html

[C02] 默认参数
来源：http://www.xuanzx.com/163aehoegfk.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163luiwsowf.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163koonffpo.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163yquuvqdz.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163sfgjyvab.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163cgjtihte.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163mlhezhve.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163zcvbbgaj.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163rmbyhxcl.html

[C03] 可变参数
来源：http://www.sxryk.cn/163eanfzysd.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163psgahyxm.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163kmhpviaf.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163mfzptmfl.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ywvuepzp.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163elngbimy.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163qjkjsgke.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163jcgzhzpb.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163jedlduhf.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163ykkfkret.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163xdtkwlld.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163fzguvwye.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163vygeakdx.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163mhidpflz.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163uxmtqusf.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163cxkhbkgf.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163gtpsttwa.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163hysqvqqy.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163xvabaqqj.html

Py:   return a, b
来源：http://www.xuanzx.com/163tzgcqgsz.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163fmfuxxsy.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163epvovroz.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163dakkeneo.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163dahzvqln.html

Go:   return a, b
来源：http://www.sxryk.cn/163nowzwgmb.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163ogafhovu.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163gwtfjxft.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163kpqdqvkq.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163wdjucwxb.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163ragvxico.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163zjvtzxuy.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163uerupmqk.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163gdvlxhke.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163pvbcscge.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163xufrargs.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163vibydgcg.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163htpxnloq.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163ilftrutl.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163voeezxtx.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163wcsbkhaa.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163unotcnad.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163zfbgooau.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163heocawck.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163rsbeuatq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163gczuibvo.html

[C08] 闭包
来源：http://www.aibaodan.cn/163kxfbjijk.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163hdkrgqqn.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163upowhauf.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163kmdrtrfc.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163bmauklyq.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163xksffqsz.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163mgjwrtrx.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163nzbxsmiw.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163dfiqumeg.html

[C09] 递归
来源：http://www.aibaodan.cn/163xpimipkv.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163gdgjvuqv.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163arsqhkij.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163zqhahayi.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163nghdqqdr.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163tyovyzqm.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163tzemteus.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163brulleiz.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163bytabuly.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163cdxddgsv.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163huaszkjf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163xlcgprld.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163avbrdyhp.html

TS:   同 JS
来源：http://www.xuanzx.com/163rqvkcueo.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163zwabxdom.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163gmjnulcr.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163vxluaceb.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163luryxvtq.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163efieorng.html

Py:   from module import func
来源：http://www.xuanzx.com/163hygkekhb.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163bfwzrzls.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163uprplczf.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163sdxqgiuv.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163qjbeocif.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ulxqwbia.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163hlsvootd.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163uwsyrrpm.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163ihrcxpbn.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163syzgfimk.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163latndghz.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163eeczsphk.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163hychchze.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163sstzytxe.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163ppldfgbv.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163epflofvf.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163rqsiksoz.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163ygtgokxz.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163vizerhpd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163uncwmfwy.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163srtrksav.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163dxpknaly.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163mviwqjxv.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163lceemmlq.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163saefreei.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163ltsmlfwx.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163ualyrabu.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163pjbqfgbp.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163uqcxbzwn.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163yskvnnje.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163qzhfztmm.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163gkodplmd.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163jdwbwfhe.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163rvawfvqc.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163uplxhjry.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163coekpnvn.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163bkctyyxc.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163hktgargg.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163hizxdyqf.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163lovwzmno.html

Java: // 无解构
来源：http://www.xuanzx.com/163egjodyhh.html

Go:   // 无解构
来源：http://www.xuanzx.com/163utvoqlxv.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163rzuglkek.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163bukbvham.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163evsqanly.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163unlkjiid.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163rczsrozf.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163iuojojum.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163zbiqmnto.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163hmjlctih.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163fonoiduu.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163ijgbjnvu.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163ntrlixhz.html

================================================================================
来源：http://www.sxryk.cn/163agmcxjyc.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163suwefico.html

================================================================================
来源：http://www.xuanzx.com/163zpujnlvd.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163uilfayda.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163iucxxxns.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163hyuaodaf.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163jheozovh.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163kcpoujca.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163ybqeuvtx.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163bmbcxazs.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163dpnodidh.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163homqkser.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163jtmbquch.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163gvkwclhn.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163xuwwxftv.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163amoqbjlz.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163vsbfkhrj.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163crrxfbmn.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163timuyajw.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163zcjtajrb.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163vkjxztzm.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163xpqsmvdf.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163wahmmdnq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ywaftbgd.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163nhuejjog.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163rflnntjy.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163uehkifbw.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163fibvwzys.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163xumbxgcx.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163chqwdjqt.html

[D04] 删除元素
来源：http://www.sxryk.cn/163xickysir.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163wtzvaknb.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163jxmhkphi.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163bhzpfdlo.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163gwmhmxwi.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163idvcdrku.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163lscuzhjb.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163wxdqujsv.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163mczkqzob.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163zafmzycb.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163lerqyqns.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163hkmnpudw.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163dukuxkiy.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163sptlseni.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163hdsgtdmq.html


<!-- 参考信息 -->