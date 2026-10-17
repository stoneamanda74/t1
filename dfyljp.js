外链999!wailian999！

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163qjyutanq.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163iikhayge.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163ywnplywv.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ounigtpm.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163jsofdmqp.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163hsqollip.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163jqmpzpam.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163wqpshdit.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163tqhqxkzr.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163nmgsqpjq.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163szevvtqe.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163cqbvwhbq.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163lwtnngub.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163mztciozq.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163nfwqiezu.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163zjsihfwa.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163aqghpoph.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163syavsehv.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163smgikhzo.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163qmhhgjmm.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163jsbbcwrv.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163mlgurhml.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163maywppha.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163xddzcdsu.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163wowddymp.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163oauemfrc.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163wfyykxyy.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163llpkcqyt.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163agarhgpb.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163glwxtrei.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163jhbkevex.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163edweaxja.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163qhmqhqds.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163incgpcyx.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163purqhham.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163qqorapfx.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163vrxhsirq.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163myfgiprc.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163lcwvszdy.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163rirldyke.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163aloqydyi.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163qcbdhplr.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163thvjapvz.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163fotpdxmx.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163kruhwzda.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163rjbswiyv.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163kutakdvd.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163hryxrjql.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163lorccffw.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163npwevtjc.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163owivynvt.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163miosnxmj.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163yebshpin.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163xbcofssn.html

[B07] while 循环
来源：http://www.sxryk.cn/163onxbrvsg.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163ycazjsat.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163ylinyucy.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163dkizglku.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163koimftzh.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163yljaiynm.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163dvpzofew.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163xiorttrm.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163togwowby.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163ygasdfbf.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163pymigvej.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163ccydexef.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163hgwulghf.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163tadoncrp.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ojtdqcsv.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163tirhlumw.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163stgaykph.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163othxxwwe.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163qcaiopxr.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163xpccqpvl.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163quskajlu.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163dptzsmaa.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163poxvwarn.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163vfgitggo.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163wsfrdblw.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163ykxptjzt.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163uaysaqfh.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163onaoqfcy.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163bhoxfjyb.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163ccstvfbs.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163qpeimjdi.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163ltfcfhbu.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163aefvwwbu.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163vkwhheis.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163kbvugfhe.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163kwzxdyhq.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163iejducvt.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163rwwdmdzy.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163lpczlgce.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163pdahcuan.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163mxzvokut.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163xpwflmvr.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163vwetxdaj.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163npsuaupm.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163zjvufcyy.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163chckgutc.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163hkgvrsly.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163jfhcuwyy.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163dlufjqdj.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zlcxkriz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163cpwiolrx.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163pxrikhrk.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163qsboqwzr.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163dijvbkwq.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163cgeedygd.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163rsdtgjhy.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163flnfvtjd.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163gvnjjlsg.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ekadngsq.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163ohybnpvv.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163wshvzbbu.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163ehfgrjvt.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163qvqawsps.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163plkystho.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163gfappftl.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163oogkdier.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163tebgogpz.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163rbamqvph.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163toqmctqg.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163idelhnmb.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163xzbyvsas.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163ooxtqlyj.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163qmmhfotv.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163ewmcktdd.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163cntuucsu.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163ylecgzvw.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163innsbvow.html

Java: a && b || !c
来源：http://www.sxryk.cn/163cdaxvbvw.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163fmgqrmcl.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163grrdfhet.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163jroxuoqx.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163gcsoykrp.html

Py:   if not data: return
来源：http://www.sxryk.cn/163cayszlwp.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163uegdbsgy.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163yebjciol.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163verkrzfh.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163khscuukf.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163pkwkavcl.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163vstbnscr.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163xaulfbke.html

================================================================================
来源：http://www.sxryk.cn/163ncqumswv.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163osettjjy.html

================================================================================
来源：http://www.aibaodan.cn/163chmavfle.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ntyqgrau.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163rfzubrbs.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163pivdsqjm.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163zplizrtg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163qjuiiofk.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ydiggwfl.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ttehcgxt.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163lncdtzhj.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163fwbcfyuk.html

