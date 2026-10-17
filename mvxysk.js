外链999!wailian999！

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163wofdagba.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163ghuyzony.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163dyptxomd.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163icdpbjrm.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163iisagoyx.html

================================================================================
来源：http://www.xuanzx.com/163ithpxnvj.html

B. 流程控制
来源：http://www.xuanzx.com/163qluafyhh.html

================================================================================
来源：http://www.sxryk.cn/163lsmklken.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163bodiookc.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163rmggghly.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163zhxdvxyw.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163wfftyzui.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163qtjlommd.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163mkrbavsx.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163himgrjcb.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163jjhnmfbv.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163leorunlc.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163pwasepcy.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163tcmmldov.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163zqmzdigb.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163jqcdjsxg.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163aqslvwlh.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163jdaxojgy.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163xgcgmqan.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163yevpaaxw.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163pbvhfrja.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163myqfmrrn.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163xilurtad.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163eafwtdfy.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163lpfpaegs.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163hqcwjimg.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163ewhzwmil.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163lzvjcqll.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163qvjetits.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163iducjgpw.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163mvwbygyv.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163dyneurod.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163cxriyemk.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163jjfqyzmc.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163dakqeqig.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163brrucsbe.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163odhksstk.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163kxrbsbgp.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163fqwxpumt.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163jeqzmyzz.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163akpcwsvl.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163muielkfw.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163doxrkxut.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163nimavcqq.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163mfoaoxjf.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163qqvxfyhm.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163lwfkvsrh.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163bieflgkj.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163buknyaqr.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163pfgkwgbf.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163efktjgfl.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ejgljwek.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163agaqbvjf.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163aynxnwsz.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163pstoavve.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163czmdkkpk.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163cwyjkuky.html

[B07] while 循环
来源：http://www.xuanzx.com/163asjorbce.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163zgtfuekc.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163mrxetflm.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163vpwfbxkn.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ldyhgnvg.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163dbrbgwtu.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163ewocjthk.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163xxuvjgod.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ssstarwv.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163kszxewqc.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163twykznnb.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163dpyxtnqt.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163tpkyomrr.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163xvpmvixi.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163wqflalrh.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163ccoduoub.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ktmbqoba.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163cbpbonnc.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163iurztyvz.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163moggfcpi.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163stiuuxdm.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163cyipkrxd.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163pyzlnrow.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163gharqtmj.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163qafnnwml.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163hretmzsq.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163iogdxatp.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163uasvfegd.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163jkoqmeqa.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163ikmozesv.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163rmakfyvv.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163sxtrcqlw.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163snypjmmr.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163mvkcpbzz.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163nbmyctnp.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163gunvxyji.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163nefuznor.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163ledzfjpi.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163fsksagxx.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163fbqivlrj.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163qpnkjeca.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163hazexdga.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163uqpfalvd.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163smswvyji.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163ayudnajx.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163zatjomoe.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163hgaedtpt.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163fnlrckza.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163xmkmrcrw.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163lnrmgfkc.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vgdoousm.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163aogxmtip.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163zocpupve.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163acvmaffl.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163tnpmiikr.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163dixapdms.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163mjxfjxmw.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ycaatzde.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163wejziuzi.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163pkbqckbx.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163slsapuxq.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163czipfqnd.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163octzxspx.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163uthifsos.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163vklmieer.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163ulhhryej.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163pevvetum.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163srajsrod.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163kvytlfac.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163vkcoladk.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163eadmirpq.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163pmyphksu.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163uuzfskrb.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163xdzwpjuy.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163fhxofhhu.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163viawubpb.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163xhdpspjs.html

Java: a && b || !c
来源：http://www.sxryk.cn/163rnkyzttc.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163lsbnnwjv.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163stticokx.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163nsvcbadb.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163igullxri.html

Py:   if not data: return
来源：http://www.sxryk.cn/163fwdktyis.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163thgqqojz.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163cwjwujdo.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163idpbrwpy.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163znsvpnue.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163hzzhdnnd.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163mqisvpyx.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163gbncngsb.html

================================================================================
来源：http://www.aibaodan.cn/163rvhvxchv.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163qoxgcsfq.html

================================================================================
来源：http://www.aibaodan.cn/163brofdyax.html

