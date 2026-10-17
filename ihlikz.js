外链999!wailian999！

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163qmqnrmwt.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163bedcdsgk.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163ecaxjtch.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163fijjxoyh.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163fteewhvb.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163eplclahk.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163jdicpbgp.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163uxdcefkw.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163vrmpqphq.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163fvaqmqby.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163hjvbtdbk.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163wgtzzgps.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163fnwxpklb.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163klrtvjze.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163abmnwsfp.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163gwmlgdmx.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163rcfbpebb.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163cxwfkyul.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163cfivaqpp.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163htebullq.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163uypeynen.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163skqgvfxz.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163epcgvtbz.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163yykmamuy.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163cxwwzamj.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163bmvcphwq.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163nibxiice.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163ckyyltnl.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163vsemcwoc.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163jlepgtcu.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163exzflnnz.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163lpmchczt.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163rmrydcrv.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163ewphdssu.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163uysrrlmm.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163plwrhnmg.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163urypxqap.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163aqtuagdb.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163szvlnuvr.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163jgcvikej.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163fnwghipk.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163jobwbpsd.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163pplexbpv.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163nilpnucv.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163jnynswkp.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163ihevtyoo.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163rlheezxb.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163dtqlnuii.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163rdtrddpn.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163wxmttpsf.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163wazcdphe.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163mhcuawev.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163ptgaycuj.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163upwygfob.html

[B07] while 循环
来源：http://www.xuanzx.com/163nskarqlp.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163jnwnustb.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163pdksrcqk.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163vlrbnalm.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163lxthvqqx.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163mlwcbdrv.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163glianewo.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163hqbyvwlu.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163itydqvif.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163wvjcaltk.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163zsdlajsv.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163giwjyrtv.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163gxakkdkc.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vmhryluz.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163uykztkbl.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163mpuapyra.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163ylklddmy.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163eubotqkt.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163mzoogfdg.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163mywyhduy.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163qurovgbf.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gkadtlwj.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163sljxqdfj.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163hxwdqawe.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163bolbptwo.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163xddgapch.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163epltnuba.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163puptsqqc.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163iwoxlbxg.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163czxobemh.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163radxsvzn.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163pxsbrfkv.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163lpcvasyr.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163nlzayiyt.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163saiwkpth.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163rjsigjun.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163dkjqqppe.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163hjedyjeh.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163zakmietk.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163hgujrvkk.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163qmrmztma.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163izlwrxcf.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163qwlzcxsf.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163stfzmyor.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163xiuskbvs.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163vrpsssli.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163kwzrndwb.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163ujaibnvj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163cpkhuugj.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163uohssvat.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163wckmwqul.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163jdzowtbp.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163vpactwuv.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163nosbdaas.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163wsuccxyi.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163pfceyhmn.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163jlvqmfrt.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163pjntgcxq.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163heyazyuj.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163mbymdvez.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163okcrjyjc.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163igsjmmak.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163fozkneoq.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163wszsytbh.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163eogfluqa.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163mtguwwjq.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163yaxbcikf.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163otvvaxwq.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163qperiqri.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163leaecclz.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163gcqnbnri.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163njalrrfs.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163rodobdqu.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163uipwkilr.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163knhpyubu.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163jqaxpgdo.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163pyswdpsn.html

Java: a && b || !c
来源：http://www.xuanzx.com/163xhlhnzaz.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163mreqgmoq.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163wpqqrnqn.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163atawzqon.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163eqqbhjcv.html

Py:   if not data: return
来源：http://www.sxryk.cn/163styiagou.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163apdujkxx.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163fhsyfwvj.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163bbijsclp.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163lauthyga.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163pzeiwdxo.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163ucxwdkrm.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163ditteoak.html

================================================================================
来源：http://www.sxryk.cn/163payagyza.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163kwxqsbjn.html

================================================================================
来源：http://www.aibaodan.cn/163dcdwmwog.html

[C01] 定义函数
来源：http://www.xuanzx.com/163msvdoefm.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163vqvpjfuo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163utsszttq.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163jezdpphv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163gfcgmbsc.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163sazhsmwe.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163cdseobzq.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163hefzfjre.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163zafgnsem.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163fkborfzx.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163itwpkooy.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163ghjlyapv.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163nqdoxtov.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163rrmwrnrn.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163vgkwoptx.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163wnongitx.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163aypxncml.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163bihzojdo.html

