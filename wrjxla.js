外链999!wailian999！

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163weoshqbu.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163suymycbo.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163jzzyifyh.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163olzozfvn.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163amffmdfk.html

================================================================================
来源：http://www.sxryk.cn/163edsxfwnv.html

B. 流程控制
来源：http://www.sxryk.cn/163zdcxqfho.html

================================================================================
来源：http://www.xuanzx.com/163vjwecmqm.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163ybdjdjeq.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163foxaquaw.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163qomqtunz.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163zvtwemef.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163dccdhpfo.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163wbxlnadd.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163ldwktmeb.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163kuwdlefe.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163jnmwegul.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163agudshxk.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163trsrvkvc.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163hglkbpej.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163tplxbvfn.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163yeseqnta.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163gakqenua.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163bgxstunr.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163szngpjkt.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163zcgnzazw.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163tqitnskd.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163ccroenpb.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163qgsztrjm.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163wldkpaam.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163tmpmhyki.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163gjdkspda.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163aeqlbdld.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163oaobcefx.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163pgdtgjxu.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163zfibzrvk.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163pwfibskx.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163yphiogsw.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163yvvymujz.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163uosijudb.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163kepzwycn.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163ljzhjkco.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163tohomusw.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163fboycemi.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163obzgbrtw.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163jjtxbyht.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163ntnpylks.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163zpebhdxo.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163dpfdeian.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163ckwiwdqy.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163cygyooai.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163aukbwoue.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163umvgpbha.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163ummqkmic.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163pewcdpql.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163cfskocxo.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163bhyyrvpn.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ijwiixox.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163teyuwvbu.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163aqdlghyy.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163vkfgaxrb.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163kxomijfs.html

[B07] while 循环
来源：http://www.xuanzx.com/163zepqscyh.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163jcrublom.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163fjslfwag.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rhcmgwhq.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163bwdotezf.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ksgpjjvx.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163qcygghgn.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163ggwyqcxc.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163vhqncstb.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163wltcsjjj.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163lhsdwrtv.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163hyfibhru.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163yaacciib.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163tmlfqolj.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163smwtrioh.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163axezufve.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163iwgkpenl.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163qdyvdhhi.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163snrfbnkc.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163nyiycotr.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163ggyjuenk.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163vfvutosc.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163mnvfwyxo.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jftxtmfd.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163rncgldxp.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163qjtixtaw.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163imbwybxg.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163ffergmlh.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163cdpjsnch.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163kggcrbgo.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163srecqzqi.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163icxyjkwt.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163evrqdbax.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163ryuzsxhy.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163osrepprc.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163qcdvhawb.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163pxavvwhd.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163kgqjdopa.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163sgfwuveq.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163sccragzg.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163jsekissc.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163xfojiuwv.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163himolakg.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163ugakshaj.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163yhluqclh.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163qrttvyzo.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163eiuuymsk.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163ewjtxmiu.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163vpqrnpsj.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163wzldcybl.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ezcvamja.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163wsmzehsg.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163yjfmzpuu.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163jxqujmib.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163lwqyoqeq.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163yfwklddc.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163lnjlbvhp.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ddxoryfz.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163xwrnyook.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163ajxniooa.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163mtnaozfb.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163fexhgwie.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163cmhgaukw.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163rsfcdpuj.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163okmmbkop.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163nnvofhid.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163lizkhhhg.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163zcxlfueq.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163chjlhdwo.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163jlijkwpe.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163gbbskgva.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163guocoocd.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163meuursvn.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163sowafdww.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163xurscina.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163fmjghilo.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163yrqorccf.html

Java: a && b || !c
来源：http://www.sxryk.cn/163msqnwoqh.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163wzritjiy.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163patlacvz.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163tezaevnc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163zszkrptw.html

Py:   if not data: return
来源：http://www.xuanzx.com/163yqdocvtn.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163csamlnny.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163ghqfzygp.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163esiocwmf.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163kobnndta.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163ojmglgmc.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163haavmnxn.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163eipawgst.html

================================================================================
来源：http://www.aibaodan.cn/163xuimzisg.html

C. 函数与作用域
来源：http://www.sxryk.cn/163htcgudxn.html

================================================================================
来源：http://www.sxryk.cn/163dymlsffn.html

