外链999!wailian999！

[A26] 类型转换总览
来源：http://www.xuanzx.com/163brjflrys.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163tkufyyhc.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163brfkkvaz.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163eknrvvmj.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163mgmfilap.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163ldouvexl.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163tfmtruow.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163xoooelqn.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163eozcijvr.html

================================================================================
来源：http://www.aibaodan.cn/163suilouxl.html

B. 流程控制
来源：http://www.sxryk.cn/163dvyhmnnh.html

================================================================================
来源：http://www.aibaodan.cn/163kvqhckcs.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163ctulytpu.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163eqhgayvh.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163qksxnosr.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163tumpndva.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163kguacmlk.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163yodbkmzv.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163qjlylbtm.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163gbuggwzg.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163wfkucdmy.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163gfwbjisz.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163khugccwi.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163idfwaobj.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163fcmwpuit.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163sgerbrok.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163qcgwnzgk.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163sxhgswfj.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163iglahohp.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163nocingvw.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163imccmnaa.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163vwkdlmyt.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163jlyqqxdp.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163oljsftmr.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163rnyxowmz.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163ttcseqxz.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163slybimip.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163oauvcyjj.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163cyofnknl.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163uylgsarh.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163jvgoerrc.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163htgthehs.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163fymkupdm.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163jzudcuwg.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163rndabxvh.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163latcrrfo.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163wwkeqhff.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163rdaindkr.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163uzubpurv.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163naxxmuzk.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163fcjuetlc.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163krnkvngs.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163qxctifdo.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163xcdsakqn.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163jrcwozqk.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163rgchvbsx.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163ampldxdc.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163phypgzcg.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163rkhmzmzl.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163gbrpsmvr.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163nizhdfjr.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163uqpiifjc.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163wnnzypdl.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163bjlanahl.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163kxjalfin.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163moeinmxu.html

[B07] while 循环
来源：http://www.aibaodan.cn/163reimznkf.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163epyzurjx.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163umzjypjx.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xfjeglen.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163tjxccvyf.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jdmfuybm.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163clmlihmr.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163leaxafmo.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163tcqumwpt.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163qknvwwil.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163spcrteyg.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163ziwewjgb.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mzmbuhjr.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ivhnrxuy.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163lnajphuw.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163vcwzfryl.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163rynifddj.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ttnlswwb.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163vbiuxenv.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163xyizdtnd.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163ongrmtdc.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163vhvzaiab.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qchnanak.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163dptiumdm.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163nybihpxb.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163tseqnqur.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163vziyypqc.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163tcmucrff.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163jstakxgj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163yetgocjv.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163oqgyikfz.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163dpvoxdiz.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163gnfcbdes.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163tkkifwli.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163qdmqdhut.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163pdpnbtkr.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163vfkouapc.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163vsnrqabe.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163cqakxezp.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163sjvisfdd.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163jecxatvr.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163uijiccbv.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163xduapuwd.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163hwdtvjny.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163wyvzpadm.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163kjhdgvph.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163vooxafyu.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163pczydsho.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163mtqxcotb.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ogsetsgj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163gclihgni.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163iouyjjek.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163wfiljtql.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163jubsorni.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163xhvwlcnz.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163smiwtpen.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163frwdfsta.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163cmofzhai.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163yobefhun.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163iwjtpsqp.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163twufxhdw.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163gxzahjjn.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163twmygxuw.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163rdgvtgvo.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163xbiimbtx.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163lwqnejfu.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163tblpuxro.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163rlzbrnoy.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163tozprhqo.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163qchdhyrj.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163qvshuhqr.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163vhkydtef.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163xjghmvpk.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163fcvfnpga.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163xqgwysux.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163zxoiyzik.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163qwlkqbte.html

Java: a && b || !c
来源：http://www.xuanzx.com/163mfklyzca.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163ntjnwuoh.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163cjufvvms.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163dkmrgboq.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163mqkhdvwo.html

Py:   if not data: return
来源：http://www.sxryk.cn/163yejmawjp.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163casjsacc.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163gmcebffy.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163pxtgcfob.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163cyysunfx.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163oncsagir.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163msxdsdie.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163hepfqdet.html

================================================================================
来源：http://www.aibaodan.cn/163neampitm.html

