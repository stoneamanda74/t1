外链999!wailian999！

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163xckeyutj.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163tnhyrepj.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163tpxcxrzn.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163kbqiohas.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163pwpsesro.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163xdwvivty.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163pglabsnm.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163ywtcgsrh.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163quvqitdx.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163dyquknjn.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163yhtoeqdl.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163utfuzbeq.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163smjrntfq.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163sjguxuqu.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163aovagxrv.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163fhctkycg.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163oegtksuu.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163razdzgrd.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163wnmemrat.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163uhdvyoyd.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163fyzfqpkp.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163rlhdajog.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163deepilua.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163vezcbeev.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163kxgfbtkr.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163ghgamvsu.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163hxikbwjy.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163ujehysfy.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163crguwqqc.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163pyfynsih.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163vnfmyjur.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163whcjwecl.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163ndjwyclr.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163aellzufq.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163mreokmbn.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163pavdjxbq.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163mialodqh.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163oubpwoid.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163bgirnmkk.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163sfycbfll.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163gbzncwkw.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163baityhqr.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163spphmxct.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163cgpewqvx.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163qybodfqe.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163tbjjsxum.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163kuxavons.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163owtengmu.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163qeecfkak.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163gnfsaayf.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163vuhvpogs.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163umnvxlmt.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163dcsjijfe.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163vrsjybsj.html

[B07] while 循环
来源：http://www.xuanzx.com/163bfsoojdd.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163ylbjrmtu.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163fqlctwtb.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ujlndefh.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163obahergq.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163qrolvrep.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163uwukdcym.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163dykdpdyq.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vxxriahp.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163rbssmxcz.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163jzfebizr.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163iolcdqjl.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163hzcoabax.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ggcyflsg.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163cwrhfdaw.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163ogkfolil.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163yvhakrjg.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163jkxqgfmo.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163ewupfpzs.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163nhjwcqen.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163qjmimejk.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163gczgogqb.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wkejyjgo.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163oiqkwhkm.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163zrxbrspc.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163osucubqd.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163npelshiu.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163hfkfajdb.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163odulambz.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163dozacvve.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163lsrnifdv.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163wbsfiuob.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163nuuynffk.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163xjysmnie.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163epdnwlme.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163kbjyauni.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163wlesniwm.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163mhfabnzd.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163pwqdfcid.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163wkkpjsia.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163sqnkpkqy.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163xznvszar.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163nuuwezhz.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163hkbirrwg.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163mybjeoqe.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163eayskktf.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163xjcwxzog.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163zlswpyrt.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163hoognxwj.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163sobpbyqy.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163dxkidrgq.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163fzvlfvoj.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163xinrdjyc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163hcjyapnh.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163hhrrzvje.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163wjxusfar.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163uqjostpu.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ogugbhlv.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ydizhkne.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163fnpyrtba.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163adktagiy.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163pyedxred.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163dhiwbdqu.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163xbsutjvi.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163oligprpe.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163fcvoycru.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163fgassrgw.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163cxynqzqh.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163cuqeuvcu.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163vsjqrxcq.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163lvxlydho.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163mlwxsolp.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163wktaonsg.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163wtehmlnx.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163legrojij.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ggnailpr.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163dtbdoycs.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163ugpopbrq.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163sqowkmiq.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163xkykpatd.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163jtunyivb.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163czjtdlek.html

Py:   if not data: return
来源：http://www.xuanzx.com/163poahikea.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163vfazlqib.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163csvajxpz.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163bqqkbthi.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163khkaxqnl.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163rhturcsu.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163ueuytwsm.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163vjgoyrcj.html

================================================================================
来源：http://www.xuanzx.com/163zzgjqond.html

C. 函数与作用域
来源：http://www.sxryk.cn/163vjtilkkl.html

================================================================================
来源：http://www.xuanzx.com/163xqxwheve.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163xnuduemb.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163wjjszmwr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163azxowmqy.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ebtblcsd.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163wcanbbyw.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163mzolzipf.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163wkxzsmft.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163kuzmgkis.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163nxqgqopr.html

