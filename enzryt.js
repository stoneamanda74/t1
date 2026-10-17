外链999!wailian999！

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163lvnazhlh.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163yzfwszil.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163fgndvuzh.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163vjapqczc.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ezfibntz.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163jclgympa.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163wdhlynwm.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163sdcyvypv.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163zqjbpmor.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163qiamgmlm.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163clnueght.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163vvobwaeh.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163svsecsef.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163mpctftyx.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163vsxejfym.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163hmpcglmr.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163mgpdcacb.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163tdpwlkek.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ayhdattj.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163jqzhenci.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163avfprosc.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163hsjrkbhl.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163pquvmwdh.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163nuilirso.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163wlbvieuz.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163emaupfgx.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ktczywlh.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163kefinakp.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163ipsidedl.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163vtfovvyq.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163kxzvjwsp.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163efnbkztg.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163lrdxezsv.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163pwksizep.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163plljapin.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163pwltbexb.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163wbpfwuou.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163vlefukgy.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163ismcjevi.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163ndzlmoho.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163odehvisq.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163shutamnw.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163mnidrxcd.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163evqtmkts.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163xkwnupgu.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163fbfsrjwl.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163ehmddgag.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163mqwtsoqr.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163ftofvyip.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163uwbbymxk.html

[B07] while 循环
来源：http://www.xuanzx.com/163sqbxnday.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163qoiduqvv.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163wvffkerc.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163omdtjvmg.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xeaaimhe.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qgdknjjf.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163nnsrbkib.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163lwjsbffn.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163legospap.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163ctyikvhx.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163wwnximbu.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163molxkftt.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163lkzfitlw.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163rmuxobac.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163nukucfnb.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163viwdihly.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163smtvyzvt.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ceemaxeg.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163tbtjsoxu.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163baojaitf.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163nxzbcpzp.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gtqovblg.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163htuvsazg.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163soxgjaye.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163vzhekwab.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163apjvrlar.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163mgqpozvb.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163peleeiwu.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163nlinkrdv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163xiulbglh.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163azmyharw.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163nvsjpjjt.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163lsbxpawm.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163leitlhha.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163roajyxct.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163xjeoxsuj.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163knexdput.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163vrudzsqw.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163nvxujinv.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163vinlrdss.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163uodgfmxn.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163irhrmtmh.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163crpvuwgn.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163sjasqhls.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163qoktnnwu.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163uqajadme.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163delkdiie.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163cerxluzy.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163agrlcbtg.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163usmkpbsr.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163hcgjjnap.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163lvajjxmk.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163coqcdqju.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163krmvmvhh.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163siqqxsdg.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163aosorqbi.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163vsjxopxv.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163nqtjezyu.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163angjqnmj.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163gxpapjuw.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163mgvyrgqo.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163lvhbeenr.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163grmfehia.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163wadhzfyc.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163umchzvym.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163sopthtee.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163sdvqmowk.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163zrphcspz.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163mhfcjysg.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163bncijwkr.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163rmntlqjl.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163sxjsqykh.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163fdgstntm.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163vlnyfnfw.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163gmhjkjfr.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163kybztmhp.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163kjecqpxl.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163vacrpako.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163ocolgjbs.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163xuficvzo.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163nyrcbuqt.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163scywhxvs.html

Py:   if not data: return
来源：http://www.sxryk.cn/163rrrabzlh.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163xdtsqbrp.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163esjlbjkk.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163wgxavzej.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163vobmibxz.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163yqmgqapx.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163ivozzucz.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163rswgmzxo.html

================================================================================
来源：http://www.sxryk.cn/163yfpmhwff.html

C. 函数与作用域
来源：http://www.sxryk.cn/163bipnnmvk.html

================================================================================
来源：http://www.sxryk.cn/163qwtywluq.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163grumshhp.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163rqbtvjur.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163iectwxft.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163khowurzj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163rzedwkuc.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163lqeaaztl.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163qjbngoyh.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163ebiagdsi.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163dvmiokxg.html

[C02] 默认参数
来源：http://www.sxryk.cn/163fxtzsurw.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163xzrbacyi.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163oztvygeo.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163gkljvsbc.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163mnshqjxc.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163jtpinoih.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163sndxifwt.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163chtrqqmg.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163dxjyncrp.html

