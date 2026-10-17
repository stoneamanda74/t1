外链999!wailian999！

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163fvtldcxi.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163wyluboxa.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163cmukkeep.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163xpadcdeb.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163jclhrglf.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163zqltdbws.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163doizzjqk.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163rwipjttg.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163rzfvlpzd.html

================================================================================
来源：http://www.xuanzx.com/163txmdovat.html

B. 流程控制
来源：http://www.xuanzx.com/163hbvnqadx.html

================================================================================
来源：http://www.xuanzx.com/163qxfbghoq.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163qwfxskap.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163mmrstzea.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163zlbsjnap.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hdwtuqym.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163nvbvytpe.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163zvmnxurf.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163ofebichh.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163xhnzfqxh.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163pmdfpchu.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163xtrgnhvr.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163iiicmxfe.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163iiopcboj.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163cuqsqfcx.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163gjwddtxy.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163hbozjdvk.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163ownpyvhd.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163darslpqc.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163eugdefsj.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163rfstsiev.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163yeltngkw.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163hwbmqcyr.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163mpwdaafi.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163lqsbvwyl.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163mozhmdkr.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163nzgexnwp.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163vkezdnvu.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163qshrrjyz.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163eaqizwui.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163yecayvfa.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163vviwhpsz.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163dhnidwcb.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ljclbqbe.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163fqmycvxr.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163pmylweeo.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163milrbyth.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163ejkwtnkh.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163qxfwbqcs.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163wzdwiuds.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163kjjzvmxp.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163tsobbidk.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163siwjswmg.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163atbqaikj.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163hhqlqubn.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163oanvkscs.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163uzychhwe.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163cqdweryg.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163zjidhoxn.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163wokspubh.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163oguurhzd.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163karbqykd.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163rijzmlfe.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163jwbeecmn.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163tixeyshi.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163kjhfvrmu.html

[B07] while 循环
来源：http://www.aibaodan.cn/163gbqekjpx.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163fohbjwpp.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163ymkjewwv.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163nsuygdgy.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163llrszljp.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163vnonsabq.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163rdovtenl.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163uuznyvdx.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163xtveykha.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163xxgiipsy.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163ovyfebwv.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163patqfiyr.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ristpsgr.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163uflgmagk.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163emxsjgso.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163hktovcqc.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163debnriup.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163cbxtmiit.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163ypapgkfw.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163plipaobe.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163mdotbcrj.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163hibcehil.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163sxmtnidh.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163cfreympd.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163dlqqpwji.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163qvtaziuz.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163mdbqhvtk.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163riqmdjjg.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163ltsnievh.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163bsrvsohn.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163xjdntgzk.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163wehfhocf.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163snhjrgba.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163tygpujqv.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163blophgly.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163khhmofmu.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163jnusflqo.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163gsypgotq.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163xlemolmh.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163hwlcieeg.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ecezupgq.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163oihucyzi.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163lxsdokrn.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163oflyldjm.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163urcslkyu.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163tyzuzhnv.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163ldbihzrn.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163jzgcmssi.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163chnzmhpd.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163yexjmkze.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163nculvlht.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163snbdkjog.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163huhivqfe.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163cxvmeadw.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163zpmxhfiu.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163icmomusu.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163obuoynko.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163isnwomgz.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163tvjaefky.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163humgyxlm.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163jhfueiku.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163sxdgblif.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163nzbastoz.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163ihubnizp.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163lstxfebr.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163gvmewuuv.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163varovkfu.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163wqztbjgj.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163mewncezt.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163fmrwdcty.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163airvjdhi.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163iyujypxo.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163wuheygci.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163otlxakux.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163egzvvllp.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163lcsssram.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163mqfjjjwa.html

Java: a && b || !c
来源：http://www.sxryk.cn/163irzoebmt.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163gxihuniq.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163irzwvayn.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163hvwasciq.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163snjyczrj.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163lraqbeib.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163gqjfeqmw.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163qlpwdevg.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163umecohia.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163rknnbbmp.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163odvdocdy.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163tfxvttyf.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163ciwhqtwh.html

================================================================================
来源：http://www.aibaodan.cn/163ccnvbucb.html