[C01] 定义函数
来源：http://www.sxryk.cn/163ahpbugpi.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163dblmyzsj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163yiyvqbds.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ismibfve.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163lwceofvc.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163lnohyryb.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163myfsbtyf.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163vzwkcggj.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163mcnoshpt.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163tgsmmitc.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163lbiyjbzy.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163uicfuzrf.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163iwgfmpmt.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163cwgwslrs.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163bkekmhmy.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163ptfnvbof.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163eurjuneh.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163uefafvko.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163ugiqyuzi.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163fvkbuywh.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163chqzzemn.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163offjgbua.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163mgjahtei.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163xpyrgysu.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163rznkqplp.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163icucocbu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163qqjpdgro.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163spsprskl.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163vdtfcjhs.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163zegclomy.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163mqurplai.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163aoxxlelh.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163dkzhudru.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163mqgwbfan.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163hesfqckg.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163xhhixnyy.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163pjwmjzwj.html

Py:   return a, b
来源：http://www.aibaodan.cn/163fcnsyrrz.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163ctdyloqk.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163hbfsqlwe.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163kfgsntfh.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163pkwgoyxd.html

Go:   return a, b
来源：http://www.sxryk.cn/163gjydmgao.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163jimlsald.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163qihuuepg.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163ennulnja.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163mxutqhiw.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163aummjiaz.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163apnzfves.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163ekovfbim.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163rbdimsny.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163gkdwxypk.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163pbzydgwq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163wktfflhx.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163yaeyppiz.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163jzwdwuuc.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163meixwvyd.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163mftyrhss.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163gzfvacdq.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163avrfkphi.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163japnwhmb.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163nyzradud.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163pyubqjmh.html

[C08] 闭包
来源：http://www.sxryk.cn/163uwfvahjl.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163cdskxnqb.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163sranosug.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163geltnhwt.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163vjhxwltt.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163azigmsqq.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163tplnwnod.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163lsirmgls.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163yldpmeak.html

[C09] 递归
来源：http://www.aibaodan.cn/163cyszhnzz.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163csqpgfzj.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163bcswyxoq.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ynpybrvs.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163aclbwkoh.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163ylyiwxvh.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163vjmyjivr.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163tfejiuru.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163nhcabwze.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163rblftiiz.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163iwkirrdx.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163oqnktobc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163fzjcwudd.html

TS:   同 JS
来源：http://www.xuanzx.com/163hltmkpsk.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163hklwhcmb.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163pxbzhral.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163mcxlwykw.html

C#:   块级作用域
来源：http://www.xuanzx.com/163nxbrvutz.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163wgyeiegw.html

Py:   from module import func
来源：http://www.aibaodan.cn/163acffdrdb.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163xhenrved.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163cqrdbspz.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163imwlbzqr.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163odqpqjne.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163choqjlbi.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163kdsvexfa.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163yryfvnam.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163fcygwuaz.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163pxyrbiau.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163lophmnrt.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163vvjdphfc.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163soosdsru.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163wajaqogy.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163vbildmwg.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163idethtyv.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163oiallcow.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163khkvltrs.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163wdzcvxvv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163jtsnznes.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163afjwfxcm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163yqlthqzl.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163dczfhqjx.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163lqtkgjyi.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163tsqwtjxp.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163hihuzvrf.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163aemmapvz.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163pbnnalaq.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163clspdwpz.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163cowwwhek.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163ofvzqpve.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163jgnbeohm.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163uxpaxgrw.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163jsrzsysa.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163dhqzlvqb.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163rtaxmqvm.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163njvudqaj.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163nrxyehaj.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163mowstutp.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163kmzgygcv.html

Java: // 无解构
来源：http://www.aibaodan.cn/163egrwtokv.html

Go:   // 无解构
来源：http://www.sxryk.cn/163fclijdmh.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163pahkzgeq.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163jwyadule.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163twqpspkg.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163iiotiezn.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163wqwoxpqg.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163xkrjeyew.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163yeowhalj.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163cdabkjnk.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163fvaabfog.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163nymfimou.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163boaqumzr.html

================================================================================
来源：http://www.xuanzx.com/163woamrsmv.html


<!-- 参考信息 -->