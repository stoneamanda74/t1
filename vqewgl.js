外链999!wailian999！

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163fxqbmshz.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163uazwhzta.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163jaliodci.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163zjxxsuqq.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163hxikxoss.html

================================================================================
来源：http://www.sxryk.cn/163qkrydgnl.html

B. 流程控制
来源：http://www.aibaodan.cn/163isiburew.html

================================================================================
来源：http://www.sxryk.cn/163eovhwhrv.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163ejqicrak.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163xpxwteyb.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163ribdspvx.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163dphjnorg.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163qyjfhuap.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163iqbwshga.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163tllornbh.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163ktdvldet.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ubekwazu.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163gsoljcdf.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163obvjjlkb.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163ntuxlzrh.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163crbnevvg.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ogonatwy.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163xfvjckpr.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163opffppmf.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163udjlsnky.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163qqoqppmy.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163oxdreoir.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163sytdjomp.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163oqubwyed.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163mwltuufm.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ckasvjbz.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163pokuhoie.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163wkubluxd.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163leotnqsk.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163ytsmpjdf.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163tcrhrpdt.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163lkcwyxzd.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163meoabgjz.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163erucbwjt.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163nigeopdb.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163idicerhj.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163vzrtlbli.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163rkkupciv.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163pbwhkeqe.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163yzjdpkkd.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163lqmrvral.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163wnlumiwf.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ynezvxrc.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163kayddcir.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163wfplpncj.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163pkgfjjmj.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163uzghebnv.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163avbsnyqx.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163kmcmpead.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163gopasopl.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163cokvgibq.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163xscivlbd.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163iwseadic.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163zxjnsjxb.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163gttnspeu.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163myypvwqq.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163edczltii.html

[B07] while 循环
来源：http://www.aibaodan.cn/163cvetmmsp.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163lfsdbewk.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163buygedpq.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163oevssxqu.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163flxchxvb.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163fnxbzdjd.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163bmzuywhd.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163evxfglta.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163mefjoykh.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163stxptqsg.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163oxakhyoz.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163pouiscyt.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163xlxqfwgl.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vewskvho.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163lirgflnx.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163elirzjrx.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163qbgtzvzm.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163psqwvmce.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163udahlpsh.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163mjfyvzmq.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163jmspxcvk.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163pmlemnvv.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163fptkqcky.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ejpstayw.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163trrhhsbw.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163rfwihoww.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163uexlzujc.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163vulvtbtd.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163twfbtbhh.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163kyqbmwog.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163jgrllkrd.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163ifvfrzjl.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163zadswjup.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163ladkcoia.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163phpoaobp.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163dlivkwbh.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163rqsquwxu.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163hdidiqdb.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163atoubaxv.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163oarwsgxm.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163bfzghegh.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163iuxawepj.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163rplfatmy.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163yxnhyzmv.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163zzqebskb.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163inbbmsjz.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163bcjfhglz.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163bntwswqr.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163uodebnxw.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163srhtozeb.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163lbocbnnp.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163orfvmasf.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163zffcnfuq.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163txlqylox.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163pwfrgurk.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163bgdsoqgq.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163ksnysguh.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163drzbwryu.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163uhgdkogi.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163kazqnhxy.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163gdxuivwr.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163iwdgkanw.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163cllndyyb.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163nnmulsrg.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163ouqxufte.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163hfevvhzq.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163yyksslbk.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163iahyzfqu.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163wmgedunu.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163jzmknzdf.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163ycqrphmy.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163neqvssmq.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163utbjqdhf.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163piwjnlbf.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163ctekipka.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163zzcheggz.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163cgabadqw.html

Java: a && b || !c
来源：http://www.sxryk.cn/163yplxvnhl.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163quqgsrkm.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163zxvygjyt.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163ylrysvzb.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163hhocrmds.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163huthbxtg.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163xohbldal.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163zqqbdesw.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163eaxlnqch.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163eclssiuu.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163rntniwbs.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163hgrdwinn.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163lapltqdz.html

================================================================================
来源：http://www.xuanzx.com/163hkhjcxqw.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163hlpayhuc.html

================================================================================
来源：http://www.xuanzx.com/163ymsecaoo.html