C. 函数与作用域
来源：http://www.sxryk.cn/163hoehvyyt.html

================================================================================
来源：http://www.sxryk.cn/163xaouznlp.html

[C01] 定义函数
来源：http://www.sxryk.cn/163iwvnlznc.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163umsycaxa.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163qhybttzj.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163dtbcnyvt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163iydrliui.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ujhpdbga.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163hdpzzsjr.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163apkcthzz.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163vkdalzgz.html

[C02] 默认参数
来源：http://www.xuanzx.com/163cqhikxgc.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163tqzbacnl.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163ssyqdfgd.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163exgaeapp.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163epjgcidh.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163qmichicj.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163kuvwwxgp.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163vxidpdpi.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163yeatxkte.html

[C03] 可变参数
来源：http://www.xuanzx.com/163iyvfwahq.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163gryvkknf.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163zxkyjgmk.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163bemvlihr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ttgpmxrf.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163adayfymn.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163ihlelftw.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163gfmsjwbh.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163oeqnephv.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163jfjmxfas.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163bwxersux.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163snwjjwgf.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163fyvzltlb.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163vrvlvhik.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163uakbwwsp.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163prtmvhwh.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163tlqcprtx.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ckwazkxb.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163igamocqy.html

Py:   return a, b
来源：http://www.sxryk.cn/163hksljbep.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163ufovijwx.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163vhjxxoed.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163bslzmipk.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163mcgvbhrl.html

Go:   return a, b
来源：http://www.sxryk.cn/163bgvrgdmg.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163wpqefylw.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163ofwckiuv.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163wikskfyo.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163jgcygjor.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163awwgwyny.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163qhuqmisb.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163uibiuxhb.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163xfiedtfv.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163oepndaic.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163qigdziha.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163qfuslcdd.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163rqzssdhr.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163wqmtagta.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163nylpdlrz.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163lgarfpic.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163ynawpwuo.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163mekrqzpz.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163exrwkemb.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163flejywxa.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163lxtcrobx.html

[C08] 闭包
来源：http://www.xuanzx.com/163swsqetaq.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163nckbbcxq.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163xyifqldo.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163tsmdejkk.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163nhkrjeki.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163rmlklxdd.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163oncczqtu.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163pgewuqsp.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163lhbojirq.html

[C09] 递归
来源：http://www.aibaodan.cn/163shjlipdc.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163rmwohsbo.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163lcgzakhe.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163gnnehdph.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163gbhpnsuu.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163csnbtlzs.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163ctykxglr.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163nligyoip.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163wbkycrvg.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163lrszyslk.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163asvcowqo.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163okbdgscu.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163abiefcur.html

TS:   同 JS
来源：http://www.sxryk.cn/163tkzxziwg.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163ougwiibd.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163vzjfxiwj.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163flocusbe.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163bwvbbbhi.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163dvmiwasl.html

Py:   from module import func
来源：http://www.xuanzx.com/163ypszdfrn.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163tuimdzkf.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163amiirxyp.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163ezinmphu.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163ylkhlmsn.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163cwilydji.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163ntbvcuxp.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163bklpcnpl.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163dahjmchp.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163mzjrzxkc.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163txpufofa.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163kzsvmjxd.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163asagotkm.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163wdppounl.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163ltsxslur.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163nmrppvbl.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163nnqioged.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163xkvtozek.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163qgyiuooq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ksytdzyc.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163erfnqfac.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163bbrifben.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163eyabimuk.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163qnxiitde.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163cntswasn.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163tdnlztma.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163lphxiobl.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163gojwvoav.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163whmyfjaw.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163fllsxcyg.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163cbhvcaeb.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163vcvxotsv.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163yrlctbkw.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163ewyycoay.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163xzjujsgi.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163hicjzjau.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163qsncbrcp.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163rckkdriw.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163eykhvvsc.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163tcukipll.html

Java: // 无解构
来源：http://www.xuanzx.com/163rrfosuiz.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163hzxovfpk.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163dzffqher.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163fvutcxxh.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163dkouhqoe.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163wtzxvcrx.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163owgiymtg.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163lsmrkwza.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163ilwhqeda.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163jorawrki.html


<!-- 参考信息 -->