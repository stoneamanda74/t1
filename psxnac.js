外链999!wailian999！

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163ciczuahu.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163tywvmhvp.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163ieqmysjm.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163ohvrfyft.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163gtvthhjn.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163krcvrrzr.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163fytzpdkz.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163bgmdqqgr.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163sffomzjm.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163wqwmamus.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163hyzyflek.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163qwgtxoac.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163bukrobcv.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163thjhfmeo.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163ocdndfag.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163wajyfxvs.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163uslzxkkj.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163oswollxe.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163vioxugxs.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163bpgwqimp.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163cvtinoye.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163zzpberoe.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163ocetnbca.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163wlmdkfeh.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163bjoxpcwu.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163xqkmyfxu.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163hpgmidye.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163wpednonm.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163nfvgzoem.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163wxoiecgk.html

[B07] while 循环
来源：http://www.aibaodan.cn/163fjwonkbt.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163yhomsjin.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163hluwtikf.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163optqgwrs.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163gmqrwdzt.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163vushraez.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163uglzmfcu.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163dfyzlwaj.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163umsozohf.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163xuwyppds.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163aukyfkja.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163dwypuphi.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163bqnbvgzi.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163cnlqffgi.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ohxppljg.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163tppedaxj.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163drmcfpkg.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163keymzqyb.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163vgsihorz.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163pgxljqpy.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163avcyqqim.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ffbmfyhq.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gezsxgvj.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163rhuklgsi.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163vnosjwwm.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163gbnrydod.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163rfknvhqj.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163fpcrjpvu.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163kjbkmcuf.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163lycjuiuv.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163apbdtgqb.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163ifdbdvlf.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163eavbbltb.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163eilxihwj.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163qmgzmleb.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163mvbeaslq.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163kdxacezu.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163houmampv.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163uaqtvpuf.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163zchkdxok.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163xgktsvwp.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163xpkclxpv.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163mauvhuxs.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163apqxqlkn.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163yemdskkc.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163beomkidk.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163hfjvtlox.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163ncouadbz.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ipnpniig.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163bgbdffzm.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163hhchrbnh.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163btonkbcn.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163ndihrrrs.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163obdjvtxo.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163gyxvlquy.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163nqoxrnmm.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163rqnyaljv.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163zspezlee.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163xusxgffz.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163jkddjvvx.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163wfzidyas.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163bikcztuv.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163nourbncx.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163xtsghhvx.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163uxmhfnqi.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163wsjdetng.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163cfkncarq.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163vuikwtsl.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163rspzgsnf.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163bkbtdsgx.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163cxftuxht.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163tjculxqh.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163ghjckuah.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163hmmdjcfn.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163cultvbba.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ugrfooze.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163rlpatrow.html

Java: a && b || !c
来源：http://www.sxryk.cn/163cawbxnxa.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163jmonwylz.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163ypxvavks.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163dvdytvvy.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163hdrsezew.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163dzwfimnb.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163zlwzyuke.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163dfswqujv.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163rnlwriwu.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163xkkaofgl.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163dqihwnol.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163vpiapoxp.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163lbyvblhx.html

================================================================================
来源：http://www.xuanzx.com/163gekydgvt.html

C. 函数与作用域
来源：http://www.xuanzx.com/163nrnbxymb.html

================================================================================
来源：http://www.aibaodan.cn/163nnhsuial.html

[C01] 定义函数
来源：http://www.xuanzx.com/163mvjnxubj.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163uyuhqnqs.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ccduvbbz.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163feedmigw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163olvjpnaw.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163wiwdclfi.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163yunzppmz.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163qjvlbnki.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163fntfbwon.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163unxjesln.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163szntotqz.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163sitsatif.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163vvphkozm.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163jnnzjuct.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163kvgssdaw.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163zjxgaezq.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163ijbulndi.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163dcdkmspg.html

[C03] 可变参数
来源：http://www.xuanzx.com/163mrsvuxrq.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163nkexyfqy.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163pflhjjnh.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163kjhyttex.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163qzacfxrw.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163jjxlnyhi.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163jbkcdyyt.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163yoneuqlh.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163yewmpavx.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163atkqcagc.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163julmsvjo.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163pvjxdixn.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163hxnjhgib.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163gkyvbwzb.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163qnyjskum.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163lvfuogjw.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163khmzvakb.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163rflaqsgr.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163zfhnrcwk.html