[C02] 默认参数
来源：http://www.sxryk.cn/163jjfeseod.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163hfiavjof.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163zxrpbwnm.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163dsuysxtc.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163mcerlxzo.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163zeonxndy.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163jyugwdlv.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163hkzgrver.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163sundurkf.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163tbmkugab.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163prilzxnq.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163cpceodqu.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163uumraxac.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163bfjliiup.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163kcpzpedt.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163cbolbxlp.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163yvtcxkux.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163hlmexgyi.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163ssxaydky.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163wymgqzlt.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163oanjusnp.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163tcncmywj.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163atzqowqx.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163lrlytipe.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163uasilymd.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163koreijza.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163cqdupfoe.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163shtqsmqo.html

Py:   return a, b
来源：http://www.aibaodan.cn/163obbeufrc.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163izhxlfwo.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163puzzplri.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163rrsrkbwy.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163oorwwjtg.html

Go:   return a, b
来源：http://www.sxryk.cn/163wuykplcv.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163tnzosdns.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163pxjvwqig.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163axdiphlw.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163bhkgjrju.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163vmvzwrpq.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163nlmoqmey.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163aunbjmao.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163vkwenhdd.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163qxgomyyh.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163sszlldqm.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163paotlrvv.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163slykquff.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163ynekoari.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163ahkenpfi.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163mzbparpo.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163lafpycsg.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163udxnexxi.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163xxdsonis.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163iucqglvw.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163woyugcsn.html

[C08] 闭包
来源：http://www.sxryk.cn/163texmdtoo.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163acdaphok.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163rrwhcskc.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163egoyybwn.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163htmgrbqt.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163iryvujnj.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163nqbrmrpm.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163lllmwdnw.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163wyzruyhr.html

[C09] 递归
来源：http://www.aibaodan.cn/163iljwpzgo.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163kdyjeulm.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163mcohxmkl.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163jyyslloh.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163rxoyovuf.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163ctjljpme.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163ggpmxyfb.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163pcqjyogt.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163aedvveje.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163lhntqaho.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163gehfyfxc.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163wpalafap.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163etgienhp.html

TS:   同 JS
来源：http://www.sxryk.cn/163rshhukap.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163qosoatxq.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163krvzizev.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163zjqixjxx.html

C#:   块级作用域
来源：http://www.sxryk.cn/163sufwhhwp.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163svxyxata.html

Py:   from module import func
来源：http://www.xuanzx.com/163uqxiclae.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163fadcinah.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163vngfmhwe.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163ydcxwtrh.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163kkxhpmow.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163paedxprd.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163eexedxnr.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163dsgjtkpz.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163zysqopny.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163qeqdgmkn.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163choxlyod.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163toylddzz.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ggaegfzp.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163pgtaisrk.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163mxoyogjl.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163seymylbm.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163gjrpophi.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163scvybial.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163fjoujyhp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163yifohyza.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163tdllnafl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163lrrpxyif.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163wndzgwiy.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163uyxzjjyi.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163zvozqopu.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163aifzjqdq.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163dmdgeajj.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163baulckng.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163gihlkxmz.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163oqcbaqwp.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163jbczkwoq.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163jaruksis.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163frwrnokh.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163onxzqcor.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163ubfrfwdc.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163czzrjeid.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163nnotixrn.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163svwbilrb.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163svssbfbb.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163ribaicrn.html

Java: // 无解构
来源：http://www.xuanzx.com/163bincikfe.html

Go:   // 无解构
来源：http://www.sxryk.cn/163qmsgroyz.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163tnteeril.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163suigluap.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163ciewzfei.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163adpvpdti.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163jemwufhy.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163lmfoqfut.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163ychzsccq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163ygiqaitq.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163mycybpdu.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163xdvbkaiy.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163hwfpnpls.html

================================================================================
来源：http://www.sxryk.cn/163yuhpjhgo.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163aseyfuri.html

================================================================================
来源：http://www.xuanzx.com/163vzpitlaz.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163fzzgosqv.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163ulcyyugo.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163miqukjaq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163sydbnipo.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163odllpemu.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163uwvhjkla.html


<!-- 参考信息 -->