[C03] 可变参数
来源：http://www.sxryk.cn/163aywzsceo.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163ejxequiu.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163qtjrunqs.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163qychnasv.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163knajaory.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163cnjzpkqr.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163yczupjja.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163mwukezoo.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163jjrygjiz.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163rursoyzi.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163qvsxkfyp.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163jbnvohpz.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163bucarlsg.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163aiiilfll.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163ljbrjbvy.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163putkjfyn.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ugpricha.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163rttlwvmh.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163jsihiguh.html

Py:   return a, b
来源：http://www.aibaodan.cn/163albonlrj.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163jeckuhvw.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163kifekkvp.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163mvuemhhi.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163vldlkmxi.html

Go:   return a, b
来源：http://www.sxryk.cn/163cmhnativ.html

Ruby: return a, b
来源：http://www.xuanzx.com/163bsdwizst.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163agijnywa.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163vovwsygq.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163mjnvgsxk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163odzbkvyr.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163uzbinlir.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163tyurtytw.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163hangzsbq.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163fpplzfnu.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163tweaaiqx.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163qmzhytaf.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163dfpktgup.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163sqajwghx.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163kfzxnmtm.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163nsfrvalh.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163nwhurutp.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163vhewlmqk.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163qdblhzwp.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163wexrqybi.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163doknqgpr.html

[C08] 闭包
来源：http://www.aibaodan.cn/163tuuhihyz.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163phriiliu.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163qweftyic.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163gqiazkgf.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xjfefmzg.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163oyjuqero.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163tfeyhhgn.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163pgceqaep.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163qgnzogii.html

[C09] 递归
来源：http://www.sxryk.cn/163jesgrglj.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163clgcqnap.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163gdjlejdq.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163gipabcol.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163fuputwqj.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163foxcjgsm.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163ojgnaeus.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163tofklmzh.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163zgsxweoa.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163gfatzjee.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163fvbadcni.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163nhmsnbzd.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163bswyrufo.html

TS:   同 JS
来源：http://www.sxryk.cn/163jqdmhbqe.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163ttqzqrrg.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163zrmkeimu.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163hjlonccg.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163nrrjvrwc.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163qydrawne.html

Py:   from module import func
来源：http://www.sxryk.cn/163coirkodm.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163drrdooho.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163hoihoocj.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163lvaymybd.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163wtaqklkc.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163zgklxoqi.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163fqqufkyj.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163fskjokxy.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163xfzipqqq.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163yoeihflh.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163rybtxwod.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163dhyivtaq.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ixvxtfcb.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163jfqmmckq.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163wfcsvgve.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163ptbtxlml.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163ntbpskir.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163foovpncc.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163mtrhoaau.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163rykvkrpv.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163xanwxyys.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163hkpqwtdj.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163oobezaaf.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163ijrbksjb.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163lvlccilp.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163eaeoczwj.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163sbznruah.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163ybtjncqp.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163fbowezam.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163lczfutmg.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163fqgmjcul.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163fzgytesv.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163zzfdpjhu.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163swzygyis.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163hpgfpscy.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163rnjpznof.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163yrcwbnpg.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163rokojgfc.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163lqwuwwmt.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163hrbvupuk.html

Java: // 无解构
来源：http://www.sxryk.cn/163zyoieevj.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163nirfmnjc.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163dcshgkdf.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163zauxzspt.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163nmvfxgzp.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163xalrzjjg.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163osjwhwcz.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163jvhdmbyu.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163plbjhxft.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163qjitdwyj.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163lazsxabp.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163xzsqebie.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163mymrawlt.html

================================================================================
来源：http://www.sxryk.cn/163rboibagm.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163jjewxgos.html

================================================================================
来源：http://www.xuanzx.com/163zruqsqef.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163bdpiyeub.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163ttniqcpu.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163hxyuspdt.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163esmdepmk.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163gvkwemvy.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163sglrtrxt.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163idrhcqfx.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163wfcnqpdl.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163sxdzvomn.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163kaxagjwo.html


<!-- 参考信息 -->