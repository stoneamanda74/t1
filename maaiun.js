外链999!wailian999！

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163rmmjmqcp.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163odxcxfac.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163envlwoxt.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163ghjolukj.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163rqhyoidf.html

================================================================================
来源：http://www.xuanzx.com/163pkjaimfs.html

B. 流程控制
来源：http://www.aibaodan.cn/163lnusxant.html

================================================================================
来源：http://www.sxryk.cn/163jpapykld.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163qjzoynkr.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163wpmouasv.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163hsvrunnr.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163nxvenzwa.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163zkxdaqpl.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163alzaxyne.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163bphggley.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163zusaembs.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163oosvyyrh.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163vhbugnhn.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163aznoegar.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163uvhgbvqs.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163mtnphmmd.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163oksiwkzw.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163lwvhroxb.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163gnmcbpbb.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163tlpgzyyc.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163pnfnsdlj.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163rroaoyiy.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163jhhhlnby.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163hggakvbt.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163jwiojrcf.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163zzfclgnb.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163mzlesesw.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163oecannux.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163cspunmcm.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163mtlmxfjj.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163xyhudqat.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163xuemkgxz.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163kubxibdi.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163wtiztcop.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163bftwmnbb.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163yhdhsxvf.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163qwwxfzjz.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163eexxdsdx.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163aeyobbna.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163jiayfiwn.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163itqcrfik.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163xxukvpil.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163aumqxwfy.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163svrmrnzp.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163febbcikw.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163nmatnjvt.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163huigemnb.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163vwayjgpn.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163elsbsspw.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163kcdufadk.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163cooxhhyc.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163dfgdwlso.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163chjuodoa.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163pailgdkz.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163rsvwtcxy.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163apavmymn.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163qutabkez.html

[B07] while 循环
来源：http://www.sxryk.cn/163yzqwmsnz.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163lsfeyquc.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163kupugots.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ytqvmivt.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ridlldvu.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xzowjiuh.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163uehaybbk.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163lhdkixye.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ckoaybmd.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163yqcmxyjz.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163bjhftgan.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163sctfndee.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163jxwsavlx.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mthotvce.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163vbkfuugf.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163rfagqguz.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163fbytjbij.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163azcpslng.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163dnvzkkbd.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163jdhgdqtq.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163gohilwri.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163lcbazczt.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163uyperpnm.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163iqjrgnsk.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163znyuhkow.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163pomtugkx.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163zlpjltca.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163beqtbtou.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163gelqzcnf.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163mvnbhdfa.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163bnxnmxed.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163njelkdrj.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163ahidzhom.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163jeeezthm.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163vwpsqqnq.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163exfusari.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163dyqsfegx.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163pdzedrqe.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163nazeaylo.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163pirsqfjv.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163zhxcsrme.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163eyjslvnk.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163fptfpaev.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163dmjvrvno.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163zeethbyz.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163mzmtwkae.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163qkghpaot.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163jlfuojvr.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163scqdywfc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163znagpdex.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163qzdjfdbt.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163prnzyjjr.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163jceumotr.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163ymzssgnz.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163azmdtkpj.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163wrluchxx.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163efmjaniq.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163wnsupsuk.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163fxvilggu.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163nrehpwee.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163zqlvvwrw.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163isumcita.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163uclgfsil.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163qlwlzvte.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163hvphgjwr.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163vuhymmrc.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163lezscovj.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163tgokujor.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163edpwmrmd.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163gmqnfajm.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163hduavlvm.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163hogjdmsb.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163wswrklxn.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163twoxaalv.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163sxqgrvrr.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163vnrudebo.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163zipsoorq.html

Java: a && b || !c
来源：http://www.xuanzx.com/163snxxzcex.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163gmlucxwp.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163obpselbq.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163bvifrews.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163cheiprra.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163kujdehut.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163jhdeqrrx.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ftycwyum.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163phzsdnsm.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163tecbnoez.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163upwavtzp.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163xjtnytts.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163krhxgrpv.html

================================================================================
来源：http://www.sxryk.cn/163mkzmdhbl.html

C. 函数与作用域
来源：http://www.xuanzx.com/163podqmfjb.html