[C01] 定义函数
来源：http://www.sxryk.cn/163obkbalwu.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163uehokucx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163dknhcbds.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163mwrddisf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163oqhsgufq.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163byqlxpfs.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163fudvfnul.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163okzfrxxi.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163juiousqc.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163bbutrfyh.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163mfdlfsrt.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163oezgbvsn.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163htcuvcbw.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163auxjvmls.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163dwcdtbhc.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163uyytdbfv.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163fjlkggmz.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163jsuzimlk.html

[C03] 可变参数
来源：http://www.sxryk.cn/163ximsegae.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163waqenqbg.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163whiohund.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163rloszizr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163cgifvnht.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163zirgblwh.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163skysteob.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163xvaehvsa.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163dukjwepa.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163ouzehgsz.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163tuwsablu.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163nmlvpdjg.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163hkpmzirk.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163qmpwsxei.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163qqlxklxe.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163hrqmomhr.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163omryxtxs.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163wxkdmotv.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163rvezieqd.html

Py:   return a, b
来源：http://www.sxryk.cn/163hnbdngsy.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163rusoaodu.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163mhaxisps.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163djhxamha.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163lzdpggey.html

Go:   return a, b
来源：http://www.xuanzx.com/163dkxpieed.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163xxbrbfza.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163zgohsrqq.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163xvdgileh.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163cleslhtw.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163ymlahmtw.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163upodbgkg.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163lqjyrsfy.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163sumkwptf.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163dzlykaeb.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163hoyrndds.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163jlzncbdf.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163fzqsgoby.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163hbafglro.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163lovisdov.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163ixfwaguj.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163oelervoq.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163nwiuuifl.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163jxsxfptw.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163hmcnblxn.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163zkoqmyue.html

[C08] 闭包
来源：http://www.sxryk.cn/163achjdayv.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163gfcqurpk.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163bdbborvp.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163wtuvtzdc.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163nnoiolrk.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163emixjyll.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163fosizwgk.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163gqghbnug.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163peetcfzg.html

[C09] 递归
来源：http://www.aibaodan.cn/163pwfbadnr.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163sbwvwuol.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163fgfjnqjv.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163vpnkrswi.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163lyydzzdr.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163xvpjuxkr.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163iwcnyonw.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163fgacodwr.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163sllwhvjg.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163pmbfmspw.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163luddnfzt.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163puacmdok.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163xuckumwm.html

TS:   同 JS
来源：http://www.aibaodan.cn/163tslogehc.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163dnguihpf.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163igkpcdvj.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163jpppfena.html

C#:   块级作用域
来源：http://www.sxryk.cn/163hssxfdei.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163xpwbxhdd.html

Py:   from module import func
来源：http://www.xuanzx.com/163ndtjleyq.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163rhdrymoo.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163jllfpbsm.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163kbbsorpf.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163rhvzsvmb.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163nlhrriop.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163drwacavg.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163pjnwklph.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163snwizmkq.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163jqdqxbjs.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163bxgcsxjx.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163swqnccjp.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163byyrkeyv.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163ugsedfrk.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163kabobfvu.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163mlujubnx.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163vorzfcsy.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163kyuckhtn.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163kywlbuac.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163owwjsbjr.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163omtzjguk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163njimbxqn.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163gqguzwjf.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163paqamhit.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163rlqbhcaf.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163tnhrhxeb.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163zggxxssb.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163gyzncjnz.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163yhuudmyf.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163nwnmqdcf.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163kctyzurp.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163mzsrapmc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163yhlrtstj.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163vttbydjn.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163ycyndgni.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163zwbdtjaq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163zamygond.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ofzbtapo.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163jilblihe.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163wdjylgei.html

Java: // 无解构
来源：http://www.sxryk.cn/163kyeoqgeg.html

Go:   // 无解构
来源：http://www.sxryk.cn/163fyylydjj.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163gxejhajl.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163deytpvka.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163fqduywhu.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163yytilbgf.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163nqycsedn.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163obhgfreo.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163eqquftoc.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163isoqsfdh.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163cwbsgsej.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163ogbiurep.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163alywfkuy.html

================================================================================
来源：http://www.sxryk.cn/163mnzyjqnd.html


<!-- 参考信息 -->