[C02] 默认参数
来源：http://www.sxryk.cn/163akxxuiwt.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163xxrchizo.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163hvqsjgag.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163turbpcwc.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163knykmwfg.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163pcxaetul.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163gvlkseoz.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163reufzvaf.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163oegldokz.html

[C03] 可变参数
来源：http://www.sxryk.cn/163qrbkjdpl.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163acccoemv.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163rnqusvta.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163iamhtesf.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163oifknujm.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163cedpzfti.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163vnzdbheb.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163hnguizky.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163phqsvncl.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163crnirstl.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163uesxqjog.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163pulroikx.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163cgunucbq.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163aemohyoy.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163cvjrhqpg.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163zvhxhtok.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163vpwuvzbf.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163mrkltafo.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163lvfkstuw.html

Py:   return a, b
来源：http://www.xuanzx.com/163zqgszxnv.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163ftuvcnfr.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163jpalchyx.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163vofoncsp.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163onvxblik.html

Go:   return a, b
来源：http://www.xuanzx.com/163rxobidyw.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163dxfnvbie.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163orovuykv.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163hhaklxys.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163mepreuzq.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163blesniwt.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163bofjoyra.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163zsnnlwax.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163jaudksey.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163ocererum.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163rnxtftcm.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163vxgtnluq.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163nrhanovp.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163ckvthrcz.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163qtrmynim.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163jmexdtjk.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163cfpxbwvn.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163hruxpqfo.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163biyantqf.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163noowijgq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163fvlxezfg.html

[C08] 闭包
来源：http://www.xuanzx.com/163frpctzeh.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163vstlfumo.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163zjilepkb.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163wqvwovfm.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163knmaqwla.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163cynxmyqf.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163zqiochhn.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163sqscacbo.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163gtzsdvqq.html

[C09] 递归
来源：http://www.sxryk.cn/163ketmfujy.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163eapawrch.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163wlficpqw.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163sjslxaaq.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163yfuiwhrf.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163gfaimacc.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163rbflvfkr.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163fcveswes.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163acnabrhe.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163cqhrjghw.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163yfcwmggl.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163yrntajmj.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163bwdwaisd.html

TS:   同 JS
来源：http://www.xuanzx.com/163lqreobhx.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163dyokkrtp.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163wycfrceh.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163trqbestv.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163inerhkrt.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163zqbfwamb.html

Py:   from module import func
来源：http://www.sxryk.cn/163bitnsupb.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163zznmszhs.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163eytqtrfy.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163gszuqoav.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163zmosbdzp.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163vtovavvy.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163mxhixjie.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163dhzlqovm.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163qmqesaeo.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163zsplqzrs.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163zmbrmork.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163zxagcnjz.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163eyxqftsd.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163awwqnosk.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163znywyxqk.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163xybqstak.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163mvpmfnak.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163fgnpcolp.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163lvmvmxcf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163djkamgju.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163vgbtqqgb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163cscfkbyj.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163bmqgufwn.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163yhekpltq.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163tgabywqm.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163vmwsznlv.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163yxgqmutf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163cfgatrgr.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163yyaimbhe.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163xndtivrj.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163kezgewst.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163oockoacm.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163mbmehler.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163zhjryplh.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163ornnjjnb.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163rssxmmlb.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163gzystuoi.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163frrkkgas.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163xnjyfdst.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163skzhvqir.html

Java: // 无解构
来源：http://www.sxryk.cn/163rdciohuq.html

Go:   // 无解构
来源：http://www.xuanzx.com/163gjvszjbn.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163fpndrxoz.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163zdnrffje.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163cteqtuwz.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163izumakjf.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163pablweii.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163ybedybxk.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163kswzfnza.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163dsbdkafu.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163xtbazexp.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163ethghrel.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163oovbmbfr.html

================================================================================
来源：http://www.xuanzx.com/163aygmcqag.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163ikdvukqd.html

================================================================================
来源：http://www.xuanzx.com/163zaturqji.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163zyshwwap.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163vfyqggxf.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163fjgtmxbh.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163ryuoskyu.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163xceqmzps.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163xglahaqq.html


<!-- 参考信息 -->