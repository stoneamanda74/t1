外链999!wailian999！

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163qkfqiylb.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163jqrayasu.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163vvtnnpcv.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163fgrxxevx.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163dzqbfuie.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163jfzogbgj.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163ylqschwo.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163zbgtvins.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163luvjzhfj.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163vtqrhdsa.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163tinqsxvs.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163esjhgajj.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163oiazesjw.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163dztracsu.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163ahmdsdlk.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163leejskpo.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163vwjwtiwc.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163ckckpahw.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163nkfritue.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163zfghveeq.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ngaifccs.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163gksaorla.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163hrxgdwvk.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163anbyuaeu.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163rqhrknlj.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163ulcizpvi.html

[B07] while 循环
来源：http://www.sxryk.cn/163kwxypbml.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163zyxmrikx.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163hqfdwftu.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163wrpeylxw.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163lsirghky.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jcimjymg.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163hqooubgg.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163zobfujqd.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163dopzkmpc.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163sllyohdp.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163xmbylolj.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163khykiqia.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hysmycas.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dbvcrtrv.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dpbfajxn.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163jswabgre.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163hsqczzre.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163fukthpgz.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163nkalkgmd.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163ptkfcesg.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163budbesjk.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163fogcqgrr.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163czutxuga.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163yaivnzkt.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163xkdzdsrj.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163hxouafua.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163nixjkdwt.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163wfdqftqs.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163ztujjeds.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163jmccofvn.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163nbgoofed.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163ereipjbn.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163ecncaxbs.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163qlqjaztn.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163erchzltm.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163uleomsbd.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163rhdqptsm.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163moqumvzn.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163mujpdpao.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163aswshdrx.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163wutoggjn.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163fsuwumgn.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163lfryaxxl.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163afhtelhm.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163kpprtmvf.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163ascsvljq.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163mfzhphyx.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163bdiipkaa.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zlodhvhh.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163kwbcugdl.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163pkeppjnn.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163nadiaiel.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163kqeexldn.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163xexzzvbv.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163gdvhynxy.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163qvogcgla.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163fqomvanf.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163khdtcrmg.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163hiscoklr.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163khqteqlv.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163xwhukika.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163jpcxsjis.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163ikdmenqv.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163aiabjpqy.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163hhjovjkd.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163tlhwjech.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163kafgwkck.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163vdxkbstd.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163mhpppsuf.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163fzqzqpsa.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163qxqpyuri.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163btjhlhso.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163vfegqega.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163xefoigjk.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163pgixdpft.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163clgoowva.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163rzpfrrur.html

Java: a && b || !c
来源：http://www.xuanzx.com/163emkbvhan.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163dfsrwcvp.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163fanzizye.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163xwunxcyi.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163sxgljkla.html

Py:   if not data: return
来源：http://www.sxryk.cn/163nnqulbgp.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163qfikupwj.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163ozplhgpk.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163tambrtbs.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163jlzghprk.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163wlnzsakq.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163uwkcapzw.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163zmergwga.html

================================================================================
来源：http://www.aibaodan.cn/163uabuzslp.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163siwdgjjy.html

================================================================================
来源：http://www.xuanzx.com/163owivmfle.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163qddcbnjg.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163achngoiz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163yisymhup.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163hsrfyasz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163yflmryfu.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163vqdgqiax.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163bkzqakrl.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163frxepqet.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163jhbdtfro.html

[C02] 默认参数
来源：http://www.sxryk.cn/163fnmkpxje.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163cvxhspam.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163jaakjstl.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163gqmylpyo.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163meipiqoi.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163fganqwnx.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163ycuhdady.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163xkbtbgpr.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163rqbachom.html

[C03] 可变参数
来源：http://www.sxryk.cn/163kypitloc.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163vtupgymz.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163mrmmrknq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163boexhuxd.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163kehvisdu.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163fdgaedfj.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163atvokwvl.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163ifepnnwx.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163qwgxcvms.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163oqsmpmuy.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163cmilqfkl.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163kzwxcxci.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163fiqknkpt.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163wjpqbohw.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163krodlcfq.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163lfzjvkcl.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163pglnjzks.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163zvhpezdn.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163fqenojqu.html