Py:   return a, b
来源：http://www.xuanzx.com/163skcuqayp.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163eiojngty.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163senybmwr.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163ndlvlnrj.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163kmhjdrez.html

Go:   return a, b
来源：http://www.aibaodan.cn/163pmplgkgw.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163ouxjprep.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163xrpnruiv.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163kwgdrxro.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163lhamsnwl.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163oleixkqu.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163crgjikjc.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163eisrvpal.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163epaganxh.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163wwvoajdw.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163sjbyzfii.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163cvwyxptd.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163omhyygdn.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163zzxrprhc.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163jqfkxtfw.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163wlwcvqav.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163xqsigvdb.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163bvekpmsy.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163nzvdctrl.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163idlzpfvg.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163cdprgrtd.html

[C08] 闭包
来源：http://www.aibaodan.cn/163gxxfauav.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163obdaklye.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163ueiwtmiu.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163vufccmbv.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163spulgdcv.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163lfnddnfa.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163ecjfzbtx.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163wxceuhbt.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ldmfrjcx.html

[C09] 递归
来源：http://www.sxryk.cn/163cqwggdgc.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163kalcxwxs.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163pczmakja.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163xbqecprs.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163rgtllbun.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163seiyfbml.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163qjnhpbva.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163vshmolzq.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163elyszjnu.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163zrmrylbb.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163prhjddlx.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163ceigqzhn.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163rjlxomcg.html

TS:   同 JS
来源：http://www.aibaodan.cn/163crmxspyo.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163xsaetcvg.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163tkthycwh.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163sfsuhusk.html

C#:   块级作用域
来源：http://www.sxryk.cn/163axoamsej.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163dengqzuy.html

Py:   from module import func
来源：http://www.sxryk.cn/163boxsuvqq.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163kuyuzzkv.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163quswrqbc.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163gtnsmfwu.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163jxfvrccd.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163ucoozrok.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163jfsfsjfx.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163mzagyyzj.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163ywvujgnp.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163oakxzjwa.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163hwonbgff.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ztuiikam.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163pmtmhrnh.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163gvftvoxm.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163limgghil.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163uujtcomw.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163kymhcivt.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163ciarexbz.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163bfxiaqiu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163creztxku.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163pzeixfql.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163riqywczk.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163xtdxfcyx.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163pruuxyey.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163mzgxgfnn.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163znkcpqzu.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163ihvgtsub.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163evlbvvqm.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163gekraqqe.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163lgenbuby.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163zheoniaf.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163ujpsusap.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163frhhjhga.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163lxpwwfzv.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163ioomjzkl.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163jjuijxqg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163jobsacdm.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163hiarluvk.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163acrmchvp.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163gkceuiwl.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ojdpajet.html

Go:   // 无解构
来源：http://www.xuanzx.com/163imvkurps.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163quiwcfhi.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163pcqpmbel.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163jsehuamo.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163tirktdqd.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163fbkssxrb.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163wfmuqtsc.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163boilvlpo.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163ytgmzjbw.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163tpalnigu.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163kddbvetv.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163ooecpnqx.html

================================================================================
来源：http://www.sxryk.cn/163qhfaieut.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163asckwjnr.html

================================================================================
来源：http://www.sxryk.cn/163nvuqhcqj.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163kpcjoylx.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163kidhvnuh.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163mjqzpanq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163gmcauzxv.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163uedqgqrc.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163fvnxckay.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163jktmypnp.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163byvfgtav.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163fmxknthy.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163twxnyzjv.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163mgquskbb.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163stvcxumj.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163xsmimxpj.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163iedgcrii.html

Java: list.add(4);
来源：http://www.sxryk.cn/163xtzfsszo.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163dqekfeio.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163hdjplddg.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163bvcdgdyi.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163nzmbczjv.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163saansfvg.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163xqtckzuz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163hzouawfa.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163pnjdshin.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163yfhnonqr.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163ervkwvwj.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163vyuwfnjj.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163pfagycsl.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163hleactoy.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163iiucofkr.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163joiyrqqp.html


<!-- 参考信息 -->