[C01] 定义函数
来源：http://www.xuanzx.com/163wiggczzd.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163pxlfrgdo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163yuqpvylc.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163nkcmcdwy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163lyifqxdu.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wgdpirnu.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163ehzwimgd.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163npulrmqk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163osteendn.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163fbnfeyle.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163lxwgwfuq.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163zyznvymt.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163aabhxmth.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163sjmthizs.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163czqiniel.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163juhayace.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163lleaceab.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163hlzexhnx.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163snnydrdr.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163cwywhhpj.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163oijebnxq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163sbjkvzde.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163gvcszxsu.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163qxdnyatk.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163oseiytha.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163jhcledgr.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163qskfpefs.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163jqjwywif.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163xbaevelt.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163yjbonfhb.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163yfiopmbp.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163xbylkbjm.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163crrnpdhw.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163eyokmlhp.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163vfapkkzz.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163kjamjvrn.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163obkxaxto.html

Py:   return a, b
来源：http://www.xuanzx.com/163jwxmlhlx.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163hhatujcy.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163mfkocmvh.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163xbnjtibn.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163rnjcfcln.html

Go:   return a, b
来源：http://www.aibaodan.cn/163hlyxxjxj.html

Ruby: return a, b
来源：http://www.sxryk.cn/163wghqqohp.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163gonyjtyd.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163fesckegl.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163lhppugay.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163queupaqn.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163fgzjspmw.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163iwkdgqpk.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163aivlnttr.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163ntuivezq.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163plbmnihh.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163zrsgcjmm.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ihxsuvdo.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163srrjhebk.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163fvnfniwx.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163npdafdae.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163gqlelftv.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163szaabwwc.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163cushbmxz.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163crabhhvz.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163zifhyias.html

[C08] 闭包
来源：http://www.aibaodan.cn/163gooblcwp.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163cwhugckk.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163yphcxyhq.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163qegxxdtd.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ylujhvsj.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163hdbdinwo.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163emucyfbx.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163hbgqlinr.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xltjvenz.html

[C09] 递归
来源：http://www.sxryk.cn/163sbwsdkrl.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163mfyihuge.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163dxtfhnpc.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163llpsbhvk.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163gdjxurox.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163oqxuhpyv.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163facghbex.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163nupszuxy.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163wllvtabp.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163qonagpxh.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163hivifbha.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163wshqotve.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163darenktg.html

TS:   同 JS
来源：http://www.xuanzx.com/163xqnguspl.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163dyhpobdk.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163ltpwjyav.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163edhspjwm.html

C#:   块级作用域
来源：http://www.sxryk.cn/163bouaryxk.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163klmzhpkd.html

Py:   from module import func
来源：http://www.xuanzx.com/163sjrprgbu.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163kgkdrjnp.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163fykfdsed.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163kttbrdol.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163ledulaji.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163tuefcfio.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163kgqihxim.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163tmupvvpi.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163kcyegkdw.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163yactjnir.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163wrfpeqmc.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163rabwtwvy.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163noegtach.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163eaimhqox.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163pmhhyfwc.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163jfkdmygi.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163tscsgmne.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163dqwolwaq.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163jfsknzbx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163mjdgejer.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163yefzpeje.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163uttqglig.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163igkkijts.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163lqhypkwh.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163hhrawvqc.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163qqmupybd.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163kqdoxthj.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163mafgnfuu.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163ywavvilm.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163ejulqslh.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163rjfqohbh.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163vckwhsrp.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163pgvmsrpe.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163nxsqmbtq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163svlrrgam.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163vkbycutg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163kzyxexdl.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163dujcpydt.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163hnnebxqx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163huxesevs.html

Java: // 无解构
来源：http://www.aibaodan.cn/163pturgiwq.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163kmzxhytp.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163ncnheamr.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163qqiizgjt.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163pxgtzsnp.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163xvdaujlu.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163osxyzvvi.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163xctlggif.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163jttidwsp.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163wnsfazlf.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163stvivwbn.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163obkapgnf.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163aacxpagy.html

================================================================================
来源：http://www.xuanzx.com/163ojlkiaxs.html


<!-- 参考信息 -->