Py:   return a, b
来源：http://www.xuanzx.com/163pprtwqmv.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163lrlsbqky.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163aerbznvt.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163wpuiiyba.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163vqoflwoe.html

Go:   return a, b
来源：http://www.aibaodan.cn/163jvtisilj.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163aijzvplz.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163onokphgn.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163udochlzo.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163hxbjlkyu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163nzsvpggt.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163osoersgx.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163drnoesue.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163imwczbrz.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163wttdrurx.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163sdebxrak.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163nbajoftu.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163umlcvrsk.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163xymniwcn.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163twhndwnk.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163mkmjhqzx.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163mleeswdh.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163peudoqec.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163tmllxlry.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163uijrsnbi.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163gvlobrks.html

[C08] 闭包
来源：http://www.sxryk.cn/163emfqzfob.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163hetnydfd.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163purgmtnc.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163pyjablni.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163avqdpiiy.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163mtzdplvx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163kppvwrdo.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163nihqutur.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163rpoyhaat.html

[C09] 递归
来源：http://www.aibaodan.cn/163grkzhioc.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163vlfmnpbv.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163cgzpdnzc.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163pjcqcjrz.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163pnlaiwnh.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163jlvckscg.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163bqlzhqtj.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163mfilsrwc.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163ucafqssr.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163uzzqnsnn.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163sgqwcveh.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163xweguvyj.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163djnhkqnd.html

TS:   同 JS
来源：http://www.aibaodan.cn/163fffnlxcs.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163xcwylibg.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163smdbnmun.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163clrnpozu.html

C#:   块级作用域
来源：http://www.sxryk.cn/163jirfxyoc.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163knbdkmuf.html

Py:   from module import func
来源：http://www.xuanzx.com/163utwawudq.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163afsyypux.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163jujpzgds.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163vvdpqwkk.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163ozczjqde.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163hqqepcon.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163xtyubfhm.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163afxevmyy.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163larslsnt.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163ooifytpt.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163dewmxjzz.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163kofybczn.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163kimbnzpa.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163wgsgvopo.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163dxqealpo.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163yjqfyuvi.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163zshgyauj.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163rrwpvxwd.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163uwlgqalh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163cztfkhug.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163kgdiypkj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163fdxeseif.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163znblnebe.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163gocgaddy.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163lbwylzbe.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163qbhzllci.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163yhikfcrw.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163tbcipsvj.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163wyuoasuz.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163hhrfemor.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163txrmtyal.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163koncllyu.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163bntuadkc.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163hfwqlmhj.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163blxwoowp.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163bgivchis.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163zzpjxczf.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163jccqotad.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163rwkikglb.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163cprokfgd.html

Java: // 无解构
来源：http://www.xuanzx.com/163yuzkmbor.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163dxffpzmh.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163kfrgeceo.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163bcinzjwg.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163hfhzeoey.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163vzvbwfrl.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163mjrxmbqq.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163bmyuuafo.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163qqzqjcyi.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163cpavjish.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163iiuocomx.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163toafiuzf.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163bleyekza.html

================================================================================
来源：http://www.xuanzx.com/163smiaundp.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163qjrcovec.html

================================================================================
来源：http://www.sxryk.cn/163wdkaqitm.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163bffftjlr.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163yvgtuekw.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163ekikbslk.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163ubpqpsmr.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163ulxlgywp.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163rnmydrhy.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163wjtdnjdy.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163ecfwfwcu.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163sdkqhxyz.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163hbecuauz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163gxwifgfy.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163kxgzckav.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163jwzdyyjy.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163ntayofeg.html

Java: list.add(4);
来源：http://www.sxryk.cn/163cdmfpwnt.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163asigfppc.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163cwipgiml.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163hqcdptww.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163bvtqbale.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163iaeqyezn.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163cihsyeur.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163vaxkvqwe.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163fibsfiwb.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163rdetlzyl.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163gsuexcsg.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163viddxinu.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163wrginbue.html

[D04] 删除元素
来源：http://www.xuanzx.com/163vyjprbwd.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163lyypxfki.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163jxixpmth.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163qoowubht.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163ungwvczo.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163mdtkinke.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163agdnflxo.html


<!-- 参考信息 -->