================================================================================
来源：http://www.aibaodan.cn/163jdlngmvw.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ymqauepj.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163nkhrdxjz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163xrwpjkcn.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163iwjejzjz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163jqsddpsh.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163nqexdjkx.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163lbawecfy.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163kbqlnyrj.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163tamfpkvz.html

[C02] 默认参数
来源：http://www.xuanzx.com/163sqyunnaw.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163ajrbcwxf.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163hufnhzrp.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163hciiinco.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163csioygyt.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163jtmxjgug.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163sijofdei.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163cdvfdtsb.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163ihiljbge.html

[C03] 可变参数
来源：http://www.xuanzx.com/163guwatwjb.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163dbhyaytr.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163ycqljjfg.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163sqgmvpyp.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163hcduxtoi.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163vvlbhhva.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163kddpucqb.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163lcsnkfay.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163sfscrzqt.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163vuvftgrn.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163inlcykhc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163elvurjfc.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163lymovwlg.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163ropfjvtg.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163dcyfezvt.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163sjabjvnl.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163gupjkpdk.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ghvzaezy.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163gqfmlita.html

Py:   return a, b
来源：http://www.xuanzx.com/163ysxztgpn.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163exrrbjnf.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163izybxxpu.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163yadlonvl.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163fmyoxsag.html

Go:   return a, b
来源：http://www.aibaodan.cn/163krurlblr.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ijvesjxu.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163jfdhhgtr.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163bgucirzw.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163slybbykc.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163debwveds.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163ukbtcumx.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163ayylntsu.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ohfvnsku.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163bvypbykc.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163mdkufmaf.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163oczmxtgz.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163ksjgwnuz.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163fkddwxib.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163cdfrmuvq.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163pikwzezp.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163mcbppclo.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163nitcutqt.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163snnjgvwg.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163iexnukfl.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163ylrayvne.html

[C08] 闭包
来源：http://www.xuanzx.com/163pcglbily.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163mozgvzsv.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163lfnzejci.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163jruxgxrj.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ipcuslcz.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163gvpjkfzp.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163ajeospvu.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163azsqsswh.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163akpucbti.html

[C09] 递归
来源：http://www.sxryk.cn/163pjlqmuag.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163dlijpjcj.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163idvrmqyt.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163pzvwwwlq.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163gobclfcs.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163ixsgifum.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163lwerrszd.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163ngucphtj.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163exnyxewi.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163cxbidqxq.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163wcjsgait.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163gclrtafa.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163sveydqar.html

TS:   同 JS
来源：http://www.xuanzx.com/163phqpcrck.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163siurflzc.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163eqoadnhr.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163otnrgvjb.html

C#:   块级作用域
来源：http://www.xuanzx.com/163zkrwwqrs.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163bjigiuqf.html

Py:   from module import func
来源：http://www.sxryk.cn/163dcutctyw.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163lvctbust.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163ywmcudnx.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163ccnasiur.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163thmlzjqm.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163qcwadxnf.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163yvzihiju.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163kzctdidb.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163xosmjdkf.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163gszhxrbt.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163lqvrqdxg.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ixokjiix.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ttgulkyi.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163dujwdpux.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163llmmusdx.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163boehkzmj.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163eniojwqt.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163ashhntmj.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163fbpjtozj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163nnokvnup.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163zhazxhnn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163sksljriq.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163czdfsebh.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163powmvixj.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163pfkgprls.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163tbqslgss.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163tzjtwsjm.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163autofkha.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163qzjbzmmj.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163xtplvnpq.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ccnahmob.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163zipfrhvm.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163agoeturx.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163hxzviunp.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163ynnwbwrd.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163hwafvzac.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163vghqxfcc.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163ogdvpeye.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163umkprael.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163raelnxel.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ihcklyzx.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163rkenjbnx.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163invwkzrq.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163jrzgegaq.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163yvkodmhd.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163gyouuljh.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163vmiicowk.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163cxdfaxod.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163tsklnqyv.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163zahehcxh.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163syrabfwa.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163drfasofw.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163anwlcnsh.html

================================================================================
来源：http://www.aibaodan.cn/163eezraoko.html


<!-- 参考信息 -->