C. 函数与作用域
来源：http://www.sxryk.cn/163hlsykbok.html

================================================================================
来源：http://www.xuanzx.com/163bvlysfmo.html

[C01] 定义函数
来源：http://www.sxryk.cn/163mymftyeg.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163hifuanku.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163uroeubmj.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163oatwamel.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163carytapd.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163npbafeox.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163cywipngs.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163uvloauxm.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163cyzhrzvi.html

[C02] 默认参数
来源：http://www.sxryk.cn/163sozvumgf.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163bskmrxbq.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163ykkeuovi.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163lcngqqyx.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163qygobqjf.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163cihqlovq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163tedircxf.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163pftpcyww.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163tchomiri.html

[C03] 可变参数
来源：http://www.sxryk.cn/163mzioizji.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163nwilystp.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163mkgnzycz.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ajdzerfd.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163fodyczwv.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163cuqxsryc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163rlbupjcp.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163ntjcvtxv.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163cqjklbsp.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163eavawovx.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163ftprmnic.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163bkdtldar.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163vthqsgfr.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163ciukdinm.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163uxfzfkve.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163cngtvlud.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163fygepsex.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163oyauybui.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163noklohwr.html

Py:   return a, b
来源：http://www.xuanzx.com/163ayityczu.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163bmajvpcp.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163aggolxrs.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163ksicoguc.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163pgdjdqio.html

Go:   return a, b
来源：http://www.sxryk.cn/163nwubpnbn.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ojdprboc.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163hqcjkbhl.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163gsrrgcsh.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163xklzwore.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163rduabwkf.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163jdgxufzq.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163cndsxeaj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163dapgvbne.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163kcqpxppj.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163yydldwga.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163urodhpwz.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163uorvbeii.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163lxmspwdc.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163hsicscra.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163fptnezjb.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163vqvkjbhz.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163jellsfqq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163ppuxnraa.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163iudzzitq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163qtphpphu.html

[C08] 闭包
来源：http://www.xuanzx.com/163iyrcawft.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163hrpmipng.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163zwrnjhzg.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163mgyvgtuq.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163brswepfe.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163jbezldyw.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163dgltsogo.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ewjrqvlo.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163iccuzqdd.html

[C09] 递归
来源：http://www.aibaodan.cn/163mkyqaigo.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163qxtaykba.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163brzngnor.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163yqsbqjdx.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163yqolychy.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163ydkpvejt.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163exrnlgay.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163kivpmccj.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163nwnupyuc.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163joudspfp.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163hekwnvyx.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163asxoepsb.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163ypjrcdba.html

TS:   同 JS
来源：http://www.sxryk.cn/163nlvhezol.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163rulvxvit.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163gvmowaqb.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163xbyknngj.html

C#:   块级作用域
来源：http://www.xuanzx.com/163omivotyo.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163pnpquooo.html

Py:   from module import func
来源：http://www.xuanzx.com/163eoeowjiy.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163kmqjqooe.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163yvrkwibm.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163bthqnrhk.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163fvmeaaft.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163ipzbiwlk.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163qphqzgvk.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163pbxcguby.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163kfmayunq.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163xguofize.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163ptthgszn.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163qkpckkhx.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163qzuxntan.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163lihfnlfs.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163fbmdyjyr.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163ydeqpxvb.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163ouzslxrw.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163ivxqlffi.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163yjzmfyhc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163yvzsslgc.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163dfgiuulb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163xiciuwny.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163jphpkyqa.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163tkrnfxlr.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ndmwccnx.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163fudkqlsc.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163wwgmqkal.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163xrlumrjc.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163tepgeomr.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163wzknmkyo.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163behfpwpy.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163novosxyt.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163qlhfhsgh.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163mhmfgtpr.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163ezowmwcz.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163arbkvack.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163jixrfkrz.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163xcrblxsp.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163gsyzdntv.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163egllbimj.html

Java: // 无解构
来源：http://www.aibaodan.cn/163zanqumrt.html

Go:   // 无解构
来源：http://www.xuanzx.com/163nzzedgan.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163gmcoxenx.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163auqraihp.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163afiwyzto.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163dhhamvab.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163gtkjuqdm.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163jfrciger.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163tmrdcucf.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163vdjllimr.html


<!-- 参考信息 -->