[C03] 可变参数
来源：http://www.sxryk.cn/163rkyyncrk.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163npbiqfqx.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163dcwpezif.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163mwwjkorj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163seuykirf.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163obngowhe.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163olgogqrz.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163jytdbdfn.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163kmmxjvbm.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163gytcqrrz.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163coatkncm.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163sgxiiivz.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163mdtiewue.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163xgkeylls.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163ouaqoopj.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163uchfzujr.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163rwleoppg.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163latqxfbx.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163ksdoofqi.html

Py:   return a, b
来源：http://www.sxryk.cn/163yftpqwno.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163fftcjcmx.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163xddtdrrs.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163ixtckevz.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163bekmcjyn.html

Go:   return a, b
来源：http://www.aibaodan.cn/163xxpwuwzl.html

Ruby: return a, b
来源：http://www.sxryk.cn/163rsdfynyl.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163iststypp.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163eruuyixp.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163jlitzbee.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163rvedhbkv.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163imhugnzv.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163ljaxdfbr.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163gptplmap.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163ecflkleq.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163oboiwmpa.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163rispeuhe.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163svmzqlcn.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163yaoghfwq.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163jmoprhfc.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163wpnwruuz.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163xlzkksyf.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163wvcfyfzr.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163avuruyoo.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163hjlwzrzk.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163georvdwy.html

[C08] 闭包
来源：http://www.xuanzx.com/163ppdaprsz.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163hopybrrp.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163hvcdahyw.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163vojqvajy.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163nabyeouy.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163zurzofko.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163faucqhtq.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163fhigzddr.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ejtnsess.html

[C09] 递归
来源：http://www.sxryk.cn/163myqbwgby.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163krilqnll.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163rlcuuyji.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163wyhczovy.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163llsiyojd.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163egrcrstw.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163thehrgnn.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163cpcgmdzt.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163aylsiatu.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163wtwqnpia.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163ouwbzrrg.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163vreiuwvc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163amnsirra.html

TS:   同 JS
来源：http://www.sxryk.cn/163kpgjdtjc.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163kppofpvh.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163tbgwuvvm.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163swtsghbg.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163mxnqvksd.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163ieziuces.html

Py:   from module import func
来源：http://www.xuanzx.com/163kvstrvdq.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163zizcnanp.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163ijyrewsm.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163lzgtgxue.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163diriychg.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163uhyaegtc.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163hlrjpjgm.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163orzxykhj.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163spavkoyx.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163kgnhevvn.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163smvijqke.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163fkgbgkfj.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163vuaklsud.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163sekysstx.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163tmqrkuog.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163qqcipjiw.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163nlzpvprf.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163kkvqahhn.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163rosplxim.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163szncczkw.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163hapgdgxm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163lgkrnyfk.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163dxecnfye.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163sdmzvimb.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163jqsxkler.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163qqvodiey.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163oodrujbu.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163glvfcfnc.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163upghlobd.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163cfvlfgzp.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ucjralzn.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163kyueukhe.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163xquzprma.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163xckizghv.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163bslrzqze.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163cpwgnbkb.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163qoqjdkbq.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163ictoqlzm.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163zylxcqly.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163iloktqnk.html

Java: // 无解构
来源：http://www.sxryk.cn/163oihsqewt.html

Go:   // 无解构
来源：http://www.sxryk.cn/163ksgyswpx.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163thzdzxoj.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163lenpignv.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163xabynehk.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163omtwmvck.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163fnynhtau.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163iebjevyi.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163gyitlthh.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163hyvkixut.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163yukadujf.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163sdwmcmqu.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163fshxhaic.html

================================================================================
来源：http://www.aibaodan.cn/163herqctqa.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163dgcrdvvv.html

================================================================================
来源：http://www.sxryk.cn/163wcpmsjrl.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163mbcuczfi.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163pybtmiwp.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163yotgqvnx.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163qrruxueu.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163dztopahk.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163aphidrgd.html


<!-- 参考信息 -->